(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"0EY2":function(e,t,n){"use strict";var r=n("PL1w"),a=r(n("OAWj")),u=function(e){return e&&e.__esModule?e:{default:e}};(0,r(n("hHgk")).default)(t,"__esModule",{value:!0});var o=u(n("mXGw")),i=u(n("uYFp")),l=n("YZaM"),d=n("KBoY"),s=n("qQSc");function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"next-head",t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=[o.default.createElement("meta",{key:"charSet",charSet:"utf-8",className:e})];return t||n.push(o.default.createElement("meta",{key:"viewport",name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1",className:e})),n}function c(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce(function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)},[])):e.concat(t)}t.defaultHead=f;var p=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce(function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)},[]).reduce(c,[]).reverse().concat(f("",t.inAmpMode)).filter(function(){var e=new a.default,t=new a.default,n=new a.default,r={};return function(u){if(u.key&&"number"!==typeof u.key&&0===u.key.indexOf(".$"))return!e.has(u.key)&&(e.add(u.key),!0);switch(u.type){case"title":case"base":if(t.has(u.type))return!1;t.add(u.type);break;case"meta":for(var o=0,i=p.length;o<i;o++){var l=p[o];if(u.props.hasOwnProperty(l))if("charSet"===l){if(n.has(l))return!1;n.add(l)}else{var d=u.props[l],s=r[l]||new a.default;if(s.has(d))return!1;s.add(d),r[l]=s}}}return!0}}()).reverse().map(function(e,t){var n=(e.props&&e.props.className?e.props.className+" ":"")+"next-head";"title"!==e.type||e.props.className||(n=void 0);var r=e.key||t;return o.default.cloneElement(e,{key:r,className:n})})}var v=i.default();function m(e){var t=e.children;return o.default.createElement(l.AmpStateContext.Consumer,null,function(e){return o.default.createElement(d.HeadManagerContext.Consumer,null,function(n){return o.default.createElement(v,{reduceComponentsToState:h,handleStateChange:n,inAmpMode:s.isInAmpMode(e)},t)})})}m.rewind=v.rewind,t.default=m},"0tNF":function(e,t,n){"use strict";n.r(t);var r=n("s20r"),a=n.n(r);var u=n("8ET1"),o=n.n(u),i=n("7X5e"),l=n.n(i);function d(e){return function(e){if(a()(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(l()(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return o()(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(t,"default",function(){return d})},"7X5e":function(e,t,n){e.exports=n("LMqf")},"8ET1":function(e,t,n){e.exports=n("t+DO")},EsAr:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_error",function(){var e=n("lx8+");return{page:e.default||e}}])},L9SA:function(e,t,n){"use strict";var r=n("6s2L"),a=n("2VK+");e.exports=function(e,t,n){t in e?r.f(e,t,a(0,n)):e[t]=n}},LMqf:function(e,t,n){n("TULy"),n("/KQz"),e.exports=n("t33V")},YZaM:function(e,t,n){"use strict";var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};(0,n("PL1w")(n("hHgk")).default)(t,"__esModule",{value:!0});var a=r(n("mXGw"));t.AmpStateContext=a.createContext({})},"Z/MN":function(e,t,n){"use strict";var r=n("BQcv"),a=n("26mQ"),u=n("HJ5g"),o=n("reWI"),i=n("+1xB"),l=n("3wQn"),d=n("L9SA"),s=n("0MyW");a(a.S+a.F*!n("UM4U")(function(e){Array.from(e)}),"Array",{from:function(e){var t,n,a,f,c=u(e),p="function"==typeof this?this:Array,h=arguments.length,v=h>1?arguments[1]:void 0,m=void 0!==v,y=0,g=s(c);if(m&&(v=r(v,h>2?arguments[2]:void 0,2)),void 0==g||p==Array&&i(g))for(n=new p(t=l(c.length));t>y;y++)d(n,y,m?v(c[y],y):c[y]);else for(f=g.call(c),n=new p;!(a=f.next()).done;y++)d(n,y,m?o(f,v,[a.value,y],!0):a.value);return n.length=y,n}})},"lx8+":function(e,t,n){"use strict";var r=n("PL1w"),a=r(n("LkAs")),u=r(n("Moms")),o=r(n("bMj6")),i=r(n("hZod")),l=r(n("tEuJ")),d=n("PL1w");t.__esModule=!0,t.default=void 0;var s=d(n("mXGw")),f=d(n("t4GJ")),c={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"},p=function(e){function t(){return(0,a.default)(this,t),(0,o.default)(this,(0,i.default)(t).apply(this,arguments))}return(0,l.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props.statusCode,t=this.props.title||c[e]||"An unexpected error has occurred";return s.default.createElement("div",{style:h.error},s.default.createElement(f.default,null,s.default.createElement("title",null,e,": ",t)),s.default.createElement("div",null,s.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),e?s.default.createElement("h1",{style:h.h1},e):null,s.default.createElement("div",{style:h.desc},s.default.createElement("h2",{style:h.h2},t,"."))))}}],[{key:"getInitialProps",value:function(e){var t=e.res,n=e.err;return{statusCode:t&&t.statusCode?t.statusCode:n?n.statusCode:404}}}]),t}(s.default.Component);t.default=p,p.displayName="ErrorPage";var h={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},qQSc:function(e,t,n){"use strict";var r=function(e){return e&&e.__esModule?e:{default:e}};(0,n("PL1w")(n("hHgk")).default)(t,"__esModule",{value:!0});var a=r(n("mXGw")),u=n("YZaM");function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,u=e.hasQuery;return n||a&&(void 0!==u&&u)}t.isInAmpMode=o,t.useAmp=function(){return o(a.default.useContext(u.AmpStateContext))}},"t+DO":function(e,t,n){n("/KQz"),n("Z/MN"),e.exports=n("5e9t").Array.from},t33V:function(e,t,n){var r=n("9wrK"),a=n("hl9K")("iterator"),u=n("VmbT");e.exports=n("5e9t").isIterable=function(e){var t=Object(e);return void 0!==t[a]||"@@iterator"in t||u.hasOwnProperty(r(t))}},t4GJ:function(e,t,n){e.exports=n("0EY2")},uYFp:function(e,t,n){"use strict";var r=n("PL1w"),a=r(n("LkAs")),u=r(n("bMj6")),o=r(n("hZod")),i=r(n("YKN3")),l=r(n("Moms")),d=r(n("tEuJ")),s=r(n("0tNF")),f=r(n("OAWj"));(0,r(n("hHgk")).default)(t,"__esModule",{value:!0});var c=n("mXGw"),p=!1;t.default=function(){var e,t=new f.default;function n(n){e=n.props.reduceComponentsToState((0,s.default)(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return function(r){function s(e){var r;return(0,a.default)(this,s),r=(0,u.default)(this,(0,o.default)(s).call(this,e)),p&&(t.add((0,i.default)(r)),n((0,i.default)(r))),r}return(0,d.default)(s,r),(0,l.default)(s,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),(0,l.default)(s,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),s}(c.Component)}}},[["EsAr",1,0]]]);