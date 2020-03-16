(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{JbBL:function(e,t,r){"use strict";r.r(t),r.d(t,"default",function(){return h});var o=r("z3IF"),n=r("2Fjn"),a=(r("mXGw"),r("SAVP")),p=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",t)}},c=p("Table"),i=p("TableHead"),b=p("TableRow"),l=p("TableHeader"),d=p("TableBody"),s=p("TableCell"),m={},u="wrapper";function h(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(a.b)(u,Object(o.a)({},m,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",null,"Error Reporting"),Object(a.b)("p",null,"We are currently using ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://raygun.com/"}),"raygun")," on the front end for automated error reporting.\nEach front end app has its own dashboard on raygun. Errors are automatically segmented\nin to different apps by using different API keys."),Object(a.b)("h2",null,"Getting Started"),Object(a.b)("p",null,"Each app is wrapped with an ",Object(a.b)("inlineCode",{parentName:"p"},"ErrorReporting")," component at the top of the application root. This component catches window errors and automatically reports them to raygun. It also exposes the ",Object(a.b)("inlineCode",{parentName:"p"},"reportError")," method to its children via the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://reactjs.org/docs/context.html"}),"React context api"),". You can access this functionality via either the ",Object(a.b)("inlineCode",{parentName:"p"},"useErrorReporting")," hook or ",Object(a.b)("inlineCode",{parentName:"p"},"withErrorReporting")," hoc. As a last resort you can directly access the value of the context directly but this is not recommended."),Object(a.b)("h3",null,"Use error reporting in a functional component"),Object(a.b)("p",null,"We are using the ",Object(a.b)("inlineCode",{parentName:"p"},"useErrorReporting")," hook to get access to the ",Object(a.b)("inlineCode",{parentName:"p"},"reportError")," method."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),'import React from "react";\nimport useErrorReporting from "@unibuddy/machop/General/components/ErrorReporting/useErrorReporting";\n\nconst CreateTodoButton = ({createTodo}) => {\n    const {reportError} = useErrorReporting();\n    const onClick = async () => {\n        try {\n            await createTodo();\n        } catch (error) {\n            reportError(error);\n        }\n    };\n\n    return <button onClick={onClick}>Create Todo</button>;\n};\n\nexport default CreateTodoButton;\n')),Object(a.b)("h3",null,"Use error reporting in a class component"),Object(a.b)("p",null,"We wrap our component using the ",Object(a.b)("inlineCode",{parentName:"p"},"withErrorReporting")," HOC which exposes the ",Object(a.b)("inlineCode",{parentName:"p"},"reportError")," method on the ",Object(a.b)("inlineCode",{parentName:"p"},"errorReporting")," prop."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),'import React from "react";\nimport {graphql} from "react-apollo";\nimport compose from "lodash/flowright";\nimport withErrorReporting from "@unibuddy/machop/General/components/ErrorReporting/withErrorReporting";\n\nclass CreateTodoButtonComponent extends React.Component {\n    onClick = async () => {\n        try {\n            await this.props.createTodo();\n        } catch (error) {\n            this.props.errorReporting.reportError(error)\n        }\n    };\n\n    render() {\n        return <button onClick={this.onClick}>Create Todo</button>;\n    }\n};\n\nconst CreateTodoButton compose(\n    withErrorReporting,\n    graphql(createTodoMutation, {name: "createTodo"}),\n)(CreateTodoButtonComponent);\n\nexport default CreateTodoButton;\n')),Object(a.b)("h2",null,"API"),Object(a.b)("h3",null,"reportError"),Object(a.b)("p",null,"It accepts any ",Object(a.b)("inlineCode",{parentName:"p"},"Error")," as the first paramater and an optional second parameter whichis a plain javascript object with the following optional fields:"),Object(a.b)(c,{mdxType:"Table"},Object(a.b)(i,{mdxType:"TableHead"},Object(a.b)(b,{mdxType:"TableRow"},Object(a.b)(l,{mdxType:"TableHeader"},"Name"),Object(a.b)(l,{mdxType:"TableHeader"},"Type"),Object(a.b)(l,{mdxType:"TableHeader"},"Required"),Object(a.b)(l,{mdxType:"TableHeader"},"Default"))),Object(a.b)(d,{mdxType:"TableBody"},Object(a.b)(b,{mdxType:"TableRow"},Object(a.b)(s,{mdxType:"TableCell"},"tags"),Object(a.b)(s,{mdxType:"TableCell"},"Array<String>"),Object(a.b)(s,{mdxType:"TableCell"},"No"),Object(a.b)(s,{mdxType:"TableCell"},"[]")))))}h.isMDXComponent=!0},jww1:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/how-to/handling-errors",function(){var e=r("JbBL");return{page:e.default||e}}])}},[["jww1",1,0]]]);