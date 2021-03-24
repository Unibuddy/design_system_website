(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"+wNj":function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,"a",(function(){return r}))},HbGN:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("+wNj");function o(e,t){if(null==e)return{};var n,o,a=Object(r.a)(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}},KLT5:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var r=n("cxan"),o=n("HbGN"),a=n("ERkP"),c=n.n(a),i=n("ZVZ0"),u=(c.a.createElement,{}),p="wrapper";function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)(p,Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",null,"SubmitButton"),Object(i.b)("p",null,"SubmitButton is a lightweight wrapper around the LoadingButton. It should only be used inside the Form component."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'import {SubmitButton} from "@unibuddy/patron";\n')),Object(i.b)("h2",null,"Use in a Form"),Object(i.b)("p",null,"To use it, simply place it inside a form. It will automatically submit the Form on click or if the user presses enter inside any of the form inputs. While the form is submitting it will automatically display a loading indicator."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"render=true",render:"true"},'<Form>\n    <Stack space="medium">\n        <FormGroup label="Text">\n            <TextArea name="text" />\n        </FormGroup>\n        <SubmitButton>Save</SubmitButton>\n    </Stack>\n</Form>\n')))}l.isMDXComponent=!0;c.a.createElement;var s={},b="wrapper";function f(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)(b,Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)(l,{mdxType:"Readme"}))}f.isMDXComponent=!0},Km8e:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},ZVZ0:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return y}));var r=n("ERkP"),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"===typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=l(n),b=r,m=s["".concat(c,".").concat(b)]||s[b]||f[b]||a;return n?o.a.createElement(m,i(i({ref:t},p),{},{components:n})):o.a.createElement(m,i({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[b]="string"===typeof e?e:r,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},cxan:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},v6ba:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/forms/submit-button",function(){return n("KLT5")}])}},[["v6ba",0,1]]]);