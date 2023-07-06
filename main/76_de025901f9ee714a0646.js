"use strict";(self.webpackChunkantm=self.webpackChunkantm||[]).push([[76],{8076:function(s,n,a){a.r(n),n.default={tile:"Rapper是什么？",docs:'<h1>Rapper 是什么？</h1>\n<blockquote>\n<p>注：可以使用@antmjs/api 代替</p>\n</blockquote>\n<p>Rapper 是 TypeScript 的最佳拍档，它可以帮你生成具有类型定义的请求方案。</p>\n<ul>\n<li>无需自行书写请求代码，把 HTTP 接口当做函数调用</li>\n<li>请求参数/返回数据类型化，静态校验、自动补全快到飞起</li>\n</ul>\n<div class="card"><h3 id="%40antmjs%2Frapper%20%E6%98%AF%E4%BB%80%E4%B9%88%EF%BC%9F"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>@antmjs/rapper 是什么？</h3>\n<p>基于 Rapper 开发，使配置更灵活，同时增加本地类型同步远程文档重要功能</p>\n<ul>\n<li>++++</li>\n<li>本地接口类型上传到 rapper 远程文档，本地编码驱动远程文档</li>\n<li>自定义请求函数模板，满足不同编程规范</li>\n</ul>\n</div><div class="card"><h3 id="%E5%BF%AB%E9%80%9F%E5%BC%80%E5%A7%8B"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>快速开始</h3>\n<ol>\n<li>\n<p>package.json scripts 中 添加\n{ &quot;rap&quot; : &quot;npx rapper&quot;}</p>\n</li>\n<li>\n<p>配置 antm.config.js</p>\n</li>\n</ol>\n<div class="code-box-max">\n<div class="copy-code-btn"></div>\n<pre><code class="language-js">{\n  <span class="hljs-attr">rapper</span>: {\n    <span class="hljs-comment">// 拉取接口地址</span>\n    apiUrl?: string;\n    <span class="hljs-comment">/** rap 前端地址，默认是 http://rap2.taobao.org */</span>\n    rapUrl?: string;\n    <span class="hljs-comment">// 生成的文件目录地址</span>\n    rapperPath?: string;\n    <span class="hljs-comment">// rap登录cookie</span>\n    tokenCookie?: string;\n    <span class="hljs-comment">// rap项目id</span>\n    repositoryId?: number;\n  }\n}\n</code></pre>\n</div>\n<ol start="3">\n<li>开始写你的 ts 接口类型, 然后执行 npm run rap</li>\n</ol>\n</div><div class="card"><h3 id="rapper%20%E5%90%8D%E7%A7%B0%E5%AF%B9%E5%BA%94%20%E6%8E%A5%E5%8F%A3%20ts%20%E7%B1%BB%E5%9E%8B"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>rapper 名称对应 接口 ts 类型介绍</h3>\n<blockquote>\n<p>ts 接口类型需要配合 rapper 使用</p>\n</blockquote>\n<ul>\n<li>暂时不支持 url 带 path 参数\n<blockquote>\n<p>rapper 接口字段名称对应</p>\n</blockquote>\n</li>\n</ul>\n<div class="code-box-max">\n<div class="copy-code-btn"></div>\n<pre><code class="language-ts"><span class="hljs-keyword">interface</span> XY {\n  <span class="hljs-attr">x</span>: <span class="hljs-built_in">number</span>\n  <span class="hljs-attr">y</span>: <span class="hljs-built_in">number</span>\n  <span class="hljs-attr">z</span>: <span class="hljs-built_in">number</span>\n}\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">type</span> <span class="hljs-title class_">IUserInfo</span> = {\n  <span class="hljs-attr">request</span>: {\n    <span class="hljs-comment">// (1)</span>\n    age?: <span class="hljs-built_in">string</span> <span class="hljs-comment">// (2)</span>\n  }\n  <span class="hljs-attr">response</span>: {\n    <span class="hljs-comment">// (3)</span>\n    <span class="hljs-comment">/**\n     *\n     * <span class="hljs-doctag">@value</span> <span class="hljs-variable">true</span>\n     */</span>\n    <span class="hljs-attr">success</span>: <span class="hljs-built_in">boolean</span>\n    <span class="hljs-attr">data</span>: {\n      <span class="hljs-comment">/**\n       * 数组演示 // (4)\n       * <span class="hljs-doctag">@rule</span> 123 // (6)\n       */</span>\n      <span class="hljs-attr">array</span>: {\n        <span class="hljs-comment">/**\n         * 名称\n         * <span class="hljs-doctag">@value</span> #cname // (5)\n         */</span>\n        <span class="hljs-attr">name</span>: <span class="hljs-built_in">string</span>\n        <span class="hljs-comment">/**\n         * 支持泛型以及接口引用\n         */</span>\n        <span class="hljs-attr">other</span>: <span class="hljs-variable constant_">XY</span>\n      }[]\n    }\n  }\n}\n</code></pre>\n</div>\n<p>以下是 rapper 中含义</p>\n<ul>\n<li>1 [request] 请求参数定义;</li>\n<li>2 [age?: string] 入参定义字段名称，必选，类型;</li>\n<li>3 [response] 返回数据定义;</li>\n<li>4 [jsDoc 描述： 数组演示] 字段简介</li>\n<li>5 [jsDoc 关键字：@value #cname] 字段初始值</li>\n<li>6 [jsDoc 关键字：@rule 123] 字段生成规则</li>\n</ul>\n<blockquote>\n<p>注意 jsDoc 关键字的值中【@】符号由于转义问题需要替换成【#】或者【@】或者【/@】</p>\n</blockquote>\n</div><div class="card"><h3 id="%E5%91%BD%E4%BB%A4%E5%87%BD%E5%85%A5%E5%8F%82%E4%BC%9A%E5%92%8C%20config%20%E5%90%88%E5%B9%B6%EF%BC%88%E5%91%BD%E4%BB%A4"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>命令函入参会和 config 合并（命令行优先级更高）</h3>\n<ul>\n<li>--u 上传</li>\n<li>--d 下载</li>\n<li>--m xx 指定 moduleId，不传默认提交更改的模块</li>\n</ul>\n</div><div class="card"><h3 id="rapper%20%E9%85%8D%E7%BD%AE%20config%20%E6%9C%89%E4%B8%89%E7%A7%8D"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>rapper 配置 config 有三种方案</h3>\n<h5>方案一（推荐）</h5>\n<p>通过 antm.config.js 配置 config</p>\n<div class="code-box-max">\n<div class="copy-code-btn"></div>\n<pre><code class="language-js"><span class="hljs-comment">// &lt;!-- antm.config.js文件 --&gt;</span>\n<span class="hljs-keyword">const</span> antmRapper = <span class="hljs-built_in">require</span>(<span class="hljs-string">&#x27;@antmjs/rapper&#x27;</span>)\n<span class="hljs-comment">// &lt;!--  使用antm 提供 defineConfig 会有类型提示 --&gt;</span>\n<span class="hljs-keyword">export</span>.<span class="hljs-property">default</span> = antmRapper.<span class="hljs-title function_">defineConfig</span>({\n  <span class="hljs-attr">upload</span>: { <span class="hljs-attr">xx</span>: xx }, <span class="hljs-comment">// 本地上传 配置</span>\n})\n</code></pre>\n</div>\n<h5>方案二</h5>\n<p>通过 命令行参数执行 config 路径</p>\n<div class="code-box-max">\n<div class="copy-code-btn"></div>\n<pre><code class="language-bash">  $ npx rapper --config  ./config/index.js\n</code></pre>\n</div>\n<div class="code-box-max">\n<div class="copy-code-btn"></div>\n<pre><code class="language-js"><span class="hljs-comment">// &lt;!-- ./config/index.js文件 --&gt;</span>\n<span class="hljs-keyword">const</span> antmRapper = <span class="hljs-built_in">require</span>(<span class="hljs-string">&#x27;@antmjs/rapper&#x27;</span>)\n<span class="hljs-comment">// &lt;!--  antmRapper 提供 defineConfig 会有类型提示 --&gt;</span>\n<span class="hljs-keyword">export</span>.<span class="hljs-property">default</span> = antmRapper.<span class="hljs-title function_">defineConfig</span>({\n  <span class="hljs-attr">upload</span>: { <span class="hljs-attr">xx</span>: xx }, <span class="hljs-comment">// 本地上传 配置</span>\n  <span class="hljs-attr">download</span>: { <span class="hljs-attr">xx</span>: xx } <span class="hljs-comment">// 远程下载 配置</span>\n})\n</code></pre>\n</div>\n<h5>方案三</h5>\n<p>通过 package.json 配置 antm.rapper</p>\n<div class="code-box-max">\n<div class="copy-code-btn"></div>\n<pre><code class="language-js">&lt;!--package.<span class="hljs-property">json</span>  文件  --&gt;\n{\n  <span class="hljs-string">&#x27;antm&#x27;</span>: {\n  <span class="hljs-string">&#x27;rapper&#x27;</span>: {\n    <span class="hljs-string">&#x27;upload&#x27;</span>: { <span class="hljs-attr">xx</span>: xx }, <span class="hljs-comment">// 本地上传 配置</span>\n  }\n}\n}\n</code></pre>\n</div>\n</div><div class="card"><h3 id="%E6%9C%AC%E5%9C%B0%E4%BB%A3%E7%A0%81%E7%B1%BB%E5%9E%8B%E5%90%8C%E6%AD%A5%E5%88%B0%E8%BF%9C%E7%A8%8B%20raper%20%E6%96%87%E6%A1%A3"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>本地代码类型同步到远程 raper 文档</h3>\n<ul>\n<li>解析本地文件</li>\n<li>fetch 方法追加注释 （接口 id 接口模块 id）</li>\n<li>格式化 类型</li>\n<li>调用 rapper 接口</li>\n</ul>\n</div><div class="card"><h3 id="%E5%A2%9E%E9%87%8F%E6%9B%B4%E6%96%B0%E5%AE%9E%E7%8E%B0"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>增量更新实现</h3>\n<ul>\n<li>每次更新会给文件头部 加一个 MD5 值</li>\n<li>初始化会检查合法的文件（符合 formatFunc 结构的文件） MD5 值 对不住</li>\n<li>去解析当前文件以及 依赖当前文件的文件</li>\n<li>提交变更的模块接口（文件级检查）,做不到方法级检查</li>\n</ul>\n</div><div class="card"><h3 id="config%20%E6%8E%A5%E5%8F%A3%E7%B1%BB%E5%9E%8B"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>config 接口类型</h3>\n<div class="code-box-max">\n<div class="copy-code-btn"></div>\n<pre><code class="language-ts"><span class="hljs-keyword">interface</span> <span class="hljs-title class_">IConfig</span> {\n  <span class="hljs-comment">// 下载配置</span>\n  <span class="hljs-attr">download</span>: {\n    <span class="hljs-comment">/**\n     *\n     * <span class="hljs-doctag">@param</span> params   rap上填入接口的信息\n     * <span class="hljs-doctag">@returns</span>\n     * reqTypeName: request类型名称;\n     * resTypeName: response类型名称;\n     * funcMain: 请求函数体;\n     */</span>\n    requestFunc?: <span class="hljs-function">(<span class="hljs-params">params: {\n      funcDescription: <span class="hljs-built_in">string</span>\n      repositoryId: <span class="hljs-built_in">number</span>\n      moduleId: <span class="hljs-built_in">number</span>\n      interfaceId: <span class="hljs-built_in">number</span>\n      requestUrl: <span class="hljs-built_in">string</span>\n      requestMethod: <span class="hljs-built_in">string</span>\n      rapUrl: <span class="hljs-built_in">string</span>\n    }</span>) =&gt;</span> {\n      <span class="hljs-attr">reqTypeName</span>: <span class="hljs-built_in">string</span>\n      <span class="hljs-attr">resTypeName</span>: <span class="hljs-built_in">string</span>\n      <span class="hljs-attr">funcMain</span>: <span class="hljs-built_in">string</span>\n    }\n    <span class="hljs-comment">/**\n     *\n     * <span class="hljs-doctag">@param</span> params   rap 上填入的module信息\n     * <span class="hljs-doctag">@returns</span>\n     * fileName: 模块的文件名称;\n     * moduleHeader: 模块头部的banner;\n     */</span>\n    requestModule?: <span class="hljs-function">(<span class="hljs-params">params: {\n      repositoryId: <span class="hljs-built_in">number</span>\n      moduleId: <span class="hljs-built_in">number</span>\n      moduleRapUrl: <span class="hljs-built_in">string</span>\n      moduleDescription: <span class="hljs-built_in">string</span>\n    }</span>) =&gt;</span> {\n      <span class="hljs-attr">fileName</span>: <span class="hljs-built_in">string</span>\n      <span class="hljs-attr">moduleHeader</span>: <span class="hljs-built_in">string</span>\n    }\n    <span class="hljs-comment">// 自定下载的module</span>\n    moduleId?: <span class="hljs-built_in">number</span>\n  }\n  <span class="hljs-attr">rapper</span>: {\n    <span class="hljs-comment">// 拉取接口地址</span>\n    apiUrl?: <span class="hljs-built_in">string</span>\n    <span class="hljs-comment">/** rap 前端地址，默认是 http://rap2.taobao.org */</span>\n    rapUrl?: <span class="hljs-built_in">string</span>\n    <span class="hljs-comment">// 生成的文件目录地址</span>\n    rapperPath?: <span class="hljs-built_in">string</span>\n    <span class="hljs-comment">// rap登录cookie</span>\n    tokenCookie?: <span class="hljs-built_in">string</span>\n    <span class="hljs-comment">// rap项目id</span>\n    repositoryId?: <span class="hljs-built_in">number</span>\n  }\n  <span class="hljs-attr">upload</span>: {\n    <span class="hljs-comment">//  模式 type 文件扫描入口是type（需要编译生成fetch)</span>\n    <span class="hljs-comment">//  fetch 文件扫描入口是fetch请求函数（不需要编译）</span>\n    mode?: <span class="hljs-string">&#x27;type&#x27;</span> | <span class="hljs-string">&#x27;fetch&#x27;</span>\n    <span class="hljs-comment">// 需要解析的文件名称正则</span>\n    fileRegex?: <span class="hljs-built_in">string</span>\n    <span class="hljs-comment">/**\n     *\n     * <span class="hljs-doctag">@param</span> params  函数信息\n     * <span class="hljs-doctag">@returns</span>\n     *  resTypeName: request 类型名称;\n     * reqTypeName: response  类型名称;\n     * reqUrl: 请求 url;\n     * reqMethod: 请求method;\n     * interfaceId: 接口id;\n     */</span>\n    formatFunc?: <span class="hljs-function">(<span class="hljs-params">params: {\n      funcName: <span class="hljs-built_in">string</span>\n      body: <span class="hljs-built_in">string</span>\n      comment: <span class="hljs-built_in">string</span>\n      // 三种函数 定义 会被选中到导出\n      funcType: <span class="hljs-string">&#x27;CallExpression&#x27;</span> | <span class="hljs-string">&#x27;FunctionDeclaration&#x27;</span> | <span class="hljs-string">&#x27;ArrowFunction&#x27;</span>\n    }</span>) =&gt;</span> {\n      <span class="hljs-attr">resTypeName</span>: <span class="hljs-built_in">string</span>\n      <span class="hljs-attr">reqTypeName</span>: <span class="hljs-built_in">string</span>\n      <span class="hljs-attr">reqUrl</span>: <span class="hljs-built_in">string</span>\n      <span class="hljs-attr">reqMethod</span>: <span class="hljs-built_in">string</span>\n      <span class="hljs-attr">interfaceId</span>: <span class="hljs-built_in">number</span>\n    } | <span class="hljs-literal">null</span>\n    <span class="hljs-comment">// 指定下载的 模块id</span>\n    moduleId?: <span class="hljs-built_in">number</span>\n    <span class="hljs-comment">// webpack 别名</span>\n    alias?: <span class="hljs-title class_">Record</span>&lt;<span class="hljs-built_in">string</span>, <span class="hljs-built_in">string</span>&gt;\n  }\n  <span class="hljs-comment">// 内部标识使用 不用管</span>\n  __completion?: <span class="hljs-built_in">boolean</span>\n  <span class="hljs-comment">// 是不是上传</span>\n  <span class="hljs-attr">isUpload</span>: <span class="hljs-built_in">boolean</span>\n}\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">type</span> <span class="hljs-title class_">IOptions</span> = <span class="hljs-title class_">Partial</span>&lt;<span class="hljs-title class_">IConfig</span>&gt;\n</code></pre>\n</div>\n</div><div class="card"><h3 id="defaultConfig%20%E4%BC%9A%E5%92%8C%E4%BC%A0%E8%BF%9B%E6%9D%A5%E7%9A%84"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>defaultConfig 会和传进来的 config 合并补全</h3>\n<p>::::_QA</p>\n<div class="code-box-max">\n<div class="copy-code-btn"></div>\n<pre><code class="language-typescript">   <span class="hljs-keyword">const</span> defaultOptions = {\n    <span class="hljs-attr">download</span>: {\n      <span class="hljs-comment">//请求 function 模板</span>\n      <span class="hljs-title function_">requestFunc</span>(<span class="hljs-params">params</span>) {\n        <span class="hljs-keyword">function</span> <span class="hljs-title function_">getFnName</span>(<span class="hljs-params">url: <span class="hljs-built_in">string</span></span>): <span class="hljs-literal">null</span> | <span class="hljs-built_in">string</span> {\n          <span class="hljs-keyword">const</span> fnName = url.<span class="hljs-title function_">match</span>(<span class="hljs-regexp">//([.a-z0-9_-]+)/([a-z0-9_-]+$)/i</span>);\n          <span class="hljs-keyword">if</span> (fnName &amp;&amp; fnName.<span class="hljs-property">length</span> === <span class="hljs-number">3</span>) {\n            <span class="hljs-keyword">if</span> (<span class="hljs-regexp">/^d+.d+$/</span>.<span class="hljs-title function_">test</span>(fnName[<span class="hljs-number">1</span>])) {\n              <span class="hljs-keyword">return</span> fnName[<span class="hljs-number">2</span>];\n            }\n            <span class="hljs-keyword">return</span> fnName[<span class="hljs-number">1</span>] + fnName[<span class="hljs-number">2</span>].<span class="hljs-title function_">charAt</span>(<span class="hljs-number">0</span>).<span class="hljs-title function_">toUpperCase</span>() + fnName[<span class="hljs-number">2</span>].<span class="hljs-title function_">slice</span>(<span class="hljs-number">1</span>);\n          }\n          <span class="hljs-keyword">return</span> <span class="hljs-literal">null</span>;\n        }\n        <span class="hljs-keyword">const</span> fnName = <span class="hljs-title function_">getFnName</span>(params.<span class="hljs-property">requestUrl</span>);\n        <span class="hljs-keyword">if</span> (!fnName) {\n          <span class="hljs-keyword">throw</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">TypeError</span>(<span class="hljs-string">&#x27;接口路径不对,请修改合规&#x27;</span>);\n        }\n        <span class="hljs-keyword">const</span> camelCaseName = <span class="hljs-string">::::_QA<span class="hljs-subst">::::_ABfnName.charAt(<span class="hljs-number">0</span>).toUpperCase()}</span><span class="hljs-subst">::::_ABfnName.slice(<span class="hljs-number">1</span>)}</span>::::_QA</span>;\n        <span class="hljs-keyword">const</span> reqTypeName = <span class="hljs-string">::::_QAIReq<span class="hljs-subst">::::_ABcamelCaseName}</span>::::_QA</span>;\n        <span class="hljs-keyword">const</span> resTypeName = <span class="hljs-string">::::_QAIRes<span class="hljs-subst">::::_ABcamelCaseName}</span>::::_QA</span>;\n        <span class="hljs-keyword">return</span> {\n          reqTypeName,\n          resTypeName,\n          <span class="hljs-attr">funcMain</span>: <span class="hljs-string">::::_QA\n              /**\n               * 接口名：<span class="hljs-subst">::::_ABparams.funcDescription}</span>\n               * Rap 地址: <span class="hljs-subst">::::_ABparams.rapUrl}</span>?id=<span class="hljs-subst">::::_ABparams.repositoryId}</span>&amp;mod=<span class="hljs-subst">::::_ABparams.moduleId}</span>&amp;itf=<span class="hljs-subst">::::_ABparams.interfaceId}</span>\n               */\n              export const <span class="hljs-subst">::::_ABfnName}</span> = createFetch&lt;<span class="hljs-subst">::::_ABreqTypeName}</span>, <span class="hljs-subst">::::_ABresTypeName}</span>&gt;(&#x27;<span class="hljs-subst">::::_ABparams.requestUrl}</span>&#x27;, &#x27;<span class="hljs-subst">::::_ABparams.requestMethod}</span>&#x27;)\n              ::::_QA</span>,\n        };\n      },\n      <span class="hljs-comment">//请求 函数共工头（用于引入函数</span>\n      <span class="hljs-title function_">requestModule</span>(<span class="hljs-params">params</span>) {\n        <span class="hljs-keyword">return</span> {\n          <span class="hljs-attr">fileName</span>: params.<span class="hljs-property">moduleDescription</span>,\n          <span class="hljs-attr">moduleHeader</span>: <span class="hljs-string">::::_QA\n/* eslint-disable */\n/* tslint:disable */\n// @ts-nocheck\n\nimport instance from &#x27;@/utils/request&#x27;\n\nfunction createFetch&lt;REQ extends Record&lt;string, unknown&gt;, RES extends {data: any}&gt; (url: string, method: string) {\n  return  &lt;T extends boolean = false&gt;(\n    data: REQ,\n    options?: {\n      proxy?: T\n      pageError?: boolean\n    }\n  ): Promise&lt;T extends true ? RES[&#x27;data&#x27;] : RES&gt; =&gt; {\n    return instance(\n      {\n        url,\n        method,\n        data,\n      },\n      options\n    )\n  }\n}\n::::_QA</span>,\n        };\n      },\n    },\n    <span class="hljs-attr">rapper</span>: {\n      <span class="hljs-comment">// 拉取接口地址</span>\n      <span class="hljs-attr">apiUrl</span>:\n        <span class="hljs-string">&#x27;http://rap2api.taobao.org/repository/get?id=284428&amp;token=TTDNJ7gvXgy9R-9axC-7_mbi4ZxEPlp6&#x27;</span>,\n      <span class="hljs-comment">/** rap 前端地址，默认是 http://rap2.taobao.org */</span>\n      <span class="hljs-attr">rapUrl</span>: <span class="hljs-string">&#x27;http://rap2.taobao.org&#x27;</span>,\n\n      <span class="hljs-attr">rapperPath</span>: <span class="hljs-string">&#x27;./src/actions&#x27;</span>,\n      <span class="hljs-attr">tokenCookie</span>:\n        <span class="hljs-string">&#x27;aliyungf_tc=f3a5915db08fc3b6de3ec5df0d0b3a5dc07c0b701e44cf4bf98a855799570bfe; koa.sid=2I353u8TTwtrHSdPXdJ9t8Mx5lTOeQFV; koa.sid.sig=D4vYLNcryQ8vcU4GkJJknTi_Fm8&#x27;</span>,\n      <span class="hljs-attr">repositoryId</span>: <span class="hljs-number">284428</span>,\n    },\n    <span class="hljs-attr">upload</span>: {\n      <span class="hljs-attr">mode</span>: <span class="hljs-string">&#x27;type&#x27;</span> <span class="hljs-keyword">as</span> <span class="hljs-keyword">const</span>,\n      <span class="hljs-comment">// fileRegex 将尝试使用绝对文件路径检测测试文件</span>\n      <span class="hljs-comment">// (/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$</span>\n      <span class="hljs-attr">fileRegex</span>: <span class="hljs-string">&#x27;./src/actions/types/.*(js|jsx|ts|tsx)&#x27;</span>,\n\n      <span class="hljs-title function_">formatFunc</span>(<span class="hljs-params">params</span>) {\n        <span class="hljs-comment">// createFetch&lt;IReqGoodsQbf, IResGoodsQbf&gt;(&#x27;/c/api/1.0/approve/goods/qbf&#x27;, &#x27;GET&#x27;)</span>\n        <span class="hljs-comment">// export const goodsQbf = createFetch&lt;IGoodsQbf[&#x27;request&#x27;], IGoodsQbf[&#x27;response&#x27;]&gt;(&quot;/c/api/1.0/approve/goods/qbf&quot;, &quot;GET&quot;);</span>\n        <span class="hljs-keyword">const</span> [_, reqTypeName, resTypeName, reqUrl, reqMethod] =\n          params.<span class="hljs-property">body</span>.<span class="hljs-title function_">match</span>(\n            <span class="hljs-regexp">/createFetch&lt;([w[]&#x27;&quot;]+),s+([w[]&#x27;&quot;]+)&gt;([&#x27;&quot;]([sS]+)[&#x27;&quot;], [&#x27;&quot;]([a-zA-Z]+)[&#x27;&quot;])/</span>,\n          ) || [];\n        <span class="hljs-keyword">if</span> (!reqTypeName || !resTypeName) {\n          <span class="hljs-keyword">return</span> <span class="hljs-literal">null</span>;\n        }\n        <span class="hljs-keyword">const</span> matchInterfaceId = params.<span class="hljs-property">comment</span>.<span class="hljs-title function_">match</span>(<span class="hljs-regexp">/http://rap2.tao[sS]+&amp;itf=(d+)/</span>);\n        <span class="hljs-keyword">return</span> {\n          resTypeName,\n          reqTypeName,\n          <span class="hljs-comment">// 如果返回 null &#x27;&#x27; undefined 0 等 就会被认为是新的接口，会触发上rap操作</span>\n          <span class="hljs-attr">interfaceId</span>: matchInterfaceId ? <span class="hljs-title class_">Number</span>(matchInterfaceId[<span class="hljs-number">1</span>]) : <span class="hljs-literal">null</span>,\n          <span class="hljs-attr">reqUrl</span>: reqUrl,\n          <span class="hljs-attr">reqMethod</span>: reqMethod,\n        };\n      },\n      <span class="hljs-comment">// webpack 别名 alias 绝对路径</span>\n      <span class="hljs-attr">alias</span>: {\n        <span class="hljs-string">&#x27;@&#x27;</span>: <span class="hljs-string">&#x27;./src&#x27;</span>,\n      },\n    },\n    <span class="hljs-attr">isUpload</span>: <span class="hljs-literal">true</span>,\n  };\n    <span class="hljs-string">::::_QA::::_QA</span><span class="hljs-string">::::_QA\n</span></code></pre>\n</div>\n::::_QA\n</div>',h3Ids:"@antmjs/rapper 是什么？:::快速开始:::rapper 名称对应 接口 ts 类型:::命令函入参会和 config 合并（命令:::rapper 配置 config 有三种:::本地代码类型同步到远程 raper 文档:::增量更新实现:::config 接口类型:::defaultConfig 会和传进来的",codePath:[]}}}]);