<template>
  <DefaultLayout>
    <main class="work-index">
      <section class="container-800">
        <div class="d-flex pt-120 border-bottom-gray1">
          <div class="col">
            <h1 class="fz-40-b gray1">Hi Ｉ’m Joyce!</h1>
            <div class="fz-16-l gray2 pt-16">
              我是名網頁視覺設計師，擅長 網頁設計<br />
              相信設計應兼顧產品一致性與易用性，為用戶帶來更棒的體驗。
            </div>
            <div class="pt-40">
              <ElementBtn :href="'/about'" :title="'關於我'">
                <span class="fz-14-r-10"
                  >關於我
                  <img
                    class="d-block ml-2"
                    src="../../assets/icons/ic-joyce.svg"
                    alt="關於我"
                /></span>
              </ElementBtn>
              <ElementBtn
                :href="'/resume'"
                :class="'ml-24'"
                :title="'下載履歷'"
              >
                <span class="fz-14-r-10"
                  >下載履歷
                  <img
                    class="d-block ml-2"
                    src="../../assets/icons/ic-download.svg"
                    alt="關於我"
                /></span>
              </ElementBtn>
            </div>
          </div>
          <div class="col-auto pt-80">
            <img
              class="d-block"
              src="../../assets/images/joyce-illustration.svg"
              alt=""
            />
          </div>
        </div>
      </section>

      <div class="work-list pt-60 fz-14-r-10">
        <ElementBtn
          tag="NuxtLink"
          :class="'work-btn'"
          :to="{ name: 'works-categories-ui' }"
          >UI設計</ElementBtn
        >
        <ElementBtn
          tag="NuxtLink"
          :class="'work-btn'"
          :to="{ name: 'works-categories-marketing' }"
          >廣告設計</ElementBtn
        >
        <ElementBtn
          tag="NuxtLink"
          class="work-btn"
          :to="{ name: 'works-categories-printing' }"
          >印刷設計</ElementBtn
        >
        <ElementBtn
          tag="NuxtLink"
          class="work-btn"
          :to="{ name: 'works-categories-management' }"
          >專案管理</ElementBtn
        >
      </div>

      <Nuxt :class="'container-1100 pt-60'" />
    </main>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "~/layouts/default.vue";

import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  components: {
    DefaultLayout,
  },
});
</script>


<style lang="scss">
main.work-index {
  & .more-btn {
    padding: 12px 24px;
  }

  & .work-btn {
    margin-right: 15px;
    border-style: solid;
    border-width: 1px;
    border-color: #d3d1cb;
    border-radius: 6px;
    background-color: #fff;
    opacity: 1;
    -webkit-transition: all 200ms ease-in-out;
    transition: all 200ms ease-in-out;
    font-family: Gilroy, sans-serif;
    color: #707070;
    font-size: 15px;
    font-weight: 500;
    padding: 12px 24px;

    &.active-link {
      border-color: #37352f;
      background-color: #fff;
      box-shadow: 2px 2px 0 0 #37352f;
      transform: translate(-1.5px, -1.5px);
      color: #37352f;
      text-align: left;
    }
  }
}
</style>
