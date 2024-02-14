<template><div><h2 id="推完输出模式io口控制" tabindex="-1"><a class="header-anchor" href="#推完输出模式io口控制" aria-hidden="true">#</a> 推完输出模式IO口控制</h2>
<h3 id="高电平" tabindex="-1"><a class="header-anchor" href="#高电平" aria-hidden="true">#</a> 高电平</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>HAL_GPIO_WritePin(GPIOx, GPIO_PIN_x, GPIO_PIN_SET); 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>GPIOx 是 GPIO 端口（例如，GPIOA、GPIOB 等）<br>
GPIO_PIN_x 是该端口内的特定引脚<br>
GPIO_PIN_SET 用于将引脚设置为高电平（逻辑电平 1）<br>
GPIO_PIN_RESET 用于将引脚设置为低电平（逻辑电平 0）<br>
HAL_GPIO_WritePin(GPIOA,GPIO_PIN_2,GPIO_PIN_SET);</p>
<h3 id="低电平" tabindex="-1"><a class="header-anchor" href="#低电平" aria-hidden="true">#</a> 低电平</h3>
<p>HAL_GPIO_WritePin(GPIOA,GPIO_PIN_2,GPIO_PIN_RESET);</p>
<h2 id="输入模式io口控制" tabindex="-1"><a class="header-anchor" href="#输入模式io口控制" aria-hidden="true">#</a> 输入模式IO口控制</h2>
</div></template>


