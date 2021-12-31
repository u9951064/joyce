<template>
  <main class="about-index pl-20 pr-20">
    <!-- top -->
    <section class="container-1100">
      <div class="d-flex pb-80 pt-120 pt-sm-30">
        <div class="col-3 col-sm-10 mb-30 text-align-center">
          <picture>
            <source srcset="@/assets/about/photo.webp" type="image/webp" />
            <img
              class="w-100 w-sm-75"
              width="1200"
              height="1380"
              src="@/assets/about/photo.png"
              alt="侯佳君 Joyce 的個人照"
              title="個人照"
            />
          </picture>
        </div>
        <div class="col-7 col-sm-10 pl-40 pl-sm-0">
          <div class="d-flex-c flex-justify-space-between h-100">
            <div class="col">
              <h1 class="fz-30-b gray1 text-sm-align-center">Hi I'm Joyce!</h1>
              <p class="fz-16-l gray2 pt-16">
                擁有網頁視覺設計師 2
                年的經驗，針對不同事業體、活動，製作出對應風格的廣告素材、網頁切版、平面設計。
                於任職期間將其一事業體導入敏捷式開發。在專案過程中擔任 PM
                角色，讓原先需要 3 個月的製作時間縮短為 1 個月完成。<br />
              </p>
              <p class="fz-16-l gray2 pt-16">
                運用公司資源學習
                RWD，精進網頁撰寫能力。在這過程當中，對介面設計產生興趣，因此額外自學
                UI/UX ，熟悉 Figma 操作，並透過 Side Project 「台鐵 e 訂通 App
                Redesign」來自我精進，也與工程師一起參與由六角學院舉辦的「 THE
                F2E 3rd 前端 &amp; UI 修煉精神時光屋」榮獲團體組第 1 名。
                <br />
              </p>
              <p class="fz-16-l gray2 pt-16">
                我相信設計應站在使用者角度並兼顧產品一致性與易用性，為用戶帶來更棒的體驗。<br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- skill -->
    <section class="container-1100 pt-80 pb-80 border-top-gray3">
      <div class="col-10 lh-20 fz-14-r ls-10 blue1">SKILL</div>
      <h2 class="fz-30-b gray1 pt-16 pb-60">專長技能</h2>
      <ul class="d-flex flex-align-stretch ml-i10 mr-i10">
        <li class="col-5 col-sm-10 p-10">
          <div
            class="border-radius-8 border-gray1 d-flex flex-align-stretch h-100"
          >
            <div
              class="
                col-3 col-sm-10
                d-flex
                flex-align-center flex-justify-center
                p-8
              "
            >
              <div class="col-10">
                <img
                  class="d-block w-80 w-sm-35 m-auto mb-sm-i50 mr-sm-0"
                  width="101"
                  height="88"
                  src="@/assets/about/ui.svg"
                  alt=""
                />
              </div>
            </div>
            <div class="col-7 col-sm-10 content pr-8 pb-24 pt-24 p-sm-8">
              <h3 class="fz-22-m gray1 pt-8">UI設計</h3>
              <ul class="fz-16-l gray2 pt-16 pt-sm-8">
                <ElementStarItem
                  >快速手繪、使用軟體製作 Wireframe</ElementStarItem
                >
                <ElementStarItem>制定可重用 Design System</ElementStarItem>
                <ElementStarItem
                  >製作靜態 Mockup 及可互動的 Prototype</ElementStarItem
                >
              </ul>
            </div>
          </div>
        </li>
        <li class="col-5 col-sm-10 p-10">
          <div
            class="border-radius-8 border-gray1 d-flex flex-align-stretch h-100"
          >
            <div
              class="
                col-3 col-sm-10
                d-flex
                flex-align-center flex-justify-center
                p-8
              "
            >
              <div class="col-10">
                <img
                  class="d-block w-80 w-sm-35 m-auto mb-sm-i50 mr-sm-0"
                  width="101"
                  height="88"
                  src="@/assets/about/commerce.svg"
                  alt=""
                />
              </div>
            </div>
            <div class="col-7 col-sm-10 content pr-8 pb-24 pt-24 p-sm-8">
              <h3 class="fz-22-m gray1 pt-8">廣告設計</h3>
              <ul class="fz-16-l gray2 pt-16 pt-sm-8">
                <ElementStarItem
                  >依不同活動，製作相對應風格視覺設計</ElementStarItem
                >
                <ElementStarItem
                  >Google、FB、Line 原生廣告設計製作</ElementStarItem
                >
                <ElementStarItem>Banner、EDM 設計</ElementStarItem>
              </ul>
            </div>
          </div>
        </li>
        <li class="col-5 col-sm-10 p-10">
          <div
            class="border-radius-8 border-gray1 d-flex flex-align-stretch h-100"
          >
            <div
              class="
                col-3 col-sm-10
                d-flex
                flex-align-center flex-justify-center
                p-8
              "
            >
              <div class="col-10">
                <img
                  class="d-block w-80 w-sm-35 m-auto mb-sm-i50 mr-sm-0"
                  width="101"
                  height="88"
                  src="@/assets/about/graphic.svg"
                  alt=""
                />
              </div>
            </div>
            <div class="col-7 col-sm-10 content pr-8 pb-24 pt-24 p-sm-8">
              <h3 class="fz-22-m gray1 pt-8">平面設計</h3>
              <ul class="fz-16-l gray2 pt-16 pt-sm-8">
                <ElementStarItem>Icon、視覺排版、企業識別設計</ElementStarItem>
                <ElementStarItem>手繪插畫、影像合成</ElementStarItem>
                <ElementStarItem
                  >名片、年鑑、大圖輸出、海報、DM 設計</ElementStarItem
                >
              </ul>
            </div>
          </div>
        </li>
        <li class="col-5 col-sm-10 p-10">
          <div
            class="border-radius-8 border-gray1 d-flex flex-align-stretch h-100"
          >
            <div
              class="
                col-3 col-sm-10
                d-flex
                flex-align-center flex-justify-center
                p-8
              "
            >
              <div class="col-10">
                <img
                  class="d-block w-80 w-sm-35 m-auto mb-sm-i50 mr-sm-0"
                  width="101"
                  height="88"
                  loading="lazy"
                  src="@/assets/about/web.svg"
                  alt=""
                />
              </div>
            </div>
            <div class="col-7 col-sm-10 content pr-8 pb-24 pt-24 p-sm-8">
              <h3 class="fz-22-m gray1 pt-8">網頁設計</h3>
              <ul class="fz-16-l gray2 pt-16 pt-sm-8">
                <ElementStarItem>熟悉 HTML、CSS 程式語言</ElementStarItem>
                <ElementStarItem>具備 RWD 相關知識</ElementStarItem>
                <ElementStarItem>獨立切版完成 Landing Page</ElementStarItem>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </section>

    <!-- software -->
    <section id="software" class="container-1100 pt-80 pb-80 border-top-gray3">
      <div class="lh-20 fz-14-r ls-10 blue1">TOOL</div>
      <h2 class="fz-30-b gray1 pt-16 pb-60">擅長軟體</h2>
      <div class="d-flex">
        <div class="col-4 col-sm-10">
          <p class="fz-16-l gray2">
            主要使用右側軟體完成設計發想與執行，結合 Trello
            進行工作上的專案時程管理。平時利用 Notion
            記錄生活、制定目標並將資料整理歸納。
          </p>
        </div>
        <div class="col-6 col-sm-10 d-flex pt-sm-20">
          <div class="col text-align-right text-sm-align-center">
            <img
              class="w-70 w-sm-90 border-radius-8"
              width="101"
              height="100"
              loading="lazy"
              src="@/assets/about/ai.svg"
              alt=""
            /><br />
          </div>
          <div class="col text-align-right text-sm-align-center">
            <img
              class="w-70 w-sm-90 border-radius-8"
              width="101"
              height="100"
              loading="lazy"
              src="@/assets/about/ps.svg"
              alt=""
            /><br />
          </div>
          <div class="col text-align-right text-sm-align-center">
            <img
              class="w-70 w-sm-90 border-radius-8"
              width="101"
              height="100"
              loading="lazy"
              src="@/assets/about/id.svg"
              alt=""
            /><br />
          </div>
          <div class="col text-align-right text-sm-align-center">
            <img
              class="w-70 w-sm-90 border-radius-8 border-gray3"
              width="101"
              height="100"
              loading="lazy"
              src="@/assets/about/vsc.svg"
              alt=""
            /><br />
          </div>
          <div class="col text-align-right text-sm-align-center">
            <img
              class="w-70 w-sm-90 border-radius-8"
              width="101"
              height="100"
              loading="lazy"
              src="@/assets/about/figma.svg"
              alt=""
            /><br />
          </div>
        </div>
      </div>
    </section>

    <!-- experience -->
    <section class="container-1100 pt-80 pb-80 border-top-gray3">
      <div class="w-100 lh-20 fz-14-r ls-10 blue1">EXPERIENCE</div>
      <h2 class="fz-30-b gray1 pt-16 pb-60">工作經驗</h2>

      <!-- 聯成電腦 -->
      <div class="d-flex flex-justify-end">
        <div class="col-15 col-sm-25 pr-60 pr-sm-10">
          <img
            class="border-gray3 border-radius-8 w-90"
            width="88"
            height="88"
            loading="lazy"
            src="@/assets/about/logo-lcc.svg"
            alt="聯成電腦 Logo"
          />
        </div>
        <div class="col-85 col-sm-75">
          <div class="d-flex flex-align-center">
            <h3 class="fz-22-m gray1 mr-16">聯成電腦</h3>
            <p class="fz-16-l gray2">Mar. 2020 - Present</p>
          </div>
          <div class="fz-16-l gray1 pt-16">網頁視覺設計師 / 儲備主管</div>
        </div>
        <div class="col-85 col-sm-10">
          <ul class="fz-16-l gray2 pb-60">
            <ElementStarItem>
              <template #title>廣告設計</template>
              負責檔期活動視覺及相關廣告素材，提高 5 倍績效
            </ElementStarItem>
            <ElementStarItem>
              <template #title>平面設計</template>
              跨部門溝通支援平面需求 e.g.
              名片設計、DM設計、年鑑設計、展場大圖設計，並完成發包
            </ElementStarItem>
            <ElementStarItem>
              <template #title>插畫設計</template>
              繪製的吉祥物相關素材提高品牌親和力
            </ElementStarItem>
            <ElementStarItem>
              <template #title>網頁撰寫</template>
              使用 HTML、CSS 撰寫符合 RWD 設計的廣告頁，吸引消費者填單
            </ElementStarItem>
            <ElementStarItem>
              <template #title>敏捷開發</template>
              任職期間兼負 PM 角色導入敏捷式開發，讓原先 3 個月製作時程縮短為 1
              個月完成
            </ElementStarItem>
          </ul>
        </div>
      </div>

      <!-- 開店123 -->
      <div class="d-flex flex-justify-end">
        <div class="col-15 col-sm-25 pr-60 pr-sm-10">
          <img
            class="border-gray3 border-radius-8 w-90"
            width="100"
            height="100"
            loading="lazy"
            src="@/assets/about/logo-shop123.svg"
            alt="開店123 Logo"
          />
        </div>
        <div class="col-85 col-sm-75">
          <div class="d-flex flex-align-center">
            <h3 class="fz-22-m gray1 mr-16">開店123</h3>
            <p class="fz-16-l gray2">Oct. 2019 - Jan. 2020</p>
          </div>
          <div class="fz-16-l gray1 pt-16">設計助理</div>
        </div>
        <div class="col-85 col-sm-10">
          <ul class="fz-16-l gray2 pb-60">
            <ElementStarItem>
              <template #title>平面設計</template>
              廣告設計、集點卡設計、活動看板設計、手冊設計
            </ElementStarItem>
            <ElementStarItem>
              <template #title>行政庶務</template>
              電話接聽、櫃檯接待、後台商品建立
            </ElementStarItem>
          </ul>
        </div>
      </div>
    </section>

    <!-- 亞洲大學 -->
    <section class="container-1100 pt-80 pb-80 border-top-gray3">
      <div class="w-100 lh-20 fz-14-r ls-10 blue1">EDUCATION</div>
      <h2 class="fz-30-b gray1 pt-16 pb-60">學歷</h2>
      <div class="d-flex flex-justify-end">
        <div class="col-15 col-sm-25 pr-60 pr-sm-10">
          <img
            class="border-gray3 border-radius-8 w-90"
            width="100"
            height="100"
            loading="lazy"
            src="@/assets/about/logo-aisa.svg"
            alt=""
          />
        </div>
        <div class="col-85 col-sm-75">
          <div class="d-flex flex-align-center">
            <h3 class="fz-22-m gray1 mr-16">亞洲大學</h3>
            <p class="fz-16-l gray2">2015 - 2019</p>
          </div>
          <div class="fz-16-l gray1 pt-16">視覺傳達設計系</div>
        </div>
        <div class="col-85 col-sm-10">
          <ul class="fz-16-l gray2 pb-60">
            <ElementStarItem>
              <template #title>畢業製作</template>
              擔任團隊負責人。TAICHUNG 作品獲德國紅點設計獎<br />負責項目：色彩規劃、插畫設計、時間規劃、作品導覽
            </ElementStarItem>
          </ul>
        </div>
      </div>
    </section>

    <!-- 獲獎紀錄 -->
    <section class="container-1100 pt-80 pb-80 border-top-gray3">
      <div class="w-100 lh-20 fz-14-r ls-10 blue1">AWARD</div>
      <h2 class="fz-30-b gray1 pt-16 pb-60">獲獎紀錄</h2>
      <ul>
        <li><AwardItemUI1 /></li>
        <li><AwardItemPrinting2 /></li>
      </ul>
    </section>
  </main>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";
import { useHeader } from "@/compatible/useHeader";

export default defineComponent({
  head: {},
  setup() {
    useHeader({
      title: "About me",
      description:
        "侯佳君 Joyce - 擁有網頁視覺設計師 2年的經驗。我相信設計應兼顧產品一致性與易用性，為用戶帶來更棒的體驗。",
    });
  },
});
</script>
