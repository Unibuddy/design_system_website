(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{"4Hrw":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return d}));var r=t("cxan"),o=t("HbGN"),a=t("ERkP"),c=t.n(a),l=t("ZVZ0"),i=["components"],s=(c.a.createElement,{}),u="wrapper";function d(e){var n=e.components,t=Object(o.a)(e,i);return Object(l.b)(u,Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h1",null,"Buddy Card"),Object(l.b)("p",null,"We don't necessarily build layouts in this specific order. The steps are here to illustrate the concepts of how to use layout components."),Object(l.b)("h3",null,"1 We start of by adding our basic content"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},'<Box padding="medium">\n    <Heading level="2" size="xxsmall">\n        Tom\n    </Heading>\n    <TextBlock>BEng Design and French</TextBlock>\n\n    <TextBlock>I come from</TextBlock>\n    <TextBlock>France</TextBlock>\n    <TextBlock>Previous qualification</TextBlock>\n    <TextBlock>French baccalaureate</TextBlock>\n    <TextBlock>About me</TextBlock>\n    <TextBlock>Hi! I am a second-year student studying design. Previously I lived in ...</TextBlock>\n</Box>\n')),Object(l.b)("h3",null,"2 Then we space out our content"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},'<Box padding="medium">\n    <Stack space="medium">\n        <Heading level="2" size="xxsmall">\n            Tom\n        </Heading>\n        <TextBlock>BEng Design and French</TextBlock>\n\n        <TextBlock>I come from</TextBlock>\n        <TextBlock>France</TextBlock>\n        <TextBlock>Previous qualification</TextBlock>\n        <TextBlock>French baccalaureate</TextBlock>\n        <TextBlock>About me</TextBlock>\n        <TextBlock>\n            Hi! I am a second-year student studying design. Previously I lived in ...\n        </TextBlock>\n    </Stack>\n</Box>\n')),Object(l.b)("h3",null,"3 Group related content"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},'<Box padding="medium">\n    <Stack space="medium">\n        <Heading level="2" size="xxsmall">\n            Tom\n        </Heading>\n        <TextBlock>BEng Design and French</TextBlock>\n\n        <Stack space="small">\n            <TextBlock>I come from</TextBlock>\n            <TextBlock>France</TextBlock>\n        </Stack>\n        <Stack space="small">\n            <TextBlock>Previous qualification</TextBlock>\n            <TextBlock>French baccalaureate</TextBlock>\n        </Stack>\n        <Stack space="small">\n            <TextBlock>About me</TextBlock>\n            <TextBlock>\n                Hi! I am a second-year student studying design. Previously I lived in ...\n            </TextBlock>\n        </Stack>\n    </Stack>\n</Box>\n')),Object(l.b)("h3",null,"4 Use size and tone to provide hierarchy"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},'<Box padding="medium">\n    <Stack space="medium">\n        <Heading level="2" size="xxsmall">\n            Tom\n        </Heading>\n        <TextBlock>BEng Design and French</TextBlock>\n\n        <Stack space="small">\n            <TextBlock size="small" color="grey600" transform="uppercase">\n                I come from\n            </TextBlock>\n            <TextBlock>France</TextBlock>\n        </Stack>\n        <Stack space="small">\n            <TextBlock size="small" color="grey600" transform="uppercase">\n                Previous qualification\n            </TextBlock>\n            <TextBlock>French baccalaureate</TextBlock>\n        </Stack>\n        <Stack space="small">\n            <TextBlock size="small" color="grey600" transform="uppercase">\n                About me\n            </TextBlock>\n            <TextBlock>\n                Hi! I am a second-year student studying design. Previously I lived in ...\n            </TextBlock>\n        </Stack>\n    </Stack>\n</Box>\n')),Object(l.b)("h3",null,"5 Add decorative content"),Object(l.b)("p",null,"We need multiple Box wrappers here because we don't want the border to go around the blue box on the top because it would look off to the user."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},'<Box padding="medium">\n    <Box maxW={380}>\n        <Box brt="xsmall" bgColor="blue600" h={42}></Box>\n        <Box brb="xsmall" borderColor="grey150" borderWidth={1} borderTopWidth={0}>\n            <Stack space="medium">\n                <Box\n                    as="img"\n                    borderRadius="full"\n                    width={83}\n                    height={83}\n                    borderWidth={4}\n                    borderColor="grey50"\n                    src="https://images.unibuddy.co/100x100/smart/59b89d2729dc9a000cf0eacc.jpg"\n                />\n\n                <Heading level="2" size="xxsmall">\n                    Tom\n                </Heading>\n                <TextBlock>BEng Design and French</TextBlock>\n                <Button round ghost color="primary">\n                    Chat With Tom\n                </Button>\n\n                <Stack space="small">\n                    <TextBlock size="small" color="grey600" transform="uppercase">\n                        I come from\n                    </TextBlock>\n                    <TextBlock>France</TextBlock>\n                </Stack>\n                <Stack space="small">\n                    <TextBlock size="small" color="grey600" transform="uppercase">\n                        Previous qualification\n                    </TextBlock>\n                    <TextBlock>French baccalaureate</TextBlock>\n                </Stack>\n                <Stack space="small">\n                    <TextBlock size="small" color="grey600" transform="uppercase">\n                        About me\n                    </TextBlock>\n                    <TextBlock>\n                        Hi! I am a second-year student studying design. Previously I lived in ...\n                    </TextBlock>\n                </Stack>\n\n                <Box as="a" href="#">\n                    <TextBlock color="blue600">Read more about Tom...</TextBlock>\n                </Box>\n            </Stack>\n        </Box>\n    </Box>\n</Box>\n')),Object(l.b)("h3",null,"6 Align decorative content"),Object(l.b)("p",null,"We pull the avatar up using negative marginTop, and utilise ",Object(l.b)("inlineCode",{parentName:"p"},'align="center"')," on Stack to center align the content. We will need multiple Stack wrappers here because some of the content needs to be centered and some does not."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},'<Box padding="medium">\n    <Box maxW={380}>\n        <Box brt="xsmall" bgColor="blue600" h={42}></Box>\n        <Box\n            brb="xsmall"\n            borderColor="grey150"\n            borderWidth={1}\n            borderTopWidth={0}\n            padding="medium"\n        >\n            <Stack space="medium" dividers>\n                <Stack space="medium" align="center">\n                    <Box\n                        as="img"\n                        borderRadius="full"\n                        width={83}\n                        height={83}\n                        marginTop={-50}\n                        borderWidth={4}\n                        borderColor="grey50"\n                        src="https://images.unibuddy.co/100x100/smart/59b89d2729dc9a000cf0eacc.jpg"\n                    />\n\n                    <Heading level="2" size="xxsmall">\n                        Tom\n                    </Heading>\n                    <TextBlock>BEng Design and French</TextBlock>\n                    <Button round ghost color="primary">\n                        Chat With Tom\n                    </Button>\n                </Stack>\n                <Stack space="large">\n                    <Stack space="medium">\n                        <Stack space="small">\n                            <TextBlock size="small" color="grey600" transform="uppercase">\n                                I come from\n                            </TextBlock>\n                            <TextBlock>France</TextBlock>\n                        </Stack>\n                        <Stack space="small">\n                            <TextBlock size="small" color="grey600" transform="uppercase">\n                                Previous qualification\n                            </TextBlock>\n                            <TextBlock>French baccalaureate</TextBlock>\n                        </Stack>\n                        <Stack space="small">\n                            <TextBlock size="small" color="grey600" transform="uppercase">\n                                About me\n                            </TextBlock>\n                            <TextBlock>\n                                Hi! I am a second-year student studying design. Previously I lived\n                                in ...\n                            </TextBlock>\n                        </Stack>\n                    </Stack>\n\n                    <Box as="a" href="#">\n                        <TextBlock color="blue600">Read more about Tom...</TextBlock>\n                    </Box>\n                </Stack>\n            </Stack>\n        </Box>\n    </Box>\n</Box>\n')))}d.isMDXComponent=!0},HbGN:function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}t.d(n,"a",(function(){return r}))},Km8e:function(e,n,t){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},Lbxc:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/examples/buddy-card",function(){return t("4Hrw")}])},ZVZ0:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return b}));var r=t("ERkP"),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),u=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"===typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=u(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},x=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(t),m=r,x=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return t?o.a.createElement(x,l(l({ref:n},s),{},{components:t})):o.a.createElement(x,l({ref:n},s))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"===typeof e||r){var a=t.length,c=new Array(a);c[0]=x;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[m]="string"===typeof e?e:r,c[1]=l;for(var s=2;s<a;s++)c[s]=t[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}x.displayName="MDXCreateElement"},cxan:function(e,n,t){"use strict";function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}t.d(n,"a",(function(){return r}))}},[["Lbxc",0,1]]]);