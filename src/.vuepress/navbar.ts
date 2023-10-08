import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "主页",
    icon: "shouye",
    link: "/",
  },
  {
    text: "项目",
    icon: "kuaidihe",
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
    icon: "xiangqing",
    children: [
      {
        text: "STM32教程",
        icon: "zhinengdianwangshebei",
        link: "/study/STM32/introduce/",
      },
      {
        text: "复习资料",
        icon: "zhinengqiuxie",
        link: "/study/note/",
      },
    ],
  },
  {
    text: "作者博客",
    icon: "geren",
    link: "https://kb-talk.github.io/",
  },
  {
    text: "GitHub",
    icon: "github",
    link: "https://github.com/KB-talk",
  },
]);
