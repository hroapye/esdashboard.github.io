(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{234:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(1),s=n(9),a=(n(0),n(308)),i={id:"extending-classes",title:"Extending Classes"},o={id:"basics/extending-classes",title:"Extending Classes",description:"[![docs-source](https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a)](https://github.com/infinum/eightshift-libs)",source:"@site/docs/basics/extending-classes.md",permalink:"/eightshift-docs/docs/basics/extending-classes",sidebar:"docs",previous:{title:"Namespaces",permalink:"/eightshift-docs/docs/basics/namespaces"},next:{title:"Autowiring",permalink:"/eightshift-docs/docs/basics/autowiring"}},c=[{value:"Example",id:"example",children:[]}],l={rightToc:c};function u(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/infinum/eightshift-libs"}),Object(a.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a",alt:"docs-source"})))),Object(a.b)("p",null,"You can extend every class from the library. To follow the good practice, you should never use the class directly from the Eightshift-libs in your service container (except from helpers and traits). Instead, you should create a class in your project and extend the class from the Eightshift-libs. That is why we made all those ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"wp-cli"}),"WP-CLI")," commands you saw in the previous chapter."),Object(a.b)("p",null,"We don't do any magic in the Eightshift-libs like in previous versions. All classes contain only the methods you need to call using WordPress hooks or filters."),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("p",null,"Let's look at a way to add a class that enqueues theme front-end scripts and styles.\nGo to the ",Object(a.b)("strong",{parentName:"p"},"root")," of your theme. Using the terminal, run this command:"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"wp boilerplate create_enqueue_admin")),Object(a.b)("p",null,"This command will output something like this in your project, taking care of your projects namespace and vendor prefixes, as well as the package name and the text-domain:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"<?php\n\n/**\n * The Admin Enqueue specific functionality.\n *\n * @package CoolProject\\Enqueue\\Admin\n */\n\ndeclare(strict_types=1);\n\nnamespace CoolProject\\Enqueue\\Admin;\n\nuse CoolProject\\Config\\Config;\nuse CoolProjectVendor\\EightshiftLibs\\Enqueue\\Admin\\AbstractEnqueueAdmin;\nuse CoolProjectVendor\\EightshiftLibs\\Manifest\\ManifestInterface;\n\n/**\n * Class EnqueueAdmin\n *\n * This class handles enqueue scripts and styles.\n */\nclass EnqueueAdmin extends AbstractEnqueueAdmin\n{\n\n  /**\n   * Create a new admin instance.\n   *\n   * @param ManifestInterface $manifest Inject manifest which holds data about assets from manifest.json.\n   */\n  public function __construct(ManifestInterface $manifest)\n  {\n    $this->manifest = $manifest;\n  }\n\n  /**\n   * Register all the hooks\n   *\n   * @return void\n   */\n  public function register(): void\n  {\n    add_action('login_enqueue_scripts', [ $this, 'enqueueStyles' ]);\n    add_action('admin_enqueue_scripts', [ $this, 'enqueueStyles' ], 50);\n    add_action('admin_enqueue_scripts', [ $this, 'enqueueScripts' ]);\n  }\n\n  /**\n   * Method that returns assets name used to prefix asset handlers.\n   *\n   * @return string\n   */\n  public function getAssetsPrefix(): string\n  {\n    return Config::getProjectName();\n  }\n\n  /**\n   * Method that returns assets version for versioning asset handlers.\n   *\n   * @return string\n   */\n  public function getAssetsVersion(): string\n  {\n    return Config::getProjectVersion();\n  }\n}\n")),Object(a.b)("p",null,"As you can see from the provided example, we created a new class and extended the functionality from the Eightshift-libs."),Object(a.b)("p",null,"In your new class, you have a ",Object(a.b)("inlineCode",{parentName:"p"},"register")," method that must be in every class that registers WordPress action hooks or filters. We call these ",Object(a.b)("strong",{parentName:"p"},"service classes"),"."),Object(a.b)("p",null,"Your class contains three action hooks now. From this example, you can see that, if you don't want to use some functionality, remove the action, and it will not be used anymore. For more details on what each hook's callback does, go to the extended class in the Eightshift-libs and see the logic defined there."))}u.isMDXComponent=!0},308:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),s=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=s.a.createContext({}),u=function(e){var t=s.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},p=function(e){var t=u(e.components);return s.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},h=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),h=r,f=p["".concat(i,".").concat(h)]||p[h]||d[h]||a;return n?s.a.createElement(f,o({ref:t},l,{components:n})):s.a.createElement(f,o({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<a;l++)i[l]=n[l];return s.a.createElement.apply(null,i)}return s.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);