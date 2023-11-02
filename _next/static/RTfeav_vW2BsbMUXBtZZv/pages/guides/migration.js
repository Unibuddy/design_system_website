(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{"+wNj":function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}t.d(n,"a",(function(){return r}))},"6mKc":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/guides/migration",function(){return t("w5DM")}])},HbGN:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t("+wNj");function o(e,n){if(null==e)return{};var t,o,a=Object(r.a)(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}},Km8e:function(e,n,t){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},ZVZ0:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return O}));var r=t("ERkP"),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),u=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"===typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=u(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},b="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(t),b=r,d=s["".concat(i,".").concat(b)]||s[b]||m[b]||a;return t?o.a.createElement(d,l(l({ref:n},p),{},{components:t})):o.a.createElement(d,l({ref:n},p))}));function O(e,n){var t=arguments,r=n&&n.mdxType;if("string"===typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[b]="string"===typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},cxan:function(e,n,t){"use strict";function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}t.d(n,"a",(function(){return r}))},w5DM:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return s}));var r=t("cxan"),o=t("HbGN"),a=t("ERkP"),i=t.n(a),l=t("ZVZ0"),c=["components"],p=(i.a.createElement,{}),u="wrapper";function s(e){var n=e.components,t=Object(o.a)(e,c);return Object(l.b)(u,Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h1",null,"Migrate to package from Experimental"),Object(l.b)("p",null,"We tried making the migration as painless as possible. Besides the imports structure changing, the only other major breaking change that affects a lot of components is the removal of the bottom margin from FormGroup."),Object(l.b)("p",null,"Considering that the imports have changed substantially, and some of the old components have been removed, it is recommended you migrate to the package gradually, as opposed to bulk changing all teh imports at once. If you are feeling particularly adventurous, you could even write a"),Object(l.b)("h2",null,"Peer Dependencies"),Object(l.b)("p",null,"To get started first install the Patron package."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"yarn add @unibuddy/patron\n")),Object(l.b)("p",null,"Then ensure you already have all the peer dependencies installed. In an existing project you should have all of these already."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"yarn add formik react-router-dom styled-components yup\n")),Object(l.b)("p",null,"These are the expected versions of our peer dependencies:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"react ",Object(l.b)("inlineCode",{parentName:"li"},">=16.8")),Object(l.b)("li",{parentName:"ul"},"react-dom ",Object(l.b)("inlineCode",{parentName:"li"},">=16.8")),Object(l.b)("li",{parentName:"ul"},"formik ",Object(l.b)("inlineCode",{parentName:"li"},">=2")),Object(l.b)("li",{parentName:"ul"},"yup ",Object(l.b)("inlineCode",{parentName:"li"},"*")),Object(l.b)("li",{parentName:"ul"},"react-router-dom ",Object(l.b)("inlineCode",{parentName:"li"},">=5")),Object(l.b)("li",{parentName:"ul"},"styled-components ",Object(l.b)("inlineCode",{parentName:"li"},">=5"))),Object(l.b)("h2",null,"Imports"),Object(l.b)("p",null,"To migrate from existing design system version in pokedex/machop you must first change your imports from specific files since that is no longer possible."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},'// from\nimport Button from "@unibuddy/machop/Experimental/General/components/Button/Button";\n// to\nimport {Button} from "@unibuddy/patron";\n')),Object(l.b)("p",null,"Next, you will have to wrap your app with the DesignSystemProvider. You now also have to import the patron css in an app css file."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},'import {DesignSystemProvider} from "@unibuddy/patron";\nimport "./App.css";\n\nexport default function App() {\n    return (\n        <DesignSystemProvider>\n            <AppRoutes />\n        </DesignSystemProvider>\n    );\n}\n')),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'@import "@unibuddy/patron/dist/styles.css";\n')),Object(l.b)("p",null,"Optionally, you can pass in the theme object that overwrites the defaults for your app. You should discuss this with your designer first."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},'import {DesignSystemProvider} from "@unibuddy/patron";\n\nconst theme = {\n    Button: {\n        color: "#626262",\n    },\n};\n\nexport default function App() {\n    return (\n        <DesignSystemProvider theme={theme}>\n            <AppRoutes />\n        </DesignSystemProvider>\n    );\n}\n')),Object(l.b)("h2",null,"FormGroup margin"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"FormGroup")," and ",Object(l.b)("inlineCode",{parentName:"p"},"Toggle")," no longer have bottom margin, you must use Stack or some equivalent."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},'// to have equivalent layout with Stack\n<Stack space="medium">\n    <FormGroup label="First">\n        <TextInput name="first" />\n    </FormGroup>\n    <Toggle name="second">Second</Toggle>\n</Stack>\n')),Object(l.b)("h2",null,"Removed components"),Object(l.b)("p",null,"The following components that could have been previously imported from Experimental are no longer available in the design system package. This means you cannot do a bulk replace of imports."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"General/Divider"),Object(l.b)("li",{parentName:"ul"},"General/PoweredByLogo"),Object(l.b)("li",{parentName:"ul"},"Forms/LabelText"),Object(l.b)("li",{parentName:"ul"},"Layout/Col"),Object(l.b)("li",{parentName:"ul"},"Layout/Row"),Object(l.b)("li",{parentName:"ul"},"all Apollo components")),Object(l.b)("h2",null,"Other Breaking Changes"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"dividers")," prop on ",Object(l.b)("inlineCode",{parentName:"li"},"Stack")," component now adds space around each divider so old hacks around this should be removed"),Object(l.b)("li",{parentName:"ul"},"Stack and Inline no longer remove margin from its direct children. This used to break various layout components that used margin. This was originally done to counteract the FormGroup having its own margin. This shouldn't break any existing layouts but check your pages just to be sure."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"FormField"),"/",Object(l.b)("inlineCode",{parentName:"li"},"FormGroup")," no longer support ",Object(l.b)("inlineCode",{parentName:"li"},"inline")," prop"),Object(l.b)("li",{parentName:"ul"},"Some existing form errors in various apps might have weird/nonsensical text since we used to display errors as a continuation of the label, whereas now they are placed in their own container."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Switch")," component's dependency ",Object(l.b)("inlineCode",{parentName:"li"},"react-switch")," library has been updated to v6. There shouldn't be any breaking changes but worth mentioning.")))}s.isMDXComponent=!0}},[["6mKc",0,1]]]);