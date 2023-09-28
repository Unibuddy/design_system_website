(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"+wNj":function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,"a",(function(){return r}))},HbGN:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("+wNj");function o(e,t){if(null==e)return{};var n,o,a=Object(r.a)(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}},Km8e:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},ZVZ0:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return O}));var r=n("ERkP"),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"===typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=l(n),b=r,f=s["".concat(c,".").concat(b)]||s[b]||m[b]||a;return n?o.a.createElement(f,p(p({ref:t},u),{},{components:n})):o.a.createElement(f,p({ref:t},u))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var a=n.length,c=new Array(a);c[0]=f;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[b]="string"===typeof e?e:r,c[1]=p;for(var u=2;u<a;u++)c[u]=n[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},cxan:function(e,t,n){"use strict";function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},h8gP:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return O}));var r=n("cxan"),o=n("HbGN"),a=n("ERkP"),c=n.n(a),p=n("ZVZ0"),i=["components"],u=(c.a.createElement,{}),l="wrapper";function s(e){var t=e.components,n=Object(o.a)(e,i);return Object(p.b)(l,Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(p.b)("h1",null,"Autocomplete"),Object(p.b)("p",null,"Autocomplete is a lightweight wrapper around the ",Object(p.b)("a",{parentName:"p",href:"https://github.com/ericgio/react-bootstrap-typeahead"},"react-bootstrap-typeahead")," library."),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-js"},'import {Autocomplete} from "@unibuddy/patron";\n')),Object(p.b)("h2",null,"Controlled use"),Object(p.b)("p",null,"Just like other form elements, Autocomplete accepts ",Object(p.b)("inlineCode",{parentName:"p"},"onChange")," and ",Object(p.b)("inlineCode",{parentName:"p"},"value")," props. A valid value must either be either an object, or an array when used with the ",Object(p.b)("inlineCode",{parentName:"p"},"multiple")," prop. The objects passed as value and options must have some kind of an label property and an ",Object(p.b)("inlineCode",{parentName:"p"},"id"),". To use Autocomplete you ",Object(p.b)("em",{parentName:"p"},"must provide a ",Object(p.b)("inlineCode",{parentName:"em"},"labelKey")," prop")," with the string value of the property you want to use as a label for the options."),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-jsx"},'const options = [{name: "Option 1", id: "1"}, {name: "Option 2", id: "2"}];\nconst [value, setValue] = useState(null));\nconst onChange = event => {\n    setValue(event.target.value);\n};\n<Autocomplete labelKey="name" onChange={onChange} value={value} options={options}/>;\n')),Object(p.b)("h2",null,"Use in a Form"),Object(p.b)("p",null,"To use with a Form, wrap Autocomplete with a FormGroup component and give it a ",Object(p.b)("inlineCode",{parentName:"p"},"name")," prop."),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-jsx",metastring:"render=true",render:"true"},'<Form>\n    <FormGroup label="Options">\n        <Autocomplete\n            labelKey="name"\n            name="options"\n            options={[\n                {name: "Option 1", id: "1"},\n                {name: "Option 2", id: "2"},\n            ]}\n        />\n    </FormGroup>\n</Form>\n')))}s.isMDXComponent=!0;var b=["components"],m=(c.a.createElement,{}),f="wrapper";function O(e){var t=e.components,n=Object(o.a)(e,b);return Object(p.b)(f,Object(r.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(p.b)(s,{mdxType:"Readme"}))}O.isMDXComponent=!0},zWWE:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/forms/autocomplete",function(){return n("h8gP")}])}},[["zWWE",0,1]]]);