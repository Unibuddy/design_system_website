(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"2KUO":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=a(n("mXGw")),c=a(n("W0B4"));function a(e){return e&&e.__esModule?e:{default:e}}var u=function(e,t){var n=e.children,c=e.color,a=e.size,u=e.style,i=e.width,l=e.height,d=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}(e,["children","color","size","style","width","height"]),s=t.reactIconBase,m=void 0===s?{}:s,p=a||m.size||"1em";return r.default.createElement("svg",o({children:n,fill:"currentColor",preserveAspectRatio:"xMidYMid meet",height:l||p,width:i||p},m,d,{style:o({verticalAlign:"middle",color:c||m.color},m.style||{},u)}))};u.propTypes={color:c.default.string,size:c.default.oneOfType([c.default.string,c.default.number]),width:c.default.oneOfType([c.default.string,c.default.number]),height:c.default.oneOfType([c.default.string,c.default.number]),style:c.default.object},u.contextTypes={reactIconBase:c.default.shape(u.propTypes)},t.default=u,e.exports=t.default},"7IP4":function(e,t){e.exports=function(){}},"7NOV":function(e,t,n){"use strict";n("ABKx"),n("W1QL"),n("ScpY");var o=n("mXGw"),r=n.n(o),c=n("7IP4"),a=n.n(c),u=n("8Jek"),i=n.n(u),l=n("W0B4"),d=n.n(l),s=n("O29h");var m=n("Ba6V"),p=n.n(m);function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var y=r.a.forwardRef((e,t)=>{var{children:n,color:c,block:a,full:u,round:l,iconOnly:d,elevation:m,link:y,size:v,clear:O,onFocus:j,onBlur:h}=e,x=f(e,["children","color","block","full","round","iconOnly","elevation","link","size","clear","onFocus","onBlur"]),g=Object(o.useRef)(),{focusVisible:w,onFocus:E,onBlur:T}=function(){var[e,t]=Object(o.useState)(!1),{hadKeyboardEvent:n,isInitialized:r}=Object(o.useContext)(s.a);return{focusVisible:r?n&&e:e,onFocus:function(){t(!0)},onBlur:function(){t(!1)}}}();return Object(o.useEffect)(()=>{var e=()=>{"0.51"===g.current.style.opacity&&(g.current.style.opacity=null)};return document.addEventListener("pointerup",e),()=>{document.removeEventListener("pointerup",e)}},[]),r.a.createElement("button",b({onPointerDown:()=>{(x.disabled||g.current.style.opacity)&&"1"!==g.current.style.opacity||(g.current.style.opacity="0.51")},role:"button",ref:e=>{g.current=e,null!==t&&"object"===typeof t?t.current=e:"function"===typeof t&&t(e)}},x,{onFocus:function(){E(...arguments),j&&j(...arguments)},onBlur:function(){T(...arguments),h&&h(...arguments)},className:i()(p.a.button,x.className,{[p.a.hasFocus]:w,[p.a[c]]:!0,[p.a[v]]:!0,[p.a.block]:a,[p.a.full]:u,[p.a.clear]:O,[p.a.round]:l,[p.a.iconOnly]:d,[p.a.elevation1]:1===m,[p.a.link]:y})}),n)});y.propTypes={id:d.a.string,type:d.a.string,color:d.a.oneOf(["default","success","primary","danger","light"]),size:d.a.oneOf(["md","sm","lg"]),round:d.a.bool,iconOnly:d.a.bool,disabled:d.a.bool,style:d.a.object,link:d.a.bool,onClick:d.a.func,elevation:d.a.number,className:d.a.string},y.defaultProps={id:null,type:"button",color:"default",size:"md",disabled:!1,round:!1,iconOnly:!1,style:null,link:!1,onClick:a.a,elevation:0,className:""};t.a=y},Ba6V:function(e,t,n){e.exports={button:"iy4WkY9W31JJVWYJJ35NI",hasFocus:"_1c3ekJlZWcl1x-Ej9-qD_F",sm:"GNrmdtfv6ucoXZv2MD0hD",lg:"_2gJtOk6C261gJMbcvxEq-v",link:"_2rO9UuV6NMgWzrapw0RJxK",round:"_3nNlYwSo3qmCY-9z1Usbfx",iconOnly:"_3IYdaA5nHRmFf4127zo-uo",default:"_9uh2nO_oU4LZgJ2hrZz-e",primary:"_2ll4i73vw0mO37URiT9frm",success:"_3IXewjTp-SCe0E56-4sZJ6",danger:"_1XGIOGxJLzDMkJdzQwhMaq",light:"_2jwXOds5iZ2LM-sUcUFUqM",clear:"_2xit8CZL3Lc4Z7clqrw9yn",elevation1:"_1oudz184wG4ZUWXu4YSTbD",block:"_2wVwuwhw__vSWpyT4rbr5P",full:"_1lKeE1tctbV3Eamrk0xyz8"}},ByBq:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/general/button",function(){return n("dkFQ")}])},Fcif:function(e,t,n){"use strict";function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return o}))},LEAW:function(e,t,n){var o=n("X6VK"),r=n("E7Vc"),c=n("GCOZ"),a=/"/g,u=function(e,t,n,o){var r=String(c(e)),u="<"+t;return""!==n&&(u+=" "+n+'="'+String(o).replace(a,"&quot;")+'"'),u+">"+r+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(u),o(o.P+o.F*r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}},MyO7:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=a(n("mXGw")),c=a(n("2KUO"));function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return r.default.createElement(c.default,o({viewBox:"0 0 40 40"},e),r.default.createElement("g",null,r.default.createElement("path",{d:"m30.3 10.9l-10.9 10.9-2.4-2.4 10.9-10.9z m7.3-2.4l2.4 2.4-20.6 20.6-9.6-9.6 2.4-2.4 7.2 7.1z m-37.6 13.4l2.5-2.4 9.5 9.6-2.4 2.4z"})))},e.exports=t.default},O29h:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return a}));var o=n("mXGw"),r=n.n(o),c=r.a.createContext({hadKeyboardEvent:!0,isInitialized:!1});function a(e){var{children:t}=e,[n,a]=Object(o.useState)(!0),u=Object(o.useMemo)(()=>({hadKeyboardEvent:n,isInitialized:!0}),[n]);return Object(o.useEffect)(()=>{function e(){a(!1)}function t(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(a(!1),o())}function n(){document.addEventListener("mousemove",t),document.addEventListener("mousedown",t),document.addEventListener("mouseup",t),document.addEventListener("pointermove",t),document.addEventListener("pointerdown",t),document.addEventListener("pointerup",t),document.addEventListener("touchmove",t),document.addEventListener("touchstart",t),document.addEventListener("touchend",t)}function o(){document.removeEventListener("mousemove",t),document.removeEventListener("mousedown",t),document.removeEventListener("mouseup",t),document.removeEventListener("pointermove",t),document.removeEventListener("pointerdown",t),document.removeEventListener("pointerup",t),document.removeEventListener("touchmove",t),document.removeEventListener("touchstart",t),document.removeEventListener("touchend",t)}function r(e){e.metaKey||e.altKey||e.ctrlKey||a(!0)}function c(){"hidden"===document.visibilityState&&(a(!0),n())}return document.addEventListener("keydown",r,!0),document.addEventListener("mousedown",e,!0),document.addEventListener("pointerdown",e,!0),document.addEventListener("touchstart",e,!0),document.addEventListener("visibilitychange",c,!0),n(),()=>{document.removeEventListener("keydown",r,!0),document.removeEventListener("mousedown",e,!0),document.removeEventListener("pointerdown",e,!0),document.removeEventListener("touchstart",e,!0),document.removeEventListener("visibilitychange",c,!0),o()}},[a]),r.a.createElement(c.Provider,{value:u},t)}},SAVP:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s}));var o=n("mXGw"),r=n.n(o),c=r.a.createContext({}),a=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},u=function(e){var t=a(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},i="mdxType",l={inlineCode:"code",wrapper:function(e){return r.a.createElement(r.a.Fragment,{},e.children)}},d=function(e){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}(e,["components","mdxType","originalType","parentName"]),i=a(t);return r.a.createElement(i[c+"."+n]||i[n]||l[n]||o,t?Object.assign({},u,{components:t}):u)};function s(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[i]="string"==typeof e?e:o,a[1]=u;for(var s=2;s<c;s++)a[s]=n[s];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},ScpY:function(e,t,n){"use strict";n("LEAW")("link",(function(e){return function(t){return e(this,"a","href",t)}}))},WIiN:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var o=n("mXGw"),r=n.n(o),c=n("MyO7"),a=n.n(c);function u(){return r.a.createElement(a.a,null)}},"dV/x":function(e,t,n){"use strict";function o(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,"a",(function(){return o}))},dkFQ:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return v}));var o=n("Fcif"),r=n("dV/x"),c=n("mXGw"),a=n.n(c),u=n("SAVP"),i=n("7NOV"),l=n("WIiN"),d=(a.a.createElement,function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(u.b)("div",t)}}),s=d("Example"),m=d("Stack"),p=d("Inline"),b=d("Row"),f={},y="wrapper";function v(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(u.b)(y,Object(o.a)({},f,n,{components:t,mdxType:"MDXLayout"}),Object(u.b)("h1",null,"Button"),Object(u.b)("h3",null,"Colors"),Object(u.b)(s,{title:"color",mdxType:"Example"},Object(u.b)(m,{space:"small",mdxType:"Stack"},Object(u.b)(p,{space:"medium",mdxType:"Inline"},Object(u.b)(i.a,{mdxType:"Button"},"Default"),Object(u.b)(i.a,{color:"light",mdxType:"Button"},"Light"),Object(u.b)(i.a,{color:"primary",mdxType:"Button"},"Primary"),Object(u.b)(i.a,{color:"success",mdxType:"Button"},"Sucess"),Object(u.b)(i.a,{color:"danger",mdxType:"Button"},"Danger")),Object(u.b)(p,{space:"medium",mdxType:"Inline"},Object(u.b)(i.a,{clear:!0,mdxType:"Button"},"Default"),Object(u.b)(i.a,{clear:!0,color:"light",mdxType:"Button"},"Light"),Object(u.b)(i.a,{clear:!0,color:"primary",mdxType:"Button"},"Primary"),Object(u.b)(i.a,{clear:!0,color:"success",mdxType:"Button"},"Sucess"),Object(u.b)(i.a,{clear:!0,color:"danger",mdxType:"Button"},"Danger")))),Object(u.b)("h3",null,"Elevation"),Object(u.b)(s,{title:"elevation={1}",mdxType:"Example"},Object(u.b)(b,{mdxType:"Row"},Object(u.b)(i.a,{elevation:1,mdxType:"Button"},"Default"),Object(u.b)(i.a,{elevation:1,color:"light",mdxType:"Button"},"Light"),Object(u.b)(i.a,{elevation:1,color:"primary",mdxType:"Button"},"Primary"),Object(u.b)(i.a,{elevation:1,color:"success",mdxType:"Button"},"Sucess"),Object(u.b)(i.a,{elevation:1,color:"danger",mdxType:"Button"},"Danger"))),Object(u.b)("h3",null,"Variants"),Object(u.b)(s,{mdxType:"Example"},Object(u.b)(b,{mdxType:"Row"},Object(u.b)(i.a,{mdxType:"Button"},"Default"),Object(u.b)(i.a,{clear:!0,mdxType:"Button"},"Clear"),Object(u.b)("div",{style:{display:"flex",alignItems:"center"}},Object(u.b)(i.a,{link:!0,mdxType:"Button"},"Link")),Object(u.b)(i.a,{round:!0,mdxType:"Button"},"Round"),Object(u.b)(i.a,{iconOnly:!0,mdxType:"Button"},Object(u.b)(l.a,{mdxType:"ReadIcon"})),Object(u.b)(i.a,{iconOnly:!0,round:!0,mdxType:"Button"},Object(u.b)(l.a,{mdxType:"ReadIcon"})))),Object(u.b)("h3",null,"Display"),Object(u.b)(s,{mdxType:"Example"},Object(u.b)(m,{space:"medium",mdxType:"Stack"},Object(u.b)(i.a,{mdxType:"Button"},"Default"),Object(u.b)(i.a,{block:!0,mdxType:"Button"},"Block"),Object(u.b)(i.a,{full:!0,mdxType:"Button"},"Full"))),Object(u.b)("h3",null,"How to use full"),Object(u.b)("p",null,"Full is meant to be used on list like components that need to be clickable."),Object(u.b)("div",{style:{border:"1px solid #e0e5e8",borderTop:0,borderBottom:0}},Object(u.b)(i.a,{full:!0,mdxType:"Button"},"Item 1"),Object(u.b)(i.a,{full:!0,mdxType:"Button"},"Item 2"),Object(u.b)(i.a,{full:!0,mdxType:"Button"},"Item 3")))}v.isMDXComponent=!0}},[["ByBq",0,1,2,3]]]);