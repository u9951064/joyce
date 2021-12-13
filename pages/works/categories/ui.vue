<template>
  <div class="work-ui">
    <WorkItemUI2 />
    <WorkItemUI3 />
  </div>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";
import { useHeader } from "~/compatible/useHeader";

export default defineComponent({
  head: {},
  setup() {
    const targetPage = {
      name: "works-categories-ui",
    };

    const meta = useHeader({
      title: "作品集 - UI設計",
      description: "",
    });
  },
});
</script>
