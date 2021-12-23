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
      description: "",
    });
  },
});
</script>
