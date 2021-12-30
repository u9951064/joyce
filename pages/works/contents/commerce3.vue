<template>
  <main>
    <section class="container-800 pt-60 pt-sm-30">
      <div class="col-10 lh-20 fz-14-r ls-10 blue1">廣告設計</div>
      <div class="d-flex flex-align-center flex-justify-space-between">
        <h2 class="fz-30-b gray1 pt-16">進擊の繪師</h2>
        <div class="pt-8">
          <ElementTag>免費講座</ElementTag>
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
        class="w-100 w-sm-155 ml-sm-i200 mr-sm-i200"
        width="2400"
        height="750"
        loading="lazy"
        src="@/assets/works/commerce3/b_3-2.jpg"
        alt="進擊の繪師的封面圖片"
        title="進擊の繪師"
      />
    </div>

    <section
      class="container-1000 pt-80 pb-80 d-flex flex-justify-space-between"
    >
      <div class="d-flex col-sm-10">
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
          <div class="fz-16-l gray2 pt-16 p-sm-0">視覺設計師</div>
        </div>
      </div>
      <div class="d-flex col-sm-10">
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
          <div class="fz-16-l gray2 pt-16 p-sm-0">1 週</div>
        </div>
      </div>
      <div class="d-flex col-sm-10">
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
            設計發想｜視覺排版設計｜各通路廣告素材設計
          </div>
        </div>
      </div>
    </section>

    <!-- 活動目標 -->
    <section class="container-1000 pt-80 pb-80 border-top-gray3">
      <div class="d-flex flex-align-flex-start">
        <div class="d-flex col-4 col-sm-10 flex-align-center">
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
            為了擴大客群透過定期的免費講座吸引消費者登記報名講座，除了可以更加清楚消費者輪廓，也可以透過表單回饋了解消費者的喜好。<br />
            將主視覺設計完成後上架到官網並同步於 ACCUPASS
            大型活動網站曝光，以及投遞 FB、Google 廣告。
          </p>
        </div>
      </div>
    </section>

    <!-- 設計發想 -->
    <section class="container-1000 pt-80 pb-80 border-top-gray3">
      <div class="d-flex flex-align-flex-start">
        <div class="d-flex col-4 col-sm-10 flex-align-center">
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
              <template #title>講座主標</template>
              進擊の繪師
            </ElementStarItem>
            <ElementStarItem>
              <template #title>重點文案</template>
              時間、主講人、免費講座、活動詳情 CTA
            </ElementStarItem>
          </ul>
          <ElementTag :class="'mt-30'">設計切角</ElementTag>
          <ul class="fz-16-l gray2 pt-16">
            <ElementStarItem>
              <template #title>作品</template>
              以老師的作品為主圖
            </ElementStarItem>
            <ElementStarItem>
              <template #title>漫畫</template>
              講座為漫畫主題，以漫畫分鏡風格製作
            </ElementStarItem>
          </ul>
          <figure class="pt-40">
            <ElementImageViewer
              class="w-100"
              loading="lazy"
              width="1000"
              height="500"
              src="@/assets/works/commerce3/b_3-3.jpg"
              alt=""
            />
            <figcaption class="lh-20 fz-14-l ls-5 gray2 pt-16 text-align-right">參考圖</figcaption>
          </figure>
        </div>
      </div>
    </section>
    <!-- 設計理念 -->
    <section class="container-1000 pt-80 pb-80 border-top-gray3">
      <div class="d-flex flex-align-flex-start">
        <div class="d-flex col-4 col-sm-10 flex-align-center">
          <img
            class="icon"
            width="25"
            height="25"
            src="@/assets/icons/ic-idea.svg"
            alt=""
          />
          <div class="col fz-22-m gray1 ml-8">設計理念</div>
        </div>
        <div class="col-6 col-sm-10">
          <p class="fz-16-l gray2">
            將老師繪製的女孩去背當主圖，背景以分鏡的方式搭配鮮明的色彩呈現漫畫多采多姿、天馬行空意象。並以日系風格搭配黑框呈現字體。
          </p>
        </div>
      </div>
      <ElementImageViewer
        class="pt-60 w-100"
        loading="lazy"
        width="2000"
        height="820"
        src="@/assets/works/commerce3/b_3-4.jpg"
        alt=""
      />
      <ElementImageViewer
        class="pt-60 w-100"
        loading="lazy"
        width="2000"
        height="820"
        src="@/assets/works/commerce3/b_3-5.jpg"
        alt=""
      />
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
      title: "作品集 - 廣告設計: Figma新手指南UI/UX設計思維",
      description: "",
    });
  },
});
</script>
