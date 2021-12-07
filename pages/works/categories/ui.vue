<template>
  <div class="work-ui">
    <WorkItemUI1 />
    <WorkItemUI2 />
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  layout: 'works/category',
  scrollToTop: false,
});
</script>
