if(!self.define){let e,c={};const s=(s,t)=>(s=new URL(s+".js",t).href,c[s]||new Promise((c=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=c,document.head.appendChild(e)}else e=s,importScripts(s),c()})).then((()=>{let e=c[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(t,a)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(c[i])return;let n={};const r=e=>s(e,i),u={module:{uri:i},exports:n,require:r};c[i]=Promise.all(t.map((e=>u[e]||r(e)))).then((e=>(a(...e),n)))}}define(["./workbox-0fe8efa9"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"f99f3530d6ea62a53497de6c3777382c"},{url:"/_next/static/GhtjD21kvcVNHuWAtvpkc/_buildManifest.js",revision:"e0a21c7d7f93d89dce16df0231dc76f2"},{url:"/_next/static/GhtjD21kvcVNHuWAtvpkc/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0e5ce63c-0085e24382f431b7.js",revision:"GhtjD21kvcVNHuWAtvpkc"},{url:"/_next/static/chunks/160-de440557633a3a4b.js",revision:"GhtjD21kvcVNHuWAtvpkc"},{url:"/_next/static/chunks/199-19e029934fd2d660.js",revision:"GhtjD21kvcVNHuWAtvpkc"},{url:"/_next/static/chunks/250-6e1567510e89a10f.js",revision:"GhtjD21kvcVNHuWAtvpkc"},{url:"/_next/static/chunks/288-7afd8204559ed18e.js",revision:"GhtjD21kvcVNHuWAtvpkc"},{url:"/_next/static/chunks/2bd3f8c6-ed90a18f23432357.js",revision:"GhtjD21kvcVNHuWAtvpkc"},{url:"/_next/static/chunks/387-cb45929c32f6582a.js",revision:"GhtjD21kvcVNHuWAtvpkc"},{url:"/_next/static/chunks/449-2cd19ea6714b59a9.js",revision:"GhtjD21kvcVNHuWAtvpkc"},{url:"/_next/static/chunks/540-99e6d0d8978536b7.js",revision:"GhtjD21kvcVNHuWAtvpkc"},{url:"/_next/static/chunks/69-8201ffd4476d26e8.js",revision:"GhtjD21kvcVNHuWAtvpkc"},{url:"/_next/static/chunks/6b187784-683d27d5103f9eb1.js",revision:"GhtjD21kvcVNHuWAtvpkc"},{url:"/_next/static/chunks/703-f48fbe335274f19c.js",revision:"GhtjD21kvcVNHuWAtvpkc"},{url:"/_next/static/chunks/772-4ab127838114da21.js",revision:"GhtjD21kvcVNHuWAtvpkc"},{url:"/_next/static/chunks/833.ba95a85605890641.js",revision:"ba95a85605890641"},{url:"/_next/static/chunks/929-f604cd8e567748fe.js",revision:"GhtjD21kvcVNHuWAtvpkc"},{url:"/_next/static/chunks/app/(admin)/layout-faaeffa08a9190f3.js",revision:"GhtjD21kvcVNHuWAtvpkc"},{url:"/_next/static/chunks/app/(admin)/manager/page-3ca3e84fc869c452.js",revision:"GhtjD21kvcVNHuWAtvpkc"},{url:"/_next/static/chunks/app/(admin)/staff/page-dac4ab368b9d1b99.js",revision:"GhtjD21kvcVNHuWAtvpkc"},{url:"/_next/static/chunks/app/(user)/gift/page-ab3367792b49a2b5.js",revision:"GhtjD21kvcVNHuWAtvpkc"},{url:"/_next/static/chunks/app/(user)/home/page-4683ccb2dbd81452.js",revision:"GhtjD21kvcVNHuWAtvpkc"},{url:"/_next/static/chunks/app/(user)/layout-6f7f49746f9bf563.js",revision:"GhtjD21kvcVNHuWAtvpkc"},{url:"/_next/static/chunks/app/(user)/page-7051ce96f6520183.js",revision:"GhtjD21kvcVNHuWAtvpkc"},{url:"/_next/static/chunks/app/(user)/shop/page-8d521420a5fb1aaa.js",revision:"GhtjD21kvcVNHuWAtvpkc"},{url:"/_next/static/chunks/app/_not-found-e7e820434b4d46e3.js",revision:"GhtjD21kvcVNHuWAtvpkc"},{url:"/_next/static/chunks/app/layout-15f860886384cb62.js",revision:"GhtjD21kvcVNHuWAtvpkc"},{url:"/_next/static/chunks/bc9e92e6-58fee68d1a95392e.js",revision:"GhtjD21kvcVNHuWAtvpkc"},{url:"/_next/static/chunks/d0f5a89a-3db9c1db28360f3a.js",revision:"GhtjD21kvcVNHuWAtvpkc"},{url:"/_next/static/chunks/fd9d1056-b402d0c7c6a759b3.js",revision:"GhtjD21kvcVNHuWAtvpkc"},{url:"/_next/static/chunks/framework-aec844d2ccbe7592.js",revision:"GhtjD21kvcVNHuWAtvpkc"},{url:"/_next/static/chunks/main-5e4d00504bf0906d.js",revision:"GhtjD21kvcVNHuWAtvpkc"},{url:"/_next/static/chunks/main-app-f2e283b6b8b62466.js",revision:"GhtjD21kvcVNHuWAtvpkc"},{url:"/_next/static/chunks/pages/_app-75f6107b0260711c.js",revision:"GhtjD21kvcVNHuWAtvpkc"},{url:"/_next/static/chunks/pages/_error-9a890acb1e81c3fc.js",revision:"GhtjD21kvcVNHuWAtvpkc"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/reactPlayerDailyMotion.fc1eed385a899340.js",revision:"fc1eed385a899340"},{url:"/_next/static/chunks/reactPlayerFacebook.d2a8eae341170669.js",revision:"d2a8eae341170669"},{url:"/_next/static/chunks/reactPlayerFilePlayer.e6c41f189c26e146.js",revision:"e6c41f189c26e146"},{url:"/_next/static/chunks/reactPlayerKaltura.88fd907458a470ea.js",revision:"88fd907458a470ea"},{url:"/_next/static/chunks/reactPlayerMixcloud.909e0fa9201de4a9.js",revision:"909e0fa9201de4a9"},{url:"/_next/static/chunks/reactPlayerMux.19c9ca03589ce68b.js",revision:"19c9ca03589ce68b"},{url:"/_next/static/chunks/reactPlayerPreview.6ac83a210d1198bf.js",revision:"6ac83a210d1198bf"},{url:"/_next/static/chunks/reactPlayerSoundCloud.32aab1f8d08ac507.js",revision:"32aab1f8d08ac507"},{url:"/_next/static/chunks/reactPlayerStreamable.0e2aba2d3417f985.js",revision:"0e2aba2d3417f985"},{url:"/_next/static/chunks/reactPlayerTwitch.ddfcd21fcd42cd64.js",revision:"ddfcd21fcd42cd64"},{url:"/_next/static/chunks/reactPlayerVidyard.2d7e3453fdfa1444.js",revision:"2d7e3453fdfa1444"},{url:"/_next/static/chunks/reactPlayerVimeo.a2c4a7f2d07fe8b2.js",revision:"a2c4a7f2d07fe8b2"},{url:"/_next/static/chunks/reactPlayerWistia.e801a7c928720e66.js",revision:"e801a7c928720e66"},{url:"/_next/static/chunks/reactPlayerYouTube.de52fc52e15a0a3b.js",revision:"de52fc52e15a0a3b"},{url:"/_next/static/chunks/webpack-6d203fa3e55c2744.js",revision:"GhtjD21kvcVNHuWAtvpkc"},{url:"/_next/static/css/289fb47a5d52b777.css",revision:"289fb47a5d52b777"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/bg/bg-scan.jpg",revision:"b6cd2b4134e77bfee4307657d017b604"},{url:"/bg/bg1.jpg",revision:"37d871ea317fd3b2376936fbd2ccd652"},{url:"/bg/bg10.jpg",revision:"9d0d9b45ca402b7118e1c1fb841cc6ab"},{url:"/bg/bg6.jpg",revision:"f5a33ccba354972bd2ed6e367aea6ce0"},{url:"/bg/mine-bg.jpg",revision:"1500ccec34ede80bdaeb3dd3099abe5e"},{url:"/icon-192x192.png",revision:"17f3857f42bc33cf3d4110a3c6b1329b"},{url:"/icon-256x256.png",revision:"3e2aa40072e67f11dad4d5f26d8d3d20"},{url:"/icon-384x384.png",revision:"f8cf5660a89b1afb2a077e73b60bb389"},{url:"/icon-512x512.png",revision:"0871e117f718ac405d800c914a59ce11"},{url:"/icons/cases.gif",revision:"1a1ce078200bfce7f4d6cc6945ad64e5"},{url:"/icons/coin.png",revision:"085b9424fa3005a79552edfb4d141f78"},{url:"/icons/coupon.png",revision:"aacbb9293802c5d9635dad1397da39cc"},{url:"/icons/game.gif",revision:"8d89966e2da204f14110c1bee855237c"},{url:"/icons/google-icon.png",revision:"412b11fdae4ebdc153efbcb979664924"},{url:"/icons/hourclass.png",revision:"665244488266d74524e01476fcf1022b"},{url:"/icons/navbar/game.png",revision:"fd4954d65eeba9427840c7e42354c825"},{url:"/icons/navbar/home.png",revision:"79d94960a03d16703c7a1f7752969a57"},{url:"/icons/navbar/mine.png",revision:"ab39f616fd2f9fef833add6447e06e12"},{url:"/icons/navbar/shop.png",revision:"359156efce586370ea460bea29dc109f"},{url:"/icons/rocket.gif",revision:"2697361ab3311f777b0f4b1215b3f0a7"},{url:"/img/img9.jpg",revision:"2f82201cd4793c33b605134b40920ab7"},{url:"/index.html",revision:"59634b6c936d6322f9d7f9ff97f3c26e"},{url:"/manifest.json",revision:"f703eaae217a47db1109d5bc45bcf181"},{url:"/touch-icon-iphone.png",revision:"17f3857f42bc33cf3d4110a3c6b1329b"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:c,event:s,state:t})=>c&&"opaqueredirect"===c.type?new Response(c.body,{status:200,statusText:"OK",headers:c.headers}):c}]}),"GET"),e.registerRoute(/^https?.*/,new e.CacheFirst({cacheName:"cache-first",plugins:[new e.ExpirationPlugin({maxEntries:100,maxAgeSeconds:86400})]}),"GET")}));
