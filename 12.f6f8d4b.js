webpackJsonp([12],{135:function(s,n,t){s.exports=t(265),'<h1>Range</h1>\n<blockquote>\n<p>滑块，支持自定义步长、区间等。</p>\n</blockquote>\n<hr>\n<h2>引入</h2>\n<pre><code class="language-javascript"><span class="hljs-keyword">import</span> { Range } <span class="hljs-keyword">from</span> <span class="hljs-string">\'mint-ui\'</span>;\n\nVue.component(Range.name, Range);\n</code></pre>\n<h2>例子</h2>\n<p>将一个本地变量与 <code>range</code> 的 <code>value</code> 属性同步即可实现双向绑定</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-range</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"rangeValue"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-range</span>&gt;</span>\n</code></pre>\n<p>更多的配置项</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-range</span>\n  <span class="hljs-attr">v-model</span>=<span class="hljs-string">"rangeValue"</span>\n  <span class="hljs-attr">:min</span>=<span class="hljs-string">"10"</span>\n  <span class="hljs-attr">:max</span>=<span class="hljs-string">"90"</span>\n  <span class="hljs-attr">:step</span>=<span class="hljs-string">"10"</span>\n  <span class="hljs-attr">:bar-height</span>=<span class="hljs-string">"5"</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mt-range</span>&gt;</span>\n</code></pre>\n<p>可在滑块两侧显示文字</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-range</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"rangeValue"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"start"</span>&gt;</span>0<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"end"</span>&gt;</span>100<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mt-range</span>&gt;</span>\n</code></pre>\n<h2>API</h2>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>value</td>\n<td>滑块的值</td>\n<td>Number</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>min</td>\n<td>最小值</td>\n<td>Number</td>\n<td></td>\n<td>0</td>\n</tr>\n<tr>\n<td>max</td>\n<td>最大值</td>\n<td>Number</td>\n<td></td>\n<td>100</td>\n</tr>\n<tr>\n<td>step</td>\n<td>步长</td>\n<td>Number</td>\n<td></td>\n<td>1</td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>是否禁用</td>\n<td>Boolean</td>\n<td></td>\n<td>false</td>\n</tr>\n<tr>\n<td>barHeight</td>\n<td>滑槽的线宽（像素）</td>\n<td>Number</td>\n<td></td>\n<td>1</td>\n</tr>\n</tbody>\n</table></div><h2>Slot</h2>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>name</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>start</td>\n<td>滑块左侧 DOM</td>\n</tr>\n<tr>\n<td>end</td>\n<td>滑块右侧 DOM</td>\n</tr>\n</tbody>\n</table></div>'!==s.exports.template&&(s.exports.template='<h1>Range</h1>\n<blockquote>\n<p>滑块，支持自定义步长、区间等。</p>\n</blockquote>\n<hr>\n<h2>引入</h2>\n<pre><code class="language-javascript"><span class="hljs-keyword">import</span> { Range } <span class="hljs-keyword">from</span> <span class="hljs-string">\'mint-ui\'</span>;\n\nVue.component(Range.name, Range);\n</code></pre>\n<h2>例子</h2>\n<p>将一个本地变量与 <code>range</code> 的 <code>value</code> 属性同步即可实现双向绑定</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-range</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"rangeValue"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-range</span>&gt;</span>\n</code></pre>\n<p>更多的配置项</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-range</span>\n  <span class="hljs-attr">v-model</span>=<span class="hljs-string">"rangeValue"</span>\n  <span class="hljs-attr">:min</span>=<span class="hljs-string">"10"</span>\n  <span class="hljs-attr">:max</span>=<span class="hljs-string">"90"</span>\n  <span class="hljs-attr">:step</span>=<span class="hljs-string">"10"</span>\n  <span class="hljs-attr">:bar-height</span>=<span class="hljs-string">"5"</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mt-range</span>&gt;</span>\n</code></pre>\n<p>可在滑块两侧显示文字</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-range</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"rangeValue"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"start"</span>&gt;</span>0<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"end"</span>&gt;</span>100<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mt-range</span>&gt;</span>\n</code></pre>\n<h2>API</h2>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>value</td>\n<td>滑块的值</td>\n<td>Number</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>min</td>\n<td>最小值</td>\n<td>Number</td>\n<td></td>\n<td>0</td>\n</tr>\n<tr>\n<td>max</td>\n<td>最大值</td>\n<td>Number</td>\n<td></td>\n<td>100</td>\n</tr>\n<tr>\n<td>step</td>\n<td>步长</td>\n<td>Number</td>\n<td></td>\n<td>1</td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>是否禁用</td>\n<td>Boolean</td>\n<td></td>\n<td>false</td>\n</tr>\n<tr>\n<td>barHeight</td>\n<td>滑槽的线宽（像素）</td>\n<td>Number</td>\n<td></td>\n<td>1</td>\n</tr>\n</tbody>\n</table></div><h2>Slot</h2>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>name</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>start</td>\n<td>滑块左侧 DOM</td>\n</tr>\n<tr>\n<td>end</td>\n<td>滑块右侧 DOM</td>\n</tr>\n</tbody>\n</table></div>')},265:function(s,n){var t,a,l={};s.exports=t||{},s.exports.__esModule&&(s.exports=s.exports["default"]);var p="function"==typeof s.exports?s.exports.options||(s.exports.options={}):s.exports;a&&(p.template=a),p.computed||(p.computed={}),Object.keys(l).forEach(function(s){var n=l[s];p.computed[s]=function(){return n}})}});