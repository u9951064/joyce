<template>
  <main class="work-content pl-20 pr-20">
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
      <ElementBtn title="回作品列表" @click.native="goBack">
        <span class="lh-20 fz-14-r ls-10">
          <img
            class="d-block mr-8"
            width="7"
            height="11"
            src="@/assets/icons/ic-left.svg"
            alt="<"
          />
          回作品列表
        </span>
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
