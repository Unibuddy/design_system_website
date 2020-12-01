(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"7U3A":function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return g}));var o=t("Fcif"),r=t("dV/x"),l=t("mXGw"),a=t.n(l),u=t("SAVP"),i=t("rBe8"),c=t("syFR"),d=(a.a.createElement,{}),p="wrapper";function m(n){var e=n.components,t=Object(c.a)(n,["components"]);return Object(u.b)(p,Object(i.a)({},d,t,{components:e,mdxType:"MDXLayout"}),Object(u.b)("h1",null,"Columns"),Object(u.b)("p",null,"If you need to lay out content horizontally, Experimental provides the \u2018Columns\u2019 and \u2018Column\u2019 components."),Object(u.b)("pre",null,Object(u.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),'import Columns from "@unibuddy/machop/Experimental/Layout/components/Columns/Columns";\nimport Column from "@unibuddy/machop/Experimental/Layout/components/Column/Column";\n')),Object(u.b)("pre",null,Object(u.b)("code",Object(i.a)({parentName:"pre"},{className:"language-jsx",metastring:"render=true",render:"true"}),'<Box backgroundColor="solitude">\n    <Columns space="small" collapseBelow="tablet">\n        <Column width="content">\n            <Box padding="medium" backgroundColor="deepSolitude">\n                Content\n            </Box>\n        </Column>\n        <Column width="1/3">\n            <Box padding="medium" backgroundColor="deepSolitude">\n                Width 1/3\n            </Box>\n        </Column>\n        <Column>\n            <Box padding="medium" backgroundColor="deepSolitude">\n                Fluid\n            </Box>\n        </Column>\n    </Columns>\n</Box>\n')),Object(u.b)("h2",null,"Collapse Below"),Object(u.b)("p",null,"When you need to reset the Columns children to their default document flow behavior, you can use ",Object(u.b)("inlineCode",{parentName:"p"},"collapseBelow")," prop and the Column children will take full width and behave like a block element."),Object(u.b)("h2",null,"Space"),Object(u.b)("p",null,"Like in all other layout components, space is a responsive prop which will equally distribute padding between its children. When the Columns are inline, the space will be horizontal, otherwise, when the Columns are collapsed, the spacing will be vertical."),Object(u.b)("pre",null,Object(u.b)("code",Object(i.a)({parentName:"pre"},{className:"language-jsx",metastring:"render=true",render:"true"}),'<Columns space={["xsmall", "large"]} collapseBelow="tablet">\n    <Column width="1/3">\n        <Box padding="medium" backgroundColor="deepSolitude">\n            Width 1/3\n        </Box>\n    </Column>\n    <Column width="2/3">\n        <Box padding="medium" backgroundColor="deepSolitude">\n            Width 2/3\n        </Box>\n    </Column>\n</Columns>\n')),Object(u.b)("h2",null,"Align"),Object(u.b)("p",null,"Horizontal alignment is controlled via the align prop."),Object(u.b)("pre",null,Object(u.b)("code",Object(i.a)({parentName:"pre"},{className:"language-jsx",metastring:"render=true",render:"true"}),'<Columns space="small" align="right">\n    <Column width="content">\n        <Box padding="medium" backgroundColor="solitude">\n            Content\n        </Box>\n    </Column>\n    <Column width="1/3">\n        <Box padding="medium" backgroundColor="solitude">\n            Width 1/3\n        </Box>\n    </Column>\n</Columns>\n')),Object(u.b)("h2",null,"Vertical Align"),Object(u.b)("p",null,"Vertical alignment is controlled via the verticalAlign prop."),Object(u.b)("pre",null,Object(u.b)("code",Object(i.a)({parentName:"pre"},{className:"language-jsx",metastring:"render=true",render:"true"}),'<Columns space="small" verticalAlign="bottom">\n    <Column width="content">\n        <Box padding="medium" backgroundColor="solitude">\n            Content\n        </Box>\n    </Column>\n    <Column width="1/3">\n        <Box padding="xlarge" backgroundColor="solitude">\n            Width 1/3\n        </Box>\n    </Column>\n    <Column>\n        <Box padding="medium" backgroundColor="solitude">\n            Fluid\n        </Box>\n    </Column>\n</Columns>\n')),Object(u.b)("h2",null,"Kitchen Sink"),Object(u.b)("p",null,"Every prop besides ",Object(u.b)("inlineCode",{parentName:"p"},"collapseBelow")," is responsive."),Object(u.b)("pre",null,Object(u.b)("code",Object(i.a)({parentName:"pre"},{className:"language-jsx",metastring:"render=true",render:"true"}),'<Columns space={["xsmall", "large"]} collapseBelow="tablet" align="right" verticalAlign="bottom">\n    <Column width="content">\n        <Box padding="medium" backgroundColor="solitude">\n            Content\n        </Box>\n    </Column>\n    <Column width={["1/2", "1/3", "3/5"]}>\n        <Box padding="xlarge" backgroundColor="solitude">\n            {\'width={["1/2", "1/3", "3/5"]}\'}"\n        </Box>\n    </Column>\n    <Column width="content">\n        <Box padding="medium" backgroundColor="solitude">\n            Content\n        </Box>\n    </Column>\n</Columns>\n')))}m.isMDXComponent=!0;a.a.createElement;var s={},b="wrapper";function g(n){var e=n.components,t=Object(r.a)(n,["components"]);return Object(u.b)(b,Object(o.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(u.b)(m,{mdxType:"Readme"}))}g.isMDXComponent=!0},A5vT:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/layout/columns",function(){return t("7U3A")}])},Fcif:function(n,e,t){"use strict";function o(){return(o=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n}).apply(this,arguments)}t.d(e,"a",(function(){return o}))},SAVP:function(n,e,t){"use strict";t.d(e,"a",(function(){return u})),t.d(e,"b",(function(){return p}));var o=t("mXGw"),r=t.n(o),l=r.a.createContext({}),a=function(n){var e=r.a.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):Object.assign({},e,n)),t},u=function(n){var e=a(n.components);return r.a.createElement(l.Provider,{value:e},n.children)},i="mdxType",c={inlineCode:"code",wrapper:function(n){return r.a.createElement(r.a.Fragment,{},n.children)}},d=function(n){var e=n.components,t=n.mdxType,o=n.originalType,l=n.parentName,u=function(n,e){var t={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&-1===e.indexOf(o)&&(t[o]=n[o]);return t}(n,["components","mdxType","originalType","parentName"]),i=a(e);return r.a.createElement(i[l+"."+t]||i[t]||c[t]||o,e?Object.assign({},u,{components:e}):u)};function p(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var l=t.length,a=new Array(l);a[0]=d;var u={};for(var c in e)hasOwnProperty.call(e,c)&&(u[c]=e[c]);u.originalType=n,u[i]="string"==typeof n?n:o,a[1]=u;for(var p=2;p<l;p++)a[p]=t[p];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},"dV/x":function(n,e,t){"use strict";function o(n,e){if(null==n)return{};var t,o,r=function(n,e){if(null==n)return{};var t,o,r={},l=Object.keys(n);for(o=0;o<l.length;o++)t=l[o],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(o=0;o<l.length;o++)t=l[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}t.d(e,"a",(function(){return o}))},rBe8:function(n,e,t){"use strict";function o(){return(o=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n}).apply(this,arguments)}t.d(e,"a",(function(){return o}))},syFR:function(n,e,t){"use strict";function o(n,e){if(null==n)return{};var t,o,r=function(n,e){if(null==n)return{};var t,o,r={},l=Object.keys(n);for(o=0;o<l.length;o++)t=l[o],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(o=0;o<l.length;o++)t=l[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}t.d(e,"a",(function(){return o}))},x9yg:function(n,e,t){"use strict";var o=Object.assign.bind(Object);n.exports=o,n.exports.default=n.exports}},[["A5vT",0,1]]]);