(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"+wNj":function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,"a",(function(){return r}))},HbGN:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("+wNj");function o(e,t){if(null==e)return{};var n,o,a=Object(r.a)(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}},Km8e:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},"QkV/":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/forms/form",function(){return n("fIM7")}])},ZVZ0:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n("ERkP"),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"===typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},m="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,f=p["".concat(i,".").concat(m)]||p[m]||b[m]||a;return n?o.a.createElement(f,u(u({ref:t},l),{},{components:n})):o.a.createElement(f,u({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u[m]="string"===typeof e?e:r,i[1]=u;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},cxan:function(e,t,n){"use strict";function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},fIM7:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var r=n("cxan"),o=n("HbGN"),a=n("ERkP"),i=n.n(a),u=n("ZVZ0"),c=["components"],l=(i.a.createElement,{}),s="wrapper";function p(e){var t=e.components,n=Object(o.a)(e,c);return Object(u.b)(s,Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(u.b)("h1",null,"Form"),Object(u.b)("p",null,"Form is a wrapper around ",Object(u.b)("a",{parentName:"p",href:"https://github.com/jaredpalmer/formik"},"formik")," library. It handles form validation and error handling. Once a form is submitted it first goes through a validation stage, and once the validation passes it calls the onSubmit callback with the form values. The callback also gets a second argument which is a bag of internal formik methods that allow you to imperatively manipulate the form state in some way."),Object(u.b)("h2",null,"How to use"),Object(u.b)("p",null,"To use FormGroup and other form components you must have a Form wrapper around them. Form works without any props but usually you will want to add some initial values and validation rules. Initial values help the form know about which fields exist in the form."),Object(u.b)("pre",null,Object(u.b)("code",{parentName:"pre",className:"language-jsx",metastring:"expanded",expanded:!0},'const onSubmit = (values, formActions) => {\n    // post the form values to some mutation\n    // and then finish the submit process with\n    // formActions.setSubmitting(false);\n};\n\n<Form\n    initialValues={{text: ""}}\n    validationSchema={{text: yup.string().required()}}\n    onSubmit={onSubmit}\n>\n    <FormGroup label="Text">\n        <TextArea name="text" />\n    </FormGroup>\n</Form>;\n')),Object(u.b)("p",null,"For validationSchema rules we use the ",Object(u.b)("a",{parentName:"p",href:"https://github.com/jquense/yup"},"yup")," library."),Object(u.b)("h2",null,"How to access form internals"),Object(u.b)("p",null,"For some edge cases, if you need access to the internal form state or its methods you can use the Form with the render prop pattern."),Object(u.b)("pre",null,Object(u.b)("code",{parentName:"pre",className:"language-jsx",metastring:"expanded",expanded:!0},'const onSubmit = (values, formActions) => {};\n\n<Form\n    initialValues={{text: "", other: ""}}\n    validationSchema={{text: yup.string().required(), other: yup.string()}}\n    onSubmit={onSubmit}\n>\n    {({values, errors, setFieldValue, ...form}) => {\n        return (\n            <Fragment>\n                <FormGroup label="Text">\n                    <TextArea name="text" />\n                </FormGroup>\n                <label>\n                    Other\n                    <input\n                        value={values.other}\n                        onChange={e => setFieldValue("other", e.target.value)}\n                    />\n                </label>\n            </Fragment>\n        );\n    }}\n</Form>;\n')))}p.isMDXComponent=!0;var m=["components"],b=(i.a.createElement,{}),f="wrapper";function d(e){var t=e.components,n=Object(o.a)(e,m);return Object(u.b)(f,Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(u.b)(p,{mdxType:"Readme"}))}d.isMDXComponent=!0}},[["QkV/",0,1]]]);