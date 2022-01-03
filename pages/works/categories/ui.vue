<template>
  <ul class="work-ui">
    <li><WorkItemUI1 /></li>
    <li><WorkItemUI2 /></li>
    <li><WorkItemUI3 /></li>
  </ul>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";
import { useHeader } from "~/compatible/useHeader";

export default defineComponent({
  head: {},
  setup() {
    const meta = useHeader({
      title: "作品集 - UI設計",
      description:
        "Hi BUS! 全台公車動態時刻查詢應用服務：藉由競賽參與提升 UI/UX 設計經驗並學習協作開發實務，「第三屆 The F2E 前端 & UI 修煉精神時光屋」團體組競賽第一名。台鐵 e 訂通 App Redesign：改善優化 App 的介面，打造更貼近手機操作的體驗設計，提升視覺美感，呈現清晰的資訊，擁有流暢且一致的良好體驗。英日西韓語，外語振興補助：廣告鎖定導入廣告頁面，文案搭配振興補助字眼吸引。",
    });
  },
});
</script>
