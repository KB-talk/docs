import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/program/screen/": "structure",
  "/program/smart_door/": "structure",
  "/study/STM32/": "structure",
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
      text: "英语",
      icon: "Backpack",
      prefix: "en/",
      collapsible: true,
      children: "structure",
    },
  ]
});
