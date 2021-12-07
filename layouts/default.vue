<template>
  <div class="layout">
    <PageHeader />
    <Nuxt v-if="!$slots.default" />
    <slot />
    <PageFooter />
  </div>
</template>

<script>
import { defineComponent, useMeta, useRoute } from '@nuxtjs/composition-api'

export default defineComponent({
  head:{},
  setup() {
    const route = useRoute();
    const { link } = useMeta({link: []});
    link.value.push({
      hid: 'canonical',
      rel: 'canonical',
      href: process.env.host + route.value.path,
    })
  },
})
</script>

