(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{HbGN:function(n,e,t){"use strict";function o(n,e){if(null==n)return{};var t,o,r=function(n,e){if(null==n)return{};var t={};for(var o in n)if(Object.prototype.hasOwnProperty.call(n,o)){if(e.indexOf(o)>=0)continue;t[o]=n[o]}return t}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}t.d(e,"a",(function(){return o}))},Km8e:function(n,e,t){"use strict";var o=Object.assign.bind(Object);n.exports=o,n.exports.default=n.exports},LvnV:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/examples/showcase",function(){return t("awe/")}])},ZVZ0:function(n,e,t){"use strict";t.d(e,"a",(function(){return u})),t.d(e,"b",(function(){return b}));var o=t("ERkP"),r=t.n(o);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function c(n,e){if(null==n)return{};var t,o,r=function(n,e){if(null==n)return{};var t,o,r={},a=Object.keys(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var s=r.a.createContext({}),m=function(n){var e=r.a.useContext(s),t=e;return n&&(t="function"===typeof n?n(e):i(i({},e),n)),t},u=function(n){var e=m(n.components);return r.a.createElement(s.Provider,{value:e},n.children)},d="mdxType",p={inlineCode:"code",wrapper:function(n){var e=n.children;return r.a.createElement(r.a.Fragment,{},e)}},x=r.a.forwardRef((function(n,e){var t=n.components,o=n.mdxType,a=n.originalType,l=n.parentName,s=c(n,["components","mdxType","originalType","parentName"]),u=m(t),d=o,x=u["".concat(l,".").concat(d)]||u[d]||p[d]||a;return t?r.a.createElement(x,i(i({ref:e},s),{},{components:t})):r.a.createElement(x,i({ref:e},s))}));function b(n,e){var t=arguments,o=e&&e.mdxType;if("string"===typeof n||o){var a=t.length,l=new Array(a);l[0]=x;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=n,i[d]="string"===typeof n?n:o,l[1]=i;for(var s=2;s<a;s++)l[s]=t[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}x.displayName="MDXCreateElement"},"awe/":function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return u}));var o=t("cxan"),r=t("HbGN"),a=t("ERkP"),l=t.n(a),i=t("ZVZ0"),c=["components"],s=(l.a.createElement,{}),m="wrapper";function u(n){var e=n.components,t=Object(r.a)(n,c);return Object(i.b)(m,Object(o.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("h1",null,"Recipes"),Object(i.b)("h3",null,"Buddy Card"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},'<Box padding="medium" minH="initial">\n    <Box maxW={380}>\n        <Box brt="xsmall" bgColor="blue600" h={42}></Box>\n        <Box brb="xsmall" borderColor="grey150" borderWidth={1} borderTopWidth={0}>\n            <Box display="flex" justifyContent="center">\n                <Box\n                    as="img"\n                    borderRadius="full"\n                    width={83}\n                    height={83}\n                    marginTop={-34}\n                    borderWidth={4}\n                    borderColor="grey50"\n                    src="https://images.unibuddy.co/100x100/smart/59b89d2729dc9a000cf0eacc.jpg"\n                />\n            </Box>\n            <Box padding="medium">\n                <Stack space="medium" dividers>\n                    <Stack space="medium" align="center">\n                        <Heading level="2" size="xxsmall">\n                            Tom\n                        </Heading>\n                        <TextBlock>BEng Design and French</TextBlock>\n\n                        <Button round ghost color="primary">\n                            Chat With Tom\n                        </Button>\n                    </Stack>\n\n                    <Stack space="medium">\n                        <Stack space="small">\n                            <TextBlock size="small" color="grey600">\n                                I COME FROM\n                            </TextBlock>\n                            <TextBlock>France</TextBlock>\n                        </Stack>\n\n                        <Stack space="small">\n                            <TextBlock size="small" color="grey600">\n                                PREVIOUS QUALIFICATION\n                            </TextBlock>\n                            <TextBlock>French Baccalaureate</TextBlock>\n                        </Stack>\n\n                        <Stack space="small">\n                            <TextBlock size="small" color="grey600">\n                                ABOUT ME\n                            </TextBlock>\n                            <TextBlock>\n                                Hi! I am a second-year student studying design. Previously I lived\n                                in ...\n                            </TextBlock>\n                        </Stack>\n                    </Stack>\n\n                    <Box as="a" href="#">\n                        <TextBlock color="blue600">Read more about Tom...</TextBlock>\n                    </Box>\n                </Stack>\n            </Box>\n        </Box>\n    </Box>\n</Box>\n')),Object(i.b)("h3",null,"Chat Message"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},'<Box display="flex">\n    <Columns space="small">\n        <Column width="content">\n            <Box\n                display="block"\n                as="img"\n                borderRadius="full"\n                width={40}\n                height={40}\n                src="https://images.unibuddy.co/40x40/smart/59b89d2729dc9a000cf0eacc.jpg"\n            />\n        </Column>\n        <Column>\n            <Stack space="xxsmall">\n                <TextBlock size="xsmall">\n                    <TextLine weight="600" color="blue600">\n                        Tom\n                    </TextLine>{" "}\n                    \xb7 1:34pm\n                </TextBlock>\n                <Box brr="small" brb="small" bgColor="grey150" padding="small">\n                    <TextBlock>Lorem ipsum dolorem sit amet.</TextBlock>\n                </Box>\n            </Stack>\n        </Column>\n    </Columns>\n</Box>\n')),Object(i.b)("h3",null,"Signup Form"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},'<Box padding="medium" display="flex" justifyContent="center" minH="initial">\n    <Box\n        padding="medium"\n        borderColor="grey150"\n        borderWidth={1}\n        borderRadius="xsmall"\n        w={["100%", 680]}\n    >\n        <Stack space="large">\n            <TextBlock align="center" size="small" color="grey600">\n                Already have an account?{" "}\n                <Box as="a" href="#">\n                    <TextLine color="blue600">Log in</TextLine>\n                </Box>\n            </TextBlock>\n\n            <Form\n                initialValues={{\n                    firstName: "",\n                    lastName: "",\n                    email: "",\n                    password: "",\n                    confirmPassword: "",\n                }}\n            >\n                <Stack space="medium">\n                    <Columns space="medium" collapseBelow="tablet">\n                        <Column>\n                            <FormGroup label="First Name">\n                                <TextInput name="firstName" required />\n                            </FormGroup>\n                        </Column>\n                        <Column>\n                            <FormGroup label="Last Name">\n                                <TextInput name="lastName" required />\n                            </FormGroup>\n                        </Column>\n                    </Columns>\n\n                    <FormGroup label="Email">\n                        <TextInput name="email" required />\n                    </FormGroup>\n\n                    <Columns space="medium" collapseBelow="tablet">\n                        <Column>\n                            <FormGroup label="Password">\n                                <TextInput name="password" required />\n                            </FormGroup>\n                        </Column>\n                        <Column>\n                            <FormGroup label="Confirm Password">\n                                <TextInput name="confirmPassword" required />\n                            </FormGroup>\n                        </Column>\n                    </Columns>\n\n                    <Collapsible\n                        trigger={\n                            <TextLine color="blue600">\n                                How do we use your information?\n                            </TextLine>\n                        }\n                    >\n                        Unibuddy collects personal data on behalf of the Institution to operate\n                        effectively and provide you with the best experience from our services.\n                    </Collapsible>\n\n                    <SubmitButton block color="primary">\n                        Start to chat\n                    </SubmitButton>\n                </Stack>\n            </Form>\n        </Stack>\n    </Box>\n</Box>\n')),Object(i.b)("h3",null,"Virtual Events Analytics"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},'<Box padding="medium">\n    <Tiles space="medium" columns={[1, 1, 2, 4]}>\n        <Box borderRadius="xsmall" shadow="medium" padding="medium">\n            <Stack space="medium">\n                <Split>\n                    <Box\n                        borderRadius="full"\n                        w={32}\n                        h={32}\n                        bgColor="rgb(255, 242, 227)"\n                        display="flex"\n                        alignItems="center"\n                        justifyContent="center"\n                    >\n                        <Play.Icon name="LabelIcon" color="rgb(215, 103, 0)" />\n                    </Box>\n\n                    <Tooltip label="Lorem ipsum dolorem sit amet.">\n                        <Box\n                            borderRadius="full"\n                            w={20}\n                            h={20}\n                            bgColor="grey50"\n                            display="flex"\n                            alignItems="center"\n                            padding="xxsmall"\n                            justifyContent="center"\n                        >\n                            <Play.Icon name="HelpIcon" />\n                        </Box>\n                    </Tooltip>\n                </Split>\n\n                <Stack space="small">\n                    <TextBlock>New Signups</TextBlock>\n                    <TextBlock size="xxlarge">7</TextBlock>\n                </Stack>\n            </Stack>\n        </Box>\n\n        <Box borderRadius="xsmall" shadow="medium" padding="medium">\n            <Stack space="medium">\n                <Split>\n                    <Box\n                        borderRadius="full"\n                        w={32}\n                        h={32}\n                        bgColor="rgb(214, 240, 240)"\n                        display="flex"\n                        alignItems="center"\n                        justifyContent="center"\n                    >\n                        <Play.Icon name="Brain" color="rgb(0, 99, 96)" />\n                    </Box>\n\n                    <Tooltip label="Lorem ipsum dolorem sit amet.">\n                        <Box\n                            borderRadius="full"\n                            w={20}\n                            h={20}\n                            bgColor="grey50"\n                            display="flex"\n                            alignItems="center"\n                            padding="xxsmall"\n                            justifyContent="center"\n                        >\n                            <Play.Icon name="HelpIcon" />\n                        </Box>\n                    </Tooltip>\n                </Split>\n\n                <Stack space="small">\n                    <TextBlock>Attendees</TextBlock>\n                    <TextBlock size="xxlarge">10</TextBlock>\n                </Stack>\n            </Stack>\n        </Box>\n\n        <Box borderRadius="xsmall" shadow="medium" padding="medium">\n            <Stack space="medium">\n                <Split>\n                    <Box\n                        borderRadius="full"\n                        w={32}\n                        h={32}\n                        bgColor="rgb(231, 227, 255)"\n                        display="flex"\n                        alignItems="center"\n                        justifyContent="center"\n                    >\n                        <Play.Icon name="ReadIcon" color="rgb(81, 64, 201)" />\n                    </Box>\n\n                    <Tooltip label="Lorem ipsum dolorem sit amet.">\n                        <Box\n                            borderRadius="full"\n                            w={20}\n                            h={20}\n                            bgColor="grey50"\n                            display="flex"\n                            alignItems="center"\n                            padding="xxsmall"\n                            justifyContent="center"\n                        >\n                            <Play.Icon name="HelpIcon" />\n                        </Box>\n                    </Tooltip>\n                </Split>\n\n                <Stack space="small">\n                    <TextBlock>Active Attendees</TextBlock>\n                    <TextBlock size="xxlarge">5</TextBlock>\n                </Stack>\n            </Stack>\n        </Box>\n\n        <Box borderRadius="xsmall" shadow="medium" padding="medium">\n            <Stack space="medium">\n                <Split>\n                    <Box\n                        borderRadius="full"\n                        w={32}\n                        h={32}\n                        bgColor="rgb(224, 236, 248)"\n                        display="flex"\n                        alignItems="center"\n                        justifyContent="center"\n                    >\n                        <Play.Icon name="CalendarIcon" color="rgb(1, 113, 224)" />\n                    </Box>\n\n                    <Tooltip label="Lorem ipsum dolorem sit amet.">\n                        <Box\n                            borderRadius="full"\n                            w={20}\n                            h={20}\n                            bgColor="grey50"\n                            display="flex"\n                            alignItems="center"\n                            padding="xxsmall"\n                            justifyContent="center"\n                        >\n                            <Play.Icon name="HelpIcon" />\n                        </Box>\n                    </Tooltip>\n                </Split>\n\n                <Stack space="small">\n                    <TextBlock>Messages Sent</TextBlock>\n                    <TextBlock size="xxlarge">120</TextBlock>\n                </Stack>\n            </Stack>\n        </Box>\n    </Tiles>\n</Box>\n')),Object(i.b)("h3",null,"Community Inbox"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},'<Box padding={["none", "medium"]}>\n    <Box\n        borderRadius="xsmall"\n        shadow={["none", "medium"]}\n        borderWidth={[0, 1]}\n        borderColor="grey150"\n        maxW={400}\n    >\n        <Stack dividers>\n            <Box padding="medium">\n                <Columns space={["xsmall", "small"]} verticalAlign="center">\n                    <Column width="content">\n                        <Box position="relative" w={50} h={50}>\n                            <Box\n                                position="absolute"\n                                bottom={0}\n                                left={0}\n                                borderWidth={2}\n                                borderColor="grey50"\n                                borderRadius="full"\n                            >\n                                <Avatar\n                                    size="xs"\n                                    src="https://images.unibuddy.co/35x35/smart/59b89d2729dc9a000cf0eacc.jpg"\n                                />\n                            </Box>\n                            <Box\n                                position="absolute"\n                                top={0}\n                                right={0}\n                                borderWidth={2}\n                                borderColor="grey50"\n                                borderRadius="full"\n                            >\n                                <Avatar\n                                    size="xs"\n                                    src="https://images.unibuddy.co/35x35/smart/607d2e4d6ce23635d3cfcc75.jpg"\n                                />\n                            </Box>\n                        </Box>\n                    </Column>\n                    <Column>\n                        <Stack space="small">\n                            <Split>\n                                <Text weight="600" size="large" truncate>\n                                    international-advice\n                                </Text>\n                                <Text size="small" tone="secondary" truncate>\n                                    20 minutes\n                                </Text>\n                            </Split>\n                            <Split verticalAlign="center">\n                                <Box paddingRight="medium">\n                                    <Text truncate>\n                                        Amy: Totally getting where you are coming from.\n                                    </Text>\n                                </Box>\n                                <Badge color="danger">12</Badge>\n                            </Split>\n                        </Stack>\n                    </Column>\n                </Columns>\n            </Box>\n            <Box padding="medium">\n                <Columns space={["xsmall", "small"]} verticalAlign="center">\n                    <Column width="content">\n                        <Box position="relative" w={50} h={50}>\n                            <Box\n                                position="absolute"\n                                bottom={0}\n                                left={0}\n                                borderWidth={2}\n                                borderColor="grey50"\n                                borderRadius="full"\n                            >\n                                <Avatar\n                                    size="xs"\n                                    src="https://images.unibuddy.co/35x35/smart/59b89d2729dc9a000cf0eacc.jpg"\n                                />\n                            </Box>\n                            <Box\n                                position="absolute"\n                                top={0}\n                                right={0}\n                                borderWidth={2}\n                                borderColor="grey50"\n                                borderRadius="full"\n                            >\n                                <Avatar\n                                    size="xs"\n                                    src="https://images.unibuddy.co/35x35/smart/607d2e4d6ce23635d3cfcc75.jpg"\n                                />\n                            </Box>\n                        </Box>\n                    </Column>\n                    <Column>\n                        <Stack space="small">\n                            <Split>\n                                <Text weight="600" size="large" truncate>\n                                    staff-ask-anything\n                                </Text>\n                                <Text size="small" tone="secondary" truncate>\n                                    4 weeks ago\n                                </Text>\n                            </Split>\n                            <Split verticalAlign="center">\n                                <Box>\n                                    <Text truncate>Thomas: Something you should be aware of.</Text>\n                                </Box>\n                            </Split>\n                        </Stack>\n                    </Column>\n                </Columns>\n            </Box>\n        </Stack>\n    </Box>\n</Box>\n')),Object(i.b)("h3",null,"Two Button Collapse"),Object(i.b)("p",null,"This pattern is commonly used in forms, sadly the use of the ",Object(i.b)("inlineCode",{parentName:"p"},"gap")," prop means this one isn't react native compatible.\nOn a larger viewport the primary button is on the right, but for smaller viewports the primary button is on top."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},'<View flexDirection={["column-reverse", "row"]} gap="small">\n    <Button block>Cancel</Button>\n    <Button block color="primary">\n        Submit\n    </Button>\n</View>\n')))}u.isMDXComponent=!0},cxan:function(n,e,t){"use strict";function o(){return(o=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n}).apply(this,arguments)}t.d(e,"a",(function(){return o}))}},[["LvnV",0,1]]]);