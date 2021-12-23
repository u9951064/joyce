<template>
  <ul class="work-management">
    <li><WorkItemManagement1/></li>
  </ul>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";
import { useHeader } from "~/compatible/useHeader";

export default defineComponent({
  head: {},
  setup() {
    const meta = useHeader({
      title: '作品集 - 管案管理',
      description: '',
    });
  },
});
</script>
