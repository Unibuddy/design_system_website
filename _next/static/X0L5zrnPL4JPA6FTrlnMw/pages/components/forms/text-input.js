(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"+wNj":function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,"a",(function(){return r}))},"53cn":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return O}));var r=n("cxan"),o=n("HbGN"),a=n("ERkP"),c=n.n(a),u=n("ZVZ0"),p=["components"],i=(c.a.createElement,{}),l="wrapper";function s(e){var t=e.components,n=Object(o.a)(e,p);return Object(u.b)(l,Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(u.b)("h1",null,"TextInput"),Object(u.b)("p",null,"TextInput is a lightweight wrapper around the native html text input. In most cases it should be used together with FormGroup inside the Form component."),Object(u.b)("pre",null,Object(u.b)("code",{parentName:"pre",className:"language-js"},'import {TextInput} from "@unibuddy/patron";\n')),Object(u.b)("h2",null,"Controlled use"),Object(u.b)("p",null,"As the native element, TextInput accepts ",Object(u.b)("inlineCode",{parentName:"p"},"onChange")," and ",Object(u.b)("inlineCode",{parentName:"p"},"value")," props."),Object(u.b)("pre",null,Object(u.b)("code",{parentName:"pre",className:"language-jsx"},'const [value, setValue] = useState("");\nconst onChange = (event) => {\n    setValue(event.target.value)\n}\n<TextArea onChange={onChange} value={value}>\n')),Object(u.b)("h2",null,"Use in a Form"),Object(u.b)("p",null,"To use with a Form, wrap TextInput with a FormGroup component and give it a ",Object(u.b)("inlineCode",{parentName:"p"},"name")," prop."),Object(u.b)("pre",null,Object(u.b)("code",{parentName:"pre",className:"language-jsx",metastring:"render=true",render:"true"},'<Form>\n    <FormGroup label="Text">\n        <TextInput name="text" />\n    </FormGroup>\n</Form>\n')))}s.isMDXComponent=!0;var b=["components"],m=(c.a.createElement,{}),f="wrapper";function O(e){var t=e.components,n=Object(o.a)(e,b);return Object(u.b)(f,Object(r.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(u.b)(s,{mdxType:"Readme"}))}O.isMDXComponent=!0},HbGN:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("+wNj");function o(e,t){if(null==e)return{};var n,o,a=Object(r.a)(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}},Km8e:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},ZVZ0:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return O}));var r=n("ERkP"),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=o.a.createContext({}),l=function(e){var t=o.a.useContext(i),n=t;return e&&(n="function"===typeof e?e(t):u(u({},t),e)),n},s=function(e){var t=l(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},b="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),s=l(n),b=r,f=s["".concat(c,".").concat(b)]||s[b]||m[b]||a;return n?o.a.createElement(f,u(u({ref:t},i),{},{components:n})):o.a.createElement(f,u({ref:t},i))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var a=n.length,c=new Array(a);c[0]=f;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u[b]="string"===typeof e?e:r,c[1]=u;for(var i=2;i<a;i++)c[i]=n[i];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},cxan:function(e,t,n){"use strict";function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},hlMc:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/forms/text-input",function(){return n("53cn")}])}},[["hlMc",0,1]]]);