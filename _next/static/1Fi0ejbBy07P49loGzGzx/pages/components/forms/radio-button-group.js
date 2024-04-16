(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"+wNj":function(t,e,n){"use strict";function o(t,e){if(null==t)return{};var n,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}n.d(e,"a",(function(){return o}))},"1E+/":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/forms/radio-button-group",function(){return n("IRNr")}])},HbGN:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var o=n("+wNj");function r(t,e){if(null==t)return{};var n,r,a=Object(o.a)(t,e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(r=0;r<u.length;r++)n=u[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}},IRNr:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return f}));var o=n("cxan"),r=n("HbGN"),a=n("ERkP"),u=n.n(a),p=n("ZVZ0"),i=["components"],c=(u.a.createElement,{}),l="wrapper";function m(t){var e=t.components,n=Object(r.a)(t,i);return Object(p.b)(l,Object(o.a)({},c,n,{components:e,mdxType:"MDXLayout"}),Object(p.b)("h1",null,"RadioButtonGroup"),Object(p.b)("p",null,"This component allows you to easily add multiple-choice selection to your forms and other ui elements. It also provides a RadioButtonFormGroup component that automatically connects to form state and validation when using the Form component as a parent."),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-js"},'import {RadioButtonGroup, RadioButtonFormGroup, RadioButtonGroupItem} from "@unibuddy/patron";\n')),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-jsx",metastring:"render=true",render:"true"},'<Form>\n    <RadioButtonFormGroup name="example" label="Basic RadioButton example">\n        <RadioButtonGroupItem value="1">Option 1</RadioButtonGroupItem>\n        <RadioButtonGroupItem value="2">Option 2</RadioButtonGroupItem>\n        <RadioButtonGroupItem value="3">Option 3</RadioButtonGroupItem>\n    </RadioButtonFormGroup>\n</Form>\n')),Object(p.b)("h2",null,"RadioButtonGroup"),Object(p.b)("p",null,"In order to use this component you must first wrap the RadioButtonGroupItem components with a RadioButtonGroup. You must also provide a value and onChange props to the RadioButtonGroup as it is a controlled component. Finally, you must add a label for descriptive purposes and a name prop to associate the RadioButtonGroupItems together under a form property (even if you are not using a form wrapper)."),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-jsx"},'<RadioButtonGroup\n    name="example"\n    value={state}\n    onChange={setState}\n    label="Basic RadioButton example"\n>\n    <RadioButtonGroupItem value="1">Option 1</RadioButtonGroupItem>\n    <RadioButtonGroupItem value="2">Option 2</RadioButtonGroupItem>\n    <RadioButtonGroupItem value="3">Option 3</RadioButtonGroupItem>\n</RadioButtonGroup>\n')),Object(p.b)("h2",null,"RadioButtonFormGroup"),Object(p.b)("p",null,"RadioButtonFormGroup doesn't need value and onChange props as it internally accesses those from the Form context automatically."),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-jsx"},'<Form>\n    <RadioButtonFormGroup name="example" label="Basic RadioButton example">\n        <RadioButtonGroupItem value="1">Option 1</RadioButtonGroupItem>\n        <RadioButtonGroupItem value="2">Option 2</RadioButtonGroupItem>\n        <RadioButtonGroupItem value="3">Option 3</RadioButtonGroupItem>\n    </RadioButtonFormGroup>\n</Form>\n')))}m.isMDXComponent=!0;var s=["components"],d=(u.a.createElement,{}),b="wrapper";function f(t){var e=t.components,n=Object(r.a)(t,s);return Object(p.b)(b,Object(o.a)({},d,n,{components:e,mdxType:"MDXLayout"}),Object(p.b)(m,{mdxType:"Readme"}))}f.isMDXComponent=!0},Km8e:function(t,e,n){"use strict";var o=Object.assign.bind(Object);t.exports=o,t.exports.default=t.exports},ZVZ0:function(t,e,n){"use strict";n.d(e,"a",(function(){return m})),n.d(e,"b",(function(){return f}));var o=n("ERkP"),r=n.n(o);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=r.a.createContext({}),l=function(t){var e=r.a.useContext(c),n=e;return t&&(n="function"===typeof t?t(e):p(p({},e),t)),n},m=function(t){var e=l(t.components);return r.a.createElement(c.Provider,{value:e},t.children)},s="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},b=r.a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,u=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),m=l(n),s=o,b=m["".concat(u,".").concat(s)]||m[s]||d[s]||a;return n?r.a.createElement(b,p(p({ref:e},c),{},{components:n})):r.a.createElement(b,p({ref:e},c))}));function f(t,e){var n=arguments,o=e&&e.mdxType;if("string"===typeof t||o){var a=n.length,u=new Array(a);u[0]=b;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p[s]="string"===typeof t?t:o,u[1]=p;for(var c=2;c<a;c++)u[c]=n[c];return r.a.createElement.apply(null,u)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},cxan:function(t,e,n){"use strict";function o(){return(o=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}n.d(e,"a",(function(){return o}))}},[["1E+/",0,1]]]);