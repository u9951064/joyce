<template>
  <div class="layout">
    <PageHeader />
    <Nuxt v-if="!$slots.default" />
    <slot />
    <PageFooter />
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import { useHeader } from '@/compatible/useHeader'

export default defineComponent({
  head: {},
  setup() {
    useHeader();
  },
})
</script>

