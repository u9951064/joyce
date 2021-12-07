<template>
  <div></div>
</template>

<script>
import { defineComponent, useMeta, useRouter } from "@nuxtjs/composition-api";

export default defineComponent({
  head: {},
  setup() {
    const router = useRouter();
    const { link, meta } = useMeta({
      meta: [],
      link: [],
    });
    link.value.push({
      hid: "canonical",
      rel: "canonical",
      href:
        process.env.host +
        router.resolve({
          name: "works-categories-ui",
        }).href,
    });

    meta.value.push({
      hid: "redirect",
      "http-equiv": "refresh",
      content:
        "0;url=" +
        process.env.host +
        router.resolve({
          name: "works-categories-ui",
        }).href,
    });
  },
});
</script>
