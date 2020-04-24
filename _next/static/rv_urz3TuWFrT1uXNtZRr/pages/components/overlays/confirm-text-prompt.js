(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{Fcif:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},SAVP:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return l}));var r=n("mXGw"),o=n.n(r),a=o.a.createContext({}),i=function(e){var t=o.a.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},c=function(e){var t=i(e.components);return o.a.createElement(a.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){return o.a.createElement(o.a.Fragment,{},e.children)}},p=function(e){var t=e.components,n=e.mdxType,r=e.originalType,a=e.parentName,c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),u=i(t);return o.a.createElement(u[a+"."+n]||u[n]||s[n]||r,t?Object.assign({},c,{components:t}):c)};function l(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},STWM:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},cwdW:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,"a",(function(){return r}))},"dV/x":function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,"a",(function(){return r}))},euvz:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return b}));var r=n("Fcif"),o=n("dV/x"),a=n("mXGw"),i=n.n(a),c=n("SAVP"),u=n("STWM"),s=n("cwdW"),p=(i.a.createElement,{}),l="wrapper";function f(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(c.b)(l,Object(u.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",null,"ConfirmTextPrompt"),Object(c.b)("p",null,"ConfirmTextPrompt is a high level component that is used to quickly add confirmation actions in to the ui for ",Object(c.b)("strong",{parentName:"p"},"very destructive actions"),". It encourages some best practices, and if it does not meet your requirements, you should probably use the Dialog component."),Object(c.b)("h2",null,"Example usage"),Object(c.b)("pre",null,Object(c.b)("code",Object(u.a)({parentName:"pre"},{className:"language-jsx"}),'<ConfirmTextPrompt\n    isOpen={this.state.isOpen}\n    onConfirm={this.onConfirm}\n    onDismiss={this.onDismiss}\n    title="Are you sure you want to delete this?"\n    type="danger"\n    confirmText="Yes, delete forever"\n    requireInput="name of the thing"\n>\n    <p>Are you sure you want to permanently delete this thing. This action cannot be reversed!</p>\n</ConfirmTextPrompt>\n')))}f.isMDXComponent=!0;i.a.createElement;var m={},y="wrapper";function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)(y,Object(r.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)(f,{mdxType:"Readme"}))}b.isMDXComponent=!0},"tV/x":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/overlays/confirm-text-prompt",function(){return n("euvz")}])},x9yg:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports}},[["tV/x",0,1]]]);