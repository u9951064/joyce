<template>
  <main>
    <section class="container-800 pt-60 pt-sm-30">
      <div class="col-10 lh-20 fz-14-r ls-10 blue1">UI設計</div>
      <div class="d-flex flex-align-center flex-justify-space-between">
        <h2 class="fz-30-b gray1 pt-16">英日西韓語，外語振興補助</h2>
        <div class="pt-8">
          <ElementTag>RWD</ElementTag>
          <ElementTag>Landing Page</ElementTag>
        </div>
      </div>
    </section>

    <div
      class="
        pt-60 pt-md-20
        ml-md-i20
        mr-md-i20
        overflow-hidden
        text-align-center
      "
    >
      <img
        class="w-100 w-sm-145 h-auto ml-sm-i100 mr-sm-i100"
        width="2400"
        height="750"
        loading="lazy"
        src="@/assets/works/ui3/a_3-2.png"
        alt=""
      />
    </div>

    <section
      class="container-1000 pt-80 pb-80 d-flex flex-justify-space-between"
    >
      <div class="d-flex col-sm order-sm-1">
        <div class="col-auto">
          <img
            class="icon"
            width="22"
            height="22"
            src="@/assets/icons/ic-role.svg"
            alt=""
          />
        </div>
        <div class="col ml-8">
          <div class="fz-22-m gray1">擔任角色</div>
          <div class="fz-16-l gray2 pt-16 p-sm-0">UI 設計師</div>
        </div>
      </div>
      <div class="d-flex col-sm-10 order-sm-3">
        <div class="col-auto">
          <img
            class="icon"
            width="22"
            height="22"
            src="@/assets/icons/ic-time.svg"
            alt=""
          />
        </div>
        <div class="col ml-8">
          <div class="fz-22-m gray1">執行時間</div>
          <div class="fz-16-l gray2 pt-16 p-sm-0">1 個月</div>
        </div>
      </div>
      <div class="d-flex col-sm-10 order-sm-4">
        <div class="col-auto">
          <img
            class="icon"
            width="22"
            height="22"
            src="@/assets/icons/ic-responsible.svg"
            alt=""
          />
        </div>
        <div class="col ml-8">
          <div class="fz-22-m gray1">負責項目</div>
          <div class="fz-16-l gray2 pt-16 p-sm-0">
            設計發想｜網頁視覺設計｜撰寫 RWD 網頁
          </div>
        </div>
      </div>
      <div class="col-sm-auto order-sm-2">
        <ElementBtn
          target="_blank"
          rel="noreferrer noopener"
          href="https://www.abcgo.com.tw/commercial/ad/project/27/brand.asp"
        >
          <span
            class="
              lh-20
              fz-14-r
              ls-10
              d-inline-flex
              flex-justify-center flex-align-center
            "
          >
            觀看網頁
            <img
              class="d-block ml-2"
              width="18"
              height="18"
              src="@/assets/icons/ic-search.svg"
              alt=""
            />
          </span>
        </ElementBtn>
      </div>
    </section>

    <!-- 活動目標 -->
    <section class="container-1000 pt-80 pb-80 border-top-gray3">
      <div class="d-flex flex-align-flex-start flex-justify-center">
        <div class="d-flex col-4 col-sm-10">
          <img
            class="icon"
            width="25"
            height="24"
            src="@/assets/icons/ic-flag.svg"
            alt=""
          />
          <div class="col fz-22-m gray1 ml-8">活動目標</div>
        </div>
        <div class="col-6 col-sm-10">
          <p class="fz-16-l gray2">
            透過廣告鎖定 TA
            點擊導入廣告頁面，此張網頁是於疫情趨緩時上線，文案搭配振興補助字眼吸引
            TA
            瀏覽頁面，搭配相關文案與內容設計促使瀏覽者前往表單登記領取相關優惠內容。
          </p>
        </div>
      </div>
    </section>

    <!-- 設計發想 -->
    <section class="container-1000 pt-80 pb-80 border-top-gray3">
      <div class="d-flex flex-align-flex-start flex-justify-center">
        <div class="d-flex col-4 col-sm-10">
          <img
            class="icon"
            width="25"
            height="25"
            src="@/assets/icons/ic-think.svg"
            alt=""
          />
          <div class="col fz-22-m gray1 ml-8">設計發想</div>
        </div>
        <div class="col-6 col-sm-10">
          <p class="fz-16-l gray2">
            企劃會初步整理主題及文案，與設計一同發想並討論設計進一步延伸，搜集相關素材、並構想主視覺
          </p>
          <ElementTag :class="'mt-30'">企劃提案</ElementTag>
          <ul class="fz-16-l gray2 pt-16">
            <ElementStarItem>
              <template #title>網頁主標</template>
              英日西韓語，外語振興補助
            </ElementStarItem>
            <ElementStarItem>
              <template #title>重點文案</template>
              青年補助、振興優惠、學習外語
            </ElementStarItem>
          </ul>
          <ElementTag :class="'mt-30'">設計切角</ElementTag>
          <ul class="fz-16-l gray2 pt-16">
            <ElementStarItem>
              <template #title>青年</template>
              年輕有活力、色彩繽紛
            </ElementStarItem>
            <ElementStarItem>
              <template #title>振興補助</template>
              閃耀的錢幣、禮物
            </ElementStarItem>
          </ul>
          <figure class="pt-40">
            <ElementImageViewer
              class="w-100"
              width="1000"
              height="500"
              loading="lazy"
              src="@/assets/works/ui3/a_3-3.png"
              alt=""
            />
            <figcaption class="lh-20 fz-14-l ls-5 gray2 pt-16 text-align-right">
              參考圖
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

    <!-- 設計理念及產出 -->
    <section class="container-1000 pt-80 pb-80 border-top-gray3">
      <div class="d-flex flex-align-flex-start flex-justify-center">
        <div class="d-flex col-4 col-sm-10">
          <img
            class="icon"
            width="25"
            height="25"
            src="@/assets/icons/ic-idea.svg"
            alt=""
          />
          <div class="col fz-22-m gray1 ml-8">設計理念及產出</div>
        </div>
        <div class="col-6 col-sm-10">
          <p class="fz-16-l gray2">
            透過文案振興補助、獨家好禮等文案打造主視覺歡樂拿好禮意象。主視覺下方以優惠卷的形式呈現豐富內容，表單下方接著多樣化課程，整體頁面右側固定一個禮物按鈕，讓瀏覽者隨時可以點擊填寫表單了解更多。
          </p>
        </div>
      </div>
      <ElementImageViewer
        class="pt-60 w-100"
        loading="lazy"
        width="2000"
        height="820"
        src="@/assets/works/ui3/a_3-4.png"
        alt=""
      />
      <div class="d-flex pt-60 flex-justify-space-between">
        <div class="col-3 pr-20">
          <ElementImageViewer
            class="w-100"
            loading="lazy"
            width="750"
            height="9772"
            src="@/assets/works/ui3/a_3-5.png"
            alt=""
          />
          <p class="lh-20 fz-14-l ls-5 gray2 pt-16 text-align-right d-sm-none">
            手機 Layout
          </p>
        </div>
        <div class="col-7 pl-20">
          <ElementImageViewer
            class="w-100"
            loading="lazy"
            width="2000"
            height="7600"
            src="@/assets/works/ui3/a_3-6.png"
            alt=""
          />
          <p class="lh-20 fz-14-l ls-5 gray2 pt-16 text-align-right d-sm-none">
            網頁 Layout
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";
import { useHeader } from "~/compatible/useHeader";

export default defineComponent({
  head: {},
  setup() {
    const meta = useHeader({
      title: "作品集 - UI設計: 英日西韓語，外語振興補助",
      description: "",
    });
  },
});
</script>
