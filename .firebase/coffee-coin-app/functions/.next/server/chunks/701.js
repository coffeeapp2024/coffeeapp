"use strict";exports.id=701,exports.ids=[701],exports.modules={4664:(e,t,n)=>{n.d(t,{LZ3:()=>a,Y4O:()=>u});var r=n(3729);function i(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}var o=["color"],u=(0,r.forwardRef)(function(e,t){var n=e.color,u=i(e,o);return(0,r.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},u,{ref:t}),(0,r.createElement)("path",{d:"M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z",fill:void 0===n?"currentColor":n,fillRule:"evenodd",clipRule:"evenodd"}))}),l=["color"],a=(0,r.forwardRef)(function(e,t){var n=e.color,o=i(e,l);return(0,r.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o,{ref:t}),(0,r.createElement)("path",{d:"M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z",fill:void 0===n?"currentColor":n,fillRule:"evenodd",clipRule:"evenodd"}))})},89410:(e,t,n)=>{n.d(t,{default:()=>i.a});var r=n(37412),i=n.n(r)},56506:(e,t,n)=>{n.d(t,{default:()=>i.a});var r=n(61476),i=n.n(r)},31900:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return b}});let r=n(39694),i=n(17824),o=n(95344),u=i._(n(3729)),l=r._(n(81202)),a=r._(n(1758)),c=n(83855),s=n(73053),d=n(74187);n(70837);let f=n(66150),p=r._(n(74931)),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function g(e,t,n,r,i,o){let u=null==e?void 0:e.src;e&&e["data-loaded-src"]!==u&&(e["data-loaded-src"]=u,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,i=!1;n.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==r?void 0:r.current)&&r.current(e)}}))}function h(e){let[t,n]=u.version.split(".",2),r=parseInt(t,10),i=parseInt(n,10);return r>18||18===r&&i>=3?{fetchPriority:e}:{fetchpriority:e}}globalThis.__NEXT_IMAGE_IMPORTED=!0;let v=(0,u.forwardRef)((e,t)=>{let{src:n,srcSet:r,sizes:i,height:l,width:a,decoding:c,className:s,style:d,fetchPriority:f,placeholder:p,loading:m,unoptimized:v,fill:y,onLoadRef:b,onLoadingCompleteRef:x,setBlurComplete:w,setShowAltText:S,onLoad:O,onError:j,...C}=e;return(0,o.jsx)("img",{...C,...h(f),loading:m,width:a,height:l,decoding:c,"data-nimg":y?"fill":"1",className:s,style:d,sizes:i,srcSet:r,src:n,ref:(0,u.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(j&&(e.src=e.src),e.complete&&g(e,p,b,x,w,v))},[n,p,b,x,w,j,v,t]),onLoad:e=>{g(e.currentTarget,p,b,x,w,v)},onError:e=>{S(!0),"empty"!==p&&w(!0),j&&j(e)}})});function y(e){let{isAppRouter:t,imgAttributes:n}=e,r={as:"image",imageSrcSet:n.srcSet,imageSizes:n.sizes,crossOrigin:n.crossOrigin,referrerPolicy:n.referrerPolicy,...h(n.fetchPriority)};return t&&l.default.preload?(l.default.preload(n.src,r),null):(0,o.jsx)(a.default,{children:(0,o.jsx)("link",{rel:"preload",href:n.srcSet?void 0:n.src,...r},"__nimg-"+n.src+n.srcSet+n.sizes)})}let b=(0,u.forwardRef)((e,t)=>{let n=(0,u.useContext)(f.RouterContext),r=(0,u.useContext)(d.ImageConfigContext),i=(0,u.useMemo)(()=>{let e=m||r||s.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:n}},[r]),{onLoad:l,onLoadingComplete:a}=e,g=(0,u.useRef)(l);(0,u.useEffect)(()=>{g.current=l},[l]);let h=(0,u.useRef)(a);(0,u.useEffect)(()=>{h.current=a},[a]);let[b,x]=(0,u.useState)(!1),[w,S]=(0,u.useState)(!1),{props:O,meta:j}=(0,c.getImgProps)(e,{defaultLoader:p.default,imgConf:i,blurComplete:b,showAltText:w});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(v,{...O,unoptimized:j.unoptimized,placeholder:j.placeholder,fill:j.fill,onLoadRef:g,onLoadingCompleteRef:h,setBlurComplete:x,setShowAltText:S,ref:t}),j.priority?(0,o.jsx)(y,{isAppRouter:!n,imgAttributes:O}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7637:(e,t,n)=>{e.exports=n(16372).vendored.contexts.AmpContext},32158:(e,t,n)=>{e.exports=n(16372).vendored.contexts.HeadManagerContext},74187:(e,t,n)=>{e.exports=n(16372).vendored.contexts.ImageConfigContext},13126:(e,t)=>{function n(e){let{ampFirst:t=!1,hybrid:n=!1,hasQuery:r=!1}=void 0===e?{}:e;return t||n&&r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return n}})},83855:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return l}}),n(70837);let r=n(86358),i=n(73053);function o(e){return void 0!==e.default}function u(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function l(e,t){var n;let l,a,c,{src:s,sizes:d,unoptimized:f=!1,priority:p=!1,loading:m,className:g,quality:h,width:v,height:y,fill:b=!1,style:x,onLoad:w,onLoadingComplete:S,placeholder:O="empty",blurDataURL:j,fetchPriority:C,layout:E,objectFit:_,objectPosition:P,lazyBoundary:I,lazyRoot:M,...A}=e,{imgConf:k,showAltText:z,blurComplete:L,defaultLoader:D}=t,R=k||i.imageConfigDefault;if("allSizes"in R)l=R;else{let e=[...R.deviceSizes,...R.imageSizes].sort((e,t)=>e-t),t=R.deviceSizes.sort((e,t)=>e-t);l={...R,allSizes:e,deviceSizes:t}}let F=A.loader||D;delete A.loader,delete A.srcSet;let N="__next_img_default"in F;if(N){if("custom"===l.loader)throw Error('Image with src "'+s+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=F;F=t=>{let{config:n,...r}=t;return e(r)}}if(E){"fill"===E&&(b=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[E];e&&(x={...x,...e});let t={responsive:"100vw",fill:"100vw"}[E];t&&!d&&(d=t)}let T="",H=u(v),B=u(y);if("object"==typeof(n=s)&&(o(n)||void 0!==n.src)){let e=o(s)?s.default:s;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(a=e.blurWidth,c=e.blurHeight,j=j||e.blurDataURL,T=e.src,!b){if(H||B){if(H&&!B){let t=H/e.width;B=Math.round(e.height*t)}else if(!H&&B){let t=B/e.height;H=Math.round(e.width*t)}}else H=e.width,B=e.height}}let V=!p&&("lazy"===m||void 0===m);(!(s="string"==typeof s?s:T)||s.startsWith("data:")||s.startsWith("blob:"))&&(f=!0,V=!1),l.unoptimized&&(f=!0),N&&s.endsWith(".svg")&&!l.dangerouslyAllowSVG&&(f=!0),p&&(C="high");let U=u(h),G=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:_,objectPosition:P}:{},z?{}:{color:"transparent"},x),$=L||"empty"===O?null:"blur"===O?'url("data:image/svg+xml;charset=utf-8,'+(0,r.getImageBlurSvg)({widthInt:H,heightInt:B,blurWidth:a,blurHeight:c,blurDataURL:j||"",objectFit:G.objectFit})+'")':'url("'+O+'")',q=$?{backgroundSize:G.objectFit||"cover",backgroundPosition:G.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:$}:{},W=function(e){let{config:t,src:n,unoptimized:r,width:i,quality:o,sizes:u,loader:l}=e;if(r)return{src:n,srcSet:void 0,sizes:void 0};let{widths:a,kind:c}=function(e,t,n){let{deviceSizes:r,allSizes:i}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(n);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof t?{widths:r,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))],kind:"x"}}(t,i,u),s=a.length-1;return{sizes:u||"w"!==c?u:"100vw",srcSet:a.map((e,r)=>l({config:t,src:n,quality:o,width:e})+" "+("w"===c?e:r+1)+c).join(", "),src:l({config:t,src:n,quality:o,width:a[s]})}}({config:l,src:s,unoptimized:f,width:H,quality:U,sizes:d,loader:F});return{props:{...A,loading:V?"lazy":m,fetchPriority:C,width:H,height:B,decoding:"async",className:g,style:{...G,...q},sizes:W.sizes,srcSet:W.srcSet,src:W.src},meta:{unoptimized:f,priority:p,placeholder:O,fill:b}}}},1758:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{defaultHead:function(){return d},default:function(){return g}});let r=n(39694),i=n(17824),o=n(95344),u=i._(n(3729)),l=r._(n(27984)),a=n(7637),c=n(32158),s=n(13126);function d(e){void 0===e&&(e=!1);let t=[(0,o.jsx)("meta",{charSet:"utf-8"})];return e||t.push((0,o.jsx)("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===u.default.Fragment?e.concat(u.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}n(70837);let p=["name","httpEquiv","charSet","itemProp"];function m(e,t){let{inAmpMode:n}=t;return e.reduce(f,[]).reverse().concat(d(n).reverse()).filter(function(){let e=new Set,t=new Set,n=new Set,r={};return i=>{let o=!0,u=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){u=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(let e=0,t=p.length;e<t;e++){let t=p[e];if(i.props.hasOwnProperty(t)){if("charSet"===t)n.has(t)?o=!1:n.add(t);else{let e=i.props[t],n=r[t]||new Set;("name"!==t||!u)&&n.has(e)?o=!1:(n.add(e),r[t]=n)}}}}return o}}()).reverse().map((e,t)=>{let r=e.key||t;if(!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,u.default.cloneElement(e,t)}return u.default.cloneElement(e,{key:r})})}let g=function(e){let{children:t}=e,n=(0,u.useContext)(a.AmpStateContext),r=(0,u.useContext)(c.HeadManagerContext);return(0,o.jsx)(l.default,{reduceComponentsToState:m,headManager:r,inAmpMode:(0,s.isInAmpMode)(n),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},86358:(e,t)=>{function n(e){let{widthInt:t,heightInt:n,blurWidth:r,blurHeight:i,blurDataURL:o,objectFit:u}=e,l=r?40*r:t,a=i?40*i:n,c=l&&a?"viewBox='0 0 "+l+" "+a+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+c+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(c?"none":"contain"===u?"xMidYMid":"cover"===u?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return n}})},73053:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{VALID_LOADERS:function(){return n},imageConfigDefault:function(){return r}});let n=["default","imgix","cloudinary","akamai","custom"],r={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},37412:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{getImageProps:function(){return l},default:function(){return a}});let r=n(39694),i=n(83855),o=n(31900),u=r._(n(74931)),l=e=>{let{props:t}=(0,i.getImgProps)(e,{defaultLoader:u.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}},a=o.Image},74931:(e,t)=>{function n(e){let{config:t,src:n,width:r,quality:i}=e;return t.path+"?url="+encodeURIComponent(n)+"&w="+r+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),n.__next_img_default=!0;let r=n},27984:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u}});let r=n(3729),i=()=>{},o=()=>{};function u(e){var t;let{headManager:n,reduceComponentsToState:u}=e;function l(){if(n&&n.mountedInstances){let t=r.Children.toArray(Array.from(n.mountedInstances).filter(Boolean));n.updateHead(u(t,e))}}return null==n||null==(t=n.mountedInstances)||t.add(e.children),l(),i(()=>{var t;return null==n||null==(t=n.mountedInstances)||t.add(e.children),()=>{var t;null==n||null==(t=n.mountedInstances)||t.delete(e.children)}}),i(()=>(n&&(n._pendingUpdate=l),()=>{n&&(n._pendingUpdate=l)})),o(()=>(n&&n._pendingUpdate&&(n._pendingUpdate(),n._pendingUpdate=null),()=>{n&&n._pendingUpdate&&(n._pendingUpdate(),n._pendingUpdate=null)})),null}},88720:(e,t,n)=>{n.d(t,{j:()=>o});let r=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,i=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=function e(t){var n,r,i="";if("string"==typeof t||"number"==typeof t)i+=t;else if("object"==typeof t){if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(r=e(t[n]))&&(i&&(i+=" "),i+=r);else for(n in t)t[n]&&(i&&(i+=" "),i+=n)}return i}(e))&&(r&&(r+=" "),r+=t);return r},o=(e,t)=>n=>{var o;if((null==t?void 0:t.variants)==null)return i(e,null==n?void 0:n.class,null==n?void 0:n.className);let{variants:u,defaultVariants:l}=t,a=Object.keys(u).map(e=>{let t=null==n?void 0:n[e],i=null==l?void 0:l[e];if(null===t)return null;let o=r(t)||r(i);return u[e][o]}),c=n&&Object.entries(n).reduce((e,t)=>{let[n,r]=t;return void 0===r||(e[n]=r),e},{});return i(e,a,null==t?void 0:null===(o=t.compoundVariants)||void 0===o?void 0:o.reduce((e,t)=>{let{class:n,className:r,...i}=t;return Object.entries(i).every(e=>{let[t,n]=e;return Array.isArray(n)?n.includes({...l,...c}[t]):({...l,...c})[t]===n})?[...e,n,r]:e},[]),null==n?void 0:n.class,null==n?void 0:n.className)}},2522:(e,t,n)=>{n.d(t,{Z:()=>C});var r=n(3729);function i(e){return"[object Object]"===Object.prototype.toString.call(e)||Array.isArray(e)}function o(e,t){let n=Object.keys(e),r=Object.keys(t);return n.length===r.length&&JSON.stringify(Object.keys(e.breakpoints||{}))===JSON.stringify(Object.keys(t.breakpoints||{}))&&n.every(n=>{let r=e[n],u=t[n];return"function"==typeof r?`${r}`==`${u}`:i(r)&&i(u)?o(r,u):r===u})}function u(e){return e.concat().sort((e,t)=>e.name>t.name?1:-1).map(e=>e.options)}function l(e){return"number"==typeof e}function a(e){return"string"==typeof e}function c(e){return"boolean"==typeof e}function s(e){return"[object Object]"===Object.prototype.toString.call(e)}function d(e){return Math.abs(e)}function f(e){return Math.sign(e)}function p(e){return v(e).map(Number)}function m(e){return e[g(e)]}function g(e){return Math.max(0,e.length-1)}function h(e,t=0){return Array.from(Array(e),(e,n)=>t+n)}function v(e){return Object.keys(e)}function y(e,t){return void 0!==t.MouseEvent&&e instanceof t.MouseEvent}function b(){let e=[],t={add:function(n,r,i,o={passive:!0}){let u;return"addEventListener"in n?(n.addEventListener(r,i,o),u=()=>n.removeEventListener(r,i,o)):(n.addListener(i),u=()=>n.removeListener(i)),e.push(u),t},clear:function(){e=e.filter(e=>e())}};return t}function x(e=0,t=0){let n=d(e-t);function r(n){return n<e||n>t}return{length:n,max:t,min:e,constrain:function(n){return r(n)?n<e?e:t:n},reachedAny:r,reachedMax:function(e){return e>t},reachedMin:function(t){return t<e},removeOffset:function(e){return n?e-n*Math.ceil((e-t)/n):e}}}function w(e){let t=e;function n(e){return l(e)?e:e.get()}return{get:function(){return t},set:function(e){t=n(e)},add:function(e){t+=n(e)},subtract:function(e){t-=n(e)}}}function S(e,t,n){let r="x"===e.scroll?function(e){return`translate3d(${e}px,0px,0px)`}:function(e){return`translate3d(0px,${e}px,0px)`},i=n.style,o=!1;return{clear:function(){o||(i.transform="",n.getAttribute("style")||n.removeAttribute("style"))},to:function(e){o||(i.transform=r(t.apply(e)))},toggleActive:function(e){o=!e}}}let O={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0};function j(e,t,n){let r,i,o,u,C;let E=e.ownerDocument,_=E.defaultView,P=function(e){function t(e,t){return function e(t,n){return[t,n].reduce((t,n)=>(v(n).forEach(r=>{let i=t[r],o=n[r],u=s(i)&&s(o);t[r]=u?e(i,o):o}),t),{})}(e,t||{})}return{mergeOptions:t,optionsAtMedia:function(n){let r=n.breakpoints||{},i=v(r).filter(t=>e.matchMedia(t).matches).map(e=>r[e]).reduce((e,n)=>t(e,n),{});return t(n,i)},optionsMediaQueries:function(t){return t.map(e=>v(e.breakpoints||{})).reduce((e,t)=>e.concat(t),[]).map(e.matchMedia)}}}(_),I=(C=[],{init:function(e,t){return(C=t.filter(({options:e})=>!1!==P.optionsAtMedia(e).active)).forEach(t=>t.init(e,P)),t.reduce((e,t)=>Object.assign(e,{[t.name]:t}),{})},destroy:function(){C=C.filter(e=>e.destroy())}}),M=b(),A=function(){let e;let t={},n={init:function(t){e=t},emit:function(r){return(t[r]||[]).forEach(t=>t(e,r)),n},off:function(e,r){return t[e]=(t[e]||[]).filter(e=>e!==r),n},on:function(e,r){return t[e]=(t[e]||[]).concat([r]),n}};return n}(),{mergeOptions:k,optionsAtMedia:z,optionsMediaQueries:L}=P,{on:D,off:R,emit:F}=A,N=!1,T=k(O,j.globalOptions),H=k(T),B=[];function V(t,n){!N&&(H=z(T=k(T,t)),B=n||B,function(){let{container:t,slides:n}=H;o=(a(t)?e.querySelector(t):t)||e.children[0];let r=a(n)?o.querySelectorAll(n):n;u=[].slice.call(r||o.children)}(),r=function t(n){let r=function(e,t,n,r,i,o,u){let s,O;let{align:j,axis:C,direction:E,startIndex:_,loop:P,duration:I,dragFree:M,dragThreshold:A,inViewThreshold:k,slidesToScroll:z,skipSnaps:L,containScroll:D,watchResize:R,watchSlides:F,watchDrag:N}=o,T={measure:function(e){let{offsetTop:t,offsetLeft:n,offsetWidth:r,offsetHeight:i}=e;return{top:t,right:n+r,bottom:t+i,left:n,width:r,height:i}}},H=T.measure(t),B=n.map(T.measure),V=function(e){let t="rtl"===e?-1:1;return{apply:function(e){return e*t}}}(E),U=function(e,t){let n="y"===e?"y":"x";return{scroll:n,cross:"y"===e?"x":"y",startEdge:"y"===n?"top":"rtl"===t?"right":"left",endEdge:"y"===n?"bottom":"rtl"===t?"left":"right",measureSize:function(e){let{width:t,height:r}=e;return"x"===n?t:r}}}(C,E),G=U.measureSize(H),$={measure:function(e){return e/100*G}},q=function(e,t){let n={start:function(){return 0},center:function(e){return(t-e)/2},end:function(e){return t-e}};return{measure:function(r,i){return a(e)?n[e](r):e(t,r,i)}}}(j,G),W=!P&&!!D,{slideSizes:J,slideSizesWithGaps:Y,startGap:Z,endGap:X}=function(e,t,n,r,i,o){let{measureSize:u,startEdge:l,endEdge:a}=e,c=n[0]&&i,s=function(){if(!c)return 0;let e=n[0];return d(t[l]-e[l])}(),f=c?parseFloat(o.getComputedStyle(m(r)).getPropertyValue(`margin-${a}`)):0,p=n.map(u),h=n.map((e,t,n)=>{let r=t===g(n);return t?r?p[t]+f:n[t+1][l]-e[l]:p[t]+s}).map(d);return{slideSizes:p,slideSizesWithGaps:h,startGap:s,endGap:f}}(U,H,B,n,P||!!D,i),Q=function(e,t,n,r,i,o,u,a,c,s){let{startEdge:f,endEdge:h}=e,v=l(r);return{groupSlides:function(e){return v?p(e).filter(e=>e%r==0).map(t=>e.slice(t,t+r)):e.length?p(e).reduce((r,l)=>{let s=m(r)||0,p=l===g(e),v=o[f]-u[s][f],y=o[f]-u[l][h],b=i||0!==s?0:t.apply(a);return d(y-(!i&&p?t.apply(c):0)-(v+b))>n+2&&r.push(l),p&&r.push(e.length),r},[]).map((t,n,r)=>{let i=Math.max(r[n-1]||0);return e.slice(i,t)}):[]}}}(U,V,G,z,P,H,B,Z,X,0),{snaps:K,snapsAligned:ee}=function(e,t,n,r,i){let{startEdge:o,endEdge:u}=e,{groupSlides:l}=i,a=l(r).map(e=>m(e)[u]-e[0][o]).map(d).map(t.measure),c=r.map(e=>n[o]-e[o]).map(e=>-d(e)),s=l(c).map(e=>e[0]).map((e,t)=>e+a[t]);return{snaps:c,snapsAligned:s}}(U,q,H,B,Q),et=-m(K)+m(Y),{snapsContained:en,scrollContainLimit:er}=function(e,t,n,r,i){let o=x(-t+e,0),u=n.map((e,t)=>{let{min:r,max:i}=o,u=o.constrain(e),l=t===g(n);return t?l||1>d(r-u)?r:1>d(i-u)?i:u:i}).map(e=>parseFloat(e.toFixed(3))),l=function(){let e=u[0],t=m(u);return x(u.lastIndexOf(e),u.indexOf(t)+1)}();return{snapsContained:function(){if(t<=e+2)return[o.max];if("keepSnaps"===r)return u;let{min:n,max:i}=l;return u.slice(n,i)}(),scrollContainLimit:l}}(G,et,ee,D,0),ei=W?en:ee,{limit:eo}=function(e,t,n){let r=t[0];return{limit:x(n?r-e:m(t),r)}}(et,ei,P),eu=function e(t,n,r){let{constrain:i}=x(0,t),o=t+1,u=l(n);function l(e){return r?d((o+e)%o):i(e)}function a(){return e(t,u,r)}let c={get:function(){return u},set:function(e){return u=l(e),c},add:function(e){return a().set(u+e)},clone:a};return c}(g(ei),_,P),el=eu.clone(),ea=p(n),ec=({dragHandler:e,scrollBody:t,scrollBounds:n,options:{loop:r}})=>{r||n.constrain(e.pointerDown()),t.seek()},es=({scrollBody:e,translate:t,location:n,offsetLocation:r,scrollLooper:i,slideLooper:o,dragHandler:u,animation:l,eventHandler:a,options:{loop:c}},s)=>{let d=e.velocity(),f=e.settled();f&&!u.pointerDown()&&(l.stop(),a.emit("settle")),f||a.emit("scroll"),r.set(n.get()-d+d*s),c&&(i.loop(e.direction()),o.loop()),t.to(r.get())},ed=function(e,t,n,r){let i=b(),o=1e3/60,u=null,l=0,a=0;function c(e){if(!a)return;u||(u=e);let i=e-u;for(u=e,l+=i;l>=o;)n(),l-=o;r(d(l/o)),a&&t.requestAnimationFrame(c)}function s(){t.cancelAnimationFrame(a),u=null,l=0,a=0}return{init:function(){i.add(e,"visibilitychange",()=>{e.hidden&&(u=null,l=0)})},destroy:function(){s(),i.clear()},start:function(){a||(a=t.requestAnimationFrame(c))},stop:s,update:n,render:r}}(r,i,()=>ec(ej),e=>es(ej,e)),ef=ei[eu.get()],ep=w(ef),em=w(ef),eg=w(ef),eh=function(e,t,n,r,i){let o=0,u=0,l=r,a=i,c=e.get(),s=0;function p(e){return l=e,g}function m(e){return a=e,g}let g={direction:function(){return u},duration:function(){return l},velocity:function(){return o},seek:function(){let t=n.get()-e.get(),r=0;return l?(o+=t/l,o*=a,c+=o,e.add(o),r=c-s):(o=0,e.set(n),r=t),u=f(r),s=c,g},settled:function(){return .001>d(n.get()-t.get())},useBaseFriction:function(){return m(i)},useBaseDuration:function(){return p(r)},useFriction:m,useDuration:p};return g}(ep,em,eg,I,.68),ev=function(e,t,n,r,i){let{reachedAny:o,removeOffset:u,constrain:l}=r;function a(e){return e.concat().sort((e,t)=>d(e)-d(t))[0]}function c(t,r){let i=[t,t+n,t-n];if(!e)return i[0];if(!r)return a(i);let o=i.filter(e=>f(e)===r);return o.length?a(o):m(i)-n}return{byDistance:function(n,r){let a=i.get()+n,{index:s,distance:f}=function(n){let r=e?u(n):l(n),{index:i}=t.map(e=>e-r).map(e=>c(e,0)).map((e,t)=>({diff:e,index:t})).sort((e,t)=>d(e.diff)-d(t.diff))[0];return{index:i,distance:r}}(a),p=!e&&o(a);if(!r||p)return{index:s,distance:n};let m=n+c(t[s]-f,0);return{index:s,distance:m}},byIndex:function(e,n){let r=c(t[e]-i.get(),n);return{index:e,distance:r}},shortcut:c}}(P,ei,et,eo,eg),ey=function(e,t,n,r,i,o,u){function l(i){let l=i.distance,a=i.index!==t.get();o.add(l),l&&(r.duration()?e.start():(e.update(),e.render(1),e.update())),a&&(n.set(t.get()),t.set(i.index),u.emit("select"))}return{distance:function(e,t){l(i.byDistance(e,t))},index:function(e,n){let r=t.clone().set(e);l(i.byIndex(r.get(),n))}}}(ed,eu,el,eh,ev,eg,u),eb=function(e){let{max:t,length:n}=e;return{get:function(e){return n?-((e-t)/n):0}}}(eo),ex=b(),ew=function(e,t,n,r){let i;let o={},u=null,l=null,a=!1;return{init:function(){i=new IntersectionObserver(e=>{a||(e.forEach(e=>{o[t.indexOf(e.target)]=e}),u=null,l=null,n.emit("slidesInView"))},{root:e.parentElement,threshold:r}),t.forEach(e=>i.observe(e))},destroy:function(){i&&i.disconnect(),a=!0},get:function(e=!0){if(e&&u)return u;if(!e&&l)return l;let t=v(o).reduce((t,n)=>{let r=parseInt(n),{isIntersecting:i}=o[r];return(e&&i||!e&&!i)&&t.push(r),t},[]);return e&&(u=t),e||(l=t),t}}}(t,n,u,k),{slideRegistry:eS}=function(e,t,n,r,i,o){let{groupSlides:u}=i,{min:l,max:a}=r;return{slideRegistry:function(){let r=u(o);return 1===n.length?[o]:e&&"keepSnaps"!==t?r.slice(l,a).map((e,t,n)=>{let r=t===g(n);return t?r?h(g(o)-m(n)[0]+1,m(n)[0]):e:h(m(n[0])+1)}):r}()}}(W,D,ei,er,Q,ea),eO=function(e,t,n,r,i,o){let u=0;function a(e){"Tab"===e.code&&(u=new Date().getTime())}function c(a){o.add(a,"focus",()=>{if(new Date().getTime()-u>10)return;e.scrollLeft=0;let o=t.indexOf(a),c=n.findIndex(e=>e.includes(o));l(c)&&(i.useDuration(0),r.index(c,0))},{passive:!0,capture:!0})}return{init:function(){o.add(document,"keydown",a,!1),t.forEach(c)}}}(e,n,eS,ey,eh,ex),ej={ownerDocument:r,ownerWindow:i,eventHandler:u,containerRect:H,slideRects:B,animation:ed,axis:U,direction:V,dragHandler:function(e,t,n,r,i,o,u,l,a,s,p,m,g,h,v,w,S,O,j,C){let{cross:E}=e,_=["INPUT","SELECT","TEXTAREA"],P={passive:!1},I=b(),M=b(),A=x(50,225).constrain(v.measure(20)),k={mouse:300,touch:400},z={mouse:500,touch:600},L=w?43:25,D=!1,R=0,F=0,N=!1,T=!1,H=!1,B=!1;function V(e){let n=u.readPoint(e),r=u.readPoint(e,E),i=d(n-R),l=d(r-F);if(!T&&!B&&(!e.cancelable||!(T=i>l)))return U(e);let c=u.pointerMove(e);i>S&&(H=!0),p.useFriction(.3).useDuration(1),a.start(),o.add(t.apply(c)),e.preventDefault()}function U(e){let n=m.byDistance(0,!1).index!==g.get(),r=u.pointerUp(e)*(w?z:k)[B?"mouse":"touch"],i=function(e,t){let n=g.add(-1*f(e)),r=m.byDistance(e,!w).distance;return w||d(e)<A?r:O&&t?.5*r:m.byIndex(n.get(),0).distance}(t.apply(r),n),o=function(e,t){var n,r;if(0===e||0===t||d(e)<=d(t))return 0;let i=(n=d(e),r=d(t),d(n-r));return d(i/e)}(r,i);T=!1,N=!1,M.clear(),p.useDuration(L-10*o).useFriction(.68+o/50),s.distance(i,!w),B=!1,h.emit("pointerUp")}function G(e){H&&(e.stopPropagation(),e.preventDefault())}return{init:function(e){C&&I.add(n,"dragstart",e=>e.preventDefault(),P).add(n,"touchmove",()=>void 0,P).add(n,"touchend",()=>void 0).add(n,"touchstart",t).add(n,"mousedown",t).add(n,"touchcancel",U).add(n,"contextmenu",U).add(n,"click",G,!0);function t(t){(c(C)||C(e,t))&&function(e){let t=y(e,i);B=t,(!t||0===e.button)&&!function(e){let t=e.nodeName||"";return _.includes(t)}(e.target)&&(H=w&&t&&!e.buttons&&D,D=d(o.get()-l.get())>=2,N=!0,u.pointerDown(e),p.useFriction(0).useDuration(0),o.set(l),function(){let e=B?r:n;M.add(e,"touchmove",V,P).add(e,"touchend",U).add(e,"mousemove",V,P).add(e,"mouseup",U)}(),R=u.readPoint(e),F=u.readPoint(e,E),h.emit("pointerDown"))}(t)}},pointerDown:function(){return N},destroy:function(){I.clear(),M.clear()}}}(U,V,e,r,i,eg,function(e,t){let n,r;function i(e){return e.timeStamp}function o(n,r){let i=r||e.scroll,o=`client${"x"===i?"X":"Y"}`;return(y(n,t)?n:n.touches[0])[o]}return{pointerDown:function(e){return n=e,r=e,o(e)},pointerMove:function(e){let t=o(e)-o(r),u=i(e)-i(n)>170;return r=e,u&&(n=e),t},pointerUp:function(e){if(!n||!r)return 0;let t=o(r)-o(n),u=i(e)-i(n),l=i(e)-i(r)>170,a=t/u;return u&&!l&&d(a)>.1?a:0},readPoint:o}}(U,i),ep,ed,ey,eh,ev,eu,u,$,M,A,L,0,N),eventStore:ex,percentOfView:$,index:eu,indexPrevious:el,limit:eo,location:ep,offsetLocation:em,options:o,resizeHandler:function(e,t,n,r,i,o,u){let l,a;let s=[],f=!1;function p(e){return i.measureSize(u.measure(e))}return{init:function(i){o&&(a=p(e),s=r.map(p),l=new ResizeObserver(u=>{!f&&(c(o)||o(i,u))&&function(o){for(let u of o){let o=u.target===e,l=r.indexOf(u.target),c=o?a:s[l];if(d(p(o?e:r[l])-c)>=.5){n.requestAnimationFrame(()=>{i.reInit(),t.emit("resize")});break}}}(u)}),[e].concat(r).forEach(e=>l.observe(e)))},destroy:function(){l&&l.disconnect(),f=!0}}}(t,u,i,n,U,R,T),scrollBody:eh,scrollBounds:function(e,t,n,r,i){let o=i.measure(10),u=i.measure(50),l=x(.1,.99),a=!1;return{constrain:function(i){if(!(!a&&e.reachedAny(n.get())&&e.reachedAny(t.get())))return;let c=e.reachedMin(t.get())?"min":"max",s=d(e[c]-t.get()),f=n.get()-t.get(),p=l.constrain(s/u);n.subtract(f*p),!i&&d(f)<o&&(n.set(e.constrain(n.get())),r.useDuration(25).useBaseFriction())},toggleActive:function(e){a=!e}}}(eo,em,eg,eh,$),scrollLooper:function(e,t,n,r){let{reachedMin:i,reachedMax:o}=x(t.min+.1,t.max+.1);return{loop:function(t){if(!(1===t?o(n.get()):-1===t&&i(n.get())))return;let u=-1*t*e;r.forEach(e=>e.add(u))}}}(et,eo,em,[ep,em,eg]),scrollProgress:eb,scrollSnapList:ei.map(eb.get),scrollSnaps:ei,scrollTarget:ev,scrollTo:ey,slideLooper:function(e,t,n,r,i,o,u,l,a,c){let s=p(o),d=g(m(p(o).reverse(),l[0]),r,!1).concat(g(m(s,n-l[0]-1),-r,!0));function f(e,t){return e.reduce((e,t)=>e-o[t],t)}function m(e,t){return e.reduce((e,n)=>f(e,t)>0?e.concat([n]):e,[])}function g(o,l,s){let d=u.map((e,t)=>({start:e-i[t]+.5+l,end:e+n-.5+l}));return o.map(n=>{let i=s?0:-r,o=s?r:0,u=d[n][s?"end":"start"];return{index:n,loopPoint:u,slideLocation:w(-1),translate:S(e,t,c[n]),target:()=>a.get()>u?i:o}})}return{canLoop:function(){return d.every(({index:e})=>.1>=f(s.filter(t=>t!==e),n))},clear:function(){d.forEach(e=>e.translate.clear())},loop:function(){d.forEach(e=>{let{target:t,translate:n,slideLocation:r}=e,i=t();i!==r.get()&&(n.to(i),r.set(i))})},loopPoints:d}}(U,V,G,et,J,Y,K,ei,em,n),slideFocus:eO,slidesHandler:(O=!1,{init:function(e){F&&(s=new MutationObserver(t=>{!O&&(c(F)||F(e,t))&&function(t){for(let n of t)if("childList"===n.type){e.reInit(),u.emit("slidesChanged");break}}(t)})).observe(t,{childList:!0})},destroy:function(){s&&s.disconnect(),O=!0}}),slidesInView:ew,slideIndexes:ea,slideRegistry:eS,slidesToScroll:Q,target:eg,translate:S(U,V,t)};return ej}(e,o,u,E,_,n,A);return n.loop&&!r.slideLooper.canLoop()?t(Object.assign({},n,{loop:!1})):r}(H),L([T,...B.map(({options:e})=>e)]).forEach(e=>M.add(e,"change",U)),H.active&&(r.translate.to(r.location.get()),r.animation.init(),r.slidesInView.init(),r.slideFocus.init(),r.eventHandler.init(W),r.resizeHandler.init(W),r.slidesHandler.init(W),r.options.loop&&r.slideLooper.loop(),o.offsetParent&&u.length&&r.dragHandler.init(W),i=I.init(W,B)))}function U(e,t){let n=q();G(),V(k({startIndex:n},e),t),A.emit("reInit")}function G(){r.dragHandler.destroy(),r.eventStore.clear(),r.translate.clear(),r.slideLooper.clear(),r.resizeHandler.destroy(),r.slidesHandler.destroy(),r.slidesInView.destroy(),r.animation.destroy(),I.destroy(),M.clear()}function $(e,t,n){H.active&&!N&&(r.scrollBody.useBaseFriction().useDuration(!0===t?0:H.duration),r.scrollTo.index(e,n||0))}function q(){return r.index.get()}let W={canScrollNext:function(){return r.index.add(1).get()!==q()},canScrollPrev:function(){return r.index.add(-1).get()!==q()},containerNode:function(){return o},internalEngine:function(){return r},destroy:function(){N||(N=!0,M.clear(),G(),A.emit("destroy"))},off:R,on:D,emit:F,plugins:function(){return i},previousScrollSnap:function(){return r.indexPrevious.get()},reInit:U,rootNode:function(){return e},scrollNext:function(e){$(r.index.add(1).get(),e,-1)},scrollPrev:function(e){$(r.index.add(-1).get(),e,1)},scrollProgress:function(){return r.scrollProgress.get(r.location.get())},scrollSnapList:function(){return r.scrollSnapList},scrollTo:$,selectedScrollSnap:q,slideNodes:function(){return u},slidesInView:function(){return r.slidesInView.get()},slidesNotInView:function(){return r.slidesInView.get(!1)}};return V(t,n),setTimeout(()=>A.emit("init"),0),W}function C(e={},t=[]){let n=(0,r.useRef)(e),i=(0,r.useRef)(t),[l,a]=(0,r.useState)(),[c,s]=(0,r.useState)(),d=(0,r.useCallback)(()=>{l&&l.reInit(n.current,i.current)},[l]);return(0,r.useEffect)(()=>{if("undefined"!=typeof window&&window.document&&window.document.createElement&&c){j.globalOptions=C.globalOptions;let e=j(c,n.current,i.current);return a(e),()=>e.destroy()}a(void 0)},[c,a]),(0,r.useEffect)(()=>{o(n.current,e)||(n.current=e,d())},[e,d]),(0,r.useEffect)(()=>{!function(e,t){if(e.length!==t.length)return!1;let n=u(e),r=u(t);return n.every((e,t)=>o(e,r[t]))}(i.current,t)&&(i.current=t,d())},[t,d]),[s,l]}j.globalOptions=void 0,C.globalOptions=void 0}};