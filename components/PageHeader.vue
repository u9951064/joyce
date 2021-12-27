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
          <div class="col-auto pl-10 pr-10">
            <NuxtLink
              :to="homePage"
              class="gray2 d-flex flex-align-center"
              title="回首頁"
            >
              <img
                class="w-auto h-100"
                src="@/assets/images/logo.svg"
                alt="Joyce's Logo"
                width="101"
                height="19"
              />
            </NuxtLink>
          </div>
          <div
            class="d-none d-sm-flex col-sm-col pl-10 pr-10"
            @click="toggleMenu"
          >
            <img v-if="menuStatus" src="@/assets/icons/ic-cross.svg" />
            <img v-else src="@/assets/icons/ic-more.svg" />
          </div>
          <ul
            class="
              col col-sm-10
              d-flex
              flex-justify-end flex-align-center
              fz-14-b
              pl-10
              pr-10
            "
            :class="{ 'd-sm-none': !menuStatus }"
          >
            <li class="col-auto col-sm-10">
              <NuxtLink
                :to="homePage"
                class="
                  gray2
                  blue1-hover
                  d-flex
                  flex-align-center flex-justify-center
                "
                title="作品集"
                >WORKS</NuxtLink
              >
            </li>
            <li class="col-auto col-sm-10">
              <NuxtLink
                to="/about"
                class="
                  ml-24 ml-sm-0
                  gray2
                  blue1-hover
                  d-flex
                  flex-align-center flex-justify-center
                "
                title="關於我"
                >ABOUT</NuxtLink
              >
            </li>
            <li class="col-auto col-sm-10">
              <NuxtLink
                to="/resume"
                class="
                  ml-24 ml-sm-0
                  gray2
                  blue1-hover
                  d-flex
                  flex-align-center flex-justify-center
                "
                title="履歷表"
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
import { useRouter, defineComponent, ref } from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {
    const router = useRouter();
    const homePage = router.resolve(process.env.homePage).href;
    const menuStatus = ref(false);
    const toggleMenu = (status) => {
      if (typeof status === "boolean") {
        menuStatus.value = status;
      } else {
        menuStatus.value = !menuStatus.value;
      }
    };
    return {
      toggleMenu,
      menuStatus,
      homePage,
    };
  },
});
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
