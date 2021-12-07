(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"+wNj":function(e,n,r){"use strict";function t(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}r.d(n,"a",(function(){return t}))},EU84:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/general/table",function(){return r("WmwP")}])},HbGN:function(e,n,r){"use strict";r.d(n,"a",(function(){return a}));var t=r("+wNj");function a(e,n){if(null==e)return{};var r,a,l=Object(t.a)(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}},Km8e:function(e,n,r){"use strict";var t=Object.assign.bind(Object);e.exports=t,e.exports.default=e.exports},WmwP:function(e,n,r){"use strict";r.r(n),r.d(n,"default",(function(){return d}));var t=r("cxan"),a=r("HbGN"),l=r("ERkP"),o=r.n(l),b=r("ZVZ0"),c=(o.a.createElement,{}),u="wrapper";function i(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(b.b)(u,Object(t.a)({},c,r,{components:n,mdxType:"MDXLayout"}),Object(b.b)("h1",null,"Table"),Object(b.b)("p",null,"This is a basic table with minimal styling. Contains composable components (Replacing table, tr, th, td)"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-js"},'import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@unibuddy/patron";\n')),Object(b.b)("h2",null,"Example usage"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-jsx",metastring:"render expanded",render:!0,expanded:!0},"<Table>\n    <TableHead>\n        <TableRow>\n            <TableHeader>Foo</TableHeader>\n            <TableHeader>Bar</TableHeader>\n        </TableRow>\n    </TableHead>\n    <TableBody>\n        <TableRow>\n            <TableCell>Lorem ipsum</TableCell>\n            <TableCell>Dolorem sit amet</TableCell>\n        </TableRow>\n    </TableBody>\n</Table>\n")),Object(b.b)("h2",null,"Props"),Object(b.b)("h3",null,"Bordered"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-jsx",metastring:"render expanded",render:!0,expanded:!0},"<Table bordered>\n    <TableHead>\n        <TableRow>\n            <TableHeader>Foo</TableHeader>\n            <TableHeader>Bar</TableHeader>\n        </TableRow>\n    </TableHead>\n    <TableBody>\n        <TableRow>\n            <TableCell>Lorem ipsum</TableCell>\n            <TableCell>Dolorem sit amet</TableCell>\n        </TableRow>\n    </TableBody>\n</Table>\n")),Object(b.b)("h3",null,"Size"),Object(b.b)("p",null,"Currently we only support the default size (medium) and small."),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-jsx",metastring:"render expanded",render:!0,expanded:!0},'<Table size="small">\n    <TableHead>\n        <TableRow>\n            <TableHeader>Foo</TableHeader>\n            <TableHeader>Bar</TableHeader>\n        </TableRow>\n    </TableHead>\n    <TableBody>\n        <TableRow>\n            <TableCell>Lorem ipsum</TableCell>\n            <TableCell>Dolorem sit amet</TableCell>\n        </TableRow>\n    </TableBody>\n</Table>\n')))}i.isMDXComponent=!0;o.a.createElement;var p={},s="wrapper";function d(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(b.b)(s,Object(t.a)({},p,r,{components:n,mdxType:"MDXLayout"}),Object(b.b)(i,{mdxType:"Readme"}))}d.isMDXComponent=!0},ZVZ0:function(e,n,r){"use strict";r.d(n,"a",(function(){return p})),r.d(n,"b",(function(){return T}));var t=r("ERkP"),a=r.n(t);function l(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function b(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){l(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),i=function(e){var n=a.a.useContext(u),r=n;return e&&(r="function"===typeof e?e(n):b(b({},n),e)),r},p=function(e){var n=i(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,l=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=i(r),s=t,m=p["".concat(o,".").concat(s)]||p[s]||d[s]||l;return r?a.a.createElement(m,b(b({ref:n},u),{},{components:r})):a.a.createElement(m,b({ref:n},u))}));function T(e,n){var r=arguments,t=n&&n.mdxType;if("string"===typeof e||t){var l=r.length,o=new Array(l);o[0]=m;var b={};for(var c in n)hasOwnProperty.call(n,c)&&(b[c]=n[c]);b.originalType=e,b[s]="string"===typeof e?e:t,o[1]=b;for(var u=2;u<l;u++)o[u]=r[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},cxan:function(e,n,r){"use strict";function t(){return(t=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}r.d(n,"a",(function(){return t}))}},[["EU84",0,1]]]);