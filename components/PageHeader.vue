<template>
  <header class="page-header">
    <div class="pt-24 pb-16 fz-14-b nav-keeper">
      <div
        class="p-fixed pt-24 pb-16 bg-white fix-bar"
        :class="{ open: menuStatus, shadow: !isBeginOfPage }"
      >
        <nav
          class="
            container-1100
            d-flex
            flex-align-center flex-justify-space-between
            m-auto
          "
        >
          <div class="col-auto pl-20 pr-20">
            <NuxtLink
              :to="homePage"
              class="gray2 d-flex flex-align-center"
              title="回首頁"
              @click.native="toggleMenu(false)"
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
            class="d-none d-sm-flex col-sm-col pl-20 pr-20 pointer"
            @click="toggleMenu"
          >
            <img
              v-if="menuStatus"
              src="@/assets/icons/ic-cross.svg"
              width="25"
              height="25"
              alt="關閉"
            />
            <img
              v-else
              src="@/assets/icons/ic-more.svg"
              width="25"
              height="25"
              alt="menu"
            />
          </div>
          <ul
            class="
              col-auto col-sm-10
              d-flex
              flex-justify-end flex-align-center
              fz-14-b
              pl-10
              pr-10
              pt-sm-60
            "
            :class="{ 'd-sm-none': !menuStatus }"
          >
            <li class="col-auto col-sm-10">
              <NuxtLink
                :to="{ name: 'works-categories-ui' }"
                class="
                  m-sm-24
                  gray2
                  blue1-hover
                  d-flex
                  flex-align-center flex-justify-center
                "
                title="作品集"
                @click.native="toggleMenu(false)"
                >WORKS</NuxtLink
              >
            </li>
            <li class="col-auto col-sm-10">
              <NuxtLink
                :to="{ name: 'about' }"
                class="
                  ml-24
                  m-sm-24
                  gray2
                  blue1-hover
                  d-flex
                  flex-align-center flex-justify-center
                "
                title="關於我"
                @click.native="toggleMenu(false)"
                >ABOUT</NuxtLink
              >
            </li>
            <li class="col-auto col-sm-10">
              <NuxtLink
                :to="{ name: 'resume' }"
                class="
                  ml-24
                  m-sm-24
                  gray2
                  blue1-hover
                  d-flex
                  flex-align-center flex-justify-center
                "
                title="履歷表"
                @click.native="toggleMenu(false)"
                >RESUME</NuxtLink
              >
            </li>
            <li class="d-none d-sm-block col-sm-10 text-align-center">
              <ElementBtn
                href="/files/resume_joyce.pdf"
                title="下載履歷"
                class="m-sm-24"
                target="_blank"
              >
                <span class="lh-20 fz-14-r ls-10"
                  >下載履歷
                  <img
                    width="20"
                    height="20"
                    class="ml-2"
                    src="@/assets/icons/ic-download.svg"
                    alt="下載履歷"
                /></span>
              </ElementBtn>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import {
  useRouter,
  defineComponent,
  ref,
  onMounted,
  onBeforeMount,
} from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {
    const router = useRouter();
    const homePage = router.resolve(process.env.homePage).href;
    const menuStatus = ref(false);
    const toggleMenu = (status) => {
      console.log(status);
      if (typeof status === "boolean") {
        menuStatus.value = status;
      } else {
        menuStatus.value = !menuStatus.value;
      }
    };

    const isBeginOfPage = ref(0);
    const setupScrollStatus = () => {
      isBeginOfPage.value = window.scrollY < 10;
    };
    onMounted(() => {
      setupScrollStatus();
      window.addEventListener("scroll", setupScrollStatus);
    });

    onBeforeMount(() => {
      window.removeEventListener("scroll", setupScrollStatus);
    });

    return {
      toggleMenu,
      menuStatus,
      homePage,
      isBeginOfPage,
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
    box-shadow: 0 0px 0px rgba(241, 241, 239, 0.7);
    transition: box-shadow 0.2s linear;

    &.shadow {
      box-shadow: 0 1px 10px rgba(241, 241, 239, 0.7);
    }

    @media screen and (max-width: $break-mobile) {
      overflow-y: hidden;
      min-height: 10px;
      max-height: 64px;
      transition: min-height 0.3s linear, max-height 0.3s linear;

      &.open {
        overflow-y: auto;
        min-height: 100%;
        max-height: 100%;
      }
    }
  }
}
</style>
