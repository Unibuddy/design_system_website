(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{Fcif:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},SAVP:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return u}));var r=n("mXGw"),a=n.n(r),o=a.a.createContext({}),i=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},l=function(e){var t=i(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){return a.a.createElement(a.a.Fragment,{},e.children)}},p=function(e){var t=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),s=i(t);return a.a.createElement(s[o+"."+n]||s[n]||c[n]||r,t?Object.assign({},l,{components:t}):l)};function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},STWM:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},buSY:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var r=n("Fcif"),a=n("dV/x"),o=n("mXGw"),i=n.n(o),l=n("SAVP"),s=n("STWM"),c=n("cwdW"),p=(i.a.createElement,{}),u="wrapper";function b(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(l.b)(u,Object(s.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",null,"Drawer"),Object(l.b)("p",null,"A panel which slides in from the edge of the screen."),Object(l.b)("h2",null,"How To Use"),Object(l.b)("p",null,"A Drawer is a panel that is typically overlaid on top of a page and slides in from the side. It contains a set of information or actions. Since the user can interact with the Drawer without leaving the current page, tasks can be achieved more efficiently within the same context."),Object(l.b)("p",null,"It uses ",Object(l.b)("inlineCode",{parentName:"p"},'position: "absolute"')," which means you need to wrap it with an element with a ",Object(l.b)("inlineCode",{parentName:"p"},'position: "relative"')," at a level you want to be covered by its backdrop. You can pass in a different position value via the ",Object(l.b)("inlineCode",{parentName:"p"},"position")," prop. "),Object(l.b)("p",null,"It also comes with two sizes, small and normal which are controlled via the ",Object(l.b)("inlineCode",{parentName:"p"},"size")," prop. "),Object(l.b)("p",null,"Finally, if you want to place the Drawer on the left side of the container, instead of the default right, pass in the ",Object(l.b)("inlineCode",{parentName:"p"},"side")," prop."),Object(l.b)("h2",null,"Position Static"),Object(l.b)("p",null,"It is also possible to make the Drawer behave like a static element on the page above a certain breakpoint. For that use case pass in the ",Object(l.b)("inlineCode",{parentName:"p"},"staticAbove")," prop with a responsive screen value (mobile, tablet, desktop, largeDesktop) and Drawer will behave as usual, a modal, below that breakpoint, and static element above it."),Object(l.b)("h2",null,"Examples"),Object(l.b)("p",null,'Copy these examples in to playroom to try them out. Make sure to remove the isOpen and onDismiss "variables" that are being passed in.'),Object(l.b)("h3",null,"Default"),Object(l.b)("p",null,"Drawer is a controllable component only, you must always pass in the ",Object(l.b)("inlineCode",{parentName:"p"},"isOpen")," prop."),Object(l.b)("pre",null,Object(l.b)("code",Object(s.a)({parentName:"pre"},{className:"language-jsx"}),"<Drawer isOpen={isOpen}>\n    Hello World, I am a Drawer!\n</Drawer>\n")),Object(l.b)("h3",null,"Default"),Object(l.b)("p",null,"To make the drawer dismissable on clicking the backdrop or the close button, pass in the ",Object(l.b)("inlineCode",{parentName:"p"},"onDismiss")," prop."),Object(l.b)("pre",null,Object(l.b)("code",Object(s.a)({parentName:"pre"},{className:"language-jsx"}),"<Drawer onDismiss={onDismiss} isOpen={isOpen}>\n    Hello World, I am a Drawer!\n</Drawer>\n")),Object(l.b)("h3",null,"Kitchen sink"),Object(l.b)("pre",null,Object(l.b)("code",Object(s.a)({parentName:"pre"},{className:"language-jsx"}),'<Drawer onDismiss={onDismiss} isOpen={isOpen} staticAbove="tablet" side="left" position="fixed" size={["small", "normal", "small", "normal"]}>\n    <DrawerScroll>...</DrawerScroll>\n</Drawer>\n')))}b.isMDXComponent=!0;i.a.createElement;var m={},f="wrapper";function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)(f,Object(r.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)(b,{mdxType:"Readme"}))}d.isMDXComponent=!0},cwdW:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,"a",(function(){return r}))},"dV/x":function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,"a",(function(){return r}))},x9yg:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},xbD2:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/overlays/drawer",function(){return n("buSY")}])}},[["xbD2",0,1]]]);