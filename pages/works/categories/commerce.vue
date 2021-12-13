<template>
  <div class="work-commerce">
    <WorkItemCommerce1 />
    <WorkItemCommerce2 />
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
      title: "作品集 - 廣告設計",
      description: "",
    });
  },
});
</script>
