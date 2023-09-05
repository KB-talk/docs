import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "项目",
    icon: "lightbulb",
    children: [
      {
        text: "水墨屏钥匙挂件",
        icon: "lightbulb",
        link: "/program/screen/introduce/",
      },
      {
        text: "智能门锁",
        icon: "lightbulb",
        link: "/program/smart_door/introduce/",
      },
    ],
  },
  {
    text: "学习笔记",
    icon: "lightbulb",
    children: [
      {
        text: "STM32教程",
        icon: "lightbulb",
        link: "/study/STM32/introduce/",
      },
      {
        text: "复习资料",
        icon: "lightbulb",
        link: "/study/note/",
      },
    ],
  },
  {
    text: "作者博客",
    icon: "book",
    link: "https://kb-talk.github.io/",
  },
  {
    text: "GitHub",
    icon: "book",
    link: "https://github.com/KB-talk",
  },
]);
