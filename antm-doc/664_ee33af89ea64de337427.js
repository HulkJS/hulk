"use strict";(self.webpackChunk_antmjs_doc=self.webpackChunk_antmjs_doc||[]).push([[664],{3664:function(s,a,n){n.r(a),a.default={tile:"构建组件库文档",docs:'<h1>构建组件库文档</h1>\n<div class="card"><h3 id="%E4%BB%8B%E7%BB%8D"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>介绍</h3>\n<p>antmjs Doc 可以支持移动端组件库和 PC 端组件库，两种方式的需要执行不同的操作</p>\n</div><div class="card"><h3 id="PC%20%E7%BB%84%E4%BB%B6%E5%BA%93"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>PC 组件库</h3>\n<h4>案例代码文件</h4>\n<ul>\n<li>路径：案例代码和文档 md 文件须要再文件同层级</li>\n<li>命名：文件必须以<code>demo</code>为开头前缀，后续为<code>[a-z-]</code>\n同一个 md 文档内要避免命名冲突</li>\n<li>类型：支持<code>.tsx</code>、<code>.jsx</code>三中文件类型, 暂时只支持<code>react</code></li>\n<li>代码：案例代码必须有默认导出的组件，即 <code>export default</code>\n代码里面<code>import</code>本地的文件,也会展示,除了包含<code>index</code>的文件路径</li>\n</ul>\n<p>案例代码所在 的文件夹, 在<code>antm.config下配置</code>下配置,</p>\n<div class="code-box-max">\n<div class="copy-code-btn"></div>\n<pre><code class="language-ts"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-attr">docs</span>: {\n    <span class="hljs-attr">demoCode</span>: {\n      <span class="hljs-attr">dir</span>: <span class="hljs-string">&#x27;example&#x27;</span>,\n    },\n  },\n}\n</code></pre>\n</div>\n<blockquote>\n<p>不设置则案例代码和 markdown 文件在同一层级</p>\n</blockquote>\n<p>目录结构例如：</p>\n<div class="code-box-max">\n<div class="copy-code-btn"></div>\n<pre><code class="language-markdown">├── docs\n├── example/demo-button.tsx\n├── components.md\n</code></pre>\n</div>\n<h4>md 文件中引用案例代码</h4>\n<p>如上文件 components.md 中使用，真实使用中必须带上空行和换行符</p>\n<div class="code-box-max">\n<div class="copy-code-btn"></div>\n<pre><code class="language-markdown">::: demo-buttona :::\n// 只引用代码展示，不渲染\n::: $demo-buttona :::\n</code></pre>\n</div>\n<blockquote>\n<p>需要注意的是，要先创建案例代码文件，再设置引入标识</p>\n</blockquote>\n<p>下面是一个简单 react 的 <code>toast</code> 组件案例展示</p>\n  <div class="demo-code-wrapper" id="components__demo-button_wrapper">\n  <div class="demo-code-box" id="components__demo-button"></div>\n  <div class="show-code-btn">\n  <svg t="1683506698040" class="icon" viewBox="0 0 1024 1024"  width="20" height="20"><path d="M753.6 611.52a32 32 0 1 1 28.8 56.96l-256 128a32 32 0 0 1-28.8 0l-256-128a32 32 0 0 1 28.8-56.96L512 732.16z m0-288a32 32 0 1 1 28.8 56.96l-256 128a32 32 0 0 1-28.8 0l-256-128a32 32 0 1 1 28.8-56.96L512 444.16z" p-id="2292"></path></svg>\n  </div>\n  <div class="code-box">\n <div class="demo-code-tabs"><div class="code-tab-name code-tab-name-active" id="name0">demo-button.tsx</div><div class="code-tab-name " id="name1">haha.ts</div><div class="code-tab-name " id="name2">demo.less</div>\n<div class="copy-code-btn"></div></div>\n<div class="code-item code-item0">\n<pre><code class="language-tsx"><span class="hljs-keyword">import</span> <span class="hljs-title class_">React</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>\n<span class="hljs-keyword">import</span> { haha } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./haha&#x27;</span>\n<span class="hljs-keyword">import</span> toast, { <span class="hljs-title class_">Toaster</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react-hot-toast&#x27;</span>\n<span class="hljs-keyword">import</span> <span class="hljs-string">&#x27;./demo.less&#x27;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Index</span>(<span class="hljs-params"></span>) {\n  <span class="hljs-keyword">const</span> L = <span class="hljs-variable language_">window</span>[<span class="hljs-string">&#x27;$L&#x27;</span>]\n\n  <span class="hljs-keyword">const</span> <span class="hljs-title function_">onClick</span> = (<span class="hljs-params"></span>) =&gt; {\n    <span class="hljs-title function_">haha</span>()\n    toast.<span class="hljs-title function_">success</span>(<span class="hljs-string">::::_QA<span class="hljs-subst">::::_ABL[<span class="hljs-string">&#x27;操作成功&#x27;</span>]}</span>::::_QA</span>)\n  }\n\n  <span class="hljs-keyword">return</span> (\n    <span class="language-xml"><span class="hljs-tag">&lt;&gt;</span>\n      {/** @ts-ignore */}\n      <span class="hljs-tag">&lt;<span class="hljs-name">Toaster</span> /&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{onClick}</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;antm-demo-btn&quot;</span>&gt;</span>\n        {L[&#x27;点击Toast&#x27;]}\n      <span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n    <span class="hljs-tag">&lt;/&gt;</span></span>\n  )\n}\n\n</code></pre>\n</div>\n<div class="code-item code-item1">\n<pre><code class="language-ts"><span class="hljs-keyword">export</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">haha</span>(<span class="hljs-params"></span>) {\n  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">info</span>(<span class="hljs-string">&#x27;_____________________&#x27;</span>)\n}\n\n</code></pre>\n</div>\n<div class="code-item code-item2">\n<pre><code class="language-less"><span class="hljs-selector-class">.antm-demo-btn</span> {\n  <span class="hljs-attribute">background</span>: <span class="hljs-built_in">rgb</span>(<span class="hljs-number">150</span>, <span class="hljs-number">229</span>, <span class="hljs-number">150</span>);\n  <span class="hljs-attribute">color</span>: <span class="hljs-number">#ffffff</span>;\n  <span class="hljs-attribute">padding</span>: <span class="hljs-number">6px</span> <span class="hljs-number">12px</span>;\n  <span class="hljs-attribute">cursor</span>: pointer;\n  <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">16px</span>;\n}\n\n</code></pre>\n</div>\n  </div>\n  </div>\n<p>下面是一个简单 vue 的 <code>toast</code> 组件案例展示</p>\n  <div class="demo-code-wrapper" id="components__demo-buttona_wrapper">\n  <div class="demo-code-box" id="components__demo-buttona"></div>\n  <div class="show-code-btn">\n  <svg t="1683506698040" class="icon" viewBox="0 0 1024 1024"  width="20" height="20"><path d="M753.6 611.52a32 32 0 1 1 28.8 56.96l-256 128a32 32 0 0 1-28.8 0l-256-128a32 32 0 0 1 28.8-56.96L512 732.16z m0-288a32 32 0 1 1 28.8 56.96l-256 128a32 32 0 0 1-28.8 0l-256-128a32 32 0 1 1 28.8-56.96L512 444.16z" p-id="2292"></path></svg>\n  </div>\n  <div class="code-box">\n <div class="demo-code-tabs"><div class="code-tab-name code-tab-name-active" id="name0">demo-buttona.vue</div><div class="code-tab-name " id="name1">demo.less</div>\n<div class="copy-code-btn"></div></div>\n<div class="code-item code-item0">\n<pre><code class="language-typescript">&lt;template&gt;\n  <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;antm-demo-btn&quot;</span>&gt;</span>{{ $L?.[&#x27;点击按钮&#x27;] }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span></span>\n&lt;/template&gt;\n\n<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">\n<span class="hljs-keyword">import</span> <span class="hljs-string">&#x27;./demo.less&#x27;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">data</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">return</span> {\n      <span class="hljs-attr">$L</span>: {},\n    }\n  },\n  <span class="hljs-title function_">mounted</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {\n      <span class="hljs-variable language_">this</span>.<span class="hljs-property">$L</span> = <span class="hljs-variable language_">window</span>[<span class="hljs-string">&#x27;$L&#x27;</span>]\n    }, <span class="hljs-number">100</span>)\n  },\n}\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span>\n\n</code></pre>\n</div>\n<div class="code-item code-item1">\n<pre><code class="language-less"><span class="hljs-selector-class">.antm-demo-btn</span> {\n  <span class="hljs-attribute">background</span>: <span class="hljs-built_in">rgb</span>(<span class="hljs-number">150</span>, <span class="hljs-number">229</span>, <span class="hljs-number">150</span>);\n  <span class="hljs-attribute">color</span>: <span class="hljs-number">#ffffff</span>;\n  <span class="hljs-attribute">padding</span>: <span class="hljs-number">6px</span> <span class="hljs-number">12px</span>;\n  <span class="hljs-attribute">cursor</span>: pointer;\n  <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">16px</span>;\n}\n\n</code></pre>\n</div>\n  </div>\n  </div>\n<p>案例<a href="https://antmjs.github.io/antd-max">antd-max</a></p>\n</div><div class="card"><h3 id="%E7%BB%84%E4%BB%B6%E5%BA%93%E7%9A%84%20i8n"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>组件库的 i8n</h3>\n<div class="code-box-max">\n<div class="copy-code-btn"></div>\n<pre><code class="language-ts"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-attr">docs</span>: {\n    <span class="hljs-comment">// ......</span>\n    <span class="hljs-attr">demoCode</span>: {\n      <span class="hljs-attr">container</span>: {\n        <span class="hljs-attr">react</span>: path.<span class="hljs-title function_">join</span>(process.<span class="hljs-title function_">cwd</span>(), <span class="hljs-string">&#x27;./docs/demo-i18n.tsx&#x27;</span>),\n        <span class="hljs-attr">vue</span>: path.<span class="hljs-title function_">join</span>(process.<span class="hljs-title function_">cwd</span>(), <span class="hljs-string">&#x27;./docs/demo-i18n.tsx&#x27;</span>),\n      },\n    },\n  },\n}\n</code></pre>\n</div>\n<p>配置文件<code>antm.config下配置</code>配置<code>doc.demoCode.container.react</code>，即组件案例公共的容器组件\n下面是模拟 i18n 组件的简单实现，全局变量<code>__LANGE__</code>当前文档切换的语言</p>\n<div class="code-box-max">\n<div class="copy-code-btn"></div>\n<pre><code class="language-typescript"><span class="hljs-keyword">import</span> <span class="hljs-title class_">React</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>\n\n<span class="hljs-keyword">let</span> langCache = <span class="hljs-string">&#x27;&#x27;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Index</span>(<span class="hljs-params">{ children }</span>) {\n  <span class="hljs-keyword">if</span> (<span class="hljs-variable language_">window</span>[<span class="hljs-string">&#x27;__LANGE__&#x27;</span>] &amp;&amp; <span class="hljs-variable language_">window</span>[<span class="hljs-string">&#x27;__LANGE__&#x27;</span>] !== langCache) {\n    <span class="hljs-keyword">const</span> I18nMap = {\n      <span class="hljs-attr">CN</span>: {\n        点击<span class="hljs-title class_">Toast</span>: <span class="hljs-string">&#x27;点击Toast&#x27;</span>,\n        点击按钮: <span class="hljs-string">&#x27;点击按钮&#x27;</span>,\n        操作成功: <span class="hljs-string">&#x27;操作成功&#x27;</span>,\n      },\n      <span class="hljs-attr">EN</span>: {\n        点击<span class="hljs-title class_">Toast</span>: <span class="hljs-string">&#x27;click Toast&#x27;</span>,\n        点击按钮: <span class="hljs-string">&#x27;click button&#x27;</span>,\n        操作成功: <span class="hljs-string">&#x27;operate success&#x27;</span>,\n      },\n    }\n    <span class="hljs-variable language_">window</span>[<span class="hljs-string">&#x27;$L&#x27;</span>] = I18nMap[<span class="hljs-variable language_">window</span>[<span class="hljs-string">&#x27;__LANGE__&#x27;</span>]]\n  }\n\n  <span class="hljs-keyword">return</span> <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>{children}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>\n}\n</code></pre>\n</div>\n</div><div class="card"><h3 id="%E7%A7%BB%E5%8A%A8%E7%AB%AF%E7%BB%84%E4%BB%B6%E5%BA%93"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>移动端组件库</h3>\n<p>一种方式是通过<code>simulator</code>配置，以 iframe 的方式展示</p>\n<p>主要配置如下</p>\n<ul>\n<li><code>url</code>: 分为开发环境和生产环境</li>\n<li><code>noMate</code>: 没有映射关系的 url 的时候，设置重定向</li>\n<li><code>transform</code>: 定义映射规则</li>\n</ul>\n<div class="code-box-max">\n<div class="copy-code-btn"></div>\n<pre><code class="language-ts"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title function_">defineConfig</span>({\n  <span class="hljs-attr">docs</span>: {\n    <span class="hljs-attr">simulator</span>: {\n      <span class="hljs-attr">url</span>: {\n        <span class="hljs-attr">development</span>: <span class="hljs-string">&#x27;http://10.254.9.214:10086&#x27;</span>,\n        <span class="hljs-attr">production</span>: <span class="hljs-string">&#x27;/vantui/main/mobile.html&#x27;</span>,\n      },\n      <span class="hljs-attr">transform</span>: <span class="hljs-function">(<span class="hljs-params">url</span>) =&gt;</span> <span class="hljs-string">::::_QA#/pages/<span class="hljs-subst">::::_ABurl}</span>/index::::_QA</span>,\n      <span class="hljs-attr">noMate</span>: {\n        <span class="hljs-attr">urls</span>: [\n          <span class="hljs-string">&#x27;quickstart&#x27;</span>,\n          <span class="hljs-string">&#x27;custom-style&#x27;</span>,\n          <span class="hljs-string">&#x27;home&#x27;</span>,\n          <span class="hljs-string">&#x27;theme&#x27;</span>,\n          <span class="hljs-string">&#x27;use-in-react&#x27;</span>,\n          <span class="hljs-string">&#x27;contributing&#x27;</span>,\n          <span class="hljs-string">&#x27;v2-to-v3&#x27;</span>,\n          <span class="hljs-string">&#x27;comments&#x27;</span>,\n          <span class="hljs-string">&#x27;premium&#x27;</span>,\n        ],\n        <span class="hljs-attr">redirect</span>: <span class="hljs-string">&#x27;#/pages/dashboard/index&#x27;</span>,\n      },\n    },\n  },\n})\n</code></pre>\n</div>\n<p>移动端 iframe 案例<a href="https://antmjs.github.io/vantui/main/">vantui</a></p>\n<p>还一种方式是通过 css 改变 PC 端组件展示的样式</p>\n<div class="code-box-max">\n<div class="copy-code-btn"></div>\n<pre><code class="language-less"><span class="hljs-selector-class">.demo-code-wrapper</span> {\n  <span class="hljs-attribute">display</span>: flex;\n  <span class="hljs-attribute">flex-direction</span>: row-reverse;\n  <span class="hljs-selector-class">.code-box</span> {\n    <span class="hljs-attribute">height</span>: auto;\n    <span class="hljs-attribute">margin-top</span>: <span class="hljs-number">0</span>;\n    <span class="hljs-attribute">flex</span>: <span class="hljs-number">1</span>;\n\n    <span class="hljs-selector-class">.code-item</span> <span class="hljs-selector-tag">pre</span> {\n      <span class="hljs-attribute">max-height</span>: <span class="hljs-number">624px</span>;\n      <span class="hljs-attribute">height</span>: <span class="hljs-number">624px</span>;\n    }\n  }\n\n  <span class="hljs-selector-class">.demo-code-box</span> {\n    <span class="hljs-attribute">width</span>: <span class="hljs-number">375px</span>;\n    <span class="hljs-attribute">height</span>: <span class="hljs-number">667px</span>;\n    <span class="hljs-attribute">overflow</span>: scroll;\n    <span class="hljs-attribute">border</span>: <span class="hljs-number">2px</span> solid <span class="hljs-number">#758479</span>;\n    <span class="hljs-attribute">margin-left</span>: <span class="hljs-number">4px</span>;\n  }\n\n  <span class="hljs-selector-class">.show-code-btn</span> {\n    <span class="hljs-attribute">display</span>: none;\n  }\n}\n</code></pre>\n</div>\n</div>',h3Ids:"介绍:::PC 组件库:::组件库的 i8n:::移动端组件库",codePath:["components__demo-button","components__demo-buttona"]}}}]);