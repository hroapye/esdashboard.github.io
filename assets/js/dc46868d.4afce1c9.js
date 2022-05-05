"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[1146],{4485:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var r=n(3117),o=n(102),i=(n(7294),n(3905)),a=["components"],c={id:"rest-route",title:"REST Route"},s=void 0,l={unversionedId:"legacy/v6/basics/rest-route",id:"legacy/v6/basics/rest-route",title:"REST Route",description:"docs-source",source:"@site/docs/legacy/v6/basics/rest-route.md",sourceDirName:"legacy/v6/basics",slug:"/legacy/v6/basics/rest-route",permalink:"/eightshift-docs/docs/legacy/v6/basics/rest-route",tags:[],version:"current",frontMatter:{id:"rest-route",title:"REST Route"},sidebar:"docs",previous:{title:"REST Field",permalink:"/eightshift-docs/docs/legacy/v6/basics/rest-field"},next:{title:"General",permalink:"/eightshift-docs/docs/legacy/v6/basics/frontend"}},u={},p=[{value:"Test it in action",id:"test-it-in-action",level:2}],f={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-libs"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-eightshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a",alt:"docs-source"}))),(0,i.kt)("p",null,"This class is used to create a new REST API route."),(0,i.kt)("p",null,"To create a new class for the REST API route, run this command:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"wp boilerplate create_rest_route")),(0,i.kt)("p",null,"The output will ask you to input the correct endpoint slug and method (",(0,i.kt)("inlineCode",{parentName:"p"},"POST"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"GET"),", etc.). Everything else will be done for you, setting the namespace, package, vendor prefixes, class, and folder name, and you will be set to write your field implementation in the ",(0,i.kt)("inlineCode",{parentName:"p"},"routeCallback")," method."),(0,i.kt)("h2",{id:"test-it-in-action"},"Test it in action"),(0,i.kt)("p",null,"To test it in action, you should check the ",(0,i.kt)("inlineCode",{parentName:"p"},"wp-json")," path in your browser. You can do that with something like this:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"domain.ext/wp-json/routeNamespace/routeVersion/routeName")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This link will be different based on your project implementation.")))}d.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=l(n),d=o,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);