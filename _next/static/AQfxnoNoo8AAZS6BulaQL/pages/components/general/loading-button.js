(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"+wNj":function(n,t,e){"use strict";function o(n,t){if(null==n)return{};var e,o,a={},r=Object.keys(n);for(o=0;o<r.length;o++)e=r[o],t.indexOf(e)>=0||(a[e]=n[e]);return a}e.d(t,"a",(function(){return o}))},"8Cw2":function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/general/loading-button",function(){return e("wT/i")}])},HbGN:function(n,t,e){"use strict";e.d(t,"a",(function(){return a}));var o=e("+wNj");function a(n,t){if(null==n)return{};var e,a,r=Object(o.a)(n,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)e=i[a],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(r[e]=n[e])}return r}},Km8e:function(n,t,e){"use strict";var o=Object.assign.bind(Object);n.exports=o,n.exports.default=n.exports},ZVZ0:function(n,t,e){"use strict";e.d(t,"a",(function(){return g})),e.d(t,"b",(function(){return m}));var o=e("ERkP"),a=e.n(o);function r(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function i(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,o)}return e}function c(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?i(Object(e),!0).forEach((function(t){r(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function u(n,t){if(null==n)return{};var e,o,a=function(n,t){if(null==n)return{};var e,o,a={},r=Object.keys(n);for(o=0;o<r.length;o++)e=r[o],t.indexOf(e)>=0||(a[e]=n[e]);return a}(n,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(o=0;o<r.length;o++)e=r[o],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(a[e]=n[e])}return a}var l=a.a.createContext({}),d=function(n){var t=a.a.useContext(l),e=t;return n&&(e="function"===typeof n?n(t):c(c({},t),n)),e},g=function(n){var t=d(n.components);return a.a.createElement(l.Provider,{value:t},n.children)},s="mdxType",p={inlineCode:"code",wrapper:function(n){var t=n.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(n,t){var e=n.components,o=n.mdxType,r=n.originalType,i=n.parentName,l=u(n,["components","mdxType","originalType","parentName"]),g=d(e),s=o,b=g["".concat(i,".").concat(s)]||g[s]||p[s]||r;return e?a.a.createElement(b,c(c({ref:t},l),{},{components:e})):a.a.createElement(b,c({ref:t},l))}));function m(n,t){var e=arguments,o=t&&t.mdxType;if("string"===typeof n||o){var r=e.length,i=new Array(r);i[0]=b;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=n,c[s]="string"===typeof n?n:o,i[1]=c;for(var l=2;l<r;l++)i[l]=e[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,e)}b.displayName="MDXCreateElement"},cxan:function(n,t,e){"use strict";function o(){return(o=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])}return n}).apply(this,arguments)}e.d(t,"a",(function(){return o}))},"wT/i":function(n,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return p}));var o=e("cxan"),a=e("HbGN"),r=e("ERkP"),i=e.n(r),c=e("ZVZ0"),u=(i.a.createElement,{}),l="wrapper";function d(n){var t=n.components,e=Object(a.a)(n,["components"]);return Object(c.b)(l,Object(o.a)({},u,e,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",null,"LoadingButton"),Object(c.b)("p",null,"The LoadingButton composes over the regular Button but adds one extra prop, ",Object(c.b)("inlineCode",{parentName:"p"},"loading"),". When this prop is enabled the content of the button will be replaced with a loading spinner."),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),'import LoadingButton from "@unibuddy/ds/src/General/LoadingButton/LoadingButton";\n')),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx",metastring:"render=true",render:"true"}),'<Inline space="medium">\n    <LoadingButton loading>Default</LoadingButton>\n    <LoadingButton loading clear>\n        Clear\n    </LoadingButton>\n    <LoadingButton loading link>\n        Link\n    </LoadingButton>\n    <LoadingButton loading round>\n        Round\n    </LoadingButton>\n    <LoadingButton loading iconOnly>\n        <ReadIcon />\n    </LoadingButton>\n    <LoadingButton loading iconOnly round>\n        <ReadIcon />\n    </LoadingButton>\n</Inline>\n')),Object(c.b)("h2",null,"Colors"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx",metastring:"render=true",render:"true"}),'<Stack space="medium">\n    <Stack space="small">\n        <Inline space="medium">\n            <LoadingButton loading>Default</LoadingButton>\n            <LoadingButton loading color="light">\n                Light\n            </LoadingButton>\n            <LoadingButton loading color="primary">\n                Primary\n            </LoadingButton>\n            <LoadingButton loading color="success">\n                Sucess\n            </LoadingButton>\n            <LoadingButton loading color="danger">\n                Danger\n            </LoadingButton>\n        </Inline>\n        <Inline space="medium">\n            <LoadingButton loading clear>\n                Default\n            </LoadingButton>\n            <LoadingButton loading clear color="light">\n                Light\n            </LoadingButton>\n            <LoadingButton loading clear color="primary">\n                Primary\n            </LoadingButton>\n            <LoadingButton loading clear color="success">\n                Sucess\n            </LoadingButton>\n            <LoadingButton loading clear color="danger">\n                Danger\n            </LoadingButton>\n        </Inline>\n    </Stack>\n\n    <Stack space="small">\n        <Inline space="medium">\n            <LoadingButton loading disabled>\n                Default\n            </LoadingButton>\n            <LoadingButton loading disabled color="light">\n                Light\n            </LoadingButton>\n            <LoadingButton loading disabled color="primary">\n                Primary\n            </LoadingButton>\n            <LoadingButton loading disabled color="success">\n                Sucess\n            </LoadingButton>\n            <LoadingButton loading disabled color="danger">\n                Danger\n            </LoadingButton>\n        </Inline>\n        <Inline space="medium">\n            <LoadingButton loading disabled clear>\n                Default\n            </LoadingButton>\n            <LoadingButton loading disabled clear color="light">\n                Light\n            </LoadingButton>\n            <LoadingButton loading disabled clear color="primary">\n                Primary\n            </LoadingButton>\n            <LoadingButton loading disabled clear color="success">\n                Sucess\n            </LoadingButton>\n            <LoadingButton loading disabled clear color="danger">\n                Danger\n            </LoadingButton>\n        </Inline>\n    </Stack>\n</Stack>\n')),Object(c.b)("h2",null,"Size"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx",metastring:"render=true",render:"true"}),'<Stack space="medium">\n    <Inline space="medium">\n        <LoadingButton loading size="sm">\n            Small\n        </LoadingButton>\n        <LoadingButton loading size="md">\n            Medium\n        </LoadingButton>\n        <LoadingButton loading size="lg">\n            Large\n        </LoadingButton>\n    </Inline>\n    <Inline space="medium">\n        <LoadingButton loading size="sm" iconOnly>\n            <MoreIcon />\n        </LoadingButton>\n        <LoadingButton loading size="md" iconOnly>\n            <MoreIcon />\n        </LoadingButton>\n        <LoadingButton loading size="lg" iconOnly>\n            <MoreIcon />\n        </LoadingButton>\n    </Inline>\n</Stack>\n')))}d.isMDXComponent=!0;i.a.createElement;var g={},s="wrapper";function p(n){var t=n.components,e=Object(a.a)(n,["components"]);return Object(c.b)(s,Object(o.a)({},g,e,{components:t,mdxType:"MDXLayout"}),Object(c.b)(d,{mdxType:"Readme"}))}p.isMDXComponent=!0}},[["8Cw2",0,1]]]);