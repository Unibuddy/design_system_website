(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{"+wNj":function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,"a",(function(){return a}))},HbGN:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("+wNj");function r(e,t){if(null==e)return{};var n,r,l=Object(a.a)(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}},Km8e:function(e,t,n){"use strict";var a=Object.assign.bind(Object);e.exports=a,e.exports.default=e.exports},ZVZ0:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var a=n("ERkP"),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"===typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),b=a,d=u["".concat(i,".").concat(b)]||u[b]||m[b]||l;return n?r.a.createElement(d,o(o({ref:t},c),{},{components:n})):r.a.createElement(d,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"===typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[b]="string"===typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},cxan:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return a}))},nYFn:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m}));var a=n("cxan"),r=n("HbGN"),l=n("ERkP"),i=n.n(l),o=n("ZVZ0"),s=(i.a.createElement,{}),c="wrapper";function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)(c,Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",null,"Layout"),Object(o.b)("p",null,"The guiding principle for layout in Experimental/Layout is that components should not provide surrounding white space. Instead, spacing between elements is owned entirely by layout components. This approach ensures that the system is as composable as possible while keeping white space completely predictable."),Object(o.b)("p",null,"All of the components referenced below can be infinitely nested within each other to create a wide variety of standard layouts. Getting a firm grasp of these components is an essential part of working effectively with Experimental/Layout."),Object(o.b)("h2",null,"Why"),Object(o.b)("p",null,"Flow elements require space (sometimes referred to as white space) to physically and conceptually separate them from the elements that come before and after them. This is the purpose of the margin property."),Object(o.b)("p",null,"However, design systems conceive elements and components in isolation. At the time of conception, it is not settled whether there will be surrounding content or what the nature of that content will be. One element or component is likely to appear in different contexts, and the requirement for spacing will differ."),Object(o.b)("p",null,"We are in the habit of styling elements, or classes of elements, directly: we make style declarations belong to elements. Typically, this does not produce any issues, but margin is really a property of the relationship between two proximate elements and should be left to parent components."),Object(o.b)("h2",null,"Spacing"),Object(o.b)("p",null,"Experimental/Layout provides a standard white space scale that is available across the entire component suite. As much as possible, Experimental/Layout tries to make use of this scale rather than generating custom spacing rules."),Object(o.b)("p",null,"Default available options are:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"none: ",Object(o.b)("inlineCode",{parentName:"li"},"0")),Object(o.b)("li",{parentName:"ul"},"gutter: ",Object(o.b)("inlineCode",{parentName:"li"},"24px")),Object(o.b)("li",{parentName:"ul"},"xxsmall: ",Object(o.b)("inlineCode",{parentName:"li"},"4px")),Object(o.b)("li",{parentName:"ul"},"xsmall: ",Object(o.b)("inlineCode",{parentName:"li"},"8px")),Object(o.b)("li",{parentName:"ul"},"small: ",Object(o.b)("inlineCode",{parentName:"li"},"12px")),Object(o.b)("li",{parentName:"ul"},"medium: ",Object(o.b)("inlineCode",{parentName:"li"},"20px")),Object(o.b)("li",{parentName:"ul"},"large: ",Object(o.b)("inlineCode",{parentName:"li"},"32px")),Object(o.b)("li",{parentName:"ul"},"xlarge: ",Object(o.b)("inlineCode",{parentName:"li"},"48px")),Object(o.b)("li",{parentName:"ul"},"xxlarge: ",Object(o.b)("inlineCode",{parentName:"li"},"96px"))),Object(o.b)("p",null,"Note: The exact pixel values in this scale may vary between apps."),Object(o.b)("h2",{id:"responsive-prop"},"Need responsive styles?"),Object(o.b)("p",null,"Previously, one of the main reasons for needing to create custom CSS was to define responsive rules. Layout components make this possible via responsive properties, which are provided as an array of values\u2014one per defined breakpoint, where the first item is the mobile value, followed by the tablet, and finally desktop value.\nFor example, if we wanted to change the value for ",Object(o.b)("inlineCode",{parentName:"p"},"space")," responsively:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"render=true",render:"true"}),'<Box backgroundColor="deepSolitude">\n    <Stack space={["small", "large"]}>\n        <Box padding="small" backgroundColor="solitude">\n            Item\n        </Box>\n        <Box padding="small" backgroundColor="solitude">\n            Item\n        </Box>\n    </Stack>\n</Box>\n')),Object(o.b)("h2",null,"Stack"),Object(o.b)("p",null,"The most common white space on screen is between elements stacked vertically. For this use case, Experimental provides a \u2018Stack\u2019 component that accepts a \u2018space\u2019 prop.\nFor example, if you wanted to render a stack of \u2018Heading\u2019 and \u2018Text\u2019 elements with large spacing between them:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"render=true",render:"true"}),'<Stack space="large">\n    <Heading level="3">Heading</Heading>\n    <Text>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dignissim dapibus elit,\n        vel egestas felis pharetra non. Cras malesuada, massa nec ultricies efficitur, lectus ante\n        consequat magna, a porttitor massa ex ut quam.\n    </Text>\n    <Text>\n        Phasellus ipsum tortor, aliquet dapibus fermentum in, mollis vel metus. Vestibulum malesuada\n        ante eu velit malesuada, nec ultricies sapien finibus. Aenean rutrum in sem a ullamcorper.\n        Integer ut euismod urna. Interdum et malesuada fames ac ante ipsum primis in faucibus.\n    </Text>\n</Stack>\n')),Object(o.b)("h2",null,"Inline"),Object(o.b)("p",null,"If you\u2019d like to render a set of components in a row with equal spacing around them, wrapping onto multiple lines when necessary, Experimental provides an \u2018Inline\u2019 component:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"render=true",render:"true"}),'<Inline space="small">\n    <Badge>Lorem ipsum</Badge>\n    <Badge>Dolor</Badge>\n    <Badge>Sit amet</Badge>\n    <Badge>Consectetur</Badge>\n    <Badge>Adipiscing elit</Badge>\n    <Badge>Suspendisse dignissim</Badge>\n    <Badge>Dapibus elit</Badge>\n    <Badge>Vel egestas felis</Badge>\n    <Badge>Pharetra non</Badge>\n</Inline>\n')),Object(o.b)("h2",null,"Tiles"),Object(o.b)("p",null,"If you\u2019d like to render a grid of components with equal spacing between them, Experimental provides a \u2018Tiles\u2019 component:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"render=true",render:"true"}),'<Tiles columns={[1, 2]} space="small">\n    <FormField label="First Name">\n        <TextInput placeholder="John" />\n    </FormField>\n    <FormField label="Last Name">\n        <TextInput placeholder="Doe" />\n    </FormField>\n    <FormField label="Email">\n        <TextInput type="email" />\n    </FormField>\n    <FormField label="Password">\n        <TextInput placeholder="123456" type="password" />\n    </FormField>\n</Tiles>\n')),Object(o.b)("h2",null,"Box"),Object(o.b)("p",null,"The \u2018Box\u2019 component is a utility component. It will eventually support most css properties."),Object(o.b)("p",null,"Available props are:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"padding"),Object(o.b)("li",{parentName:"ul"},"paddingX"),Object(o.b)("li",{parentName:"ul"},"paddingY"),Object(o.b)("li",{parentName:"ul"},"paddingLeft"),Object(o.b)("li",{parentName:"ul"},"paddingRight"),Object(o.b)("li",{parentName:"ul"},"paddingTop"),Object(o.b)("li",{parentName:"ul"},"paddingBottom"),Object(o.b)("li",{parentName:"ul"},"borderRadius"),Object(o.b)("li",{parentName:"ul"},"backgroundColor")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"render=true",render:"true"}),'<Box padding="medium" borderRadius="small" backgroundColor="deepSolitude">\n    <Stack space="small">\n        <Inline>\n            <Badge color="danger">Lorem ipsum</Badge>\n        </Inline>\n        <TextBlock>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dignissim dapibus\n            elit, vel egestas felis pharetra non. Cras malesuada, massa nec ultricies efficitur,\n            lectus ante consequat magna, a porttitor massa ex ut quam.\n        </TextBlock>\n        <FormField label="Label">\n            <TextInput />\n        </FormField>\n    </Stack>\n</Box>\n')))}p.isMDXComponent=!0;i.a.createElement;var u={},b="wrapper";function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)(b,Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(p,{mdxType:"Readme"}))}m.isMDXComponent=!0},o9Oa:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/how-to/layout",function(){return n("nYFn")}])}},[["o9Oa",0,1]]]);