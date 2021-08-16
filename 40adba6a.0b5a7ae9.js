(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{184:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return b}));var r=n(1),a=n(9),o=(n(0),n(308)),l={id:"blocks-global-manifest",title:"Global Manifest"},c={id:"basics/blocks-global-manifest",title:"Global Manifest",description:"[![docs-source](https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs/tree/develop/blocks/init/src/blocks/)",source:"@site/docs/basics/blocks-global-manifest.md",permalink:"/eightshift-docs/docs/basics/blocks-global-manifest",sidebar:"docs",previous:{title:"Structure",permalink:"/eightshift-docs/docs/basics/blocks-structure"},next:{title:"Block Structure",permalink:"/eightshift-docs/docs/basics/block-structure"}},i=[{value:"Namespace",id:"namespace",children:[]},{value:"Background and foreground",id:"background-and-foreground",children:[]},{value:"Global variables",id:"global-variables",children:[]},{value:"Attributes",id:"attributes",children:[]}],s={rightToc:i};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/infinum/eightshift-frontend-libs/tree/develop/blocks/init/src/blocks/"}),Object(o.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a",alt:"docs-source"})))),Object(o.b)("p",null,"Global manifest is used to provide all the global configuration to the blocks and components, and much more."),Object(o.b)("p",null,"Currently, our default global manifest looks like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "namespace": "eightshift-boilerplate",\n  "background": "#FBF9FF",\n  "foreground": "#9973E3",\n  "globalVariables": {\n    "customBlocksName": "eightshift-block",\n    "maxCols": 12,\n    "baseFont": "Inter",\n    "zIndex": {\n      "header": 100,\n      "drawer": 99,\n      "overlay": 98\n    },\n    "breakpoints": {\n      "mobile": 480,\n      "tablet": 960,\n      "desktop": 1920,\n      "large": 1921\n    },\n    "containers": {\n      "default": "66rem"\n    },\n    "gutters": {\n      "none": "0",\n      "default": "1.25rem",\n      "big": "2.5rem"\n    },\n    "sectionSpacing": {\n      "min": -300,\n      "max": 300,\n      "step": 10\n    },\n    "sectionInSpacing": {\n      "min": 0,\n      "max": 300,\n      "step": 10\n    },\n    "colors": [\n      {\n        "name": "Primary",\n        "slug": "primary",\n        "color": "#9973E3"\n      },\n      {\n        "name": "Black",\n        "slug": "black",\n        "color": "#000000"\n      },\n      {\n        "name": "Light",\n        "slug": "light",\n        "color": "#CCCCCC"\n      },\n      {\n        "name": "White",\n        "slug": "white",\n        "color": "#FFFFFF"\n      },\n      {\n        "name": "Eightshift",\n        "slug": "eightshift",\n        "color": "#0D3636"\n      }\n    ]\n  }\n}\n')),Object(o.b)("p",null,"As you can see, we have some global configuration for blocks and some SCSS variables. Along with these default keys, here you can define anything you need for the project."),Object(o.b)("h3",{id:"namespace"},"Namespace"),Object(o.b)("p",null,"All blocks must have a valid block name to be registered. A valid block consists of namespace and block name, like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"eightshift-boilerplate/heading\n")),Object(o.b)("p",null,"To remove the need to write namespace multiple times across multiple blocks, we have defined the namespace in the global manifest, and we use it in the block registration process."),Object(o.b)("p",null,"If you want to define multiple namespaces for your blocks in a single folder, please refer to the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"block-structure"}),"block-structure")," chapter for more details."),Object(o.b)("h3",{id:"background-and-foreground"},"Background and foreground"),Object(o.b)("p",null,"Just like a namespace, we use the same logic for icons background and foreground when selecting a block from the list. Here you define global background and foreground for all your custom blocks."),Object(o.b)("p",null,"Please refer to the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"block-structure"}),"block-structure")," chapter for more details on how to override global background and foreground your blocks icon."),Object(o.b)("h3",{id:"global-variables"},"Global variables"),Object(o.b)("p",null,"These are all the global settings you can use in JavaScript, SCSS, and PHP files. We have covered this topic in more detail in the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"blocks-styles"}),"block-styles")," chapter."),Object(o.b)("h3",{id:"attributes"},"Attributes"),Object(o.b)("p",null,"We don't have this key in the example, but you can set the default attributes in this file, and they will be applied to all the blocks."),Object(o.b)("p",null,"Please refer to the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"blocks-attributes"}),"blocks attributes")," chapter for more details."))}b.isMDXComponent=!0},308:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=b(n),d=r,f=u["".concat(l,".").concat(d)]||u[d]||p[d]||o;return n?a.a.createElement(f,c({ref:t},s,{components:n})):a.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);