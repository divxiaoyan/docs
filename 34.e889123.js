webpackJsonp([34],{111:function(n,a,t){n.exports=t(241),'<h1>tab-container</h1>\n<blockquote>\n<p>面板，可切换显示子页面。</p>\n</blockquote>\n<hr>\n<h2>引入</h2>\n<pre><code class="language-javascript"><span class="hljs-keyword">import</span> { TabContainer, TabContainerItem } <span class="hljs-keyword">from</span> <span class="hljs-string">\'mint-ui\'</span>;\n\nVue.component(TabContainer.name, TabContainer);\nVue.component(TabContainerItem.name, TabContainerItem);\n</code></pre>\n<h2>例子</h2>\n<p>改变 ative 的值，与 <code>&lt;tab-container-item&gt;</code> 的 id 一致即显示对应页面。</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-tab-container</span> <span class="hljs-attr">:active.sync</span>=<span class="hljs-string">"active"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mt-tab-container-item</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"tab-container1"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mt-cell</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">"n in 10"</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">"\'tab-container1 \' + $index"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-cell</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mt-tab-container-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mt-tab-container-item</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"tab-container2"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mt-cell</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">"n in 5"</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">"\'tab-container2 \' + $index"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-cell</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mt-tab-container-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mt-tab-container-item</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"tab-container3"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mt-cell</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">"n in 7"</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">"\'tab-container3 \' + $index"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-cell</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mt-tab-container-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mt-tab-container</span>&gt;</span>\n</code></pre>\n<h2>API</h2>\n<h3>tab-container</h3>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>active</td>\n<td>当前激活的 id</td>\n<td>*</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>swipeable</td>\n<td>显示滑动效果</td>\n<td>Boolean</td>\n<td></td>\n<td>false</td>\n</tr>\n</tbody>\n</table></div><h3>tab-container-item</h3>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>id</td>\n<td>item 的 id</td>\n<td>*</td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table></div><h2>Slot</h2>\n<h3>tab-container</h3>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>name</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>-</td>\n<td>内容</td>\n</tr>\n</tbody>\n</table></div><h3>tab-container-item</h3>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>name</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>-</td>\n<td>内容</td>\n</tr>\n</tbody>\n</table></div>'!==n.exports.template&&(n.exports.template='<h1>tab-container</h1>\n<blockquote>\n<p>面板，可切换显示子页面。</p>\n</blockquote>\n<hr>\n<h2>引入</h2>\n<pre><code class="language-javascript"><span class="hljs-keyword">import</span> { TabContainer, TabContainerItem } <span class="hljs-keyword">from</span> <span class="hljs-string">\'mint-ui\'</span>;\n\nVue.component(TabContainer.name, TabContainer);\nVue.component(TabContainerItem.name, TabContainerItem);\n</code></pre>\n<h2>例子</h2>\n<p>改变 ative 的值，与 <code>&lt;tab-container-item&gt;</code> 的 id 一致即显示对应页面。</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-tab-container</span> <span class="hljs-attr">:active.sync</span>=<span class="hljs-string">"active"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mt-tab-container-item</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"tab-container1"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mt-cell</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">"n in 10"</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">"\'tab-container1 \' + $index"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-cell</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mt-tab-container-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mt-tab-container-item</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"tab-container2"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mt-cell</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">"n in 5"</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">"\'tab-container2 \' + $index"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-cell</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mt-tab-container-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mt-tab-container-item</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"tab-container3"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mt-cell</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">"n in 7"</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">"\'tab-container3 \' + $index"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-cell</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mt-tab-container-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mt-tab-container</span>&gt;</span>\n</code></pre>\n<h2>API</h2>\n<h3>tab-container</h3>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>active</td>\n<td>当前激活的 id</td>\n<td>*</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>swipeable</td>\n<td>显示滑动效果</td>\n<td>Boolean</td>\n<td></td>\n<td>false</td>\n</tr>\n</tbody>\n</table></div><h3>tab-container-item</h3>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>id</td>\n<td>item 的 id</td>\n<td>*</td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table></div><h2>Slot</h2>\n<h3>tab-container</h3>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>name</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>-</td>\n<td>内容</td>\n</tr>\n</tbody>\n</table></div><h3>tab-container-item</h3>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>name</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>-</td>\n<td>内容</td>\n</tr>\n</tbody>\n</table></div>')},241:function(n,a){var t,s,l={};n.exports=t||{},n.exports.__esModule&&(n.exports=n.exports["default"]);var e="function"==typeof n.exports?n.exports.options||(n.exports.options={}):n.exports;s&&(e.template=s),e.computed||(e.computed={}),Object.keys(l).forEach(function(n){var a=l[n];e.computed[n]=function(){return a}})}});