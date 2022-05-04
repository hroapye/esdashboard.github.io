"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[8887],{6875:function(e,t,o){o.r(t),o.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return c}});var n=o(3117),a=o(102),i=(o(7294),o(3905)),r=["components"],l={title:"Modifying blocks - Color Theme",description:"Step-by-step guide on how to modify and expand the functionality of existing blocks.",slug:"modifying-blocks-color-theme",authors:"obradovic",date:new Date("2022-03-22T00:00:00.000Z"),tags:["eightshift","boilerplate","components","blocks"],hide_table_of_contents:!1},s=void 0,d={permalink:"/eightshift-docs/blog/modifying-blocks-color-theme",source:"@site/blog/2022-03-04-modifying-blocks.md",title:"Modifying blocks - Color Theme",description:"Step-by-step guide on how to modify and expand the functionality of existing blocks.",date:"2022-03-22T00:00:00.000Z",formattedDate:"March 22, 2022",tags:[{label:"eightshift",permalink:"/eightshift-docs/blog/tags/eightshift"},{label:"boilerplate",permalink:"/eightshift-docs/blog/tags/boilerplate"},{label:"components",permalink:"/eightshift-docs/blog/tags/components"},{label:"blocks",permalink:"/eightshift-docs/blog/tags/blocks"}],readingTime:8.45,truncated:!0,authors:[{name:"Igor Obradovi\u0107",title:"WordPress Engineer",url:"https://github.com/iobrado",imageURL:"https://avatars.githubusercontent.com/u/23059501?v=4",key:"obradovic"}],frontMatter:{title:"Modifying blocks - Color Theme",description:"Step-by-step guide on how to modify and expand the functionality of existing blocks.",slug:"modifying-blocks-color-theme",authors:"obradovic",date:"2022-03-22T00:00:00.000Z",tags:["eightshift","boilerplate","components","blocks"],hide_table_of_contents:!1},prevItem:{title:"Adding fonts",permalink:"/eightshift-docs/blog/adding-fonts"},nextItem:{title:"Adding components and blocks with WP-CLI",permalink:"/eightshift-docs/blog/adding-blocks-wpcli"}},u={authorsImageUrls:[void 0]},c=[{value:"Modifying a block or a component?",id:"modifying-a-block-or-a-component",level:2},{value:"What will we do?",id:"what-will-we-do",level:2},{value:"Adding background",id:"adding-background",level:2},{value:"Adding new colors to your project",id:"adding-new-colors-to-your-project",level:2},{value:"Adding a new attribute and options to manifest",id:"adding-a-new-attribute-and-options-to-manifest",level:2},{value:"CSS variables",id:"css-variables",level:2},{value:"Outputting CSS variables in editor",id:"outputting-css-variables-in-editor",level:2},{value:"Outputting CSS variables in the PHP template",id:"outputting-css-variables-in-the-php-template",level:2},{value:"Adding options",id:"adding-options",level:2},{value:"Adding transitions in the editor",id:"adding-transitions-in-the-editor",level:2},{value:"Closing thoughts",id:"closing-thoughts",level:2}],p={toc:c};function h(e){var t=e.components,l=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In our previous post, we covered how to use Storybook and WP-CLI to add additional blocks to your project. This post will walk you through modifying an existing block step-by-step."),(0,i.kt)("p",null,"Since Eightshift Development kit is a starter theme, made for developers to jumpstart and speed up their development, you're welcome to modify files in it directly. There is no need to create a child theme to protect changes from updates."),(0,i.kt)("h2",{id:"modifying-a-block-or-a-component"},"Modifying a block or a component?"),(0,i.kt)("p",null,'Because we used the Quote block in our previous post, we will continue using it as an example as it\'s a fairly simple one. One of the first questions you may ask yourself could be: "Should I modify a component or a block?". And the answer is - it depends.'),(0,i.kt)("p",null,"If you compare ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"components/quote/quote.php"))," (component) and ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"custom/quote/quote.php"))," (block), you'll notice that most of the HTML code is inside the component, while the block pretty much only renders the Quote component inside a wrapper. This example will walk you through the whole process of adding a new attribute and its options to a block."),(0,i.kt)("h2",{id:"what-will-we-do"},"What will we do?"),(0,i.kt)("p",null,"We want to style the block and add a new feature. An option to choose a color theme for the Quote block. These are the specs:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"each Quote block has a background with rounded corners"),(0,i.kt)("li",{parentName:"ul"},"option for three color themes: blue, green, yellow"),(0,i.kt)("li",{parentName:"ul"},"the background has a lighter shade of the selected color"),(0,i.kt)("li",{parentName:"ul"},"quote icon has a stronger shade of the selected color")),(0,i.kt)("p",null,"To better help you visualize, this is how the Quote block should look like after making these changes, showcasing all three color theme variations:\n",(0,i.kt)("img",{alt:"Color Theme Examples",src:o(6467).Z,width:"1067",height:"234"})),(0,i.kt)("h2",{id:"adding-background"},"Adding background"),(0,i.kt)("p",null,"Initial background styling is fairly straightforward. Navigate to ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"src/Blocks/components/quote/quote-style.scss"))," and paste the following code inside ",(0,i.kt)("inlineCode",{parentName:"p"},".quote")," class:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},"padding: calc(var(--base-font-size) * 1.6rem);\nborder-radius: calc(var(--base-font-size) * 2rem);\nbackground-color: global-settings(colors, light);\n")),(0,i.kt)("p",null,"You may notice we're using ",(0,i.kt)("inlineCode",{parentName:"p"},"calc")," instead of directly writing values in rems. This way makes it much easier to calculate pixel size since ",(0,i.kt)("inlineCode",{parentName:"p"},"calc(var(--base-font-size) * 1.6rem)")," equals ",(0,i.kt)("inlineCode",{parentName:"p"},"16px"),"."),(0,i.kt)("p",null,"For now, we will add a simple light grey background to see how it looks. We'll replace this value later with a CSS variable."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Tip:")," don't hardcode hex color values directly inside your component. Instead, use colors defined in your global manifest.")),(0,i.kt)("p",null,"You'll notice that the changes are visible both in the editor and on the frontend. Since the Gutenberg editor adds some additional markup, sometimes you'll need to add additional styling only for the editor. In case we need to override something in the editor for our Quote component, we would simply create ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"quote-editor.scss")),"."),(0,i.kt)("h2",{id:"adding-new-colors-to-your-project"},"Adding new colors to your project"),(0,i.kt)("p",null,"Because the theme currently doesn't have all the required colors, we need to add additional colors which will be used for the color theme feature. We will use the colors already defined in the manifest for icon color, but we need to add lighter variations of those colors to use them for the background. Navigate to your global manifest, which is located inside ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"src/Blocks/manifest.json"))," and add the following values inside ",(0,i.kt)("inlineCode",{parentName:"p"},"colors"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "Light Blue",\n    "slug": "light-blue",\n    "color": "#B3E5FC"\n},\n{\n    "name": "Light Green",\n    "slug": "light-green",\n    "color": "#DCEDC8"\n},\n{\n    "name": "Light Yellow",\n    "slug": "light-yellow",\n    "color": "#FFF9C4"\n}\n')),(0,i.kt)("h2",{id:"adding-a-new-attribute-and-options-to-manifest"},"Adding a new attribute and options to manifest"),(0,i.kt)("p",null,"For editors to be able to choose which color theme to use for the Quote block, we need to define an attribute for it in the manifest. Navigate to ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"src/Blocks/components/quote/manifest.json"))," and add the following value inside ",(0,i.kt)("inlineCode",{parentName:"p"},"attributes"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"quoteColorTheme": {\n    "type": "string",\n    "default": "blue"\n}\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Double-check the path of the manifest used in this example. We're adding it inside the Quote component manifest, not the Quote block manifest. ")),(0,i.kt)("p",null,"After that, since we want to have a fixed number of options, we need to define available options. We can do that inside ",(0,i.kt)("inlineCode",{parentName:"p"},"options")," which is on the same level as ",(0,i.kt)("inlineCode",{parentName:"p"},"attributes"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"options": {\n    "quoteColorTheme": [\n        "blue",\n        "green",\n        "yellow"\n    ]\n}\n')),(0,i.kt)("h2",{id:"css-variables"},"CSS variables"),(0,i.kt)("p",null,"Our next step is to add CSS variables to the Quote component's manifest. Inside ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"manifest.json")),", on the same level as ",(0,i.kt)("inlineCode",{parentName:"p"},"attributes"),", add the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"variables": {\n    "quoteColorTheme": {\n        "blue": [\n            {\n                "variable": {\n                    "quote-background-color": "var(--global-colors-light-blue)",\n                    "quote-icon-color": "var(--global-colors-blue)"\n                }\n            }\n        ],\n        "green": [\n            {\n                "variable": {\n                    "quote-background-color": "var(--global-colors-light-green)",\n                    "quote-icon-color": "var(--global-colors-green)"\n                }\n            }\n        ],\n        "yellow": [\n            {\n                "variable": {\n                    "quote-background-color": "var(--global-colors-light-yellow)",\n                    "quote-icon-color": "var(--global-colors-yellow)"\n                }\n            }\n        ]\n    }\n}\n')),(0,i.kt)("p",null,"Now, navigate back to Quote component's ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"quote-style.scss"))," and replace the ",(0,i.kt)("inlineCode",{parentName:"p"},"background-color")," which we used for testing with the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},"background-color: var(--quote-background-color);\n")),(0,i.kt)("p",null,"As you can see, the variable name is the same one we used when defining background color variations in the manifest. For icon color, we do the same. After adding a new color to ",(0,i.kt)("inlineCode",{parentName:"p"},"&__icon")," selector, our code should now look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},"&__icon {\n    display: block;\n    margin-bottom: 1rem;\n    color: var(--quote-icon-color);\n}\n")),(0,i.kt)("h2",{id:"outputting-css-variables-in-editor"},"Outputting CSS variables in editor"),(0,i.kt)("p",null,"To make our color theme visible in editor, we have to add few lines of code to ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"src/Blocks/components/quote/components/quote-editor.js"))," file. First, we need to import a few functions. We need ",(0,i.kt)("inlineCode",{parentName:"p"},"useMemo")," from ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"react")),", ",(0,i.kt)("inlineCode",{parentName:"p"},"outputCssVariables")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"getUnique")," from ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"@eightshift/frontend-libs/scripts"))," and finally, we need data from the global manifest."),(0,i.kt)("p",null,"After importing these and defining a unique constant, your code should look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import React, { useMemo } from 'react';\nimport classnames from 'classnames';\nimport { checkAttr, props, selector, outputCssVariables, getUnique } from '@eightshift/frontend-libs/scripts';\nimport { HeadingEditor } from '../../heading/components/heading-editor';\nimport { ParagraphEditor } from '../../paragraph/components/paragraph-editor';\nimport manifest from './../manifest.json';\nimport globalManifest from './../../../manifest.json';\n\nexport const QuoteEditor = (attributes) => {\n    const unique = useMemo(() => getUnique(), []);\n    //...\n")),(0,i.kt)("p",null,"Next, we need to add a unique ",(0,i.kt)("inlineCode",{parentName:"p"},"data-id")," and output the ",(0,i.kt)("inlineCode",{parentName:"p"},"<style>")," tag containing CSS variables."),(0,i.kt)("p",null,"Modify your return statement so it looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"return (\n    <>\n        <figure className={quoteClass} data-id={unique}>\n            {outputCssVariables(attributes, manifest, unique, globalManifest)}\n            //...\n")),(0,i.kt)("p",null,"If you try adding a Quote block in the editor, you should notice that it now has a light blue background with a quote icon in a darker shade of blue. This is the default value for the ",(0,i.kt)("inlineCode",{parentName:"p"},"quoteColorTheme")," attribute we added in the component's manifest."),(0,i.kt)("h2",{id:"outputting-css-variables-in-the-php-template"},"Outputting CSS variables in the PHP template"),(0,i.kt)("p",null,"The PHP template for the Quote component is located in ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"src/Blocks/components/quote/quote.php")),". This process is similar to the one described above, it's just written in PHP. All helper methods we need for this are contained inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"Components")," class, which is already included in this file."),(0,i.kt)("p",null,"Similar to the JS template, we need a unique value, assign it to ",(0,i.kt)("inlineCode",{parentName:"p"},"data-id"),", and output CSS variables. After adding these, the code should look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'<?php\n//...\n$quoteClass = Components::classnames([\n    Components::selector($componentClass, $componentClass),\n    Components::selector($blockClass, $blockClass, $selectorClass),\n    Components::selector($additionalClass, $additionalClass),\n]);\n\n$unique = Components::getUnique();\n?>\n\n<figure class="<?php echo \\esc_attr($quoteClass); ?>" data-id="<?php echo \\esc_attr($unique); ?>">\n    <?php echo Components::outputCssVariables($attributes, $manifest, $unique, $globalManifest); ?>\n    //...\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Both PHP and JS have the same helpers to make writing code for editor and front view as similar as possible.")),(0,i.kt)("h2",{id:"adding-options"},"Adding options"),(0,i.kt)("p",null,"After adding these snippets, you should already see that your block is using the blue color theme, which we defined as the default value for ",(0,i.kt)("inlineCode",{parentName:"p"},"quoteColorTheme")," in the manifest. We want to have an easy way to change the color theme in the editor. Now we'll add a new option which will do just that."),(0,i.kt)("p",null,"We will add these options in ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"src/Blocks/components/quote/components/quote-options.js")),". Again, we will start with the imports we will need. First one is ",(0,i.kt)("inlineCode",{parentName:"p"},"__")," from ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"@wordpress/i18n"))," package. Additional imports we need are from ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"@eightshift/frontend-libs/scripts")),", so we will just add those to the list."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { __ } from '@wordpress/i18n';\nimport {\n    //...\n    ColorPaletteCustom,\n    IconLabel,\n    icons,\n    getOption\n} from '@eightshift/frontend-libs/scripts';\n")),(0,i.kt)("p",null,"Next, we can add a new attribute in options called ",(0,i.kt)("inlineCode",{parentName:"p"},"showQuoteColorTheme")," and set it to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," by default. If we want to use this component in other blocks, we can use this attribute for showing or hiding Color Theme Options on a specific block that uses the Quote component."),(0,i.kt)("p",null,"Additionally, we need to get values for ",(0,i.kt)("inlineCode",{parentName:"p"},"quoteUse")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"quoteColorTheme")," attributes. We can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"checkAttr")," helper which first checks if a block has saved attribute value. If not, it defaults to a value defined in the manifest."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"export const QuoteOptions = (attributes) => {\n    //...\n    const {\n        setAttributes,\n        //...\n        showQuoteColorTheme = true,\n    } = attributes;\n    //...\n    const quoteUse = checkAttr('quoteUse', attributes, manifest);\n    const quoteColorTheme = checkAttr('quoteColorTheme', attributes, manifest);\n")),(0,i.kt)("p",null,"Finally, we add the Color Palette, which we will use for switching color themes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"return (\n    <>\n        //...\n\n        {quoteUse &&\n            <>\n                {showQuoteColorTheme &&\n                    <ColorPaletteCustom\n                        label={<IconLabel icon={icons.color} label={__('Color Theme', 'es-theme')} />}\n                        colors={getOption('quoteColorTheme', attributes, manifest, true)}\n                        value={quoteColorTheme}\n                        onChange={(value) => setAttributes({ [getAttrKey('quoteColorTheme', attributes, manifest)]: value })}\n                    />\n                }\n            //...\n")),(0,i.kt)("p",null,"The Color Theme option should now be visible and fully functional inside the Quote block."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Color Theme Options",src:o(953).Z,width:"275",height:"143"})),(0,i.kt)("h2",{id:"adding-transitions-in-the-editor"},"Adding transitions in the editor"),(0,i.kt)("p",null,"The options work, but you may notice there is no transition in the editor. It is not necessary but will improve the user experience. Since we do not need transition effects on the frontend, we can add these CSS rules only to the editor. To do that, we start by creating ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"quote-editor.scss"))," file inside ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"src/Blocks/components/quote"))," folder."),(0,i.kt)("p",null,"We add the following CSS:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},".quote {\n    transition: background-color 0.3s ease-in-out;\n\n    &__icon {\n        transition: color 0.3s ease-in-out;\n    }\n}\n")),(0,i.kt)("p",null,"Because we've added a new file, we have to run ",(0,i.kt)("inlineCode",{parentName:"p"},"npm start")," again. Now the transition between colors will be much smoother."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Color Theme Change",src:o(4460).Z,width:"772",height:"338"})),(0,i.kt)("h2",{id:"closing-thoughts"},"Closing thoughts"),(0,i.kt)("p",null,"In this post, we've covered the whole process of adding a new attribute. It involves a lot of steps and things to keep in mind, but once you get used to it, you'll be able to add quite powerful features to your blocks."),(0,i.kt)("p",null,"One more important thing to keep in mind is the expandability of your attributes. When adding new attributes, don't think just about what you need now, keep in mind that you may need to expand it later."),(0,i.kt)("p",null,'The way we built Color Theme functionality makes adding additional color themes a breeze and can be done in a matter of minutes. For "homework", try adding two more color themes of your choice. Good luck!'))}h.isMDXComponent=!0},3905:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return h}});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(o),h=a,m=p["".concat(s,".").concat(h)]||p[h]||c[h]||i;return o?n.createElement(m,r(r({ref:t},u),{},{components:o})):n.createElement(m,r({ref:t},u))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,r=new Array(i);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var d=2;d<i;d++)r[d]=o[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},4460:function(e,t,o){t.Z=o.p+"assets/images/color-theme-change-cd1ede6d92339a8178f33466d37a7e16.gif"},6467:function(e,t,o){t.Z=o.p+"assets/images/color-theme-examples-9c526b6d5abb2b21785634f8602a25a0.png"},953:function(e,t,o){t.Z=o.p+"assets/images/color-theme-options-f2092fff89153d89e0dc2941c8e17aa9.png"}}]);