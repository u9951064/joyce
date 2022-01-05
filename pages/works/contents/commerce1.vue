<template>
  <article>
    <section class="container-800 pt-60 pt-sm-30">
      <div class="col-10 lh-20 fz-14-r ls-10 blue1">廣告設計</div>
      <div class="d-flex flex-align-center flex-justify-space-between">
        <h1 class="fz-30-b gray1 pt-16">學習給你 COW</h1>
        <div class="pt-8">
          <ElementTag>過年檔期活動</ElementTag>
          <ElementTag>優惠促銷</ElementTag>
          <ElementTag>各通路素材</ElementTag>
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
        src="@/assets/works/commerce1/b_1-2.jpg"
        alt="學習給你 COW的封面圖片"
        title="學習給你 COW"
      />
    </div>

    <section
      class="container-1000 pt-80 pb-80 d-flex flex-justify-space-between"
    >
      <div class="d-flex col-sm-10">
        <div class="col-auto">
          <span class="fz-22-m d-inline-flex flex-align-center">
            <img
              class="icon"
              width="22"
              height="22"
              src="@/assets/icons/ic-role.svg"
              alt="擔任角色"
            />
            &#8203;
          </span>
        </div>
        <div class="col ml-8">
          <div class="fz-22-m gray1">擔任角色</div>
          <div class="fz-16-l gray2 pt-16 p-sm-0">視覺設計師</div>
        </div>
      </div>
      <div class="d-flex col-sm-10">
        <div class="col-auto">
          <span class="fz-22-m d-inline-flex flex-align-center">
            <img
              class="icon"
              width="22"
              height="22"
              src="@/assets/icons/ic-time.svg"
              alt="執行時間"
            />
            &#8203;
          </span>
        </div>
        <div class="col ml-8">
          <div class="fz-22-m gray1">執行時間</div>
          <div class="fz-16-l gray2 pt-16 p-sm-0">2 週</div>
        </div>
      </div>
      <div class="d-flex col-sm-10">
        <div class="col-auto">
          <span class="fz-22-m d-inline-flex flex-align-center">
            <img
              class="icon"
              width="22"
              height="22"
              src="@/assets/icons/ic-responsible.svg"
              alt="負責項目"
            />
            &#8203;
          </span>
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
      <div class="d-flex flex-align-flex-start flex-justify-center">
        <div class="d-flex col-4 col-sm-10">
          <img
            class="icon"
            width="25"
            height="24"
            src="@/assets/icons/ic-flag.svg"
            alt="活動目標"
          />
          <div class="col fz-22-m gray1 ml-8">活動目標</div>
        </div>
        <div class="col-6 col-sm-10 fz-16-l gray2">
          因應過年推出的促銷活動，透過 FB 與 Google DBM
          素材促使消費者點擊進站，官網 Banner
          與課程頁面皆有活動促銷圖，右側有浮動按鈕，讓消費者了解目前的活動促銷內容。透過廣告素材限時促銷字眼吸引消費者進站，達到促銷目的。
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
            alt="設計發想"
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
              <template #title>活動主標</template>
              學習給你 cow
            </ElementStarItem>
            <ElementStarItem>
              <template #title>重點文案</template>
              學習、牛年、領紅包
            </ElementStarItem>
          </ul>
          <ElementTag :class="'mt-30'">設計切角</ElementTag>
          <ul class="fz-16-l gray2 pt-16">
            <ElementStarItem>
              <template #title>過年</template>
              2020牛年、過年元素(紅包、元寶、燈籠)
            </ElementStarItem>
          </ul>
          <figure class="pt-40">
            <ElementImageViewer
              class="w-100"
              width="600"
              height="300"
              loading="lazy"
              src="@/assets/works/commerce1/b_1-3.jpg"
              alt="2020牛年、過年元素(紅包、元寶、燈籠)參考圖"
            />
            <figcaption class="lh-20 fz-14-l ls-5 gray2 pt-16 text-align-right">
              參考圖
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

    <!-- 設計理念 -->
    <section class="container-1000 pt-80 pb-80 border-top-gray3">
      <div class="d-flex flex-align-flex-start flex-justify-center">
        <div class="d-flex col-4 col-sm-10">
          <img
            class="icon"
            width="25"
            height="25"
            src="@/assets/icons/ic-idea.svg"
            alt="設計理念"
          />
          <div class="col fz-22-m gray1 ml-8">設計理念</div>
        </div>
        <div class="col-6 col-sm-10">
          <p class="fz-16-l gray2">
            於 2020 年 2
            月份的促銷活動，因應過年整張採用紅色調呈現，將吉祥物裝扮成牛代表牛年；主標以掛布卷軸的方式呈現，搭配紅包吸引消費者點擊。以白色凸顯主要文案，背景使用中國過年元素點綴。
          </p>
        </div>
      </div>
      <ElementImageViewer
        class="pt-60 w-100"
        loading="lazy"
        width="1000"
        height="410"
        src="@/assets/works/commerce1/b_1-4.jpg"
        alt="色彩計畫與主視覺"
      />
    </section>
    <!-- 廣告行銷 -->
    <section class="container-1000 pt-80 pb-80 border-top-gray3">
      <div class="d-flex flex-align-flex-start flex-justify-center">
        <div class="d-flex col-4 col-sm-10">
          <img
            class="icon"
            width="24"
            height="25"
            src="@/assets/icons/ic-layout.svg"
            alt="廣告行銷"
          />
          <div class="col fz-22-m gray1 ml-8">廣告行銷</div>
        </div>
        <div class="col-6 col-sm-10">
          <p class="fz-16-l gray2">
            廣告是活動最前線，除了附圖的 FB 廣告素材外，另有 Google DBM
            素材進行廣告投放。製作 FB 促銷模板後，將此素材套用各課程商品，於 FB
            投放各課程優惠資訊，針對不同 TA 投放符合用戶興趣的課程，並以顯眼的
            666 優惠文案吸引消費者點擊進站購買。
          </p>
        </div>
      </div>
      <ElementImageViewer
        class="pt-60 w-100"
        loading="lazy"
        width="1000"
        height="410"
        src="@/assets/works/commerce1/b_1-5.jpg"
        alt="Facebook 活動商品促銷模板設計"
      />
    </section>
  </article>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";
import { useHeader } from "~/compatible/useHeader";

export default defineComponent({
  head: {},
  setup() {
    const meta = useHeader({
      title: "作品集 - 學習給你 COW",
      description:
        "過年推出促銷活動，透過 FB 與 Google DBM 素材促使消費者點擊進站，官網 Banner 與課程頁面皆有活動促銷圖，右側有浮動按鈕，讓消費者了解目前的活動促銷內容。透過廣告素材限時促銷字眼吸引消費者進站，達到促銷目的。",
    });
  },
});
</script>
