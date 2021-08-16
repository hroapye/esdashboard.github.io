(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{232:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(1),o=n(9),i=(n(0),n(308)),a={id:"rest-route",title:"Rest Route"},c={id:"basics/rest-route",title:"Rest Route",description:"[![docs-source](https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a)](https://github.com/infinum/eightshift-libs)",source:"@site/docs/basics/rest-route.md",permalink:"/eightshift-docs/docs/basics/rest-route",sidebar:"docs",previous:{title:"Rest Field",permalink:"/eightshift-docs/docs/basics/rest-field"},next:{title:"Front End",permalink:"/eightshift-docs/docs/basics/frontend"}},s=[{value:"Test it in action",id:"test-it-in-action",children:[]}],l={rightToc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/infinum/eightshift-libs"}),Object(i.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a",alt:"docs-source"})))),Object(i.b)("p",null,"This class is used to create a new Rest API route."),Object(i.b)("p",null,"To create a new class for the Rest API route, run this command:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"wp boilerplate create_rest_route")),Object(i.b)("p",null,"The output will ask you to input the correct endpoint slug and method (",Object(i.b)("inlineCode",{parentName:"p"},"POST"),", ",Object(i.b)("inlineCode",{parentName:"p"},"GET"),", etc.). Everything else will be done for you, setting the namespace, package, vendor prefixes, class, and folder name, and you will be set to write your field implementation in the ",Object(i.b)("inlineCode",{parentName:"p"},"routeCallback")," method."),Object(i.b)("h2",{id:"test-it-in-action"},"Test it in action"),Object(i.b)("p",null,"To test it in action, you should check the ",Object(i.b)("inlineCode",{parentName:"p"},"wp-json")," path in your browser. You can do that with something like this:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"domain.ext/wp-json/routeNamespace/routeVersion/routeName")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"This link will be different based on your project implementation.")))}u.isMDXComponent=!0},308:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,f=p["".concat(a,".").concat(d)]||p[d]||b[d]||i;return n?o.a.createElement(f,c({ref:t},l,{components:n})):o.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);