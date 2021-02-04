(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"+wNj":function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}t.d(n,"a",(function(){return r}))},Dnej:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/general/button-link",function(){return t("VNjJ")}])},HbGN:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t("+wNj");function o(e,n){if(null==e)return{};var t,o,a=Object(r.a)(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}},Km8e:function(e,n,t){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},VNjJ:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return f}));var r=t("cxan"),o=t("HbGN"),a=t("ERkP"),c=t.n(a),i=t("ZVZ0"),u=(c.a.createElement,{}),p="wrapper";function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)(p,Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",null,"ButtonLink"),Object(i.b)("p",null,"The LoadingButton composes over the regular Button but a set of extra props that work with ",Object(i.b)("inlineCode",{parentName:"p"},"react-router-dom/Link")," and ",Object(i.b)("inlineCode",{parentName:"p"},"<a>")," html tags. So you can use most configurations of Button that you'd normally would."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'import ButtonLink from "@unibuddy/machop/Experimental/General/components/ButtonLink/ButtonLink";\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"render=true",render:"true"}),'<Inline space="medium">\n    <ButtonLink to="/test">Default</ButtonLink>\n    <ButtonLink to="/test" clear>\n        Clear\n    </ButtonLink>\n    <ButtonLink to="/test" link>\n        Link\n    </ButtonLink>\n    <ButtonLink to="/test" round>\n        Round\n    </ButtonLink>\n    <ButtonLink to="/test" iconOnly>\n        <ReadIcon />\n    </ButtonLink>\n    <ButtonLink to="/test" iconOnly round>\n        <ReadIcon />\n    </ButtonLink>\n</Inline>\n')),Object(i.b)("h2",null,"Props"),Object(i.b)("h3",null,"To"),Object(i.b)("p",null,"ButtonLink accepts the standard ",Object(i.b)("inlineCode",{parentName:"p"},"to")," prop just link the ",Object(i.b)("inlineCode",{parentName:"p"},"react-router-dom/Link")," does."),Object(i.b)("h3",null,"External"),Object(i.b)("p",null,"Adding the ",Object(i.b)("inlineCode",{parentName:"p"},"external")," prop will make the link render as a native ",Object(i.b)("inlineCode",{parentName:"p"},"<a>")," tag instead of ",Object(i.b)("inlineCode",{parentName:"p"},"Link")," so we can point to external websites, which Link cannot do."))}l.isMDXComponent=!0;c.a.createElement;var b={},s="wrapper";function f(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)(s,Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)(l,{mdxType:"Readme"}))}f.isMDXComponent=!0},ZVZ0:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return O}));var r=t("ERkP"),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),l=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"===typeof e?e(n):i(i({},n),e)),t},b=function(e){var n=l(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),b=l(t),s=r,m=b["".concat(c,".").concat(s)]||b[s]||f[s]||a;return t?o.a.createElement(m,i(i({ref:n},p),{},{components:t})):o.a.createElement(m,i({ref:n},p))}));function O(e,n){var t=arguments,r=n&&n.mdxType;if("string"===typeof e||r){var a=t.length,c=new Array(a);c[0]=m;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i[s]="string"===typeof e?e:r,c[1]=i;for(var p=2;p<a;p++)c[p]=t[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},cxan:function(e,n,t){"use strict";function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}t.d(n,"a",(function(){return r}))}},[["Dnej",0,1]]]);