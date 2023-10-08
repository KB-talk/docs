import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
import theme from "./theme.js";

export default defineUserConfig({
  base: '/docs/',

  lang: "zh-CN",
  title: "文档管理",
  description: "vuepress-theme-hope 的文档演示",
  head: [
    // ...

    // 导入相应链接
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    [
      "link",
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;500;700&display=swap",
        rel: "stylesheet",
      },
    ],
  ],
  theme,
  // Enable it with pwa
  // shouldPrefetch: false,
});
