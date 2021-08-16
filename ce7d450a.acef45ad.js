(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{268:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return p})),o.d(t,"rightToc",(function(){return s})),o.d(t,"default",(function(){return c}));var r=o(1),n=o(9),a=(o(0),o(308)),i={id:"blocks-wrapper",title:"Wrapper"},p={id:"basics/blocks-wrapper",title:"Wrapper",description:"[![docs-source](https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs/tree/develop/blocks/init/src/blocks/)",source:"@site/docs/basics/blocks-wrapper.md",permalink:"/eightshift-docs/docs/basics/blocks-wrapper",sidebar:"docs",previous:{title:"Component in a Block",permalink:"/eightshift-docs/docs/basics/blocks-component-in-block"},next:{title:"Variations",permalink:"/eightshift-docs/docs/basics/blocks-variations"}},s=[{value:"Where can I find wrapper options?",id:"where-can-i-find-wrapper-options",children:[]},{value:"Additional development options",id:"additional-development-options",children:[{value:"wrapperUse",id:"wrapperuse",children:[]},{value:"wrapperUseShowControl",id:"wrapperuseshowcontrol",children:[]},{value:"wrapperUseSimple",id:"wrapperusesimple",children:[]},{value:"wrapperUseSimpleShowControl",id:"wrapperusesimpleshowcontrol",children:[]},{value:"wrapperDisable",id:"wrapperdisable",children:[]},{value:"wrapperParentClass",id:"wrapperparentclass",children:[]}]},{value:"Wrapper limitations",id:"wrapper-limitations",children:[]}],l={rightToc:s};function c(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/infinum/eightshift-frontend-libs/tree/develop/blocks/init/src/blocks/"}),Object(a.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a",alt:"docs-source"})))),Object(a.b)("p",null,"The wrapper is our best and most powerful feature. In a nutshell, the wrapper is nothing more than a high order component (parent component)."),Object(a.b)("p",null,"When setting up block registration, we made it so that every block view (PHP part) passes through the wrapper component before it is registered. This gives us the ability to set multiple shared attributes in one component."),Object(a.b)("p",null,"The wrapper is designed to be the ultimate top-level component that controls how your block behaves in the website layout. The wrapper is a sort of a 'section' in traditional builders. By default, you can control a whole lot of stuff, but there is an ability to add your custom attributes and fine-tune the wrapper to your project's needs."),Object(a.b)("h2",{id:"where-can-i-find-wrapper-options"},"Where can I find wrapper options?"),Object(a.b)("p",null,"When you open your block editor in the sidebar before every blocks options you will see a ",Object(a.b)("inlineCode",{parentName:"p"},"layout")," panel that controls the wrapper options:"),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/eightshift-docs/img/docs/wrapper-closed.jpg",alt:"Wrapper Closed"}))),Object(a.b)("p",null,"We also made a helper button that describes what each wrapper options does when the layout panel is open:"),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/eightshift-docs/img/docs/wrapper-help.jpg",alt:"Wrapper Help Button"}))),Object(a.b)("p",null,"Here are some of the descriptions that we created but you can add your own icons and options to this modal by providing the additions properties to the ",Object(a.b)("inlineCode",{parentName:"p"},"HelpModal")," component:"),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/eightshift-docs/img/docs/wrapper-modal.jpg",alt:"Wrapper Modal"}))),Object(a.b)("h2",{id:"additional-development-options"},"Additional development options"),Object(a.b)("p",null,"Along with the provided details and descriptions for the standard options in the ",Object(a.b)("inlineCode",{parentName:"p"},"HelpModal")," we have some development specific options for you to check."),Object(a.b)("h3",{id:"wrapperuse"},"wrapperUse"),Object(a.b)("p",null,"This attribute controls the usage of the wrapper component. It behaves the same way as described in ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"blocks-component-in-block#i-dont-need-all-the-component-options-in-my-block"}),"this chapter"),"."),Object(a.b)("h3",{id:"wrapperuseshowcontrol"},"wrapperUseShowControl"),Object(a.b)("p",null,"This attribute controls whether you will see the options for block use in the block editor. It behaves the same way as described in ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"blocks-component-in-block#i-dont-want-my-editor-to-be-able-to-change-components-options-in-my-block"}),"this chapter"),"."),Object(a.b)("h3",{id:"wrapperusesimple"},"wrapperUseSimple"),Object(a.b)("p",null,"We wrapped some of the options in a specific condition and we call it ",Object(a.b)("inlineCode",{parentName:"p"},"wrapperUseSimple"),". In general, this attribute is set to ",Object(a.b)("inlineCode",{parentName:"p"},"true")," when you only want the simplified options on your block. Natively, it is used inside all of the inner blocks in the column block because we don't need wrappers inside wrappers inside wrappers (and so on). It's a good rule of thumb to use a simple wrapper in all of the inner blocks."),Object(a.b)("h3",{id:"wrapperusesimpleshowcontrol"},"wrapperUseSimpleShowControl"),Object(a.b)("p",null,"This attribute controls whether you are going to see options in the block editor to use the simple option. It behaves the same way as described in ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"blocks-component-in-block#i-dont-want-my-editor-to-be-able-to-change-components-options-in-my-block"}),"this chapter"),"."),Object(a.b)("h3",{id:"wrapperdisable"},"wrapperDisable"),Object(a.b)("p",null,"This attribute disables the wrapper completely. When this attribute is set to ",Object(a.b)("inlineCode",{parentName:"p"},"true"),", you will not have any wrapper options in your block."),Object(a.b)("h3",{id:"wrapperparentclass"},"wrapperParentClass"),Object(a.b)("p",null,"This attribute is interesting to use if, for example, you have a carousel block with inner blocks. To provide the markup necessary for the carousel script to work, you need to add some items selector (a div). With this key, you can pass a parent item class, and all of your items will be wrapped with this selector and a class."),Object(a.b)("h2",{id:"wrapper-limitations"},"Wrapper limitations"),Object(a.b)("p",null,"In wrapper you ",Object(a.b)("strong",{parentName:"p"},"can't")," use ",Object(a.b)("inlineCode",{parentName:"p"},"components")," key in the manifest to automaticity add additional components like you can in the blocks or components. If you want to add component to a wrapper you must manually add it the old fashion way."))}c.isMDXComponent=!0},308:function(e,t,o){"use strict";o.d(t,"a",(function(){return b})),o.d(t,"b",(function(){return h}));var r=o(0),n=o.n(r);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function p(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=n.a.createContext({}),c=function(e){var t=n.a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):p({},t,{},e)),o},b=function(e){var t=c(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=Object(r.forwardRef)((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=c(o),u=r,h=b["".concat(i,".").concat(u)]||b[u]||d[u]||a;return o?n.a.createElement(h,p({ref:t},l,{components:o})):n.a.createElement(h,p({ref:t},l))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<a;l++)i[l]=o[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,o)}u.displayName="MDXCreateElement"}}]);