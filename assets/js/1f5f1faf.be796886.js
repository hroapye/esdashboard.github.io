"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[414],{3790:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var o=n(3117),r=n(102),a=(n(7294),n(3905)),i=["components"],l={id:"block-structure",title:"Block Structure"},s=void 0,p={unversionedId:"legacy/v6/basics/block-structure",id:"legacy/v6/basics/block-structure",title:"Block Structure",description:"docs-source",source:"@site/docs/legacy/v6/basics/block-structure.md",sourceDirName:"legacy/v6/basics",slug:"/legacy/v6/basics/block-structure",permalink:"/eightshift-docs/docs/legacy/v6/basics/block-structure",tags:[],version:"current",frontMatter:{id:"block-structure",title:"Block Structure"},sidebar:"docs",previous:{title:"Global Manifest",permalink:"/eightshift-docs/docs/legacy/v6/basics/blocks-global-manifest"},next:{title:"Component Structure",permalink:"/eightshift-docs/docs/legacy/v6/basics/blocks-component-structure"}},c={},d=[{value:"assets",id:"assets",level:3},{value:"components",id:"components",level:3},{value:"docs",id:"docs",level:3},{value:"heading-block.js",id:"heading-blockjs",level:3},{value:"heading.php",id:"headingphp",level:3},{value:"heading-editor.scss",id:"heading-editorscss",level:3},{value:"heading-style.scss",id:"heading-stylescss",level:3},{value:"heading-hooks.js",id:"heading-hooksjs",level:3},{value:"heading-transforms.js",id:"heading-transformsjs",level:3},{value:"manifest.json",id:"manifestjson",level:3}],u={toc:d};function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-frontend-libs/tree/develop/blocks/init/src/blocks/"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-eightshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a",alt:"docs-source"}))),(0,a.kt)("p",null,"Your custom blocks are placed in the ",(0,a.kt)("inlineCode",{parentName:"p"},"src/Blocks/custom")," folder."),(0,a.kt)("p",null,"For example, let's take the heading block (just replace ",(0,a.kt)("inlineCode",{parentName:"p"},"heading")," with your block name)."),(0,a.kt)("p",null,"We suggest you always use the full name and never abbreviate the block name. If your block has multiple words, you should separate them by a dash, for example, ",(0,a.kt)("inlineCode",{parentName:"p"},"featured-post-block.js"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Block structure should look like this:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"heading",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"assets",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"index.js"))),(0,a.kt)("li",{parentName:"ul"},"components",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"heading-editor.js"),(0,a.kt)("li",{parentName:"ul"},"heading-options.js"),(0,a.kt)("li",{parentName:"ul"},"heading-toolbar.js"))),(0,a.kt)("li",{parentName:"ul"},"docs",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"story.js"),(0,a.kt)("li",{parentName:"ul"},"readme.mdx"))),(0,a.kt)("li",{parentName:"ul"},"heading-block.js"),(0,a.kt)("li",{parentName:"ul"},"heading.php"),(0,a.kt)("li",{parentName:"ul"},"heading-editor.scss"),(0,a.kt)("li",{parentName:"ul"},"heading-style.scss"),(0,a.kt)("li",{parentName:"ul"},"heading-hooks.js"),(0,a.kt)("li",{parentName:"ul"},"heading-transforms.js"),(0,a.kt)("li",{parentName:"ul"},"manifest.json")))),(0,a.kt)("p",null,"For example, you can check the ",(0,a.kt)("a",{parentName:"p",href:"/storybook"},"storybook"),"."),(0,a.kt)("h3",{id:"assets"},"assets"),(0,a.kt)("p",null,"In this folder, you'll define all the custom JavaScript functionality for your block that will only be used on the front end of the application. You must provide the ",(0,a.kt)("inlineCode",{parentName:"p"},"index.js")," file in this folder, as a starting point, and the rest is up to you. We recommend using ",(0,a.kt)("a",{parentName:"p",href:"dynamic-import"},"JavaScript dynamic imports")," for all your front-end scripts. This ensures that the JavaScript is only loaded in the application when it is used and not before. By using dynamic import, you optimize your application and make it load faster."),(0,a.kt)("h3",{id:"components"},"components"),(0,a.kt)("p",null,"Components folder holds three files: ",(0,a.kt)("inlineCode",{parentName:"p"},"heading-options.js"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"heading-editor.js"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"heading-toolbars.js"),". Each of these files represents a part of the block editor block that is used in the editor. We have separated options, editor, and toolbar into separate components for readability and reusing components in different projects."),(0,a.kt)("h3",{id:"docs"},"docs"),(0,a.kt)("p",null,"Contains everything a block needs to be run inside the Storybook. This part is optional. However, it will speed up your development time and provide you with much-needed documentation."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"story.js")," - Storybook entry point for your block. All blocks have the exact same story."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"readme.mdx")," - README document that describes your block and provides the documentation.")),(0,a.kt)("h3",{id:"heading-blockjs"},"heading-block.js"),(0,a.kt)("p",null,"This file represents the ",(0,a.kt)("inlineCode",{parentName:"p"},"edit")," callback method used in WordPress ",(0,a.kt)("inlineCode",{parentName:"p"},"registerBlockType")," method.\nWe are not using the ",(0,a.kt)("inlineCode",{parentName:"p"},"save")," callback method because we are creating dynamic blocks. The ",(0,a.kt)("inlineCode",{parentName:"p"},"edit")," method describes how your block will be rendered in the editor once the block is used. In this file, you can use more advanced stuff like hooks and all the top-level block features."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"heading-options.js")," - must be wrapped with the ",(0,a.kt)("inlineCode",{parentName:"li"},"InspectorControls")," component from the core. This will ensure that options are shown in the proper place in the block editor (sidebar)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"heading-toolbar.js")," - must be wrapped with the ",(0,a.kt)("inlineCode",{parentName:"li"},"BlockControls")," component from the core. This will ensure that the toolbar is shown in the proper place in the block editor (floating or fixed toolbar)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"heading-editor.js")," - must ",(0,a.kt)("strong",{parentName:"li"},"not")," be wrapped with any top-level component. This will ensure that the editor component is shown in the proper place in the block editor (editor).")),(0,a.kt)("h3",{id:"headingphp"},"heading.php"),(0,a.kt)("p",null,"This file is the front-end representation of a block. In this file, you will have all the attributes you defined in the ",(0,a.kt)("inlineCode",{parentName:"p"},"manifest.json")," file."),(0,a.kt)("p",null,"In the blocks PHP part, you always have these two properties (props) available:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"$attributes")," - This prop contains all the attributes you defined in the ",(0,a.kt)("inlineCode",{parentName:"li"},"manifest.json")," and all the attributes saved in the database."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"$innerBlockContent")," - This prop contains all the inner block details when you set your block to contain inner blocks.")),(0,a.kt)("h3",{id:"heading-editorscss"},"heading-editor.scss"),(0,a.kt)("p",null,"Holds only the editor styling for the block. You should be using this file to override styles in the editor set by the component. In 90% of cases, you will not need to write any overrides here. But if you are using any column layout like a grid, flex, etc., you may need to add some corrections."),(0,a.kt)("p",null,"Corrections in the grid layout are necessary because the block editor adds additional HTML and we can't change it."),(0,a.kt)("p",null,"Please read the ",(0,a.kt)("a",{parentName:"p",href:"blocks-styles"},"block styles")," chapter for more details."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"This file is optional"),"."),(0,a.kt)("h3",{id:"heading-stylescss"},"heading-style.scss"),(0,a.kt)("p",null,"Holds all the front-end and editor styling for the component."),(0,a.kt)("p",null,"Please read the ",(0,a.kt)("a",{parentName:"p",href:"blocks-styles"},"block styles")," chapter for more details."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"This file is optional"),"."),(0,a.kt)("h3",{id:"heading-hooksjs"},"heading-hooks.js"),(0,a.kt)("p",null,"Here you can provide any custom block editor hook you need. For documentation, please refer to ",(0,a.kt)("a",{parentName:"p",href:"https://developer.wordpress.org/block-editor/developers/filters/block-filters/"},"this link"),". This file is going to be merged in the ",(0,a.kt)("inlineCode",{parentName:"p"},"registerBlockType")," method."),(0,a.kt)("h3",{id:"heading-transformsjs"},"heading-transforms.js"),(0,a.kt)("p",null,"Here you can provide any custom block transformation you need. For documentation, please refer to ",(0,a.kt)("a",{parentName:"p",href:"https://developer.wordpress.org/block-editor/developers/block-api/block-transforms/"},"this link"),". This file is going to be merged in the ",(0,a.kt)("inlineCode",{parentName:"p"},"registerBlockType")," method."),(0,a.kt)("h3",{id:"manifestjson"},"manifest.json"),(0,a.kt)("p",null,"This file contains all the configuration required for a block to work. It's used in WordPress ",(0,a.kt)("a",{parentName:"p",href:"https://developer.wordpress.org/block-editor/developers/block-api/block-registration/"},(0,a.kt)("inlineCode",{parentName:"a"},"registerBlockType"))," method to register a block."),(0,a.kt)("p",null,"For more details, check the ",(0,a.kt)("a",{parentName:"p",href:"block-manifest"},"block manifest")," chapter."))}h.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,k=u["".concat(s,".").concat(h)]||u[h]||d[h]||a;return n?o.createElement(k,i(i({ref:t},c),{},{components:n})):o.createElement(k,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);