(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{"+wNj":function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,"a",(function(){return r}))},HbGN:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("+wNj");function o(e,t){if(null==e)return{};var n,o,a=Object(r.a)(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}},Km8e:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},XGNk:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return b}));var r=n("cxan"),o=n("HbGN"),a=n("ERkP"),i=n.n(a),c=n("ZVZ0"),s=(i.a.createElement,{}),p="wrapper";function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)(p,Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",null,"DesignSystemProvider"),Object(c.b)("p",null,"Every app should have a DesignSystemProvider component wrapping their entire ui somewhere near the top of the component tree. This component does several things. First, it wraps the app with a PatronThemeProvider using a default theme, sets up the ToastProvider for use with ",Object(c.b)("inlineCode",{parentName:"p"},"useToast()")," hook, and on the web it adds some global keyboard listeners that polyfill the CSS ",Object(c.b)("inlineCode",{parentName:"p"},":focus-visible")," pseudo selector. Since it is using global listeners, there should always be only one DesignSystemProvider instantiated at any one time."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},'import {DesignSystemProvider} from "@unibuddy/patron";\n')),Object(c.b)("h2",null,"How To Use"),Object(c.b)("p",null,"Find an appropriate place somewhere near the top of the app component tree, just before you start rendering any ui elements, and wrap the components with the DesignSystemProvider. You can pass any default theme overrides in the theme prop. Don't worry about overwriting default theme, the theme objects are merged deeply."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},'import {DesignSystemProvider} from "@unibuddy/patron";\n\nconst themeOverrides = {\n    Button: {\n        colors: {\n            primary: {\n                color: "red",\n            },\n        },\n    },\n};\n\nfunction MyApp() {\n    return (\n        <DesignSystemProvider theme={themeOverrides}>\n            <AppRoutes />\n        </DesignSystemProvider>\n    );\n}\n')))}u.isMDXComponent=!0;i.a.createElement;var l={},m="wrapper";function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)(m,Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)(u,{mdxType:"Readme"}))}b.isMDXComponent=!0},ZVZ0:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var r=n("ERkP"),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"===typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},m="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(n),m=r,f=l["".concat(i,".").concat(m)]||l[m]||b[m]||a;return n?o.a.createElement(f,c(c({ref:t},p),{},{components:n})):o.a.createElement(f,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[m]="string"===typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},cxan:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},wOFo:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/utils/design-system-provider",function(){return n("XGNk")}])}},[["wOFo",0,1]]]);