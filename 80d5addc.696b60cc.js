(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{227:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(1),r=n(9),o=(n(0),n(308)),i={id:"namespaces",title:"Namespaces",sidebar_label:"Namespaces"},c={id:"legacy/v5/basics/namespaces",title:"Namespaces",description:"[![docs-source](https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a)](https://github.com/infinum/eightshift-libs)",source:"@site/docs/legacy/v5/basics/namespaces.md",permalink:"/eightshift-docs/docs/legacy/v5/basics/namespaces",sidebar_label:"Namespaces",sidebar:"docs",previous:{title:"Backend",permalink:"/eightshift-docs/docs/legacy/v5/basics/backend"},next:{title:"Extending Classes",permalink:"/eightshift-docs/docs/legacy/v5/basics/extending-classes"}},s=[],l={rightToc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/infinum/eightshift-libs"}),Object(o.b)("img",Object(a.a)({parentName:"a"},{src:"https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a",alt:"docs-source"})))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"PHP part of this project lives in ",Object(o.b)("inlineCode",{parentName:"p"},"EightshiftLibs")," namespace.")),Object(o.b)("p",null,"Because WordPress lives in a global namespace, we had to provide the way for your project to be unique. That is why we implemented ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/infinum/imposter-plugin"}),Object(o.b)("strong",{parentName:"a"},"Imposter"))," script inside ",Object(o.b)("inlineCode",{parentName:"p"},"composer.json"),". Imposter adds a namespace prefix on all the packages inside the ",Object(o.b)("inlineCode",{parentName:"p"},"vendor")," folder that uses namespacing."),Object(o.b)("p",null,"You can change the vendor prefix in your ",Object(o.b)("inlineCode",{parentName:"p"},"composer.json")," file. But if you do this, make sure you delete the ",Object(o.b)("inlineCode",{parentName:"p"},"vendor")," folder before running the command to install the composer packages again with the ",Object(o.b)("inlineCode",{parentName:"p"},"composer install")," command."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'"autoload": {\n  "psr-4": {\n    "CustomProject\\\\": "src/"\n  }\n},\n"extra": {\n  "imposter": {\n    "namespace": "EightshiftBoilerplateVendor"\n  }\n}\n')),Object(o.b)("p",null,"For example, with the default setup, your project will have the namespace you defined in the setup process. But let's say you have the structure from the parent code:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Your current namespace is: ",Object(o.b)("inlineCode",{parentName:"li"},"CustomProject"),"."),Object(o.b)("li",{parentName:"ul"},"Namespace for all packages used from Eightshift libs is ",Object(o.b)("inlineCode",{parentName:"li"},"EightshiftBoilerplateVendor\\CustomProject"),"."),Object(o.b)("li",{parentName:"ul"},"Also, every package you additionally install will follow the same convention: ",Object(o.b)("inlineCode",{parentName:"li"},"EightshiftBoilerplateVendor\\SomePackageNamespace"),".")),Object(o.b)("p",null,"To sum it up: you don't need to change the default vendor prefix if you only run one theme or one plugin with Eightshift Boilerplate. But if you have multiple Eightshift Boilerplate powered themes or plugins installed, please change the vendor prefix on each of the projects."),Object(o.b)("div",{class:"legacy-badge legacy-badge--v5"}))}p.isMDXComponent=!0},308:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,d=u["".concat(i,".").concat(m)]||u[m]||b[m]||o;return n?r.a.createElement(d,c({ref:t},l,{components:n})):r.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);