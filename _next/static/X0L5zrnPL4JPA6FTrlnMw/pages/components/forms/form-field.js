(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"+wNj":function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,"a",(function(){return r}))},HbGN:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("+wNj");function a(e,t){if(null==e)return{};var n,a,o=Object(r.a)(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}},Km8e:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},"OGx+":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/forms/form-field",function(){return n("tVoi")}])},ZVZ0:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n("ERkP"),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"===typeof e?e(t):p(p({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=u(n),s=r,m=b["".concat(i,".").concat(s)]||b[s]||d[s]||o;return n?a.a.createElement(m,p(p({ref:t},c),{},{components:n})):a.a.createElement(m,p({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[s]="string"===typeof e?e:r,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},cxan:function(e,t,n){"use strict";function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},tVoi:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var r=n("cxan"),a=n("HbGN"),o=n("ERkP"),i=n.n(o),p=n("ZVZ0"),l=["components"],c=(i.a.createElement,{}),u="wrapper";function b(e){var t=e.components,n=Object(a.a)(e,l);return Object(p.b)(u,Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(p.b)("h1",null,"FormField"),Object(p.b)("p",null,"This component handles the display of a form field, adding the necessary id to the input and the label connecting them together so screen readers can appropriately call out the input."),Object(p.b)("p",null,"The main purpose of this component, besides the styling, is to handle accessibility requirements of form inputs correctly. That includes adding ",Object(p.b)("inlineCode",{parentName:"p"},"aria-describedby")," ids for elements that describe the input, like hint text or error text, and mark the input as ",Object(p.b)("inlineCode",{parentName:"p"},"aria-invalid")," in case of an error."),Object(p.b)("p",null,"An important thing to note here is that ",Object(p.b)("inlineCode",{parentName:"p"},"FormField")," is just used for styling and accessibility, without the logic and requirements of ",Object(p.b)("inlineCode",{parentName:"p"},"Form"),". In order to connect this field to ",Object(p.b)("inlineCode",{parentName:"p"},"Form"),", you need to use ",Object(p.b)("inlineCode",{parentName:"p"},"FormGroup"),"."),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-js"},'import {FormField} from "@unibuddy/patron";\n')),Object(p.b)("h2",null,"Props"),Object(p.b)("h3",null,"ID"),Object(p.b)("p",null,Object(p.b)("inlineCode",{parentName:"p"},"id")," is optional. It is auto generated if not provided."),Object(p.b)("h3",null,"Class name"),Object(p.b)("p",null,Object(p.b)("inlineCode",{parentName:"p"},"className")," can be provided for custom classes"),Object(p.b)("h3",null,"Label"),Object(p.b)("p",null,Object(p.b)("inlineCode",{parentName:"p"},"label")," is a mandatory prop on FormField. The label can be any ",Object(p.b)("inlineCode",{parentName:"p"},"ReactNode"),"."),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-jsx",metastring:"render expanded",render:!0,expanded:!0},'<FormField id="input" className="input" label="I am a label for a TextInput">\n    <TextInput placeholder="I am a TextInput" />\n</FormField>\n')),Object(p.b)("h3",null,"Help top and bottom"),Object(p.b)("p",null,"Two props, ",Object(p.b)("inlineCode",{parentName:"p"},"helpBottom")," and ",Object(p.b)("inlineCode",{parentName:"p"},"helpTop")," render some additional text on top and bottom of the input. These texts should be directly connected to the input in question and provide some ",Object(p.b)("strong",{parentName:"p"},"additional information")," to the user about the input."),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-jsx",metastring:"render expanded",render:!0,expanded:!0},'<FormField\n    id="input"\n    className="input"\n    label="I am a label for a TextInput"\n    helpTop="Helper text on top"\n    helpBottom="Helper text at bottom"\n>\n    <TextInput placeholder="I am a TextInput" />\n</FormField>\n')),Object(p.b)("h3",null,"Error"),Object(p.b)("p",null,"If you pass an ",Object(p.b)("inlineCode",{parentName:"p"},"error")," prop to the FormField, it will pass an ",Object(p.b)("inlineCode",{parentName:"p"},"hasError")," to the input, render the error message below the input, and make all the necessary a11y associations."),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-jsx",metastring:"render expanded",render:!0,expanded:!0},'<FormField\n    id="input"\n    className="input"\n    label="I am a label for a TextInput"\n    helpTop="Helper text on top"\n    helpBottom="Helper text at bottom"\n    error="An error occured!"\n>\n    <TextInput placeholder="I am a TextInput" />\n</FormField>\n')))}b.isMDXComponent=!0;var s=["components"],d=(i.a.createElement,{}),m="wrapper";function f(e){var t=e.components,n=Object(a.a)(e,s);return Object(p.b)(m,Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(p.b)(b,{mdxType:"Readme"}))}f.isMDXComponent=!0}},[["OGx+",0,1]]]);