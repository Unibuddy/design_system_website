_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[29],{CH9N:function(n,e,t){"use strict";function o(){return(o=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n}).apply(this,arguments)}t.d(e,"a",(function(){return o}))},Km8e:function(n,e,t){"use strict";var o=Object.assign.bind(Object);n.exports=o,n.exports.default=n.exports},QGNk:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/general/button",function(){return t("dkFQ")}])},ZVZ0:function(n,e,t){"use strict";t.d(e,"a",(function(){return d})),t.d(e,"b",(function(){return m}));var o=t("ERkP"),r=t.n(o);function l(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function c(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){l(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function i(n,e){if(null==n)return{};var t,o,r=function(n,e){if(null==n)return{};var t,o,r={},l=Object.keys(n);for(o=0;o<l.length;o++)t=l[o],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(o=0;o<l.length;o++)t=l[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var u=r.a.createContext({}),s=function(n){var e=r.a.useContext(u),t=e;return n&&(t="function"===typeof n?n(e):c(c({},e),n)),t},d=function(n){var e=s(n.components);return r.a.createElement(u.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return r.a.createElement(r.a.Fragment,{},e)}},b=r.a.forwardRef((function(n,e){var t=n.components,o=n.mdxType,l=n.originalType,a=n.parentName,u=i(n,["components","mdxType","originalType","parentName"]),d=s(t),b=o,m=d["".concat(a,".").concat(b)]||d[b]||p[b]||l;return t?r.a.createElement(m,c(c({ref:e},u),{},{components:t})):r.a.createElement(m,c({ref:e},u))}));function m(n,e){var t=arguments,o=e&&e.mdxType;if("string"===typeof n||o){var l=t.length,a=new Array(l);a[0]=b;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=n,c.mdxType="string"===typeof n?n:o,a[1]=c;for(var u=2;u<l;u++)a[u]=t[u];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},dkFQ:function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return d}));var o=t("CH9N"),r=t("wHK/"),l=t("ERkP"),a=t.n(l),c=t("ZVZ0"),i=(a.a.createElement,{});function u(n){var e=n.components,t=Object(r.a)(n,["components"]);return Object(c.b)("wrapper",Object(o.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(c.b)("h1",null,"Button"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"Button")," is composed on top of the base level input element to handle theming and styles."),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),'import {Button} from "@unibuddy/patron";\n')),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx",metastring:"render=true",render:"true"}),'<Stack space="large">\n    <Stack space="small">\n        <TextBlock weight="bold">Standard</TextBlock>\n        <Inline verticalAlign="center" space="medium">\n            <Button>Default</Button>\n            <Button color="light">Light</Button>\n            <Button color="primary">Primary</Button>\n            <Button color="success">Success</Button>\n            <Button color="danger">Danger</Button>\n            <Button iconOnly color="primary">\n                <ReadIcon />\n            </Button>\n            <Button iconOnly round color="primary">\n                <ReadIcon />\n            </Button>\n        </Inline>\n    </Stack>\n\n    <Stack space="small">\n        <TextBlock weight="bold">Round</TextBlock>\n        <Inline verticalAlign="center" space="medium">\n            <Button round>Default</Button>\n            <Button round color="light">\n                Light\n            </Button>\n            <Button round color="primary">\n                Primary\n            </Button>\n            <Button round color="success">\n                Success\n            </Button>\n            <Button round color="danger">\n                Danger\n            </Button>\n            <Button round iconOnly color="primary">\n                <ReadIcon />\n            </Button>\n        </Inline>\n    </Stack>\n    <Stack space="small">\n        <TextBlock weight="bold">Ghost</TextBlock>\n        <Inline verticalAlign="center" space="medium">\n            <Button ghost>Default</Button>\n            <Button ghost color="light">\n                Light\n            </Button>\n            <Button ghost color="primary">\n                Primary\n            </Button>\n            <Button ghost color="success">\n                Success\n            </Button>\n            <Button ghost color="danger">\n                Danger\n            </Button>\n            <Button ghost iconOnly color="primary">\n                <ReadIcon />\n            </Button>\n            <Button ghost iconOnly round color="primary">\n                <ReadIcon />\n            </Button>\n        </Inline>\n    </Stack>\n    <Stack space="small">\n        <TextBlock weight="bold">Clear</TextBlock>\n        <Inline verticalAlign="center" space="medium">\n            <Button clear>Default</Button>\n            <Button clear color="light">\n                Light\n            </Button>\n            <Button clear color="primary">\n                Primary\n            </Button>\n            <Button clear color="success">\n                Success\n            </Button>\n            <Button clear color="danger">\n                Danger\n            </Button>\n            <Button clear iconOnly color="primary">\n                <ReadIcon />\n            </Button>\n            <Button clear iconOnly round color="primary">\n                <ReadIcon />\n            </Button>\n        </Inline>\n    </Stack>\n    <Stack space="small">\n        <TextBlock weight="bold">Elevated</TextBlock>\n        <Inline verticalAlign="center" space="medium">\n            <Button elevation={1}>Default</Button>\n            <Button elevation={1} color="light">\n                Light\n            </Button>\n        </Inline>\n    </Stack>\n    <Stack space="small">\n        <TextBlock weight="bold">Disabled</TextBlock>\n        <Inline verticalAlign="center" space="medium">\n            <Button disabled>Default</Button>\n            <Button disabled color="light">\n                Light\n            </Button>\n            <Button disabled color="primary">\n                Primary\n            </Button>\n            <Button disabled color="success">\n                Success\n            </Button>\n            <Button disabled color="danger">\n                Danger\n            </Button>\n            <Button disabled iconOnly color="primary">\n                <ReadIcon />\n            </Button>\n            <Button disabled iconOnly round color="primary">\n                <ReadIcon />\n            </Button>\n        </Inline>\n    </Stack>\n    <Stack space="small">\n        <TextBlock weight="bold">Icon</TextBlock>\n        <Inline verticalAlign="center" space="medium">\n            <Button rightIcon={<TrashIcon style={{margin: 0}} />}>Default</Button>\n            <Button color="light" rightIcon={<TrashIcon style={{margin: 0}} />}>\n                Light\n            </Button>\n            <Button color="primary" rightIcon={<TrashIcon style={{margin: 0}} />}>\n                Primary\n            </Button>\n            <Button color="success" rightIcon={<TrashIcon style={{margin: 0}} />}>\n                Success\n            </Button>\n            <Button color="danger" rightIcon={<TrashIcon style={{margin: 0}} />}>\n                Danger\n            </Button>\n        </Inline>\n    </Stack>\n    <Stack space="small">\n        <TextBlock weight="bold">Sizes</TextBlock>\n        <Inline verticalAlign="center" space="medium">\n            <Button size="sm">Small</Button>\n            <Button size="md">Medium</Button>\n            <Button size="lg">Large</Button>\n        </Inline>\n    </Stack>\n    <Stack space="small">\n        <TextBlock weight="bold">Display</TextBlock>\n        <Stack space="xsmall">\n            <Button>Default</Button>\n            <Button block>Block</Button>\n            <Button full>Full</Button>\n        </Stack>\n    </Stack>\n    <Stack space="small">\n        <TextBlock weight="bold">Link</TextBlock>\n        <Button link>Link</Button>\n    </Stack>\n</Stack>\n')),Object(c.b)("h2",null,"Readiness"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx",metastring:"render functional",render:!0,functional:!0}),'function Render() {\n    const readiness = [\n        {\n            key: "Native",\n            ready: true,\n        },\n\n        {\n            key: "Theme",\n            ready: true,\n        },\n        {\n            key: "Typescript",\n            ready: false,\n        },\n    ];\n\n    return (\n        <Inline space="medium">\n            {readiness.map(param => (\n                <Box\n                    bgColor={param.ready ? "#43A047" : "#E53935"}\n                    borderRadius="large"\n                    padding="small"\n                >\n                    <Inline space="small" verticalAlign="center">\n                        <Text color="white" weight="bold">\n                            {param.key}\n                        </Text>\n                    </Inline>\n                </Box>\n            ))}\n        </Inline>\n    );\n}\n')),Object(c.b)("h2",null,"Usage & Events"),Object(c.b)("p",null,"All native events can be passed to the component. For managing forms, check out ",Object(c.b)("a",Object(o.a)({parentName:"p"},{href:"/components/forms/submit-button"}),"SubmitButton")),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx",metastring:"expanded render",expanded:!0,render:!0}),'function Render() {\n    const [isColorblind, setIsColorblind] = React.useState(false);\n\n    return (\n        <Inline space="medium" verticalAlign="center">\n            <Button onClick={() => setIsColorblind(!isColorblind)}>Toggle Colorblind Mode</Button>\n            <TextBlock color={isColorblind ? "#000" : "blue600"} weight="bold">\n                In order to avoid plagiarism one first needs to know how to recognize it.\n            </TextBlock>\n        </Inline>\n    );\n}\n')),Object(c.b)("h2",null,"Theming"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"Button")," inherits from the default theme but you can expand on it to create your own."),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx",metastring:"render",render:!0}),'function Render() {\n    const customButtonTheme = {\n        Button: {\n            colors: {\n                default: {\n                    color: "#222222",\n                    bgColor: "#EEEEEE",\n                    borderColor: "#EEEEEE",\n                    outlineColor: "#EEEEEE",\n                    hoverBgColor: "#FAFAFA",\n                    clearColor: "#FAFAFA",\n                    clearHoverBgColor: "#FAFAFA",\n                },\n                primary: {\n                    color: "#FFFFFF",\n                    bgColor: "#FB8C00",\n                    borderColor: "#FB8C00",\n                    outlineColor: "#FB8C00",\n                    hoverBgColor: "#FFA726",\n                    clearColor: "#FFA726",\n                    clearHoverBgColor: "#FFA726",\n                },\n                secondary: {\n                    color: "#FFFFFF",\n                    bgColor: "#3949AB",\n                    borderColor: "#3949AB",\n                    outlineColor: "#3949AB",\n                    hoverBgColor: "#5C6BC0",\n                    clearColor: "#5C6BC0",\n                    clearHoverBgColor: "#5C6BC0",\n                },\n            },\n            fontSizes: {\n                sm: "18px",\n                md: "20px",\n                lg: "22px",\n            },\n            heights: {\n                sm: "38px",\n                md: "42px",\n                lg: "46px",\n            },\n        },\n    };\n\n    return (\n        <DesignSystemProvider theme={customButtonTheme}>\n            <Inline space="medium">\n                <Button>Default</Button>\n                <Button color="primary">Primary</Button>\n                <Button color="secondary">Secondary</Button>\n            </Inline>\n        </DesignSystemProvider>\n    );\n}\n')),Object(c.b)("h2",null,"Accessibility"),Object(c.b)("p",null,"While using ",Object(c.b)("inlineCode",{parentName:"p"},"iconOnly")," button, Always pass ",Object(c.b)("inlineCode",{parentName:"p"},"aria-label")," prop to the ",Object(c.b)("inlineCode",{parentName:"p"},"Button")," component with a value providing context."),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx",metastring:"expanded render",expanded:!0,render:!0}),'function Render() {\n    return (\n        <Button onClick={() => {}} aria-label={"Close"} iconOnly>\n            <CloseIcon />\n        </Button>\n    );\n}\n')),Object(c.b)("h2",null,"All Properties"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx",metastring:"render functional",render:!0,functional:!0}),'function Render() {\n    const props = [\n        {\n            key: "color",\n            type: "string",\n            description: "Background color of the button",\n            default: "<string>-themed",\n        },\n        {\n            key: "elevation",\n            type: "number<0 | 1>",\n            description: "Can only be 1 if provided. Gives it an android like look and elevation",\n            default: "0",\n        },\n        {\n            key: "size",\n            type: \'string<"md" | "sm" | "lg">\',\n            description: "Size of the button",\n            default: "md",\n        },\n        {\n            key: "block",\n            type: "boolean",\n            description: "Forces the button to take up the entire width of the parent container",\n            default: "undefined",\n        },\n        {\n            key: "full",\n            type: "boolean",\n            description:\n                "Forces the button to take up the entire width of the parent container without any border-radius",\n            default: "undefined",\n        },\n        {\n            key: "round",\n            type: "boolean",\n            description: "Maximizes the border-radius",\n            default: "undefined",\n        },\n        {\n            key: "iconOnly",\n            type: "boolean",\n            description: "Used to strip additional padding / margin when only an icon is passed",\n            default: "undefined",\n        },\n\n        {\n            key: "link",\n            type: "boolean",\n            description: "Renders a link like button",\n            default: "undefined",\n        },\n\n        {\n            key: "clear",\n            type: "boolean",\n            description: "Strips background color and borders",\n            default: "undefined",\n        },\n        {\n            key: "ghost",\n            type: "boolean",\n            description: "Strips background color",\n            default: "undefined",\n        },\n        {\n            key: "rightIcon",\n            type: "React.Component",\n            description: "An icon that can be rendered after the text",\n            default: "undefined",\n        },\n        {\n            key: "onFocus",\n            type: "function",\n            description: "Function triggered when the button is focused",\n            default: "undefined",\n        },\n        {\n            key: "onBlur",\n            type: "function",\n            description: "Function triggered when the button is blurred",\n            default: "undefined",\n        },\n        {\n            key: "...rest",\n            type: "any",\n            description: "Any other props are spread across the component",\n            default: "none",\n        },\n    ];\n\n    const codeBlockStyle = {\n        fontSize: "14px",\n    };\n\n    return (\n        <Table bordered={true}>\n            <TableHead>\n                <TableRow>\n                    <TableHeader>Key</TableHeader>\n                    <TableHeader>Type</TableHeader>\n                    <TableHeader>Description</TableHeader>\n                    <TableHeader>Default</TableHeader>\n                </TableRow>\n            </TableHead>\n            <TableBody>\n                {props.map(prop => {\n                    return (\n                        <TableRow>\n                            <TableCell>\n                                <code style={codeBlockStyle}>{prop.key}</code>\n                            </TableCell>\n                            <TableCell>\n                                <code style={codeBlockStyle}>{prop.type}</code>\n                            </TableCell>\n                            <TableCell>\n                                <Text size="small">{prop.description}</Text>\n                            </TableCell>\n                            <TableCell>\n                                {prop.default.includes("<string>") ? (\n                                    <Text size="small">\n                                        {prop.default.replace("<string>-", "")}\n                                    </Text>\n                                ) : (\n                                    <code style={codeBlockStyle}>{prop.default}</code>\n                                )}\n                            </TableCell>\n                        </TableRow>\n                    );\n                })}\n            </TableBody>\n        </Table>\n    );\n}\n')))}u.isMDXComponent=!0;a.a.createElement;var s={};function d(n){var e=n.components,t=Object(r.a)(n,["components"]);return Object(c.b)("wrapper",Object(o.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(c.b)(u,{mdxType:"Readme"}))}d.isMDXComponent=!0},"wHK/":function(n,e,t){"use strict";function o(n,e){if(null==n)return{};var t,o,r=function(n,e){if(null==n)return{};var t,o,r={},l=Object.keys(n);for(o=0;o<l.length;o++)t=l[o],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(o=0;o<l.length;o++)t=l[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}t.d(e,"a",(function(){return o}))}},[["QGNk",0,1]]]);