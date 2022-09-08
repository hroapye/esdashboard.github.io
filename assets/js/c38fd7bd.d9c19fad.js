"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[2080],{1807:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var a=n(3117),i=n(102),o=(n(7294),n(3905)),r=["components"],l={title:"How to use ACF in your project",description:"Example of using ACF plugin in your project",slug:"acf-in-a-project",authors:"obradovic",date:new Date("2022-05-17T00:00:00.000Z"),tags:["eightshift","boilerplate","acf","advanced custom fields","theme options"],hide_table_of_contents:!1},s=void 0,c={permalink:"/blog/acf-in-a-project",source:"@site/blog/2022-05-10-acf-in-a-project.md",title:"How to use ACF in your project",description:"Example of using ACF plugin in your project",date:"2022-05-17T00:00:00.000Z",formattedDate:"May 17, 2022",tags:[{label:"eightshift",permalink:"/blog/tags/eightshift"},{label:"boilerplate",permalink:"/blog/tags/boilerplate"},{label:"acf",permalink:"/blog/tags/acf"},{label:"advanced custom fields",permalink:"/blog/tags/advanced-custom-fields"},{label:"theme options",permalink:"/blog/tags/theme-options"}],readingTime:5.465,truncated:!0,authors:[{name:"Igor Obradovi\u0107",title:"WordPress Engineer",url:"https://github.com/iobrado",imageURL:"https://avatars.githubusercontent.com/u/23059501?v=4",key:"obradovic"}],frontMatter:{title:"How to use ACF in your project",description:"Example of using ACF plugin in your project",slug:"acf-in-a-project",authors:"obradovic",date:"2022-05-17T00:00:00.000Z",tags:["eightshift","boilerplate","acf","advanced custom fields","theme options"],hide_table_of_contents:!1},prevItem:{title:"Block Variations",permalink:"/blog/block-variations"},nextItem:{title:"Using assets in a project",permalink:"/blog/using-assets"}},p={authorsImageUrls:[void 0]},d=[{value:"Ways of registering ACF fields",id:"ways-of-registering-acf-fields",level:2},{value:"Exporting PHP code",id:"exporting-php-code",level:2},{value:"CustomMeta class",id:"custommeta-class",level:2},{value:"Using get_field()",id:"using-get_field",level:2},{value:"Theme Options",id:"theme-options",level:2},{value:"Tip - create a helper class",id:"tip---create-a-helper-class",level:2}],u={toc:d};function m(e){var t=e.components,l=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you've worked with WordPress for a long time, you've heard of the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Advanced Custom Fields"))," plugin (",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"ACF"))," for short). While the use of blocks has simplified content editing, thus making meta fields less of a necessity, there are still cases in which meta fields are very useful."),(0,o.kt)("h2",{id:"ways-of-registering-acf-fields"},"Ways of registering ACF fields"),(0,o.kt)("p",null,"There are multiple approaches to ACF field registration. The easiest way to register fields is using the WP admin interface, but this approach has a few drawbacks. If you have many fields, this can impact performance because you are registering fields dynamically (information about registered fields is stored in the database). Another drawback is if you have multiple environments (e.g. local, staging, production), you'll have to export the fields and import them to other environments."),(0,o.kt)("p",null,"Other ways of registering ACF fields are either via PHP (code) or by reading from a JSON file. We prefer to use PHP because you can use OPcache to speed up field registration even more. If you are using Git, this approach is even better because you can commit the PHP code used for registering fields for easier portability across different environments. For that reason, Eightshift Development kit already has some goodies which will make field registration a breeze."),(0,o.kt)("h2",{id:"exporting-php-code"},"Exporting PHP code"),(0,o.kt)("p",null,"The approach we use for registering ACF fields is by adding those fields first through the WP Admin ACF interface. As an example, We'll add a field group called ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Intro")),", which will contain one text field of the same name. That field group will be displayed only on posts. You can add a few more fields, but for the sake of simplicity, we'll only use one field."),(0,o.kt)("p",null,"When you define all the fields you need, save them and go to ",(0,o.kt)("inlineCode",{parentName:"p"},"Custom Fields -> Tools"),". Here you will see an option to ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Export Field Groups")),". Simply select the field groups which you want to export and select ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Generate PHP")),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ACF PHP code export",src:n(5879).Z,width:"874",height:"335"})),(0,o.kt)("p",null,"This will generate a PHP code snippet that you can use in your theme. Now you may be wondering, where exactly should that code go?"),(0,o.kt)("h2",{id:"custommeta-class"},"CustomMeta class"),(0,o.kt)("p",null,"Those ACF goodies in Eightshift Development kit we talked about earlier? Let us introduce you to one of them. We have a WP CLI command which we can use to generate a CustomMeta class where we can add our field groups. The command is ",(0,o.kt)("inlineCode",{parentName:"p"},"wp boilerplate create_acf_meta"),". This command has one required parameter, and that is ",(0,o.kt)("inlineCode",{parentName:"p"},"name"),". To create a class that we will use for registering our custom fields, we'll use the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"wp boilerplate create_acf_meta --name=intro\n")),(0,o.kt)("p",null,"This command will generate a ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"CustomMeta"))," folder inside ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"src"))," folder and add a new file called ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"IntroAcfMeta.php")),". Inside that file, you should see the following method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"public function fields(): void\n{\n    if (function_exists('acf_add_local_field_group')) {\n        \\acf_add_local_field_group([]);\n    }\n}\n")),(0,o.kt)("p",null,"Go back to your PHP code export for ACF fields and select everything inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"acf_add_local_field_group()")," function and paste it into your function. To make it in line with our coding standards, we have to do the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"replace ",(0,o.kt)("inlineCode",{parentName:"li"},"array()")," with ",(0,o.kt)("inlineCode",{parentName:"li"},"[]")),(0,o.kt)("li",{parentName:"ul"},"make every label translatable and escaped - use ",(0,o.kt)("inlineCode",{parentName:"li"},"esc_html__()")),(0,o.kt)("li",{parentName:"ul"},"instead of hardcoding the field name, replace it with a class constant")),(0,o.kt)("p",null,"After all these changes, your code should look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"class IntroAcfMeta extends AbstractAcfMeta\n{\n\n    /**\n     * Intro field name.\n     */\n    public const INTRO_FIELD_NAME = 'intro';\n    \n    /**\n     * Render acf fields.\n     *\n     * @return void\n     */\n    public function fields(): void\n    {\n        if (function_exists('acf_add_local_field_group')) {\n            \\acf_add_local_field_group([\n                'key' => 'group_6269300acefda',\n                'title' =>  \\esc_html__('Intro', 'eightshift-theme'),\n                'fields' => [\n                    [\n                        'key' => 'field_6269300f8029b',\n                        'label' => \\esc_html__('Intro', 'eightshift-theme'),\n                        'name' => self::INTRO_FIELD_NAME,\n                        'type' => 'text',\n                        // ...\n                    ]\n                ]\n                // ...\n            ]);\n        }\n    }\n}\n")),(0,o.kt)("p",null,"The final step is to go back to the Custom Fields in WP admin and either delete or deactivate your field group from there, to prevent registering the fields twice. After adding field definitions in PHP and removing them in WP admin, your field should be visible when editing posts."),(0,o.kt)("h2",{id:"using-get_field"},"Using get_field()"),(0,o.kt)("p",null,"To fetch the saved meta value, we use ACF's ",(0,o.kt)("inlineCode",{parentName:"p"},"get_field()")," function, but here are a few tips that could improve your code quality. First, you should check if that function exists. That way, if ACF is deactivated on your site for whatever reason, your site won't break. The second tip is to use a class constant instead of hardcoding the field name. With these practices in mind, your code should look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use YourNamespace\\CustomMeta\\IntroAcfMeta;\n\n// ...\n\nif (function_exists('get_field')) {\n    $introText = get_field(IntroAcfMeta::INTRO_FIELD_NAME, $postId);\n}\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"It's better to use class constants because if you decide to change the field name, you will have to change it only in one place.")),(0,o.kt)("h2",{id:"theme-options"},"Theme Options"),(0,o.kt)("p",null,"ACF's Options page has a wide array of uses and it's very likely that you'll need some sort of Theme Options in your project. To make the implementation of Theme Options a bit easier, we have a CLI command which generates the ",(0,o.kt)("inlineCode",{parentName:"p"},"ThemeOptions")," class in your project. Just use the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"wp boilerplate create_theme_options\n")),(0,o.kt)("p",null,"This command generates a class with two methods. The first one, ",(0,o.kt)("inlineCode",{parentName:"p"},"createThemeOptionsPage()")," creates a Theme Options page and adds it to the WP Admin sidebar. The second one, ",(0,o.kt)("inlineCode",{parentName:"p"},"registerThemeOptions()"),", is what registers the fields you will have in Theme Options. Here is an example how Theme Options look after being created using ",(0,o.kt)("inlineCode",{parentName:"p"},"wp boilerplate"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ACF Theme Options",src:n(3007).Z,width:"982",height:"396"})),(0,o.kt)("p",null,"To add fields to your Theme Options, follow the steps from the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Exporting PHP code"))," section of this post and add the fields inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"'fields' => []")," array."),(0,o.kt)("h2",{id:"tip---create-a-helper-class"},"Tip - create a helper class"),(0,o.kt)("p",null,"In this blog post, we covered the whole process of registering and using ACF fields in your project. But, if you are using a lot of ACF fields, wrapping each ",(0,o.kt)("inlineCode",{parentName:"p"},"get_field()")," function with a ",(0,o.kt)("inlineCode",{parentName:"p"},"function_exists()")," conditional may become tedious at some point. For that reason, it may be a good idea to create a helper class that you can use for ACF functions."),(0,o.kt)("p",null,"I won't cover the whole process in detail, but I'll give you some general pointers."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"when registering plugin-related classes, use the ",(0,o.kt)("inlineCode",{parentName:"li"},"Plugins")," namespace. In this case, you should have namespace ",(0,o.kt)("inlineCode",{parentName:"li"},"YourNamespace\\Plugins\\Acf")),(0,o.kt)("li",{parentName:"ul"},"inside that namespace, you can create a class called ",(0,o.kt)("inlineCode",{parentName:"li"},"AcfHelper")),(0,o.kt)("li",{parentName:"ul"},"add a method ",(0,o.kt)("inlineCode",{parentName:"li"},"getField")," which accepts the same arguments as the ",(0,o.kt)("inlineCode",{parentName:"li"},"get_field()")," function"),(0,o.kt)("li",{parentName:"ul"},"add a method ",(0,o.kt)("inlineCode",{parentName:"li"},"getThemeOption")," which only accepts one argument, the field name, and the second argument is hardcoded"),(0,o.kt)("li",{parentName:"ul"},"use early returns in your methods")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"if (!function_exists('get_field')) {\n    return '';\n}\n")))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(f,r(r({ref:t},p),{},{components:n})):a.createElement(f,r({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5879:function(e,t,n){t.Z=n.p+"assets/images/acf-generate-php-dbe03aecc136422ae92eb3ba9e779a2a.png"},3007:function(e,t,n){t.Z=n.p+"assets/images/acf-theme-options-fe70fac7eae0f1feef6e4c932b0a3fc2.png"}}]);