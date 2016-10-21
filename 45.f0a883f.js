webpackJsonp([45],{100:function(s,a,n){s.exports=n(230),'<h1>Navbar</h1>\n<blockquote>\n<p>顶部选项卡，与 <a v-link="{path:\'/tabbar\'}">Tabbar</a> 类似，依赖 tab-item 组件。</p>\n</blockquote>\n<hr>\n<h2>引入</h2>\n<pre><code class="language-javascript"><span class="hljs-keyword">import</span> { Navbar, TabItem } <span class="hljs-keyword">from</span> <span class="hljs-string">\'mint-ui\'</span>;\n\nVue.component(Navbar.name, Navbar);\nVue.component(TabItem.name, TabItem);\n</code></pre>\n<h2>例子</h2>\n<p>搭配 <a v-link="{path:\'/tab-container\'}">tab-container</a> 组件使用</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-navbar</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"page-part"</span> <span class="hljs-attr">:selected.sync</span>=<span class="hljs-string">"selected"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mt-tab-item</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"1"</span>&gt;</span>选项一<span class="hljs-tag">&lt;/<span class="hljs-name">mt-tab-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mt-tab-item</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"2"</span>&gt;</span>选项二<span class="hljs-tag">&lt;/<span class="hljs-name">mt-tab-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mt-tab-item</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"3"</span>&gt;</span>选项三<span class="hljs-tag">&lt;/<span class="hljs-name">mt-tab-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mt-navbar</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- tab-container --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-tab-container</span> <span class="hljs-attr">:active.sync</span>=<span class="hljs-string">"selected"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mt-tab-container-item</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"1"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mt-cell</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">"n in 10"</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">"\'内容 \' + n"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-cell</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mt-tab-container-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mt-tab-container-item</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"2"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mt-cell</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">"n in 4"</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">"\'测试 \' + n"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-cell</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mt-tab-container-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mt-tab-container-item</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"3"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mt-cell</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">"n in 6"</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">"\'选项 \' + n"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-cell</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mt-tab-container-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mt-tab-container</span>&gt;</span>\n</code></pre>\n<h2>API</h2>\n<h3>navbar</h3>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>fixed</td>\n<td>固定在页面顶部</td>\n<td>Boolean</td>\n<td></td>\n<td>false</td>\n</tr>\n<tr>\n<td>selected</td>\n<td>返回当前选中的 tab-item 的 id</td>\n<td>*</td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table></div><h3>tab-item</h3>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>id</td>\n<td>选中后的返回值</td>\n<td>*</td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table></div><h2>Slot</h2>\n<h3>navbar</h3>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>name</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>-</td>\n<td>内容</td>\n</tr>\n</tbody>\n</table></div><h3>tab-item</h3>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>name</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>-</td>\n<td>显示文字</td>\n</tr>\n<tr>\n<td>icon</td>\n<td>icon 图标</td>\n</tr>\n</tbody>\n</table></div>'!==s.exports.template&&(s.exports.template='<h1>Navbar</h1>\n<blockquote>\n<p>顶部选项卡，与 <a v-link="{path:\'/tabbar\'}">Tabbar</a> 类似，依赖 tab-item 组件。</p>\n</blockquote>\n<hr>\n<h2>引入</h2>\n<pre><code class="language-javascript"><span class="hljs-keyword">import</span> { Navbar, TabItem } <span class="hljs-keyword">from</span> <span class="hljs-string">\'mint-ui\'</span>;\n\nVue.component(Navbar.name, Navbar);\nVue.component(TabItem.name, TabItem);\n</code></pre>\n<h2>例子</h2>\n<p>搭配 <a v-link="{path:\'/tab-container\'}">tab-container</a> 组件使用</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-navbar</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"page-part"</span> <span class="hljs-attr">:selected.sync</span>=<span class="hljs-string">"selected"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mt-tab-item</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"1"</span>&gt;</span>选项一<span class="hljs-tag">&lt;/<span class="hljs-name">mt-tab-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mt-tab-item</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"2"</span>&gt;</span>选项二<span class="hljs-tag">&lt;/<span class="hljs-name">mt-tab-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mt-tab-item</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"3"</span>&gt;</span>选项三<span class="hljs-tag">&lt;/<span class="hljs-name">mt-tab-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mt-navbar</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- tab-container --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-tab-container</span> <span class="hljs-attr">:active.sync</span>=<span class="hljs-string">"selected"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mt-tab-container-item</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"1"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mt-cell</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">"n in 10"</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">"\'内容 \' + n"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-cell</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mt-tab-container-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mt-tab-container-item</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"2"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mt-cell</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">"n in 4"</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">"\'测试 \' + n"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-cell</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mt-tab-container-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mt-tab-container-item</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"3"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mt-cell</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">"n in 6"</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">"\'选项 \' + n"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-cell</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mt-tab-container-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mt-tab-container</span>&gt;</span>\n</code></pre>\n<h2>API</h2>\n<h3>navbar</h3>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>fixed</td>\n<td>固定在页面顶部</td>\n<td>Boolean</td>\n<td></td>\n<td>false</td>\n</tr>\n<tr>\n<td>selected</td>\n<td>返回当前选中的 tab-item 的 id</td>\n<td>*</td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table></div><h3>tab-item</h3>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>id</td>\n<td>选中后的返回值</td>\n<td>*</td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table></div><h2>Slot</h2>\n<h3>navbar</h3>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>name</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>-</td>\n<td>内容</td>\n</tr>\n</tbody>\n</table></div><h3>tab-item</h3>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>name</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>-</td>\n<td>显示文字</td>\n</tr>\n<tr>\n<td>icon</td>\n<td>icon 图标</td>\n</tr>\n</tbody>\n</table></div>')},230:function(s,a){var n,t,l={};s.exports=n||{},s.exports.__esModule&&(s.exports=s.exports["default"]);var p="function"==typeof s.exports?s.exports.options||(s.exports.options={}):s.exports;t&&(p.template=t),p.computed||(p.computed={}),Object.keys(l).forEach(function(s){var a=l[s];p.computed[s]=function(){return a}})}});