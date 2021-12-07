<template>
  <DefaultLayout>
    <main class="work-content">
      <Nuxt />
      <section
        class="container-1000 pt-80 pb-120 border-top-gray3 text-align-center"
      >
        <ElementBtn title="回作品列表" @click.native="goBack">
          <span class="fz-14-r-10">
            <img
              class="d-block mr-8"
              src="../../assets/icons/ic-left.svg"
              alt=""
            />
            回作品列表
          </span>
        </ElementBtn>
      </section>
    </main>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "~/layouts/default.vue";

import { defineComponent, useRouter } from "@nuxtjs/composition-api";

export default defineComponent({
  components: {
    DefaultLayout,
  },
  setup() {
    const router = useRouter();
    const goBack = () => {
      return router.back();
    };
    return {
      goBack,
    };
  },
});
</script>
