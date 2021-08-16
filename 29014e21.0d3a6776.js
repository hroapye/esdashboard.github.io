(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{171:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return i})),t.d(r,"rightToc",(function(){return s})),t.d(r,"default",(function(){return l}));var n=t(1),o=t(9),a=(t(0),t(308)),c={id:"helpers",title:"Helpers"},i={id:"basics/helpers",title:"Helpers",description:"Each project has helper classes that help you with your project code. Helpers are parts of the code you reuse in various places in your code, but they don't belong to any specific service. We tried to combine all our helpers in one place for convenience. The main difference is that we have helpers for different languages:",source:"@site/docs/basics/helpers.md",permalink:"/eightshift-docs/docs/basics/helpers",sidebar:"docs",previous:{title:"Storybook",permalink:"/eightshift-docs/docs/basics/blocks-storybook"},next:{title:"JavaScript",permalink:"/eightshift-docs/docs/basics/helpers-javascript"}},s=[],p={rightToc:s};function l(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Each project has helper classes that help you with your project code. Helpers are parts of the code you reuse in various places in your code, but they don't belong to any specific service. We tried to combine all our helpers in one place for convenience. The main difference is that we have helpers for different languages:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"helpers-javascript"}),"JavaScript Helpers")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"helpers-scss"}),"Scss Helpers")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"helpers-php"}),"Php Helpers"))),Object(a.b)("p",null,"We especially like our helpers in the block editor, because we need to have the same features in JavaScript and PHP. This can be easily done using helpers."))}l.isMDXComponent=!0},308:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return h}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),l=function(e){var r=o.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i({},r,{},e)),t},u=function(e){var r=l(e.components);return o.a.createElement(p.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},b=Object(n.forwardRef)((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),b=n,h=u["".concat(c,".").concat(b)]||u[b]||f[b]||a;return t?o.a.createElement(h,i({ref:r},p,{components:t})):o.a.createElement(h,i({ref:r},p))}));function h(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,c=new Array(a);c[0]=b;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<a;p++)c[p]=t[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);