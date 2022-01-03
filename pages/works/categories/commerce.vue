<template>
  <ul class="work-commerce">
    <li><WorkItemCommerce1 /></li>
    <li><WorkItemCommerce2 /></li>
    <li><WorkItemCommerce3 /></li>
  </ul>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";
import { useHeader } from "~/compatible/useHeader";

export default defineComponent({
  head: {},
  setup() {
    const meta = useHeader({
      title: "作品集 - 廣告設計",
      description:
        "學習給你 COW：因應過年整張採用紅色調呈現，將吉祥物裝扮成牛代表牛年。Figma新手指南 UI/UX 設計思維：菜鳥救星主要銷售各式線上真人直播課程，商品課程視覺相當於該產品的門面，搭配文案以吸睛的視覺做呈現。進擊の繪師：擴大客群透過定期的免費講座吸引消費者登記報名講座。",
    });
  },
});
</script>
