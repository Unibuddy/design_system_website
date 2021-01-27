(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{Fcif:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return a}))},SAVP:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return u}));var a=n("mXGw"),r=n.n(a),l=r.a.createContext({}),i=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},o=function(e){var t=i(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){return r.a.createElement(r.a.Fragment,{},e.children)}},p=function(e){var t=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,o=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),s=i(t);return r.a.createElement(s[l+"."+n]||s[n]||c[n]||a,t?Object.assign({},o,{components:t}):o)};function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[s]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},"dV/x":function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,"a",(function(){return a}))},fUUh:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/how-to/layout",function(){return n("nYFn")}])},nYFn:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return g}));var a=n("Fcif"),r=n("dV/x"),l=n("mXGw"),i=n.n(l),o=n("SAVP"),s=n("rBe8"),c=n("syFR"),p=(i.a.createElement,{}),u="wrapper";function m(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(o.b)(u,Object(s.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",null,"Layout"),Object(o.b)("p",null,"The guiding principle for layout in Experimental/Layout is that components should not provide surrounding white space. Instead, spacing between elements is owned entirely by layout components. This approach ensures that the system is as composable as possible while keeping white space completely predictable."),Object(o.b)("p",null,"All of the components referenced below can be infinitely nested within each other to create a wide variety of standard layouts. Getting a firm grasp of these components is an essential part of working effectively with Experimental/Layout."),Object(o.b)("h2",null,"Why"),Object(o.b)("p",null,"Flow elements require space (sometimes referred to as white space) to physically and conceptually separate them from the elements that come before and after them. This is the purpose of the margin property."),Object(o.b)("p",null,"However, design systems conceive elements and components in isolation. At the time of conception, it is not settled whether there will be surrounding content or what the nature of that content will be. One element or component is likely to appear in different contexts, and the requirement for spacing will differ."),Object(o.b)("p",null,"We are in the habit of styling elements, or classes of elements, directly: we make style declarations belong to elements. Typically, this does not produce any issues, but margin is really a property of the relationship between two proximate elements and should be left to parent components."),Object(o.b)("h2",null,"Spacing"),Object(o.b)("p",null,"Experimental/Layout provides a standard white space scale that is available across the entire component suite. As much as possible, Experimental/Layout tries to make use of this scale rather than generating custom spacing rules."),Object(o.b)("p",null,"Default available options are:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"none: ",Object(o.b)("inlineCode",{parentName:"li"},"0")),Object(o.b)("li",{parentName:"ul"},"gutter: ",Object(o.b)("inlineCode",{parentName:"li"},"24px")),Object(o.b)("li",{parentName:"ul"},"xxsmall: ",Object(o.b)("inlineCode",{parentName:"li"},"4px")),Object(o.b)("li",{parentName:"ul"},"xsmall: ",Object(o.b)("inlineCode",{parentName:"li"},"8px")),Object(o.b)("li",{parentName:"ul"},"small: ",Object(o.b)("inlineCode",{parentName:"li"},"12px")),Object(o.b)("li",{parentName:"ul"},"medium: ",Object(o.b)("inlineCode",{parentName:"li"},"20px")),Object(o.b)("li",{parentName:"ul"},"large: ",Object(o.b)("inlineCode",{parentName:"li"},"32px")),Object(o.b)("li",{parentName:"ul"},"xlarge: ",Object(o.b)("inlineCode",{parentName:"li"},"48px")),Object(o.b)("li",{parentName:"ul"},"xxlarge: ",Object(o.b)("inlineCode",{parentName:"li"},"96px"))),Object(o.b)("p",null,"Note: The exact pixel values in this scale may vary between apps."),Object(o.b)("h2",{id:"responsive-prop"},"Need responsive styles?"),Object(o.b)("p",null,"Previously, one of the main reasons for needing to create custom CSS was to define responsive rules. Layout components make this possible via responsive properties, which are provided as an array of values\u2014one per defined breakpoint, where the first item is the mobile value, followed by the tablet, and finally desktop value.\nFor example, if we wanted to change the value for ",Object(o.b)("inlineCode",{parentName:"p"},"space")," responsively:"),Object(o.b)("pre",null,Object(o.b)("code",Object(s.a)({parentName:"pre"},{className:"language-jsx",metastring:"render=true",render:"true"}),'<Box backgroundColor="deepSolitude">\n    <Stack space={["small", "large"]}>\n        <Box padding="small" backgroundColor="solitude">\n            Item\n        </Box>\n        <Box padding="small" backgroundColor="solitude">\n            Item\n        </Box>\n    </Stack>\n</Box>\n')),Object(o.b)("h2",null,"Stack"),Object(o.b)("p",null,"The most common white space on screen is between elements stacked vertically. For this use case, Experimental provides a \u2018Stack\u2019 component that accepts a \u2018space\u2019 prop.\nFor example, if you wanted to render a stack of \u2018Heading\u2019 and \u2018Text\u2019 elements with large spacing between them:"),Object(o.b)("pre",null,Object(o.b)("code",Object(s.a)({parentName:"pre"},{className:"language-jsx",metastring:"render=true",render:"true"}),'<Stack space="large">\n    <Heading level="3">Heading</Heading>\n    <Text>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dignissim dapibus elit,\n        vel egestas felis pharetra non. Cras malesuada, massa nec ultricies efficitur, lectus ante\n        consequat magna, a porttitor massa ex ut quam.\n    </Text>\n    <Text>\n        Phasellus ipsum tortor, aliquet dapibus fermentum in, mollis vel metus. Vestibulum malesuada\n        ante eu velit malesuada, nec ultricies sapien finibus. Aenean rutrum in sem a ullamcorper.\n        Integer ut euismod urna. Interdum et malesuada fames ac ante ipsum primis in faucibus.\n    </Text>\n</Stack>\n')),Object(o.b)("h2",null,"Inline"),Object(o.b)("p",null,"If you\u2019d like to render a set of components in a row with equal spacing around them, wrapping onto multiple lines when necessary, Experimental provides an \u2018Inline\u2019 component:"),Object(o.b)("pre",null,Object(o.b)("code",Object(s.a)({parentName:"pre"},{className:"language-jsx",metastring:"render=true",render:"true"}),'<Inline space="small">\n    <Badge>Lorem ipsum</Badge>\n    <Badge>Dolor</Badge>\n    <Badge>Sit amet</Badge>\n    <Badge>Consectetur</Badge>\n    <Badge>Adipiscing elit</Badge>\n    <Badge>Suspendisse dignissim</Badge>\n    <Badge>Dapibus elit</Badge>\n    <Badge>Vel egestas felis</Badge>\n    <Badge>Pharetra non</Badge>\n</Inline>\n')),Object(o.b)("h2",null,"Tiles"),Object(o.b)("p",null,"If you\u2019d like to render a grid of components with equal spacing between them, Experimental provides a \u2018Tiles\u2019 component:"),Object(o.b)("pre",null,Object(o.b)("code",Object(s.a)({parentName:"pre"},{className:"language-jsx",metastring:"render=true",render:"true"}),'<Tiles columns={[1, 2]} space="small">\n    <FormField label="First Name">\n        <TextInput placeholder="John" />\n    </FormField>\n    <FormField label="Last Name">\n        <TextInput placeholder="Doe" />\n    </FormField>\n    <FormField label="Email">\n        <TextInput type="email" />\n    </FormField>\n    <FormField label="Password">\n        <TextInput placeholder="123456" type="password" />\n    </FormField>\n</Tiles>\n')),Object(o.b)("h2",null,"Box"),Object(o.b)("p",null,"The \u2018Box\u2019 component is a utility component. It will eventually support most css properties."),Object(o.b)("p",null,"Available props are:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"padding"),Object(o.b)("li",{parentName:"ul"},"paddingX"),Object(o.b)("li",{parentName:"ul"},"paddingY"),Object(o.b)("li",{parentName:"ul"},"paddingLeft"),Object(o.b)("li",{parentName:"ul"},"paddingRight"),Object(o.b)("li",{parentName:"ul"},"paddingTop"),Object(o.b)("li",{parentName:"ul"},"paddingBottom"),Object(o.b)("li",{parentName:"ul"},"borderRadius"),Object(o.b)("li",{parentName:"ul"},"backgroundColor")),Object(o.b)("pre",null,Object(o.b)("code",Object(s.a)({parentName:"pre"},{className:"language-jsx",metastring:"render=true",render:"true"}),'<Box padding="medium" borderRadius="small" backgroundColor="deepSolitude">\n    <Stack space="small">\n        <Inline>\n            <Badge color="danger">Lorem ipsum</Badge>\n        </Inline>\n        <TextBlock>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dignissim dapibus\n            elit, vel egestas felis pharetra non. Cras malesuada, massa nec ultricies efficitur,\n            lectus ante consequat magna, a porttitor massa ex ut quam.\n        </TextBlock>\n        <FormField label="Label">\n            <TextInput />\n        </FormField>\n    </Stack>\n</Box>\n')))}m.isMDXComponent=!0;i.a.createElement;var b={},d="wrapper";function g(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)(d,Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(m,{mdxType:"Readme"}))}g.isMDXComponent=!0},rBe8:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return a}))},syFR:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,"a",(function(){return a}))},x9yg:function(e,t,n){"use strict";var a=Object.assign.bind(Object);e.exports=a,e.exports.default=e.exports}},[["fUUh",0,1]]]);