(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{"+wNj":function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}t.d(n,"a",(function(){return r}))},"0wxG":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return p}));var r=t("cxan"),o=t("HbGN"),a=t("ERkP"),c=t.n(a),i=t("ZVZ0"),u=(c.a.createElement,{}),s="wrapper";function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)(s,Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",null,"useClipboard"),Object(i.b)("p",null,"If you need an easy way to copy some text in to the clipboard, use the ",Object(i.b)("inlineCode",{parentName:"p"},"useClipboard")," hook. It exposes two variables ",Object(i.b)("inlineCode",{parentName:"p"},"canUse")," and ",Object(i.b)("inlineCode",{parentName:"p"},"copyToClipboard"),". This functionality is not available on legacy platforms so make sure it is available before allowing the user to take action."),Object(i.b)("p",null,"Beware, ",Object(i.b)("inlineCode",{parentName:"p"},"copyToClipboard")," is an async function and can fail for some arbitrary reason. It is a good practice to always wrap your async calls in to an awaitable try/catch block."),Object(i.b)("p",null,"Be nice to your users and show a little Toast as a sign of success."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'import React from "react";\nimport useClipboard from "@unibuddy/ds/src/hooks/useClipboard";\nimport {useToast} from "@unibuddy/ds/src/Overlays/ToastProvider/ToastProvider";\nimport useErrorReporting from "@unibuddy/ds/General/ErrorReporting/useErrorReporting";\n\nfunction MyComponent() {\n    const {reportError} = useErrorReporting();\n    const {copyToClipboard} = useClipboard();\n    const {addToast} = useToast();\n    const onClick = async () => {\n        try {\n            await copyToClipboard("Some text");\n            addToast({\n                text: "Text copied to clipboard",\n            });\n        } catch (error) {\n            addToast({\n                text: "Something went wrong",\n                tone: "danger",\n            });\n            reportError(error);\n        }\n    };\n\n    return canUse ? <Button onClick={onClick}>Welcome!</Button> : null;\n}\n')))}p.isMDXComponent=!0},HbGN:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t("+wNj");function o(e,n){if(null==e)return{};var t,o,a=Object(r.a)(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}},Km8e:function(e,n,t){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},MBgU:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-clipboard",function(){return t("0wxG")}])},ZVZ0:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return y}));var r=t("ERkP"),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),p=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"===typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=p(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},b="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=p(t),b=r,d=l["".concat(c,".").concat(b)]||l[b]||f[b]||a;return t?o.a.createElement(d,i(i({ref:n},s),{},{components:t})):o.a.createElement(d,i({ref:n},s))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"===typeof e||r){var a=t.length,c=new Array(a);c[0]=d;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i[b]="string"===typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=t[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},cxan:function(e,n,t){"use strict";function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}t.d(n,"a",(function(){return r}))}},[["MBgU",0,1]]]);