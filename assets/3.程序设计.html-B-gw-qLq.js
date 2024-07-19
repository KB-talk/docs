import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,o as s,b as e}from"./app-BDDhyyu5.js";const a={},n=e(`<h2 id="在主函数定义变量" tabindex="-1"><a class="header-anchor" href="#在主函数定义变量"><span>在主函数定义变量</span></a></h2><div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" data-title="c" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">uint16_t</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;"> adcbuf</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">];</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="在循环中添加" tabindex="-1"><a class="header-anchor" href="#在循环中添加"><span>在循环中添加</span></a></h2><div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" data-title="c" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">HAL_ADC_Start</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">&amp;</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">hadc3</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">   //由于没有开启连续转换，每次转换前需要软件开启adc</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">HAL_ADC_PollForConversion</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">&amp;</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">hadc3</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">//轮询等待ADC转换完成</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">adcbuf</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">HAL_ADC_GetValue</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">&amp;</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">hadc3</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">     //将四个通道的采样值存在数组里</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),h=[n];function l(r,p){return s(),t("div",null,h)}const k=i(a,[["render",l],["__file","3.程序设计.html.vue"]]),c=JSON.parse('{"path":"/STM32F103ZET6/12.ADC/3.%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1.html","title":"程序设计","lang":"zh-CN","frontmatter":{"title":"程序设计","cover":"/assets/images/cover1.jpg","icon":"file","order":3,"author":"张凯博","date":"2024-06-21T00:00:00.000Z","category":["STM32"],"tag":["开发环境","介绍"],"sticky":false,"star":false,"footer":"STM32开发环境搭建","copyright":"无版权","description":"在主函数定义变量 在循环中添加","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/docs/STM32F103ZET6/12.ADC/3.%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1.html"}],["meta",{"property":"og:site_name","content":"文档管理"}],["meta",{"property":"og:title","content":"程序设计"}],["meta",{"property":"og:description","content":"在主函数定义变量 在循环中添加"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://vuepress-theme-hope-docs-demo.netlify.app/docs/assets/images/cover1.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-19T02:10:58.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://vuepress-theme-hope-docs-demo.netlify.app/docs/assets/images/cover1.jpg"}],["meta",{"name":"twitter:image:alt","content":"程序设计"}],["meta",{"property":"article:author","content":"张凯博"}],["meta",{"property":"article:tag","content":"开发环境"}],["meta",{"property":"article:tag","content":"介绍"}],["meta",{"property":"article:published_time","content":"2024-06-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-19T02:10:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"程序设计\\",\\"image\\":[\\"https://vuepress-theme-hope-docs-demo.netlify.app/docs/assets/images/cover1.jpg\\"],\\"datePublished\\":\\"2024-06-21T00:00:00.000Z\\",\\"dateModified\\":\\"2024-07-19T02:10:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"张凯博\\"}]}"]]},"headers":[{"level":2,"title":"在主函数定义变量","slug":"在主函数定义变量","link":"#在主函数定义变量","children":[]},{"level":2,"title":"在循环中添加","slug":"在循环中添加","link":"#在循环中添加","children":[]}],"git":{"createdTime":1719386901000,"updatedTime":1721355058000,"contributors":[{"name":"KB-talk","email":"zkb13258847839@163.com","commits":1}]},"readingTime":{"minutes":0.75,"words":225},"filePathRelative":"STM32F103ZET6/12.ADC/3.程序设计.md","localizedDate":"2024年6月21日","autoDesc":true}');export{k as comp,c as data};
