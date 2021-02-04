(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"+wNj":function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,"a",(function(){return r}))},HbGN:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("+wNj");function a(e,t){if(null==e)return{};var n,a,o=Object(r.a)(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}},Km8e:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},"WDl/":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/forms/date-input",function(){return n("zY/u")}])},ZVZ0:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return O}));var r=n("ERkP"),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),l=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"===typeof e?e(t):u(u({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),b=l(n),s=r,f=b["".concat(c,".").concat(s)]||b[s]||m[s]||o;return n?a.a.createElement(f,u(u({ref:t},i),{},{components:n})):a.a.createElement(f,u({ref:t},i))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var o=n.length,c=new Array(o);c[0]=f;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u[s]="string"===typeof e?e:r,c[1]=u;for(var i=2;i<o;i++)c[i]=n[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},cxan:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},"zY/u":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m}));var r=n("cxan"),a=n("HbGN"),o=n("ERkP"),c=n.n(o),u=n("ZVZ0"),p=(c.a.createElement,{}),i="wrapper";function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(u.b)(i,Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(u.b)("h1",null,"DateInput"),Object(u.b)("p",null,"DateInput is a lightweight wrapper around the ",Object(u.b)("a",Object(r.a)({parentName:"p"},{href:"https://reactdatepicker.com/"}),"react-datepicker")," library."),Object(u.b)("pre",null,Object(u.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'import DateInput from "@unibuddy/machop/Experimental/Forms/components/DateInput/DateInput";\n')),Object(u.b)("h2",null,"Controlled use"),Object(u.b)("p",null,"Just like the native element, DateInput accepts ",Object(u.b)("inlineCode",{parentName:"p"},"onChange")," and ",Object(u.b)("inlineCode",{parentName:"p"},"value")," props. Value must either be ",Object(u.b)("inlineCode",{parentName:"p"},"null")," or an instance of the ",Object(u.b)("inlineCode",{parentName:"p"},"moment")," object."),Object(u.b)("pre",null,Object(u.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"const [value, setValue] = useState(() => moment());\nconst onChange = event => {\n    setValue(event.target.value);\n};\n<DateInput onChange={onChange} value={value} />;\n")),Object(u.b)("h2",null,"Use in a Form"),Object(u.b)("p",null,"To use with a Form, wrap DateInput with a FormGroup component and give it a ",Object(u.b)("inlineCode",{parentName:"p"},"name")," prop."),Object(u.b)("pre",null,Object(u.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"render=true",render:"true"}),'<Form>\n    <FormGroup label="Date">\n        <DateInput name="date" />\n    </FormGroup>\n</Form>\n')))}l.isMDXComponent=!0;c.a.createElement;var b={},s="wrapper";function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(u.b)(s,Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(u.b)(l,{mdxType:"Readme"}))}m.isMDXComponent=!0}},[["WDl/",0,1]]]);