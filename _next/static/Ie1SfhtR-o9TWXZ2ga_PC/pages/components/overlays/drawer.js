(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"+wNj":function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,"a",(function(){return r}))},HbGN:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("+wNj");function a(e,t){if(null==e)return{};var n,a,o=Object(r.a)(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}},Km8e:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},VObp:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/overlays/drawer",function(){return n("buSY")}])},ZVZ0:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n("ERkP"),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"===typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(n),u=r,O=b["".concat(i,".").concat(u)]||b[u]||m[u]||o;return n?a.a.createElement(O,l(l({ref:t},s),{},{components:n})):a.a.createElement(O,l({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var o=n.length,i=new Array(o);i[0]=O;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"===typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},buSY:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m}));var r=n("cxan"),a=n("HbGN"),o=n("ERkP"),i=n.n(o),l=n("ZVZ0"),c=(i.a.createElement,{}),s="wrapper";function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)(s,Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",null,"Drawer"),Object(l.b)("p",null,"A panel which slides in from the edge of the screen."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},'import Drawer from "@unibuddy/machop/Experimental/Overlays/components/Drawer/Drawer";\n')),Object(l.b)("h2",null,"How To Use"),Object(l.b)("p",null,"A Drawer is a panel that is typically overlaid on top of a page and slides in from the side. It contains a set of information or actions. Since the user can interact with the Drawer without leaving the current page, tasks can be achieved more efficiently within the same context."),Object(l.b)("p",null,"It uses ",Object(l.b)("inlineCode",{parentName:"p"},'position: "absolute"')," which means you need to wrap it with an element with a ",Object(l.b)("inlineCode",{parentName:"p"},'position: "relative"')," at a level you want to be covered by its backdrop. You can pass in a different position value via the ",Object(l.b)("inlineCode",{parentName:"p"},"position")," prop."),Object(l.b)("p",null,"It also comes with two sizes, small and normal which are controlled via the ",Object(l.b)("inlineCode",{parentName:"p"},"size")," prop."),Object(l.b)("p",null,"Finally, if you want to place the Drawer on the left side of the container, instead of the default right, pass in the ",Object(l.b)("inlineCode",{parentName:"p"},"side")," prop."),Object(l.b)("h2",null,"Position Static"),Object(l.b)("p",null,"It is also possible to make the Drawer behave like a static element on the page above a certain breakpoint. For that use case pass in the ",Object(l.b)("inlineCode",{parentName:"p"},"staticAbove")," prop with a responsive screen value (mobile, tablet, desktop, largeDesktop) and Drawer will behave as usual, a modal, below that breakpoint, and static element above it."),Object(l.b)("h2",null,"Examples"),Object(l.b)("p",null,'Copy these examples in to playroom to try them out. Make sure to remove the isOpen and onDismiss "variables" that are being passed in.'),Object(l.b)("h3",null,"Default"),Object(l.b)("p",null,"Drawer is a controllable component only, you must always pass in the ",Object(l.b)("inlineCode",{parentName:"p"},"isOpen")," prop."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"<Drawer isOpen={isOpen}>Hello World, I am a Drawer!</Drawer>\n")),Object(l.b)("h3",null,"Dismissible"),Object(l.b)("p",null,"To make the drawer dismissible on clicking the backdrop or the close button, pass in the ",Object(l.b)("inlineCode",{parentName:"p"},"onDismiss")," prop."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"<Drawer onDismiss={onDismiss} isOpen={isOpen}>\n    Hello World, I am a Drawer!\n</Drawer>\n")),Object(l.b)("h3",null,"Kitchen sink"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},'<Drawer\n    onDismiss={onDismiss}\n    isOpen={isOpen}\n    staticAbove="tablet"\n    side="left"\n    position="fixed"\n    size={["small", "normal", "small", "normal"]}\n>\n    <DrawerScroll>...</DrawerScroll>\n</Drawer>\n')))}p.isMDXComponent=!0;i.a.createElement;var b={},u="wrapper";function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)(u,Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)(p,{mdxType:"Readme"}))}m.isMDXComponent=!0},cxan:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))}},[["VObp",0,1]]]);