(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{1479:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=a.a.createContext({}),l=function(e){var t=a.a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},s=function(e){var t=l(e.components);return a.a.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=l(n),b=r,f=s["".concat(p,".").concat(b)]||s[b]||u[b]||o;return n?a.a.createElement(f,c({ref:t},m,{components:n})):a.a.createElement(f,c({ref:t},m))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=b;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,p[1]=c;for(var m=2;m<o;m++)p[m]=n[m];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},178:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return l}));var r=n(1),a=n(9),o=(n(0),n(1479)),p={title:"Map",sidebar_label:"Map"},c={id:"components/maps/map",title:"Map",description:"##### \u5730\u56fe",source:"@site/docs/components/maps/map.md",permalink:"/taro/docs/next/components/maps/map",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/components/maps/map.md",version:"next",sidebar_label:"Map",sidebar:"components",previous:{title:"Camera",permalink:"/taro/docs/next/components/media/camera"},next:{title:"Canvas",permalink:"/taro/docs/next/components/canvas/canvas"}},i=[],m={rightToc:i};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h5",{id:"\u5730\u56fe"},"\u5730\u56fe"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"<Map />")," \u7ec4\u4ef6\u7684 H5 \u4e0e RN \u7248\u672c\u5c1a\u672a\u5b9e\u73b0\u3002"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u5c0f\u7a0b\u5e8f\u7aef\u53c2\u6570\u652f\u6301\u8be6\u89c1\u5404\u5c0f\u7a0b\u5e8f\u5b98\u7f51")),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/map.html"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f Map"),"\u3002"),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://smartprogram.baidu.com/docs/develop/component/map/#map"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f Map"),"\u3002"),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.alipay.com/mini/component/map"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f Map"),"\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import Taro, { Component } from '@tarojs/taro'\n// \u5f15\u5165 map \u7ec4\u4ef6\nimport { Map } from '@tarojs/components'\n\nclass App extends Component {\n  onTap () {}\n  render () {\n    return (\n      <Map onClick={this.onTap} />\n    )\n  }\n}\n")))}l.isMDXComponent=!0}}]);