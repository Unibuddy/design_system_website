(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"+wNj":function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}t.d(n,"a",(function(){return r}))},"311n":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return m}));var r=t("cxan"),o=t("HbGN"),a=t("ERkP"),c=t.n(a),p=t("ZVZ0"),i=(c.a.createElement,{}),u="wrapper";function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(p.b)(u,Object(r.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(p.b)("h1",null,"Select"),Object(p.b)("p",null,"Select is a lightweight wrapper around the native html select input. In most cases it should be used together with FormGroup inside the Form component."),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-js"},'import Select from "@unibuddy/machop/Experimental/Forms/components/Select/Select";\n')),Object(p.b)("h2",null,"Controlled use"),Object(p.b)("p",null,"As the native element, Select accepts ",Object(p.b)("inlineCode",{parentName:"p"},"onChange")," and ",Object(p.b)("inlineCode",{parentName:"p"},"value")," props."),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-jsx"},'const [value, setValue] = useState("");\nconst onChange = event => {\n    setValue(event.target.value);\n};\n<Select value={value} onChange={onChange}>\n    <option value="" />\n    <option value="1">Option 1</option>\n    <option value="2">Option 2</option>\n    <option value="3">Option 3</option>\n</Select>;\n')),Object(p.b)("h2",null,"Use in a Form"),Object(p.b)("p",null,"To use with a Form, wrap Select with a FormGroup component and give it a ",Object(p.b)("inlineCode",{parentName:"p"},"name")," prop."),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-jsx",metastring:"render=true",render:"true"},'<Form>\n    <FormGroup label="Options">\n        <Select name="options">\n            <option value="" />\n            <option value="1">Option 1</option>\n            <option value="2">Option 2</option>\n            <option value="3">Option 3</option>\n        </Select>\n    </FormGroup>\n</Form>\n')))}l.isMDXComponent=!0;c.a.createElement;var s={},b="wrapper";function m(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(p.b)(b,Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(p.b)(l,{mdxType:"Readme"}))}m.isMDXComponent=!0},HbGN:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t("+wNj");function o(e,n){if(null==e)return{};var t,o,a=Object(r.a)(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}},Km8e:function(e,n,t){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},ZVZ0:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return O}));var r=t("ERkP"),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),l=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"===typeof e?e(n):p(p({},n),e)),t},s=function(e){var n=l(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},b="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=l(t),b=r,f=s["".concat(c,".").concat(b)]||s[b]||m[b]||a;return t?o.a.createElement(f,p(p({ref:n},u),{},{components:t})):o.a.createElement(f,p({ref:n},u))}));function O(e,n){var t=arguments,r=n&&n.mdxType;if("string"===typeof e||r){var a=t.length,c=new Array(a);c[0]=f;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p[b]="string"===typeof e?e:r,c[1]=p;for(var u=2;u<a;u++)c[u]=t[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},cxan:function(e,n,t){"use strict";function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}t.d(n,"a",(function(){return r}))},j4RH:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/forms/select",function(){return t("311n")}])}},[["j4RH",0,1]]]);