"use strict";(self.webpackChunk_antmjs_doc=self.webpackChunk_antmjs_doc||[]).push([[3966],{3966:function(s,a,n){n.r(a),a.default={tile:"@antmjs/babel-preset",docs:'<h1>@antmjs/babel-preset</h1>\n<blockquote>\n<p>ES6+转译到 ES5 工具库</p>\n</blockquote>\n<div class="card"><h3 id="%E4%B8%BA%E4%BB%80%E4%B9%88%E9%9C%80%E8%A6%81"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>为什么需要</h3>\n<p>这个库包含了编译成 ES5 所需的最小可用 Presets，也就是说大部分情况下这个库能满足大部分的转译需求了。</p>\n</div><div class="card"><h3 id="%E5%AE%89%E8%A3%85"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>安装</h3>\n<pre><code class="language-bash">yarn add @antmjs/babel-preset --dev\n</code></pre>\n</div><div class="card"><h3 id="%E4%BD%BF%E7%94%A8"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>使用</h3>\n<p>babel.config.js</p>\n<pre><code class="language-javascript"><span class="hljs-keyword">const</span> path = <span class="hljs-built_in">require</span>(<span class="hljs-string">&#x27;path&#x27;</span>)\n<span class="hljs-keyword">const</span> apis = <span class="hljs-built_in">require</span>(<span class="hljs-string">&#x27;@tarojs/taro-h5/dist/taroApis&#x27;</span>)\n<span class="hljs-variable language_">module</span>.<span class="hljs-property">exports</span> = {\n  <span class="hljs-attr">presets</span>: [\n    [\n      <span class="hljs-string">&#x27;@antmjs/babel-preset&#x27;</span>,\n      {\n        <span class="hljs-attr">presets</span>: {\n          <span class="hljs-attr">env</span>: {\n            <span class="hljs-attr">debug</span>: <span class="hljs-literal">false</span>,\n\n            <span class="hljs-comment">/**\n             * false: 不处理polyfill，自己手动引入【全量】\n             * usage: 按需加载 polyfill，且不需要手动引入【按需】\n             * entry: 必须手动引入，但会根据设置的目标环境全量导入【按环境全量】\n             * 注：在 Babel 7.4.0 之后的版本，Babel官方明确建议了不再使用 <span class="hljs-doctag">@babel</span>/polyfill ，建议使用 core-js/stable 和 regenerator-runtime/runtime。本包已经安装了core-js、<span class="hljs-doctag">@babel</span>/plugin-transform-runtime和<span class="hljs-doctag">@babel</span>/runtime，所以选择false或者entry选项的只需要在主文件顶部引入core-js即可\n             */</span>\n            <span class="hljs-attr">useBuiltIns</span>: <span class="hljs-string">&#x27;usage&#x27;</span>,\n            <span class="hljs-attr">corejs</span>: { <span class="hljs-attr">version</span>: <span class="hljs-number">3</span>, <span class="hljs-attr">proposals</span>: <span class="hljs-literal">false</span> },\n            <span class="hljs-attr">modules</span>: <span class="hljs-literal">false</span>, <span class="hljs-comment">// 对es6的模块文件不做转译，以便使用tree shaking、sideEffects等</span>\n          },\n          <span class="hljs-attr">react</span>: {\n            <span class="hljs-attr">runtime</span>: <span class="hljs-string">&#x27;automatic&#x27;</span>,\n          },\n          <span class="hljs-attr">typescript</span>: {\n            <span class="hljs-attr">isTSX</span>: <span class="hljs-literal">true</span>,\n            <span class="hljs-attr">jsxPragma</span>: <span class="hljs-string">&#x27;React&#x27;</span>,\n            <span class="hljs-attr">allExtensions</span>: <span class="hljs-literal">true</span>,\n            <span class="hljs-attr">allowNamespaces</span>: <span class="hljs-literal">true</span>,\n          },\n        },\n        <span class="hljs-attr">decorators</span>: {\n          <span class="hljs-attr">legacy</span>: <span class="hljs-literal">false</span>,\n        },\n        <span class="hljs-attr">classProperties</span>: {\n          <span class="hljs-attr">loose</span>: <span class="hljs-literal">false</span>,\n        },\n        <span class="hljs-attr">runtime</span>: {\n          <span class="hljs-attr">absoluteRuntime</span>: path.<span class="hljs-title function_">dirname</span>(\n            <span class="hljs-built_in">require</span>.<span class="hljs-title function_">resolve</span>(<span class="hljs-string">&#x27;@babel/runtime-corejs3/package.json&#x27;</span>),\n          ),\n          <span class="hljs-attr">version</span>: <span class="hljs-built_in">require</span>(<span class="hljs-string">&#x27;@babel/runtime-corejs3/package.json&#x27;</span>).<span class="hljs-property">version</span>,\n          <span class="hljs-attr">corejs</span>: <span class="hljs-literal">false</span>,\n          <span class="hljs-attr">helpers</span>: <span class="hljs-literal">true</span>, <span class="hljs-comment">// 使用到@babel/runtime</span>\n          <span class="hljs-attr">regenerator</span>: <span class="hljs-literal">true</span>, <span class="hljs-comment">// 使用到@babel/runtime</span>\n          <span class="hljs-attr">useESModules</span>: <span class="hljs-literal">false</span>,\n        },\n        <span class="hljs-attr">enableReactRefresh</span>: <span class="hljs-literal">true</span>,\n      },\n    ],\n  ],\n  <span class="hljs-attr">plugins</span>: [\n    [\n      <span class="hljs-built_in">require</span>(<span class="hljs-string">&#x27;babel-plugin-transform-taroapi&#x27;</span>),\n      { <span class="hljs-attr">packageName</span>: <span class="hljs-string">&#x27;@tarojs/taro&#x27;</span>, apis },\n    ][ <span class="hljs-comment">// taro可以加，tree-shaking用</span>\n      (<span class="hljs-built_in">require</span>(<span class="hljs-string">&#x27;babel-plugin-import&#x27;</span>),\n      { <span class="hljs-attr">libraryName</span>: <span class="hljs-string">&#x27;antd&#x27;</span>, <span class="hljs-attr">style</span>: <span class="hljs-literal">true</span> },\n      <span class="hljs-string">&#x27;antd&#x27;</span>)\n    ],\n  ],\n}\n</code></pre>\n<p>package.json</p>\n<pre><code class="language-json"><span class="hljs-punctuation">{</span>\n  <span class="hljs-attr">&quot;browserslist&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span>\n    <span class="hljs-string">&quot;Chrome &gt;= 35&quot;</span><span class="hljs-punctuation">,</span>\n    <span class="hljs-string">&quot;ChromeAndroid &gt;= 35&quot;</span><span class="hljs-punctuation">,</span>\n    <span class="hljs-string">&quot;iOS &gt;= 8&quot;</span><span class="hljs-punctuation">,</span>\n    <span class="hljs-string">&quot;Safari &gt;= 8&quot;</span><span class="hljs-punctuation">,</span>\n    <span class="hljs-string">&quot;Android &gt;= 4.1&quot;</span><span class="hljs-punctuation">,</span>\n    <span class="hljs-string">&quot;QQAndroid &gt;= 4.1&quot;</span><span class="hljs-punctuation">,</span>\n    <span class="hljs-string">&quot;UCAndroid &gt;= 4.1&quot;</span>\n  <span class="hljs-punctuation">]</span>\n<span class="hljs-punctuation">}</span>\n</code></pre>\n</div>',h3Ids:"为什么需要:::安装:::使用",codePath:[]}}}]);