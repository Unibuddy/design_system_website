_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[34],{"7vSj":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return l}));var o=t("CH9N"),r=t("wHK/"),p=t("ERkP"),a=t.n(p),c=t("ZVZ0"),i=(a.a.createElement,{});function d(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(o.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h1",null,"Dropdown"),Object(c.b)("p",null,"Renders an accessible dropdown element that reveals couple items, use dropdown. To register a click on an DropdownItem add the ",Object(c.b)("inlineCode",{parentName:"p"},"onSelect")," prop."),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),'import {Dropdown, DropdownButton, DropdownIcon, DropdownItem, DropdownList} from "@unibuddy/patron";\n')),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx",metastring:"render expanded",render:!0,expanded:!0}),'<Dropdown>\n    <DropdownButton>Dropdown</DropdownButton>\n    <DropdownList>\n        <DropdownItem onSelect={() => alert("Option 1")}>Option 1</DropdownItem>\n        <DropdownItem onSelect={() => alert("Option 2")}>Option 2</DropdownItem>\n        <DropdownItem onSelect={() => alert("Option 3")}>Option 3</DropdownItem>\n    </DropdownList>\n</Dropdown>\n')),Object(c.b)("h2",null,"DropdownButton"),Object(c.b)("p",null,"DropdownButton composes over our regular Button, and can therefore be used with most of the same props. Here is an example of an ",Object(c.b)("inlineCode",{parentName:"p"},'iconOnly round color="light"')," DropdownButton."),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx",metastring:"render=true",render:"true"}),'<Dropdown>\n    <DropdownButton iconOnly round color="light">\n        <Play.Icon name="MoreIcon" />\n    </DropdownButton>\n    <DropdownList>\n        <DropdownItem>Option 1</DropdownItem>\n        <DropdownItem>Option 2</DropdownItem>\n        <DropdownItem>Option 3</DropdownItem>\n    </DropdownList>\n</Dropdown>\n')),Object(c.b)("h2",null,"DropdownIcon"),Object(c.b)("p",null,"To render a chevron that indicates that this is an dropdown button, and that rotates on opening and closing of the dropdown, use the DropdownIcon. This component is magically connected to the internal state of the dropdown, you don't have to do anything else."),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx",metastring:"render=true",render:"true"}),"<Dropdown>\n    <DropdownButton rightIcon={<DropdownIcon />}>Dropdown</DropdownButton>\n    <DropdownList>\n        <DropdownItem>Option 1</DropdownItem>\n        <DropdownItem>Option 2</DropdownItem>\n        <DropdownItem>Option 3</DropdownItem>\n    </DropdownList>\n</Dropdown>\n")))}d.isMDXComponent=!0;a.a.createElement;var u={};function l(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(o.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)(d,{mdxType:"Readme"}))}l.isMDXComponent=!0},CH9N:function(e,n,t){"use strict";function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}t.d(n,"a",(function(){return o}))},Km8e:function(e,n,t){"use strict";var o=Object.assign.bind(Object);e.exports=o,e.exports.default=e.exports},ZVZ0:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return m}));var o=t("ERkP"),r=t.n(o);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},p=Object.keys(e);for(o=0;o<p.length;o++)t=p[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(o=0;o<p.length;o++)t=p[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=r.a.createContext({}),u=function(e){var n=r.a.useContext(d),t=n;return e&&(t="function"===typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=u(e.components);return r.a.createElement(d.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,p=e.originalType,a=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),l=u(t),b=o,m=l["".concat(a,".").concat(b)]||l[b]||s[b]||p;return t?r.a.createElement(m,c(c({ref:n},d),{},{components:t})):r.a.createElement(m,c({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"===typeof e||o){var p=t.length,a=new Array(p);a[0]=b;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"===typeof e?e:o,a[1]=c;for(var d=2;d<p;d++)a[d]=t[d];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},"qV/l":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/general/dropdown",function(){return t("7vSj")}])},"wHK/":function(e,n,t){"use strict";function o(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},p=Object.keys(e);for(o=0;o<p.length;o++)t=p[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(o=0;o<p.length;o++)t=p[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}t.d(n,"a",(function(){return o}))}},[["qV/l",0,1]]]);