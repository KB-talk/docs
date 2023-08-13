import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "项目",
    icon: "lightbulb",
    children: [
      {
        text: "STM32教程",
        icon: "lightbulb",
        link: "/program/STM32/introduce/",
      },
      {
        text: "墨水屏挂件",
        icon: "lightbulb",
        link: "/program/smart_door/introduce/",
      },
    ],
  },
  {
    text: "作者博客",
    icon: "book",
    link: "https://kb-talk.github.io/",
  },
]);
