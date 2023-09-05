import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
import theme from "./theme.js";

export default defineUserConfig({
  base: '/docs/',

  lang: "zh-CN",
  title: "文档管理",
  description: "vuepress-theme-hope 的文档演示",
  theme,
  // Enable it with pwa
  // shouldPrefetch: false,
});
