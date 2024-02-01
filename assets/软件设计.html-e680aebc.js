import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as a,f as n}from"./app-12195c6a.js";const d={},s=n(`<h2 id="推完输出模式io口控制" tabindex="-1"><a class="header-anchor" href="#推完输出模式io口控制" aria-hidden="true">#</a> 推完输出模式IO口控制</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>HAL_GPIO_WritePin(GPIOx, GPIO_PIN_x, GPIO_PIN_SET); 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>GPIOx 是 GPIO 端口（例如，GPIOA、GPIOB 等）当自定义引脚名后，可以使用自定义的端口和引脚名称<br> GPIO_PIN_x 是该端口内的特定引脚<br> GPIO_PIN_SET 用于将引脚设置为高电平（逻辑电平 1）<br> GPIO_PIN_RESET 用于将引脚设置为低电平（逻辑电平 0）</p><h3 id="高电平" tabindex="-1"><a class="header-anchor" href="#高电平" aria-hidden="true">#</a> 高电平</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>HAL_GPIO_WritePin(GPIOA,GPIO_PIN_2,GPIO_PIN_SET);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="低电平" tabindex="-1"><a class="header-anchor" href="#低电平" aria-hidden="true">#</a> 低电平</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>HAL_GPIO_WritePin(GPIOA,GPIO_PIN_2,GPIO_PIN_RESET);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="输入模式io口控制" tabindex="-1"><a class="header-anchor" href="#输入模式io口控制" aria-hidden="true">#</a> 输入模式IO口控制</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>HAL_GPIO_ReadPin(GPIOx, GPIO_PIN_x);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>GPIOx 是 GPIO 端口（例如，GPIOA、GPIOB 等）。<br> GPIO_PIN_x 是该端口内的特定引脚。</p><h3 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法" aria-hidden="true">#</a> 使用方法</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GPIO_PinState pinState = HAL_GPIO_ReadPin(GPIOx, GPIO_PIN_x);

if (pinState == GPIO_PIN_SET) {
    // 引脚处于高电平状态
    // 执行相应的操作
} else {
    // 引脚处于低电平状态
    // 执行相应的操作
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>GPIO_PIN_SET 表示引脚处于高电平状态。<br> GPIO_PIN_RESET 表示引脚处于低电平状态。<br> 函数返回一个枚举类型 GPIO_PinState，该类型通常定义了 GPIO_PIN_SET 和 GPIO_PIN_RESET 两个状态，分别表示高电平和低电平。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>typedef enum {
    GPIO_PIN_RESET = 0,  // 低电平
    GPIO_PIN_SET        // 高电平
} GPIO_PinState;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了后续对按键进行便捷的操作，我们为按键操作函数做了下面的定义。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#define KEY0 HAL_GPIO_ReadPin(KEY0_GPIO_PORT, KEY0_GPIO_PIN) /* 读取 KEY0引脚 */
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,16),r=[s];function t(l,c){return i(),a("div",null,r)}const v=e(d,[["render",t],["__file","软件设计.html.vue"]]);export{v as default};
