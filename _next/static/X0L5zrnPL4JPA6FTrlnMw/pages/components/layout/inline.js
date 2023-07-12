(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{"+wNj":function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}t.d(n,"a",(function(){return r}))},"+zB8":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return g}));var r=t("cxan"),a=t("HbGN"),i=t("ERkP"),o=t.n(i),l=t("ZVZ0"),s=["components"],u=(o.a.createElement,{}),c="wrapper";function p(e){var n=e.components,t=Object(a.a)(e,s);return Object(l.b)(c,Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h1",null,"Inline"),Object(l.b)("p",null,"If you\u2019d like to render a set of components in a row with equal spacing around them, wrapping onto multiple lines when necessary, Patron provides an \u2018Inline\u2019 component:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},'import {Inline} from "@unibuddy/patron";\n')),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"render=true",render:"true"},'<Box>\n    <Inline space="small">\n        <Badge>Lorem ipsum</Badge>\n        <Badge>Dolor</Badge>\n        <Badge>Sit amet</Badge>\n        <Badge>Consectetur</Badge>\n        <Badge>Adipiscing elit</Badge>\n        <Badge>Suspendisse dignissim</Badge>\n        <Badge>Dapibus elit</Badge>\n        <Badge>Vel egestas felis</Badge>\n        <Badge>Pharetra non</Badge>\n    </Inline>\n</Box>\n')),Object(l.b)("h2",null,"Space"),Object(l.b)("p",null,"Space prop is the prop you will be using the most often, and it utilises the ",Object(l.b)("a",{parentName:"p",href:"/how-to/layout#responsive-prop"},"responsive prop")," concept."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"render=true",render:"true"},'<Box>\n    <Inline space={["small", "medium", "large"]}>\n        <Badge>Lorem ipsum</Badge>\n        <Badge>Dolor</Badge>\n        <Badge>Sit amet</Badge>\n        <Badge>Consectetur</Badge>\n    </Inline>\n</Box>\n')),Object(l.b)("h2",null,"Composition"),Object(l.b)("p",null,"Inline groups can be composed together to achieve different spacing between different groups of elements. In the following example we have a large space between the first Button and the next two Buttons, and a xsmall space between the two Buttons. Layout components can generally be nested infinitely."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"render=true",render:"true"},'<Inline space="large">\n    <Button color="primary">Hello World</Button>\n    <Inline space="xsmall">\n        <Button>Lorem ipsum</Button>\n        <Button>Dolorem sit</Button>\n    </Inline>\n</Inline>\n')),Object(l.b)("h2",null,"Align"),Object(l.b)("p",null,"Inline children can be aligned horizontally left, right, and center with the ",Object(l.b)("inlineCode",{parentName:"p"},"align")," prop."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"render=true",render:"true"},'<Inline space="medium" align="left">\n    <Button>Lorem ipsum</Button>\n    <Button>Dolorem sit</Button>\n</Inline>\n')),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"render=true",render:"true"},'<Inline space="medium" align="right">\n    <Button>Lorem ipsum</Button>\n    <Button>Dolorem sit</Button>\n</Inline>\n')),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"render=true",render:"true"},'<Inline space="medium" align="center">\n    <Button>Lorem ipsum</Button>\n    <Button>Dolorem sit</Button>\n</Inline>\n')),Object(l.b)("h2",null,"Vertical Align"),Object(l.b)("p",null,"Inline children can be of variable height so it can be useful to align them vertically. We can do that with the ",Object(l.b)("inlineCode",{parentName:"p"},"verticalAlign")," prop. In the next two examples we use the ",Object(l.b)("inlineCode",{parentName:"p"},'wrap="nowrap"')," prop so we can force the TextBlock to stay on one line for demostration purposes, and InlineItem to prevent the Button from shrinking below its content width. We will learn more about that next."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"render=true",render:"true"},'<Inline space="medium" verticalAlign="top" wrap="nowrap">\n    <InlineItem flexShrink={0}>\n        <Button>Lorem ipsum</Button>\n    </InlineItem>\n    <TextBlock>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dignissim dapibus elit,\n        vel egestas felis pharetra non. Phasellus ipsum tortor, aliquet dapibus fermentum in, mollis\n        vel metus. Vestibulum malesuada ante eu velit malesuada, nec ultricies sapien finibus.\n    </TextBlock>\n</Inline>\n')),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"render=true",render:"true"},'<Inline space="medium" verticalAlign="center" wrap="nowrap">\n    <InlineItem flexShrink={0}>\n        <Button>Lorem ipsum</Button>\n    </InlineItem>\n    <TextBlock>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dignissim dapibus elit,\n        vel egestas felis pharetra non. Phasellus ipsum tortor, aliquet dapibus fermentum in, mollis\n        vel metus. Vestibulum malesuada ante eu velit malesuada, nec ultricies sapien finibus.\n    </TextBlock>\n</Inline>\n')),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"render=true",render:"true"},'<Inline space="medium" verticalAlign="bottom" wrap="nowrap">\n    <InlineItem flexShrink={0}>\n        <Button>Lorem ipsum</Button>\n    </InlineItem>\n    <TextBlock>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dignissim dapibus elit,\n        vel egestas felis pharetra non. Phasellus ipsum tortor, aliquet dapibus fermentum in, mollis\n        vel metus. Vestibulum malesuada ante eu velit malesuada, nec ultricies sapien finibus.\n    </TextBlock>\n</Inline>\n')),Object(l.b)("h2",null,"Wrap"),Object(l.b)("p",null,"Sometimes we don't want the default behaviour of Inline which is to wrap the children on to the next line. When we want to force the children on to a single line we can use the ",Object(l.b)("inlineCode",{parentName:"p"},'wrap="nowrap"')," prop. In the following example we use this behavior in combination with TextBlock ",Object(l.b)("inlineCode",{parentName:"p"},"truncate")," prop to force a long sentence and Button on the same line."),Object(l.b)("p",null,"The Button needs to be wrapped in a InlineItem so we can pass in ",Object(l.b)("inlineCode",{parentName:"p"},"flexShrink={0}")," to prevent Button from shrinking beyond its content width. Layout components wrap each child in its internal child wrapper component. Inline exposes the ",Object(l.b)("inlineCode",{parentName:"p"},"InlineItem")," child wrapper so we can take control of the layout more tightly on per item basis when we need to."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"render=true",render:"true"},'<Inline space="medium" verticalAlign="center" wrap="nowrap">\n    <TextBlock truncate>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dignissim dapibus elit,\n        vel egestas felis pharetra non. Phasellus ipsum tortor, aliquet dapibus fermentum in, mollis\n        vel metus. Vestibulum malesuada ante eu velit malesuada, nec ultricies sapien finibus.\n    </TextBlock>\n    <InlineItem flexShrink={0}>\n        <Button>Lorem ipsum</Button>\n    </InlineItem>\n</Inline>\n')),Object(l.b)("p",null,"Beware, single line Inline can be quirky! There are a lot of implicit factors in how the browser decides how inidividual items should automatically shrink or grow. Text rendering is the weirdest one \ud83d\ude30. Make sure to manually test your UI in a variety of scenarios and resolutions."))}p.isMDXComponent=!0;var m=["components"],d=(o.a.createElement,{}),b="wrapper";function g(e){var n=e.components,t=Object(a.a)(e,m);return Object(l.b)(b,Object(r.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)(p,{mdxType:"Readme"}))}g.isMDXComponent=!0},"2bqS":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/layout/inline",function(){return t("+zB8")}])},HbGN:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var r=t("+wNj");function a(e,n){if(null==e)return{};var t,a,i=Object(r.a)(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}},Km8e:function(e,n,t){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},ZVZ0:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return g}));var r=t("ERkP"),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),c=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"===typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=r,b=p["".concat(o,".").concat(m)]||p[m]||d[m]||i;return t?a.a.createElement(b,l(l({ref:n},u),{},{components:t})):a.a.createElement(b,l({ref:n},u))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"===typeof e||r){var i=t.length,o=new Array(i);o[0]=b;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[m]="string"===typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},cxan:function(e,n,t){"use strict";function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}t.d(n,"a",(function(){return r}))}},[["2bqS",0,1]]]);