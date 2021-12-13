<template>
  <div></div>
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
      canonical: targetPage,
      redirect: targetPage,
    });
  },
});
</script>
