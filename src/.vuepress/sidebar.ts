import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/program/screen/": "structure",
  "/program/smart_door/": "structure",
  "/study/STM32/": 
  [
    {
      text: "开始",
      icon: "a-BeachChair",
      prefix: "start/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "GPIO",
      icon: "a-BeachChair",
      prefix: "GPIO/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "串口通信",
      icon: "a-BeachChair",
      prefix: "USART/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "IIC",
      icon: "a-BeachChair",
      prefix: "IIC/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "定时器",
      icon: "a-BeachChair",
      prefix: "TIME/",
      collapsible: true,
      children: "structure",
    },
  ],
  "/study/note/": 
  [
    {
      text: "高等数学",
      icon: "a-BeachChair",
      prefix: "math/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "线性代数",
      icon: "Airplane",
      prefix: "line/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "概率论",
      icon: "a-BabyStroller",
      prefix: "probability/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "Latex使用笔记",
      icon: "Backpack",
      prefix: "Latex/",
      collapsible: true,
      children: "structure",
    },
  ]
});
