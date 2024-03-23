"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[449],{2449:function(e,t,n){let r,o;n.d(t,{x8:function(){return e8},VY:function(){return e9},dk:function(){return e6},GG:function(){return eV},aV:function(){return e7},h_:function(){return e4},fC:function(){return e1},Dx:function(){return e3},xz:function(){return e2}});var u,a,i,l,c,s,d=n(2110),f=n(2265),v=n.t(f,2);function p(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(null==e||e(r),!1===n||!r.defaultPrevented)return null==t?void 0:t(r)}}var m=n(1266);let h=(null==globalThis?void 0:globalThis.document)?f.useLayoutEffect:()=>{},g=v["useId".toString()]||(()=>void 0),E=0;function y(e){let[t,n]=f.useState(g());return h(()=>{e||n(e=>null!=e?e:String(E++))},[e]),e||(t?`radix-${t}`:"")}function b(e){let t=(0,f.useRef)(e);return(0,f.useEffect)(()=>{t.current=e}),(0,f.useMemo)(()=>(...e)=>{var n;return null===(n=t.current)||void 0===n?void 0:n.call(t,...e)},[])}var w=n(4887),C=n(9143);let N=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let n=(0,f.forwardRef)((e,n)=>{let{asChild:r,...o}=e,u=r?C.g7:t;return(0,f.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),(0,f.createElement)(u,(0,d.Z)({},o,{ref:n}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{}),T="dismissableLayer.update",D=(0,f.createContext)({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),R=(0,f.forwardRef)((e,t)=>{var n;let{disableOutsidePointerEvents:o=!1,onEscapeKeyDown:u,onPointerDownOutside:a,onFocusOutside:i,onInteractOutside:l,onDismiss:c,...s}=e,v=(0,f.useContext)(D),[h,g]=(0,f.useState)(null),E=null!==(n=null==h?void 0:h.ownerDocument)&&void 0!==n?n:null==globalThis?void 0:globalThis.document,[,y]=(0,f.useState)({}),w=(0,m.e)(t,e=>g(e)),C=Array.from(v.layers),[R]=[...v.layersWithOutsidePointerEventsDisabled].slice(-1),L=C.indexOf(R),O=h?C.indexOf(h):-1,k=v.layersWithOutsidePointerEventsDisabled.size>0,_=O>=L,M=function(e,t=null==globalThis?void 0:globalThis.document){let n=b(e),r=(0,f.useRef)(!1),o=(0,f.useRef)(()=>{});return(0,f.useEffect)(()=>{let e=e=>{if(e.target&&!r.current){let r={originalEvent:e};function u(){P("dismissableLayer.pointerDownOutside",n,r,{discrete:!0})}"touch"===e.pointerType?(t.removeEventListener("click",o.current),o.current=u,t.addEventListener("click",o.current,{once:!0})):u()}else t.removeEventListener("click",o.current);r.current=!1},u=window.setTimeout(()=>{t.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(u),t.removeEventListener("pointerdown",e),t.removeEventListener("click",o.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}(e=>{let t=e.target,n=[...v.branches].some(e=>e.contains(t));!_||n||(null==a||a(e),null==l||l(e),e.defaultPrevented||null==c||c())},E),A=function(e,t=null==globalThis?void 0:globalThis.document){let n=b(e),r=(0,f.useRef)(!1);return(0,f.useEffect)(()=>{let e=e=>{e.target&&!r.current&&P("dismissableLayer.focusOutside",n,{originalEvent:e},{discrete:!1})};return t.addEventListener("focusin",e),()=>t.removeEventListener("focusin",e)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}(e=>{let t=e.target;[...v.branches].some(e=>e.contains(t))||(null==i||i(e),null==l||l(e),e.defaultPrevented||null==c||c())},E);return!function(e,t=null==globalThis?void 0:globalThis.document){let n=b(e);(0,f.useEffect)(()=>{let e=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",e),()=>t.removeEventListener("keydown",e)},[n,t])}(e=>{O!==v.layers.size-1||(null==u||u(e),!e.defaultPrevented&&c&&(e.preventDefault(),c()))},E),(0,f.useEffect)(()=>{if(h)return o&&(0===v.layersWithOutsidePointerEventsDisabled.size&&(r=E.body.style.pointerEvents,E.body.style.pointerEvents="none"),v.layersWithOutsidePointerEventsDisabled.add(h)),v.layers.add(h),S(),()=>{o&&1===v.layersWithOutsidePointerEventsDisabled.size&&(E.body.style.pointerEvents=r)}},[h,E,o,v]),(0,f.useEffect)(()=>()=>{h&&(v.layers.delete(h),v.layersWithOutsidePointerEventsDisabled.delete(h),S())},[h,v]),(0,f.useEffect)(()=>{let e=()=>y({});return document.addEventListener(T,e),()=>document.removeEventListener(T,e)},[]),(0,f.createElement)(N.div,(0,d.Z)({},s,{ref:w,style:{pointerEvents:k?_?"auto":"none":void 0,...e.style},onFocusCapture:p(e.onFocusCapture,A.onFocusCapture),onBlurCapture:p(e.onBlurCapture,A.onBlurCapture),onPointerDownCapture:p(e.onPointerDownCapture,M.onPointerDownCapture)}))});function S(){let e=new CustomEvent(T);document.dispatchEvent(e)}function P(e,t,n,{discrete:r}){let o=n.originalEvent.target,u=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});(t&&o.addEventListener(e,t,{once:!0}),r)?o&&(0,w.flushSync)(()=>o.dispatchEvent(u)):o.dispatchEvent(u)}let L="focusScope.autoFocusOnMount",O="focusScope.autoFocusOnUnmount",k={bubbles:!1,cancelable:!0},_=(0,f.forwardRef)((e,t)=>{let{loop:n=!1,trapped:r=!1,onMountAutoFocus:o,onUnmountAutoFocus:u,...a}=e,[i,l]=(0,f.useState)(null),c=b(o),s=b(u),v=(0,f.useRef)(null),p=(0,m.e)(t,e=>l(e)),h=(0,f.useRef)({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;(0,f.useEffect)(()=>{if(r){function e(e){if(h.paused||!i)return;let t=e.target;i.contains(t)?v.current=t:x(v.current,{select:!0})}function t(e){if(h.paused||!i)return;let t=e.relatedTarget;null===t||i.contains(t)||x(v.current,{select:!0})}document.addEventListener("focusin",e),document.addEventListener("focusout",t);let n=new MutationObserver(function(e){if(document.activeElement===document.body)for(let t of e)t.removedNodes.length>0&&x(i)});return i&&n.observe(i,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),n.disconnect()}}},[r,i,h.paused]),(0,f.useEffect)(()=>{if(i){I.add(h);let e=document.activeElement;if(!i.contains(e)){let t=new CustomEvent(L,k);i.addEventListener(L,c),i.dispatchEvent(t),t.defaultPrevented||(function(e,{select:t=!1}={}){let n=document.activeElement;for(let r of e)if(x(r,{select:t}),document.activeElement!==n)return}(M(i).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&x(i))}return()=>{i.removeEventListener(L,c),setTimeout(()=>{let t=new CustomEvent(O,k);i.addEventListener(O,s),i.dispatchEvent(t),t.defaultPrevented||x(null!=e?e:document.body,{select:!0}),i.removeEventListener(O,s),I.remove(h)},0)}}},[i,c,s,h]);let g=(0,f.useCallback)(e=>{if(!n&&!r||h.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,o=document.activeElement;if(t&&o){let t=e.currentTarget,[r,u]=function(e){let t=M(e);return[A(t,e),A(t.reverse(),e)]}(t);r&&u?e.shiftKey||o!==u?e.shiftKey&&o===r&&(e.preventDefault(),n&&x(u,{select:!0})):(e.preventDefault(),n&&x(r,{select:!0})):o===t&&e.preventDefault()}},[n,r,h.paused]);return(0,f.createElement)(N.div,(0,d.Z)({tabIndex:-1},a,{ref:p,onKeyDown:g}))});function M(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function A(e,t){for(let n of e)if(!function(e,{upTo:t}){if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===t||e!==t);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(n,{upTo:t}))return n}function x(e,{select:t=!1}={}){if(e&&e.focus){var n;let r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&(n=e)instanceof HTMLInputElement&&"select"in n&&t&&e.select()}}let I=(o=[],{add(e){let t=o[0];e!==t&&(null==t||t.pause()),(o=F(o,e)).unshift(e)},remove(e){var t;null===(t=(o=F(o,e))[0])||void 0===t||t.resume()}});function F(e,t){let n=[...e],r=n.indexOf(t);return -1!==r&&n.splice(r,1),n}let W=(0,f.forwardRef)((e,t)=>{var n;let{container:r=null==globalThis?void 0:null===(n=globalThis.document)||void 0===n?void 0:n.body,...o}=e;return r?w.createPortal((0,f.createElement)(N.div,(0,d.Z)({},o,{ref:t})),r):null}),Z=e=>{let{present:t,children:n}=e,r=function(e){var t,n;let[r,o]=(0,f.useState)(),u=(0,f.useRef)({}),a=(0,f.useRef)(e),i=(0,f.useRef)("none"),[l,c]=(t=e?"mounted":"unmounted",n={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},(0,f.useReducer)((e,t)=>{let r=n[e][t];return null!=r?r:e},t));return(0,f.useEffect)(()=>{let e=U(u.current);i.current="mounted"===l?e:"none"},[l]),h(()=>{let t=u.current,n=a.current;if(n!==e){let r=i.current,o=U(t);e?c("MOUNT"):"none"===o||(null==t?void 0:t.display)==="none"?c("UNMOUNT"):n&&r!==o?c("ANIMATION_OUT"):c("UNMOUNT"),a.current=e}},[e,c]),h(()=>{if(r){let e=e=>{let t=U(u.current).includes(e.animationName);e.target===r&&t&&(0,w.flushSync)(()=>c("ANIMATION_END"))},t=e=>{e.target===r&&(i.current=U(u.current))};return r.addEventListener("animationstart",t),r.addEventListener("animationcancel",e),r.addEventListener("animationend",e),()=>{r.removeEventListener("animationstart",t),r.removeEventListener("animationcancel",e),r.removeEventListener("animationend",e)}}c("ANIMATION_END")},[r,c]),{isPresent:["mounted","unmountSuspended"].includes(l),ref:(0,f.useCallback)(e=>{e&&(u.current=getComputedStyle(e)),o(e)},[])}}(t),o="function"==typeof n?n({present:r.isPresent}):f.Children.only(n),u=(0,m.e)(r.ref,o.ref);return"function"==typeof n||r.isPresent?(0,f.cloneElement)(o,{ref:u}):null};function U(e){return(null==e?void 0:e.animationName)||"none"}Z.displayName="Presence";let B=0;function K(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}var $=n(9703),Y="right-scroll-bar-position",z="width-before-scroll-bar";function X(e,t){return"function"==typeof e?e(t):e&&(e.current=t),e}var j=new WeakMap,H=(void 0===u&&(u={}),(void 0===a&&(a=function(e){return e}),i=[],l=!1,c={read:function(){if(l)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return i.length?i[i.length-1]:null},useMedium:function(e){var t=a(e,l);return i.push(t),function(){i=i.filter(function(e){return e!==t})}},assignSyncMedium:function(e){for(l=!0;i.length;){var t=i;i=[],t.forEach(e)}i={push:function(t){return e(t)},filter:function(){return i}}},assignMedium:function(e){l=!0;var t=[];if(i.length){var n=i;i=[],n.forEach(e),t=i}var r=function(){var n=t;t=[],n.forEach(e)},o=function(){return Promise.resolve().then(r)};o(),i={push:function(e){t.push(e),o()},filter:function(e){return t=t.filter(e),i}}}}).options=(0,$.pi)({async:!0,ssr:!1},u),c),q=function(){},G=f.forwardRef(function(e,t){var n,r,o,u,a=f.useRef(null),i=f.useState({onScrollCapture:q,onWheelCapture:q,onTouchMoveCapture:q}),l=i[0],c=i[1],s=e.forwardProps,d=e.children,v=e.className,p=e.removeScrollBar,m=e.enabled,h=e.shards,g=e.sideCar,E=e.noIsolation,y=e.inert,b=e.allowPinchZoom,w=e.as,C=(0,$._T)(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),N=(n=[a,t],r=function(e){return n.forEach(function(t){return X(t,e)})},(o=(0,f.useState)(function(){return{value:null,callback:r,facade:{get current(){return o.value},set current(value){var e=o.value;e!==value&&(o.value=value,o.callback(value,e))}}}})[0]).callback=r,u=o.facade,f.useLayoutEffect(function(){var e=j.get(u);if(e){var t=new Set(e),r=new Set(n),o=u.current;t.forEach(function(e){r.has(e)||X(e,null)}),r.forEach(function(e){t.has(e)||X(e,o)})}j.set(u,n)},[n]),u),T=(0,$.pi)((0,$.pi)({},C),l);return f.createElement(f.Fragment,null,m&&f.createElement(g,{sideCar:H,removeScrollBar:p,shards:h,noIsolation:E,inert:y,setCallbacks:c,allowPinchZoom:!!b,lockRef:a}),s?f.cloneElement(f.Children.only(d),(0,$.pi)((0,$.pi)({},T),{ref:N})):f.createElement(void 0===w?"div":w,(0,$.pi)({},T,{className:v,ref:N}),d))});G.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},G.classNames={fullWidth:z,zeroRight:Y};var V=function(e){var t=e.sideCar,n=(0,$._T)(e,["sideCar"]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw Error("Sidecar medium not found");return f.createElement(r,(0,$.pi)({},n))};V.isSideCarExport=!0;var J=function(){var e=0,t=null;return{add:function(r){if(0==e&&(t=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=s||n.nc;return t&&e.setAttribute("nonce",t),e}())){var o,u;(o=t).styleSheet?o.styleSheet.cssText=r:o.appendChild(document.createTextNode(r)),u=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(u)}e++},remove:function(){--e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},Q=function(){var e=J();return function(t,n){f.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},ee=function(){var e=Q();return function(t){return e(t.styles,t.dynamic),null}},et={left:0,top:0,right:0,gap:0},en=function(e){return parseInt(e||"",10)||0},er=function(e){var t=window.getComputedStyle(document.body),n=t["padding"===e?"paddingLeft":"marginLeft"],r=t["padding"===e?"paddingTop":"marginTop"],o=t["padding"===e?"paddingRight":"marginRight"];return[en(n),en(r),en(o)]},eo=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return et;var t=er(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},eu=ee(),ea="data-scroll-locked",ei=function(e,t,n,r){var o=e.left,u=e.top,a=e.right,i=e.gap;return void 0===n&&(n="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(i,"px ").concat(r,";\n  }\n  body[").concat(ea,"] {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(r,";"),"margin"===n&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(u,"px;\n    padding-right: ").concat(a,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(i,"px ").concat(r,";\n    "),"padding"===n&&"padding-right: ".concat(i,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(Y," {\n    right: ").concat(i,"px ").concat(r,";\n  }\n  \n  .").concat(z," {\n    margin-right: ").concat(i,"px ").concat(r,";\n  }\n  \n  .").concat(Y," .").concat(Y," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(z," .").concat(z," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body[").concat(ea,"] {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(i,"px;\n  }\n")},el=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=void 0===r?"margin":r,u=f.useMemo(function(){return eo(o)},[o]);return f.useEffect(function(){return document.body.setAttribute(ea,""),function(){document.body.removeAttribute(ea)}},[]),f.createElement(eu,{styles:ei(u,!t,o,n?"":"!important")})},ec=!1;if("undefined"!=typeof window)try{var es=Object.defineProperty({},"passive",{get:function(){return ec=!0,!0}});window.addEventListener("test",es,es),window.removeEventListener("test",es,es)}catch(e){ec=!1}var ed=!!ec&&{passive:!1},ef=function(e,t){var n=window.getComputedStyle(e);return"hidden"!==n[t]&&!(n.overflowY===n.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===n[t])},ev=function(e,t){var n=t;do{if("undefined"!=typeof ShadowRoot&&n instanceof ShadowRoot&&(n=n.host),ep(e,n)){var r=em(e,n);if(r[1]>r[2])return!0}n=n.parentNode}while(n&&n!==document.body);return!1},ep=function(e,t){return"v"===e?ef(t,"overflowY"):ef(t,"overflowX")},em=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},eh=function(e,t,n,r,o){var u,a=(u=window.getComputedStyle(t).direction,"h"===e&&"rtl"===u?-1:1),i=a*r,l=n.target,c=t.contains(l),s=!1,d=i>0,f=0,v=0;do{var p=em(e,l),m=p[0],h=p[1]-p[2]-a*m;(m||h)&&ep(e,l)&&(f+=h,v+=m),l=l.parentNode}while(!c&&l!==document.body||c&&(t.contains(l)||t===l));return d&&(o&&0===f||!o&&i>f)?s=!0:!d&&(o&&0===v||!o&&-i>v)&&(s=!0),s},eg=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},eE=function(e){return[e.deltaX,e.deltaY]},ey=function(e){return e&&"current"in e?e.current:e},eb=0,ew=[],eC=(H.useMedium(function(e){var t=f.useRef([]),n=f.useRef([0,0]),r=f.useRef(),o=f.useState(eb++)[0],u=f.useState(function(){return ee()})[0],a=f.useRef(e);f.useEffect(function(){a.current=e},[e]),f.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var t=(0,$.ev)([e.lockRef.current],(e.shards||[]).map(ey),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var i=f.useCallback(function(e,t){if("touches"in e&&2===e.touches.length)return!a.current.allowPinchZoom;var o,u=eg(e),i=n.current,l="deltaX"in e?e.deltaX:i[0]-u[0],c="deltaY"in e?e.deltaY:i[1]-u[1],s=e.target,d=Math.abs(l)>Math.abs(c)?"h":"v";if("touches"in e&&"h"===d&&"range"===s.type)return!1;var f=ev(d,s);if(!f)return!0;if(f?o=d:(o="v"===d?"h":"v",f=ev(d,s)),!f)return!1;if(!r.current&&"changedTouches"in e&&(l||c)&&(r.current=o),!o)return!0;var v=r.current||o;return eh(v,t,e,"h"===v?l:c,!0)},[]),l=f.useCallback(function(e){if(ew.length&&ew[ew.length-1]===u){var n="deltaY"in e?eE(e):eg(e),r=t.current.filter(function(t){var r;return t.name===e.type&&t.target===e.target&&(r=t.delta)[0]===n[0]&&r[1]===n[1]})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var o=(a.current.shards||[]).map(ey).filter(Boolean).filter(function(t){return t.contains(e.target)});(o.length>0?i(e,o[0]):!a.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),c=f.useCallback(function(e,n,r,o){var u={name:e,delta:n,target:r,should:o};t.current.push(u),setTimeout(function(){t.current=t.current.filter(function(e){return e!==u})},1)},[]),s=f.useCallback(function(e){n.current=eg(e),r.current=void 0},[]),d=f.useCallback(function(t){c(t.type,eE(t),t.target,i(t,e.lockRef.current))},[]),v=f.useCallback(function(t){c(t.type,eg(t),t.target,i(t,e.lockRef.current))},[]);f.useEffect(function(){return ew.push(u),e.setCallbacks({onScrollCapture:d,onWheelCapture:d,onTouchMoveCapture:v}),document.addEventListener("wheel",l,ed),document.addEventListener("touchmove",l,ed),document.addEventListener("touchstart",s,ed),function(){ew=ew.filter(function(e){return e!==u}),document.removeEventListener("wheel",l,ed),document.removeEventListener("touchmove",l,ed),document.removeEventListener("touchstart",s,ed)}},[]);var p=e.removeScrollBar,m=e.inert;return f.createElement(f.Fragment,null,m?f.createElement(u,{styles:"\n  .block-interactivity-".concat(o," {pointer-events: none;}\n  .allow-interactivity-").concat(o," {pointer-events: all;}\n")}):null,p?f.createElement(el,{gapMode:"margin"}):null)}),V),eN=f.forwardRef(function(e,t){return f.createElement(G,(0,$.pi)({},e,{ref:t,sideCar:eC}))});eN.classNames=G.classNames;var eT=new WeakMap,eD=new WeakMap,eR={},eS=0,eP=function(e){return e&&(e.host||eP(e.parentNode))},eL=function(e,t,n,r){var o=(Array.isArray(e)?e:[e]).map(function(e){if(t.contains(e))return e;var n=eP(e);return n&&t.contains(n)?n:(console.error("aria-hidden",e,"in not contained inside",t,". Doing nothing"),null)}).filter(function(e){return!!e});eR[n]||(eR[n]=new WeakMap);var u=eR[n],a=[],i=new Set,l=new Set(o),c=function(e){!e||i.has(e)||(i.add(e),c(e.parentNode))};o.forEach(c);var s=function(e){!e||l.has(e)||Array.prototype.forEach.call(e.children,function(e){if(i.has(e))s(e);else{var t=e.getAttribute(r),o=null!==t&&"false"!==t,l=(eT.get(e)||0)+1,c=(u.get(e)||0)+1;eT.set(e,l),u.set(e,c),a.push(e),1===l&&o&&eD.set(e,!0),1===c&&e.setAttribute(n,"true"),o||e.setAttribute(r,"true")}})};return s(t),i.clear(),eS++,function(){a.forEach(function(e){var t=eT.get(e)-1,o=u.get(e)-1;eT.set(e,t),u.set(e,o),t||(eD.has(e)||e.removeAttribute(r),eD.delete(e)),o||e.removeAttribute(n)}),--eS||(eT=new WeakMap,eT=new WeakMap,eD=new WeakMap,eR={})}},eO=function(e,t,n){void 0===n&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=t||("undefined"==typeof document?null:(Array.isArray(e)?e[0]:e).ownerDocument.body);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),eL(r,o,n,"aria-hidden")):function(){return null}};let ek="Dialog",[e_,eM]=function(e,t=[]){let n=[],r=()=>{let t=n.map(e=>(0,f.createContext)(e));return function(n){let r=(null==n?void 0:n[e])||t;return(0,f.useMemo)(()=>({[`__scope${e}`]:{...n,[e]:r}}),[n,r])}};return r.scopeName=e,[function(t,r){let o=(0,f.createContext)(r),u=n.length;function a(t){let{scope:n,children:r,...a}=t,i=(null==n?void 0:n[e][u])||o,l=(0,f.useMemo)(()=>a,Object.values(a));return(0,f.createElement)(i.Provider,{value:l},r)}return n=[...n,r],a.displayName=t+"Provider",[a,function(n,a){let i=(null==a?void 0:a[e][u])||o,l=(0,f.useContext)(i);if(l)return l;if(void 0!==r)return r;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let r=n.reduce((t,{useScope:n,scopeName:r})=>{let o=n(e)[`__scope${r}`];return{...t,...o}},{});return(0,f.useMemo)(()=>({[`__scope${t.scopeName}`]:r}),[r])}};return n.scopeName=t.scopeName,n}(r,...t)]}(ek),[eA,ex]=e_(ek),eI=(0,f.forwardRef)((e,t)=>{let{__scopeDialog:n,...r}=e,o=ex("DialogTrigger",n),u=(0,m.e)(t,o.triggerRef);return(0,f.createElement)(N.button,(0,d.Z)({type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":eJ(o.open)},r,{ref:u,onClick:p(e.onClick,o.onOpenToggle)}))}),eF="DialogPortal",[eW,eZ]=e_(eF,{forceMount:void 0}),eU="DialogOverlay",eB=(0,f.forwardRef)((e,t)=>{let n=eZ(eU,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,u=ex(eU,e.__scopeDialog);return u.modal?(0,f.createElement)(Z,{present:r||u.open},(0,f.createElement)(eK,(0,d.Z)({},o,{ref:t}))):null}),eK=(0,f.forwardRef)((e,t)=>{let{__scopeDialog:n,...r}=e,o=ex(eU,n);return(0,f.createElement)(eN,{as:C.g7,allowPinchZoom:!0,shards:[o.contentRef]},(0,f.createElement)(N.div,(0,d.Z)({"data-state":eJ(o.open)},r,{ref:t,style:{pointerEvents:"auto",...r.style}})))}),e$="DialogContent",eY=(0,f.forwardRef)((e,t)=>{let n=eZ(e$,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,u=ex(e$,e.__scopeDialog);return(0,f.createElement)(Z,{present:r||u.open},u.modal?(0,f.createElement)(ez,(0,d.Z)({},o,{ref:t})):(0,f.createElement)(eX,(0,d.Z)({},o,{ref:t})))}),ez=(0,f.forwardRef)((e,t)=>{let n=ex(e$,e.__scopeDialog),r=(0,f.useRef)(null),o=(0,m.e)(t,n.contentRef,r);return(0,f.useEffect)(()=>{let e=r.current;if(e)return eO(e)},[]),(0,f.createElement)(ej,(0,d.Z)({},e,{ref:o,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:p(e.onCloseAutoFocus,e=>{var t;e.preventDefault(),null===(t=n.triggerRef.current)||void 0===t||t.focus()}),onPointerDownOutside:p(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey;(2===t.button||n)&&e.preventDefault()}),onFocusOutside:p(e.onFocusOutside,e=>e.preventDefault())}))}),eX=(0,f.forwardRef)((e,t)=>{let n=ex(e$,e.__scopeDialog),r=(0,f.useRef)(!1),o=(0,f.useRef)(!1);return(0,f.createElement)(ej,(0,d.Z)({},e,{ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var u,a;null===(u=e.onCloseAutoFocus)||void 0===u||u.call(e,t),t.defaultPrevented||(r.current||null===(a=n.triggerRef.current)||void 0===a||a.focus(),t.preventDefault()),r.current=!1,o.current=!1},onInteractOutside:t=>{var u,a;null===(u=e.onInteractOutside)||void 0===u||u.call(e,t),t.defaultPrevented||(r.current=!0,"pointerdown"!==t.detail.originalEvent.type||(o.current=!0));let i=t.target;(null===(a=n.triggerRef.current)||void 0===a?void 0:a.contains(i))&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&o.current&&t.preventDefault()}}))}),ej=(0,f.forwardRef)((e,t)=>{let{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:o,onCloseAutoFocus:u,...a}=e,i=ex(e$,n),l=(0,f.useRef)(null),c=(0,m.e)(t,l);return(0,f.useEffect)(()=>{var e,t;let n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",null!==(e=n[0])&&void 0!==e?e:K()),document.body.insertAdjacentElement("beforeend",null!==(t=n[1])&&void 0!==t?t:K()),B++,()=>{1===B&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),B--}},[]),(0,f.createElement)(f.Fragment,null,(0,f.createElement)(_,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:o,onUnmountAutoFocus:u},(0,f.createElement)(R,(0,d.Z)({role:"dialog",id:i.contentId,"aria-describedby":i.descriptionId,"aria-labelledby":i.titleId,"data-state":eJ(i.open)},a,{ref:c,onDismiss:()=>i.onOpenChange(!1)}))),!1)}),eH="DialogTitle",eq=(0,f.forwardRef)((e,t)=>{let{__scopeDialog:n,...r}=e,o=ex(eH,n);return(0,f.createElement)(N.h2,(0,d.Z)({id:o.titleId},r,{ref:t}))}),eG=(0,f.forwardRef)((e,t)=>{let{__scopeDialog:n,...r}=e,o=ex("DialogDescription",n);return(0,f.createElement)(N.p,(0,d.Z)({id:o.descriptionId},r,{ref:t}))}),eV=(0,f.forwardRef)((e,t)=>{let{__scopeDialog:n,...r}=e,o=ex("DialogClose",n);return(0,f.createElement)(N.button,(0,d.Z)({type:"button"},r,{ref:t,onClick:p(e.onClick,()=>o.onOpenChange(!1))}))});function eJ(e){return e?"open":"closed"}let[eQ,e0]=function(e,t){let n=(0,f.createContext)(t);function r(e){let{children:t,...r}=e,o=(0,f.useMemo)(()=>r,Object.values(r));return(0,f.createElement)(n.Provider,{value:o},t)}return r.displayName=e+"Provider",[r,function(r){let o=(0,f.useContext)(n);if(o)return o;if(void 0!==t)return t;throw Error(`\`${r}\` must be used within \`${e}\``)}]}("DialogTitleWarning",{contentName:e$,titleName:eH,docsSlug:"dialog"}),e1=e=>{let{__scopeDialog:t,children:n,open:r,defaultOpen:o,onOpenChange:u,modal:a=!0}=e,i=(0,f.useRef)(null),l=(0,f.useRef)(null),[c=!1,s]=function({prop:e,defaultProp:t,onChange:n=()=>{}}){let[r,o]=function({defaultProp:e,onChange:t}){let n=(0,f.useState)(e),[r]=n,o=(0,f.useRef)(r),u=b(t);return(0,f.useEffect)(()=>{o.current!==r&&(u(r),o.current=r)},[r,o,u]),n}({defaultProp:t,onChange:n}),u=void 0!==e,a=u?e:r,i=b(n);return[a,(0,f.useCallback)(t=>{if(u){let n="function"==typeof t?t(e):t;n!==e&&i(n)}else o(t)},[u,e,o,i])]}({prop:r,defaultProp:o,onChange:u});return(0,f.createElement)(eA,{scope:t,triggerRef:i,contentRef:l,contentId:y(),titleId:y(),descriptionId:y(),open:c,onOpenChange:s,onOpenToggle:(0,f.useCallback)(()=>s(e=>!e),[s]),modal:a},n)},e2=eI,e4=e=>{let{__scopeDialog:t,forceMount:n,children:r,container:o}=e,u=ex(eF,t);return(0,f.createElement)(eW,{scope:t,forceMount:n},f.Children.map(r,e=>(0,f.createElement)(Z,{present:n||u.open},(0,f.createElement)(W,{asChild:!0,container:o},e))))},e7=eB,e9=eY,e3=eq,e6=eG,e8=eV}}]);