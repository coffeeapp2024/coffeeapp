import {
  doc,
  collection,
  getDocs,
  updateDoc,
  deleteDoc,
  getDoc,
  query,
  where,
  onSnapshot,
  writeBatch,
  FieldValue,
  deleteField,
} from "firebase/firestore";
import { db } from "./firebase";

export async function resetCollectionData(
  collectionName: string,
  dataArray: any[]
) {
  try {
    // Delete all documents in the collection
    await deleteAllDocumentsInCollection(collectionName);

    // Add new documents to the collection
    await addDocumentsToCollection(collectionName, dataArray);

    console.log(`Collection ${collectionName} reset successfully`);
  } catch (error) {
    console.error(`Error resetting collection ${collectionName}:`, error);
    throw error;
  }
}

export async function deleteAllDocumentsInCollection(collectionName: string) {
  try {
    const collectionRef = collection(db, collectionName);
    const querySnapshot = await getDocs(collectionRef);
    const batch = writeBatch(db);
    querySnapshot.forEach((doc) => {
      batch.delete(doc.ref);
    });

    await batch.commit();
    console.log(`All documents deleted from collection ${collectionName}`);
  } catch (error) {
    console.error(
      `Error deleting documents from collection ${collectionName}:`,
      error
    );
    throw error;
  }
}

export async function addDocumentsToCollection(
  collectionName: string,
  dataArray: any[]
) {
  try {
    const collectionRef = collection(db, collectionName);
    const batch = writeBatch(db);

    dataArray.forEach((data) => {
      const docRef = doc(collectionRef);
      batch.set(docRef, data);
    });

    await batch.commit();
    console.log(
      `Added ${dataArray.length} documents to collection ${collectionName}`
    );
  } catch (error) {
    console.error(
      `Error adding documents to collection ${collectionName}:`,
      error
    );
    throw error;
  }
}

// Cập nhật một tài liệu trong một bộ sưu tập
export async function updateDocumentInCollection(
  collectionName: string,
  docId: string,
  newData: any
) {
  try {
    const docRef = doc(db, collectionName, docId);
    await updateDoc(docRef, newData);
    console.log(
      `Document ${docId} updated successfully in collection ${collectionName}`
    );
  } catch (error) {
    console.error(
      `Error updating document ${docId} in collection ${collectionName}:`,
      error
    );
    throw error;
  }
}

export async function updateKeyInDocument(
  collectionName: string,
  docId: string,
  keyToUpdate: string,
  newValue: any
) {
  try {
    // Get a reference to the document
    const docRef = doc(db, collectionName, docId);

    // Construct the update object with the specific field path and new value
    const updateData = {
      [keyToUpdate]: newValue,
    };

    // Update the document with the new data
    await updateDoc(docRef, updateData);

    console.log(
      `Key ${keyToUpdate} updated successfully in document ${docId} in collection ${collectionName}`
    );
  } catch (error) {
    console.error(
      `Error updating key ${keyToUpdate} in document ${docId} in collection ${collectionName}:`,
      error
    );
    throw error;
  }
}

// Lấy một tài liệu cụ thể từ một bộ sưu tập dựa trên ID của nó
export async function getDocumentById(collectionName: string, docId: string) {
  try {
    const docRef = doc(db, collectionName, docId);
    const docSnapshot = await getDoc(docRef);
    return docSnapshot.exists() ? docSnapshot.data() : null;
  } catch (error) {
    console.error(
      `Error fetching document ${docId} from collection ${collectionName}:`,
      error
    );
    throw error;
  }
}

// Xóa một tài liệu cụ thể từ một bộ sưu tập dựa trên ID của nó
export async function deleteDocumentById(
  collectionName: string,
  docId: string
) {
  try {
    const docRef = doc(db, collectionName, docId);
    await deleteDoc(docRef);
    console.log(
      `Document ${docId} deleted successfully from collection ${collectionName}`
    );
  } catch (error) {
    console.error(
      `Error deleting document ${docId} from collection ${collectionName}:`,
      error
    );
    throw error;
  }
}

// Lấy tất cả dữ liệu từ một bộ sưu tập
export async function fetchCollectionData(collectionName: string) {
  try {
    const collectionRef = collection(db, collectionName);
    const querySnapshot = await getDocs(collectionRef);
    const collectionData: any = [];
    querySnapshot.forEach((doc) => {
      collectionData.push({ id: doc.id, ...doc.data() });
    });
    console.log(
      `Fetched data from collection ${collectionName}:`,
      collectionData
    );
    return collectionData;
  } catch (error) {
    console.error(
      `Error fetching data from collection ${collectionName}:`,
      error
    );
    throw error;
  }
}

export async function getKeyValue(
  collectionName: string,
  docId: string,
  key: string
) {
  try {
    const docRef = doc(db, collectionName, docId);
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
      const data = docSnapshot.data();
      if (data && data[key] !== undefined) {
        // Return the value of the specified key
        return data[key];
      } else {
        console.error(`Key ${key} does not exist in document ${docId}`);
        return null;
      }
    } else {
      console.error(
        `Document ${docId} does not exist in collection ${collectionName}`
      );
      return null;
    }
  } catch (error) {
    console.error(
      `Error fetching document ${docId} from collection ${collectionName}:`,
      error
    );
    throw error;
  }
}

export async function findValueByKeyWithCondition(
  collectionName: string,
  conditionKey: string,
  conditionValue: any,
  targetKey: string
) {
  try {
    const collectionRef = collection(db, collectionName);
    const q = query(collectionRef, where(conditionKey, "==", conditionValue));
    const querySnapshot = await getDocs(q);

    let value = null;

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      if (data && data[targetKey] !== undefined) {
        // If the target key exists in the document, assign its value to 'value'
        value = data[targetKey];
      }
    });
    console.log(
      `Value of key ${targetKey} with condition ${conditionKey}=${conditionValue} in collection ${collectionName}:`,
      value
    );
    return value;
  } catch (error) {
    console.error(
      `Error finding value of key ${targetKey} with condition ${conditionKey}=${conditionValue} in collection ${collectionName}:`,
      error
    );
    throw error;
  }
}

export async function findDocumentsWithCondition(
  collectionName: string,
  conditionKey: string,
  conditionValue: any
) {
  try {
    const collectionRef = collection(db, collectionName);
    const q = query(collectionRef, where(conditionKey, "==", conditionValue));
    const querySnapshot = await getDocs(q);

    const documents: any = [];

    querySnapshot.forEach((doc) => {
      documents.push({ id: doc.id, ...doc.data() });
    });

    console.log(
      `Documents with ${conditionKey}=${conditionValue} in collection ${collectionName}:`,
      documents
    );
    return documents;
  } catch (error) {
    console.error(
      `Error finding documents with condition ${conditionKey}=${conditionValue} in collection ${collectionName}:`,
      error
    );
    throw error;
  }
}

export async function renameCollection(
  oldCollectionName: string,
  newCollectionName: string
) {
  try {
    // 1. Query all documents from the old collection
    const documents = await fetchCollectionData(oldCollectionName);

    // 2. Delete the old collection
    await deleteCollection(oldCollectionName);

    // 3. Add documents to the new collection
    await addDocumentsToCollection(newCollectionName, documents);

    console.log(
      `Collection ${oldCollectionName} renamed to ${newCollectionName}`
    );
  } catch (error) {
    console.error("Error renaming collection:", error);
  }
}

export async function deleteCollection(collectionName: string) {
  try {
    const collectionRef = collection(db, collectionName);
    const querySnapshot = await getDocs(collectionRef);

    const batch = writeBatch(db);
    querySnapshot.forEach((doc) => {
      batch.delete(doc.ref);
    });

    await batch.commit();
    console.log(`Collection ${collectionName} deleted successfully`);
  } catch (error) {
    console.error(`Error deleting collection ${collectionName}:`, error);
    throw error;
  }
}

export async function renameKeyInCollection(
  collectionName: string,
  oldKey: string,
  newKey: string
) {
  try {
    // Lấy tất cả các tài liệu từ bộ sưu tập
    const documents = await fetchCollectionData(collectionName);

    // Duyệt qua từng tài liệu và cập nhật key cũ thành key mới
    for (const document of documents) {
      // Kiểm tra xem tài liệu có chứa key cũ không
      if (document.hasOwnProperty(oldKey)) {
        // Tạo một object mới chứa key mới và giữ nguyên các key cũ khác
        const newData = { ...document };
        newData[newKey] = newData[oldKey];
        delete newData[oldKey];

        // Cập nhật tài liệu với dữ liệu mới
        await updateDocumentInCollection(collectionName, document.id, newData);
      }
    }

    console.log(
      `Key "${oldKey}" renamed to "${newKey}" in all documents of collection ${collectionName}`
    );
  } catch (error) {
    console.error(
      `Error renaming key "${oldKey}" in collection ${collectionName}:`,
      error
    );
    throw error;
  }
}

export async function updateDocumentByKeyCondition(
  collectionName: string,
  conditionKey: string,
  conditionValue: any,
  updateData: any
) {
  try {
    // Query documents in the collection based on the condition
    const collectionRef = collection(db, collectionName);
    const q = query(collectionRef, where(conditionKey, "==", conditionValue));
    const querySnapshot = await getDocs(q);

    // Update each document that matches the condition
    const batch = writeBatch(db);
    querySnapshot.forEach((doc) => {
      batch.update(doc.ref, updateData);
    });

    // Commit the batch update
    await batch.commit();

    console.log(
      `Documents in collection ${collectionName} updated based on condition ${conditionKey}=${conditionValue}`
    );
  } catch (error) {
    console.error(
      `Error updating documents in collection ${collectionName} based on condition ${conditionKey}=${conditionValue}:`,
      error
    );
    throw error;
  }
}

export async function deleteKeyInDocument(
  collectionName: string,
  docId: string,
  keyToDelete: string
) {
  try {
    // Get a reference to the document
    const docRef = doc(db, collectionName, docId);

    // Retrieve the current document data
    const docSnapshot = await getDoc(docRef);

    // Check if the document exists
    if (docSnapshot.exists()) {
      // Create an update object with the key to delete set to deleteField()
      const updateData = {
        [keyToDelete]: deleteField(),
      };

      // Update the document to delete the key
      await updateDoc(docRef, updateData);

      console.log(
        `Key ${keyToDelete} deleted successfully from document ${docId} in collection ${collectionName}`
      );
    } else {
      console.error(
        `Document ${docId} does not exist in collection ${collectionName}`
      );
    }
  } catch (error) {
    console.error(
      `Error deleting key ${keyToDelete} in document ${docId} from collection ${collectionName}:`,
      error
    );
    throw error;
  }
}

export async function deleteKeyInAllDocuments(
  collectionName: string,
  keyToDelete: string
) {
  try {
    // Get all documents in the collection
    const collectionRef = collection(db, collectionName);
    const querySnapshot = await getDocs(collectionRef);

    // Iterate through each document
    const batch = writeBatch(db);
    querySnapshot.forEach((doc) => {
      // Get a reference to the document
      const docRef = doc.ref;

      // Create an update object with the key to delete set to deleteField()
      const updateData = {
        [keyToDelete]: deleteField(),
      };

      // Update the document to delete the key
      batch.update(docRef, updateData);
    });

    // Commit the batch update
    await batch.commit();

    console.log(
      `Key ${keyToDelete} deleted successfully from all documents in collection ${collectionName}`
    );
  } catch (error) {
    console.error(
      `Error deleting key ${keyToDelete} in all documents from collection ${collectionName}:`,
      error
    );
    throw error;
  }
}

export function listenForKeyChangeInDoc(
  collectionName: string,
  docId: string,
  keyToWatch: string,
  callback: (newValue: any) => void
) {
  try {
    const docRef = doc(db, collectionName, docId);

    // Listen for snapshot changes to the document
    const unsubscribe = onSnapshot(docRef, (docSnapshot) => {
      if (docSnapshot.exists()) {
        const data = docSnapshot.data();
        if (data && data[keyToWatch] !== undefined) {
          // If the watched key exists in the document, invoke the callback with its new value
          callback(data[keyToWatch]);
        }
      } else {
        // Document doesn't exist
        console.error(
          `Document ${docId} does not exist in collection ${collectionName}`
        );
      }
    });

    // Return the unsubscribe function to stop listening
    return unsubscribe;
  } catch (error) {
    console.error(
      `Error listening for key ${keyToWatch} change in document ${docId} from collection ${collectionName}:`,
      error
    );
    throw error;
  }
}
