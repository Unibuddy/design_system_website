(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{"+wNj":function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}t.d(n,"a",(function(){return r}))},BC2t:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/layout/tiles",function(){return t("HSiz")}])},HSiz:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return m}));var r=t("cxan"),o=t("HbGN"),a=t("ERkP"),c=t.n(a),l=t("ZVZ0"),i=["components"],u=(c.a.createElement,{}),p="wrapper";function s(e){var n=e.components,t=Object(o.a)(e,i);return Object(l.b)(p,Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h1",null,"Tiles"),Object(l.b)("p",null,"If you\u2019d like to render a grid of components with equal spacing between them, Patron provides a \u2018Tiles\u2019 component:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},'import {Tiles} from "@unibuddy/patron";\n')),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"render=true",render:"true"},'<Box backgroundColor="grey150">\n    <Tiles columns={3} space="small">\n        <Box padding="small" backgroundColor="grey50">\n            <TextBlock>Tile</TextBlock>\n        </Box>\n        <Box padding="small" backgroundColor="grey50">\n            <TextBlock>Tile</TextBlock>\n        </Box>\n        <Box padding="small" backgroundColor="grey50">\n            <TextBlock>Tile</TextBlock>\n        </Box>\n        <Box padding="small" backgroundColor="grey50">\n            <TextBlock>Tile</TextBlock>\n        </Box>\n        <Box padding="small" backgroundColor="grey50">\n            <TextBlock>Tile</TextBlock>\n        </Box>\n        <Box padding="small" backgroundColor="grey50">\n            <TextBlock>Tile</TextBlock>\n        </Box>\n        <Box padding="small" backgroundColor="grey50">\n            <TextBlock>Tile</TextBlock>\n        </Box>\n        <Box padding="small" backgroundColor="grey50">\n            <TextBlock>Tile</TextBlock>\n        </Box>\n        <Box padding="small" backgroundColor="grey50">\n            <TextBlock>Tile</TextBlock>\n        </Box>\n    </Tiles>\n</Box>\n')))}s.isMDXComponent=!0;var b=["components"],d=(c.a.createElement,{}),f="wrapper";function m(e){var n=e.components,t=Object(o.a)(e,b);return Object(l.b)(f,Object(r.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)(s,{mdxType:"Readme"}))}m.isMDXComponent=!0},HbGN:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t("+wNj");function o(e,n){if(null==e)return{};var t,o,a=Object(r.a)(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}},Km8e:function(e,n,t){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},ZVZ0:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var r=t("ERkP"),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),p=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"===typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=p(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},b="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(t),b=r,f=s["".concat(c,".").concat(b)]||s[b]||d[b]||a;return t?o.a.createElement(f,l(l({ref:n},u),{},{components:t})):o.a.createElement(f,l({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"===typeof e||r){var a=t.length,c=new Array(a);c[0]=f;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[b]="string"===typeof e?e:r,c[1]=l;for(var u=2;u<a;u++)c[u]=t[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},cxan:function(e,n,t){"use strict";function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}t.d(n,"a",(function(){return r}))}},[["BC2t",0,1]]]);