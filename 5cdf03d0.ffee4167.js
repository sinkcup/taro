(window.webpackJsonp=window.webpackJsonp||[]).push([[491],{1479:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return j}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),u=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},d=function(e){var t=u(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),d=u(n),O=a,j=d["".concat(c,".").concat(O)]||d[O]||p[O]||l;return n?r.a.createElement(j,o({ref:t},i,{components:n})):r.a.createElement(j,o({ref:t},i))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,c=new Array(l);c[0]=O;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var i=2;i<l;i++)c[i]=n[i];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},630:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return u}));var a=n(1),r=n(9),l=(n(0),n(1479)),c={title:"Taro.onBluetoothAdapterStateChange(callback)",sidebar_label:"onBluetoothAdapterStateChange"},o={id:"version-2.2.1/apis/device/bluetooth/onBluetoothAdapterStateChange",title:"Taro.onBluetoothAdapterStateChange(callback)",description:"\u76d1\u542c\u84dd\u7259\u9002\u914d\u5668\u72b6\u6001\u53d8\u5316\u4e8b\u4ef6",source:"@site/versioned_docs/version-2.2.1/apis/device/bluetooth/onBluetoothAdapterStateChange.md",permalink:"/taro/docs/apis/device/bluetooth/onBluetoothAdapterStateChange",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.2.1/apis/device/bluetooth/onBluetoothAdapterStateChange.md",version:"2.2.1",sidebar_label:"onBluetoothAdapterStateChange",sidebar:"version-2.2.1/API",previous:{title:"Taro.onBluetoothDeviceFound(callback)",permalink:"/taro/docs/apis/device/bluetooth/onBluetoothDeviceFound"},next:{title:"Taro.getConnectedBluetoothDevices(option)",permalink:"/taro/docs/apis/device/bluetooth/getConnectedBluetoothDevices"}},b=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Callback",id:"callback",children:[]},{value:"CallbackResult",id:"callbackresult",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],i={rightToc:b};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"\u76d1\u542c\u84dd\u7259\u9002\u914d\u5668\u72b6\u6001\u53d8\u5316\u4e8b\u4ef6"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.onBluetoothAdapterStateChange.html"}),"\u53c2\u8003\u6587\u6863"))),Object(l.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"(callback: Callback) => void\n")),Object(l.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(l.b)("h3",{id:"callback"},"Callback"),Object(l.b)("p",null,"\u84dd\u7259\u9002\u914d\u5668\u72b6\u6001\u53d8\u5316\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"(result: CallbackResult) => void\n")),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"result"),Object(l.b)("td",null,Object(l.b)("code",null,"CallbackResult"))))),Object(l.b)("h3",{id:"callbackresult"},"CallbackResult"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"available"),Object(l.b)("td",null,Object(l.b)("code",null,"boolean")),Object(l.b)("td",null,"\u84dd\u7259\u9002\u914d\u5668\u662f\u5426\u53ef\u7528")),Object(l.b)("tr",null,Object(l.b)("td",null,"discovering"),Object(l.b)("td",null,Object(l.b)("code",null,"boolean")),Object(l.b)("td",null,"\u84dd\u7259\u9002\u914d\u5668\u662f\u5426\u5904\u4e8e\u641c\u7d22\u72b6\u6001")))),Object(l.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"Taro.onBluetoothAdapterStateChange(function (res) {\n  console.log('adapterState changed, now is', res)\n})\n")),Object(l.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"API"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"H5"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Taro.onBluetoothAdapterStateChange"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}))))))}u.isMDXComponent=!0}}]);