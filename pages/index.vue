<template>
  <div></div>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";
import { useHeader } from "@/compatible/useHeader";

export default defineComponent({
  head: {},
  setup() {
    useHeader({
      canonical: process.env.homePage || "",
      redirect: process.env.homePage || "",
    });
  },
});
</script>
