(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"+wNj":function(e,n,t){"use strict";function o(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}t.d(n,"a",(function(){return o}))},HbGN:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var o=t("+wNj");function r(e,n){if(null==e)return{};var t,r,a=Object(o.a)(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}},Km8e:function(e,n,t){"use strict";var o=Object.assign.bind(Object);e.exports=o,e.exports.default=e.exports},KmaY:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return b}));var o=t("cxan"),r=t("HbGN"),a=t("ERkP"),i=t.n(a),c=t("ZVZ0"),u=(i.a.createElement,{}),l="wrapper";function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(c.b)(l,Object(o.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h1",null,"Box"),Object(c.b)("p",null,"Box is our kitchen sink layout component, that should eventually have 99% of the CSS properties supported that we need at any one time while building products. The goal with Box is that we completely stop writing CSS when writing app code."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},'import Box from "@unibuddy/machop/Experimental/Layout/components/Box/Box";\n')),Object(c.b)("h2",null,"Responsive Props"),Object(c.b)("p",null,"Currently all of the props supported by Box are responsive except for ",Object(c.b)("inlineCode",{parentName:"p"},"backgroundColor"),"."),Object(c.b)("h2",null,"Padding"),Object(c.b)("p",null,"One of the most common use cases for Box is to add padding. ",Object(c.b)("strong",{parentName:"p"},"You should not be using padding to create vertical or horizontal space between multiple components.")," This is the job of Stack, Inline, and the rest of the Layout components. They maintain same spacing within a layout group, and therefore, a consistent spacing rhythm."),Object(c.b)("p",null,"You can add padding across all sides, individual, or horizontal or vertical only padding with ",Object(c.b)("inlineCode",{parentName:"p"},"paddingX")," and ",Object(c.b)("inlineCode",{parentName:"p"},"paddingY"),"."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx",metastring:"render=true",render:"true"},'<Inline space="medium">\n    <Box padding="medium" backgroundColor="solitude">\n        padding\n    </Box>\n    <Box paddingX="medium" backgroundColor="solitude">\n        paddingX\n    </Box>\n    <Box paddingY="medium" backgroundColor="solitude">\n        paddingY\n    </Box>\n    <Box paddingTop="medium" backgroundColor="solitude">\n        paddingTop\n    </Box>\n    <Box paddingBottom="medium" backgroundColor="solitude">\n        paddingBottom\n    </Box>\n    <Box paddingLeft="medium" backgroundColor="solitude">\n        paddingLeft\n    </Box>\n    <Box paddingRight="medium" backgroundColor="solitude">\n        paddingRight\n    </Box>\n</Inline>\n')),Object(c.b)("h2",null,"Background Color"),Object(c.b)("p",null,"Another useful feature of Box is that it can automatically maintain background and foreground color contrast when used in combination with TextBlock."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx",metastring:"render=true",render:"true"},'<Stack space="medium">\n    <Box padding="medium" backgroundColor="deepSolitude">\n        <TextBlock>I don{"\'"}t have an explicitly set color</TextBlock>\n    </Box>\n    <Box padding="medium" backgroundColor="smartGrey">\n        <TextBlock>I don{"\'"}t have an explicitly set color</TextBlock>\n    </Box>\n    <Box padding="medium" backgroundColor="freshLeaves">\n        <TextBlock>I don{"\'"}t have an explicitly set color</TextBlock>\n    </Box>\n    <Box padding="medium" backgroundColor="redCloud">\n        <TextBlock>I don{"\'"}t have an explicitly set color</TextBlock>\n    </Box>\n</Stack>\n')),Object(c.b)("p",null,"You can use this feature manually in your components with BackgroundColorProvider and useBackgroundColor hook."))}p.isMDXComponent=!0;i.a.createElement;var d={},s="wrapper";function b(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(c.b)(s,Object(o.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)(p,{mdxType:"Readme"}))}b.isMDXComponent=!0},ORkb:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/layout/box",function(){return t("KmaY")}])},ZVZ0:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return f}));var o=t("ERkP"),r=t.n(o);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),p=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"===typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=p(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},s="mdxType",b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=p(t),s=o,m=d["".concat(i,".").concat(s)]||d[s]||b[s]||a;return t?r.a.createElement(m,c(c({ref:n},l),{},{components:t})):r.a.createElement(m,c({ref:n},l))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"===typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c[s]="string"===typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},cxan:function(e,n,t){"use strict";function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}t.d(n,"a",(function(){return o}))}},[["ORkb",0,1]]]);