_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[57],{CH9N:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},Km8e:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},TGD0:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var r=n("CH9N"),o=n("wHK/"),a=n("ERkP"),c=n.n(a),u=n("ZVZ0"),p=(c.a.createElement,{});function i(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(u.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(u.b)("h1",null,"Type Glossary for Layout components"),Object(u.b)("p",null,"This contains all the different types we use in our layout components."),Object(u.b)("pre",null,Object(u.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'type LayoutSpaceProp =\n    | "none"\n    | "xxsmall"\n    | "xsmall"\n    | "small"\n    | "small-medium"\n    | "medium"\n    | "medium-large"\n    | "gutter" // alias for medium-large\n    | "large"\n    | "xlarge"\n    | "xxlarge";\n\ntype ResponsiveProp<T> = T | [T] | [T, T] | [T, T, T] | [T, T, T, T] | [T, T, T, T, T];\n\ntype LayoutAlignProp = "left" | "center" | "right";\n\ntype LayoutVerticalAlignProp = "top" | "center" | "middle" | "bottom";\n\ntype MarginSpaceProp = LayoutSpaceProp | "auto" | number;\n\ninterface DefaultTheme\n// This interface can be augmented by users to add types to styled-components\' default theme without needing to re-export ThemedStyledComponentsModule\n')))}i.isMDXComponent=!0;c.a.createElement;var l={};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(u.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(u.b)(i,{mdxType:"Readme"}))}s.isMDXComponent=!0},ZVZ0:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return y}));var r=n("ERkP"),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=o.a.createContext({}),l=function(e){var t=o.a.useContext(i),n=t;return e&&(n="function"===typeof e?e(t):u(u({},t),e)),n},s=function(e){var t=l(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),s=l(n),m=r,y=s["".concat(c,".").concat(m)]||s[m]||f[m]||a;return n?o.a.createElement(y,u(u({ref:t},i),{},{components:n})):o.a.createElement(y,u({ref:t},i))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var a=n.length,c=new Array(a);c[0]=m;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"===typeof e?e:r,c[1]=u;for(var i=2;i<a;i++)c[i]=n[i];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},krzo:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/layout/type-glossary",function(){return n("TGD0")}])},"wHK/":function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,"a",(function(){return r}))}},[["krzo",0,1]]]);