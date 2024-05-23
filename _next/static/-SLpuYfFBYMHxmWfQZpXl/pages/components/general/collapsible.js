(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{HbGN:function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}t.d(n,"a",(function(){return r}))},Km8e:function(e,n,t){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},QCB7:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/general/collapsible",function(){return t("xivQ")}])},ZVZ0:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return O}));var r=t("ERkP"),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),u=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"===typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},b="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},y=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(t),b=r,y=s["".concat(c,".").concat(b)]||s[b]||f[b]||a;return t?o.a.createElement(y,i(i({ref:n},p),{},{components:t})):o.a.createElement(y,i({ref:n},p))}));function O(e,n){var t=arguments,r=n&&n.mdxType;if("string"===typeof e||r){var a=t.length,c=new Array(a);c[0]=y;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[b]="string"===typeof e?e:r,c[1]=i;for(var p=2;p<a;p++)c[p]=t[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},cxan:function(e,n,t){"use strict";function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}t.d(n,"a",(function(){return r}))},xivQ:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return O}));var r=t("cxan"),o=t("HbGN"),a=t("ERkP"),c=t.n(a),i=t("ZVZ0"),l=["components"],p=(c.a.createElement,{}),u="wrapper";function s(e){var n=e.components,t=Object(o.a)(e,l);return Object(i.b)(u,Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",null,"Collapsible"),Object(i.b)("p",null,"Core component from which the Accordion is built from. You can use this component when you require only a single child that needs to have its visibility toggled on and off."),Object(i.b)("h2",null,"How To Use"),Object(i.b)("p",null,"Wrap your children with the Collapsible and give it a trigger. The trigger can be any ReactNode. It is an uncontrolled component only, so the state of the expanded property cannot be controlled from above."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"render expanded",render:!0,expanded:!0},'<Collapsible trigger="Click Me">Hello</Collapsible>\n')),Object(i.b)("h3",null,"Need more control?"),Object(i.b)("p",null,"If you require more control over styling or behavior, use ",Object(i.b)("inlineCode",{parentName:"p"},"ToggleSection")," instead."))}s.isMDXComponent=!0;var b=["components"],f=(c.a.createElement,{}),y="wrapper";function O(e){var n=e.components,t=Object(o.a)(e,b);return Object(i.b)(y,Object(r.a)({},f,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)(s,{mdxType:"Readme"}))}O.isMDXComponent=!0}},[["QCB7",0,1]]]);