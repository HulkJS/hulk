"use strict";(self.webpackChunkantm=self.webpackChunkantm||[]).push([[631,539],{7631:function(n,s,l){l.r(s),s.default={tile:"v0.0.2",docs:'<p>v0.0.2</p>\n<p>本地的类型上传</p>\n<p>实现流程</p>\n<ol>\n<li>\n<p>为了灵活性 还是 解析 config 拿到配置</p>\n</li>\n<li>\n<p>把目标文件夹内的 ts 文件</p>\n</li>\n<li>\n<p>把文件内容喂给 typescript</p>\n</li>\n<li>\n<p>遍历 ast 把所有的 请求函数信息拿到</p>\n</li>\n<li>\n<p>根据 请求函数的信息可以拿到 拿到 请求 相应类型是什么，在哪</p>\n</li>\n<li>\n<p>解析类型生成 附和 rap 接口的 json</p>\n</li>\n<li>\n<p>调用 rap 接口</p>\n</li>\n</ol>\n<p>要解决的 问题</p>\n<ol>\n<li>rap 的接口 格式是什么?</li>\n</ol>\n<blockquote>\n<p>去扒网页， 看接口请求信息</p>\n</blockquote>\n<hr>\n<ol start="2">\n<li>rap 修改文档需要登录， 登录需要输入验证码 怎么跳过？</li>\n</ol>\n<blockquote>\n<p>登录需要输入一个验证码， 目前没有好的方法， config 配置登录 cookie</p>\n</blockquote>\n<hr>\n<ol start="3">\n<li>怎么判断一个接口/模块 是新增还是修改</li>\n</ol>\n<blockquote>\n<p>提交 rap 的时候 给请求函数增加标准注释</p>\n</blockquote>\n<ol start="4">\n<li>typescript 类型 如何转为 json</li>\n</ol>\n<blockquote>\n<p><a href="https://github.com/YousefED/typescript-json-schema">typescript-json-schema</a>这个包 他会把类型文件转成 json 树,调整一下 扔给 rap 请求接口</p>\n</blockquote>\n<ol start="5">\n<li>如果做到增量提交 修改谁 提交谁 而不是每次都全量提交 容易出问题</li>\n</ol>\n<blockquote>\n<p>目前增量的颗粒度是 模块， 只提交修改的模块 其他模块不提交\n每个文件是一个模块. 每个文件在提交之后都会打一个 MD5 值 ， 对比一下</p>\n</blockquote>\n<h2>看代码</h2>\n<hr>\n<h2>看执行结果</h2>\n<p>演示自动创建模块 自动创建接口 检查改动</p>\n<hr>\n<h2>引出</h2>\n<pre><code class="language-ts"><span class="hljs-keyword">export</span> <span class="hljs-keyword">const</span> user = &lt;T <span class="hljs-keyword">extends</span> <span class="hljs-built_in">boolean</span> = <span class="hljs-literal">false</span>&gt;(\n  <span class="hljs-attr">data</span>: <span class="hljs-title class_">IReqUser</span>,\n  options?: {\n    proxy?: T\n    pageError?: <span class="hljs-built_in">boolean</span>\n  },\n): <span class="hljs-title class_">Promise</span>&lt;T <span class="hljs-keyword">extends</span> <span class="hljs-literal">true</span> ? <span class="hljs-title class_">IReqUser</span>[<span class="hljs-string">&#x27;data&#x27;</span>] : <span class="hljs-title class_">IResUser</span>&gt; =&gt;\n  <span class="hljs-title function_">instance</span>(\n    {\n      <span class="hljs-attr">url</span>: <span class="hljs-string">&#x27;/c/b/w/api/2.0/user&#x27;</span>,\n      <span class="hljs-attr">method</span>: <span class="hljs-string">&#x27;GET&#x27;</span>,\n      data,\n    },\n    options,\n  )\n</code></pre>\n<blockquote>\n<p>很明显的看出 很多重复性代码</p>\n</blockquote>\n<blockquote>\n<p>需要每次都去复制粘贴</p>\n</blockquote>\n<blockquote>\n<p>可以看到必要的信息只有</p>\n</blockquote>\n<ol>\n<li>方法名称 -- user</li>\n<li>请求类型 -- IReqUser</li>\n<li>相应类型 -- IResUser</li>\n<li>接口 url -- /c/b/w/api/2.0/user</li>\n<li>请求方法 -- GET</li>\n</ol>\n<div class="card"><h3 id="%E8%83%BD%E4%B8%8D%E8%83%BD%20%E7%94%A8%E4%BB%80%E4%B9%88%E6%96%B9%E6%B3%95%E6%8A%8A%20%E5%85%B6%E4%BB%96%E7%9A%84%E4%B8%9C%E8%A5%BF%E9%83%BD%E5%8E%BB%E6%8E%89%20"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>能不能 用什么方法把 其他的东西都去掉 还能够享受 ts 类型？</h3>\n<hr>\n<p>---看 ppt ---</p>\n</div>',h3Ids:"能不能 用什么方法把 其他的东西都去掉 "}}}]);