<template><div><h2 id="新建工程" tabindex="-1"><a class="header-anchor" href="#新建工程" aria-hidden="true">#</a> 新建工程</h2>
<ol>
<li>新建工程，选择对应的芯片型号STM32F103ZET6</li>
<li>选择对应的芯片<br>
<img src="https://cdn.jsdelivr.net/gh/KB-talk/picx-images-hosting@master/STM32/新建工程.25n0kqpv0tc0.webp" alt="新建工程" loading="lazy"></li>
<li>输入工程名称，不要使用中文<br>
<img src="https://cdn.jsdelivr.net/gh/KB-talk/picx-images-hosting@master/STM32/输入工程名.192zynlumz7k.webp" alt="输入工程名" loading="lazy"></li>
<li>进入CUBEMX配置界面<br>
<img src="https://cdn.jsdelivr.net/gh/KB-talk/picx-images-hosting@master/STM32/cubemx.6an1f9sapac0.webp" alt="cubemx" loading="lazy"></li>
</ol>
<p>CUBEMX界面介绍</p>
<ol>
<li>引脚配置</li>
<li>时钟树配置</li>
<li>工程管理</li>
<li>系统代码<br>
配置DMA、GPIO、中断、晶振选择、下载器选择</li>
<li>ADC、DAC配置</li>
<li>定时器配置</li>
<li>通讯配置</li>
</ol>
<h2 id="时钟树介绍" tabindex="-1"><a class="header-anchor" href="#时钟树介绍" aria-hidden="true">#</a> 时钟树介绍</h2>
<p>在系统代码中选择RCC，对晶振的选择进行配置，选择外部晶振<br>
<img src="https://cdn.jsdelivr.net/gh/KB-talk/picx-images-hosting@master/STM32/时钟.dx3lq7qkzv4.webp" alt="时钟" loading="lazy"><br>
当使用外部晶振时，最大72M，输入72，软件将自动配置<br>
<img src="https://cdn.jsdelivr.net/gh/KB-talk/picx-images-hosting@master/STM32/时钟树.2akjoedeq84k.webp" alt="时钟树" loading="lazy"></p>
<h2 id="下载器" tabindex="-1"><a class="header-anchor" href="#下载器" aria-hidden="true">#</a> 下载器</h2>
<p>在SYS中选择serial wire<br>
<img src="https://cdn.jsdelivr.net/gh/KB-talk/picx-images-hosting@master/STM32/下载器.7b5qbb02ncg0.webp" alt="下载器" loading="lazy"></p>
<h2 id="工程管理配置" tabindex="-1"><a class="header-anchor" href="#工程管理配置" aria-hidden="true">#</a> 工程管理配置</h2>
<p>进入代码管理，将下面的两个选项选择<br>
<img src="https://cdn.jsdelivr.net/gh/KB-talk/picx-images-hosting@master/STM32/代码配置.3hhqpx4eaew0.webp" alt="代码配置" loading="lazy"></p>
<ol>
<li>导入必要的库</li>
<li>生成独立的c和h文件</li>
</ol>
<h2 id="编译器的选择" tabindex="-1"><a class="header-anchor" href="#编译器的选择" aria-hidden="true">#</a> 编译器的选择</h2>
<p>可以选择KEIL，STM32CUBEIDE不同的编译器<br>
<img src="https://cdn.jsdelivr.net/gh/KB-talk/picx-images-hosting@master/STM32/编译器选择.20fqjrcdexnk.webp" alt="编译器选择" loading="lazy"></p>
<h2 id="下载器的选择" tabindex="-1"><a class="header-anchor" href="#下载器的选择" aria-hidden="true">#</a> 下载器的选择</h2>
<p>第一次下载时，需要配置下载器，选择STlink或者Jlink<br>
<img src="https://cdn.jsdelivr.net/gh/KB-talk/picx-images-hosting@master/STM32/下载器选择.2uin7dumc1s0.webp" alt="下载器选择" loading="lazy"></p>
</div></template>


