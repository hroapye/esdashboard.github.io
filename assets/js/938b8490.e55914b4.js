"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[4033],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?o.createElement(g,s(s({ref:t},c),{},{components:n})):o.createElement(g,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,s[1]=r;for(var p=2;p<i;p++)s[p]=n[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5760:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return p},assets:function(){return c},toc:function(){return d},default:function(){return m}});var o=n(7462),a=n(3366),i=(n(7294),n(3905)),s=["components"],r={title:"Using assets in a project",description:"Step-by-step guide on how to add assets like images or icons to your theme.",slug:"using-assets",authors:"iobrado",date:new Date("2022-04-28T00:00:00.000Z"),tags:["eightshift","boilerplate","assets","images","icons"],hide_table_of_contents:!1},l=void 0,p={permalink:"/eightshift-docs/blog/using-assets",source:"@site/blog/2022-04-25-using-assets.md",title:"Using assets in a project",description:"Step-by-step guide on how to add assets like images or icons to your theme.",date:"2022-04-28T00:00:00.000Z",formattedDate:"April 28, 2022",tags:[{label:"eightshift",permalink:"/eightshift-docs/blog/tags/eightshift"},{label:"boilerplate",permalink:"/eightshift-docs/blog/tags/boilerplate"},{label:"assets",permalink:"/eightshift-docs/blog/tags/assets"},{label:"images",permalink:"/eightshift-docs/blog/tags/images"},{label:"icons",permalink:"/eightshift-docs/blog/tags/icons"}],readingTime:3.92,truncated:!0,authors:[{name:"Igor Obradovi\u0107",title:"WordPress Engineer @ Infinum",key:"iobrado"}],frontMatter:{title:"Using assets in a project",description:"Step-by-step guide on how to add assets like images or icons to your theme.",slug:"using-assets",authors:"iobrado",date:"2022-04-28T00:00:00.000Z",tags:["eightshift","boilerplate","assets","images","icons"],hide_table_of_contents:!1},nextItem:{title:"Adding fonts",permalink:"/eightshift-docs/blog/adding-fonts"}},c={authorsImageUrls:[void 0]},d=[{value:"Adding images",id:"adding-images",level:2},{value:"Using SVG files from manifest",id:"using-svg-files-from-manifest",level:2},{value:"Using icons for editor and block options",id:"using-icons-for-editor-and-block-options",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:d};function m(e){var t=e.components,r=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Previously, we went through the process of adding fonts to your project. While the process of adding additional assets like images or icons has some similarities to adding fonts, it also has its unique steps. In this post, we'll cover multiple ways of adding assets and using them on your site."),(0,i.kt)("h2",{id:"adding-images"},"Adding images"),(0,i.kt)("p",null,"Similar to fonts, there is also a dedicated folder for adding images that will be used in a theme. The location of this folder is ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"assets/images")),". The procedure to add images is even simpler than fonts, which you can read about in ",(0,i.kt)("a",{parentName:"p",href:"/blog/adding-fonts"},"Adding fonts")," blog post. Just follow these steps to add a new image:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"add the image in inside ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"assets/images"))," folder"),(0,i.kt)("li",{parentName:"ul"},"include it in ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"assets/images/index.js"))),(0,i.kt)("li",{parentName:"ul"},"run ",(0,i.kt)("inlineCode",{parentName:"li"},"npm start")," to rebuild assets")),(0,i.kt)("p",null,"The new image will now be available in the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"public"))," folder. The use case for this is adding a favicon or a logo to your project. To use this image in one of your templates or blocks, you have to add the following in your ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"php"))," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"use YourNamespace\\Manifest\\Manifest;\n// ...\n\napply_filters(Manifest::MANIFEST_ITEM, 'logo.svg');\n")),(0,i.kt)("p",null,"The filter we are using is called ",(0,i.kt)("inlineCode",{parentName:"p"},"manifest-item")," and we use it to get the URL of the asset from the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"public"))," folder. You can read more about this in ",(0,i.kt)("a",{parentName:"p",href:"/docs/basics/manifest"},"our documentation"),"."),(0,i.kt)("p",null,"You can see how this is being used for rendering both favicon and header logo in your theme's ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"header.php"))," file."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Tip"),": Don't hardcode the filter name in the ",(0,i.kt)("inlineCode",{parentName:"p"},"apply_filters")," function. Always call it via class constants.")),(0,i.kt)("p",null,"For better organization, you can add additional folders (e.g. ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"icons")),", ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"placeholders")),") inside the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"assets/images"))," folder. Here's an example of how to include them:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Icons\nimport './icons/upload.svg';\n\n// Placeholders\nimport './placeholders/post.png';\nimport './placeholders/page.png';\n")),(0,i.kt)("h2",{id:"using-svg-files-from-manifest"},"Using SVG files from manifest"),(0,i.kt)("p",null,"If you recall from a previous blog post about ",(0,i.kt)("a",{parentName:"p",href:"/blog/modifying-blocks-color-theme"},"Modifying Blocks"),", you might have already seen an alternative approach to including SVG files in your block or component."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"If you don't have it in your project, be sure to read our blog post about adding blocks and components by using ",(0,i.kt)("a",{parentName:"p",href:"/blog/adding-blocks-wpcli"},"WP CLI"),".")),(0,i.kt)("p",null,"Open ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"src/Blocks/components/quote/manifest.json"))," and you'll see that the icon used by the component is defined inside ",(0,i.kt)("inlineCode",{parentName:"p"},"resources")," as a key-value pair. Key represents the name that we will use to fetch the icon, while the value is SVG code."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},"\"resources\": {\n    \"icon\": \"<svg fill='none' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'>...</svg>\"\n}\n")),(0,i.kt)("p",null,"In order to make the minification of SVG files as easy as possible, our teammate Goran made an awesome tool called ",(0,i.kt)("a",{parentName:"p",href:"https://svg-2-wp.goranalkovic.com/"},"SVG2WP"),". Some of the options include making attributes JSX compatible, or replacing the color value with ",(0,i.kt)("inlineCode",{parentName:"p"},"currentColor"),", which can then be used to change the SVG color through CSS."),(0,i.kt)("p",null,"You've already seen the use of ",(0,i.kt)("inlineCode",{parentName:"p"},"currentColor")," in the above-mentioned blog post, where we've modified the color of the SVG."),(0,i.kt)("p",null,"The output of the icon on frontend is very simple. In the Quote component, it was done the following way:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"<?php $manifest = Components::getManifest(__DIR__); ?>\n\n<i class=\"<?php echo \\esc_attr(\"{$componentClass}__icon\"); ?>\">\n    <?php echo $manifest['resources']['icon']; // phpcs:ignore Eightshift.Security.ComponentsEscape.OutputNotEscaped ?>\n</i>\n")),(0,i.kt)("p",null,"An excellent example, where you can see in even more detail how SVGs are being used, is our ",(0,i.kt)("inlineCode",{parentName:"p"},"icon")," component. It isn't included in Eightshift theme by default, so you have to add it to your project with WP CLI. To include it in your project, use the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"wp boilerplate use_component --name=icon\n")),(0,i.kt)("p",null,"If you include the Icon component inside a block, you will have the option to choose between multiple icons defined in the manifest. Another way to render SVGs from the Icon component is by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"Components::render")," helper method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"echo Components::render(\n    'icon',\n    [\n        'blockClass' => $componentClass,\n        'iconName' => 'download',\n    ]\n);\n")),(0,i.kt)("p",null,"Here are some examples of icons available out-of-the-box in our Icon component:"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Icon component",src:n(9706).Z,width:"470",height:"46"})),(0,i.kt)("h2",{id:"using-icons-for-editor-and-block-options"},"Using icons for editor and block options"),(0,i.kt)("p",null,"When developing your blocks and adding new options, you may need to add icons to improve the user experience. We have many icons already available for use. You can see the full list in our ",(0,i.kt)("a",{parentName:"p",href:"/storybook"},"Storybook")," under ",(0,i.kt)("inlineCode",{parentName:"p"},"Editor -> Icons")," section. We already added the icon when adding a new Color Theme option for the Quote block. Here is the simplified version:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import { ColorPaletteCustom, IconLabel, icons } from '@eightshift/frontend-libs/scripts';\n\nreturn (\n    <ColorPaletteCustom\n        label={<IconLabel icon={icons.color} label={__('Color Theme', 'es-theme')} />}\n        // ...\n    />\n);\n")),(0,i.kt)("p",null,"This was the end result when we were adding a new option in our Quote block:"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Color Theme Options",src:n(953).Z,width:"275",height:"143"})),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"As you could see in this blog post, there are multiple ways of adding assets to a project. It all depends on how these will be used and what the scope of their use will be."))}m.isMDXComponent=!0},953:function(e,t,n){t.Z=n.p+"assets/images/color-theme-options-f2092fff89153d89e0dc2941c8e17aa9.png"},9706:function(e,t){t.Z="data:image/png;base64,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OzevzS17yEX46LVh/ZKdt87t514dGicCdyGw8gwKO1gBryS81L4auH3ZwDee8TLEBY240MY+9vOFhHHsPwct+MOXNbR5C+YyBq8N77yn6x+Jm7EyT2z+zKzfiAY71q4713+03qHbxqB7EXgigdCDFQDsZsZ9+rwTktXCl2DviwbjdxSruVdraRxsrS5P1z/CCwdpif2IncixM/xX/4iMjFu2RGAngfCDFcHkNjPadpf0pYfDkv9dQJ89bNnH/p3aczzTWGrPiGEn/6frH117xsscusMBRU21PGHfHXJ+lLnGi8CdCLxDzLGhwgs+HYgLn687NvXbsVnDfYwatJ/Qu4um0Rg0XgRmCPCzotiX2J8o3JvYE/b5fNAfERCBYQKXHazDSjRBBERABERABP4BAuEf4f8HmCgEERABERABEXAT0MHqRqeJIiACIiACIvBKQAfrKxO1iIAIiIAIiICbgA5WNzpNFAEREAEREIFXAjpYX5moRQREQAREQATcBHSwutFpogiIgAiIgAi8EtDB+spELSIgAiIgAiLgJqCD1Y1OE0VABERABETglYAO1lcmahEBERABERABNwEdrG50migCIiACIiACrwR0sL4yUYsIiIAIiIAIuAn8D0V/4wL/wnflAAAAAElFTkSuQmCC"}}]);