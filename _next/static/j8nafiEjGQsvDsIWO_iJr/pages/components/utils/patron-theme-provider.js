(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{"+wNj":function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}t.d(n,"a",(function(){return r}))},HbGN:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t("+wNj");function o(e,n){if(null==e)return{};var t,o,a=Object(r.a)(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}},ISRN:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return f}));var r=t("cxan"),o=t("HbGN"),a=t("ERkP"),c=t.n(a),i=t("ZVZ0"),p=(c.a.createElement,{}),u="wrapper";function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)(u,Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",null,"PatronThemeProvider"),Object(i.b)("p",null,"When you need to override some parts of the patron theme for only a specific part of the component tree, like a specific page or a section of a page, you can use PatronThemeProvider. To use, simply wrap that section of the component tree and pass in the theme object. The theme objects are deeply merged so don't worry about overriding other parts of the theme."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'import {PatronThemeProvider} from "@unibuddy/patron";\n')),Object(i.b)("h2",null,"How To Use"),Object(i.b)("p",null,"Every app should have a DesignSystemProvider somewhere near the top of the component tree. By default it wraps children with the PatronThemeProvider using the default theme. You can then wrap a section of the app"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},'import {PatronThemeProvider} from "@unibuddy/patron";\n\nconst overrides = {\n    Button: {\n        colors: {\n            primary: {\n                color: "red",\n            },\n        },\n    },\n};\n\nfunction MyApp() {\n    return (\n        <DesignSystemProvider>\n            <StandardLookingComponents />\n            <PatronThemeProvider theme={overrides}>\n                <FunkyLookingComponents />\n            </PatronThemeProvider>\n        </DesignSystemProvider>\n    );\n}\n')),Object(i.b)("h2",null,"When Not To Use"),Object(i.b)("p",null,"When you just want to override parts of the default theme for the entire app simply pass in the theme object with overrides in to the DesignSystemProvider at the root of your app."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},'import {DesignSystemProvider} from "@unibuddy/patron";\n\nconst overrides = {\n    Button: {\n        colors: {\n            primary: {\n                color: "red",\n            },\n        },\n    },\n};\n\nfunction MyApp() {\n    return (\n        <DesignSystemProvider theme={overrides}>\n            <AppRoutes />\n        </DesignSystemProvider>\n    );\n}\n')))}s.isMDXComponent=!0;c.a.createElement;var l={},m="wrapper";function f(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)(m,Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)(s,{mdxType:"Readme"}))}f.isMDXComponent=!0},Km8e:function(e,n,t){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},ZVZ0:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return d}));var r=t("ERkP"),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),s=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"===typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=s(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),l=s(t),m=r,b=l["".concat(c,".").concat(m)]||l[m]||f[m]||a;return t?o.a.createElement(b,i(i({ref:n},u),{},{components:t})):o.a.createElement(b,i({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"===typeof e||r){var a=t.length,c=new Array(a);c[0]=b;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[m]="string"===typeof e?e:r,c[1]=i;for(var u=2;u<a;u++)c[u]=t[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},cxan:function(e,n,t){"use strict";function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}t.d(n,"a",(function(){return r}))},sOod:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/utils/patron-theme-provider",function(){return t("ISRN")}])}},[["sOod",0,1]]]);