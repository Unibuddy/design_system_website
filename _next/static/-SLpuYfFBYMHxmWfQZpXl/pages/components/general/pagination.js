(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{"3X7U":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/general/pagination",function(){return n("ohgJ")}])},HbGN:function(e,t,n){"use strict";function o(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n={};for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){if(t.indexOf(o)>=0)continue;n[o]=e[o]}return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,"a",(function(){return o}))},Km8e:function(e,t,n){"use strict";var o=Object.assign.bind(Object);e.exports=o,e.exports.default=e.exports},ZVZ0:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var o=n("ERkP"),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"===typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),b=o,m=u["".concat(i,".").concat(b)]||u[b]||f[b]||a;return n?r.a.createElement(m,c(c({ref:t},s),{},{components:n})):r.a.createElement(m,c({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"===typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[b]="string"===typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},cxan:function(e,t,n){"use strict";function o(){return(o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return o}))},ohgJ:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var o=n("cxan"),r=n("HbGN"),a=n("ERkP"),i=n.n(a),c=n("ZVZ0"),l=["components"],s=(i.a.createElement,{}),p="wrapper";function u(e){var t=e.components,n=Object(r.a)(e,l);return Object(c.b)(p,Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",null,"Pagination"),Object(c.b)("p",null,"The purpose of this component is to provide an accessible interface for pagination controls.\nIt provides an additional helper hook if you wish for it to control your data for you internally."),Object(c.b)("h2",null,"Props"),Object(c.b)("h5",null,Object(c.b)("inlineCode",{parentName:"h5"},"limit")," (required)"),Object(c.b)("p",null,"The number of data items you want to show in one section."),Object(c.b)("h5",null,Object(c.b)("inlineCode",{parentName:"h5"},"offset")," (required)"),Object(c.b)("p",null,"The index offset. You can pass your own value here or one from the helper hook. The controls from the component will change the ",Object(c.b)("inlineCode",{parentName:"p"},"offset")," based on the ",Object(c.b)("inlineCode",{parentName:"p"},"limit")," provided."),Object(c.b)("h5",null,Object(c.b)("inlineCode",{parentName:"h5"},"itemCount")," (required)"),Object(c.b)("p",null,"The total number of data items."),Object(c.b)("h5",null,Object(c.b)("inlineCode",{parentName:"h5"},"renderButton")," (required)"),Object(c.b)("p",null,"This returns a callback that you may use to access some of the props ",Object(c.b)("inlineCode",{parentName:"p"},"Pagination")," returns. The props returned are:"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("inlineCode",{parentName:"li"},"offset")," - you may use this to control the data based on the offset"),Object(c.b)("li",{parentName:"ol"},Object(c.b)("inlineCode",{parentName:"li"},"isActive")," - you may use this to control the color based on active states"),Object(c.b)("li",{parentName:"ol"},Object(c.b)("inlineCode",{parentName:"li"},"disabled"),' - if the button is disabled or not (applies to the "Previous" and "Next" buttons)')),Object(c.b)("p",null,"You can pass a component that you want rendered as controls. Usually ",Object(c.b)("inlineCode",{parentName:"p"},"Button")," or ",Object(c.b)("inlineCode",{parentName:"p"},"ButtonLink")),Object(c.b)("h2",null,"Example"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx",metastring:"expanded",expanded:!0},'const [offset, setOffset] = useState(0));\nconst limit = 10;\nconst itemCount = 100;\n\n<Pagination\n    offset={offset}\n    limit={limit}\n    itemCount={itemCount}\n    renderButton={({offset, isActive, ...props}) => (\n        <Button\n            onClick={() => setOffset(offset)}\n            color={isActive ? "primary" : "light"}\n            {...props}\n        />\n    )}\n/>\n')),Object(c.b)("h2",null,Object(c.b)("inlineCode",{parentName:"h2"},"usePagination")," hook"),Object(c.b)("p",null,"Patron also provides a helper hook if you don't want to worry about managing data yourselves. It takes the list you want pagination and the limit as params and returns ",Object(c.b)("inlineCode",{parentName:"p"},"paginatedData")," , ",Object(c.b)("inlineCode",{parentName:"p"},"offset")," and ",Object(c.b)("inlineCode",{parentName:"p"},"setOffset")," which you can simply pass to the component."),Object(c.b)("h2",null,"Example with ",Object(c.b)("inlineCode",{parentName:"h2"},"usePagination")," hook"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx",metastring:"expanded",expanded:!0},'const users = ["user1", "user2"];\nconst limit = 10;\nconst {paginatedData, offset, setOffset} = usePagination(users, limit);\n\n<Pagination\n    offset={offset}\n    limit={limit}\n    itemCount={users.length}\n    renderButton={({offset, isActive, ...props}) => (\n        <Button\n            onClick={() => setOffset(offset)}\n            color={isActive ? "primary" : "light"}\n            {...props}\n        />\n    )}\n/>;\n')))}u.isMDXComponent=!0;var b=["components"],f=(i.a.createElement,{}),m="wrapper";function d(e){var t=e.components,n=Object(r.a)(e,b);return Object(c.b)(m,Object(o.a)({},f,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)(u,{mdxType:"Readme"}))}d.isMDXComponent=!0}},[["3X7U",0,1]]]);