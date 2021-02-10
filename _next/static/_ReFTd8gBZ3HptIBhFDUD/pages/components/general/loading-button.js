(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"+wNj":function(n,e,t){"use strict";function o(n,e){if(null==n)return{};var t,o,a={},r=Object.keys(n);for(o=0;o<r.length;o++)t=r[o],e.indexOf(t)>=0||(a[t]=n[t]);return a}t.d(e,"a",(function(){return o}))},"8Cw2":function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/general/loading-button",function(){return t("wT/i")}])},HbGN:function(n,e,t){"use strict";t.d(e,"a",(function(){return a}));var o=t("+wNj");function a(n,e){if(null==n)return{};var t,a,r=Object(o.a)(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}},Km8e:function(n,e,t){"use strict";var o=Object.assign.bind(Object);n.exports=o,n.exports.default=n.exports},ZVZ0:function(n,e,t){"use strict";t.d(e,"a",(function(){return g})),t.d(e,"b",(function(){return b}));var o=t("ERkP"),a=t.n(o);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function u(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,o,a=function(n,e){if(null==n)return{};var t,o,a={},r=Object.keys(n);for(o=0;o<r.length;o++)t=r[o],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(o=0;o<r.length;o++)t=r[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var c=a.a.createContext({}),d=function(n){var e=a.a.useContext(c),t=e;return n&&(t="function"===typeof n?n(e):u(u({},e),n)),t},g=function(n){var e=d(n.components);return a.a.createElement(c.Provider,{value:e},n.children)},s="mdxType",p={inlineCode:"code",wrapper:function(n){var e=n.children;return a.a.createElement(a.a.Fragment,{},e)}},m=a.a.forwardRef((function(n,e){var t=n.components,o=n.mdxType,r=n.originalType,i=n.parentName,c=l(n,["components","mdxType","originalType","parentName"]),g=d(t),s=o,m=g["".concat(i,".").concat(s)]||g[s]||p[s]||r;return t?a.a.createElement(m,u(u({ref:e},c),{},{components:t})):a.a.createElement(m,u({ref:e},c))}));function b(n,e){var t=arguments,o=e&&e.mdxType;if("string"===typeof n||o){var r=t.length,i=new Array(r);i[0]=m;var u={};for(var l in e)hasOwnProperty.call(e,l)&&(u[l]=e[l]);u.originalType=n,u[s]="string"===typeof n?n:o,i[1]=u;for(var c=2;c<r;c++)i[c]=t[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},cxan:function(n,e,t){"use strict";function o(){return(o=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n}).apply(this,arguments)}t.d(e,"a",(function(){return o}))},"wT/i":function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return p}));var o=t("cxan"),a=t("HbGN"),r=t("ERkP"),i=t.n(r),u=t("ZVZ0"),l=(i.a.createElement,{}),c="wrapper";function d(n){var e=n.components,t=Object(a.a)(n,["components"]);return Object(u.b)(c,Object(o.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(u.b)("h1",null,"LoadingButton"),Object(u.b)("p",null,"The LoadingButton composes over the regular Button but adds one extra prop, ",Object(u.b)("inlineCode",{parentName:"p"},"loading"),". When this prop is enabled the content of the button will be replaced with a loading spinner."),Object(u.b)("pre",null,Object(u.b)("code",{parentName:"pre",className:"language-js"},'import LoadingButton from "@unibuddy/machop/Experimental/General/components/LoadingButton/LoadingButton";\n')),Object(u.b)("pre",null,Object(u.b)("code",{parentName:"pre",className:"language-jsx",metastring:"render=true",render:"true"},'<Inline space="medium">\n    <LoadingButton loading>Default</LoadingButton>\n    <LoadingButton loading clear>\n        Clear\n    </LoadingButton>\n    <LoadingButton loading link>\n        Link\n    </LoadingButton>\n    <LoadingButton loading round>\n        Round\n    </LoadingButton>\n    <LoadingButton loading iconOnly>\n        <ReadIcon />\n    </LoadingButton>\n    <LoadingButton loading iconOnly round>\n        <ReadIcon />\n    </LoadingButton>\n</Inline>\n')),Object(u.b)("h2",null,"Colors"),Object(u.b)("pre",null,Object(u.b)("code",{parentName:"pre",className:"language-jsx",metastring:"render=true",render:"true"},'<Stack space="medium">\n    <Stack space="small">\n        <Inline space="medium">\n            <LoadingButton loading>Default</LoadingButton>\n            <LoadingButton loading color="light">\n                Light\n            </LoadingButton>\n            <LoadingButton loading color="primary">\n                Primary\n            </LoadingButton>\n            <LoadingButton loading color="success">\n                Sucess\n            </LoadingButton>\n            <LoadingButton loading color="danger">\n                Danger\n            </LoadingButton>\n        </Inline>\n        <Inline space="medium">\n            <LoadingButton loading clear>\n                Default\n            </LoadingButton>\n            <LoadingButton loading clear color="light">\n                Light\n            </LoadingButton>\n            <LoadingButton loading clear color="primary">\n                Primary\n            </LoadingButton>\n            <LoadingButton loading clear color="success">\n                Sucess\n            </LoadingButton>\n            <LoadingButton loading clear color="danger">\n                Danger\n            </LoadingButton>\n        </Inline>\n    </Stack>\n\n    <Stack space="small">\n        <Inline space="medium">\n            <LoadingButton loading disabled>\n                Default\n            </LoadingButton>\n            <LoadingButton loading disabled color="light">\n                Light\n            </LoadingButton>\n            <LoadingButton loading disabled color="primary">\n                Primary\n            </LoadingButton>\n            <LoadingButton loading disabled color="success">\n                Sucess\n            </LoadingButton>\n            <LoadingButton loading disabled color="danger">\n                Danger\n            </LoadingButton>\n        </Inline>\n        <Inline space="medium">\n            <LoadingButton loading disabled clear>\n                Default\n            </LoadingButton>\n            <LoadingButton loading disabled clear color="light">\n                Light\n            </LoadingButton>\n            <LoadingButton loading disabled clear color="primary">\n                Primary\n            </LoadingButton>\n            <LoadingButton loading disabled clear color="success">\n                Sucess\n            </LoadingButton>\n            <LoadingButton loading disabled clear color="danger">\n                Danger\n            </LoadingButton>\n        </Inline>\n    </Stack>\n</Stack>\n')),Object(u.b)("h2",null,"Size"),Object(u.b)("pre",null,Object(u.b)("code",{parentName:"pre",className:"language-jsx",metastring:"render=true",render:"true"},'<Stack space="medium">\n    <Inline space="medium">\n        <LoadingButton loading size="sm">\n            Small\n        </LoadingButton>\n        <LoadingButton loading size="md">\n            Medium\n        </LoadingButton>\n        <LoadingButton loading size="lg">\n            Large\n        </LoadingButton>\n    </Inline>\n    <Inline space="medium">\n        <LoadingButton loading size="sm" iconOnly>\n            <MoreIcon />\n        </LoadingButton>\n        <LoadingButton loading size="md" iconOnly>\n            <MoreIcon />\n        </LoadingButton>\n        <LoadingButton loading size="lg" iconOnly>\n            <MoreIcon />\n        </LoadingButton>\n    </Inline>\n</Stack>\n')))}d.isMDXComponent=!0;i.a.createElement;var g={},s="wrapper";function p(n){var e=n.components,t=Object(a.a)(n,["components"]);return Object(u.b)(s,Object(o.a)({},g,t,{components:e,mdxType:"MDXLayout"}),Object(u.b)(d,{mdxType:"Readme"}))}p.isMDXComponent=!0}},[["8Cw2",0,1]]]);