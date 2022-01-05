<template>
  <main class="work-content pl-md-20 pr-md-20">
    <NuxtChild />
    <section
      class="
        container-1000
        pt-80
        pb-120
        border-top-gray3
        text-align-center
        d-sm-none
      "
    >
      <ElementBtn
        tag="span"
        class="lh-20 fz-14-r ls-10"
        role="button"
        aria-label="回作品列表"
        title="回作品列表"
        @click.native="goBack"
      >
        <img
          class="d-block mr-8"
          width="7"
          height="11"
          src="@/assets/icons/ic-left.svg"
          alt="&lt;"
        />
        回作品列表
      </ElementBtn>
    </section>
  </main>
</template>

<script>
import { defineComponent, useRouter } from "@nuxtjs/composition-api";

export default defineComponent({
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
