(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"+wNj":function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,"a",(function(){return a}))},"8na0":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/forms/introduction",function(){return n("lzYF")}])},HbGN:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("+wNj");function r(e,t){if(null==e)return{};var n,r,o=Object(a.a)(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}},Km8e:function(e,t,n){"use strict";var a=Object.assign.bind(Object);e.exports=a,e.exports.default=e.exports},ZVZ0:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var a=n("ERkP"),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"===typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),b=a,d=u["".concat(i,".").concat(b)]||u[b]||m[b]||o;return n?r.a.createElement(d,l(l({ref:t},s),{},{components:n})):r.a.createElement(d,l({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"===typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[b]="string"===typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},cxan:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return a}))},lzYF:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m}));var a=n("cxan"),r=n("HbGN"),o=n("ERkP"),i=n.n(o),l=n("ZVZ0"),c=(i.a.createElement,{}),s="wrapper";function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)(s,Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",null,"Forms"),Object(l.b)("p",null,"The main concept we need to get up to speed on, regarding the form handling in react, is the controlled vs uncontrolled forms. ",Object(l.b)("strong",{parentName:"p"},"Relevant react documentation ",Object(l.b)("a",Object(a.a)({parentName:"strong"},{href:"https://reactjs.org/docs/forms.html"}),"Forms"),".")," "),Object(l.b)("h2",null,"Controlled vs. Uncontrolled"),Object(l.b)("p",null,"By default, input elements in HTML and in react are uncontrolled, meaning they maintain internal state. React documentation, however, recommends that you build controlled components in most cases, meaning you listen to ",Object(l.b)("inlineCode",{parentName:"p"},"onChange")," event, set the state from that event value, and then pass that state to the input element ",Object(l.b)("inlineCode",{parentName:"p"},"value")," prop. It turns out, this is extremely tedious and too low level when building products, and makes building large forms very slow and bug prone."),Object(l.b)("p",null,"This is the reason there are so many form libraries out there, and most of them focus on two things, maintaining internal control of the state, and validation, while offering some convinient api's as escape hatches. We decided to use ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/jaredpalmer/formik"}),"Formik")," and ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/jquense/yup"}),"yup")," for validation."),Object(l.b)("h2",null,"Example use"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'function MyForm() {\n    const onSubmit = (values, formActions) => {\n        console.log(values.someField)\n\n        formActions.setSubmitting(false)\n    }\n\n    return <Form\n        initialValues={{someField: ""}}\n        validationSchema={{someField: yup.string().required()}}\n        onSubmit={onSubmit}\n    >\n        <FormGroup label="Some field">\n            <input name="someField" required />\n        </FormGroup>\n        <button type="submit">Submit</button>\n    </Form>\n}\n')),Object(l.b)("h2",null,"Migrate from a controlled form"),Object(l.b)("p",null,"Our form components are a thin wrapper around Formik. To start wrap all your form inputs in a ",Object(l.b)("inlineCode",{parentName:"p"},"<Form>")," component."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"<Form>\n    <input value={this.state.value} onChange={this.handleChange} />\n    <button onClick={this.onSubmit}>Submit</button>\n</Form>\n")),Object(l.b)("p",null,"Next we need to wrap the input in a ",Object(l.b)("inlineCode",{parentName:"p"},"<FormGroup>")," component in order to wire up the input with the ",Object(l.b)("inlineCode",{parentName:"p"},"<Form>"),". Next we can remove the value and onChange props as we don't need to control Formik components, the ",Object(l.b)("inlineCode",{parentName:"p"},"<Form>")," holds all the state. Our page only declares what inputs it needs. "),Object(l.b)("p",null,"We add ",Object(l.b)("inlineCode",{parentName:"p"},'label="Test"')," prop that internally adds a label element and associates it with the input via a generated or manually provided id. ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label"}),"Why we do this"),"."),Object(l.b)("p",null,"Finally, we need a ",Object(l.b)("inlineCode",{parentName:"p"},"button")," with a ",Object(l.b)("inlineCode",{parentName:"p"},'type="submit"'),", in order to be able to submit the form by either clicking on it or via enter press."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'<Form>\n    <FormGroup label="Test">\n        <input name="test" />\n    </FormGroup>\n    <button type="submit">Submit</button>\n</Form>\n')),Object(l.b)("p",null,"In order for formik to differentiate inputs we need to add a name to each of them. See ",Object(l.b)("inlineCode",{parentName:"p"},'name="test"'),"\nFirst, we will replace ",Object(l.b)("inlineCode",{parentName:"p"},"input")," with ",Object(l.b)("inlineCode",{parentName:"p"},"TextInput")," for some nice default styling.\nWe can replace also the ",Object(l.b)("inlineCode",{parentName:"p"},"button")," with a ",Object(l.b)("inlineCode",{parentName:"p"},"<SubmitButton>")," that abstracts away the disabling of the button and loading state."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'<Form>\n    <FormGroup label="Test">\n        <TextInput name="test" />\n    </FormGroup>\n    <SubmitButton>Submit</SubmitButton>\n</Form>\n')),Object(l.b)("h3",null,"Adding validation"),Object(l.b)("p",null,"Finally to validate the form we add ",Object(l.b)("inlineCode",{parentName:"p"},"validationSchema")," and ",Object(l.b)("inlineCode",{parentName:"p"},"initialValues"),". Initial values is important because that way formik knows which fields exist in the form and therefore are valid/invalid before any onChange is fired."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'const initialValues = {test: ""};\nconst validationSchema = {\n    test: yup\n        .string()\n        .required()\n        .min(3),\n};\n<Form validationSchema={validationSchema} initialValues={initialValues}>\n    <FormGroup label="Test">\n        <TextInput name="test" />\n    </FormGroup>\n    <SubmitButton>Submit</SubmitButton>\n</Form>;\n')),Object(l.b)("h3",null,"onSubmit"),Object(l.b)("p",null,"In order to get the data from the form we must add a onSubmit callback to the Form component. On form submit Formik ",Object(l.b)("strong",{parentName:"p"},"asynchronously")," validates the form and if all the validation passes calls our onSubmit callback with values as the first argument and internal actions as the second arg."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'handleSubmit(values, formikActions) {\n try {\n   await mutation(/* ... */);\n } catch (error) {\n     formikActions.setValidation("serverError", error.message);\n } finally {\n     // regardless of error or success, we stop the loading  \n     formikActions.setSubmitting(false);\n }\n}\n<Form onSubmit={handleSubmit} initialValues={{serverError: ""}}>\n    {...}\n    <ErrorMessage name="serverError" />\n</Form>\n')),Object(l.b)("p",null,"In order for the serverError error message to show we have to add it to the initial values, otherwise the form will not know that that it exists and formik never shows errors on fields that haven't been interacted with."),Object(l.b)("h2",null,"Testing forms"),Object(l.b)("p",null,"In the previous section we mentioned that the form validation is async, which means you will need to wait for changes in the form in your tests. The testing library of choice is ",Object(l.b)("inlineCode",{parentName:"p"},"@testing-library/react")," because it provides easy async testing utilities like ",Object(l.b)("inlineCode",{parentName:"p"},"waitFor")," and ",Object(l.b)("inlineCode",{parentName:"p"},"findBy*"),". ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://testing-library.com/docs/api-async"}),"RTL async utilities docs"),". ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.notion.so/unibuddy/Front-End-Testing-12447fb9bb3f40e9ae6c5f35dc7a9cd7#eb315a1dfaf6488781a57fe1846d08f9"}),"Notion doc for testing forms")),Object(l.b)("h2",null,"Adding a custom form input"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Never add a new form input that cannot be used outside of Form context!")),Object(l.b)("p",null,"In order to add a new input type that interfaces with ",Object(l.b)("inlineCode",{parentName:"p"},"<FormGroup")," and ",Object(l.b)("inlineCode",{parentName:"p"},"<Form>")," it needs to implement a kind of ",Object(l.b)("em",{parentName:"p"},"interface"),".\nThe input needs to be controlled, meaning it has to accept a ",Object(l.b)("strong",{parentName:"p"},"value")," and ",Object(l.b)("strong",{parentName:"p"},"name")," props and emit ",Object(l.b)("strong",{parentName:"p"},"props.onChange")," and ",Object(l.b)("strong",{parentName:"p"},"props.onBlur"),' that emit a "react like" event.\nExample datepicker where ',Object(l.b)("inlineCode",{parentName:"p"},"<DatePicker/>")," is some random library that has weird props like onSelect and inputProps etc...:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"export default function DatepickerInput(props) {\n    return (\n        <DatePicker\n            selectedDate={props.value}\n            inputProps={{onBlur: props.onBlur}}\n            onSelect={date =>\n                props.onChange({\n                    target: {value: date, name: props.name},\n                })\n            }\n        />\n    );\n}\n")))}p.isMDXComponent=!0;i.a.createElement;var u={},b="wrapper";function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)(b,Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)(p,{mdxType:"Readme"}))}m.isMDXComponent=!0}},[["8na0",0,1]]]);