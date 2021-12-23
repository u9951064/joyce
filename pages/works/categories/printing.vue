<template>
  <ul class="work-printing">
    <li><WorkItemPrinting1 /></li>
    <li><WorkItemPrinting2 /></li>
  </ul>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";
import { useHeader } from "~/compatible/useHeader";

export default defineComponent({
  head: {},
  setup() {
    const meta = useHeader({
      title: '作品集 - 印刷設計',
      description: '',
    });
  },
});
</script>
