<template>
  <main class="pl-20 pr-20">
    <!-- top -->
    <section class="container-1100">
      <div class="d-flex pt-120 pt-sm-30 pb-80">
        <div class="col col-sm-10 text-align-center">
          <img
            class="w-90 w-sm-75 h-auto border-gray1 border-radius-circle"
            width="490"
            height="490"
            src="../../assets/resume/photo.jpg"
            alt="個人照"
          />
        </div>
        <div
          class="
            d-flex-c
            col-5 col-sm-10
            pl-20 pl-sm-0
            flex-justify-space-between
          "
        >
          <div class="">
            <div class="d-flex flex-align-baseline">
              <h1
                class="
                  fz-40-b
                  gray1
                  pt-16 pt-sm-60
                  col-auto col-sm-10
                  text-align-center
                "
              >
                侯佳君
              </h1>
              <h2
                class="
                  fz-22-m
                  gray1
                  pl-20 pl-sm-0
                  col-auto col-sm-10
                  text-align-center
                "
              >
                HOU CHIA CHUN
              </h2>
            </div>
            <p class="fz-16-l gray2 pt-16 text-sm-align-center">
              Visual &amp; Web Designer
            </p>
          </div>
          <h3 class="fz-16-l gray2 d-sm-none">
            網頁 UI 設計｜HTML、CSS 切版｜廣告平面設計｜插畫設計
          </h3>
        </div>
        <div class="d-flex col-3 col-sm-10 flex-justify-end">
          <div class="col-auto col-sm-10 text-align-center">
            <ElementBtn
              href="/files/resume_joyce.pdf"
              title="下載履歷"
              class="ml-24 ml-sm-0 mt-sm-20 mb-sm-20"
              target="_blank"
            >
              <span class="lh-20 fz-14-r ls-10"
                >下載履歷
                <img
                  width="20"
                  height="20"
                  class="ml-2"
                  src="../../assets/icons/ic-download.svg"
                  alt="下載履歷"
              /></span>
            </ElementBtn>
          </div>
          <client-only>
            <div
              class="
                col-auto col-sm-10
                d-flex
                flex-sm-reverse flex-align-center flex-sm-justify-start
                pointer
              "
              @click="makeCall"
            >
              <div class="col-auto fz-16-l gray1 mr-20 ml-sm-20">
                {{ joycePhone }}
              </div>
              <img
                class="icon"
                width="18"
                height="18"
                src="../../assets/icons/ic-phone.svg"
                alt=""
              />
            </div>
            <div
              class="
                col-auto col-sm-10
                d-flex
                flex-sm-reverse flex-align-center flex-sm-justify-start
                pointer
              "
              @click="sendMail"
            >
              <div class="col-auto fz-16-l gray1 mr-20 ml-sm-20">
                {{ joyceEmail }}
              </div>
              <img
                class="icon"
                width="18"
                height="18"
                src="../../assets/icons/ic-mail.svg"
                alt=""
              />
            </div>
          </client-only>
          <div
            class="
              col-auto col-sm-10
              d-flex
              flex-sm-reverse flex-align-center flex-sm-justify-start
              pointer
            "
          >
            <div class="col-auto fz-16-l gray1 mr-20 ml-sm-20">
              https://joyce.tinycloud.tw/
            </div>
            <img
              class="icon"
              width="18"
              height="18"
              src="../../assets/icons/ic-website.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>

    <!-- introduce -->
    <section class="container-1100 pt-80 pb-80 border-top-gray3">
      <p class="fz-16-l gray2">
        擁有網頁視覺設計師 2
        年經驗，針對不同事業體、活動，製作出對應風格的廣告素材，任職期間運用公司資源學
        RWD，精進網頁撰寫能力。在這過程當中，對介面設計產生興趣，因此額外自學
        UI/UX ，熟悉 Figma 操作，並透過 Side Project 「台鐵 e 訂通 App
        Redesign」來自我精進，也與工程師一起參與由六角學院舉辦的「THE F2E 3rd
        前端 &amp; UI 修煉精神時光屋」榮獲團體組第 1 名。
        <br />我相信設計應站在使用者角度並兼顧產品一致性與易用性，為用戶帶來更棒的體驗。
      </p>
    </section>

    <section class="container-1100 d-flex">
      <!-- work -->
      <div class="col-6 col-sm-10">
        <div class="d-flex flex-align-center pb-40">
          <h2 class="col-auto fz-30-b gray1 pr-24">工作經驗</h2>
          <div class="col border-top-gray3"></div>
        </div>
        <!-- 聯成電腦 -->
        <h3 class="fz-22-m gray1">聯成電腦 Web Visual Designer</h3>
        <p class="fz-16-l gray2 pt-12">Ｍar. 2020 - Present</p>
        <ul class="fz-16-l gray2 pt-16 pb-60">
          <ElementStarItem>
            <template #title>廣告設計</template>
            負責檔期活動視覺及相關廣告素材，提高 5 倍績效
          </ElementStarItem>
          <ElementStarItem>
            <template #title>平面設計</template>
            跨部門溝通支援平面需求，其中學員年鑑受同仁好評
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
            任職期間兼負 PM 導入敏捷式開發，讓 3 個月製程縮短為 1 個月完成
          </ElementStarItem>
        </ul>

        <!-- 開店123 -->
        <h3 class="fz-22-m gray1">開店 123 Design Assistant</h3>
        <p class="fz-16-l gray2 pt-12">Oct. 2019 - Jan. 2020</p>
        <ul class="star-list fz-16-l gray2 pt-16 pb-60">
          <ElementStarItem>
            <template #title>平面設計</template>
            廣告設計、集點卡設計、活動看板設計、手冊設計
          </ElementStarItem>
          <ElementStarItem>
            <template #title>行政庶務</template>
            電話接聽、櫃檯接待、後台商品建立
          </ElementStarItem>
        </ul>

        <!-- 亞洲大學 -->
        <div class="d-flex flex-align-center pb-40">
          <h2 class="col-auto fz-30-b gray1 pr-24">學歷</h2>
          <div class="col line border-top-gray3"></div>
        </div>
        <h3 class="fz-22-m gray1">亞洲大學 Visual Communication Design</h3>
        <p class="fz-16-l gray2 pt-12">2015 - 2019</p>
        <ul class="fz-16-l gray2 pt-16 pb-60">
          <ElementStarItem>
            <template #title>畢業製作</template>
            擔任主要負責人，TAICHUNG 作品獲德國紅點設計獎<br />負責項目：色彩規劃、插畫設計、時間規劃、作品導覽
          </ElementStarItem>
        </ul>
      </div>

      <div class="col-4 col-sm-10 pl-40 pl-sm-0">
        <!-- award -->
        <div class="d-flex flex-align-center pb-40">
          <h2 class="col-auto fz-30-b gray1 pr-24">獲獎紀錄</h2>
          <div class="col line border-top-gray3"></div>
        </div>
        <!-- Hi BUS! -->
        <h3 class="fz-22-m gray1">
          <NuxtLink
            class="blue1"
            :to="{ name: 'works-contents-ui1' }"
            target="_blank"
            title="Hi BUS!"
            >Hi BUS!
          </NuxtLink>
        </h3>
        <ul class="fz-16-l gray2 pt-16 pb-60">
          <ElementStarItem>
            <div class="d-inline-flex">
              <div class="col-auto">2021&emsp;</div>
              <div class="col">
                THE F2E 3rd 前端 &amp; UI 修煉精神時光屋｜團體組第 1 名
              </div>
            </div>
          </ElementStarItem>
        </ul>
        <!-- TAICHUNG -->
        <h3 class="fz-22-m gray1">
          <NuxtLink
            class="blue1"
            :to="{ name: 'works-contents-printing2' }"
            target="_blank"
            title="TAICHUNG"
            >TAICHUNG
          </NuxtLink>
        </h3>
        <ul class="fz-16-l gray2 pt-16 pb-60">
          <ElementStarItem>
            <div class="d-inline-flex">
              <div class="col-auto">2019&emsp;</div>
              <div class="col">德國紅點設計｜品牌暨傳達設計紅點獎</div>
            </div>
          </ElementStarItem>
          <ElementStarItem>
            <div class="d-inline-flex">
              <div class="col-auto">2019&emsp;</div>
              <div class="col">泰達盃青年創意設計大賽｜入圍</div>
            </div>
          </ElementStarItem>
          <ElementStarItem>
            <div class="d-inline-flex">
              <div class="col-auto">2019&emsp;</div>
              <div class="col">放視大賞 - 平面傳達設計組｜入圍</div>
            </div>
          </ElementStarItem>
        </ul>

        <!-- skill -->
        <div class="d-flex flex-align-center pb-40">
          <h2 class="col-auto fz-30-b gray1 pr-24">專長技能</h2>
          <div class="col line border-top-gray3"></div>
        </div>
        <!-- UI 設計 -->
        <h3 class="fz-22-m gray1">UI 設計</h3>
        <p class="fz-16-l gray2 pt-12">Figma</p>
        <ul class="fz-16-l gray2 pt-16 pb-60">
          <ElementStarItem> 快速手繪、使用軟體製作 Wireframe </ElementStarItem>
          <ElementStarItem> 制定可重用 Design System </ElementStarItem>
          <ElementStarItem>
            製作靜態 Mockup 及可互動的 Prototype
          </ElementStarItem>
        </ul>
        <!-- 前端概念 -->
        <h3 class="fz-22-m gray1">前端概念</h3>
        <p class="fz-16-l gray2 pt-12">Visual Studio Code</p>
        <ul class="fz-16-l gray2 pt-16 pb-60">
          <ElementStarItem>
            使用 HTML、CSS 切版完成 Landing Page，具備 RWD 知識
          </ElementStarItem>
        </ul>
        <!-- 平面設計 -->
        <h3 class="fz-22-m gray1">平面設計</h3>
        <p class="fz-16-l gray2 pt-12">Illustrator、Photoshop、InDesign</p>
        <ul class="fz-16-l gray2 pt-16 pb-60">
          <ElementStarItem> 原生廣告、Banner、EDM設計 </ElementStarItem>
          <ElementStarItem> Icon、企業識別設計 </ElementStarItem>
          <ElementStarItem>
            手繪插畫、影像合成、名片、年鑑、DM設計
          </ElementStarItem>
        </ul>
        <!-- 管理協作 -->
        <h3 class="fz-22-m gray1">管理協作</h3>
        <p class="fz-16-l gray2 pt-12">Notion、 Trello、Google Docs</p>
        <ul class="fz-16-l gray2 pt-16 pb-60">
          <ElementStarItem>
            運用 Trello 進行工作上的專案時程管理
          </ElementStarItem>
          <ElementStarItem>
            利用 Notion 設定目標並將資料歸納整理
          </ElementStarItem>
        </ul>
      </div>
    </section>
  </main>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";
import { useHeader } from "@/compatible/useHeader";
import { useProfileInfo } from "@/compatible/useProfileInfo";

export default defineComponent({
  head: {},
  setup() {
    useHeader({
      title: "Resume",
      description:
        "侯佳君 Joyce - 擁有網頁視覺設計師 2年的經驗。我相信設計應兼顧產品一致性與易用性，為用戶帶來更棒的體驗。",
    });

    return {
      ...useProfileInfo(),
    };
  },
});
</script>
