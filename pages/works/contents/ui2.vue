<template>
  <article>
    <section class="container-800 pt-60 pt-sm-30">
      <div class="col-10 lh-20 fz-14-r ls-10 blue1">UI設計</div>
      <div class="d-flex flex-align-center flex-justify-space-between">
        <h2 class="fz-30-b gray1 pt-16">台鐵 e 訂通 App Redesign</h2>
        <div class="pt-8">
          <ElementTag>APP</ElementTag>
          <ElementTag>Redesign</ElementTag>
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
        class="w-100 w-sm-145 ml-sm-i200 mr-sm-i200"
        width="2400"
        height="750"
        loading="lazy"
        src="@/assets/works/ui2/a_2-2.jpg"
        alt=""
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
              alt=""
            />
            &#8203;
          </span>
        </div>
        <div class="col ml-8">
          <div class="fz-22-m gray1">擔任角色</div>
          <div class="fz-16-l gray2 pt-16 p-sm-0">UI 設計師</div>
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
              alt=""
            />
            &#8203;
          </span>
        </div>
        <div class="col ml-8">
          <div class="fz-22-m gray1">執行時間</div>
          <div class="fz-16-l gray2 pt-16 p-sm-0">
            2021.04 - 2021.06 (2個月)
          </div>
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
              alt=""
            />
            &#8203;
          </span>
        </div>
        <div class="col ml-8">
          <div class="fz-22-m gray1">負責項目</div>
          <div class="fz-16-l gray2 pt-16 p-sm-0">
            前期調查｜流程規劃｜UI設計
          </div>
        </div>
      </div>
    </section>

    <!-- 動機 -->
    <section class="container-1000 pt-80 pb-80 border-top-gray3">
      <div class="d-flex flex-align-flex-start flex-justify-center">
        <div class="d-flex col-4 col-sm-10">
          <img
            class="icon"
            width="25"
            height="25"
            src="@/assets/icons/ic-target.svg"
            alt=""
          />
          <div class="col fz-22-m gray1 ml-8">動機</div>
        </div>
        <div class="col-6 col-sm-10">
          <p class="fz-16-l gray2">
            使用 台鐵 e 訂通 App 訂購火車票時，發現 App
            在同一頁面同時提供過多的資訊，容易造成使用者難以操作，且選單並非以行動裝置的操作體驗來進行設計，使用體驗上有改善的空間。
          </p>

          <figure class="pt-40">
            <ElementImageViewer
              class="w-100"
              width="1000"
              height="500"
              loading="lazy"
              src="@/assets/works/ui2/a_2-13.jpg"
              alt=""
            />
          </figure>
        </div>
      </div>
    </section>

    <!-- 目標 -->
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
          <div class="col fz-22-m gray1 ml-8">目標</div>
        </div>
        <div class="col-6 col-sm-10 fz-16-l gray2">
          希望透過這次的專案，改善優化 App
          的介面，打造更貼近手機操作的體驗設計，在提升視覺美感的同時，兼顧呈現清晰的資訊，期望讓使用者在操作
          App 各項服務時，擁有流暢且一致的良好體驗。
        </div>
      </div>
    </section>

    <!-- 設計流程 -->
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
          <div class="col fz-22-m gray1 ml-8">設計流程</div>
        </div>
        <div class="col-6 col-sm-10 fz-16-l gray2">
          流程分成三階段，在探索問題、蒐集相關資料後，接著篩選出須優化的項目並擬定功能架構與層級，最後進行設計執行階段。
        </div>
      </div>
      <div class="pt-60">
        <img
          class="w-100"
          width="2000"
          height="820"
          loading="lazy"
          src="@/assets/works/ui2/a_2-3.jpg"
          alt=""
        />
      </div>
    </section>

    <!-- 01 探索階段 1. 實際操作競品 -->
    <section class="container-1000 pb-80">
      <div class="fz-22-m gray1 ml-8">01 探索階段</div>
      <ElementTag :class="'mt-30'">1. 實際操作競品</ElementTag>
      <ul class="fz-16-l gray2 pt-16">
        <ElementStarItem>
          實際體驗操作 高鐵 App 與 台鐵 App
          並將頁面截圖下來，放在簡報上進行比較。
        </ElementStarItem>
      </ul>
      <div class="pt-60">
        <ElementImageViewer
          class="w-100"
          width="2000"
          height="820"
          loading="lazy"
          src="@/assets/works/ui2/a_2-4.gif"
          alt=""
        />
      </div>
    </section>

    <!-- 01 探索階段 2. 搜集相關評價 -->
    <section class="container-1000 pb-80">
      <ElementTag :class="'mt-30'">2. 搜集相關評價</ElementTag>
      <ul class="fz-16-l gray2 pt-16">
        <ElementStarItem>
          進一步調查整理 台鐵 App 於 Google Play 與 App Store
          使用者的留言，將問題歸納分類。
        </ElementStarItem>
      </ul>
      <div class="pt-60">
        <ElementImageViewer
          class="w-100"
          width="2000"
          height="820"
          loading="lazy"
          src="@/assets/works/ui2/a_2-5.jpg"
          alt=""
        />
      </div>
    </section>

    <!-- 02 定義階段 1. 擬定架構與層級 -->
    <section class="container-1000 pb-80">
      <div class="fz-22-m gray1 ml-8">02 定義階段</div>
      <ElementTag :class="'mt-30'">1. 擬定架構與層級</ElementTag>
      <ul class="fz-16-l gray2 pt-16">
        <ElementStarItem>
          透過探索階段的資料確認此次專案優化方向與目標，延伸出 UI Flow 擬定 App
          架構與層級。
        </ElementStarItem>
      </ul>
      <div class="pt-60">
        <ElementImageViewer
          class="w-100"
          width="3000"
          height="2040"
          loading="lazy"
          src="@/assets/works/ui2/a_2-6.png"
          alt=""
        />
      </div>
    </section>

    <!-- 03 執行階段 1. 製作 Wireframe -->
    <section class="container-1000 pb-80">
      <div class="fz-22-m gray1 ml-8">03 執行階段</div>
      <ElementTag :class="'mt-30'">1. 製作 Wireframe</ElementTag>
      <ul class="fz-16-l gray2 pt-16">
        <ElementStarItem> 依照 UI Flow 初步繪製 Wireframe。</ElementStarItem>
      </ul>
      <div class="pt-60">
        <ElementImageViewer
          class="w-100"
          width="4000"
          height="3272"
          loading="lazy"
          src="@/assets/works/ui2/a_2-7.png"
          alt=""
        />
      </div>
    </section>

    <!-- 03 執行階段 2. 制定 Design System -->
    <section class="container-1000 pb-80">
      <ElementTag :class="'mt-30'">2. 制定 Design System</ElementTag>
      <ul class="fz-16-l gray2 pt-16">
        <ElementStarItem>
          依蒐集素材參考風格後選定台鐵藍以及帶有交通便捷的綠，輔色則以淡藍色當背景。制定規範好色彩計畫級字型字級，並將常用元素制定成元件，除了可以加速作業，同時審視是否風格一致，期望使用者於產品中擁有一致且良好的體驗。
        </ElementStarItem>
      </ul>
      <div class="pt-60">
        <ElementImageViewer
          class="w-100"
          width="1000"
          height="410"
          loading="lazy"
          src="@/assets/works/ui2/a_2-8.png"
          alt=""
        />
      </div>
      <div class="pt-60">
        <ElementImageViewer
          class="w-100"
          width="1000"
          height="1100"
          loading="lazy"
          src="@/assets/works/ui2/a_2-9.png"
          alt=""
        />
      </div>
    </section>

    <!-- 03 執行階段 3. 設計 Mockup -->
    <section class="container-1000 pb-80">
      <ElementTag :class="'mt-30'">3. 設計 Mockup</ElementTag>
      <ul class="fz-16-l gray2 pt-16">
        <ElementStarItem>
          按照設計系統，將 Wireframe 精稿，審視每一張頁面流程及風格是否一致。
        </ElementStarItem>
      </ul>
      <div class="pt-60">
        <ElementImageViewer
          class="w-100"
          width="1000"
          height="818"
          loading="lazy"
          src="@/assets/works/ui2/a_2-12.png"
          alt=""
        />
      </div>
      <div class="pt-60">
        <ElementImageViewer
          class="w-100"
          width="2000"
          height="880"
          loading="lazy"
          src="@/assets/works/ui2/a_2-10.png"
          alt=""
        />
      </div>
      <div class="pt-60">
        <ElementImageViewer
          class="w-100"
          width="2000"
          height="880"
          loading="lazy"
          src="@/assets/works/ui2/a_2-11.png"
          alt=""
        />
      </div>
    </section>
    <!-- 03 執行階段 4. 製作可互動的 Prototype -->
    <section class="container-1000 pb-80">
      <ElementTag :class="'mt-30'">4. 製作可互動的 Prototype</ElementTag>
      <ul class="fz-16-l gray2 pt-16">
        <ElementStarItem>
          製作可互動的 Prototype，模擬實際操作方式。
        </ElementStarItem>
      </ul>
      <div class="text-align-center pt-40">
        <ElementYoutube videoId="FnPJLzJMyIs" :autoplay="true" :loop="true" />
      </div>
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
      title: "作品集 - UI設計: 台鐵 e 訂通 App Redesign",
      description: "",
    });
  },
});
</script>
