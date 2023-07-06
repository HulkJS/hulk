"use strict";(self.webpackChunkantm=self.webpackChunkantm||[]).push([[885],{7885:function(s,a,n){n.r(a),a.default={tile:"@antmjs/trace",docs:'<h1>@antmjs/trace</h1>\n<blockquote>\n<p>统一的埋点及异常收集工具</p>\n</blockquote>\n<div class="card"><h3 id="%E4%B8%BA%E4%BB%80%E4%B9%88%E9%9C%80%E8%A6%81"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>为什么需要</h3>\n<p>支持 H5-history、原生小程序、以及 Taro 生成的小程序的埋点和异常反馈</p>\n</div><div class="card"><h3 id="%E5%AE%89%E8%A3%85"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>安装</h3>\n<div class="code-box-max">\n<div class="copy-code-btn"></div>\n<pre><code class="language-bash">yarn add @antmjs/trace\n</code></pre>\n</div>\n</div><div class="card"><h3 id="%E9%85%8D%E7%BD%AE"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>配置</h3>\n<p>纯 H5 应用需要添加 resolve.mainFields(Taro 框架构建工具已内置):</p>\n<div class="code-box-max">\n<div class="copy-code-btn"></div>\n<pre><code class="language-json"><span class="hljs-punctuation">{</span>\n  <span class="hljs-attr">&quot;resolve&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>\n    <span class="hljs-attr">&quot;mainFields&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span><span class="hljs-string">&quot;main:h5&quot;</span><span class="hljs-punctuation">]</span>\n  <span class="hljs-punctuation">}</span>\n<span class="hljs-punctuation">}</span>\n</code></pre>\n</div>\n</div><div class="card"><h3 id="%E4%BD%BF%E7%94%A8"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>使用</h3>\n<div class="code-box-max">\n<div class="copy-code-btn"></div>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> <span class="hljs-title class_">Trace</span>, {\n  utf8ToBytes,\n  <span class="hljs-title class_">EGcs</span>,\n  <span class="hljs-title class_">EAppType</span>,\n  <span class="hljs-title class_">EAppSubType</span>,\n  <span class="hljs-title class_">EMlf</span>,\n} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@antmjs/trace&#x27;</span>\n<span class="hljs-comment">// Taro3需要</span>\n<span class="hljs-keyword">import</span> { <span class="hljs-variable language_">document</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@tarojs/runtime&#x27;</span>\n\n<span class="hljs-keyword">const</span> { exposure, log, monitor } = <span class="hljs-title class_">Trace</span>(\n  {\n    <span class="hljs-attr">appId</span>: <span class="hljs-string">&#x27;1&#x27;</span>,\n    <span class="hljs-attr">appType</span>: process.<span class="hljs-property">env</span>.<span class="hljs-property">TARO_ENV</span> === <span class="hljs-string">&#x27;h5&#x27;</span> ? <span class="hljs-title class_">EAppType</span>.<span class="hljs-property">browser</span> : <span class="hljs-title class_">EAppType</span>.<span class="hljs-property">mini</span>,\n    <span class="hljs-attr">appSubType</span>:\n      process.<span class="hljs-property">env</span>.<span class="hljs-property">TARO_ENV</span> === <span class="hljs-string">&#x27;h5&#x27;</span>\n        ? <span class="hljs-title class_">EAppSubType</span>.<span class="hljs-property">browser</span>\n        : <span class="hljs-title class_">EAppSubType</span>[process.<span class="hljs-property">env</span>.<span class="hljs-property">TARO_ENV</span>],\n    <span class="hljs-comment">// 应用内应用版本号</span>\n    <span class="hljs-attr">appSubTypeVersion</span>: <span class="hljs-string">&#x27;&#x27;</span>,\n    <span class="hljs-comment">// Taro3需要</span>\n    <span class="hljs-attr">getElementById</span>: <span class="hljs-variable language_">document</span>.<span class="hljs-property">getElementById</span>,\n    <span class="hljs-title function_">getUserId</span>(<span class="hljs-params"></span>) {\n      <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve</span>) =&gt;</span> {\n        <span class="hljs-title function_">resolve</span>(<span class="hljs-string">&#x27;&#x27;</span>)\n      })\n    },\n    <span class="hljs-title function_">getGenderId</span>(<span class="hljs-params"></span>) {\n      <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve</span>) =&gt;</span> {\n        <span class="hljs-title function_">resolve</span>(<span class="hljs-string">&#x27;&#x27;</span>)\n      })\n    },\n    <span class="hljs-title function_">getLocation</span>(<span class="hljs-params"></span>) {\n      <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve</span>) =&gt;</span> {\n        <span class="hljs-title function_">resolve</span>({\n          <span class="hljs-attr">gcs</span>: <span class="hljs-title class_">EGcs</span>.<span class="hljs-property">gcj02</span>,\n          <span class="hljs-attr">latitude</span>: <span class="hljs-string">&#x27;&#x27;</span>,\n          <span class="hljs-attr">longitude</span>: <span class="hljs-string">&#x27;&#x27;</span>,\n        })\n      })\n    },\n    <span class="hljs-title function_">request</span>(<span class="hljs-params">type <span class="hljs-comment">/** log｜monitor */</span>, data</span>) {\n      <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">info</span>(type, data)\n    },\n  },\n  <span class="hljs-comment">// 默认为0。为0的话request返回的data是对象，非0的话返回数组</span>\n  { <span class="hljs-attr">interval</span>: <span class="hljs-number">3000</span> },\n)\n</code></pre>\n</div>\n</div><div class="card"><h3 id="Description"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>Description</h3>\n<div class="code-box-max">\n<div class="copy-code-btn"></div>\n<pre><code class="language-js"><span class="hljs-comment">/**\n * 投放系统曝光的时候可以执行此方法，投放点击可以用log，三个id可以放ext内\n *\n * <span class="hljs-doctag">@param</span> {<span class="hljs-type">string</span>} <span class="hljs-variable">resourceId</span>\n * <span class="hljs-doctag">@param</span> {<span class="hljs-type">string</span>} <span class="hljs-variable">componentId</span>\n * <span class="hljs-doctag">@param</span> {<span class="hljs-type">string</span>} <span class="hljs-variable">planId</span>\n */</span>\ndeclare <span class="hljs-keyword">function</span> <span class="hljs-title function_">exposure</span>(<span class="hljs-params">\n  resourceId: string,\n  componentId: string,\n  planId: string,\n</span>): <span class="hljs-keyword">void</span>\n\n<span class="hljs-comment">/**\n * 无法通过定义埋点的，可以通过该方法进行手工埋点\n *\n * <span class="hljs-doctag">@param</span> {<span class="hljs-type">string</span>} <span class="hljs-variable">id</span>\n * <span class="hljs-doctag">@param</span> {<span class="hljs-type">Trace.TAnyObject</span>} <span class="hljs-variable">ext</span>\n */</span>\ndeclare <span class="hljs-keyword">function</span> <span class="hljs-title function_">log</span>(<span class="hljs-params">id: string, ext: Trace.TAnyObject</span>): <span class="hljs-keyword">void</span>\n\n<span class="hljs-comment">/**\n * 针对API异常或者脚本异常的统计上报，目前onerror和onUnhandledRejection内部已进行监听\n * 开发者通过这个方法可以自行捕获api异常和jsx异常(componentDidCatch 和 error boundaries)等\n *\n * <span class="hljs-doctag">@param</span> {<span class="hljs-type">EMlf</span>} <span class="hljs-variable">life</span>\n * <span class="hljs-doctag">@param</span> {<span class="hljs-type">(Partial&lt;Pick&lt;Trace.IMonitorLog, &#x27;d1&#x27; | &#x27;d2&#x27; | &#x27;d3&#x27; | &#x27;d4&#x27; | &#x27;d5&#x27;&gt;&gt;)</span>} <span class="hljs-variable">query</span>\n */</span>\ndeclare <span class="hljs-keyword">function</span> <span class="hljs-title function_">monitor</span>(<span class="hljs-params">\n  life: EMlf,\n  query: Partial&lt;Pick&lt;Trace.IMonitorLog, <span class="hljs-string">&#x27;d1&#x27;</span> | <span class="hljs-string">&#x27;d2&#x27;</span> | <span class="hljs-string">&#x27;d3&#x27;</span> | <span class="hljs-string">&#x27;d4&#x27;</span> | <span class="hljs-string">&#x27;d5&#x27;</span>&gt;&gt;,\n</span>): <span class="hljs-keyword">void</span>\n\n<span class="hljs-comment">/**\n * 如果是通过阿里云日志服务的web tracking实现，则\b需要使用该方法设置x-log-bodyrawsize = utf8ToBytes(JSON.stringify({ __topic__: &#x27;&#x27;, __logs__: [] })).length\n *\n * <span class="hljs-doctag">@param</span> {<span class="hljs-type">string</span>} <span class="hljs-variable">string</span>\n * <span class="hljs-doctag">@param</span> {<span class="hljs-type">number</span>} [units]\n * <span class="hljs-doctag">@return</span> {<span class="hljs-type">*</span>}  {<span class="hljs-type">number[]</span>}\n */</span>\ndeclare <span class="hljs-keyword">function</span> <span class="hljs-title function_">utf8ToBytes</span>(<span class="hljs-params">string: string, units?: number</span>): number[]\n\n<span class="hljs-comment">/**\n * 初始化埋点及异常上报需要的参数或方法\n *\n * <span class="hljs-doctag">@param</span> {<span class="hljs-type">Trace.IOtions</span>} <span class="hljs-variable">init</span>\n */</span>\ndeclare <span class="hljs-keyword">function</span> <span class="hljs-title function_">Trace</span>(<span class="hljs-params">init: Trace.IOtions</span>): <span class="hljs-keyword">void</span>\n</code></pre>\n</div>\n</div><div class="card"><h3 id="%E8%87%AA%E5%8A%A8%E8%A7%A6%E5%8F%91%E7%82%B9%E5%87%BB%E5%9F%8B%E7%82%B9"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>自动触发点击埋点</h3>\n<ul>\n<li>H5 环境可以自动捕获</li>\n<li>小程序环境需要定义事件在元素上才能捕获</li>\n<li>支持 data-ckid 或者 data-click-id，请指定其中一种</li>\n<li>Taro3 环境需要在初始化的时候添加 getElementById，Taro1 和 Taro2 不需要</li>\n</ul>\n<div class="code-box-max">\n<div class="copy-code-btn"></div>\n<pre><code class="language-jsx"><span class="hljs-comment">// Taro环境</span>\n&lt;<span class="hljs-title class_">View</span> data-ckid=<span class="hljs-string">&quot;1&quot;</span> data-ext={{<span class="hljs-attr">t</span>: <span class="hljs-string">&quot;&quot;</span>}} onClick={<span class="hljs-function">() =&gt;</span> {}}&gt;&lt;/<span class="hljs-title class_">View</span>&gt;\n<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">View</span> <span class="hljs-attr">data-click-id</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">data-ext</span>=<span class="hljs-string">{{t:</span> &quot;&quot;}} <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> {}}&gt;<span class="hljs-tag">&lt;/<span class="hljs-name">View</span>&gt;</span></span>\n<span class="hljs-comment">// h5环境</span>\n<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">data-ckid</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">data-ext</span>=<span class="hljs-string">{{t:</span> &quot;&quot;}}&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>\n<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">data-click-id</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">data-ext</span>=<span class="hljs-string">{{t:</span> &quot;&quot;}}&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>\n</code></pre>\n</div>\n</div>',h3Ids:"为什么需要:::安装:::配置:::使用:::Description:::自动触发点击埋点",codePath:[]}}}]);