import React from "react";
import PostList from "./PostList";
import UploadPostDialog from "./UploadPostDialog";
import UploadCheckinDialog from "./UploadCheckinDialog";

function Gallery() {
  return (
    <div className="w-full">
      <div className="flex items-center gap-x-2 pr-2 mb-2">
        <h3 className="font-bold text-2xl text-white">Check in Gallery</h3>
      </div>
      <PostList />
      <div className="flex items-center justify-center">
        <UploadCheckinDialog />
      </div>
    </div>
  );
}

export default Gallery;
