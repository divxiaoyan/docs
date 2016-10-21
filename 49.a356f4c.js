webpackJsonp([49],{226:function(s,n){var t,a,l={};s.exports=t||{},s.exports.__esModule&&(s.exports=s.exports["default"]);var e="function"==typeof s.exports?s.exports.options||(s.exports.options={}):s.exports;a&&(e.template=a),e.computed||(e.computed={}),Object.keys(l).forEach(function(s){var n=l[s];e.computed[s]=function(){return n}})},96:function(s,n,t){s.exports=t(226),'<h1>Infinite scroll</h1>\n<blockquote>\n<p>无限滚动指令。</p>\n</blockquote>\n<hr>\n<h2>引入</h2>\n<pre><code class="language-javascript"><span class="hljs-keyword">import</span> { InfiniteScroll } <span class="hljs-keyword">from</span> <span class="hljs-string">\'mint-ui\'</span>;\n\nVue.use(InfiniteScroll);\n</code></pre>\n<h2>例子</h2>\n<p>为 HTML 元素添加 <code>v-infinite-scroll</code> 指令即可使用无限滚动。滚动该元素，当其底部与被滚动元素底部的距离小于给定的阈值（通过 <code>infinite-scroll-distance</code> 设置）时，绑定到 <code>v-infinite-scroll</code> 指令的方法就会被触发。</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">ul</span>\n  <span class="hljs-attr">v-infinite-scroll</span>=<span class="hljs-string">"loadMore"</span>\n  <span class="hljs-attr">infinite-scroll-disabled</span>=<span class="hljs-string">"loading"</span>\n  <span class="hljs-attr">infinite-scroll-distance</span>=<span class="hljs-string">"10"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">"item in list"</span>&gt;</span>{{ item }}<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>\n</code></pre>\n<pre><code class="language-javascript">loadMore() {\n  <span class="hljs-keyword">this</span>.loading = <span class="hljs-literal">true</span>;\n  setTimeout(() =&gt; {\n    <span class="hljs-keyword">let</span> last = <span class="hljs-keyword">this</span>.list[<span class="hljs-keyword">this</span>.list.length - <span class="hljs-number">1</span>];\n    <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">1</span>; i &lt;= <span class="hljs-number">10</span>; i++) {\n      <span class="hljs-keyword">this</span>.list.push(last + i);\n    }\n    <span class="hljs-keyword">this</span>.loading = <span class="hljs-literal">false</span>;\n  }, <span class="hljs-number">2500</span>);\n}\n</code></pre>\n<h2>API</h2>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>infinite-scroll-disabled</td>\n<td>若为真，则无限滚动不会被触发</td>\n<td>Boolean</td>\n<td></td>\n<td>false</td>\n</tr>\n<tr>\n<td>infinite-scroll-distance</td>\n<td>触发加载方法的滚动距离阈值（像素）</td>\n<td>Number</td>\n<td></td>\n<td>0</td>\n</tr>\n<tr>\n<td>infinite-scroll-immediate-check</td>\n<td>若为真，则指令被绑定到元素上后会立即检查是否需要执行加载方法。在初始状态下内容有可能撑不满容器时十分有用。</td>\n<td>Boolean</td>\n<td></td>\n<td>true</td>\n</tr>\n<tr>\n<td>infinite-scroll-listen-for-event</td>\n<td>一个 event，被执行时会立即检查是否需要执行加载方法。</td>\n<td>Function</td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table></div>'!==s.exports.template&&(s.exports.template='<h1>Infinite scroll</h1>\n<blockquote>\n<p>无限滚动指令。</p>\n</blockquote>\n<hr>\n<h2>引入</h2>\n<pre><code class="language-javascript"><span class="hljs-keyword">import</span> { InfiniteScroll } <span class="hljs-keyword">from</span> <span class="hljs-string">\'mint-ui\'</span>;\n\nVue.use(InfiniteScroll);\n</code></pre>\n<h2>例子</h2>\n<p>为 HTML 元素添加 <code>v-infinite-scroll</code> 指令即可使用无限滚动。滚动该元素，当其底部与被滚动元素底部的距离小于给定的阈值（通过 <code>infinite-scroll-distance</code> 设置）时，绑定到 <code>v-infinite-scroll</code> 指令的方法就会被触发。</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">ul</span>\n  <span class="hljs-attr">v-infinite-scroll</span>=<span class="hljs-string">"loadMore"</span>\n  <span class="hljs-attr">infinite-scroll-disabled</span>=<span class="hljs-string">"loading"</span>\n  <span class="hljs-attr">infinite-scroll-distance</span>=<span class="hljs-string">"10"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">"item in list"</span>&gt;</span>{{ item }}<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>\n</code></pre>\n<pre><code class="language-javascript">loadMore() {\n  <span class="hljs-keyword">this</span>.loading = <span class="hljs-literal">true</span>;\n  setTimeout(() =&gt; {\n    <span class="hljs-keyword">let</span> last = <span class="hljs-keyword">this</span>.list[<span class="hljs-keyword">this</span>.list.length - <span class="hljs-number">1</span>];\n    <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">1</span>; i &lt;= <span class="hljs-number">10</span>; i++) {\n      <span class="hljs-keyword">this</span>.list.push(last + i);\n    }\n    <span class="hljs-keyword">this</span>.loading = <span class="hljs-literal">false</span>;\n  }, <span class="hljs-number">2500</span>);\n}\n</code></pre>\n<h2>API</h2>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>infinite-scroll-disabled</td>\n<td>若为真，则无限滚动不会被触发</td>\n<td>Boolean</td>\n<td></td>\n<td>false</td>\n</tr>\n<tr>\n<td>infinite-scroll-distance</td>\n<td>触发加载方法的滚动距离阈值（像素）</td>\n<td>Number</td>\n<td></td>\n<td>0</td>\n</tr>\n<tr>\n<td>infinite-scroll-immediate-check</td>\n<td>若为真，则指令被绑定到元素上后会立即检查是否需要执行加载方法。在初始状态下内容有可能撑不满容器时十分有用。</td>\n<td>Boolean</td>\n<td></td>\n<td>true</td>\n</tr>\n<tr>\n<td>infinite-scroll-listen-for-event</td>\n<td>一个 event，被执行时会立即检查是否需要执行加载方法。</td>\n<td>Function</td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table></div>')}});