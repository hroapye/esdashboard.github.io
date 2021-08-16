(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{182:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(1),a=n(9),o=(n(0),n(308)),i={id:"basics",title:"Basics",sidebar_label:"Basics"},c={id:"legacy/v5/basics/basics",title:"Basics",description:"Before WordPress 5.0 release, the themes were mostly PHP based on some JavaScript and CSS. Now it's a bit different because we have PHP in the core, JavaScript (specifically React.js) in the block editor, and some styles in the editor and the theme parts of the website.",source:"@site/docs/legacy/v5/basics/basics.md",permalink:"/eightshift-docs/docs/legacy/v5/basics/basics",sidebar_label:"Basics",sidebar:"docs",previous:{title:"Create a new WordPress plugin",permalink:"/eightshift-docs/docs/legacy/v5/plugin"},next:{title:"WP-CLI",permalink:"/eightshift-docs/docs/legacy/v5/basics/wp-cli"}},s=[{value:"Let&#39;s finally start with documentation",id:"lets-finally-start-with-documentation",children:[]}],l={rightToc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Before WordPress 5.0 release, the themes were mostly PHP based on some JavaScript and CSS. Now it's a bit different because we have PHP in the core, JavaScript (specifically React.js) in the block editor, and some styles in the editor and the theme parts of the website."),Object(o.b)("p",null,"Now that everything is different, we must adapt to the changes as well."),Object(o.b)("h2",{id:"lets-finally-start-with-documentation"},"Let's finally start with documentation"),Object(o.b)("p",null,"We took our time to set up a bunch of WP-CLI commands. That should help you set up everything and use all our features, without worrying about correct names, files, and organization. You can find out more about it on this link:"),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"wp-cli"}),"WP-CLI")),Object(o.b)("p",null,"If you would like to read about our extensive WP-CLI features, find out how to use service classes, or learn how dependency injection container works with auto wiring, this link is for you:"),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"backend"}),"Back-end stuff")),Object(o.b)("p",null,"If instead, you would like to check out what we have prepared regarding the JavaScript Babel and Webpack, or find out how we ensure that our code is the same across multiple developers, this link is for you:"),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"frontend"}),"Front-end stuff")),Object(o.b)("p",null,"On the other hand, if you would like to see our extensive ",Object(o.b)("strong",{parentName:"p"},"Dynamic Blocks")," collection and learn how you can use them with all the developer's flexibility and as little code duplication as possible, check out this link:"),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"blocks"}),"Block editor blocks")),Object(o.b)("div",{class:"legacy-badge legacy-badge--v5"}))}u.isMDXComponent=!0},308:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,f=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return n?a.a.createElement(f,c({ref:t},l,{components:n})):a.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);