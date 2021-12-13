<template>
  <main class="about-index">
    <!-- top -->
    <section class="container-1100">
      <div class="d-flex pt-120 pb-80">
        <div class="col-3">
          <img class="w-100" src="../../assets/about/photo.png" alt="個人照" />
        </div>
        <div class="col-7 pl-40">
          <div class="d-flex-c flex-justify-space-between h-100">
            <div class="col">
              <h1 class="fz-30-b gray1">Hi I'm Joyce!</h1>
              <p class="fz-16-l gray2 pt-16">
                擁有網頁視覺設計師 2
                年的經驗。職務內容以原生廣告設計(EDM、Banner...)、網頁切版設計及平面視覺設計為主。<br />
                除了設計製作，於任職期間將其一事業體導入敏捷式開發。在專案過程中擔任
                PM 角色，讓原先需要 3 個月的製作時間縮短為 1 個月完成。<br />

                自學 UI/UX 設計，熟悉 Figma 操作，透過實作 Side project
                來實踐所學，將台鐵 APP 進行
                Redesign，研究競品分析、使用者評價；製作 Flow
                map、Wireframe、Mockup、 制定 Design system、Prototype。<br />

                我相信設計應兼顧產品一致性與易用性，為用戶帶來更棒的體驗。
              </p>
            </div>
            <div class="col-auto">
              <ElementTag :class="'text-align-center'">
                " Design is not just what it looks and feels like. Design is how
                it works. — Steve Jobs "
              </ElementTag>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- skill -->
    <section class="container-1100 pt-80 pb-80 border-top-gray3">
      <div class="col-10 fz-14-r-10 blue1">SKILL</div>
      <h2 class="fz-30-b gray1 pt-16 pb-60">專長技能</h2>
      <div class="gird-block-group">
        <div class="d-flex">
          <div class="col-4 d-flex flex-align-center flex-justify-center">
            <img src="../../assets/about/ui.svg" alt="" />
          </div>
          <div class="col-6">
            <div class="d-flex flex-align-center flex-justify-left pt-60">
              <h3 class="fz-22-m gray1 mr-16">UI設計</h3>
              <ElementTag>User Interface</ElementTag>
            </div>
            <ul class="fz-16-l gray2 pt-24 pb-60">
              <ElementStarItem>具備 UI / UX 設計相關知識</ElementStarItem>
              <ElementStarItem
                >快速手繪、使用軟體製作 Wireframe</ElementStarItem
              >
              <ElementStarItem>了解 Design system 的重要性</ElementStarItem>
              <ElementStarItem
                >製作靜態 Mockup 及可互動的 Prototype</ElementStarItem
              >
              <ElementStarItem
                >熟悉 Html、CSS 程式語言，具備 RWD 知識</ElementStarItem
              >
            </ul>
          </div>
        </div>

        <div class="d-flex">
          <div class="col-4 d-flex flex-align-center flex-justify-center">
            <img src="../../assets/about/commerce.svg" alt="" />
          </div>
          <div class="col-6">
            <div class="d-flex flex-align-center flex-justify-left pt-60">
              <h3 class="fz-22-m gray1 mr-16">廣告設計</h3>
              <ElementTag>Advertising Design</ElementTag>
            </div>
            <ul class="fz-16-l gray2 pt-24 pb-60">
              <ElementStarItem>官網 Banner 設計</ElementStarItem>
              <ElementStarItem
                >Google、FB、Line 原生廣告設計製作</ElementStarItem
              >
              <ElementStarItem
                >依不同事業體、活動，製作相對應風格視覺設計</ElementStarItem
              >
            </ul>
          </div>
        </div>

        <div class="d-flex">
          <div class="col-4 d-flex flex-align-center flex-justify-center">
            <img src="../../assets/about/graphic.svg" alt="" />
          </div>
          <div class="col-6">
            <div class="d-flex flex-align-center flex-justify-left pt-60">
              <h3 class="fz-22-m gray1 mr-16">平面設計</h3>
              <ElementTag>Graphic Design</ElementTag>
            </div>
            <ul class="fz-16-l gray2 pt-24 pb-60">
              <ElementStarItem>企業形象識別設計</ElementStarItem>
              <ElementStarItem>視覺排版設計</ElementStarItem>
              <ElementStarItem>色彩搭配運用</ElementStarItem>
              <ElementStarItem>手繪插畫設計</ElementStarItem>
              <ElementStarItem>去背影像合成</ElementStarItem>
            </ul>
          </div>
        </div>

        <div class="d-flex">
          <div class="col-4 d-flex flex-align-center flex-justify-center">
            <img src="../../assets/about/print.svg" alt="" />
          </div>
          <div class="col-6">
            <div class="d-flex flex-align-center flex-justify-left pt-60">
              <h3 class="fz-22-m gray1 mr-16">印刷設計</h3>
              <ElementTag>Print Design</ElementTag>
            </div>
            <ul class="fz-16-l gray2 pt-24 pb-60">
              <ElementStarItem
                >名片設計、海報設計、DM 設計、年鑑設計</ElementStarItem
              >
              <ElementStarItem
                >大圖輸出、展覽看板背板、廣告招牌</ElementStarItem
              >
              <ElementStarItem>獨立作業完成發包</ElementStarItem>
            </ul>
          </div>
        </div>

        <div class="d-flex">
          <div class="col-4 d-flex flex-align-center flex-justify-center">
            <img src="../../assets/about/web.svg" alt="" />
          </div>
          <div class="col-6">
            <div class="d-flex flex-align-center flex-justify-left pt-60">
              <h3 class="fz-22-m gray1 mr-16">網頁設計</h3>
              <ElementTag>Web Design</ElementTag>
            </div>
            <ul class="fz-16-l gray2 pt-24 pb-60">
              <ElementStarItem>熟悉 HTML、CSS 程式語言</ElementStarItem>
              <ElementStarItem>具備 RWD 相關知識</ElementStarItem>
              <ElementStarItem>獨立切版完成 Landing Page</ElementStarItem>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- software -->
    <section id="software" class="container-1100 pt-80 pb-80 border-top-gray3">
      <div class="col-10 fz-14-r-10 blue1">TOOL</div>
      <div class="d-flex pt-16 pb-60">
        <div class="col-4">
          <h2 class="fz-30-b gray1">擅長軟體</h2>
        </div>
        <div class="col-6">
          <p class="fz-16-l gray2">
            主要使用以下軟體完成設計發想與執行，使用 Trello
            進行工作上的專案時程管理。平時利用Notion 設定目標並將資料歸納整理。
          </p>
        </div>
      </div>

      <div class="d-flex w-70 m-auto text-align-center">
        <div class="col-2">
          <img
            class="mb-16 border-radius-8"
            src="../../assets/about/ai.svg"
            alt=""
          /><br />
          <ElementTag>Illustrator</ElementTag>
        </div>
        <div class="col-2">
          <img
            class="mb-16 border-radius-8"
            src="../../assets/about/ps.svg"
            alt=""
          /><br />
          <ElementTag>PhotoShop</ElementTag>
        </div>
        <div class="col-2">
          <img
            class="mb-16 border-radius-8"
            src="../../assets/about/id.svg"
            alt=""
          /><br />
          <ElementTag>InDesign</ElementTag>
        </div>
        <div class="col-2">
          <img
            class="mb-16 border-radius-8 border"
            src="../../assets/about/vsc.svg"
            alt=""
          /><br />
          <ElementTag>Visual Studio</ElementTag>
        </div>
        <div class="col-2">
          <img
            class="mb-16 border-radius-8"
            src="../../assets/about/figma.svg"
            alt=""
          /><br />
          <ElementTag>Figma</ElementTag>
        </div>
      </div>
    </section>

    <!-- experience -->
    <section class="container-1100 pt-80 pb-80 border-top-gray3">
      <div class="w-100 fz-14-r-10 blue1">EXPERIENCE</div>
      <h2 class="fz-30-b gray1 pt-16 pb-60">工作經驗</h2>

      <!-- 聯成電腦 -->
      <div class="d-flex">
        <div class="col-1">
          <img
            class="border border-radius-8 w-100"
            src="../../assets/about/logo-lcc.svg"
            alt=""
          />
        </div>
        <div class="col-9 pl-4 pl-60">
          <div class="d-flex flex-align-center">
            <h3 class="fz-22-m gray1 mr-16">聯成電腦</h3>
            <ElementTag>Ｍar. 2020 - Present</ElementTag>
          </div>
          <div class="fz-16-l gray1 pt-16">網頁視覺設計師 / 儲備主管</div>
          <ul class="fz-16-l gray2 pt-16 pb-60">
            <ElementStarItem>
              <template #title>廣告設計</template>
              名片設計、DM設計、年鑑設計、展場大圖設計，並完成發包
            </ElementStarItem>
            <ElementStarItem>
              <template #title>平面設計</template>
              針對不同事業體、活動，依企劃製作出相對應風格視覺的廣告設計、Banner等素材
            </ElementStarItem>
            <ElementStarItem>
              <template #title>插畫設計</template>
              能夠快速手繪草稿進行溝通，繪製插圖
            </ElementStarItem>
            <ElementStarItem>
              <template #title>網頁撰寫</template>
              使用 HTML、CSS 撰寫符合 RWD 設計的 Landing Page
            </ElementStarItem>
            <ElementStarItem>
              <template #title>導入敏捷式開發</template>
              任職期間兼負 PO 角色導入敏捷式開發 Agile，讓原先 3
              個月製作時程縮短為 1 個月完成
            </ElementStarItem>
          </ul>
        </div>
      </div>

      <!-- 開店123 -->
      <div class="d-flex">
        <div class="col-1">
          <img
            class="border border-radius-8 w-100"
            src="../../assets/about/logo-shop123.svg"
            alt=""
          />
        </div>
        <div class="col-9 pl-4 pl-60">
          <div class="d-flex flex-align-center">
            <h3 class="fz-22-m gray1 mr-16">開店123</h3>
            <ElementTag>Oct. 2019 - Jan. 2020</ElementTag>
          </div>
          <div class="fz-16-l gray1 pt-16">設計助理</div>
          <ul class="fz-16-l gray2 pt-16 pb-60">
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

      <div class="w-100 fz-14-r-10 blue1">EDUCATION</div>
      <h2 class="fz-30-b gray1 pt-16 pb-60">學歷</h2>

      <!-- 亞洲大學 -->
      <div class="d-flex">
        <div class="col-1">
          <img
            class="border border-radius-8 w-100"
            src="../../assets/about/logo-aisa.svg"
            alt=""
          />
        </div>
        <div class="col-9 pl-4 pl-60">
          <div class="d-flex flex-align-center">
            <h3 class="fz-22-m gray1 mr-16">亞洲大學</h3>
            <ElementTag>2015 - 2019</ElementTag>
          </div>
          <div class="fz-16-l gray1 pt-16">視覺傳達設計系</div>
          <ul class="fz-16-l gray2 pt-16 pb-60">
            <ElementStarItem>
              <template #title>畢業製作</template>
              擔任負責人，主要負責色彩規劃、插畫設計、時間規劃、展場設計、作品導覽
            </ElementStarItem>
            <ElementStarItem>
              <template #title>獲得獎項</template>
              <ul>
                <li>2019 德國紅點設計 / 品牌暨傳達設計紅點獎</li>
                <li>2019 泰達盃青年創意設計大賽 / 入圍</li>
                <li>2019 放視大賞 - 平面傳達設計組 / 入圍</li>
              </ul>
            </ElementStarItem>
          </ul>
        </div>
      </div>
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

<style lang="scss" scoped>
.about-index {
  & .gird-block-group {
    $radiusSize: 8px;
    $lineStyle: 1px solid #37352f;

    & > * {
      border-top: $lineStyle;
      border-left: $lineStyle;
      border-right: $lineStyle;

      &:first-child {
        border-top-left-radius: $radiusSize;
        border-top-right-radius: $radiusSize;
      }

      &:last-child {
        border-bottom-left-radius: $radiusSize;
        border-bottom-right-radius: $radiusSize;
        border-bottom: $lineStyle;
      }
    }
  }
}
</style>
