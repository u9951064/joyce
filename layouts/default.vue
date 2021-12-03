<template>
  <div class="layout">
    <PageHeader />
    <Nuxt />
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
      rel: 'canonical',
      href: process.env.host + route.value.path,
    })
  },
})
</script>

