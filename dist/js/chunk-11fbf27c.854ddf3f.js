(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-11fbf27c","chunk-2d0e8bd2"],{1098:function(n,e,t){"use strict";e.__esModule=!0;var o=t("17ed"),u=c(o),i=t("f893"),r=c(i),d="function"===typeof r.default&&"symbol"===typeof u.default?function(n){return typeof n}:function(n){return n&&"function"===typeof r.default&&n.constructor===r.default&&n!==r.default.prototype?"symbol":typeof n};function c(n){return n&&n.__esModule?n:{default:n}}e.default="function"===typeof r.default&&"symbol"===d(u.default)?function(n){return"undefined"===typeof n?"undefined":d(n)}:function(n){return n&&"function"===typeof r.default&&n.constructor===r.default&&n!==r.default.prototype?"symbol":"undefined"===typeof n?"undefined":d(n)}},"17ed":function(n,e,t){n.exports={default:t("d8d6"),__esModule:!0}},2638:function(n,e,t){"use strict";function o(){return o=Object.assign||function(n){for(var e,t=1;t<arguments.length;t++)for(var o in e=arguments[t],e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},o.apply(this,arguments)}var u=["attrs","props","domProps"],i=["class","style","directives"],r=["on","nativeOn"],d=function(n){return n.reduce(function(n,e){for(var t in e)if(n[t])if(-1!==u.indexOf(t))n[t]=o({},n[t],e[t]);else if(-1!==i.indexOf(t)){var d=n[t]instanceof Array?n[t]:[n[t]],l=e[t]instanceof Array?e[t]:[e[t]];n[t]=d.concat(l)}else if(-1!==r.indexOf(t))for(var a in e[t])if(n[t][a]){var f=n[t][a]instanceof Array?n[t][a]:[n[t][a]],s=e[t][a]instanceof Array?e[t][a]:[e[t][a]];n[t][a]=f.concat(s)}else n[t][a]=e[t][a];else if("hook"==t)for(var p in e[t])n[t][p]=n[t][p]?c(n[t][p],e[t][p]):e[t][p];else n[t]=e[t];else n[t]=e[t];return n},{})},c=function(n,e){return function(){n&&n.apply(this,arguments),e&&e.apply(this,arguments)}};n.exports=d},"3f6b":function(n,e,t){n.exports={default:t("51b6"),__esModule:!0}},"41b2":function(n,e,t){"use strict";e.__esModule=!0;var o=t("3f6b"),u=i(o);function i(n){return n&&n.__esModule?n:{default:n}}e.default=u.default||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n}},"6d66":function(n,e){n.exports='<h1 id="组件开发说明">组件开发说明</h1>\n<h2 id="创建组件目录">创建组件目录</h2>\n<p>在src/packages目录下创建新的文件夹作为组件目录，文件夹的名称为组件名称，命名方式为-连接小写单词，不允许使用大写</p>\n<p>使用命令行创建组件目录 <code> npm run create 组件名 组件中文名 类型</code></p>\n<p>类型: <code> tool | component | directive </code></p>\n<p>示例: <code> npm run create m-button 按钮 component</code></p>\n<p>组件的目录结构如下：</p>\n<p>UI组件命名特别说明：</p>\n<ul>\n<li>UI组件以M开头，例如MInput</li>\n</ul>\n<pre><code class="language-html">component-name（示例）//组件名称 \n│ \n├─src  // 组件代码文件夹  \n│  │   \n│  └─index.ts(x) 或 index.vue\n 必须提供\n│\n├─demo  // 必须提供，示例文件夹，必须包含至少一个示例 \n│  │   \n│  ├─demo1  示例1文件夹\n│  │   │\n│  │   ├─index.vue 必须提供，示例1组件\n│  │   │\n│  │   └─index.md 必须提供，示例1说明\n│  │\n│  ├─demo2   示例2文件夹\n│  │   │\n│  │   ├─index.vue 示例2组件\n│  │   │\n│  │   └─index.md 示例说明\n│  │\n│  ├─index.vue 准备好其他文件之后运行npm run docs即可生成\n│  │\n│  ├─README.md 必须提供，组件的基本介绍\n│  │\n│  ├─props.md UI组件的Props说明（按需要提供）\n│  │\n│  ├─events.md 组件的事件说明（按需要提供）\n│  │\n│  ├─functions.md 组件的对外暴露的方法说明（按需要提供）\n│  │\n│  └─slots.md 组件的插槽说明（按需要提供）\n│\n└─index.ts // 必须提供，对外暴露文件，默认暴露的对象必须具有install方法 </code></pre>\n<blockquote>\n<p>如果添加的是UI组件，命名直接使用组件名称\n如果添加的是vue指令组件，命名使用 xxx-directive</p>\n</blockquote>\n<h3 id="编写组件文件">编写组件文件</h3>\n<ol>\n<li>在组件文件夹下创建src文件夹</li>\n<li>在组件文件夹下创建index.ts</li>\n<li>在第1步中创建的src文件夹下创建index.vue（UI组件）或index.ts（指令或其他类型组件）文件</li>\n<li>编写代码</li>\n</ol>\n<h2 id="编写组件示例">编写组件示例</h2>\n<ol>\n<li>在组件文件夹下创建demo文件夹</li>\n<li>在demo文件夹下创建README.md</li>\n<li>每组示例在demo文件夹下分别创建demo1、demo2等文件夹</li>\n<li>在demo1、demo2等文件夹下创建index.md、index.vue文件</li>\n<li>index.vue为示例组件、index.md为示例说明</li>\n</ol>\n<h2 id="生成组件文档">生成组件文档</h2>\n<p>生成文档需要在组件代码编写完成后运行一次</p>\n<p>运行以下命令</p>\n<pre><code>npm run docs</code></pre><blockquote>\n<p>如果添加了新的示例或修改了示例的代码时需要重新运行生成文档的命令\n修改.md文件不需要重新生成文档\n修改已存在的示例代码在开发时可以实时看到运行效果，只是文档中的示例代码会不同步</p>\n</blockquote>\n'},"8b0b":function(n,e){n.exports='<h1 id="更新日志维护说明">更新日志维护说明</h1>\n<ul>\n<li>每增加一个新的版本，须在map.json中添加版本的信息</li>\n</ul>\n<p>map.json的内容如下：</p>\n<pre><code class="language-json">{\n  &quot;0.1.0&quot;: {\n    &quot;time&quot;: &quot;2019-04-06&quot;\n  },\n  &quot;0.1.1&quot;: {\n    &quot;time&quot;: &quot;2019-04-07&quot;\n  }\n}</code></pre>\n<ul>\n<li>在当前文件加下添加 <code><版本号>.md</code>文件</li>\n</ul>\n'},e757:function(n,e,t){"use strict";t.r(e);var o=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"home"},[t("m-input",{model:{value:n.form.value,callback:function(e){n.$set(n.form,"value",e)},expression:"form.value"}}),t("markdown",{attrs:{source:n.content}}),t("markdown",{staticStyle:{"margin-top":"50px"},attrs:{source:n.version}})],1)},u=[],i=t("d225"),r=t("b0b4"),d=t("308d"),c=t("6bb5"),l=t("4e2b"),a=t("9ab4"),f=t("d656"),s=t("cd6e"),p=(t("5121"),t("60a3")),m=t("8b0b"),v=t.n(m),b=t("6d66"),x=t.n(b);p["f"].use(s["a"]),p["f"].component("Markdown",f["a"]);var h=function(n){function e(){var n;return Object(i["a"])(this,e),n=Object(d["a"])(this,Object(c["a"])(e).apply(this,arguments)),n.content=x.a,n.form={},n.version=v.a,n}return Object(l["a"])(e,n),Object(r["a"])(e,[{key:"mounted",value:function(){this.form={value:"2"}}}]),e}(p["f"]);h=a["b"]([Object(p["a"])({name:"Home"})],h);var y=h,q=y,O=t("2877"),_=Object(O["a"])(q,o,u,!1,null,null,null);e["default"]=_.exports},f893:function(n,e,t){n.exports={default:t("f921"),__esModule:!0}}}]);
//# sourceMappingURL=chunk-11fbf27c.854ddf3f.js.map