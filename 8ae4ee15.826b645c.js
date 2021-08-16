(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{231:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(1),o=n(9),i=(n(0),n(308)),a={id:"dynamic-import",title:"Dynamic Import",sidebar_label:"Dynamic Import"},l={id:"legacy/v5/basics/dynamic-import",title:"Dynamic Import",description:"[![docs-source](https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs)",source:"@site/docs/legacy/v5/basics/dynamic-import.md",permalink:"/eightshift-docs/docs/legacy/v5/basics/dynamic-import",sidebar_label:"Dynamic Import",sidebar:"docs",previous:{title:"Browser Sync",permalink:"/eightshift-docs/docs/legacy/v5/basics/browser-sync"},next:{title:"Blocks",permalink:"/eightshift-docs/docs/legacy/v5/basics/blocks"}},s=[{value:"How does it work?",id:"how-does-it-work",children:[]},{value:"Example",id:"example",children:[{value:"index.js",id:"indexjs",children:[]},{value:"carousel-slider.js",id:"carousel-sliderjs",children:[]}]}],c={rightToc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/infinum/eightshift-frontend-libs"}),Object(i.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a",alt:"docs-source"})))),Object(i.b)("p",null,"When writing all our JavaScript code we like to make it as fast and optimized as possible and there is no better way of doing that other than utilizing one powerful tool from Webpack called ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://webpack.js.org/guides/code-splitting/#dynamic-imports"}),"dynamic imports"),"."),Object(i.b)("p",null,"This method provides us the ability to write all our JavaScript code but load them in the DOM only when it is used, basically, this is what all JavaScript libraries use out of the box."),Object(i.b)("p",null,"By writing all our JavaScript code like this we can:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"optimize loading time."),Object(i.b)("li",{parentName:"ul"},"reduce the size of finished bundled JavaScript code."),Object(i.b)("li",{parentName:"ul"},"have websites that are fast and this can positively impact your Seo rating.")),Object(i.b)("h2",{id:"how-does-it-work"},"How does it work?"),Object(i.b)("p",null,"In a nutshell, you load all your code using JavaScript promises and Webpack splits all these promises into separate file chinks. Once the condition to resolve the promise is set (generally we check if the selector is present in the DOM), Webpack automatically injects your chunk in the DOM and loads it up. This is why you will see in your public folder a bunch of smaller files called (",Object(i.b)("inlineCode",{parentName:"p"},"0.js"),", ",Object(i.b)("inlineCode",{parentName:"p"},"1.js"),", ",Object(i.b)("inlineCode",{parentName:"p"},"2.js"),", etc)."),Object(i.b)("p",null,"You don't need to think about this. Webpack just does it for you."),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("p",null,"For example, let's make a carousel. We like to write all our JavaScript code in classes so we will provide an example for that but you can use this with functions as well."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"We have to files:")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"index.js")," - the main entry point for your JavaScript feature."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"className.js")," - class with your JavaScript features that you can reuse.")),Object(i.b)("h3",{id:"indexjs"},"index.js"),Object(i.b)("p",null,"This is a version where you have multiple instances of this feature on one page. If you are creating a feature for your block/component you will use the following example."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import domReady from '@wordpress/dom-ready';\n\n// Use this helper to make sure this code is executed when everything in DOM is set.\ndomReady(() => {\n\n  // Provide selectors to check.\n  const selector = '.js-block-carousel';\n  const elements = document.querySelectorAll(selector);\n\n  // This is the important part because if this condition is true this promise will resolve and your chink will be loaded in the DOM.\n  if (elements.length) {\n\n    // Normally load and resolve a promise on file import.\n    import('./carousel-slider').then(({ CarouselSlider }) => {\n\n      // Loop possible multiple iterations.\n      [...elements].forEach((element) => {\n\n        // Load a class for all sliders\n        const carouselSlider = new CarouselSlider({\n          element,\n          nextElement: `${selector}-next-arrow`,\n          prevElement: `${selector}-prev-arrow`,\n        });\n\n        // Run and init function that starts everything in your class.\n        carouselSlider.init();\n      });\n    });\n  }\n});\n")),Object(i.b)("p",null,"If you are sure you will have only one instance of this feature on one-page use the following code in your ",Object(i.b)("inlineCode",{parentName:"p"},"index.js")," file."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import domReady from '@wordpress/dom-ready';\n\n// Use this helper to make sure this code is executed when everything in DOM is set.\ndomReady(() => {\n\n  // Provide selectors to check.\n  const selector = '.js-block-carousel';\n  const element = document.querySelector(selector);\n\n  // This is the important part. Because of it, your code will only be imported when there's an element on the page that uses it.\n  if (element) {\n\n    // Normally load and resolve a promise on file import.\n    import('./carousel-slider').then(({ CarouselSlider }) => {\n      // Load a class for each iteration.\n      const carouselSlider = new CarouselSlider({\n        element,\n        nextElement: `${selector}-next-arrow`,\n        prevElement: `${selector}-prev-arrow`,\n      });\n\n      // Run and init function that starts everything in your class.\n      carouselSlider.init();\n    });\n  }\n});\n")),Object(i.b)("h3",{id:"carousel-sliderjs"},"carousel-slider.js"),Object(i.b)("p",null,"This is a normal class with some JavaScript functionality."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import Swiper from 'swiper';\n\nexport class CarouselSlider {\n  constructor(options) {\n    this.element = options.element;\n    this.nextElement = options.nextElement;\n    this.prevElement = options.prevElement;\n  }\n\n  init() {\n    new Swiper(\n      this.element,\n      {\n        // ...\n        navigation: {\n          nextEl: this.nextElement,\n          prevEl: this.prevElement,\n        },\n        // ...\n      }\n    );\n  }\n}\n")),Object(i.b)("div",{class:"legacy-badge legacy-badge--v5"}))}p.isMDXComponent=!0},308:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},u=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,m=u["".concat(a,".").concat(b)]||u[b]||d[b]||i;return n?o.a.createElement(m,l({ref:t},c,{components:n})):o.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);