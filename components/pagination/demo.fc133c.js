(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{1494:function(n,a,s){n.exports={basic:s(1887),changer:s(1888),controlled:s(1889),itemRender:s(1890),jump:s(1891),mini:s(1892),more:s(1893),simple:s(1894),total:s(1895)}},1887:function(n,a,s){n.exports={content:{"zh-CN":[["p","基础分页。"]],"en-US":[["p","Basic pagination."]]},meta:{order:0,title:{"zh-CN":"基本","en-US":"Basic"},filename:"components/pagination/demo/basic.md",id:"components-pagination-demo-basic"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Pagination <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Pagination</span> <span class="token attr-name">defaultCurrent</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span> <span class="token attr-name">total</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">50</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s(0),a=(s(8),s(10));return n.createElement(a.Pagination,{defaultCurrent:1,total:50})}}},1888:function(n,a,s){n.exports={content:{"zh-CN":[["p","改变每页显示条目数。"]],"en-US":[["p","Change ",["code","pageSize"],"."]]},meta:{order:2,title:{"zh-CN":"改变","en-US":"Changer"},filename:"components/pagination/demo/changer.md",id:"components-pagination-demo-changer"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Pagination <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">onShowSizeChange</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> pageSize<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> pageSize<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Pagination</span> <span class="token attr-name">showSizeChanger</span> <span class="token attr-name">onShowSizeChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onShowSizeChange<span class="token punctuation">}</span></span> <span class="token attr-name">defaultCurrent</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span> <span class="token attr-name">total</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">500</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s(0),a=(s(8),s(10));return n.createElement(a.Pagination,{showSizeChanger:!0,onShowSizeChange:function(n,a){console.log(n,a)},defaultCurrent:3,total:500})}}},1889:function(n,a,s){n.exports={content:{"zh-CN":[["p","受控制的页码。"]],"en-US":[["p","Controlled page number."]]},meta:{order:8,title:{"zh-CN":"受控","en-US":"Controlled"},filename:"components/pagination/demo/controlled.md",id:"components-pagination-demo-controlled"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Pagination <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    current<span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n\n  onChange <span class="token operator">=</span> <span class="token punctuation">(</span>page<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>page<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      current<span class="token punctuation">:</span> page<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Pagination</span> <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>current<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span> <span class="token attr-name">total</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">50</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s(0),a=(s(8),s(10));function t(n){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function p(n,a){for(var s=0;s<a.length;s++){var t=a[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function o(n){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function e(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function c(n,a){return(c=Object.setPrototypeOf||function(n,a){return n.__proto__=a,n})(n,a)}function l(n,a,s){return a in n?Object.defineProperty(n,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[a]=s,n}var u=function(s){function u(){var n,a,s,p;!function(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}(this,u);for(var c=arguments.length,i=new Array(c),k=0;k<c;k++)i[k]=arguments[k];return s=this,p=(n=o(u)).call.apply(n,[this].concat(i)),a=!p||"object"!==t(p)&&"function"!=typeof p?e(s):p,l(e(a),"state",{current:3}),l(e(a),"onChange",function(n){console.log(n),a.setState({current:n})}),a}var i,k,r;return function(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),a&&c(n,a)}(u,n.Component),i=u,(k=[{key:"render",value:function(){return n.createElement(a.Pagination,{current:this.state.current,onChange:this.onChange,total:50})}}])&&p(i.prototype,k),r&&p(i,r),u}();return n.createElement(u,null)}}},1890:function(n,a,s){n.exports={content:{"zh-CN":[["p","修改上一步和下一步为文字链接。"]],"en-US":[["p","Use text link for prev and next button."]]},meta:{order:10,title:{"zh-CN":"上一步和下一步","en-US":"Prev and next"},filename:"components/pagination/demo/itemRender.md",id:"components-pagination-demo-itemRender"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Pagination <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">itemRender</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> type<span class="token punctuation">,</span> originalElement<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">\'prev\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span><span class="token punctuation">></span></span>Previous<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">\'next\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span><span class="token punctuation">></span></span>Next<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> originalElement<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Pagination</span> <span class="token attr-name">total</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">500</span><span class="token punctuation">}</span></span> <span class="token attr-name">itemRender</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>itemRender<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s(0),a=(s(8),s(10));return n.createElement(a.Pagination,{total:500,itemRender:function(a,s,t){return"prev"===s?n.createElement("a",null,"Previous"):"next"===s?n.createElement("a",null,"Next"):t}})}}},1891:function(n,a,s){n.exports={content:{"zh-CN":[["p","快速跳转到某一页。"]],"en-US":[["p","Jump to a page directly."]]},meta:{order:3,title:{"zh-CN":"跳转","en-US":"Jumper"},filename:"components/pagination/demo/jump.md",id:"components-pagination-demo-jump"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Pagination <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">onChange</span><span class="token punctuation">(</span>pageNumber<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Page: \'</span><span class="token punctuation">,</span> pageNumber<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Pagination</span> <span class="token attr-name">showQuickJumper</span> <span class="token attr-name">defaultCurrent</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span> <span class="token attr-name">total</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">500</span><span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s(0),a=(s(8),s(10));return n.createElement(a.Pagination,{showQuickJumper:!0,defaultCurrent:2,total:500,onChange:function(n){console.log("Page: ",n)}})}}},1892:function(n,a,s){n.exports={content:{"zh-CN":[["p","迷你版本。"]],"en-US":[["p","Mini size pagination."]]},meta:{order:4,title:{"zh-CN":"迷你","en-US":"Mini size"},filename:"components/pagination/demo/mini.md",id:"components-pagination-demo-mini"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Pagination <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">showTotal</span><span class="token punctuation">(</span>total<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token template-string"><span class="token string">`Total </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>total<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> items`</span></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Pagination</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span> <span class="token attr-name">total</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">50</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Pagination</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span> <span class="token attr-name">total</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">50</span><span class="token punctuation">}</span></span> <span class="token attr-name">showSizeChanger</span> <span class="token attr-name">showQuickJumper</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Pagination</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span> <span class="token attr-name">total</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">50</span><span class="token punctuation">}</span></span> <span class="token attr-name">showTotal</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>showTotal<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s(0),a=(s(8),s(10));return n.createElement("div",null,n.createElement(a.Pagination,{size:"small",total:50}),n.createElement(a.Pagination,{size:"small",total:50,showSizeChanger:!0,showQuickJumper:!0}),n.createElement(a.Pagination,{size:"small",total:50,showTotal:function(n){return"Total ".concat(n," items")}}))},style:"\n#components-pagination-demo-mini .ant-pagination:not(:last-child) {\n  margin-bottom: 24px;\n}\n"}},1893:function(n,a,s){n.exports={content:{"zh-CN":[["p","更多分页。"]],"en-US":[["p","More pages."]]},meta:{order:1,title:{"zh-CN":"更多","en-US":"More"},filename:"components/pagination/demo/more.md",id:"components-pagination-demo-more"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Pagination <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Pagination</span> <span class="token attr-name">defaultCurrent</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">6</span><span class="token punctuation">}</span></span> <span class="token attr-name">total</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">500</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s(0),a=(s(8),s(10));return n.createElement(a.Pagination,{defaultCurrent:6,total:500})}}},1894:function(n,a,s){n.exports={content:{"zh-CN":[["p","简单的翻页。"]],"en-US":[["p","Simple mode."]]},meta:{order:6,title:{"zh-CN":"简洁","en-US":"Simple mode"},filename:"components/pagination/demo/simple.md",id:"components-pagination-demo-simple"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Pagination <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Pagination</span> <span class="token attr-name">simple</span> <span class="token attr-name">defaultCurrent</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span> <span class="token attr-name">total</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">50</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s(0),a=(s(8),s(10));return n.createElement(a.Pagination,{simple:!0,defaultCurrent:2,total:50})}}},1895:function(n,a,s){n.exports={content:{"zh-CN":[["p","通过设置 ",["code","showTotal"]," 展示总共有多少数据。"]],"en-US":[["p","You can show the total number of data by setting ",["code","showTotal"],"."]]},meta:{order:9,title:{"zh-CN":"总数","en-US":"Total number"},filename:"components/pagination/demo/total.md",id:"components-pagination-demo-total"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Pagination <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Pagination</span>\n      <span class="token attr-name">total</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">85</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">showTotal</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>total <span class="token operator">=</span><span class="token operator">></span> <span class="token template-string"><span class="token string">`Total </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>total<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> items`</span></span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">pageSize</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">20</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">defaultCurrent</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span>\n    <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Pagination</span>\n      <span class="token attr-name">total</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">85</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">showTotal</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>total<span class="token punctuation">,</span> range<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>range<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>range<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> of </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>total<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> items`</span></span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">pageSize</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">20</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">defaultCurrent</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span>\n    <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s(0),a=(s(8),s(10));return n.createElement("div",null,n.createElement(a.Pagination,{total:85,showTotal:function(n){return"Total ".concat(n," items")},pageSize:20,defaultCurrent:1}),n.createElement("br",null),n.createElement(a.Pagination,{total:85,showTotal:function(n,a){return"".concat(a[0],"-").concat(a[1]," of ").concat(n," items")},pageSize:20,defaultCurrent:1}))}}}}]);