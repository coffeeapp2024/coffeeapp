(()=>{var e={};e.id=344,e.ids=[344],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},50852:e=>{"use strict";e.exports=require("async_hooks")},14300:e=>{"use strict";e.exports=require("buffer")},96206:e=>{"use strict";e.exports=require("console")},6113:e=>{"use strict";e.exports=require("crypto")},67643:e=>{"use strict";e.exports=require("diagnostics_channel")},9523:e=>{"use strict";e.exports=require("dns")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},85158:e=>{"use strict";e.exports=require("http2")},41808:e=>{"use strict";e.exports=require("net")},15673:e=>{"use strict";e.exports=require("node:events")},84492:e=>{"use strict";e.exports=require("node:stream")},47261:e=>{"use strict";e.exports=require("node:util")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},4074:e=>{"use strict";e.exports=require("perf_hooks")},77282:e=>{"use strict";e.exports=require("process")},63477:e=>{"use strict";e.exports=require("querystring")},12781:e=>{"use strict";e.exports=require("stream")},35356:e=>{"use strict";e.exports=require("stream/web")},71576:e=>{"use strict";e.exports=require("string_decoder")},24404:e=>{"use strict";e.exports=require("tls")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},29830:e=>{"use strict";e.exports=require("util/types")},71267:e=>{"use strict";e.exports=require("worker_threads")},59796:e=>{"use strict";e.exports=require("zlib")},84317:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>d,originalPathname:()=>p,pages:()=>c,routeModule:()=>x,tree:()=>u});var s=r(50482),i=r(69108),a=r(62563),n=r.n(a),o=r(68300),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let u=["",{children:["(user)",{children:["shop",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,41982)),"C:\\Users\\xinch\\Desktop\\claim_web_app\\app\\(user)\\shop\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,41591)),"C:\\Users\\xinch\\Desktop\\claim_web_app\\app\\(user)\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,69361,23)),"next/dist/client/components/not-found-error"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,40272)),"C:\\Users\\xinch\\Desktop\\claim_web_app\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,69361,23)),"next/dist/client/components/not-found-error"]}],c=["C:\\Users\\xinch\\Desktop\\claim_web_app\\app\\(user)\\shop\\page.tsx"],p="/(user)/shop/page",d={require:r,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/(user)/shop/page",pathname:"/shop",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},31245:(e,t,r)=>{Promise.resolve().then(r.bind(r,57254)),Promise.resolve().then(r.bind(r,81183)),Promise.resolve().then(r.bind(r,57049))},57254:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var s=r(95344),i=r(22105),a=r(89410);r(3729);let n=function(){let{banner:e}=(0,i.MB)();return s.jsx("div",{className:"p-2 mb-8",children:s.jsx("div",{className:"aspect-[3/1] relative rounded-3xl overflow-hidden shadow-sm",children:e?s.jsx(a.default,{src:e,alt:"banner shop",width:500,height:300,className:"object-cover"}):""})})}},81183:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>u});var s=r(95344);r(3729);var i=r(66313),a=r(22105);let n=function(){let{products:e}=(0,a.aD)(),{currentTag:t}=(0,a.Bv)();if(!e)return;let r=t&&"all"!==t?e.filter(e=>e.tags&&e.tags.includes(t)):e;return s.jsx("div",{className:"grid grid-cols-2 gap-x-2 gap-y-3 ",children:r.map((e,t)=>s.jsx(i.Z,{product:e},t))})};var o=r(59467);let l=function(){let{productTags:e,currentTag:t,setCurrentTag:r}=(0,a.Bv)(),i=e?.filter(e=>"popular"!==e.tag),n=e=>{r(e)};return s.jsx(o.lr,{className:"w-full -ml-2 mt-4 mb-6",children:s.jsx(o.KI,{className:"-ml-0",children:i?.map(e=>s.jsx(o.d$,{className:"basis-auto pl-2",children:s.jsx("button",{className:`py-2 px-5 rounded-3xl border-2 text-sm text-neutral-400 font-medium transition-all duration-75 ${e.tag===t?"bg-neutral-600 border-neutral-600 text-white":"border-neutral-200"}`,onClick:()=>n(e.tag),children:e.name})},e.tag))})})},u=function(){return(0,s.jsxs)("div",{className:"px-2 mt-6",children:[s.jsx("div",{className:"border-t-[1px] -mx-2"}),s.jsx(l,{}),s.jsx(n,{})]})}},66313:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var s=r(95344),i=r(89410);r(3729);let a=function({product:e}){let{img:t,name:r,price:a}=e??{};return(0,s.jsxs)("div",{className:"rounded-3xl overflow-hidden shadow-sm bg-neutral-50",children:[s.jsx("div",{className:"relative aspect-square rounded-2xl overflow-hidden shadow-sm",children:t&&s.jsx(i.default,{src:t,width:500,height:500,className:"object-scale-down",alt:"Product Image"})}),(0,s.jsxs)("div",{className:"px-3 pt-2 pb-3",children:[s.jsx("h3",{className:"font-bold text-neutral-600 text-sm truncate",children:r}),(0,s.jsxs)("span",{className:"font-bold text-sm text-neutral-800",children:[a,"k"]})]})]})}},57049:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var s=r(95344);r(3729);var i=r(59467),a=r(66313),n=r(22105);let o=function(){let{products:e}=(0,n.aD)(),{productTags:t}=(0,n.Bv)();if(!e)return null;let r=e.filter(e=>e.tags&&e.tags.includes("popular")),o=t?.find(e=>e.tag.includes("popular")),l=o?o.name:"Most Popularr";return(0,s.jsxs)("div",{className:"",children:[s.jsx("h2",{className:"font-bold text-neutral-800 text-xl mb-2 ml-3",children:l}),s.jsx("div",{children:s.jsx(i.lr,{opts:{startIndex:1,dragFree:!0},children:s.jsx(i.KI,{className:"ml-0 pb-2",children:r.map((e,t)=>s.jsx(i.d$,{className:"basis-[46%] pl-2",children:s.jsx(a.Z,{product:e})},t))})})})]})}},41982:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>f});var s=r(25036),i=r(86843);let a=(0,i.createProxy)(String.raw`C:\Users\xinch\Desktop\claim_web_app\components\Shop\BannerProductPage.tsx`),{__esModule:n,$$typeof:o}=a,l=a.default,u=(0,i.createProxy)(String.raw`C:\Users\xinch\Desktop\claim_web_app\components\Shop\Menu.tsx`),{__esModule:c,$$typeof:p}=u,d=u.default,x=(0,i.createProxy)(String.raw`C:\Users\xinch\Desktop\claim_web_app\components\Shop\RecommendProductCards.tsx`),{__esModule:m,$$typeof:h}=x,g=x.default;r(40002);let f=function(){return(0,s.jsxs)("div",{className:"min-h-[200vh] w-full bg-neutral-100",children:[s.jsx(l,{}),s.jsx(g,{}),s.jsx(d,{})]})}}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[225,792,418,124,701,797,593],()=>r(84317));module.exports=s})();