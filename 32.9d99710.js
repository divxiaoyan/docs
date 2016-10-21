webpackJsonp([32],{113:function(t,n,s){t.exports=s(243),'<h1>Toast</h1>\n<blockquote>\n<p>简短的消息提示框，支持自定义位置、持续时间和样式。</p>\n</blockquote>\n<hr>\n<h2>引入</h2>\n<pre><code class="language-javascript"><span class="hljs-keyword">import</span> { Toast } <span class="hljs-keyword">from</span> <span class="hljs-string">\'mint-ui\'</span>;\n</code></pre>\n<h2>例子</h2>\n<p>基本用法</p>\n<pre><code class="language-javascript">Toast(<span class="hljs-string">\'提示信息\'</span>);\n</code></pre>\n<p>在调用 <code>Toast</code> 时传入一个对象即可配置更多选项</p>\n<pre><code class="language-javascript">Toast({\n  message: <span class="hljs-string">\'提示\'</span>,\n  position: <span class="hljs-string">\'bottom\'</span>,\n  duration: <span class="hljs-number">5000</span>\n});\n</code></pre>\n<p>若需在文字上方显示一个 icon 图标，可以将图标的类名作为 <code>iconClass</code> 的值传给 <code>Toast</code>（图标需自行准备）</p>\n<pre><code class="language-javascript">Toast({\n  message: <span class="hljs-string">\'操作成功\'</span>,\n  iconClass: <span class="hljs-string">\'icon icon-success\'</span>\n});\n</code></pre>\n<h2>API</h2>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>message</td>\n<td>文本内容</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>position</td>\n<td>Toast 的位置</td>\n<td>String</td>\n<td>\'top\'<br>\'bottom\'<br>\'middle\'</td>\n<td>\'middle\'</td>\n</tr>\n<tr>\n<td>duration</td>\n<td>持续时间（毫秒）</td>\n<td>Number</td>\n<td></td>\n<td>3000</td>\n</tr>\n<tr>\n<td>className</td>\n<td>Toast 的类名。可以为其添加样式</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>iconClass</td>\n<td>icon 图标的类名</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table></div>'!==t.exports.template&&(t.exports.template='<h1>Toast</h1>\n<blockquote>\n<p>简短的消息提示框，支持自定义位置、持续时间和样式。</p>\n</blockquote>\n<hr>\n<h2>引入</h2>\n<pre><code class="language-javascript"><span class="hljs-keyword">import</span> { Toast } <span class="hljs-keyword">from</span> <span class="hljs-string">\'mint-ui\'</span>;\n</code></pre>\n<h2>例子</h2>\n<p>基本用法</p>\n<pre><code class="language-javascript">Toast(<span class="hljs-string">\'提示信息\'</span>);\n</code></pre>\n<p>在调用 <code>Toast</code> 时传入一个对象即可配置更多选项</p>\n<pre><code class="language-javascript">Toast({\n  message: <span class="hljs-string">\'提示\'</span>,\n  position: <span class="hljs-string">\'bottom\'</span>,\n  duration: <span class="hljs-number">5000</span>\n});\n</code></pre>\n<p>若需在文字上方显示一个 icon 图标，可以将图标的类名作为 <code>iconClass</code> 的值传给 <code>Toast</code>（图标需自行准备）</p>\n<pre><code class="language-javascript">Toast({\n  message: <span class="hljs-string">\'操作成功\'</span>,\n  iconClass: <span class="hljs-string">\'icon icon-success\'</span>\n});\n</code></pre>\n<h2>API</h2>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>message</td>\n<td>文本内容</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>position</td>\n<td>Toast 的位置</td>\n<td>String</td>\n<td>\'top\'<br>\'bottom\'<br>\'middle\'</td>\n<td>\'middle\'</td>\n</tr>\n<tr>\n<td>duration</td>\n<td>持续时间（毫秒）</td>\n<td>Number</td>\n<td></td>\n<td>3000</td>\n</tr>\n<tr>\n<td>className</td>\n<td>Toast 的类名。可以为其添加样式</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>iconClass</td>\n<td>icon 图标的类名</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table></div>')},243:function(t,n){var s,d,a={};t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports["default"]);var o="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;d&&(o.template=d),o.computed||(o.computed={}),Object.keys(a).forEach(function(t){var n=a[t];o.computed[t]=function(){return n}})}});