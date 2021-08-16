(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{152:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(1),a=n(9),i=(n(0),n(308)),o={id:"installation-boilerplate-custom",title:"Integrating Boilerplate in existing project"},l={id:"legacy/v4/advanced/installation-boilerplate-custom",title:"Integrating Boilerplate in existing project",description:"> Integrating boilerplate in to an existing project is no trivial task! If possible, we highly recommend starting with a [new theme](theme.md) or a [new plugin](plugin.md).",source:"@site/docs/legacy/v4/advanced/installation-boilerplate-custom.md",permalink:"/eightshift-docs/docs/legacy/v4/advanced/installation-boilerplate-custom",sidebar:"docs",previous:{title:"Heading Level",permalink:"/eightshift-docs/docs/legacy/v4/advanced/components-heading-level"},next:{title:"Eightshift Libs",permalink:"/eightshift-docs/docs/legacy/v4/advanced/installation-libs"}},c=[{value:"Setting up boilerplate in your own project",id:"setting-up-boilerplate-in-your-own-project",children:[]}],p={rightToc:c};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Integrating boilerplate in to an existing project is no trivial task! If possible, we highly recommend starting with a ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/eightshift-docs/docs/theme"}),"new theme")," or a ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/eightshift-docs/docs/plugin"}),"new plugin"),".")),Object(i.b)("h2",{id:"setting-up-boilerplate-in-your-own-project"},"Setting up boilerplate in your own project"),Object(i.b)("p",null,"99% of the Boilerplate functionality is contained in these 2 libs. In order to have your own project work like a Boilerplate, you need to implement both of these libraries in your project."),Object(i.b)("p",null,"Here's what you need to do:\n1. ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"installation-libs"}),"Install Eightshift Libs"),"\n2. ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"installation-frontend-libs"}),"Install Eightshift Frontend Libs")),Object(i.b)("p",null,"Implementing of this library inside your existing project is not that trivial."),Object(i.b)("p",null,"That is why we created a boilerplate repository that incorporates this library. To see the detailed implementation and how it works in action check the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/infinum/eightshift-boilerplate"}),"Eightshift Boilerplate repo"),"."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"In order to incorporate this lib inside your project you need to have:")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://nodejs.org/en/"}),"Node.js")," and ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://getcomposer.org/"}),"Composer")," installed on your system")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Implementation process:")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Install the front-end library and backend library"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"npm install @eightshift/frontend-libs\n\ncomposer require infinum/eightshift-libs\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"If you have an existing Webpack config, look at how the config is set up on this ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"webpack"}),"link")," and merge any changes you have.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Follow the steps on ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"installation-libs"}),"Eightshift Libs")," custom instalation.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Follow the steps on ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"installation-frontend-libs"}),"Eightshift Frontend Libs")," custom instalation."))),Object(i.b)("div",{class:"legacy-badge legacy-badge--v4"}))}s.isMDXComponent=!0},308:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},b=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=s(n),h=r,m=b["".concat(o,".").concat(h)]||b[h]||u[h]||i;return n?a.a.createElement(m,l({ref:t},p,{components:n})):a.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);