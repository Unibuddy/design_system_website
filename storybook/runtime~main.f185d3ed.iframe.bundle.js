(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){for(var[chunkIds,fn,priority]=deferred[i],fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({271:"Forms-OptionGroup-OptionGroup-stories",312:"General-Pagination-Pagination-stories",475:"Forms-Switch-Switch-stories",567:"Overlays-ToastProvider-ToastProvider-stories",908:"Forms-RadioButtonGroup-RadioButtonGroup-stories",923:"General-Panel-Panel-stories",1284:"Layout-Box-Box-stories",1502:"General-Accordion-Accordion-stories",2207:"Forms-ErrorMessage-ErrorMessage-stories",2700:"General-ColorPanel-ColorPanel-stories",2757:"Forms-CheckBox-CheckBox-stories",2856:"General-Collapsible-Collapsible-stories",3135:"Typography-TextLine-TextLine-stories",3367:"Overlays-FormPrompt-FormPrompt-stories",3391:"General-Logo-Logo-stories",3691:"General-Shimmer-Shimmer-stories",3778:"Overlays-Drawer-Drawer-stories",4491:"Forms-CheckBoxGroup-CheckBoxGroup-stories",4929:"Forms-Autocomplete-Autocomplete-stories",5127:"Typography-TextBlock-TextBlock-stories",5224:"Typography-Heading-Heading-stories",5362:"Layout-Stack-Stack-stories",5658:"General-Tooltip-Tooltip-stories",5814:"General-Avatar-Avatar-stories",5855:"General-Transfer-Transfer-stories",6215:"General-LoadingButton-LoadingButton-stories",7011:"Forms-Forms-stories",7167:"Forms-Label-Label-stories",7525:"Layout-Inline-Inline-stories",7643:"General-ToggleSection-ToggleSection-stories",7708:"Overlays-Dialog-Dialog-stories",7819:"General-ButtonGroup-ButtonGroup-stories",8079:"Overlays-Alert-Alert-stories",8414:"Forms-Rating-Rating-stories",8578:"Icons-mdx",8722:"General-Button-Button-stories",9090:"General-Accordion-AccordionItem-stories",9178:"Overlays-ConfirmPrompt-ConfirmPrompt-stories",9383:"Overlays-ConfirmTextPrompt-ConfirmTextPrompt-stories",9523:"Forms-Toggle-Toggle-stories",9568:"General-Table-Table-stories",9627:"Flags-mdx",9902:"General-Badge-Badge-stories",9919:"Layout-Columns-Columns-stories"}[chunkId]||chunkId)+"."+{271:"c9b8d98e",312:"d763a96d",475:"79a12647",567:"7f03a1e4",908:"b122544c",923:"e7b29d3f",1069:"309d0710",1284:"c82ac633",1502:"46216963",1941:"5665b0e7",2207:"ede766c6",2275:"9dd85893",2700:"cc5e1d47",2757:"3e6b912b",2856:"0fbe7832",3135:"0a7995fc",3367:"d263f569",3391:"e0d7b958",3691:"29063364",3778:"cea76797",3815:"c8857eee",3941:"7a68e3c7",4451:"df8b4347",4491:"c2beb144",4605:"89e042e9",4929:"fcf60db6",5127:"b5095641",5224:"ca5b5cbd",5362:"15fa29ad",5490:"12b36c66",5528:"bf05a849",5587:"a9932b28",5594:"65679a66",5658:"bc6c0f2d",5814:"ecb0e6c1",5855:"2b557107",5892:"46e50a23",6215:"cf50f973",6453:"30607bb8",7011:"8fb6334c",7167:"b799bac1",7306:"61ebddd2",7525:"02763880",7643:"276aa919",7708:"c0fbabcd",7819:"d8b70ec3",7998:"5052b5a6",8079:"e7eaf6d2",8267:"58796811",8414:"83121da1",8578:"adb992d7",8664:"f17676a3",8722:"e1eb7475",8813:"0aa3261c",9090:"dae5aa14",9145:"bd368f92",9178:"c1df8bd4",9383:"a4998c10",9523:"e3e92989",9568:"c9841834",9627:"c530b665",9902:"16006134",9919:"d991022a"}[chunkId]+".iframe.bundle.js"),__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.hmd=module=>((module=Object.create(module)).children||(module.children=[]),Object.defineProperty(module,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+module.id)}}),module),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="@unibuddy/patron:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","@unibuddy/patron:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{var installedChunks={1303:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(1303!=chunkId){var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,[chunkIds,moreModules,runtime]=data,i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=self.webpackChunk_unibuddy_patron=self.webpackChunk_unibuddy_patron||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();