_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[20],{"311n":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return s}));var r=t("CH9N"),o=t("wHK/"),a=t("ERkP"),c=t.n(a),p=t("ZVZ0"),i=(c.a.createElement,{});function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(p.b)("wrapper",Object(r.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(p.b)("h1",null,"Select"),Object(p.b)("p",null,"Select is a lightweight wrapper around the native html select input. In most cases it should be used together with FormGroup inside the Form component."),Object(p.b)("pre",null,Object(p.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'import {Select} from "@unibuddy/patron";\n')),Object(p.b)("h2",null,"Controlled use"),Object(p.b)("p",null,"As the native element, Select accepts ",Object(p.b)("inlineCode",{parentName:"p"},"onChange")," and ",Object(p.b)("inlineCode",{parentName:"p"},"value")," props."),Object(p.b)("pre",null,Object(p.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'const [value, setValue] = useState("");\nconst onChange = event => {\n    setValue(event.target.value);\n};\n<Select value={value} onChange={onChange}>\n    <option value="" />\n    <option value="1">Option 1</option>\n    <option value="2">Option 2</option>\n    <option value="3">Option 3</option>\n</Select>;\n')),Object(p.b)("h2",null,"Use in a Form"),Object(p.b)("p",null,"To use with a Form, wrap Select with a FormGroup component and give it a ",Object(p.b)("inlineCode",{parentName:"p"},"name")," prop."),Object(p.b)("pre",null,Object(p.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"render=true",render:"true"}),'<Form initialValues={{options: ""}}>\n    <FormGroup label="Options">\n        <Select name="options">\n            <option value="" />\n            <option value="1">Option 1</option>\n            <option value="2">Option 2</option>\n            <option value="3">Option 3</option>\n        </Select>\n    </FormGroup>\n</Form>\n')))}u.isMDXComponent=!0;c.a.createElement;var l={};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(p.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(p.b)(u,{mdxType:"Readme"}))}s.isMDXComponent=!0},CH9N:function(e,n,t){"use strict";function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}t.d(n,"a",(function(){return r}))},Km8e:function(e,n,t){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},ZVZ0:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return O}));var r=t("ERkP"),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),l=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"===typeof e?e(n):p(p({},n),e)),t},s=function(e){var n=l(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=l(t),m=r,O=s["".concat(c,".").concat(m)]||s[m]||b[m]||a;return t?o.a.createElement(O,p(p({ref:n},u),{},{components:t})):o.a.createElement(O,p({ref:n},u))}));function O(e,n){var t=arguments,r=n&&n.mdxType;if("string"===typeof e||r){var a=t.length,c=new Array(a);c[0]=m;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"===typeof e?e:r,c[1]=p;for(var u=2;u<a;u++)c[u]=t[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},j4RH:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/forms/select",function(){return t("311n")}])},"wHK/":function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}t.d(n,"a",(function(){return r}))}},[["j4RH",0,1]]]);