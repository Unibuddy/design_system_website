(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"8mBC":function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},DSo7:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},"I/kN":function(e,t,n){var r=n("w7mb");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},J9Yr:function(e,t,n){"use strict";var r=n("zQIG"),o=n("8mBC"),i=n("N7I1"),u=n("I/kN"),a=n("cMav"),c=n("pSQP"),l=n("iN+R");function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return a(this,n)}}Object.defineProperty(t,"__esModule",{value:!0});var s=n("ERkP"),p=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(l(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return function(a){u(l,a);var c=f(l);function l(e){var o;return r(this,l),o=c.call(this,e),p&&(t.add(i(o)),n(i(o))),o}return o(l,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}],[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),l}(s.Component)}},Km8e:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},N7I1:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},TZT2:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("ERkP"));t.AmpStateContext=o.createContext({})},Y3ZS:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},bOkD:function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},cMav:function(e,t,n){var r=n("i2RQ"),o=n("N7I1");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},dq4L:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("ERkP")),i=n("TZT2");function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,i=e.hasQuery;return n||o&&(void 0!==i&&i)}t.isInAmpMode=u,t.useAmp=function(){return u(o.default.useContext(i.AmpStateContext))}},gzpe:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_error",function(){return n("iQU9")}])},i2RQ:function(e,t){function n(e){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(t){return"function"===typeof Symbol&&"symbol"===n(Symbol.iterator)?e.exports=r=function(e){return n(e)}:e.exports=r=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)},r(t)}e.exports=r},"iN+R":function(e,t,n){var r=n("bOkD"),o=n("DSo7"),i=n("uYlf");e.exports=function(e){return r(e)||o(e)||i()}},iQU9:function(e,t,n){"use strict";var r=n("zQIG"),o=n("8mBC"),i=n("I/kN"),u=n("cMav"),a=n("pSQP");function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=a(e);if(t){var o=a(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}var l=n("Y3ZS");t.__esModule=!0,t.default=void 0;var f=l(n("ERkP")),s=l(n("ysqo")),p={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function d(e){var t=e.res,n=e.err;return{statusCode:t&&t.statusCode?t.statusCode:n?n.statusCode:404}}var y=function(e){i(n,e);var t=c(n);function n(){return r(this,n),t.apply(this,arguments)}return o(n,[{key:"render",value:function(){var e=this.props.statusCode,t=this.props.title||p[e]||"An unexpected error has occurred";return f.default.createElement("div",{style:h.error},f.default.createElement(s.default,null,f.default.createElement("title",null,e,": ",t)),f.default.createElement("div",null,f.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),e?f.default.createElement("h1",{style:h.h1},e):null,f.default.createElement("div",{style:h.desc},f.default.createElement("h2",{style:h.h2},t,"."))))}}]),n}(f.default.Component);t.default=y,y.displayName="ErrorPage",y.getInitialProps=d,y.origGetInitialProps=d;var h={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},"op+c":function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("ERkP"));t.HeadManagerContext=o.createContext(null)},pSQP:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},uYlf:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},w7mb:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},ysqo:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("ERkP")),i=r(n("J9Yr")),u=n("TZT2"),a=n("op+c"),c=n("dq4L");function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=l;var s=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var i=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var u=o.key.slice(o.key.indexOf("$")+1);e.has(u)?i=!1:e.add(u)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(var a=0,c=s.length;a<c;a++){var l=s[a];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?i=!1:n.add(l);else{var f=o.props[l],p=r[l]||new Set;p.has(f)?i=!1:(p.add(f),r[l]=p)}}}return i}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}var d=i.default();function y(e){var t=e.children;return o.default.createElement(u.AmpStateContext.Consumer,null,(function(e){return o.default.createElement(a.HeadManagerContext.Consumer,null,(function(n){return o.default.createElement(d,{reduceComponentsToState:p,handleStateChange:n,inAmpMode:c.isInAmpMode(e)},t)}))}))}y.rewind=d.rewind,t.default=y},zQIG:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}}},[["gzpe",0,1]]]);