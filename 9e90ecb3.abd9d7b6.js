(window.webpackJsonp=window.webpackJsonp||[]).push([[847],{1479:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=i.a.createContext({}),l=function(e){var t=i.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},d=function(e){var t=l(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},s=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),d=l(n),s=r,u=d["".concat(c,".").concat(s)]||d[s]||f[s]||a;return n?i.a.createElement(u,o({ref:t},b,{components:n})):i.a.createElement(u,o({ref:t},b))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var b=2;b<a;b++)c[b]=n[b];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},986:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(1),i=n(9),a=(n(0),n(1479)),c={title:"Taro.getConnectedWifi(OBJECT)",sidebar_label:"getConnectedWifi"},o={id:"version-1.3.42/apis/device/wifi/getConnectedWifi",title:"Taro.getConnectedWifi(OBJECT)",description:"\u4f7f\u7528\u65b9\u5f0f\u540c [`wx.getConnectedWifi`](https://developers.weixin.qq.com/miniprogram/dev/api/wx.getConnectedWifi.html)\uff0c\u652f\u6301 `Promise` \u5316\u4f7f\u7528\u3002",source:"@site/versioned_docs/version-1.3.42/apis/device/wifi/getConnectedWifi.md",permalink:"/taro/docs/1.3.42/apis/device/wifi/getConnectedWifi",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.3.42/apis/device/wifi/getConnectedWifi.md",version:"1.3.42",sidebar_label:"getConnectedWifi",sidebar:"version-1.3.42/API",previous:{title:"Taro.connectWifi(OBJECT)",permalink:"/taro/docs/1.3.42/apis/device/wifi/connectWifi"},next:{title:"Taro.getWifiList(OBJECT)",permalink:"/taro/docs/1.3.42/apis/device/wifi/getWifiList"}},p=[{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API\u652f\u6301\u5ea6",id:"api\u652f\u6301\u5ea6",children:[]}],b={rightToc:p};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u4f7f\u7528\u65b9\u5f0f\u540c ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/wx.getConnectedWifi.html"}),Object(a.b)("inlineCode",{parentName:"a"},"wx.getConnectedWifi")),"\uff0c\u652f\u6301 ",Object(a.b)("inlineCode",{parentName:"p"},"Promise")," \u5316\u4f7f\u7528\u3002"),Object(a.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import Taro from '@tarojs/taro'\n\nTaro.getConnectedWifi(params).then(...)\n")),Object(a.b)("h2",{id:"api\u652f\u6301\u5ea6"},"API\u652f\u6301\u5ea6"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"API"),Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"H5"),Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Taro.getConnectedWifi"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))))))}l.isMDXComponent=!0}}]);