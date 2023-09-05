import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/program/screen/": "structure",
  "/program/smart_door/": "structure",
  "/study/STM32/": "structure",
  "/study/note/": 
  [
    {
      text: "高等数学",
      icon: "laptop-code",
      prefix: "math/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "线性代数",
      icon: "book",
      prefix: "line/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "概率论",
      icon: "book",
      prefix: "probability/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "英语",
      icon: "book",
      prefix: "en/",
      collapsible: true,
      children: "structure",
    },
  ]
});
