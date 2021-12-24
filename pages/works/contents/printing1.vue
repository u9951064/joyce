<template>
  <main>
    <section class="container-800 pt-60">
      <div class="col-10 lh-20 fz-14-r ls-10 blue1">平面設計</div>
      <div class="d-flex flex-align-center flex-justify-space-between">
        <h2 class="fz-30-b gray1 pt-16">2021 學員年鑑設計</h2>
        <div class="pt-8">
          <ElementTag>年鑑設計</ElementTag>
        </div>
      </div>
    </section>

    <img
      class="pt-60 w-100"
      src="../../../assets/works/printing1/c_1-2.jpg"
      alt=""
    />

    <section
      class="container-1000 pt-80 pb-80 d-flex flex-justify-space-between"
    >
      <div class="d-flex">
        <div class="col-auto">
          <img
            class="icon"
            width="22"
            height="22"
            src="../../../assets/icons/ic-role.svg"
            alt=""
          />
        </div>
        <div class="col ml-8">
          <div class="fz-22-m gray1">擔任角色</div>
          <div class="fz-16-l gray2 pt-16">視覺設計師</div>
        </div>
      </div>
      <div class="d-flex">
        <div class="col-auto">
          <img
            class="icon"
            width="22"
            height="22"
            src="../../../assets/icons/ic-time.svg"
            alt=""
          />
        </div>
        <div class="col ml-8">
          <div class="fz-22-m gray1">執行時間</div>
          <div class="fz-16-l gray2 pt-16">1 個月</div>
        </div>
      </div>
      <div class="d-flex">
        <div class="col-auto">
          <img
            class="icon"
            width="22"
            height="22"
            src="../../../assets/icons/ic-responsible.svg"
            alt=""
          />
        </div>
        <div class="col ml-8">
          <div class="fz-22-m gray1">負責項目</div>
          <div class="fz-16-l gray2 pt-16">
            設計發想｜視覺排版設計｜印刷發包
          </div>
        </div>
      </div>
    </section>

    <!-- 活動目標 -->
    <section class="container-1000 pt-80 pb-80 border-top-gray3">
      <div class="d-flex flex-align-flex-start">
        <div class="d-flex col-4 flex-align-center">
          <img class="icon" width="25" height="24" src="../../../assets/icons/ic-flag.svg" alt="" />
          <div class="col fz-22-m gray1 ml-8">活動目標</div>
        </div>
        <div class="col-6">
          <p class="fz-16-l gray2">
            每年皆會舉辦學員作品競賽，優秀者可獲得獎金及精裝年鑑。
            精裝及打凹樣式提高整本書籍珍貴感，收錄所有優勝者作品參賽選手可當獎品紀念外，分校同仁於招生介紹時也能達到行銷推廣作用。
          </p>
        </div>
      </div>
    </section>

    <!-- 設計發想 -->
    <section class="container-1000 pt-80 pb-80 border-top-gray3">
      <div class="d-flex flex-align-flex-start">
        <div class="d-flex col-4 flex-align-center">
          <img class="icon" width="25" height="25" src="../../../assets/icons/ic-idea.svg" alt="" />
          <div class="col fz-22-m gray1 ml-8">設計發想</div>
        </div>
        <div class="d-flex col-6 flex-justify-end">
          <p class="fz-16-l gray2">
            於 2021
            年推出的學員作品年鑑，找尋素材參考風格及書籍裝幀設計，由學員、時事等切角角設計發想
            3 個方向製作成不同風格再進行內部票選。
          </p>
          <img
            class="pt-60 w-100"
            src="../../../assets/works/printing1/c_1-3.jpg"
            alt=""
          />
          <p class="lh-20 fz-14-l ls-5 gray2 pt-16">參考圖</p>
        </div>
      </div>
    </section>

    <!-- 設計理念 -->
    <section class="container-1000 pt-80 pb-80 border-top-gray3">
      <div class="d-flex flex-align-flex-start">
        <div class="d-flex col-4 flex-align-center">
          <img class="icon" width="25" height="25" src="../../../assets/icons/ic-think.svg" alt="" />
          <div class="col fz-22-m gray1 ml-8">設計理念</div>
        </div>
        <div class="col-6">
          <ElementTag :class="''">A 款設計</ElementTag>
          <ul class="fz-16-l gray2 pt-16">
            <ElementStarItem>
              為最終定案款，整體以暗色調為基底，代表可能曾經遇到的創作瓶頸、2021
              年疫情的波及影響；將 2021
              字體延長並以亮色調提點象徵繼續努力奔跑迎向彩色未來，其中漸層融合及小圓點則代表學員與聯成電腦的每一位的努力付出才有這本年鑑的產出。
            </ElementStarItem>
          </ul>
        </div>
        <img
          class="pt-60 w-100"
          src="../../../assets/works/printing1/c_1-4.jpg"
          alt=""
        />
        <img
          class="pt-60 w-100"
          src="../../../assets/works/printing1/c_1-5.jpg"
          alt=""
        />
        <div class="d-flex flex-justify-space-between">
          <div class="col-45">
            <ElementTag :class="'mt-30'">B 款設計</ElementTag>
            <ul class="fz-16-l gray2 pt-16">
              <ElementStarItem>
                以白色背景當畫布，主體使用彩色繽紛的幾何形狀與顏色呈現多彩多姿的學員作品，今年呈現豐富的作品，期許繼續努力用創意才能填滿空白畫布。
              </ElementStarItem>
            </ul>
          </div>
          <div class="col-45">
            <ElementTag :class="'mt-30'">C 款設計</ElementTag>
            <ul class="fz-16-l gray2 pt-16">
              <ElementStarItem>
                採同心圓放射狀，每一個幾何形狀代表學員在廣大宇宙中獨特的存在；創作就像宇宙，需要不停學習與同儕一同成長，期許學員在未來都是最獨特耀眼的那顆星星。
              </ElementStarItem>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <!-- 設計產出 -->
    <section class="container-1000 pt-80 pb-80 border-top-gray3">
      <div class="d-flex flex-align-flex-start">
        <div class="d-flex col-4 flex-align-center">
          <img class="icon" width="24" height="25" src="../../../assets/icons/ic-layout.svg" alt="" />
          <div class="col fz-22-m gray1 ml-8">設計產出</div>
        </div>
        <div class="col-6">
          <p class="fz-16-l gray2">
            封面視覺定案後，將學員作品分類微調收錄進內頁，依照作品不同視覺採用不同編排方式，每一位學員都有一整面的版面搭配創作理念。
          </p>
        </div>
        <img
          class="pt-60 w-100"
          src="../../../assets/works/printing1/c_1-6.jpg"
          alt=""
        />
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
      title: "作品集 - 印刷設計: 2021 學員年鑑設計",
      description: "",
    });
  },
});
</script>
