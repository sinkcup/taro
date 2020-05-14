(window.webpackJsonp=window.webpackJsonp||[]).push([[461],{1479:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),m=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},s=function(e){var t=m(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),s=m(r),u=n,d=s["".concat(o,".").concat(u)]||s[u]||l[u]||i;return r?a.a.createElement(d,c({ref:t},b,{components:r})):a.a.createElement(d,c({ref:t},b))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var b=2;b<i;b++)o[b]=r[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},600:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return m}));var n=r(1),a=r(9),i=(r(0),r(1479)),o={title:"Taro.requestPayment(OBJECT)",sidebar_label:"requestPayment"},c={id:"version-3.0.0-beta.5/apis/open-api/payment/requestPayment",title:"Taro.requestPayment(OBJECT)",description:"\u4f7f\u7528\u65b9\u5f0f\u540c [`wx.requestPayment`](https://developers.weixin.qq.com/miniprogram/dev/api/wx.requestPayment.html)\uff0ch5\u7aef\u4ec5\u652f\u6301[\u5fae\u4fe1\u516c\u4f17\u53f7](https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421141115)\uff08API\u4ee5\u5c0f\u7a0b\u5e8f\u4e3a\u51c6\uff09\uff0c\u652f\u6301 `Promise` \u5316\u4f7f\u7528\u3002",source:"@site/versioned_docs/version-3.0.0-beta.5/apis/open-api/payment/requestPayment.md",permalink:"/taro/docs/3.0.0-beta.5/apis/open-api/payment/requestPayment",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.0.0-beta.5/apis/open-api/payment/requestPayment.md",version:"3.0.0-beta.5",sidebar_label:"requestPayment",sidebar:"version-3.0.0-beta.5/API",previous:{title:"Taro.faceVerifyForPay(OBJECT)",permalink:"/taro/docs/3.0.0-beta.5/apis/open-api/payment/faceVerifyForPay"},next:{title:"Taro.navigateBackMiniProgram(OBJECT)",permalink:"/taro/docs/3.0.0-beta.5/apis/open-api/redirect/navigateBackMiniProgram"}},p=[{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API\u652f\u6301\u5ea6",id:"api\u652f\u6301\u5ea6",children:[]}],b={rightToc:p};function m(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"\u4f7f\u7528\u65b9\u5f0f\u540c ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/wx.requestPayment.html"}),Object(i.b)("inlineCode",{parentName:"a"},"wx.requestPayment")),"\uff0ch5\u7aef\u4ec5\u652f\u6301",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421141115"}),"\u5fae\u4fe1\u516c\u4f17\u53f7"),"\uff08API\u4ee5\u5c0f\u7a0b\u5e8f\u4e3a\u51c6\uff09\uff0c\u652f\u6301 ",Object(i.b)("inlineCode",{parentName:"p"},"Promise")," \u5316\u4f7f\u7528\u3002"),Object(i.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import Taro from '@tarojs/taro'\n\nTaro.requestPayment(params).then(...)\n")),Object(i.b)("h2",{id:"api\u652f\u6301\u5ea6"},"API\u652f\u6301\u5ea6"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"API"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"H5"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Taro.requestPayment"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))))))}m.isMDXComponent=!0}}]);