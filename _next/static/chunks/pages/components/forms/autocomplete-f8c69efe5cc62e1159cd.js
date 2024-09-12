_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{CH9N:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},Km8e:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},ZVZ0:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n("ERkP"),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"===typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=l(n),m=r,f=s["".concat(p,".").concat(m)]||s[m]||b[m]||a;return n?o.a.createElement(f,c(c({ref:t},u),{},{components:n})):o.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var a=n.length,p=new Array(a);p[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"===typeof e?e:r,p[1]=c;for(var u=2;u<a;u++)p[u]=n[u];return o.a.createElement.apply(null,p)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},h8gP:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var r=n("CH9N"),o=n("wHK/"),a=n("ERkP"),p=n.n(a),c=n("ZVZ0"),i=(p.a.createElement,{});function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",null,"Autocomplete"),Object(c.b)("p",null,"Autocomplete is a lightweight wrapper around the ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ericgio/react-bootstrap-typeahead"}),"react-bootstrap-typeahead v4")," library."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'import {Autocomplete} from "@unibuddy/patron";\n')),Object(c.b)("h2",null,"Controlled use"),Object(c.b)("p",null,"Just like other form elements, Autocomplete accepts ",Object(c.b)("inlineCode",{parentName:"p"},"onChange")," and ",Object(c.b)("inlineCode",{parentName:"p"},"value")," props. A valid value must either be either an object, or an array when used with the ",Object(c.b)("inlineCode",{parentName:"p"},"multiple")," prop. The objects passed as value and options must have some kind of an label property and an ",Object(c.b)("inlineCode",{parentName:"p"},"id"),". To use Autocomplete you ",Object(c.b)("em",{parentName:"p"},"must provide a ",Object(c.b)("inlineCode",{parentName:"em"},"labelKey")," prop")," with the string value of the property you want to use as a label for the options."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'const options = [{name: "Option 1", id: "1"}, {name: "Option 2", id: "2"}];\nconst [value, setValue] = useState(null));\nconst onChange = event => {\n    setValue(event.target.value);\n};\n<Autocomplete labelKey="name" onChange={onChange} value={value} options={options}/>;\n')),Object(c.b)("h2",null,"Use in a Form"),Object(c.b)("p",null,"To use with a Form, wrap Autocomplete with a FormGroup component and give it a ",Object(c.b)("inlineCode",{parentName:"p"},"name")," prop."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"render=true",render:"true"}),'<Form>\n    <FormGroup label="Options">\n        <Autocomplete\n            labelKey="name"\n            name="options"\n            options={[\n                {name: "Option 1", id: "1"},\n                {name: "Option 2", id: "2"},\n            ]}\n        />\n    </FormGroup>\n</Form>\n')))}u.isMDXComponent=!0;p.a.createElement;var l={};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)(u,{mdxType:"Readme"}))}s.isMDXComponent=!0},"wHK/":function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,"a",(function(){return r}))},zWWE:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/forms/autocomplete",function(){return n("h8gP")}])}},[["zWWE",0,1]]]);