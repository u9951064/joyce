<template>
  <header class="page-header">
    <div class="pt-24 pb-16 fz-14-b nav-keeper">
      <div class="p-fixed pt-24 pb-16 bg-white fix-bar">
        <nav
          class="
            container-1100
            d-flex
            flex-align-center flex-justify-space-between
            m-auto
          "
        >
          <div class="col-auto">
            <NuxtLink :to="homePage" class="gray2 d-flex flex-align-center" title="回首頁">
              <img class="w-auto h-100" src="@/assets/images/logo.svg" alt="Joyce's Logo" width="101" height="19"/>
            </NuxtLink>
          </div>
          <ul class="d-flex flex-align-center fz-14-b">
            <li>
              <NuxtLink :to="homePage" class="gray2 blue1-hover d-flex flex-align-center" title="作品集"
                >WORKS</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/about" class="ml-24 gray2 blue1-hover d-flex flex-align-center" title="關於我"
                >ABOUT</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/resume" class="ml-24 gray2 blue1-hover d-flex flex-align-center" title="履歷表"
                >RESUME</NuxtLink
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import { useRouter, defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const router = useRouter();
    const homePage = router.resolve(process.env.homePage).href;

    return {
      homePage,
    };
  },
})
</script>


<style lang="scss" scoped>
header.page-header {
  & > .nav-keeper:before {
    content: "\200B";
    display: block;
  }
  & .fix-bar {
    z-index: 10;
  }
}
</style>
