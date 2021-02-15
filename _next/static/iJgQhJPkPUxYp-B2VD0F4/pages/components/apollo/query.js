(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"+I7r":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var r=n("cxan"),o=n("HbGN"),a=n("ERkP"),c=n.n(a),u=n("ZVZ0"),i=(c.a.createElement,{}),l="wrapper";function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(u.b)(l,Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(u.b)("h1",null,"Query"),Object(u.b)("p",null,"Composes over the apollo/Query component with built in loading and error handling by default."),Object(u.b)("h2",null,"Example usage"),Object(u.b)("p",null,"Pass in the query and variables, and any other props, juts as you usually would to the built in apollo Query component, but with here you don't have to handle the loading and error state manually every time, those are automatically handled by this component."),Object(u.b)("pre",null,Object(u.b)("code",{parentName:"pre",className:"language-jsx"},"<Query\n    query={myQuery}\n    variables={{\n        myVariable: 1,\n    }}\n>\n    {({data}) => <div>{data.myData}</div>}\n</Query>\n")))}p.isMDXComponent=!0;c.a.createElement;var s={},b="wrapper";function f(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(u.b)(b,Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(u.b)(p,{mdxType:"Readme"}))}f.isMDXComponent=!0},"+wNj":function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,"a",(function(){return r}))},"7bTQ":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/apollo/query",function(){return n("+I7r")}])},HbGN:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("+wNj");function o(e,t){if(null==e)return{};var n,o,a=Object(r.a)(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}},Km8e:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},ZVZ0:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n("ERkP"),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"===typeof e?e(t):u(u({},t),e)),n},s=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},y=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),s=p(n),b=r,y=s["".concat(c,".").concat(b)]||s[b]||f[b]||a;return n?o.a.createElement(y,u(u({ref:t},l),{},{components:n})):o.a.createElement(y,u({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var a=n.length,c=new Array(a);c[0]=y;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[b]="string"===typeof e?e:r,c[1]=u;for(var l=2;l<a;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},cxan:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))}},[["7bTQ",0,1]]]);