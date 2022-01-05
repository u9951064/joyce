<template>
  <main class="work-category pl-20 pr-20">
    <section class="container-800">
      <div class="d-flex pt-120 pt-sm-30 border-bottom-gray1">
        <div class="col col-sm-10">
          <h1 class="fz-40-b gray1">Hi I’m Joyce!</h1>
          <div class="fz-17-l gray2 pt-16">
            我是名網頁視覺設計師，擅長
            <ElementTypeIn
              :labels="['UI設計', '網頁設計', '廣告設計', '平面設計']"
              class="fz-18-m pt-8 pb-8"
              :speed="350"
            /><br />
            相信設計應兼顧產品一致性與易用性，為用戶帶來更棒的體驗。
          </div>
          <div class="pt-40 pt-sm-30 d-sm-flex text-nowrap text-align-center">
            <ElementBtn
              href="/about"
              title="關於我"
              class="col-sm mr-sm-24 about-btn"
            >
              <span class="fz-14-r ls-10"
                >關於我
                <img
                  width="20"
                  height="20"
                  class="ml-2"
                  src="@/assets/icons/ic-joyce.svg"
                  alt="關於我"
              /></span>
            </ElementBtn>
            <ElementBtn
              href="/files/resume_joyce.pdf"
              title="下載履歷"
              class="col-sm ml-24 about-btn"
              target="_blank"
            >
              <span class="fz-14-r ls-10"
                >下載履歷
                <img
                  width="20"
                  height="20"
                  class="ml-2"
                  src="@/assets/icons/ic-download.svg"
                  alt="下載"
              /></span>
            </ElementBtn>
          </div>
        </div>
        <div class="col-auto col-sm-10 pt-80 pt-sm-30">
          <img
            width="288"
            height="258"
            class="d-block ml-sm-auto"
            src="@/assets/images/joyce-illustration.svg"
            alt="Joyce 的圖片"
          />
        </div>
      </div>
    </section>

    <ul
      class="
        d-flex
        flex-align-center flex-justify-center flex-sm-justify-space-around
        pt-60 pt-sm-40
        fz-14-r
        ls-10
        text-nowrap text-align-center
      "
    >
      <li class="col-auto col-sm-35">
        <ElementBtn
          tag="NuxtLink"
          class="work-btn"
          :to="{ name: 'works-categories-ui' }"
          >UI設計</ElementBtn
        >
      </li>
      <li class="col-auto col-sm-35">
        <ElementBtn
          tag="NuxtLink"
          class="work-btn"
          :to="{ name: 'works-categories-commerce' }"
          >廣告設計</ElementBtn
        >
      </li>
      <li class="col-auto col-sm-35">
        <ElementBtn
          tag="NuxtLink"
          class="work-btn"
          :to="{ name: 'works-categories-printing' }"
          >平面設計</ElementBtn
        >
      </li>
      <li class="col-auto col-sm-35">
        <ElementBtn
          tag="NuxtLink"
          class="work-btn"
          :to="{ name: 'works-categories-management' }"
          >專案管理</ElementBtn
        >
      </li>
    </ul>

    <NuxtChild :class="'container-1100 pt-60'" />
  </main>
</template>

<style lang="scss">
main.work-category {
  & .more-btn {
    padding: 12px 20px;
  }

  & .about-btn {
    @media screen and (max-width: $break-mobile) {
      padding: 12px 20px;
    }
  }

  & .work-btn {
    margin: 7.5px;
    @media screen and (max-width: $break-mobile) {
      margin: 10px auto;
      width: 100%;
    }
    border-style: solid;
    border-width: 1px;
    border-color: $gray3;
    border-radius: 6px;
    background-color: #fff;
    opacity: 1;
    -webkit-transition: all 200ms ease-in-out;
    transition: all 200ms ease-in-out;
    font-family: Gilroy, sans-serif;
    color: $gray2;
    font-size: 15px;
    font-weight: 500;
    padding: 8px 24px;
    box-shadow: none;

    &.active-link,
    &.active-link:hover {
      border-color: $gray1;
      background-color: #fff;
      box-shadow: 2px 2px 0 0 $gray1;
      transform: translate(-1.5px, -1.5px);
      color: $gray1;
    }

    &:hover {
      box-shadow: none;
      transform: none;
    }
  }
}
</style>
