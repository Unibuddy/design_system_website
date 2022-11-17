(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{"+wNj":function(e,n,a){"use strict";function l(e,n){if(null==e)return{};var a,l,r={},t=Object.keys(e);for(l=0;l<t.length;l++)a=t[l],n.indexOf(a)>=0||(r[a]=e[a]);return r}a.d(n,"a",(function(){return l}))},"9wwd":function(e,n,a){"use strict";a.r(n),a.d(n,"default",(function(){return d}));var l=a("cxan"),r=a("HbGN"),t=a("ERkP"),o=a.n(t),p=a("ZVZ0"),b=(o.a.createElement,{}),i="wrapper";function d(e){var n=e.components,a=Object(r.a)(e,["components"]);return Object(p.b)(i,Object(l.a)({},b,a,{components:n,mdxType:"MDXLayout"}),Object(p.b)("h1",null,"Tokens"),Object(p.b)("h2",null,"Typography"),Object(p.b)("p",null,"The default theme contains fixed ",Object(p.b)("inlineCode",{parentName:"p"},"fontSize")," and ",Object(p.b)("inlineCode",{parentName:"p"},"leading")," values for ",Object(p.b)("inlineCode",{parentName:"p"},"TextBlock")," (imported as ",Object(p.b)("inlineCode",{parentName:"p"},"Text"),") and ",Object(p.b)("inlineCode",{parentName:"p"},"Heading")," components. These translate to ",Object(p.b)("inlineCode",{parentName:"p"},"font-size")," and ",Object(p.b)("inlineCode",{parentName:"p"},"line-height")," respectively in CSS."),Object(p.b)("p",null,"We use the following packages to trim any extra space / padding present in the font."),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/capsize"},"capsize")),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/react-native-capsize"},"react-native-capsize")),Object(p.b)("p",null,'The default theme also uses font metrics setup for "Nunito"'),Object(p.b)("h3",null,"Text"),Object(p.b)("p",null,Object(p.b)("inlineCode",{parentName:"p"},"Text")," has the following standard sizes."),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-jsx",metastring:"render functional",render:!0,functional:!0},'function Render() {\n    const props = [\n        {key: "xxsmall", size: "12", leading: "16"},\n        {key: "xsmall", size: "12", leading: "16"},\n        {key: "small", size: "14", leading: "22"},\n        {key: "standard", size: "16", leading: "24"},\n        {key: "medium", size: "16", leading: "24"},\n        {key: "large", size: "18", leading: "28"},\n        {key: "xlarge", size: "18", leading: "28"},\n        {key: "xxlarge", size: "18", leading: "28"},\n    ];\n\n    return (\n        <Table bordered={true}>\n            <TableHead>\n                <TableRow>\n                    <TableHeader>Token</TableHeader>\n                    <TableHeader>Font Size</TableHeader>\n                    <TableHeader>Leading</TableHeader>\n                </TableRow>\n            </TableHead>\n            <TableBody>\n                {props.map(prop => {\n                    return (\n                        <TableRow>\n                            <TableCell>\n                                <code>{prop.key}</code>\n                            </TableCell>\n                            <TableCell>\n                                <code>{prop.size}px</code>\n                            </TableCell>\n                            <TableCell>\n                                <code>{prop.leading}</code>\n                            </TableCell>\n                        </TableRow>\n                    );\n                })}\n            </TableBody>\n        </Table>\n    );\n}\n')),Object(p.b)("h3",null,"Heading"),Object(p.b)("p",null,"Heading has five sizes that default to the level of the ",Object(p.b)("inlineCode",{parentName:"p"},"h1, h2, h3...")," tags defined by the ",Object(p.b)("inlineCode",{parentName:"p"},"level")," prop (required), but can be manually overwritten using ",Object(p.b)("inlineCode",{parentName:"p"},"size"),"."),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-jsx",metastring:"render functional",render:!0,functional:!0},'function Render() {\n    const props = [\n        {key: "xxsmall", size: "18", leading: "32"},\n        {key: "xsmall", size: "20", leading: "36"},\n        {key: "small", size: "24", leading: "40"},\n        {key: "standard", size: "28", leading: "42"},\n        {key: "medium", size: "28", leading: "42"},\n        {key: "large", size: "32", leading: "48"},\n        {key: "xlarge", size: "48", leading: "64"},\n        {key: "xxlarge", size: "64", leading: "96"},\n    ];\n\n    return (\n        <Table bordered={true}>\n            <TableHead>\n                <TableRow>\n                    <TableHeader>Token</TableHeader>\n                    <TableHeader>Font Size</TableHeader>\n                    <TableHeader>Leading</TableHeader>\n                </TableRow>\n            </TableHead>\n            <TableBody>\n                {props.map(prop => {\n                    return (\n                        <TableRow>\n                            <TableCell>\n                                <code>{prop.key}</code>\n                            </TableCell>\n                            <TableCell>\n                                <code>{prop.size}px</code>\n                            </TableCell>\n                            <TableCell>\n                                <code>{prop.leading}</code>\n                            </TableCell>\n                        </TableRow>\n                    );\n                })}\n            </TableBody>\n        </Table>\n    );\n}\n')),Object(p.b)("h2",null,"Spacing & Layout"),Object(p.b)("p",null,"Our layout components across the board utilize values from the default theme, these are the standard sizes."),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-jsx",metastring:"render functional",render:!0,functional:!0},'function Render() {\n    const props = [\n        {key: "none", value: "0"},\n        {key: "gutter", value: "24"},\n        {key: "xxsmall", value: "4"},\n        {key: "xsmall", value: "8"},\n        {key: "small", value: "12"},\n        {key: "medium / standard", value: "20"},\n        {key: "large", value: "32"},\n        {key: "xlarge", value: "48"},\n        {key: "xxlarge", value: "96"},\n    ];\n\n    return (\n        <Table bordered={true}>\n            <TableHead>\n                <TableRow>\n                    <TableHeader>Token</TableHeader>\n                    <TableHeader>Value</TableHeader>\n                </TableRow>\n            </TableHead>\n            <TableBody>\n                {props.map(prop => {\n                    return (\n                        <TableRow>\n                            <TableCell>\n                                <code>{prop.key}</code>\n                            </TableCell>\n                            <TableCell>\n                                <code>{prop.value}px</code>\n                            </TableCell>\n                        </TableRow>\n                    );\n                })}\n            </TableBody>\n        </Table>\n    );\n}\n')),Object(p.b)("h2",null,"Icons"),Object(p.b)("p",null,"When wrapping a valid react based svg using the ",Object(p.b)("a",{parentName:"p",href:"/guides/theming"},"Icon component"),", you get access to the following default values."),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-jsx",metastring:"render functional",render:!0,functional:!0},'function Render() {\n    const props = [\n        {key: "xsmall", value: "16"},\n        {key: "small", value: "20"},\n        {key: "medium", value: "24"},\n        {key: "large", value: "32"},\n        {key: "xlarge", value: "40"},\n        {key: "xxlarge", value: "48"},\n    ];\n\n    return (\n        <Table bordered={true}>\n            <TableHead>\n                <TableRow>\n                    <TableHeader>Token</TableHeader>\n                    <TableHeader>Value</TableHeader>\n                </TableRow>\n            </TableHead>\n            <TableBody>\n                {props.map(prop => {\n                    return (\n                        <TableRow>\n                            <TableCell>\n                                <code>{prop.key}</code>\n                            </TableCell>\n                            <TableCell>\n                                <code>{prop.value}px</code>\n                            </TableCell>\n                        </TableRow>\n                    );\n                })}\n            </TableBody>\n        </Table>\n    );\n}\n')),Object(p.b)("h2",null,"Shadows"),Object(p.b)("p",null,"When using the ",Object(p.b)("inlineCode",{parentName:"p"},"shadow")," prop on applicable components, the following default values are applied."),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-jsx",metastring:"render functional",render:!0,functional:!0},'function Render() {\n    const props = [\n        {key: "none", value: "0"},\n        {key: "xxsmall", value: "0 0 1px 0 rgba(0,0,0,0.05)"},\n        {key: "xsmall", value: "0 1px 2px 0 rgba(0,0,0,0.05)"},\n        {key: "small", value: "0 1px 3px 0 rgba(0,0,0,0.1),0 1px 2px 0 rgba(0,0,0,0.06)"},\n        {key: "medium", value: "0 4px 6px -1px rgba(0,0,0,0.1),0 2px 4px -1px rgba(0,0,0,0.06)"},\n        {key: "large", value: "0 10px 15px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05)"},\n        {\n            key: "xlarge",\n            value: "0 20px 25px -5px rgba(0,0,0,0.1),0 10px 10px -5px rgba(0,0,0,0.04)",\n        },\n        {key: "xxlarge", value: "0 25px 50px -12px rgba(0,0,0,0.25)"},\n    ];\n\n    return (\n        <Table bordered={true}>\n            <TableHead>\n                <TableRow>\n                    <TableHeader>Token</TableHeader>\n                    <TableHeader>Value</TableHeader>\n                </TableRow>\n            </TableHead>\n            <TableBody>\n                {props.map(prop => {\n                    return (\n                        <TableRow>\n                            <TableCell>\n                                <code>{prop.key}</code>\n                            </TableCell>\n                            <TableCell>\n                                <code>{prop.value}px</code>\n                            </TableCell>\n                        </TableRow>\n                    );\n                })}\n            </TableBody>\n        </Table>\n    );\n}\n')),Object(p.b)("h2",null,"Examples"),Object(p.b)("h3",null,"Text with different sizes"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},'function Render() {\n    const text =\n        "The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog";\n\n    const sizes = ["xxsmall", "xsmall", "small", "standard", "large", "xlarge", "xxlarge"];\n\n    return (\n        <Stack space="medium">\n            {sizes.map(size => (\n                <Box padding="medium" bgColor="deepSolitude">\n                    <TextBlock size={size}>{text}</TextBlock>\n                </Box>\n            ))}\n        </Stack>\n    );\n}\n')),Object(p.b)("h3",null,"Heading with different sizes"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},'function Render() {\n    const text = "The quick brown fox jumps over the lazy dog";\n\n    const sizes = ["xxsmall", "xsmall", "small", "standard", "large", "xlarge", "xxlarge"];\n\n    return (\n        <Stack space="medium">\n            {sizes.map(size => (\n                <Box padding="medium" bgColor="deepSolitude">\n                    <Heading level="1" size={size}>\n                        {text}\n                    </Heading>\n                </Box>\n            ))}\n        </Stack>\n    );\n}\n')),Object(p.b)("h3",null,"Padding in Box"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},'function Render() {\n    const sizes = ["none", "xxsmall", "xsmall", "small", "medium", "large", "xlarge", "xxlarge"];\n\n    return (\n        <Stack space="small">\n            {sizes.map(size => (\n                <Inline>\n                    <Box backgroundColor="solitude" padding={size}>\n                        <TextBlock>{size}</TextBlock>\n                    </Box>\n                </Inline>\n            ))}\n        </Stack>\n    );\n}\n')),Object(p.b)("h3",null,"Space in Stack"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},'function Render() {\n    const sizes = ["none", "xxsmall", "xsmall", "small", "medium", "large", "xlarge", "xxlarge"];\n\n    return (\n        <Stack space="medium">\n            {sizes.map(size => (\n                <Box backgroundColor="solitude">\n                    <Stack space={size}>\n                        <Box backgroundColor="deepSolitude" padding="medium">\n                            <TextBlock>{size}</TextBlock>\n                        </Box>\n                        <Box backgroundColor="deepSolitude" padding="medium">\n                            <TextBlock>{size}</TextBlock>\n                        </Box>\n                        <Box backgroundColor="deepSolitude" padding="medium">\n                            <TextBlock>{size}</TextBlock>\n                        </Box>\n                    </Stack>\n                </Box>\n            ))}\n        </Stack>\n    );\n}\n')),Object(p.b)("h3",null,"Boxes with shadows"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},'function Render() {\n    const sizes = ["none", "xxsmall", "xsmall", "small", "medium", "large", "xlarge", "xxlarge"];\n\n    return (\n        <Box paddingY="xlarge">\n            <Inline space="medium">\n                {sizes.map(size => (\n                    <Box backgroundColor="solitude" padding="medium" shadow={size}>\n                        <TextBlock>{size}</TextBlock>\n                    </Box>\n                ))}\n            </Inline>\n        </Box>\n    );\n}\n')),Object(p.b)("h2",null,"Legacy values for typography"),Object(p.b)("p",null,"Some products may be using ",Object(p.b)("inlineCode",{parentName:"p"},"lineGap")," instead of ",Object(p.b)("inlineCode",{parentName:"p"},"leading")," as this property was used previously. These are the old default values for the same"),Object(p.b)("h3",null,Object(p.b)("inlineCode",{parentName:"h3"},"TextBlock")),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-jsx",metastring:"render functional",render:!0,functional:!0},'function Render() {\n    const props = [\n        {key: "xxsmall", size: "12", gap: "16"},\n        {key: "xsmall", size: "12", gap: "16"},\n        {key: "small", size: "14", gap: "22"},\n        {key: "standard", size: "16", gap: "24"},\n        {key: "medium", size: "16", gap: "24"},\n        {key: "large", size: "18", gap: "28"},\n        {key: "xlarge", size: "18", gap: "28"},\n        {key: "xxlarge", size: "18", gap: "28"},\n    ];\n\n    return (\n        <Table bordered={true}>\n            <TableHead>\n                <TableRow>\n                    <TableHeader>Token</TableHeader>\n                    <TableHeader>Font Size</TableHeader>\n                    <TableHeader>Line Gap</TableHeader>\n                </TableRow>\n            </TableHead>\n            <TableBody>\n                {props.map(prop => {\n                    return (\n                        <TableRow>\n                            <TableCell>\n                                <code>{prop.key}</code>\n                            </TableCell>\n                            <TableCell>\n                                <code>{prop.size}px</code>\n                            </TableCell>\n                            <TableCell>\n                                <code>{prop.gap}</code>\n                            </TableCell>\n                        </TableRow>\n                    );\n                })}\n            </TableBody>\n        </Table>\n    );\n}\n')),Object(p.b)("h3",null,Object(p.b)("inlineCode",{parentName:"h3"},"Heading")),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-jsx",metastring:"render functional",render:!0,functional:!0},'function Render() {\n    const props = [\n        {key: "xxsmall", size: "18", gap: "32"},\n        {key: "xsmall", size: "20", gap: "36"},\n        {key: "small", size: "24", gap: "40"},\n        {key: "standard", size: "28", gap: "42"},\n        {key: "medium", size: "28", gap: "42"},\n        {key: "large", size: "32", gap: "48"},\n        {key: "xlarge", size: "48", gap: "64"},\n        {key: "xxlarge", size: "64", gap: "96"},\n    ];\n\n    return (\n        <Table bordered={true}>\n            <TableHead>\n                <TableRow>\n                    <TableHeader>Token</TableHeader>\n                    <TableHeader>Font Size</TableHeader>\n                    <TableHeader>Line Gap</TableHeader>\n                </TableRow>\n            </TableHead>\n            <TableBody>\n                {props.map(prop => {\n                    return (\n                        <TableRow>\n                            <TableCell>\n                                <code>{prop.key}</code>\n                            </TableCell>\n                            <TableCell>\n                                <code>{prop.size}px</code>\n                            </TableCell>\n                            <TableCell>\n                                <code>{prop.gap}</code>\n                            </TableCell>\n                        </TableRow>\n                    );\n                })}\n            </TableBody>\n        </Table>\n    );\n}\n')))}d.isMDXComponent=!0},HbGN:function(e,n,a){"use strict";a.d(n,"a",(function(){return r}));var l=a("+wNj");function r(e,n){if(null==e)return{};var a,r,t=Object(l.a)(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}},Km8e:function(e,n,a){"use strict";var l=Object.assign.bind(Object);e.exports=l,e.exports.default=e.exports},Lajl:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tokens",function(){return a("9wwd")}])},ZVZ0:function(e,n,a){"use strict";a.d(n,"a",(function(){return c})),a.d(n,"b",(function(){return g}));var l=a("ERkP"),r=a.n(l);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,l)}return a}function p(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function b(e,n){if(null==e)return{};var a,l,r=function(e,n){if(null==e)return{};var a,l,r={},t=Object.keys(e);for(l=0;l<t.length;l++)a=t[l],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(l=0;l<t.length;l++)a=t[l],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),d=function(e){var n=r.a.useContext(i),a=n;return e&&(a="function"===typeof e?e(n):p(p({},n),e)),a},c=function(e){var n=d(e.components);return r.a.createElement(i.Provider,{value:n},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var a=e.components,l=e.mdxType,t=e.originalType,o=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),c=d(a),s=l,m=c["".concat(o,".").concat(s)]||c[s]||u[s]||t;return a?r.a.createElement(m,p(p({ref:n},i),{},{components:a})):r.a.createElement(m,p({ref:n},i))}));function g(e,n){var a=arguments,l=n&&n.mdxType;if("string"===typeof e||l){var t=a.length,o=new Array(t);o[0]=m;var p={};for(var b in n)hasOwnProperty.call(n,b)&&(p[b]=n[b]);p.originalType=e,p[s]="string"===typeof e?e:l,o[1]=p;for(var i=2;i<t;i++)o[i]=a[i];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},cxan:function(e,n,a){"use strict";function l(){return(l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}a.d(n,"a",(function(){return l}))}},[["Lajl",0,1]]]);