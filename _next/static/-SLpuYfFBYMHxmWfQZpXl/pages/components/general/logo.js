(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{HbGN:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,"a",(function(){return r}))},Km8e:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},ZVZ0:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n("ERkP"),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"===typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=p(n),b=r,m=s["".concat(a,".").concat(b)]||s[b]||f[b]||c;return n?o.a.createElement(m,i(i({ref:t},l),{},{components:n})):o.a.createElement(m,i({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var c=n.length,a=new Array(c);a[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[b]="string"===typeof e?e:r,a[1]=i;for(var l=2;l<c;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},cxan:function(e,t,n){"use strict";function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},kcTg:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/general/logo",function(){return n("m3jI")}])},m3jI:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var r=n("cxan"),o=n("HbGN"),c=n("ERkP"),a=n.n(c),i=n("ZVZ0"),u=["components"],l=(a.a.createElement,{}),p="wrapper";function s(e){var t=e.components,n=Object(o.a)(e,u);return Object(i.b)(p,Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",null,"Logo"),Object(i.b)("p",null,"The Unibuddy Logo!"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'import {Logo} from "@unibuddy/patron";\n')),Object(i.b)("h2",null,"How to use"),Object(i.b)("p",null,"Render the Unibuddy logo with or without text and set the width you need."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"render=true",render:"true"},'<Stack space="xlarge">\n    <Stack space="medium">\n        <TextBlock weight="bold">With text</TextBlock>\n        <Logo />\n    </Stack>\n    <Stack space="medium">\n        <TextBlock weight="bold">Or without text</TextBlock>\n        <Logo displayText={false} />\n    </Stack>\n    <Stack space="medium">\n        <TextBlock weight="bold">Make it bigger</TextBlock>\n        <Logo width={300} displayText={false} />\n    </Stack>\n    <Stack space="medium">\n        <TextBlock weight="bold">Or smaller</TextBlock>\n        <Logo width={50} />\n    </Stack>\n</Stack>\n')))}s.isMDXComponent=!0;var b=["components"],f=(a.a.createElement,{}),m="wrapper";function d(e){var t=e.components,n=Object(o.a)(e,b);return Object(i.b)(m,Object(r.a)({},f,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)(s,{mdxType:"Readme"}))}d.isMDXComponent=!0}},[["kcTg",0,1]]]);