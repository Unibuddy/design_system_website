(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{"+wNj":function(e,n,t){"use strict";function o(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}t.d(n,"a",(function(){return o}))},HbGN:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var o=t("+wNj");function r(e,n){if(null==e)return{};var t,r,a=Object(o.a)(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}},Km8e:function(e,n,t){"use strict";var o=Object.assign.bind(Object);e.exports=o,e.exports.default=e.exports},KmaY:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return m}));var o=t("cxan"),r=t("HbGN"),a=t("ERkP"),i=t.n(a),p=t("ZVZ0"),l=["components"],s=(i.a.createElement,{}),d="wrapper";function c(e){var n=e.components,t=Object(r.a)(e,l);return Object(p.b)(d,Object(o.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(p.b)("h1",null,"Box"),Object(p.b)("p",null,"The Box component serves as a wrapper component for most of the CSS utility needs. It supports all HTML props with some specific overrides."),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-js"},'import {Box} from "@unibuddy/patron";\n')),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-jsx",metastring:"render=true",render:"true"},'<Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">\n    <Box\n        bgColor="#AB47BC"\n        w={200}\n        h={200}\n        _hover={{bgColor: "#BA68C8"}}\n        display="flex"\n        justifyContent="center"\n        alignItems="center"\n    >\n        <Text color="white" weight="bold">\n            Wow\n        </Text>\n    </Box>\n</Box>\n')),Object(p.b)("h2",null,"Readiness"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-jsx",metastring:"render functional",render:!0,functional:!0},'function Render() {\n    const readiness = [\n        {\n            key: "Native",\n            ready: true,\n        },\n\n        {\n            key: "Theme",\n            ready: true,\n        },\n        {\n            key: "Typescript",\n            ready: true,\n        },\n    ];\n\n    return (\n        <Inline space="medium">\n            {readiness.map(param => (\n                <Box\n                    bgColor={param.ready ? "#43A047" : "#E53935"}\n                    borderRadius="large"\n                    padding="small"\n                >\n                    <Inline space="small" verticalAlign="center">\n                        <Text color="white" weight="bold">\n                            {param.key}\n                        </Text>\n                    </Inline>\n                </Box>\n            ))}\n        </Inline>\n    );\n}\n')),Object(p.b)("h2",null,"Responsive props"),Object(p.b)("p",null,"Spacing props accept lists as values: ",Object(p.b)("inlineCode",{parentName:"p"},'<Box padding={["small", "medium", "xlarge"]} />'),". ",Object(p.b)("inlineCode",{parentName:"p"},"Box")," will have a padding of ",Object(p.b)("inlineCode",{parentName:"p"},"8px")," on a mobile device, ",Object(p.b)("inlineCode",{parentName:"p"},"20px")," on a tablet, and ",Object(p.b)("inlineCode",{parentName:"p"},"32px")," on desktop. The ",Object(p.b)("inlineCode",{parentName:"p"},"px")," come from ",Object(p.b)("inlineCode",{parentName:"p"},"ThemeProvider")," and may differ in your app. The breakpoints are standardized and not customizable."),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"/guides/layout#Need%20responsive%20styles?"},"Read more here")),Object(p.b)("h2",null,"Event props"),Object(p.b)("p",null,"On the web platform, Box also accepts two interaction-related props, ",Object(p.b)("inlineCode",{parentName:"p"},"_hover")," and ",Object(p.b)("inlineCode",{parentName:"p"},"_focus"),". These two props accept an object of props that will get applied on hover, or focus."),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-jsx",metastring:"render=true",render:"true"},'<Box\n    as="button"\n    paddingX="medium"\n    paddingY="small"\n    borderRadius="xsmall"\n    bgColor="solitude"\n    _hover={{bgColor: "deepSolitude"}}\n    _focus={{bgColor: "smartGrey"}}\n    transition=".2s ease all"\n>\n    <Text align="center">I am hoverable and focusable</Text>\n</Box>\n')),Object(p.b)("h2",null,"Overriding components"),Object(p.b)("p",null,"By default, ",Object(p.b)("inlineCode",{parentName:"p"},"Box")," renders a ",Object(p.b)("inlineCode",{parentName:"p"},"div")," but this can be changed to render any component."),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-jsx",metastring:"render=true",render:"true"},'<Box as="span" paddingX="medium" paddingY="small" borderRadius="xsmall" bgColor="solitude">\n    This renders a span element\n</Box>\n')),Object(p.b)("h2",null,"All Properties"),Object(p.b)("h4",null,"Type Glossary"),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"/components/layout/type-glossary"},"All layout component property types are defined here.")),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-jsx",metastring:"render functional",render:!0,functional:!0},'function Render() {\n    const props = [\n        {\n            key: "as",\n            type: "string | ComponentType",\n            description: "What the component should render as",\n            default: "div",\n            external: "patron specific",\n        },\n        {\n            key: "color",\n            type: "string",\n            description: "Text color",\n            default: "none",\n            external: "<a href=\'https://developer.mozilla.org/en-US/docs/Web/CSS/color\'>color</a>",\n        },\n        {\n            key: "alignItems",\n            type: \'ResponsiveProp<"flex-start" | "flex-end" | "center" | "normal" |"stretch">\',\n            description: "Sets the align-self value on all direct children as a group.",\n            default: "none",\n            external:\n                "<a href=\'https://developer.mozilla.org/en-US/docs/Web/CSS/align-items\'>alignItems</a>",\n        },\n        {\n            key: "shadow",\n            type: \'ResponsiveProp<keyof DefaultTheme["shadows"]>\',\n            description: "Adds shadow around an element\'s frame",\n            default: "none",\n            external: "patron specific",\n        },\n        {\n            key: "transform",\n            type: "ResponsiveProp<string>",\n            description: "Lets you rotate, scale, skew, or translate an element.",\n            default: "none",\n            external:\n                "<a href=\'https://developer.mozilla.org/en-US/docs/Web/CSS/transform\'>transform</a>",\n        },\n        {\n            key: "zIndex",\n            type: "ResponsiveProp<number>",\n            description:\n                "CSS property sets the z-order of a positioned element and its descendants or flex items.",\n            default: "auto",\n            external:\n                "<a href=\'https://developer.mozilla.org/en-US/docs/Web/CSS/z-index\'>zIndex</a>",\n        },\n        {\n            key: "w / width",\n            type: "ResponsiveProp<string | number>",\n            description: "Set the width of an element",\n            default: "inherit",\n            external: "<a href=\'https://developer.mozilla.org/en-US/docs/Web/CSS/width\'>w</a>",\n        },\n        {\n            key: "h / height",\n            type: "ResponsiveProp<string | number>",\n            description: "Set the height of an element",\n            default: "inherit",\n            external: "<a href=\'https://developer.mozilla.org/en-US/docs/Web/CSS/height\'>h</a>",\n        },\n        {\n            key: "maxH",\n            type: "ResponsiveProp<string | number>",\n            description: "Set the maximum height of an element",\n            default: "none",\n            external:\n                "<a href=\'https://developer.mozilla.org/en-US/docs/Web/CSS/max-height\'>maxH</a>",\n        },\n        {\n            key: "maxW",\n            type: "ResponsiveProp<string | number>",\n            description: "Set the maximum width of an element",\n            default: "none",\n            external:\n                "<a href=\'https://developer.mozilla.org/en-US/docs/Web/CSS/max-width\'>maxW</a>",\n        },\n        {\n            key: "minH",\n            type: "ResponsiveProp<string | number>",\n            description: "Set the minimum height of an element",\n            default: "none",\n            external:\n                "<a href=\'https://developer.mozilla.org/en-US/docs/Web/CSS/min-height\'>minH</a>",\n        },\n        {\n            key: "minW",\n            type: "ResponsiveProp<string | number>",\n            description: "Set the minimum width of an element",\n            default: "none",\n            external:\n                "<a href=\'https://developer.mozilla.org/en-US/docs/Web/CSS/min-width\'>minW</a>",\n        },\n        {\n            key: "opacity",\n            type: "ResponsiveProp<string | number>",\n            description: "The degree to which content behind an element is hidden",\n            default: "1",\n            external:\n                "<a href=\'https://developer.mozilla.org/en-US/docs/Web/CSS/opacity\'>opacity</a>",\n        },\n        {\n            key: "overflow",\n            type: \'ResponsiveProp<"hidden" | "auto" | "visible" | "scroll">\',\n            description: "Sets the desired behavior for an element\'s overflow in both directions",\n            default: "auto",\n            external:\n                "<a href=\'https://developer.mozilla.org/en-US/docs/Web/CSS/overflow\'>overflow</a>",\n        },\n        {\n            key: "pointerEvents",\n            type: \'"none" | "auto" | "box-only" | "box-none"\',\n            description: "If the component is subject to pointer events by the browser",\n            default: "auto",\n            external:\n                "<a href=\'https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events\'>pointerEvents</a>",\n        },\n        {\n            key: "backgroundColor / bgColor",\n            type: "string",\n            description: "Set the background color",\n            default: "none",\n            external:\n                "<a href=\'https://developer.mozilla.org/en-US/docs/Web/CSS/background-color\'>backgroundColor</a>",\n        },\n        {\n            key: "borderColor",\n            type: "string",\n            description: "Set the border color",\n            default: "none",\n            external:\n                "<a href=\'https://developer.mozilla.org/en-US/docs/Web/CSS/border-color\'>borderColor</a>",\n        },\n        {\n            key: "borderWidth",\n            type: "number",\n            description: "Set the border width",\n            default: "none",\n            external:\n                "<a href=\'https://developer.mozilla.org/en-US/docs/Web/CSS/border-width\'>borderWidth</a>",\n        },\n        {\n            key: "borderBottomWidth",\n            type: "number",\n            description: "Set the border bottom width",\n            default: "none",\n            external:\n                "<a href=\'https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-width\'>borderBottomWidth</a>",\n        },\n        {\n            key: "borderLeftWidth",\n            type: "number",\n            description: "Set the border left width",\n            default: "none",\n            external:\n                "<a href=\'https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-width\'>borderLeftWidth</a>",\n        },\n        {\n            key: "borderRightWidth",\n            type: "number",\n            description: "Set the border right width",\n            default: "none",\n            external:\n                "<a href=\'https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-width\'>borderRightWidth</a>",\n        },\n        {\n            key: "borderTopWidth",\n            type: "number",\n            description: "Set the border top width",\n            default: "none",\n            external:\n                "<a href=\'https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-width\'>borderTopWidth</a>",\n        },\n        {\n            key: "borderRadius",\n            type: \'ResponsiveProp<LayoutSpaceProp | "full">\',\n            description: "Set the boarder radius for the element",\n            default: "none",\n            external: "patron specific",\n        },\n        {\n            key: "brb",\n            type: \'ResponsiveProp<keyof DefaultTheme["space"]>\',\n            description: "Border Radius Bottom",\n            default: "none",\n            external: "patron specific",\n        },\n        {\n            key: "brl",\n            type: \'ResponsiveProp<keyof DefaultTheme["space"]>\',\n            description: "Border Radius Left",\n            default: "none",\n            external: "patron specific",\n        },\n        {\n            key: "brr",\n            type: \'ResponsiveProp<keyof DefaultTheme["space"]>\',\n            description: "Border Radius Right",\n            default: "none",\n            external: "patron specific",\n        },\n        {\n            key: "brt",\n            type: \'ResponsiveProp<keyof DefaultTheme["space"]>\',\n            description: "Border Radius Top",\n            default: "none",\n            external: "patron specific",\n        },\n        {\n            key: "display",\n            type: "ResponsiveProp<string>",\n            description: "Specifies the display behavior (the type of rendering box) of an element",\n            default: "block",\n            external:\n                "<a href=\'https://developer.mozilla.org/en-US/docs/Web/CSS/display\'>display</a>",\n        },\n        {\n            key: "flex",\n            type: "ResponsiveProp<string | number>",\n            description:\n                "Sets how a flex item will grow or shrink to fit the space available in its flex container",\n            default: "auto",\n            external: "<a href=\'https://developer.mozilla.org/en-US/docs/Web/CSS/flex\'>flex</a>",\n        },\n        {\n            key: "flexDirection",\n            type: \'ResponsiveProp<"row" | "column" | "row-reverse" | "column-reverse">\',\n            description: "Sets how flex items are placed in the flex container",\n            default: "row",\n            external:\n                "<a href=\'https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction\'>flexDirection</a>",\n        },\n        {\n            key: "flexGrow",\n            type: "ResponsiveProp<string | number>",\n            description: "Set the flex grow factor of a flex item",\n            default: "initial",\n            external:\n                "<a href=\'https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow\'>flexGrow</a>",\n        },\n        {\n            key: "flexShrink",\n            type: "ResponsiveProp<string | number>",\n            description: "Set the flex shrink factor of a flex item.",\n            default: "initial",\n            external:\n                "<a href=\'https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink\'>flexShrink</a>",\n        },\n        {\n            key: "flexWrap",\n            type: \'ResponsiveProp<"wrap" | "nowrap" | "wrap-reverse">\',\n            description:\n                "Sets whether flex items are forced onto one line or can wrap onto multiple lines",\n            default: "nowrap",\n            external:\n                "<a href=\'https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap\'>flexWrap</a>",\n        },\n        {\n            key: "gap",\n            type: \'ResponsiveProp<keyof DefaultTheme["space"]>\',\n            description:\n                "Sets the gaps (gutters) between rows and columns. It is a shorthand for row-gap and column-gap",\n            default: "initial",\n            external: "<a href=\'https://developer.mozilla.org/en-US/docs/Web/CSS/gap\'>gap</a>",\n        },\n        {\n            key: "justifyContent",\n            type:\n                \'ResponsiveProp<"flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly" | "stretch">\',\n            description:\n                "Defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container",\n            default: "none",\n            external:\n                "<a href=\'https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content\'>justifyContent</a>",\n        },\n        {\n            key: "margin",\n            type: "ResponsiveProp<MarginSpaceProp>",\n            description: "Set margin on all four sides of an element",\n            default: "none",\n            external: "patron specific",\n        },\n        {\n            key: "marginBottom",\n            type: "ResponsiveProp<MarginSpaceProp>",\n            description: "Set margin for bottom",\n            default: "none",\n            external: "patron specific",\n        },\n        {\n            key: "marginLeft",\n            type: "ResponsiveProp<MarginSpaceProp>",\n            description: "Set margin for left",\n            default: "none",\n            external: "patron specific",\n        },\n        {\n            key: "marginRight",\n            type: "ResponsiveProp<MarginSpaceProp>",\n            description: "Set margin for right",\n            default: "undefined",\n            external: "patron specific",\n        },\n        {\n            key: "marginTop",\n            type: "ResponsiveProp<MarginSpaceProp>",\n            description: "Set margin for top",\n            default: "none",\n            external: "patron specific",\n        },\n        {\n            key: "marginX",\n            type: "ResponsiveProp<MarginSpaceProp>",\n            description: "Set margin for left and right",\n            default: "none",\n            external: "patron specific",\n        },\n        {\n            key: "marginY",\n            type: "ResponsiveProp<MarginSpaceProp>",\n            description: "Set margin for top and bottom",\n            default: "none",\n            external: "patron specific",\n        },\n        {\n            key: "padding",\n            type: \'ResponsiveProp<keyof DefaultTheme["space"]>\',\n            description: "Set padding on all four sides of an element at once",\n            default: "none",\n            external: "patron specific",\n        },\n        {\n            key: "paddingBottom",\n            type: \'ResponsiveProp<keyof DefaultTheme["space"]>\',\n            description: "Set padding for bottom",\n            default: "none",\n            external: "patron specific",\n        },\n        {\n            key: "paddingLeft",\n            type: \'ResponsiveProp<keyof DefaultTheme["space"]>\',\n            description: "Set padding for left",\n            default: "none",\n            external: "patron specific",\n        },\n        {\n            key: "paddingRight",\n            type: \'ResponsiveProp<keyof DefaultTheme["space"]>\',\n            description: "Set padding for right",\n            default: "none",\n            external: "patron specific",\n        },\n        {\n            key: "paddingTop",\n            type: \'ResponsiveProp<keyof DefaultTheme["space"]>\',\n            description: "Set padding for top",\n            default: "none",\n            external: "patron specific",\n        },\n        {\n            key: "paddingX",\n            type: \'ResponsiveProp<keyof DefaultTheme["space"]>\',\n            description: "Set padding for left and right",\n            default: "none",\n            external: "patron specific",\n        },\n        {\n            key: "paddingY",\n            type: \'ResponsiveProp<keyof DefaultTheme["space"]>\',\n            description: "Set padding for top and bottom",\n            default: "none",\n            external: "patron specific",\n        },\n        {\n            key: "position",\n            type: \'ResponsiveProp<"relative" | "absolute" | "fixed" | "static" | "sticky">\',\n            description:\n                "The position CSS property sets how an element is positioned in a document",\n            default: "static",\n            external:\n                "<a href=\'https://developer.mozilla.org/en-US/docs/Web/CSS/position\'>position</a>",\n        },\n        {\n            key: "left",\n            type: "ResponsiveProp<string | number>",\n            description: "Horizontal position of a positioned element relative to the left side",\n            default: "auto",\n            external: "<a href=\'https://developer.mozilla.org/en-US/docs/Web/CSS/left\'>left</a>",\n        },\n        {\n            key: "right",\n            type: "ResponsiveProp<string | number>",\n            description: "Horizontal position of a positioned element relative to the right side",\n            default: "auto",\n            external: "<a href=\'https://developer.mozilla.org/en-US/docs/Web/CSS/right\'>right</a>",\n        },\n        {\n            key: "top",\n            type: "ResponsiveProp<string | number>",\n            description: "Vertical position of a positioned element relative to the top side",\n            default: "auto",\n            external: "<a href=\'https://developer.mozilla.org/en-US/docs/Web/CSS/top\'>top</a>",\n        },\n        {\n            key: "bottom",\n            type: "ResponsiveProp<string | number>",\n            description: "Vertical position of a positioned element relative to the bottom side",\n            default: "auto",\n            external:\n                "<a href=\'https://developer.mozilla.org/en-US/docs/Web/CSS/bottom\'>bottom</a>",\n        },\n        {\n            key: "transition",\n            type: "string",\n            description: "Applied transition on events",\n            default: "auto",\n            external:\n                "<a href=\'https://developer.mozilla.org/en-US/docs/Web/CSS/bottom\'>bottom</a>",\n        },\n        {\n            key: "_hover",\n            type: "BoxCoreProps",\n            description: "Hover event",\n            default: "none",\n            external:\n                "<a href=\'https://developer.mozilla.org/en-US/docs/Web/CSS/bottom\'>bottom</a>",\n        },\n        {\n            key: "_focus",\n            type: "BoxCoreProps",\n            description: "Focus event",\n            default: "auto",\n            external:\n                "<a href=\'https://developer.mozilla.org/en-US/docs/Web/CSS/bottom\'>bottom</a>",\n        },\n        {\n            key: "...rest",\n            type: "any",\n            description: "Any other props are spread across the component",\n            default: "none",\n        },\n    ];\n\n    const codeBlockStyle = {\n        fontSize: "14px",\n    };\n\n    return (\n        <Table bordered={true}>\n            <TableHead>\n                <TableRow>\n                    <TableHeader>Key</TableHeader>\n                    <TableHeader>Type</TableHeader>\n                    <TableHeader>Description</TableHeader>\n                    <TableHeader>Default</TableHeader>\n                </TableRow>\n            </TableHead>\n            <TableBody>\n                {props.map(prop => {\n                    return (\n                        <TableRow>\n                            <TableCell>\n                                <code style={codeBlockStyle}>{prop.key}</code>\n                            </TableCell>\n                            <TableCell style={{width: "1em"}}>\n                                <code style={codeBlockStyle}>{prop.type}</code>\n                            </TableCell>\n                            <TableCell>\n                                <Text size="small">{prop.description}</Text>\n                            </TableCell>\n                            <TableCell>\n                                <code style={codeBlockStyle}>{prop.default}</code>\n                            </TableCell>\n                        </TableRow>\n                    );\n                })}\n            </TableBody>\n        </Table>\n    );\n}\n')))}c.isMDXComponent=!0;var f=["components"],u=(i.a.createElement,{}),b="wrapper";function m(e){var n=e.components,t=Object(r.a)(e,f);return Object(p.b)(b,Object(o.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(p.b)(c,{mdxType:"Readme"}))}m.isMDXComponent=!0},ORkb:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/layout/box",function(){return t("KmaY")}])},ZVZ0:function(e,n,t){"use strict";t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return m}));var o=t("ERkP"),r=t.n(o);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),d=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"===typeof e?e(n):p(p({},n),e)),t},c=function(e){var n=d(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=d(t),f=o,b=c["".concat(i,".").concat(f)]||c[f]||u[f]||a;return t?r.a.createElement(b,p(p({ref:n},s),{},{components:t})):r.a.createElement(b,p({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"===typeof e||o){var a=t.length,i=new Array(a);i[0]=b;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[f]="string"===typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=t[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},cxan:function(e,n,t){"use strict";function o(){return(o=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}t.d(n,"a",(function(){return o}))}},[["ORkb",0,1]]]);