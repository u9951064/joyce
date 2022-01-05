<template>
  <NuxtLink
    :to="{ name: 'works-contents-ui1' }"
    class="mb-60 d-flex border-gray1 border-radius-8 overflow-x-hidden"
    title="UI設計 - Hi BUS!全台公車動態時刻查詢應用服務"
  >
    <div
      class="
        col-4 col-sm-10
        border-right-gray1 border-sm-right-none
        bg-gray
        p-relative
        overflow-hidden
        h-min220
      "
    >
      <picture>
        <source srcset="@/assets/works/ui1/a_1-1.webp" type="image/webp" />
        <img
          class="p-absolute ui-img"
          width="1472"
          height="750"
          loading="lazy"
          src="@/assets/works/ui1/a_1-1.png"
          alt="Hi BUS! 作品封面"
        />
      </picture>
    </div>
    <div class="col col-sm-10 p-30">
      <h2 class="fz-22-m gray1">Hi BUS!</h2>
      <ul class="pt-16 fz-16-l gray2">
        <ElementStarItem
          >2021 THE F2E 3rd 前端 &amp; UI 修煉精神時光屋 | 團體組第 1
          名</ElementStarItem
        >
      </ul>
      <p class="pt-16 fz-16-l gray2">
        與 1 名前端工程師報名參加由六角學院舉辦的「 THE F2E 3rd 前端 &amp; UI
        修煉精神時光屋 」團體組競賽。針對第三道題「 全台公車動態時刻查詢應用服務
        」進行研究、設計與開發。
      </p>
    </div>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.ui-img {
  max-width: 115%;
  max-height: 90%;
  left: 0;
  right: -15%;
  top: 10%;
  bottom: 0;
  margin: auto;
}
</style>
