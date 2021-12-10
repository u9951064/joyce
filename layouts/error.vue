<template>
  <main>
    <ErrorPageCode404 v-if="error.statusCode === 404"></ErrorPageCode404>
    <ErrorPageDefault v-else></ErrorPageDefault>
  </main>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  props: ["error"],
  layout: "default",
})
</script>
