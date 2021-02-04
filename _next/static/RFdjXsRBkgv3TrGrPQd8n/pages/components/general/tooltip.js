(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"+wNj":function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,"a",(function(){return r}))},HbGN:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("+wNj");function o(e,t){if(null==e)return{};var n,o,a=Object(r.a)(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}},IYXY:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var r=n("cxan"),o=n("HbGN"),a=n("ERkP"),c=n.n(a),i=n("ZVZ0"),l=(c.a.createElement,{}),p="wrapper";function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)(p,Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",null,"Tooltip"),Object(i.b)("p",null,"When the user's mouse or focus rests on an element, a non-interactive popup is displayed near it. ",Object(i.b)("strong",{parentName:"p"},"In order to work the direct child of Tooltip must either be a native html element or a component that forwards the ref to a native html element.")),Object(i.b)("p",null,"A couple notes on using tooltips:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Do not use tooltips for information vital to task completion. The elements they are attached to should usually make sense on their own, but a tooltip can help provide a little bit more information--especially for new users of your app."),Object(i.b)("li",{parentName:"ul"},"Keep the content minimal, they are not intended to hide critical content."),Object(i.b)("li",{parentName:"ul"},"If you want interactive content, you can use a ",Object(i.b)("inlineCode",{parentName:"li"},"Dialog"),".")),Object(i.b)("p",null,"Touch Events: Touch events are currently not supported. There's not a lot of research or examples of these types of tooltips on mobile. We have some ideas but need to validate them first before implementing. Please adjust your interfaces on mobile to account for this."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'import Tooltip from "@unibuddy/machop/Experimental/General/components/Tooltip/Tooltip";\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"render expanded",render:!0,expanded:!0}),'<Inline space="medium">\n    <Tooltip label="More Options">\n        <Button iconOnly>\n            <MoreIcon />\n        </Button>\n    </Tooltip>\n    <Tooltip label="More Options">\n        <div>\n            <MoreIcon />\n        </div>\n    </Tooltip>\n    <Tooltip label="More Options">\n        <span>\n            <MoreIcon />\n        </span>\n    </Tooltip>\n</Inline>\n')))}u.isMDXComponent=!0;c.a.createElement;var s={},b="wrapper";function f(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)(b,Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)(u,{mdxType:"Readme"}))}f.isMDXComponent=!0},Km8e:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},YbWf:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/general/tooltip",function(){return n("IYXY")}])},ZVZ0:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return O}));var r=n("ERkP"),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"===typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),b=r,m=s["".concat(c,".").concat(b)]||s[b]||f[b]||a;return n?o.a.createElement(m,i(i({ref:t},p),{},{components:n})):o.a.createElement(m,i({ref:t},p))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[b]="string"===typeof e?e:r,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},cxan:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))}},[["YbWf",0,1]]]);