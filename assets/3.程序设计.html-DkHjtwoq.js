import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,b as n}from"./app-BDDhyyu5.js";const t={},l=n(`<h2 id="修改key-c" tabindex="-1"><a class="header-anchor" href="#修改key-c"><span>修改key.c</span></a></h2><div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" data-title="c" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;key.h&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">uint8_t</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> key_scan</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">void</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">	static</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> uint8_t</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> key_up </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">//按键状态变量</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">	uint8_t</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> keyval </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">//按键值变量</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">	if</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(key_up </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&amp;&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (KEY0 </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">||</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">KEY1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">||</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">KEY2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">	{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">		HAL_Delay</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">//去抖</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">		key_up </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">//按键被按下</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">		if</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(KEY0 </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">			keyval </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> KEY0_PRES;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">		if</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(KEY1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">			keyval </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> KEY1_PRES;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">		if</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(KEY2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">			keyval </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> KEY2_PRES;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">	}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">	if</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(KEY0 </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&amp;&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">KEY1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&amp;&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">KEY2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">	{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">		key_up </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">//按键抬起</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">	}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">	return</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> keyval;</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">//返回键值</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="修改key-h" tabindex="-1"><a class="header-anchor" href="#修改key-h"><span>修改key.h</span></a></h2><div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" data-title="c" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;main.h&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> KEY0</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">        HAL_GPIO_ReadPin</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(KEY0_GPIO_Port</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> KEY0_Pin)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> KEY1</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">        HAL_GPIO_ReadPin</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(KEY1_GPIO_Port</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> KEY1_Pin)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> KEY2</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">        HAL_GPIO_ReadPin</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(KEY2_GPIO_Port</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> KEY2_Pin)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> KEY0_PRES</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">    1</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">              /* KEY0 按下 */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> KEY1_PRES</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">    2</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">              /* KEY1 按下 */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> KEY2_PRES</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">    3</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">              /* KEY2 按下 */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">uint8_t</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> key_scan</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">void</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="修改main-c" tabindex="-1"><a class="header-anchor" href="#修改main-c"><span>修改main.c</span></a></h2><h3 id="在main-c中添加头文件" tabindex="-1"><a class="header-anchor" href="#在main-c中添加头文件"><span>在main.c中添加头文件</span></a></h3><div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" data-title="c" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;KEY/key.h&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="在主函数中调用按键扫描函数" tabindex="-1"><a class="header-anchor" href="#在主函数中调用按键扫描函数"><span>在主函数中调用按键扫描函数</span></a></h3><div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" data-title="c" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">key </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> key_scan</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(key </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">	hint</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">	printf</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;1</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">\\r\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(key </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">	hint</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">	printf</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;2</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">\\r\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(key </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 3</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">	hint</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">	printf</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;3</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">\\r\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),e=[l];function h(k,p){return a(),s("div",null,e)}const c=i(t,[["render",h],["__file","3.程序设计.html.vue"]]),y=JSON.parse('{"path":"/STM32F103ZET6/5.KEY/3.%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1.html","title":"程序设计","lang":"zh-CN","frontmatter":{"title":"程序设计","cover":"/assets/images/cover1.jpg","icon":"file","order":3,"author":"张凯博","date":"2024-06-21T00:00:00.000Z","category":["STM32"],"tag":["开发环境","介绍"],"sticky":false,"star":false,"footer":"STM32开发环境搭建","copyright":"无版权","description":"修改key.c 修改key.h 修改main.c 在main.c中添加头文件 在主函数中调用按键扫描函数","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/docs/STM32F103ZET6/5.KEY/3.%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1.html"}],["meta",{"property":"og:site_name","content":"文档管理"}],["meta",{"property":"og:title","content":"程序设计"}],["meta",{"property":"og:description","content":"修改key.c 修改key.h 修改main.c 在main.c中添加头文件 在主函数中调用按键扫描函数"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://vuepress-theme-hope-docs-demo.netlify.app/docs/assets/images/cover1.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-19T02:10:58.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://vuepress-theme-hope-docs-demo.netlify.app/docs/assets/images/cover1.jpg"}],["meta",{"name":"twitter:image:alt","content":"程序设计"}],["meta",{"property":"article:author","content":"张凯博"}],["meta",{"property":"article:tag","content":"开发环境"}],["meta",{"property":"article:tag","content":"介绍"}],["meta",{"property":"article:published_time","content":"2024-06-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-19T02:10:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"程序设计\\",\\"image\\":[\\"https://vuepress-theme-hope-docs-demo.netlify.app/docs/assets/images/cover1.jpg\\"],\\"datePublished\\":\\"2024-06-21T00:00:00.000Z\\",\\"dateModified\\":\\"2024-07-19T02:10:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"张凯博\\"}]}"]]},"headers":[{"level":2,"title":"修改key.c","slug":"修改key-c","link":"#修改key-c","children":[]},{"level":2,"title":"修改key.h","slug":"修改key-h","link":"#修改key-h","children":[]},{"level":2,"title":"修改main.c","slug":"修改main-c","link":"#修改main-c","children":[{"level":3,"title":"在main.c中添加头文件","slug":"在main-c中添加头文件","link":"#在main-c中添加头文件","children":[]},{"level":3,"title":"在主函数中调用按键扫描函数","slug":"在主函数中调用按键扫描函数","link":"#在主函数中调用按键扫描函数","children":[]}]}],"git":{"createdTime":1719386901000,"updatedTime":1721355058000,"contributors":[{"name":"KB-talk","email":"zkb13258847839@163.com","commits":2}]},"readingTime":{"minutes":1.12,"words":337},"filePathRelative":"STM32F103ZET6/5.KEY/3.程序设计.md","localizedDate":"2024年6月21日","autoDesc":true}');export{c as comp,y as data};
