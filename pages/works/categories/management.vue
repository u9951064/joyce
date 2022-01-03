<template>
  <ul class="work-management">
    <li><WorkItemManagement1 /></li>
  </ul>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";
import { useHeader } from "~/compatible/useHeader";

export default defineComponent({
  head: {},
  setup() {
    const meta = useHeader({
      title: "作品集 - 管案管理",
      description:
        "導入敏捷式開發專案：自我精進過程，我學習到敏捷式開發的模式。雖然所屬公司不是軟體相關產業，但沿用其精神，檢視過往的瀑布流模式過於冗長。於是開始思考新的事業體，也許可以透過流程改善來提高產出。",
    });
  },
});
</script>
