(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{"+wNj":function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,"a",(function(){return r}))},AVYd:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var r=n("cxan"),o=n("HbGN"),a=n("ERkP"),i=n.n(a),c=n("ZVZ0"),l=(i.a.createElement,{}),p="wrapper";function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)(p,Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",null,"Heading"),Object(c.b)("p",null,"This component uses some CSS trickery by ",Object(c.b)("inlineCode",{parentName:"p"},"capsize"),' library to eliminate the invisible "margin" that the browser adds around any piece of text. It requires the developer to specify a ',Object(c.b)("inlineCode",{parentName:"p"},"level")," prop which will determine the appropriate HTML tag to use (h1, h2, h3, h4), and default to a particular font size for that level. In case you want to overwrite the font-size you can do that with the ",Object(c.b)("inlineCode",{parentName:"p"},"size")," prop."),Object(c.b)("h2",null,"How To Theme"),Object(c.b)("p",null,"If you look at the defaultTheme, exported by patron, you will see the necessary parameters you will need to change in order to theme Heading for you app."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-ts"},"type ThemeFontSize = {\n    fontSize: number;\n    lineGap: number;\n};\ninterface DefaultTheme {\n    Heading?: {\n        color?: string;\n        fontFamily: string;\n        fontMetrics: FontMetrics;\n        sizes: Record<string, ThemeFontSize>;\n    };\n}\n")),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"FontMetrics")," interface is provided by capsize and to get the values necessary to get it to work with your font go to ",Object(c.b)("a",{parentName:"p",href:"https://seek-oss.github.io/capsize/"},"capsize website")," and either upload your font, or search through google fonts to find the metrics."),Object(c.b)("h2",null,"How To Use"),Object(c.b)("p",null,"For accessibility purposes, you must always pass it a ",Object(c.b)("inlineCode",{parentName:"p"},"level")," prop. However, you can always overwrite the size with the ",Object(c.b)("inlineCode",{parentName:"p"},"size")," prop."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx",metastring:"render=true",render:"true"},'<Heading level="3">Hello, this is a H3 tag</Heading>\n<Heading level="3" size="xsmall">Hello, this is a H3 tag with H4 size</Heading>\n')),Object(c.b)("h2",null,"Props"),Object(c.b)("p",null,"TextBlock, like ",Object(c.b)("inlineCode",{parentName:"p"},"TextBlock"),", provides a wide array of text styling props, that map on to equivalent css props."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-ts"},'export interface BaseTextProps {\n    /* Most of the time you should be using the tone prop instead but this prop is available as a manual override. It supports the use of both brand color names such as "redCould" or "freshLeaves", and as the css color property "var(--theme-primary)" or "#ccc". */\n    color?: ColorMap | string;\n\n    /* The CSS weight property */\n    weight?: FontWeightProperty | FontWeights;\n\n    /* The CSS text-align property */\n    align?: TextAlignProperty;\n\n    /* Force-breaks long words and urls in to multiline text, with a hyphen at the breaking point. */\n    breakWords?: boolean;\n\n    /* Forces the text to stay on one line but multiline truncate it doesn\'t cut it off. */\n    nowrap?: boolean;\n\n    whiteSpace?: WhiteSpaceProperty;\n\n    /* CSS text-transform property */\n    transform?: TextTransformProperty;\n\n    /* Spaces out the individual letters */\n    letterSpacing?: LetterSpacingProperty<"normal">;\n\n    /* Changes the font style used */\n    fontStyle?: FontStyleProperty;\n\n    /* It will truncate the text on a single line with an ellipsis */\n    truncate?: boolean;\n}\n')),Object(c.b)("h2",null,"How To Test"),Object(c.b)("p",null,"With Heading, you can use ",Object(c.b)("inlineCode",{parentName:"p"},"getByRole")," and ",Object(c.b)("inlineCode",{parentName:"p"},"findByRole")," from ",Object(c.b)("inlineCode",{parentName:"p"},"@testing-libary/react"),"."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},'getByRole("heading", {name: "Text of the Heading"});\n// or\nawait findByRole("heading", {name: "Text of the Heading"});\n')),Object(c.b)("p",null,"Avoid trying to add ",Object(c.b)("inlineCode",{parentName:"p"},"data-test-id"),", test for acessibility instead."),Object(c.b)("h2",null,"Use With Layout Components"),Object(c.b)("p",null,"As most other components, the Heading component doesn't have any surrounding white space. If you want to add white space you can use one of the provided Layout components."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx",metastring:"render=true",render:"true"},'<Stack space="small">\n    <Heading level="1">Hello, this is a title</Heading>\n    <TextBlock>Hello, this is some accompanying text</TextBlock>\n</Stack>\n')))}s.isMDXComponent=!0;i.a.createElement;var u={},b="wrapper";function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)(b,Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)(s,{mdxType:"Readme"}))}d.isMDXComponent=!0},HbGN:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("+wNj");function o(e,t){if(null==e)return{};var n,o,a=Object(r.a)(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}},Km8e:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},ZVZ0:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n("ERkP"),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"===typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),b=r,f=u["".concat(i,".").concat(b)]||u[b]||d[b]||a;return n?o.a.createElement(f,c(c({ref:t},p),{},{components:n})):o.a.createElement(f,c({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[b]="string"===typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},aCDz:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/typography/heading",function(){return n("AVYd")}])},cxan:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))}},[["aCDz",0,1]]]);