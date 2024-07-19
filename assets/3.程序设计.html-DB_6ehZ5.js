import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as t,b as a}from"./app-BDDhyyu5.js";const e={},h=a(`<h2 id="修改rtc-c" tabindex="-1"><a class="header-anchor" href="#修改rtc-c"><span>修改rtc.c</span></a></h2><p>在MX_RTC_Init中的<code>USER CODE BEGIN Check_RTC_BKUP</code>中添加</p><div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" data-title="c" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">HAL_RTCEx_BKUPRead</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">&amp;</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">hrtc</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">RTC_BKP_DR1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">!=</span><span style="--shiki-light:#D73A49;--shiki-dark:#E06C75;">0X</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">8888</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">//判断是否首次上电</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  HAL_RTCEx_BKUPWrite</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">hrtc,RTC_BKP_DR1,</span><span style="--shiki-light:#D73A49;--shiki-dark:#E06C75;">0X</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">8888</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> //标记数值（写入上电检查数值）</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在MX_RTC_Init中的<code>USER CODE BEGIN RTC_Init 2</code>中添加</p><div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" data-title="c" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="修改main-c" tabindex="-1"><a class="header-anchor" href="#修改main-c"><span>修改main.c</span></a></h2><p>在<code>/* USER CODE BEGIN 1 */</code>中添加</p><div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" data-title="c" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">RTC_DateTypeDef date;</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">	//读取日期</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">RTC_TimeTypeDef time;</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">	//读取时间</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>在主循环中的<code>USER CODE BEGIN 3</code>中添加</p><div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" data-title="c" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">HAL_RTC_GetTime</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">&amp;</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">hrtc</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> &amp;</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">time</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> RTC_FORMAT_BIN</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">HAL_RTC_GetDate</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">&amp;</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">hrtc</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> &amp;</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">date</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> RTC_FORMAT_BIN</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>使用串口打印信息。</p><div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" data-title="c" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">printf</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;20</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">%d</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">%02d</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">%02d</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> %02d</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">%02d</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">%02d</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;"> \\r\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> date.Year</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> date.Month</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> date.Date</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> time.Hours</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> time.Minutes</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> time.Seconds</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,12),n=[h];function l(k,r){return t(),s("div",null,n)}const c=i(e,[["render",l],["__file","3.程序设计.html.vue"]]),o=JSON.parse('{"path":"/STM32F103ZET6/7.RTC%E6%97%B6%E9%92%9F/3.%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1.html","title":"程序设计","lang":"zh-CN","frontmatter":{"title":"程序设计","cover":"/assets/images/cover1.jpg","icon":"file","order":3,"author":"张凯博","date":"2024-06-21T00:00:00.000Z","category":["STM32"],"tag":["开发环境","介绍"],"sticky":false,"star":false,"footer":"STM32开发环境搭建","copyright":"无版权","description":"修改rtc.c 在MX_RTC_Init中的USER CODE BEGIN Check_RTC_BKUP中添加 在MX_RTC_Init中的USER CODE BEGIN RTC_Init 2中添加 修改main.c 在/* USER CODE BEGIN 1 */中添加 在主循环中的USER CODE BEGIN 3中添加 使用串口打印信息。","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/docs/STM32F103ZET6/7.RTC%E6%97%B6%E9%92%9F/3.%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1.html"}],["meta",{"property":"og:site_name","content":"文档管理"}],["meta",{"property":"og:title","content":"程序设计"}],["meta",{"property":"og:description","content":"修改rtc.c 在MX_RTC_Init中的USER CODE BEGIN Check_RTC_BKUP中添加 在MX_RTC_Init中的USER CODE BEGIN RTC_Init 2中添加 修改main.c 在/* USER CODE BEGIN 1 */中添加 在主循环中的USER CODE BEGIN 3中添加 使用串口打印信息。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://vuepress-theme-hope-docs-demo.netlify.app/docs/assets/images/cover1.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-19T02:10:58.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://vuepress-theme-hope-docs-demo.netlify.app/docs/assets/images/cover1.jpg"}],["meta",{"name":"twitter:image:alt","content":"程序设计"}],["meta",{"property":"article:author","content":"张凯博"}],["meta",{"property":"article:tag","content":"开发环境"}],["meta",{"property":"article:tag","content":"介绍"}],["meta",{"property":"article:published_time","content":"2024-06-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-19T02:10:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"程序设计\\",\\"image\\":[\\"https://vuepress-theme-hope-docs-demo.netlify.app/docs/assets/images/cover1.jpg\\"],\\"datePublished\\":\\"2024-06-21T00:00:00.000Z\\",\\"dateModified\\":\\"2024-07-19T02:10:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"张凯博\\"}]}"]]},"headers":[{"level":2,"title":"修改rtc.c","slug":"修改rtc-c","link":"#修改rtc-c","children":[]},{"level":2,"title":"修改main.c","slug":"修改main-c","link":"#修改main-c","children":[]}],"git":{"createdTime":1719386901000,"updatedTime":1721355058000,"contributors":[{"name":"KB-talk","email":"zkb13258847839@163.com","commits":2}]},"readingTime":{"minutes":0.94,"words":283},"filePathRelative":"STM32F103ZET6/7.RTC时钟/3.程序设计.md","localizedDate":"2024年6月21日","autoDesc":true}');export{c as comp,o as data};
