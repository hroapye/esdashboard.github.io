(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{175:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return c})),t.d(r,"rightToc",(function(){return l})),t.d(r,"default",(function(){return p}));var n=t(1),a=t(9),o=(t(0),t(252)),i={id:"helpers-error-logger-helpers",title:"Error Logger"},c={id:"legacy/v4/advanced/helpers-error-logger-helpers",title:"Error Logger",description:"[![docs-source](https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a)](https://github.com/infinum/eightshift-libs/blob/develop/src/helpers/trait-error-logger.php)",source:"@site/docs/legacy/v4/advanced/helpers-error-logger.md",permalink:"/eightshift-docs/docs/legacy/v4/advanced/helpers-error-logger-helpers",sidebar:"docs",previous:{title:"Shortcode",permalink:"/eightshift-docs/docs/legacy/v4/advanced/helpers-shortcode-helpers"},next:{title:"Color Palette",permalink:"/eightshift-docs/docs/legacy/v4/advanced/components-color-palette"}},l=[{value:"rest_response_handler",id:"rest_response_handler",children:[]}],s={rightToc:l};function p(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/infinum/eightshift-libs/blob/develop/src/helpers/trait-error-logger.php"}),Object(o.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a",alt:"docs-source"})))),Object(o.b)("p",null,"Object trait is located in ",Object(o.b)("inlineCode",{parentName:"p"},"Eightshift Libs"),". To extend it, use ",Object(o.b)("inlineCode",{parentName:"p"},"Eightshift_Libs\\Helpers\\Error_Logger")," class."),Object(o.b)("p",null,"If you are working with Ajax or REST API in your project, this logger will come in handy. We have created this simple trait helper that you can use in any PHP class as a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/eightshift-docs/docs/legacy/v4/guides/extending-classes"}),"trait"),". To see all of the class helper go ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/infinum/eightshift-libs/blob/develop/src/helpers/trait-error-logger.php"}),"here"),"."),Object(o.b)("h2",{id:"rest_response_handler"},"rest_response_handler"),Object(o.b)("p",null,"Ensure correct response for rest using the handler function."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"@param integer     $code   Response Status code.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"@param string      $status Response Status name. (success/error).")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"@param string|null $msg    Response Message.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"@param array|null  $data   Response additional data.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"@return \\WP_Error|array \\WP_Error instance with error message and status or array."))))}p.isMDXComponent=!0},252:function(e,r,t){"use strict";t.d(r,"a",(function(){return b})),t.d(r,"b",(function(){return h}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),p=function(e){var r=a.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c({},r,{},e)),t},b=function(e){var r=p(e.components);return a.a.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},d=Object(n.forwardRef)((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(t),d=n,h=b["".concat(i,".").concat(d)]||b[d]||u[d]||o;return t?a.a.createElement(h,c({ref:r},s,{components:t})):a.a.createElement(h,c({ref:r},s))}));function h(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);