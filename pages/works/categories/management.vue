<template>
  <div class="work-management">
    <WorkItemManagement1/>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  layout: 'works/category',
  scrollToTop: false,
});
</script>
