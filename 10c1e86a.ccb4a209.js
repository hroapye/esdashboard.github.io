(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{147:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var o=n(1),r=n(9),a=(n(0),n(308)),i={id:"blocks-component-manifest",title:"Component Manifest"},c={id:"basics/blocks-component-manifest",title:"Component Manifest",description:"[![docs-source](https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs/tree/develop/blocks/init/src/blocks/)",source:"@site/docs/basics/blocks-component-manifest.md",permalink:"/eightshift-docs/docs/basics/blocks-component-manifest",sidebar:"docs",previous:{title:"Block Manifest",permalink:"/eightshift-docs/docs/basics/block-manifest"},next:{title:"Attributes",permalink:"/eightshift-docs/docs/basics/blocks-attributes"}},s=[{value:"Example",id:"example",children:[]},{value:"componentName",id:"componentname",children:[]},{value:"title",id:"title",children:[]},{value:"componentClass",id:"componentclass",children:[]},{value:"example",id:"example-1",children:[]},{value:"attributes",id:"attributes",children:[]},{value:"options",id:"options",children:[]},{value:"components",id:"components",children:[]}],l={rightToc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/infinum/eightshift-frontend-libs/tree/develop/blocks/init/src/blocks/"}),Object(a.b)("img",Object(o.a)({parentName:"a"},{src:"https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a",alt:"docs-source"})))),Object(a.b)("p",null,"A component manifest is a bit different than the block manifest. The main difference is that the component manifest is a fully custom feature, and it is only here to provide a way to store configuration data and share it with multiple files in your project."),Object(a.b)("h3",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'{\n  "componentName": "heading",\n  "title": "Heading",\n  "componentClass": "heading",\n  "example": {\n    "attributes": {\n      "headingContent": "This is heading",\n      "headingLevel": 2,\n      "headingSize": "default",\n      "headingUse": true\n    }\n  },\n  "attributes": {\n    "headingContent": {\n      "type": "string"\n    },\n    "headingLevel": {\n      "type": "int",\n      "default": 2\n    },\n    "headingSize": {\n      "type": "string",\n      "default": "default"\n    },\n    "headingUse": {\n      "type": "boolean",\n      "default": true\n    }\n  },\n  "options": {\n    "sizes": [\n      {\n        "label": "Default (30px)",\n        "value": "default"\n      },\n      {\n        "label": "Big (50px)",\n        "value": "big"\n      }\n    ],\n    "aligns": [\n      "left",\n      "center",\n      "right"\n    ],\n    "colors": [\n      "primary",\n      "black"\n    ]\n  },\n  "components": {}\n}\n')),Object(a.b)("h3",{id:"componentname"},"componentName"),Object(a.b)("p",null,"This key is the most important one. We use this key to specify the component attributes prefix. When it's used correctly, we are able to change the attributes prefix depending on the component name passed from the parent component or block."),Object(a.b)("h3",{id:"title"},"title"),Object(a.b)("p",null,"This key is used to provide the label for all your component options and provide the storybook's automatic story title."),Object(a.b)("h3",{id:"componentclass"},"componentClass"),Object(a.b)("p",null,"These keys are used to provide a single point of reference for a component name. You'll use this key to provide a prefix for all the CSS selectors in your component."),Object(a.b)("h3",{id:"example-1"},"example"),Object(a.b)("p",null,"The same as in the blocks manifest. Please check ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"block-manifest"}),"this chapter")," for more details."),Object(a.b)("h3",{id:"attributes"},"attributes"),Object(a.b)("p",null,"For more details please check ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"blocks-attributes"}),"this chapter"),"."),Object(a.b)("h3",{id:"options"},"options"),Object(a.b)("p",null,"These keys are used to provide a single point of reference for component options used in the options part. If you have a ",Object(a.b)("inlineCode",{parentName:"p"},"SelectControl")," or a ",Object(a.b)("inlineCode",{parentName:"p"},"ColorSelector")," component, you can set all your options here and use those options in the options section and story for mocking components. Please check ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"blocks-component-in-block"}),"this chapter")," for more details."),Object(a.b)("h3",{id:"components"},"components"),Object(a.b)("p",null,"The same as in the blocks manifest. Please check ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"block-manifest"}),"this chapter")," for more details."))}p.isMDXComponent=!0},308:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),m=o,d=b["".concat(i,".").concat(m)]||b[m]||u[m]||a;return n?r.a.createElement(d,c({ref:t},l,{components:n})):r.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);