(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"3ouP":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var o=n("Fcif"),a=n("dV/x"),i=n("mXGw"),r=n.n(i),s=n("SAVP"),l=(r.a.createElement,{}),c="wrapper";function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)(c,Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h1",null,"FAQ"),Object(s.b)("p",null,"Here we can collect the common questions and answers developers have about the design system, its components, hooks, tools, and best practices."),Object(s.b)("h2",null,"What if my designs look different than the Design System components?"),Object(s.b)("p",null,"A design system\u2019s job is to help standardize the look and feel of an entire product suite, not to match individual concept designs pixel-for-pixel. It\u2019s a good idea to start by iterating on your design in Playroom to try alternative approaches."),Object(s.b)("p",null,"You should be open to changing minor details that aren\u2019t critical to the success of the product. The goal is to solve the end user\u2019s problem, not to perfectly match an existing concept design."),Object(s.b)("p",null,"However, it\u2019s natural that most designs will feature some degree of customization that isn\u2019t officially supported within the existing system. You may even be using a pattern that is unique to your product. Don\u2019t feel like every single component needs to exist in our design system."),Object(s.b)("p",null,"It\u2019s also possible that you\u2019re using a pattern that should ideally be in our DS but hasn\u2019t been built yet. In this case, it\u2019s best to have a quick chat in #frontend-chapter channel."),Object(s.b)("p",null,"If you have received a design for a feature you are working on and it features many complex layouts that you think are impossible to implement with our current set of Layout components, or there are specific UI elements like buttons or dropdowns that look entirely different to our components please let us know in the #frontend-chapter. You should also talk to the designer that is owning the design of that particular feature about our current limitations and how the design could be altered or simplified in order to be more in line with our components."),Object(s.b)("p",null,"Maintaining a constant feedback loop between designers, developers, and design system maintainers is essential in improving our tools, designs, UX and DX."),Object(s.b)("h2",null,"I need an X component but it doesn\u2019t exist"),Object(s.b)("p",null,"If you are encountering a pattern you are finding yourself repeating consistently, or have seen something similar in a another library or design system that you find useful please feel free to request in the front end chapter."),Object(s.b)("p",null,"If you believe you have developed a solution yourself that is general purpose enough that could be utilized across various products, and you think it belongs in our design system, check out the ",Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"/how-to/contribute"}),"Contribution guide")," on how to get that component in to our Design System."),Object(s.b)("p",null,"Finally, there is the ",Object(s.b)("inlineCode",{parentName:"p"},"Request DS changes")," workflow in the front end chapter for making requests to the DS."),Object(s.b)("h2",null,"Can I extend an X component with styled-components?"),Object(s.b)("p",null,"Layout components do not accept className, style, or any other custom prop. The reason for this is that they fullfil a single purpose, controlling space between a set of elements. When you need a custom solution with a Layout component you should utilize composition and build your custom component such that it wraps the Layout component."),Object(s.b)("p",null,"For other components that accept style and className for legacy support reasons, you should avoid passing custom CSS to these components unless it is absolutely necessary. Again, instead try and utilise composition and wrap the DS component with your component with custom CSS."),Object(s.b)("p",null,"Finally, feel free to make requests in the front end chapter for us to change and augment existing components with new features. You can even use the ",Object(s.b)("inlineCode",{parentName:"p"},"Request DS changes")," workflow in the front end chapter."),Object(s.b)("h2",null,"Accordion, Collapsible, and ToggleSection"),Object(s.b)("p",null,"What is the difference between Accordion, Collapsible, and ToggleSection?"),Object(s.b)("p",null,"Collapsible and Accordion were made roughly at the same time and the idea was that Accordion will be composed of Collapsible, with some opinionated styling on top. Unfortunately, some of the api design decisions made early on made Accordion and Collapsible less reusable than a DS component ideally should be. We needed a similar component with slightly different styling, hence ToggleSection. It has less inherent styling so it is better suited for custom solutions for different product needs. The important part is the inherent accessibility baked in to these components. We will continue to maintain all three components for the time being so feel free to use whichever suits your need best."),Object(s.b)("h2",null,"All the different types of Overlays"),Object(s.b)("p",null,"We currently have a lot of very similar components in the Overlays folder that fulfill slightly different use-cases."),Object(s.b)("p",null,"General rule of thumb is, if you need to alert the user of something use the Alert component, otherwise if you need to ask the user for confirmation use the components with the Prompt in the title. For all other use-cases, use the general purpose Dialog component."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"use ",Object(s.b)("inlineCode",{parentName:"li"},"Toast")," to ",Object(s.b)("strong",{parentName:"li"},"gently alert")," the user that something happened but don't want to steal their attention from the task at hand"),Object(s.b)("li",{parentName:"ul"},"use ",Object(s.b)("inlineCode",{parentName:"li"},"Alert")," to ",Object(s.b)("strong",{parentName:"li"},"abruptly alert")," the user that something happened, and want them to acknowledge this event"),Object(s.b)("li",{parentName:"ul"},"use ",Object(s.b)("inlineCode",{parentName:"li"},"FormPrompt"),", ",Object(s.b)("inlineCode",{parentName:"li"},"ConfirmPrompt"),", or ",Object(s.b)("inlineCode",{parentName:"li"},"ConfirmTextPrompt")," to ",Object(s.b)("strong",{parentName:"li"},"abruptly ask for user input")," or to confirm or deny a pending action"),Object(s.b)("li",{parentName:"ul"},"use ",Object(s.b)("inlineCode",{parentName:"li"},"Prompt")," component to build a custom overlay that ",Object(s.b)("strong",{parentName:"li"},"abruptly ask for user input")),Object(s.b)("li",{parentName:"ul"},"use ",Object(s.b)("inlineCode",{parentName:"li"},"Drawer")," to create an overlay ",Object(s.b)("strong",{parentName:"li"},"without necessarily stealing the user's attention")),Object(s.b)("li",{parentName:"ul"},"use ",Object(s.b)("inlineCode",{parentName:"li"},"Dialog")," to create ",Object(s.b)("strong",{parentName:"li"},"general purpose overlays")," like modals that display various types of content, or have inputs with complex interactions")),Object(s.b)("h2",null,"Have more questions?"),Object(s.b)("p",null,"If you have more questions about the various components or best practices, post them in the #chapter-frontend channel in Slack, or anonymously using the ",Object(s.b)("inlineCode",{parentName:"p"},"Request DS Changes")," workflow in the channel."))}u.isMDXComponent=!0},"5kSz":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/faq",function(){return n("3ouP")}])},Fcif:function(e,t,n){"use strict";function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return o}))},SAVP:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return p}));var o=n("mXGw"),a=n.n(o),i=a.a.createContext({}),r=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},s=function(e){var t=r(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},l="mdxType",c={inlineCode:"code",wrapper:function(e){return a.a.createElement(a.a.Fragment,{},e.children)}},u=function(e){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}(e,["components","mdxType","originalType","parentName"]),l=r(t);return a.a.createElement(l[i+"."+n]||l[n]||c[n]||o,t?Object.assign({},s,{components:t}):s)};function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},"dV/x":function(e,t,n){"use strict";function o(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,"a",(function(){return o}))},x9yg:function(e,t,n){"use strict";var o=Object.assign.bind(Object);e.exports=o,e.exports.default=e.exports}},[["5kSz",0,1]]]);