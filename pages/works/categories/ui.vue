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
        "Hi BUS! 全台公車動態時刻查詢應用服務： UI/UX 設計學習協作開發實務，「第三屆 The F2E 前端 & UI 修煉精神時光屋」團體組第一名。台鐵e訂通 Redesign：優化 App 介面，手機體驗，視覺美感，清晰的資訊，流暢且一致的體驗。英日西韓語，外語振興補助：廣告鎖定導入，文案搭配振興補助字眼吸引。",
    });
  },
});
</script>
