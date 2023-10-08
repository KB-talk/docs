import { defineClientConfig } from "@vuepress/client";
import { hasGlobalComponent } from "/Users/zhangkaibo/Documents/docs/node_modules/vuepress-shared/lib/client/index.js";
import { h } from "vue";

import { useStyleTag } from "/Users/zhangkaibo/Documents/docs/node_modules/@vueuse/core/index.mjs";
import Badge from "/Users/zhangkaibo/Documents/docs/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import FontIcon from "/Users/zhangkaibo/Documents/docs/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import BackToTop from "/Users/zhangkaibo/Documents/docs/node_modules/vuepress-plugin-components/lib/client/components/BackToTop.js";

import "/Users/zhangkaibo/Documents/docs/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    
  },
  setup: () => {
    useStyleTag(`\
@import url("//at.alicdn.com/t/c/font_4239557_5w1uqvombdm.css");
`);
  },
  rootComponents: [
    () => h(BackToTop, {}),
  ],
});
