<template><div><h2 id="iic介绍" tabindex="-1"><a class="header-anchor" href="#iic介绍" aria-hidden="true">#</a> IIC介绍</h2>
<p>IIC是一种常见的通信协议，IIC可以同时连接多个设备，使用SCL、SDA两根线在控制器与外接设备设备进行连接。</p>
<h2 id="at24c02介绍" tabindex="-1"><a class="header-anchor" href="#at24c02介绍" aria-hidden="true">#</a> AT24C02介绍</h2>
<p>AT24C02是一款十分常见的存储器，属于EEPROM类型，是一种非易失性存储器。它可以在断电后保留存储的数据。EEPROM允许通过电子方式对存储的数据进行擦除和编程。AT24C02容量2K位（256字节）。每个页面的大小为8字节，共32页。AT24C02可以选择擦除8字节的整个页面，而不是逐字节进行擦除。这种页擦除的概念有助于减少擦除操作的次数，提高EEPROM的使用寿命。</p>
<p>AT24C02 EEPROM的I2C地址分为两部分：设备地址和页地址。设备地址的最高7位是固定的，而低位是页地址。</p>
<p>设备地址的最高7位是固定的，其二进制形式是 1010 A2 A1 A0，其中 A2、A1、A0 是由芯片上的硬件引脚决定的三个地址位。例如，如果这些引脚被接地，那么设备地址就是 1010000。</p>
<p>AT24C02的页地址是一个字节（8位），因此页地址的范围是从 0x00 到 0xFF。</p>
<p>因此，AT24C02 EEPROM的起始地址可以计算为设备地址和页地址的组合。例如，如果设备地址为 1010000，页地址为 0x00，那么起始地址为：</p>
<p><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mtext>起始地址</mtext><mo>=</mo><mtext>设备地址</mtext><mo>+</mo><mtext>页地址</mtext></mrow><annotation encoding="application/x-tex">\text{起始地址} = \text{设备地址} + \text{页地址}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord text"><span class="mord cjk_fallback">起始地址</span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7667em;vertical-align:-0.0833em;"></span><span class="mord text"><span class="mord cjk_fallback">设备地址</span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord text"><span class="mord cjk_fallback">页地址</span></span></span></span></span></p>
<p><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mtext>起始地址</mtext><mo>=</mo><mn>1010000</mn><mo>+</mo><mn>00000000</mn><mo>=</mo><mn>10100000</mn></mrow><annotation encoding="application/x-tex">\text{起始地址} = 1010000 + 00000000 = 10100000</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord text"><span class="mord cjk_fallback">起始地址</span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">1010000</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">00000000</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">10100000</span></span></span></span></p>
<p>在16进制表示中，这个起始地址就是 0xA0。根据具体的硬件配置，设备地址可能会有所不同。在实际使用中，应查阅AT24C02的数据手册以获取确切的地址信息。</p>
<h3 id="eeprom的一些基本特性和概念" tabindex="-1"><a class="header-anchor" href="#eeprom的一些基本特性和概念" aria-hidden="true">#</a> EEPROM的一些基本特性和概念：</h3>
<ol>
<li>非易失性存储器：<br>
EEPROM是一种非易失性存储器，它的数据在断电后仍然保持。这使得EEPROM适用于需要在电源断开后保留配置、用户数据等信息的应用。</li>
<li>可擦除和可编程：<br>
EEPROM可以被擦除和编程，允许多次写入操作而不影响其他存储单元。这使得EEPROM非常适合存储需要经常更新的数据，如配置信息、用户设置等。</li>
<li>擦除和写入的单位：<br>
EEPROM的擦除和写入操作通常以一个特定的单位为基础，这个单位通常被称为“页”（Page）。对于一些EEPROM，整个芯片的擦除可能会比较耗时，而采用页擦除则提供了更灵活的方式。</li>
<li>读取速度：<br>
EEPROM相对于一些其他非易失性存储器（如Flash存储器）的一个特点是，它的读取速度相对较慢。这通常不是问题，因为EEPROM主要用于存储配置、用户数据等，并不需要频繁的读取操作。</li>
<li>写入次数限制：<br>
EEPROM的一个重要特性是它的写入次数是有限的。每个存储单元（位或字节）都有一个额定的写入次数，超过这个次数后，该存储单元可能会变得不可靠。因此，需要在设计中考虑如何合理使用EEPROM，以延长其寿命。</li>
</ol>
<h3 id="存储器的单位关系" tabindex="-1"><a class="header-anchor" href="#存储器的单位关系" aria-hidden="true">#</a> 存储器的单位关系：</h3>
<p>在存储器系统中，页（Page）、字节（Byte）、和位（Bit）是不同的单位，它们之间的关系如下：</p>
<ol>
<li>Bit（位）：<br>
位是最小的存储单位，表示二进制的0或1。8个位组成一个字节。</li>
<li>Byte（字节）：<br>
字节是计算机中常用的基本存储单位，通常由8位组成。一个字节可以表示256个不同的二进制值（2^8）。</li>
<li>Page（页）：<br>
页是一种在存储器系统中用于管理数据的逻辑块。页的大小可以是字节的整数倍，例如，一页可以包含8字节、16字节、或更多字节。页的概念通常用于Flash存储器和一些EEPROM中。</li>
</ol>
<h3 id="eeprom的擦除与写入操作" tabindex="-1"><a class="header-anchor" href="#eeprom的擦除与写入操作" aria-hidden="true">#</a> EEPROM的擦除与写入操作</h3>
<p>EEPROM通常需要在写入新的数据之前擦除相应的存储区域。EEPROM的擦除和写入操作是分开的，而且擦除操作的粒度通常是一个页（Page）或更大的存储块。</p>
<ol>
<li>擦除操作：<br>
在进行写入之前，你需要将目标存储区域擦除。这是因为EEPROM的写入操作是通过将新的数据覆盖到已擦除的存储单元中实现的。<br>
擦除的粒度通常是一页（Page）或更大，具体取决于EEPROM芯片的规格。在AT24C02中，页擦除是常见的。</li>
<li>写入操作：<br>
一旦存储区域被擦除，你可以将新的数据写入擦除过的区域。写入的数据将覆盖已擦除的存储单元，更新EEPROM的内容。</li>
</ol>
</div></template>


