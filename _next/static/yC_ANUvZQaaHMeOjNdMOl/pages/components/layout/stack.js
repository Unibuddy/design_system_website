(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"+wNj":function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,"a",(function(){return r}))},"9dNa":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/layout/stack",function(){return n("zL+H")}])},HbGN:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("+wNj");function a(e,t){if(null==e)return{};var n,a,o=Object(r.a)(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}},Km8e:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},ZVZ0:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n("ERkP"),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"===typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,m=p["".concat(c,".").concat(b)]||p[b]||d[b]||o;return n?a.a.createElement(m,l(l({ref:t},s),{},{components:n})):a.a.createElement(m,l({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[b]="string"===typeof e?e:r,c[1]=l;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},cxan:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},"zL+H":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var r=n("cxan"),a=n("HbGN"),o=n("ERkP"),c=n.n(o),l=n("ZVZ0"),i=(c.a.createElement,{}),s="wrapper";function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)(s,Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",null,"Stack"),Object(l.b)("p",null,"The most common white space on screen is between elements stacked vertically. For this use case, Experimental provides a \u2018Stack\u2019 component that accepts a \u2018space\u2019 prop."),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'import Stack from "@unibuddy/ds/src/Layout/Stack/Stack";\n')),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"render=true",render:"true"}),'<Box backgroundColor="solitude">\n    <Stack space="small">\n        <Box padding="small" backgroundColor="deepSolitude">\n            Item\n        </Box>\n        <Box padding="small" backgroundColor="deepSolitude">\n            Item\n        </Box>\n        <Box padding="small" backgroundColor="deepSolitude">\n            Item\n        </Box>\n    </Stack>\n</Box>\n')),Object(l.b)("h2",null,"Space"),Object(l.b)("p",null,"Space prop is the prop you will be using the most often, and it utilises the ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"/how-to/layout#responsive-prop"}),"responsive prop")," concept."),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"render=true",render:"true"}),'<Box backgroundColor="deepSolitude">\n    <Stack space={["small", "large"]}>\n        <Box padding="small" backgroundColor="solitude">\n            Item\n        </Box>\n        <Box padding="small" backgroundColor="solitude">\n            Item\n        </Box>\n    </Stack>\n</Box>\n')),Object(l.b)("h2",null,"Composition"),Object(l.b)("p",null,"Stacks can be composed together to achieve different spacing between different groups of elements. In the following example we have a large space between the Heading and the two TextBlocks and a medium space between the two TextBlocks. Layout components can generally be nested infinitely."),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"render=true",render:"true"}),'<Stack space="large">\n    <Heading level="3">Heading</Heading>\n    <Stack space="medium">\n        <TextBlock>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dignissim dapibus\n            elit, vel egestas felis pharetra non.\n        </TextBlock>\n        <TextBlock>\n            Phasellus ipsum tortor, aliquet dapibus fermentum in, mollis vel metus. Vestibulum\n            malesuada ante eu velit malesuada, nec ultricies sapien finibus.\n        </TextBlock>\n    </Stack>\n</Stack>\n')),Object(l.b)("h2",null,"Align"),Object(l.b)("p",null,"Stacks children can be aligned horizontally left, right, and center with the ",Object(l.b)("inlineCode",{parentName:"p"},"align")," prop."),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"render=true",render:"true"}),'<Stack space="medium" align="right">\n    <TextBlock>Lorem ipsum dolor sit amet.</TextBlock>\n    <TextBlock>Phasellus ipsum tortor.</TextBlock>\n</Stack>\n')),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"render=true",render:"true"}),'<Stack space="medium" align="center">\n    <TextBlock>Lorem ipsum dolor sit amet.</TextBlock>\n    <TextBlock>Phasellus ipsum tortor.</TextBlock>\n</Stack>\n')),Object(l.b)("h2",null,"Dividers"),Object(l.b)("p",null,"You can optionally add dividers between Stack items with the ",Object(l.b)("inlineCode",{parentName:"p"},"dividers")," prop."),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"render=true",render:"true"}),'<Stack dividers>\n    <Box padding="small">Item</Box>\n    <Box padding="small">Item</Box>\n    <Box padding="small">Item</Box>\n</Stack>\n')))}u.isMDXComponent=!0;c.a.createElement;var p={},b="wrapper";function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)(b,Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)(u,{mdxType:"Readme"}))}d.isMDXComponent=!0}},[["9dNa",0,1]]]);