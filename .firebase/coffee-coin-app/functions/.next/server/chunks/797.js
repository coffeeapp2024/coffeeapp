exports.id=797,exports.ids=[797],exports.modules={67068:(e,t,r)=>{Promise.resolve().then(r.bind(r,7265)),Promise.resolve().then(r.bind(r,55882))},50058:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2583,23)),Promise.resolve().then(r.t.bind(r,26840,23)),Promise.resolve().then(r.t.bind(r,38771,23)),Promise.resolve().then(r.t.bind(r,13225,23)),Promise.resolve().then(r.t.bind(r,9295,23)),Promise.resolve().then(r.t.bind(r,43982,23))},7265:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var o=r(95344),n=r(8853),a=r(3729);let s=function(){let[e,t]=(0,a.useState)(!1),r=(0,a.useRef)(null);return(0,a.useEffect)(()=>{let e=e=>{e.preventDefault(),r.current=e,t(!0)};return window.addEventListener("beforeinstallprompt",e),()=>{window.removeEventListener("beforeinstallprompt",e)}},[]),o.jsx(o.Fragment,{children:e&&(0,o.jsxs)("button",{onClick:()=>{r.current&&(r.current.prompt(),r.current.userChoice.then(e=>{"accepted"===e.outcome?(console.log("App installed"),t(!1)):console.log("App installation declined")}))},className:"fixed top-28 left-1/2 -translate-x-1/2 rounded-3xl bg-neutral-900 text-white font-semibold py-3 px-6 z-50 flex items-center justify-center gap-x-2 shadow-sm active:scale-95 transition-transform",children:[o.jsx(n.Z,{className:"w-5 h-5"}),o.jsx("span",{children:"Install App"})]})})}},55882:(e,t,r)=>{"use strict";r.r(t),r.d(t,{Toaster:()=>s});var o=r(95344),n=r(99558),a=r(34755);let s=({...e})=>{let{theme:t="system"}=(0,n.F)();return o.jsx(a.x,{theme:t,className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-white group-[.toaster]:text-gray-950 group-[.toaster]:border-gray-200 group-[.toaster]:shadow-lg dark:group-[.toaster]:bg-gray-950 dark:group-[.toaster]:text-gray-50 dark:group-[.toaster]:border-gray-800",description:"group-[.toast]:text-gray-500 dark:group-[.toast]:text-gray-400",actionButton:"group-[.toast]:bg-gray-900 group-[.toast]:text-gray-50 dark:group-[.toast]:bg-gray-50 dark:group-[.toast]:text-gray-900",cancelButton:"group-[.toast]:bg-gray-100 group-[.toast]:text-gray-500 dark:group-[.toast]:bg-gray-800 dark:group-[.toast]:text-gray-400"}},...e})}},87521:(e,t,r)=>{"use strict";r.d(t,{Ap:()=>c,I8:()=>l,db:()=>u,tO:()=>d});var o=r(76041),n=r(48414),a=r(33508),s=r(73424);let i=(0,o.ZF)({apiKey:"AIzaSyC5L-FI5QWb_uDeUdEbeSEmpMwAr9P8ze4",authDomain:"coffee-coin-app.firebaseapp.com",projectId:"coffee-coin-app",storageBucket:"coffee-coin-app.appspot.com",messagingSenderId:"53756991092",appId:"1:53756991092:web:abb9e522247df5f0f6e321",measurementId:"G-PV6MFHBST4"}),l=(0,a.v0)(i),c=new a.hJ,u=(0,n.ad)(i),d=(0,s.cF)(i)},65365:(e,t,r)=>{"use strict";r.d(t,{FG:()=>j,FQ:()=>g,Pv:()=>f,XX:()=>v,YA:()=>L,Yh:()=>N,a4:()=>I,ck:()=>b,n8:()=>w,t7:()=>y,uL:()=>m,vL:()=>J,vV:()=>T,vz:()=>P,wY:()=>x,x4:()=>U,zS:()=>k});var o=r(48414),n=r(87521),a=r(73424);let s=(0,o.hJ)(n.db,"users"),i=(0,o.hJ)(n.db,"contents"),l=(0,o.hJ)(n.db,"keys"),c=(0,o.hJ)(n.db,"vouchers"),u=(0,o.hJ)(n.db,"game_random_voucher"),d=(0,o.hJ)(n.db,"levels"),p=(0,o.hJ)(n.db,"products"),h=(0,o.hJ)(n.db,"productTags");async function m(e){let t=(0,o.JU)(s,e.uid);try{if((await (0,o.QT)(t)).exists()||!e.email||!e.displayName)return console.error("User data already exists or user data is incomplete"),null;{let r={email:e.email,displayName:e.displayName,coin:0,balance:.1,startTimeMine:null,endTimeMine:null,voucherIdList:[],LikedEventImageIdList:[],LikedCheckinImageIdList:[]};return await (0,o.pl)(t,r),r}}catch(e){throw console.error("Error creating user data:",e),e}}async function g(e){let t=(0,o.JU)(s,e);try{let e=await (0,o.QT)(t);if(e.exists())return e.data();return console.log("User data not found"),null}catch(e){throw console.error("Error fetching user data:",e),e}}async function f(e,t){let r=(0,o.JU)(s,e);try{await (0,o.pl)(r,t,{merge:!0}),console.log("User data updated successfully")}catch(e){throw console.error("Error updating user data:",e),e}}async function y(e){let t=[];try{for(let r=0;r<e;r++){let e=(0,o.JU)(l),r=e.id;await (0,o.pl)(e,{key:r}),t.push(r)}return t}catch(e){throw console.error("Error generating and saving keys:",e),e}}async function b(){try{let e=await (0,o.PL)(l),t=[];return e.forEach(e=>{let r=e.id;t.push(r)}),t}catch(e){throw console.error("Error fetching keys from Firestore:",e),e}}async function w(e){try{await (0,o.oe)((0,o.JU)(l,e)),console.log("Key deleted successfully:",e)}catch(e){throw console.error("Error deleting key from Firestore:",e),e}}async function x(){try{let e=await (0,o.PL)(c),t=[];return e.forEach(e=>{t.push({id:e.id,...e.data()})}),t}catch(e){throw console.error("Error fetching vouchers from Firestore:",e),e}}async function v(){try{let e=await (0,o.PL)(u),t=[];return e.forEach(e=>{t.push({id:e.id,...e.data()})}),t}catch(e){throw console.error("Error fetching cases from Firestore:",e),e}}async function U(){try{let e=await (0,o.PL)(d),t=[];return e.forEach(e=>{t.push({id:e.id,...e.data()})}),t}catch(e){throw console.error("Error fetching levels from Firestore:",e),e}}function k(e,t){let r=(0,o.JU)(s,e);try{return(0,o.cf)(r,e=>{if(e.exists()){let r=e.data().voucherIdList||[];t(r)}else console.log("User data not found")})}catch(e){throw console.error("Error listening for voucherIdList changes:",e),e}}async function E(e,t){try{let r=(0,a.iH)(n.tO,`${t}/${e.name}`),o=await (0,a.B0)(r,e);return await (0,a.Jt)(o.ref)}catch(e){throw console.error("Error uploading image to Firebase Storage:",e),e}}async function I(e,t,r,a){try{let s=await E(e,a);return{id:(await (0,o.ET)((0,o.hJ)(n.db,a),{userEmail:r,userId:t,imageURL:s,likedNumber:0})).id,userEmail:r,userId:t,imageURL:s,likedNumber:0}}catch(e){throw console.error("Error uploading image and adding to collection:",e),e}}async function P(e,t,r){try{if(!e){console.error("Error updating liked number: ID is empty");return}let a=(0,o.JU)((0,o.hJ)(n.db,r),e);await (0,o.r7)(a,{likedNumber:t}),console.log("Liked number updated successfully.")}catch(e){throw console.error("Error updating liked number:",e),e}}async function L(e){try{let t=await (0,o.PL)((0,o.hJ)(n.db,e)),r=[];return t.forEach(e=>{let t=e.data(),o={id:e.id,userEmail:t.userEmail??null,userId:t.userId??null,imageURL:t.imageURL??null,likedNumber:t.likedNumber??0};r.push(o)}),r}catch(e){throw console.error("Error fetching post images:",e),e}}async function J(){try{let e=await (0,o.PL)(p),t=[];return e.forEach(e=>{let r=e.data(),o={id:e.id,img:r.img,name:r.name,price:r.price,tags:r.tags};t.push(o)}),t}catch(e){throw console.error("Error fetching products from Firestore:",e),e}}async function j(){try{let e=await (0,o.PL)(h),t=[];return e.forEach(e=>{let r=e.data();if(r.name&&r.tag){let e={name:r.name,tag:r.tag};t.push(e)}}),t}catch(e){throw console.error("Error fetching product tags from Firestore:",e),e}}async function N(){try{let e=await (0,o.QT)((0,o.JU)(i,"shopPage"));if(!e.exists())return console.log("Document 'shop' does not exist"),null;{let t=e.data(),r=t?.banner;if(r)return console.log("Banner fetched"),r;return console.log("Banner not found in shop content"),null}}catch(e){throw console.error("Error fetching shop content:",e),e}}async function T(e,t,r){try{let n=(0,o.JU)(s,e),a=await (0,o.QT)(n);if(a.exists()){let{voucherIdList:o}=a.data();if(!o||r>=o.length)throw Error("Invalid index or missing voucherIdList");o.splice(r,1),await f(e,{voucherIdList:o}),console.log(`Voucher ID ${t} deleted successfully from user ${e}`)}else console.log(`User ${e} not found`)}catch(e){throw console.error("Error deleting voucher ID from user:",e),e}}},22105:(e,t,r)=>{"use strict";r.d(t,{Bv:()=>g,Ep:()=>l,Kk:()=>i,MB:()=>f,OX:()=>y,Q6:()=>u,U:()=>p,Uc:()=>s,Ur:()=>c,aD:()=>m,bL:()=>n,dk:()=>w,jc:()=>b,ny:()=>h,xE:()=>a});var o=r(43158);let n=(0,o.Ue)(e=>({userData:null,userId:null,role:null,setUserData:t=>e({userData:t}),setUserId:t=>e({userId:t}),setRole:t=>e({role:t})})),a=(0,o.Ue)(e=>({homePageContent:null,setHomePageContent:t=>e({homePageContent:t})})),s=(0,o.Ue)(e=>({remainingTimeSeconds:null,setRemainingTimeSeconds:t=>e({remainingTimeSeconds:t})})),i=(0,o.Ue)(e=>({currentCoin:null,setCurrentCoin:t=>e({currentCoin:t})})),l=(0,o.Ue)(e=>({vouchers:null,setVouchers:t=>e({vouchers:t})})),c=(0,o.Ue)(e=>({cases:null,setCases:t=>e({cases:[...t]})})),u=(0,o.Ue)(e=>({levels:null,setLevels:t=>e({levels:t})}));function d(e,t){return(0,o.Ue)(r=>({name:e,posts:t,setName:e=>r({name:e}),setPosts:e=>r({posts:e}),addPost:async e=>{r(t=>({posts:[e,...t.posts]}))},setLikedNumber:async(e,t)=>{let o;return r(r=>{let n=r.posts.map(r=>r.id===e?{...r,likedNumber:(r.likedNumber??0)+(t?1:-1)}:r);return o=n.find(t=>t.id===e)?.likedNumber,{...r,posts:n}}),o??0}}))}let p=d("eventImages",[]),h=d("checkinImages",[]),m=(0,o.Ue)(e=>({products:null,setProducts:t=>e({products:t})})),g=(0,o.Ue)(e=>({productTags:null,currentTag:"all",setProductTags:t=>e({productTags:t}),setCurrentTag:t=>e({currentTag:t})})),f=(0,o.Ue)(e=>({banner:null,setBanner:t=>e({banner:t})})),y=(0,o.Ue)(e=>({randomVoucherId:null,open:!1,setRandomVoucherId:t=>e({randomVoucherId:t}),setOpen:t=>e({open:t})})),b=(0,o.Ue)(e=>({voucherId:null,index:null,open:!1,setVoucherId:t=>e({voucherId:t}),setIndex:t=>e({index:t}),setOpen:t=>e({open:t})})),w=(0,o.Ue)(e=>({minePageContent:null,setMinePageContent:t=>e({minePageContent:t})}))},40272:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>b,metadata:()=>y});var o=r(25036),n=r(80265),a=r.n(n);r(67272);var s=r(86843);let i=(0,s.createProxy)(String.raw`C:\Users\xinch\Desktop\claim_web_app\components\ui\sonner.tsx`),{__esModule:l,$$typeof:c}=i;i.default;let u=(0,s.createProxy)(String.raw`C:\Users\xinch\Desktop\claim_web_app\components\ui\sonner.tsx#Toaster`),d=(0,s.createProxy)(String.raw`C:\Users\xinch\Desktop\claim_web_app\components\Template\InstallButton.tsx`),{__esModule:p,$$typeof:h}=d,m=d.default;var g=r(80342),f=r.n(g);let y={title:"Create Next App",description:"Generated by create next app",manifest:"/manifest.json"};function b({children:e}){return(0,o.jsxs)("html",{lang:"en",children:[(0,o.jsxs)(f(),{children:[o.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),o.jsx("meta",{name:"apple-mobile-web-app-capable",content:"yes"}),o.jsx("meta",{name:"apple-mobile-web-app-status-bar-style",content:"black"}),o.jsx("meta",{name:"theme-color",content:"#000000"}),o.jsx("link",{rel:"apple-touch-icon",href:"/icon-notch.png"}),o.jsx("link",{rel:"manifest",href:"/manifest.json"})]}),(0,o.jsxs)("body",{className:a().className,children:[o.jsx(m,{}),e]}),o.jsx(u,{position:"top-center"})]})}},67272:()=>{}};