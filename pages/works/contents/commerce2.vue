<template>
  <main>
    <section class="container-800 pt-60">
      <div class="col-10 fz-14-r-10 blue1">廣告設計</div>
      <div class="d-flex flex-align-center flex-justify-space-between">
        <h2 class="fz-30-b gray1 pt-16">Figma新手指南UI/UX設計思維</h2>
        <div class="pt-8">
          <ElementTag>官網商品</ElementTag>
          <ElementTag>Figma課程</ElementTag>
        </div>
      </div>
    </section>

    <img
      class="pt-60 w-100"
      src="../../../assets/works/commerce2/b_2-2.gif"
      alt=""
    />

    <section
      class="container-1000 pt-80 pb-80 d-flex flex-justify-space-between"
    >
      <div class="d-flex">
        <div class="col-auto">
          <img class="icon" src="../../../assets/icons/ic-role.svg" alt="" />
        </div>
        <div class="col ml-8">
          <div class="fz-22-m gray1">擔任角色</div>
          <div class="fz-16-l gray2 pt-16">視覺設計師</div>
        </div>
      </div>
      <div class="d-flex">
        <div class="col-auto">
          <img class="icon" src="../../../assets/icons/ic-time.svg" alt="" />
        </div>
        <div class="col ml-8">
          <div class="fz-22-m gray1">執行時間</div>
          <div class="fz-16-l gray2 pt-16">2 週</div>
        </div>
      </div>
      <div class="d-flex">
        <div class="col-auto">
          <img
            class="icon"
            src="../../../assets/icons/ic-responsible.svg"
            alt=""
          />
        </div>
        <div class="col ml-8">
          <div class="fz-22-m gray1">負責項目</div>
          <div class="fz-16-l gray2 pt-16">
            設計發想｜視覺排版設計｜各通路廣告素材設計
          </div>
        </div>
      </div>
      <div>
        <ElementBtn
          target="_blank"
          href="https://live.rookiesavior.net/course/figma"
        >
          <span
            class="fz-14-r-10"
            style="
              display: inline-flex;
              justify-content: center;
              align-items: center;
            "
          >
            觀看作品
            <img
              class="d-block ml-2"
              src="../../../assets/icons/ic-search.svg"
              alt=""
            />
          </span>
        </ElementBtn>
      </div>
    </section>

    <!-- 商品介紹 -->
    <section class="container-1000 pt-80 pb-80 border-top-gray3">
      <div class="d-flex flex-align-flex-start">
        <div class="d-flex col-4 flex-align-center">
          <img class="icon" src="../../../assets/icons/ic-flag.svg" alt="" />
          <div class="col fz-22-m gray1 ml-8">商品介紹</div>
        </div>
        <div class="col-6">
          <p class="fz-16-l gray2">
            菜鳥救星主要銷售各式線上真人直播課程，商品課程視覺相當於該產品的門面，搭配文案以吸睛的視覺做呈現。在進入設計製作之前需要先了解課程大綱，與老師及企劃開會討論，通常是課程的風格或是文案的關鍵字進行設計。
          </p>
          <p class="fz-16-l gray2 mt-16">
            廣告素材以主視覺風格延伸進行廣告投遞，吸引相關 TA
            點擊進站瀏覽更多詳細內容進行購買。
          </p>
        </div>
      </div>
    </section>

    <!-- 設計發想 -->
    <section class="container-1000 pt-80 pb-80 border-top-gray3">
      <div class="d-flex flex-align-flex-start">
        <div class="d-flex col-4 flex-align-center">
          <img class="icon" src="../../../assets/icons/ic-think.svg" alt="" />
          <div class="col fz-22-m gray1 ml-8">設計發想</div>
        </div>
        <div class="col-6">
          <p class="fz-16-l gray2">
            企劃會初步整理主題及文案，與設計一同發想並討論設計進一步延伸，搜集相關素材、並構想主視覺
          </p>
          <ElementTag :class="'mt-30'">企劃提案</ElementTag>
          <ul class="fz-16-l gray2 pt-16">
            <ElementStarItem>
              <template #title>課程主標</template>
              Figma新手指南 UI/UX設計思維
            </ElementStarItem>
            <ElementStarItem>
              <template #title>重點文案</template>
              Figma、UI、設計師
            </ElementStarItem>
          </ul>
          <ElementTag :class="'mt-30'">設計切角</ElementTag>
          <ul class="fz-16-l gray2 pt-16">
            <ElementStarItem>
              <template #title>Figma</template>
              以 Figma 主色調為基底
            </ElementStarItem>
            <ElementStarItem>
              <template #title>UI設計</template>
              UI介面元件做搭配
            </ElementStarItem>
          </ul>
          <div class="d-flex flex-justify-end pt-40">
            <img
              class="w-100"
              src="../../../assets/works/commerce2/b_2-3.jpg"
              alt=""
            />
            <p class="fz-14-l-4 gray2 pt-16">參考圖</p>
          </div>
        </div>
      </div>
    </section>
    <!-- 設計理念 -->
    <section class="container-1000 pt-80 pb-80 border-top-gray3">
      <div class="d-flex flex-align-flex-start">
        <div class="d-flex col-4 flex-align-center">
          <img class="icon" src="../../../assets/icons/ic-idea.svg" alt="" />
          <div class="col fz-22-m gray1 ml-8">設計理念</div>
        </div>
        <div class="col-6">
          <p class="fz-16-l gray2">
            該門課程主題為 Figma 教學，有兩張輪播圖搭配影片做介紹，設計一系列
            Figma 課程相關素材同時需檢視頁面風格是否保持一致姓。
          </p>
          <p class="fz-16-l gray2 mt-16">
            整體以 Figma 色系為主色調，搭配 Figma 介面元素、 UI
            常用元件作點綴，讓消費者與商品產生連結性；透過以主視覺風格延伸設計的廣告素材，吸引消費者產生興趣進而進站瀏覽，頁面內容詳細文案搭配設計圖更加讓消費者理解內容，一步步加深消費者的購買慾望。
          </p>
        </div>
      </div>
      <img
        class="pt-60 w-100"
        src="../../../assets/works/commerce2/b_2-4.jpg"
        alt=""
      />
      <img
        class="pt-60 w-100"
        src="../../../assets/works/commerce2/b_2-5.jpg"
        alt=""
      />
      <img
        class="pt-60 w-100"
        src="../../../assets/works/commerce2/b_2-6.jpg"
        alt=""
      />
    </section>
    <!-- 查看更多頁面 -->
    <section class="container-1000 pt-80 pb-80 border-top-gray3">
      <ul class="fz-16-l gray2 pt-16">
        <ElementStarItem> 點擊以下連結觀看其他站內設計頁面 </ElementStarItem>
      </ul>
      <div class="pt-40 d-flex">
        <ElementBtn
          class="m-8"
          target="_blank"
          href="https://live.rookiesavior.net/course/groupbuy"
        >
          <span
            class="fz-14-r-10"
            style="
              display: inline-flex;
              justify-content: center;
              align-items: center;
            "
          >
            秒成團＄團媽團主養成班
            <img
              class="d-block ml-2"
              src="../../../assets/icons/ic-search.svg"
              alt=""
            />
          </span>
        </ElementBtn>
        <ElementBtn
          class="m-8"
          target="_blank"
          href="https://live.rookiesavior.net/course/notion"
        >
          <span
            class="fz-14-r-10"
            style="
              display: inline-flex;
              justify-content: center;
              align-items: center;
            "
          >
            運用 Notion 打造任務管理思維！
            <img
              class="d-block ml-2"
              src="../../../assets/icons/ic-search.svg"
              alt=""
            />
          </span>
        </ElementBtn>
        <ElementBtn
          class="m-8"
          target="_blank"
          href="https://live.rookiesavior.net/course/startup"
        >
          <span
            class="fz-14-r-10"
            style="
              display: inline-flex;
              justify-content: center;
              align-items: center;
            "
          >
            LINE 動態貼圖設計
            <img
              class="d-block ml-2"
              src="../../../assets/icons/ic-search.svg"
              alt=""
            />
          </span>
        </ElementBtn>
        <ElementBtn
          class="m-8"
          target="_blank"
          href="https://live.rookiesavior.net/course/workout"
        >
          <span
            class="fz-14-r-10"
            style="
              display: inline-flex;
              justify-content: center;
              align-items: center;
            "
          >
            居家運動健身計畫
            <img
              class="d-block ml-2"
              src="../../../assets/icons/ic-search.svg"
              alt=""
            />
          </span>
        </ElementBtn>
        <ElementBtn
          class="m-8"
          target="_blank"
          href="https://live.rookiesavior.net/course/line-official"
        >
          <span
            class="fz-14-r-10"
            style="
              display: inline-flex;
              justify-content: center;
              align-items: center;
            "
          >
            LINE 官方帳號操作經營實戰班
            <img
              class="d-block ml-2"
              src="../../../assets/icons/ic-search.svg"
              alt=""
            />
          </span>
        </ElementBtn>
        <ElementBtn
          class="m-8"
          target="_blank"
          href="https://live.rookiesavior.net/course/google-analytics"
        >
          <span
            class="fz-14-r-10"
            style="
              display: inline-flex;
              justify-content: center;
              align-items: center;
            "
          >
            Google Analytics 網站分析全攻略
            <img
              class="d-block ml-2"
              src="../../../assets/icons/ic-search.svg"
              alt=""
            />
          </span>
        </ElementBtn>
        <ElementBtn
          class="m-8"
          target="_blank"
          href="https://live.rookiesavior.net/course/startup"
        >
          <span
            class="fz-14-r-10"
            style="
              display: inline-flex;
              justify-content: center;
              align-items: center;
            "
          >
            創業投資的不敗生存法則
            <img
              class="d-block ml-2"
              src="../../../assets/icons/ic-search.svg"
              alt=""
            />
          </span>
        </ElementBtn>
        <ElementBtn
          class="m-8"
          target="_blank"
          href="https://live.rookiesavior.net/course/sketchUp"
        >
          <span
            class="fz-14-r-10"
            style="
              display: inline-flex;
              justify-content: center;
              align-items: center;
            "
          >
            SketchUP + VRay 室設 3D 出圖
            <img
              class="d-block ml-2"
              src="../../../assets/icons/ic-search.svg"
              alt=""
            />
          </span>
        </ElementBtn>
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
      title: "作品集 - 廣告設計: Figma新手指南UI/UX設計思維",
      description: "",
    });
  },
});
</script>
