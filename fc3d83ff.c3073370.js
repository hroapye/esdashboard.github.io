(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{299:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(1),a=r(9),o=(r(0),r(308)),c={id:"theme",title:"Create a new WordPress theme",sidebar_label:"Create New Theme"},i={id:"legacy/v5/theme",title:"Create a new WordPress theme",description:"Let's create a new theme!",source:"@site/docs/legacy/v5/theme.md",permalink:"/eightshift-docs/docs/legacy/v5/theme",sidebar_label:"Create New Theme",sidebar:"docs",previous:{title:"Versions",permalink:"/eightshift-docs/docs/legacy/v5/versions"},next:{title:"Create a new WordPress plugin",permalink:"/eightshift-docs/docs/legacy/v5/plugin"}},s=[{value:"What is next?",id:"what-is-next",children:[]}],l={rightToc:s};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Let's create a new theme!"),Object(o.b)("p",null,"Navigate to your WordPress theme folder and run the following command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npx create-wp-project\n")),Object(o.b)("p",null,"The script will prompt you for a theme name and local development URL (used for BrowserSync). After that, your new theme will be installed:"),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/eightshift-docs/img/setup.gif",alt:null}))),Object(o.b)("p",null,"After the script is finished, please follow the instructions provided by the setup script."),Object(o.b)("p",null,"All additional steps after the initial setup are done using WP_CLI commands, so please make sure that you have WP-CLI set and ready to use."),Object(o.b)("h2",{id:"what-is-next"},"What is next?"),Object(o.b)("p",null,"Now that we have the theme set on your local environment, let's do something with it."),Object(o.b)("p",null,"Please make sure you read the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"basics/basics"}),"Basics chapter")," to understand better how the project is set and what is included to make your developing experience as smooth as possible."),Object(o.b)("div",{class:"legacy-badge legacy-badge--v5"}))}p.isMDXComponent=!0},308:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,m=u["".concat(c,".").concat(d)]||u[d]||b[d]||o;return r?a.a.createElement(m,i({ref:t},l,{components:r})):a.a.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);