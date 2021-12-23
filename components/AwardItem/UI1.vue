<template>
  <NuxtLink
    :to="{ name: 'works-contents-ui1' }"
    class="mb-60 d-flex border border-radius-8 overflow-x-hidden"
    title="UI設計 - Hi BUS!全台公車動態時刻查詢應用服務"
  >
    <div class="col-4 border-right bg-gray p-relative overflow-hidden h-min300">
      <img
        class="p-absolute ui-img"
        src="../../assets/works/ui1/a_1-1.png"
        alt=""
      />
    </div>
    <div class="col p-30">
      <h2 class="fz-30-b gray1">Hi BUS!</h2>
      <ul class="pt-16 fz-16-l gray2">
        <ElementStarItem
          >2021 第三屆 The F2E 前端 &amp; UI 修煉精神時光屋 | 團體組第 1
          名</ElementStarItem
        >
      </ul>
      <p class="pt-16 fz-16-l gray2">
        與 1 名前端工程師報名參加由六角學院舉辦的「 第三屆 The F2E 前端 &amp; UI
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
