<template>
  <article>
    <section class="container-800 pt-60 pt-sm-30">
      <div class="col-10 lh-20 fz-14-r ls-10 blue1">廣告設計</div>
      <div class="d-flex flex-align-center flex-justify-space-between">
        <h1 class="fz-30-b gray1 pt-16">Figma新手指南UI/UX設計思維</h1>
        <div class="pt-8">
          <ElementTag>官網商品</ElementTag>
          <ElementTag>Figma課程</ElementTag>
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
        src="@/assets/works/commerce2/b_2-2.gif"
        alt="Figma新手指南UI/UX設計思維的封面圖片"
        title="Figma新手指南UI/UX設計思維"
      />
    </div>

    <section
      class="container-1000 pt-80 pb-80 d-flex flex-justify-space-between"
    >
      <div class="d-flex col-sm order-sm-1">
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
      <div class="d-flex col-sm-10 order-sm-3">
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
      <div class="d-flex col-sm-10 order-sm-4">
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
      <div class="col-sm-auto order-sm-2">
        <ElementBtn
          target="_blank"
          rel="noreferrer noopener"
          href="https://live.rookiesavior.net/course/figma"
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
            觀看作品
            <img
              class="d-block ml-2"
              width="18"
              height="18"
              src="@/assets/icons/ic-search.svg"
              alt="觀看作品"
            />
          </span>
        </ElementBtn>
      </div>
    </section>

    <!-- 商品介紹 -->
    <section class="container-1000 pt-80 pb-80 border-top-gray3">
      <div class="d-flex flex-align-flex-start">
        <div class="d-flex col-4 col-sm-10 flex-align-center">
          <img
            class="icon"
            width="25"
            height="24"
            src="@/assets/icons/ic-flag.svg"
            alt="商品介紹"
          />
          <div class="col fz-22-m gray1 ml-8">商品介紹</div>
        </div>
        <div class="col-6 col-sm-10">
          <p class="fz-16-l gray2">
            菜鳥救星主要銷售各式線上真人直播課程，商品課程視覺相當於該產品的門面，搭配文案以吸睛的視覺做呈現。在進入設計製作之前需要先了解課程大綱，與老師及企劃開會討論課程風格、並針對文案關鍵字進行設計討論。
          </p>
          <p class="fz-16-l gray2 mt-16">
            廣告素材以主視覺風格延伸進行廣告投放，吸引相關 TA
            點擊進站瀏覽更多詳細內容並進行購買。
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
            alt="設計發想"
          />
          <div class="col fz-22-m gray1 ml-8">設計發想</div>
        </div>
        <div class="col-6 col-sm-10">
          <p class="fz-16-l gray2">
            企劃會初步整理主題及文案，與設計一同發想並討論設計進一步延伸，搜集相關素材、並構想主視覺。
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
          <figure class="pt-40">
            <ElementImageViewer
              class="w-100"
              width="1000"
              height="500"
              loading="lazy"
              src="@/assets/works/commerce2/b_2-3.jpg"
              alt="以 Figma 主色調為基底，UI介面元件做搭配"
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
      <div class="d-flex flex-align-flex-start">
        <div class="d-flex col-4 col-sm-10 flex-align-center">
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
            該門課程主題為 Figma 教學，有兩張輪播圖搭配影片做介紹，設計一系列
            Figma 課程相關素材同時需檢視頁面風格是否保持一致姓。
          </p>
          <p class="fz-16-l gray2 mt-16">
            整體以 Figma 色系為主色調，搭配 Figma 介面元素、 UI
            常用元件作點綴，讓消費者與商品產生連結性；透過以主視覺風格延伸設計的廣告素材，吸引消費者產生興趣進而進站瀏覽，頁面內容詳細文案搭配設計圖更加讓消費者理解內容，一步步加深消費者的購買慾望。
          </p>
        </div>
      </div>
      <ElementImageViewer
        class="pt-60 w-100"
        loading="lazy"
        width="1000"
        height="410"
        src="@/assets/works/commerce2/b_2-4.jpg"
        alt="商品主視覺輪播素材"
      />
      <ElementImageViewer
        class="pt-60 w-100"
        loading="lazy"
        width="1000"
        height="600"
        src="@/assets/works/commerce2/b_2-5.jpg"
        alt="商品介紹素材"
      />
      <ElementImageViewer
        class="pt-60 w-100"
        loading="lazy"
        width="1000"
        height="410"
        src="@/assets/works/commerce2/b_2-6.jpg"
        alt="色彩計畫與商品廣告素材"
      />
    </section>
    <!-- 查看更多頁面 -->
    <section class="container-1000 pt-80 pb-80 border-top-gray3">
      <ul class="fz-16-l gray2 pt-60">
        <ElementStarItem>
          點擊以下連結觀看其他站內設計頁面
          <ul class="dot-list">
            <li class="fz-16-l gray2 pt-16">
              菜鳥救星｜<a
                class="blue1"
                href="https://live.rookiesavior.net/course/groupbuy"
                target="_blank"
                title="秒成團＄團媽團主養成班"
                rel="noopener"
                >秒成團＄團媽團主養成班</a
              >
            </li>
            <li class="fz-16-l gray2 pt-16">
              菜鳥救星｜<a
                class="blue1"
                href="https://live.rookiesavior.net/course/notion"
                target="_blank"
                title="職場專案管理課｜運用 Notion 打造任務管理思維！"
                rel="noreferrer noopener"
                >職場專案管理課｜運用 Notion 打造任務管理思維！</a
              >
            </li>
            <li class="fz-16-l gray2 pt-16">
              菜鳥救星｜<a
                class="blue1"
                href="https://live.rookiesavior.net/course/linemotion"
                target="_blank"
                title="LINE 動態貼圖設計"
                rel="noreferrer noopener"
                >LINE 動態貼圖設計</a
              >
            </li>
            <li class="fz-16-l gray2 pt-16">
              菜鳥救星｜<a
                class="blue1"
                href="https://live.rookiesavior.net/course/workout"
                target="_blank"
                title="居家運動健身計畫♪在家動滋動"
                rel="noreferrer noopener"
                >居家運動健身計畫♪在家動滋動</a
              >
            </li>
            <li class="fz-16-l gray2 pt-16">
              菜鳥救星｜<a
                class="blue1"
                href="https://live.rookiesavior.net/course/line-official"
                target="_blank"
                title="LINE 官方帳號操作經營實戰班"
                rel="noopener"
                >LINE 官方帳號操作經營實戰班
              </a>
            </li>
            <li class="fz-16-l gray2 pt-16">
              菜鳥救星｜<a
                class="blue1"
                href="https://live.rookiesavior.net/course/google-analytics"
                target="_blank"
                title="Google Analytics 網站分析全攻略"
                rel="noopener"
                >Google Analytics 網站分析全攻略
              </a>
            </li>
            <li class="fz-16-l gray2 pt-16">
              菜鳥救星｜<a
                class="blue1"
                href="https://live.rookiesavior.net/course/startup"
                target="_blank"
                title="創業投資的不敗生存法則"
                rel="noopener"
                >創業投資的不敗生存法則
              </a>
            </li>
            <li class="fz-16-l gray2 pt-16">
              菜鳥救星｜<a
                class="blue1"
                href="https://live.rookiesavior.net/course/sketchUp"
                target="_blank"
                title="SketchUP + VRay 室設 3D 出圖"
                rel="noopener"
                >SketchUP + VRay 室設 3D 出圖
              </a>
            </li>
          </ul>
        </ElementStarItem>
      </ul>
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
      title: "作品集 - Figma新手指南UI/UX設計思維",
      description: "菜鳥救星主要銷售各式線上真人直播課程，商品課程視覺相當於該產品的門面，搭配文案以吸睛的視覺做呈現。在進入設計製作之前需要先了解課程大綱，與老師及企劃開會討論課程風格、並針對文案關鍵字進行設計討論",
    });
  },
});
</script>
