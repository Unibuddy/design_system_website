_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{CH9N:function(e,n,t){"use strict";function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}t.d(n,"a",(function(){return r}))},Km8e:function(e,n,t){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},"WDl/":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/forms/date-input",function(){return t("zY/u")}])},ZVZ0:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t("ERkP"),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),d=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"===typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=d(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=d(t),b=r,m=u["".concat(l,".").concat(b)]||u[b]||s[b]||o;return t?a.a.createElement(m,i(i({ref:n},p),{},{components:t})):a.a.createElement(m,i({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"===typeof e||r){var o=t.length,l=new Array(o);l[0]=b;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"===typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},"wHK/":function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}t.d(n,"a",(function(){return r}))},"zY/u":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return u}));var r=t("CH9N"),a=t("wHK/"),o=t("ERkP"),l=t.n(o),i=t("ZVZ0"),c=(l.a.createElement,{});function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",null,"DateInput"),Object(i.b)("p",null,"DateInput is a lightweight wrapper around the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://reactdatepicker.com/"}),"react-datepicker")," library."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'import {DateInput} from "@unibuddy/patron";\n')),Object(i.b)("h2",null,"Controlled use"),Object(i.b)("p",null,"Just like the native element, DateInput accepts ",Object(i.b)("inlineCode",{parentName:"p"},"onChange")," and ",Object(i.b)("inlineCode",{parentName:"p"},"value")," props. Value must either be ",Object(i.b)("inlineCode",{parentName:"p"},"null")," or an instance of a Date."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"const [value, setValue] = useState(() => new Date());\nconst onChange = event => {\n    setValue(event.target.value);\n};\n<DateInput onChange={onChange} value={value} />;\n")),Object(i.b)("h2",null,"Use in a Form"),Object(i.b)("p",null,"To use with a Form, wrap DateInput with a FormGroup component and give it a ",Object(i.b)("inlineCode",{parentName:"p"},"name")," prop."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"render=true",render:"true"}),'<Form> \n    <Stack space={"medium"}>\n        <FormGroup label="Date Picker">\n            <DateInput name="datePicker" placeholder={"Select Date"}/>\n        </FormGroup>\n        <FormGroup label="Month Picker">\n             <DateInput name="monthPicker" showMonthYearPicker dateFormat="MM/yyyy" placeholder={"Select Date"}/>\n        </FormGroup> \n        <FormGroup label="Full Month Picker">\n             <DateInput name="fullMonthPicker" showFullMonthYearPicker showMonthYearPicker dateFormat="MM/yyyy" placeholder={"Select Date"}/>\n        </FormGroup>    \n        <FormGroup label="Year Picker">\n             <DateInput name="yearPicker" showYearPicker dateFormat="yyy" placeholder={"Select Date"}/>\n        </FormGroup>\n        <FormGroup label="Date along with time picker">\n             <DateInput name="dateTimePicker" showTimeSelect timeIntervals={15} dateFormat="MMMM d, yyyy h:mm aa" placeholder={"Select Date"}/>\n        </FormGroup>\n        <FormGroup label="Date picker with month dropdown">\n             <DateInput name="monthDropdown" showMonthDropdown placeholder={"Select Date"}/>\n        </FormGroup>\n        <FormGroup label="Date picker with year dropdown">\n             <DateInput name="yearDropdown" showYearDropdown placeholder={"Select Date"}/>\n        </FormGroup>\n    </Stack>\n</Form>\n')),Object(i.b)("h2",null,"Readiness"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"render functional",render:!0,functional:!0}),'function Render() {\n    const readiness = [\n        {\n            key: "Native",\n            ready: false,\n        },\n\n        {\n            key: "Theme",\n            ready: true,\n        },\n        {\n            key: "Typescript",\n            ready: true,\n        },\n    ];\n\n    return (\n        <Inline space="medium">\n            {readiness.map(param => (\n                <Box\n                    bgColor={param.ready ? "#43A047" : "#E53935"}\n                    borderRadius="large"\n                    padding="small"\n                >\n                    <Inline space="small" verticalAlign="center">\n                        <Text color="white" weight="bold">\n                            {param.key}\n                        </Text>\n                    </Inline>\n                </Box>\n            ))}\n        </Inline>\n    );\n}\n')),Object(i.b)("h2",null,"Theming"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"DateInput")," inherits from the default theme but you can expand on it to create your own."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"render",render:!0}),'function Render() {\n    const customDateInputTheme = {\n        DateInput: {\n            fontFamily: "Nunito",\n            fontWeight: "400",\n            fontSize: "13px",\n            color: "#3949AB",\n            borderColor: "#edefff",\n            backgroundColor: "#edefff",\n            variants: {\n                active: {\n                    backgroundColor: "#3949AB",\n                    color: "#ffffff",\n                },\n                activeHover: {\n                    backgroundColor: "#5C6BC0",\n                },\n                hover: {\n                    backgroundColor: "#edefff",\n                },\n            },\n        },\n    };\n\n    return (\n        <DesignSystemProvider theme={customDateInputTheme}>  \n            <Inline space="large">\n               <DateInput showMonthYearPicker inline placeholder={"Select"}/>\n               <DateInput inline placeholder={"Select"}/>\n               <DateInput inline placeholder={"Select"} showTimeSelect/>\n            </Inline>\n        </DesignSystemProvider>\n    );\n}\n')),Object(i.b)("h2",null,"All Properties"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"render functional",render:!0,functional:!0}),'function Render() {\n    const props = [\n        {\n            key: "id",\n            type: "string",\n            description: "id",\n            default: "undefined",\n        },\n        {\n            key: "dateFormat",\n            type: "string",\n            description: "Date format e.g \'yyyy/MM/dd\'",\n            default: "MM/dd/yyyy",\n        },\n        {\n            key: "autoFocus",\n            type: \'boolean\',\n            description: "Automatically focuses the input on mount",\n            default: "false",\n        },\n        {\n            key: "disabled",\n            type: "boolean",\n            description: "Whether the date picker should be disabled.",\n            default: "false",\n        },\n        {\n            key: "showMonthDropdown",\n            type: "boolean",\n            description: "Shows month dropdown",\n            default: "false",\n        },\n        {\n            key: "showMonthYearPicker",\n            type: "boolean",\n            description: "Shows month(short name) picker year wise without dates",\n            default: "undefined",\n        },\n        {\n            key: "showFullMonthYearPicker",\n            type: "boolean",\n            description: "Shows month (full name) picker year wise without dates. Use along with showMonthYearPicker",\n            default: "undefined",\n        },\n        {\n            key: "showYearPicker",\n            type: "boolean",\n            description: "Shows year picker",\n            default: "undefined",\n        },\n        {\n            key: "showYearDropdown",\n            type: "boolean",\n            description: "Show year dropdown",\n            default: "false",\n        },\n        {\n            key: "showTimeSelect",\n            type: "boolean",\n            description: "Shows time select",\n            default: "false",\n        },\n        {\n            key: "timeFormat",\n            type: "string",\n            description: "When showTimeSelect is enabled, Select options are shown as per time format provided",\n            default: "HH:mm",\n        },\n        {\n            key: "timeIntervals",\n            type: "string",\n            description: "time intervals in minutes, When showTimeSelect is enabled",\n            default: "30",\n        },\n        {\n            key: "timeCaption",\n            type: "string",\n            description: "Select label, When showTimeSelect is enabled",\n            default: "Time",\n        },\n        {\n            key: "minDate",\n            type: "Date | undefined",\n            description: "start date of the calender",\n            default: "null",\n        },\n        {\n            key: "maxDate",\n            type: "Date | undefined",\n            description: "end date of the calender",\n            default: "null",\n        },\n        {\n            key: "dropdownMode",\n            type: "\'scroll\' | \'select\'",\n            description: "when show year/month dropdown is enabled, type of mode can be provided by dropdownMode",\n            default: "select",\n        },\n        {\n            key: "todayButton",\n            type: "string",\n            description: "Text to navigate to current date button",\n            default: "Today",\n        },\n        {\n            key: "placeholder",\n            type: "string",\n            description: "placehoder",\n            default: "",\n        },\n        {\n            key: "popperPlacement",\n            type: "string",\n            description: "placement of the date selector popper",\n            default: "bottom-start",\n        },\n        {\n            key: "inline",\n            type: "boolean",\n            description: "if true, will keep the popper always open to select dates",\n            default: "false",\n        },\n        {\n            key: "value",\n            type: "Date | null",\n            description: "value to set",\n            default: "undefined",\n        },\n        {\n            key: "onChange",\n            type: "function",\n            description: "function triggered when date input is changed",\n            default: "undefined",\n        },\n        {\n            key: "onBlur",\n            type: "function",\n            description: "function triggered when date input is blurred",\n            default: "undefined",\n        },\n        {\n            key: "name",\n            type: "string",\n            description: "to be used by Form",\n            default: "undefined",\n        },\n        {\n            key: "hasError",\n            type: "string",\n            description: "reason of error to be assigned to aria-invalid",\n            default: "undefined",\n        },\n        {\n            key: "closeOnScroll",\n            type: "boolean",\n            description: "Closes popper when scroll",\n            default: "false",\n        },\n        {\n            key: "locale",\n            type: "string",\n            description: "Language code (only available by date-fns) for translation",\n            default: "undefined",\n        },\n    ];\n\n    const codeBlockStyle = {\n        fontSize: "14px",\n    };\n\n    return (\n        <Table bordered={true}>\n            <TableHead>\n                <TableRow>\n                    <TableHeader>Key</TableHeader>\n                    <TableHeader>Type</TableHeader>\n                    <TableHeader>Description</TableHeader>\n                    <TableHeader>Default</TableHeader>\n                </TableRow>\n            </TableHead>\n            <TableBody>\n                {props.map(prop => {\n                    return (\n                        <TableRow>\n                            <TableCell>\n                                <code style={codeBlockStyle}>{prop.key}</code>\n                            </TableCell>\n                            <TableCell>\n                                <code style={codeBlockStyle}>{prop.type}</code>\n                            </TableCell>\n                            <TableCell>\n                                <Text size="small">{prop.description}</Text>\n                            </TableCell>\n                            <TableCell>\n                                {prop.default.includes("<string>") ? (\n                                    <Text size="small">\n                                        {prop.default.replace("<string>-", "")}\n                                    </Text>\n                                ) : (\n                                    <code style={codeBlockStyle}>{prop.default}</code>\n                                )}\n                            </TableCell>\n                        </TableRow>\n                    );\n                })}\n            </TableBody>\n        </Table>\n    );\n}\n')))}p.isMDXComponent=!0;l.a.createElement;var d={};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)(p,{mdxType:"Readme"}))}u.isMDXComponent=!0}},[["WDl/",0,1]]]);