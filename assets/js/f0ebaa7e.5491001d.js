"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[4136],{6187:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],l={id:"6-7",title:"Version 6 to 7"},s=void 0,p={unversionedId:"migrations/6-7",id:"migrations/6-7",title:"Version 6 to 7",description:"This migration guide is represents migration for:",source:"@site/docs/migrations/6-7.md",sourceDirName:"migrations",slug:"/migrations/6-7",permalink:"/eightshift-docs/docs/migrations/6-7",tags:[],version:"current",frontMatter:{id:"6-7",title:"Version 6 to 7"},sidebar:"docs",previous:{title:"Tips & Tricks",permalink:"/eightshift-docs/docs/basics/tips-tricks"},next:{title:"Version 5 to 6",permalink:"/eightshift-docs/docs/migrations/5-6"}},c={},u=[{value:"Required changes:",id:"required-changes",level:3},{value:"Improvement changes:",id:"improvement-changes",level:2},{value:"Optional changes:",id:"optional-changes",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This migration guide is represents migration for:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/infinum/eightshift-boilerplate/releases/tag/7.0.0"},"eightshift/boilerplate")," - ",(0,i.kt)("strong",{parentName:"li"},"6+ --\x3e 7.0.0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/infinum/eightshift-frontend-libs/releases/tag/6.0.0"},"eightshift/frontend-libs")," - ",(0,i.kt)("strong",{parentName:"li"},"5+ --\x3e 6.0.0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/infinum/eightshift-libs/releases/tag/5.0.0"},"eightshift/libs")," - ",(0,i.kt)("strong",{parentName:"li"},"4+ --\x3e 5.0.0"))),(0,i.kt)("h3",{id:"required-changes"},"Required changes:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Migration time: ~30min.")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Make sure that all editor scripts are loaded from ",(0,i.kt)("inlineCode",{parentName:"li"},"@eightshift/frontend-libs/scripts"),";"),(0,i.kt)("li",{parentName:"ol"},"Make sure that all frontend JS scripts that use frontend helper load ony from ",(0,i.kt)("inlineCode",{parentName:"li"},"@eightshift/frontend-libs/scripts/helpers"),"."),(0,i.kt)("li",{parentName:"ol"},"We have removed PHP class ",(0,i.kt)("inlineCode",{parentName:"li"},"LabelGenerator")," and added it in the helper Traits so it you are using it in you project you should refactor it like in the example provided ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/infinum/eightshift-libs/pull/277"},"here"),"."),(0,i.kt)("li",{parentName:"ol"},"In ",(0,i.kt)("inlineCode",{parentName:"li"},"src>Blocks>Blocks.php")," remove ",(0,i.kt)("inlineCode",{parentName:"li"},"getBlocksPath")," method because we are not using it anymore."),(0,i.kt)("li",{parentName:"ol"},"In ",(0,i.kt)("inlineCode",{parentName:"li"},"src>Blocks>Blocks.php")," replace all instances of ",(0,i.kt)("inlineCode",{parentName:"li"},"$this->getSettings()['namespace']")," with ",(0,i.kt)("inlineCode",{parentName:"li"},"Components::getSettingsNamespace()"),". Generally every place that you use ",(0,i.kt)("inlineCode",{parentName:"li"},"$this->getSettings()")," use Component store instead."),(0,i.kt)("li",{parentName:"ol"},"In ",(0,i.kt)("inlineCode",{parentName:"li"},"src>Blocks>Blocks.php")," add new filter ",(0,i.kt)("inlineCode",{parentName:"li"},"\\add_action('wp_footer', [$this, 'outputCssVariablesInline']);")," to be able to output one style tag styles."),(0,i.kt)("li",{parentName:"ol"},"In ",(0,i.kt)("inlineCode",{parentName:"li"},"src>Blocks>manifest.json")," add config keys used to trigger different behaviour of the boilerplate.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"config": {\n    "outputCssGlobally": true,\n    "outputCssOptimize": true,\n    "outputCssSelectorName": "esCssVariables",\n    "outputCssGloballyAdditionalStyles": [\n        ":root {--es-loaded-opacity: 1;}"\n    ],\n    "useWrapper": true\n},\n')),(0,i.kt)("ol",{start:8},(0,i.kt)("li",{parentName:"ol"},"Open ",(0,i.kt)("inlineCode",{parentName:"li"},"src>Blocks>assets")," folder and compare it with our new layout and files located ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/infinum/eightshift-frontend-libs/tree/feature/variables/blocks/init/src/Blocks/assets"},"here"),"."),(0,i.kt)("li",{parentName:"ol"},"In ",(0,i.kt)("inlineCode",{parentName:"li"},"src>Enqueue>Blocks>EnqueueBlocks.php")," add new filter ",(0,i.kt)("inlineCode",{parentName:"li"},"\\add_action('wp_enqueue_scripts', [$this, 'enqueueBlockFrontendStyle'], 50);")," to output new frontend only styles."),(0,i.kt)("li",{parentName:"ol"},"In ",(0,i.kt)("inlineCode",{parentName:"li"},"src>Enqueue>Blocks>EnqueueBlocks.php")," rename filter callback ",(0,i.kt)("inlineCode",{parentName:"li"},"enqueueBlockScript")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"enqueueBlockFrontendScript"),"."),(0,i.kt)("li",{parentName:"ol"},"Find all usage of ",(0,i.kt)("inlineCode",{parentName:"li"},"ServerSideRender")," component in JS part. Then in PHP part wherever you use render method you must pass a new attribute ",(0,i.kt)("inlineCode",{parentName:"li"},"blockSsr"),". Here is an example:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$featuredContentServerSideRender = Components::checkAttr('featuredContentServerSideRender', $attributes, $manifest);\n\necho Components::render(\n    'card-article',\n    Components::props(\n        'cardArticle',\n        $props,\n        [\n            'blockSsr' => $featuredContentServerSideRender,\n        ]\n    ),\n);\n\necho Components::render(\n    'layout',\n    Components::props('layout', $attributes, [\n        'blockClass' => $blockClass,\n        'blockSsr' => $featuredContentServerSideRender,\n    ]),\n);\n")),(0,i.kt)("h2",{id:"improvement-changes"},"Improvement changes:"),(0,i.kt)("p",null,"You should replace all instances where you are getting the data directly from the array like ",(0,i.kt)("inlineCode",{parentName:"p"},"$globalManifest['globalVariables']"),", this can be replaced with ",(0,i.kt)("inlineCode",{parentName:"p"},"Components::getSettings()"),".\nOr for examle getting the breakpoints ",(0,i.kt)("inlineCode",{parentName:"p"},"$globalManifest['globalVariables']['breakpoints']")," can be replaced with ",(0,i.kt)("inlineCode",{parentName:"p"},"Components::setSettingsGlobalVariablesBreakpoints()"),"."),(0,i.kt)("p",null,"Here are all the links for all of the Store helpers that you can use in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-libs/blob/feature/variables/src/Helpers/StoreTrait.php"},"PHP")," and in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-frontend-libs/blob/feature/variables/scripts/editor/store.js"},"JS"),"."),(0,i.kt)("p",null,"PHP example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$globalManifest = Components::getManifest(dirname(__DIR__, 2));\n\necho $globalManifest['namespace'];\n\n// replace with \n\necho Components::getSettingsNamespace();\n")),(0,i.kt)("p",null,"JS example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import { globalManifest } from '../../manifest.json';\n\nconst {\n    namespace,\n} = globalManifest;\n\n// replace with \nimport { select } from '@wordpress/data';\nimport { STORE_NAME } from '@eightshift/frontend-libs/scripts';\n\nconst namespace = select(STORE_NAME).getSettingsNamespace();\n")),(0,i.kt)("h2",{id:"optional-changes"},"Optional changes:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Migration time: ~5min.")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Find all ",(0,i.kt)("inlineCode",{parentName:"li"},"outputCssVariables")," function usage (JS and PHP) and remove 4th parameter ",(0,i.kt)("inlineCode",{parentName:"li"},"globalManifest")," because it is not in use anymore.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"At this point this parameter will not cause any error but it will be removed in the next major release and then it will cause a fatal error so you should remove it.")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Find ",(0,i.kt)("inlineCode",{parentName:"li"},"outputCssVariablesGlobal")," function usage (JS and PHP) and remove the parameter ",(0,i.kt)("inlineCode",{parentName:"li"},"globalManifest")," because it is not in use anymore.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"At this point this parameter will not cause any error but it will be removed in the next major release and then it will cause a fatal error so you should remove it.")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Add style changes to ",(0,i.kt)("inlineCode",{parentName:"li"},"src>assets>styles>parts>utils>_core.scss")," file in the ",(0,i.kt)("inlineCode",{parentName:"li"},"body")," selector to provide content flickering on render. Here is an example:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scss"},"body {\n    //...\n    opacity: var(--es-loaded-opacity, 0);\n\n    transition: {\n        property: opacity;\n        duration: 0.5s;\n        delay: 0.6s;\n    };\n}\n")))}d.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);