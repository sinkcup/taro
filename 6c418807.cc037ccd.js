(window.webpackJsonp=window.webpackJsonp||[]).push([[583],{1479:function(e,t,n){"use strict";n.d(t,"a",(function(){return j})),n.d(t,"b",(function(){return p}));var b=n(0),c=n.n(b);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);t&&(b=b.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,b)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,b,c=function(e,t){if(null==e)return{};var n,b,c={},r=Object.keys(e);for(b=0;b<r.length;b++)n=r[b],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(b=0;b<r.length;b++)n=r[b],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var O=c.a.createContext({}),d=function(e){var t=c.a.useContext(O),n=t;return e&&(n="function"==typeof e?e(t):a({},t,{},e)),n},j=function(e){var t=d(e.components);return c.a.createElement(O.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},u=Object(b.forwardRef)((function(e,t){var n=e.components,b=e.mdxType,r=e.originalType,l=e.parentName,O=o(e,["components","mdxType","originalType","parentName"]),j=d(n),u=b,p=j["".concat(l,".").concat(u)]||j[u]||i[u]||r;return n?c.a.createElement(p,a({ref:t},O,{components:n})):c.a.createElement(p,a({ref:t},O))}));function p(e,t){var n=arguments,b=t&&t.mdxType;if("string"==typeof e||b){var r=n.length,l=new Array(r);l[0]=u;var a={};for(var o in t)hasOwnProperty.call(t,o)&&(a[o]=t[o]);a.originalType=e,a.mdxType="string"==typeof e?e:b,l[1]=a;for(var O=2;O<r;O++)l[O]=n[O];return c.a.createElement.apply(null,l)}return c.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},722:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return d}));var b=n(1),c=n(9),r=(n(0),n(1479)),l={title:"Ad",sidebar_label:"Ad"},a={id:"version-2.2.1/components/open/ad",title:"Ad",description:"Banner \u5e7f\u544a",source:"@site/versioned_docs/version-2.2.1/components/open/ad.md",permalink:"/taro/docs/components/open/ad",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.2.1/components/open/ad.md",version:"2.2.1",sidebar_label:"Ad",sidebar:"version-2.2.1/components",previous:{title:"Canvas",permalink:"/taro/docs/components/canvas/canvas"},next:{title:"OfficialAccount",permalink:"/taro/docs/components/open/official-account"}},o=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"AdProps",id:"adprops",children:[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]},{value:"onErrorEventDetail",id:"onerroreventdetail",children:[]},{value:"AdErrCode",id:"aderrcode",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",children:[]}],O={rightToc:o};function d(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(b.a)({},O,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Banner \u5e7f\u544a"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/ad.html"}),"\u53c2\u8003\u6587\u6863"))),Object(r.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(r.b)("pre",null,Object(r.b)("code",Object(b.a)({parentName:"pre"},{className:"language-tsx"}),"ComponentType<AdProps>\n")),Object(r.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(r.b)("pre",null,Object(r.b)("code",Object(b.a)({parentName:"pre"},{className:"language-tsx"}),"class App extends Component {\n  render () {\n    return (\n      <Ad\n        unit-id=''\n        ad-intervals={60}\n        onLoad={() => console.log('ad onLoad')}\n        onError={() => console.log('ad onError')}\n        onClose={() => console.log('ad onClose')}\n      />\n    )\n  }\n}\n")),Object(r.b)("h2",{id:"adprops"},"AdProps"),Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"\u53c2\u6570"),Object(r.b)("th",null,"\u7c7b\u578b"),Object(r.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(r.b)("th",null,"\u8bf4\u660e"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"unitId"),Object(r.b)("td",null,Object(r.b)("code",null,"string")),Object(r.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(r.b)("td",null,"\u5e7f\u544a\u5355\u5143id\uff0c\u53ef\u5728",Object(r.b)("a",{href:"https://mp.weixin.qq.com/"},"\u5c0f\u7a0b\u5e8f\u7ba1\u7406\u540e\u53f0"),"\u7684\u6d41\u91cf\u4e3b\u6a21\u5757\u65b0\u5efa")),Object(r.b)("tr",null,Object(r.b)("td",null,"adIntervals"),Object(r.b)("td",null,Object(r.b)("code",null,"number")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u5e7f\u544a\u81ea\u52a8\u5237\u65b0\u7684\u95f4\u9694\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3a\u79d2\uff0c\u53c2\u6570\u503c\u5fc5\u987b\u5927\u4e8e\u7b49\u4e8e30\uff08\u8be5\u53c2\u6570\u4e0d\u4f20\u5165\u65f6 Banner \u5e7f\u544a\u4e0d\u4f1a\u81ea\u52a8\u5237\u65b0\uff09")),Object(r.b)("tr",null,Object(r.b)("td",null,"onLoad"),Object(r.b)("td",null,Object(r.b)("code",null,"BaseEventOrigFunction<any>")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u5e7f\u544a\u52a0\u8f7d\u6210\u529f\u7684\u56de\u8c03")),Object(r.b)("tr",null,Object(r.b)("td",null,"onError"),Object(r.b)("td",null,Object(r.b)("code",null,"BaseEventOrigFunction<onErrorEventDetail>")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u5f53\u5e7f\u544a\u53d1\u751f\u9519\u8bef\u65f6\uff0c\u89e6\u53d1\u7684\u4e8b\u4ef6\uff0c\u53ef\u4ee5\u901a\u8fc7\u8be5\u4e8b\u4ef6\u83b7\u53d6\u9519\u8bef\u7801\u53ca\u539f\u56e0\uff0c\u4e8b\u4ef6\u5bf9\u8c61event.detail = ","{errCode: 1002}")),Object(r.b)("tr",null,Object(r.b)("td",null,"onClose"),Object(r.b)("td",null,Object(r.b)("code",null,"BaseEventOrigFunction<any>")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u5e7f\u544a\u5173\u95ed\u7684\u56de\u8c03")))),Object(r.b)("h3",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"API"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"H5"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"AdProps.unitId"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"AdProps.adIntervals"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"AdProps.onLoad"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"AdProps.onError"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"AdProps.onClose"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))))),Object(r.b)("h3",{id:"onerroreventdetail"},"onErrorEventDetail"),Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"\u53c2\u6570"),Object(r.b)("th",null,"\u7c7b\u578b"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"errCode"),Object(r.b)("td",null,Object(r.b)("code",null,"1000 | 1001 | 1002 | 1003 | 1004 | 1005 | 1006 | 1007 | 1008"))))),Object(r.b)("h3",{id:"aderrcode"},"AdErrCode"),Object(r.b)("p",null,"\u5e7f\u544a\u9519\u8bef\u7801"),Object(r.b)("p",null,"\u9519\u8bef\u7801\u662f\u901a\u8fc7onError\u83b7\u53d6\u5230\u7684\u9519\u8bef\u4fe1\u606f\u3002\u8c03\u8bd5\u671f\u95f4\uff0c\u53ef\u4ee5\u901a\u8fc7\u5f02\u5e38\u8fd4\u56de\u6765\u6355\u83b7\u4fe1\u606f\u3002\n\u5728\u5c0f\u7a0b\u5e8f\u53d1\u5e03\u4e0a\u7ebf\u4e4b\u540e\uff0c\u5982\u679c\u9047\u5230\u5f02\u5e38\u95ee\u9898\uff0c\u53ef\u4ee5\u5728",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"https://mp.weixin.qq.com/"}),"\u201c\u8fd0\u7ef4\u4e2d\u5fc3\u201c"),"\u91cc\u9762\u641c\u5bfb\u9519\u8bef\u65e5\u5fd7\uff0c\u8fd8\u53ef\u4ee5\u9488\u5bf9\u5f02\u5e38\u8fd4\u56de\u52a0\u4e0a\u9002\u5f53\u7684\u76d1\u63a7\u4fe1\u606f\u3002"),Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"\u53c2\u6570"),Object(r.b)("th",{style:{textAlign:"center"}},"\u5f02\u5e38\u60c5\u51b5"),Object(r.b)("th",{style:{textAlign:"center"}},"\u7406\u7531"),Object(r.b)("th",{style:{textAlign:"center"}},"\u89e3\u51b3\u65b9\u6848"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"1000"),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,"\u540e\u7aef\u9519\u8bef\u8c03\u7528\u5931\u8d25")),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,"\u8be5\u9879\u9519\u8bef\u4e0d\u662f\u5f00\u53d1\u8005\u7684\u5f02\u5e38\u60c5\u51b5")),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,"\u4e00\u822c\u60c5\u51b5\u4e0b\u5ffd\u7565\u4e00\u6bb5\u65f6\u95f4\u5373\u53ef\u6062\u590d\u3002"))),Object(r.b)("tr",null,Object(r.b)("td",null,"1001"),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,"\u53c2\u6570\u9519\u8bef")),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,"\u4f7f\u7528\u65b9\u6cd5\u9519\u8bef")),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,"\u53ef\u4ee5\u524d\u5f80 developers.weixin.qq.com \u786e\u8ba4\u5177\u4f53\u6559\u7a0b\uff08\u5c0f\u7a0b\u5e8f\u548c\u5c0f\u6e38\u620f\u5206\u522b\u6709\u5404\u81ea\u7684\u6559\u7a0b\uff0c\u53ef\u4ee5\u5728\u9876\u90e8\u9009\u9879\u4e2d\uff0c\u201c\u8bbe\u8ba1\u201d\u4e00\u680f\u7684\u53f3\u4fa7\u8fdb\u884c\u5207\u6362\u3002"))),Object(r.b)("tr",null,Object(r.b)("td",null,"1002"),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,"\u5e7f\u544a\u5355\u5143\u65e0\u6548")),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,"\u53ef\u80fd\u662f\u62fc\u5199\u9519\u8bef\u3001\u6216\u8005\u8bef\u7528\u4e86\u5176\u4ed6APP\u7684\u5e7f\u544aID")),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,"\u8bf7\u91cd\u65b0\u524d\u5f80 mp.weixin.qq.com \u786e\u8ba4\u5e7f\u544a\u4f4dID\u3002"))),Object(r.b)("tr",null,Object(r.b)("td",null,"1003"),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,"\u5185\u90e8\u9519\u8bef")),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,"\u8be5\u9879\u9519\u8bef\u4e0d\u662f\u5f00\u53d1\u8005\u7684\u5f02\u5e38\u60c5\u51b5")),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,"\u4e00\u822c\u60c5\u51b5\u4e0b\u5ffd\u7565\u4e00\u6bb5\u65f6\u95f4\u5373\u53ef\u6062\u590d\u3002"))),Object(r.b)("tr",null,Object(r.b)("td",null,"1004"),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,"\u65e0\u5408\u9002\u7684\u5e7f\u544a")),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,"\u5e7f\u544a\u4e0d\u662f\u6bcf\u4e00\u6b21\u90fd\u4f1a\u51fa\u73b0\uff0c\u8fd9\u6b21\u6ca1\u6709\u51fa\u73b0\u53ef\u80fd\u662f\u7531\u4e8e\u8be5\u7528\u6237\u4e0d\u9002\u5408\u6d4f\u89c8\u5e7f\u544a")),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,"\u5c5e\u4e8e\u6b63\u5e38\u60c5\u51b5\uff0c\u4e14\u5f00\u53d1\u8005\u9700\u8981\u9488\u5bf9\u8fd9\u79cd\u60c5\u51b5\u505a\u5f62\u6001\u4e0a\u7684\u517c\u5bb9\u3002"))),Object(r.b)("tr",null,Object(r.b)("td",null,"1005"),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,"\u5e7f\u544a\u7ec4\u4ef6\u5ba1\u6838\u4e2d")),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,"\u4f60\u7684\u5e7f\u544a\u6b63\u5728\u88ab\u5ba1\u6838\uff0c\u65e0\u6cd5\u5c55\u73b0\u5e7f\u544a")),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,"\u8bf7\u524d\u5f80 mp.weixin.qq.com \u786e\u8ba4\u5ba1\u6838\u72b6\u6001\uff0c\u4e14\u5f00\u53d1\u8005\u9700\u8981\u9488\u5bf9\u8fd9\u79cd\u60c5\u51b5\u505a\u5f62\u6001\u4e0a\u7684\u517c\u5bb9\u3002"))),Object(r.b)("tr",null,Object(r.b)("td",null,"1006"),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,"\u5e7f\u544a\u7ec4\u4ef6\u88ab\u9a73\u56de")),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,"\u4f60\u7684\u5e7f\u544a\u5ba1\u6838\u5931\u8d25\uff0c\u65e0\u6cd5\u5c55\u73b0\u5e7f\u544a")),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,"\u8bf7\u524d\u5f80 mp.weixin.qq.com \u786e\u8ba4\u5ba1\u6838\u72b6\u6001\uff0c\u4e14\u5f00\u53d1\u8005\u9700\u8981\u9488\u5bf9\u8fd9\u79cd\u60c5\u51b5\u505a\u5f62\u6001\u4e0a\u7684\u517c\u5bb9\u3002"))),Object(r.b)("tr",null,Object(r.b)("td",null,"1007"),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,"\u5e7f\u544a\u7ec4\u4ef6\u88ab\u5c01\u7981")),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,"\u4f60\u7684\u5e7f\u544a\u80fd\u529b\u5df2\u7ecf\u88ab\u5c01\u7981\uff0c\u5c01\u7981\u671f\u95f4\u65e0\u6cd5\u5c55\u73b0\u5e7f\u544a")),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,"\u8bf7\u524d\u5f80 mp.weixin.qq.com \u786e\u8ba4\u5c0f\u7a0b\u5e8f\u5e7f\u544a\u5c01\u7981\u72b6\u6001\u3002"))),Object(r.b)("tr",null,Object(r.b)("td",null,"1008"),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,"\u5e7f\u544a\u5355\u5143\u5df2\u5173\u95ed")),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,"\u8be5\u5e7f\u544a\u4f4d\u7684\u5e7f\u544a\u80fd\u529b\u5df2\u7ecf\u88ab\u5173\u95ed")),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,"\u8bf7\u524d\u5f80 mp.weixin.qq.com \u91cd\u65b0\u6253\u5f00\u5bf9\u5e94\u5e7f\u544a\u4f4d\u7684\u5c55\u73b0\u3002"))))),Object(r.b)("h2",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"API"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"H5"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"Ad"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))))))}d.isMDXComponent=!0}}]);