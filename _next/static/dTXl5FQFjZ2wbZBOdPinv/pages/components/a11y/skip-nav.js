(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"+wNj":function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}t.d(n,"a",(function(){return r}))},HbGN:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t("+wNj");function o(e,n){if(null==e)return{};var t,o,a=Object(r.a)(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}},Km8e:function(e,n,t){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},KpIH:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/a11y/skip-nav",function(){return t("k4Di")}])},ZVZ0:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return y}));var r=t("ERkP"),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),l=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"===typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=l(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},b="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=l(t),b=r,m=s["".concat(i,".").concat(b)]||s[b]||f[b]||a;return t?o.a.createElement(m,c(c({ref:n},p),{},{components:t})):o.a.createElement(m,c({ref:n},p))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"===typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c[b]="string"===typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},cxan:function(e,n,t){"use strict";function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}t.d(n,"a",(function(){return r}))},k4Di:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return f}));var r=t("cxan"),o=t("HbGN"),a=t("ERkP"),i=t.n(a),c=t("ZVZ0"),u=(i.a.createElement,{}),p="wrapper";function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(c.b)(p,Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h1",null,"SkipNav"),Object(c.b)("p",null,"Skip navigation link for screen reader and keyboard users. Because the main content is not usually the first thing in the document, it's valuable to provide a shortcut for keyboard and screen reader users to skip to the content."),Object(c.b)("p",null,"If the user does not navigate with the keyboard, they won't see the link."),Object(c.b)("p",null,'For a demo, click some empty space on the end of the page to move focus to the end of the document body, then hit the "tab" key twice, first you will see the focus move to the browser url bar, and then you\'ll see the link pop up. Hit enter, then tab again. Rather than cycling through the navigation, you are tabbing through the main content of the page.'),Object(c.b)("h2",null,"How To Use"),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"SkipNavLink")," should be placed at the beginning of the document, before any navigation items. Then we place the ",Object(c.b)("inlineCode",{parentName:"p"},"SkipNavContent")," where our main content begins. The two are linked automatically."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},'import {SkipNavLink, SkipNavContent} from "@unibuddy/patron";\n\nfunction MyApp() {\n    return (\n        <main>\n            <SkipNavLink />\n            <nav>\n                <a>First Link</a>\n                <a>Second Link</a>\n                <a>Third Link</a>\n                {/* more links here... */}\n            </nav>\n            <div>\n                <SkipNavContent />\n                {/* some app content here... */}\n            </div>\n        </main>\n    );\n}\n')))}l.isMDXComponent=!0;i.a.createElement;var s={},b="wrapper";function f(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(c.b)(b,Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)(l,{mdxType:"Readme"}))}f.isMDXComponent=!0}},[["KpIH",0,1]]]);