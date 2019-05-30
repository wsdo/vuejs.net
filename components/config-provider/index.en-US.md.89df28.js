(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{1438:function(n,t){n.exports={content:["section",["p",["code","ConfigProvider"]," provides a uniform configuration support for components."],["h2","Usage"],["p","This component provides a configuration to all React components underneath itself via the ",["a",{title:null,href:"https://facebook.github.io/react/docs/context.html"},"context API"],", In the render tree all components will have access to the provided config."],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> ConfigProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// ...</span>\n\n<span class="token keyword">return</span> <span class="token punctuation">(</span>\n  <span class="token operator">&lt;</span>ConfigProvider <span class="token punctuation">{</span><span class="token operator">...</span>yourConfig<span class="token punctuation">}</span><span class="token operator">></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ConfigProvider</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","import { ConfigProvider } from 'antd';\n\n// ...\n\nreturn (\n  <ConfigProvider {...yourConfig}>\n    <App />\n  </ConfigProvider>\n);"]]],meta:{category:"Components",type:"Other",cols:1,title:"ConfigProvider",filename:"components/config-provider/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#Usage",title:"Usage"},"Usage"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","renderEmpty"],["td","set empty content of components. Ref ",["a",{title:null,href:"/components/empty/"},"Empty"]],["td","Function(componentName: string): ReactNode"],["td","-"]],["tr",["td","getPopupContainer"],["td","to set the container of the popup element. The default is to create a ",["code","div"]," element in ",["code","body"],"."],["td","Function(triggerNode)"],["td",["code","() => document.body"]]],["tr",["td","prefixCls"],["td","set prefix class"],["td","string"],["td","ant"]]]]]}}}]);