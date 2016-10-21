webpackJsonp([41],{104:function(s,n,a){s.exports=a(234),'<h1>Radio</h1>\n<blockquote>\n<p>单选框列表，依赖 <a v-link="{path:\'/cell\'}">cell</a> 组件。</p>\n</blockquote>\n<hr>\n<h2>引入</h2>\n<pre><code class="language-javascript"><span class="hljs-keyword">import</span> { Radio } <span class="hljs-keyword">from</span> <span class="hljs-string">\'mint-ui\'</span>;\n\nVue.component(Radio.name, Radio);\n</code></pre>\n<h2>例子</h2>\n<p>基本用法</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-radio</span>\n  <span class="hljs-attr">title</span>=<span class="hljs-string">"单选框列表"</span>\n  <span class="hljs-attr">:value.sync</span>=<span class="hljs-string">"value"</span>\n  <span class="hljs-attr">:options</span>=<span class="hljs-string">"[\'选项A\', \'选项B\', \'选项C\']"</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mt-radio</span>&gt;</span>\n</code></pre>\n<p>设置禁用选项</p>\n<pre><code class="language-javascript"><span class="hljs-keyword">this</span>.options = [\n  {\n    label: <span class="hljs-string">\'被禁用\'</span>,\n    value: <span class="hljs-string">\'值F\'</span>,\n    disabled: <span class="hljs-literal">true</span>\n  },\n  {\n    label: <span class="hljs-string">\'选项A\'</span>,\n    value: <span class="hljs-string">\'值A\'</span>\n  },\n  {\n    label: <span class="hljs-string">\'选项B\'</span>,\n    value: <span class="hljs-string">\'值B\'</span>\n  }\n];\n</code></pre>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-radio</span>\n  <span class="hljs-attr">title</span>=<span class="hljs-string">"单选框列表"</span>\n  <span class="hljs-attr">:value.sync</span>=<span class="hljs-string">"value"</span>\n  <span class="hljs-attr">:options</span>=<span class="hljs-string">"options"</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mt-radio</span>&gt;</span>\n</code></pre>\n<p>单选框右对齐</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-radio</span>\n  <span class="hljs-attr">align</span>=<span class="hljs-string">"right"</span>\n  <span class="hljs-attr">title</span>=<span class="hljs-string">"右对齐"</span>\n  <span class="hljs-attr">:value.sync</span>=<span class="hljs-string">"value"</span>\n  <span class="hljs-attr">:options</span>=<span class="hljs-string">"options"</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mt-radio</span>&gt;</span>\n</code></pre>\n<h2>API</h2>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>options</td>\n<td>选择项</td>\n<td>Array</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>value</td>\n<td>绑定值</td>\n<td>Array</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>title</td>\n<td>标题，显示在列表上方</td>\n<td>string</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>align</td>\n<td>单选框对其位置</td>\n<td>String</td>\n<td>left, right</td>\n<td>left</td>\n</tr>\n</tbody>\n</table></div>'!==s.exports.template&&(s.exports.template='<h1>Radio</h1>\n<blockquote>\n<p>单选框列表，依赖 <a v-link="{path:\'/cell\'}">cell</a> 组件。</p>\n</blockquote>\n<hr>\n<h2>引入</h2>\n<pre><code class="language-javascript"><span class="hljs-keyword">import</span> { Radio } <span class="hljs-keyword">from</span> <span class="hljs-string">\'mint-ui\'</span>;\n\nVue.component(Radio.name, Radio);\n</code></pre>\n<h2>例子</h2>\n<p>基本用法</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-radio</span>\n  <span class="hljs-attr">title</span>=<span class="hljs-string">"单选框列表"</span>\n  <span class="hljs-attr">:value.sync</span>=<span class="hljs-string">"value"</span>\n  <span class="hljs-attr">:options</span>=<span class="hljs-string">"[\'选项A\', \'选项B\', \'选项C\']"</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mt-radio</span>&gt;</span>\n</code></pre>\n<p>设置禁用选项</p>\n<pre><code class="language-javascript"><span class="hljs-keyword">this</span>.options = [\n  {\n    label: <span class="hljs-string">\'被禁用\'</span>,\n    value: <span class="hljs-string">\'值F\'</span>,\n    disabled: <span class="hljs-literal">true</span>\n  },\n  {\n    label: <span class="hljs-string">\'选项A\'</span>,\n    value: <span class="hljs-string">\'值A\'</span>\n  },\n  {\n    label: <span class="hljs-string">\'选项B\'</span>,\n    value: <span class="hljs-string">\'值B\'</span>\n  }\n];\n</code></pre>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-radio</span>\n  <span class="hljs-attr">title</span>=<span class="hljs-string">"单选框列表"</span>\n  <span class="hljs-attr">:value.sync</span>=<span class="hljs-string">"value"</span>\n  <span class="hljs-attr">:options</span>=<span class="hljs-string">"options"</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mt-radio</span>&gt;</span>\n</code></pre>\n<p>单选框右对齐</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-radio</span>\n  <span class="hljs-attr">align</span>=<span class="hljs-string">"right"</span>\n  <span class="hljs-attr">title</span>=<span class="hljs-string">"右对齐"</span>\n  <span class="hljs-attr">:value.sync</span>=<span class="hljs-string">"value"</span>\n  <span class="hljs-attr">:options</span>=<span class="hljs-string">"options"</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mt-radio</span>&gt;</span>\n</code></pre>\n<h2>API</h2>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>options</td>\n<td>选择项</td>\n<td>Array</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>value</td>\n<td>绑定值</td>\n<td>Array</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>title</td>\n<td>标题，显示在列表上方</td>\n<td>string</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>align</td>\n<td>单选框对其位置</td>\n<td>String</td>\n<td>left, right</td>\n<td>left</td>\n</tr>\n</tbody>\n</table></div>')},234:function(s,n){var a,t,l={};s.exports=a||{},s.exports.__esModule&&(s.exports=s.exports["default"]);var p="function"==typeof s.exports?s.exports.options||(s.exports.options={}):s.exports;t&&(p.template=t),p.computed||(p.computed={}),Object.keys(l).forEach(function(s){var n=l[s];p.computed[s]=function(){return n}})}});