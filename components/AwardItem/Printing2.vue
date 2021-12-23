<template>
  <NuxtLink
    :to="{ name: 'works-contents-printing2' }"
    class="mb-60 d-flex border border-radius-8 overflow-x-hidden"
    title="平面設計 - TAICHUNG 美學，從中可見"
  >
    <div class="col-4 border-right bg-blue2 p-relative">
      <img
        class="p-absolute printing-img"
        src="../../assets/works/printing2/c_2-1.png"
        alt=""
      />
    </div>

    <div class="col p-30">
      <h2 class="fz-30-b gray1">TAICHUNG</h2>
      <ul class="pt-16 fz-16-l gray2">
        <ElementStarItem>2019 德國紅點設計 | 品牌暨傳達設計紅點獎</ElementStarItem>
        <ElementStarItem>2019 泰達盃青年創意設計大賽 | 入圍</ElementStarItem>
        <ElementStarItem>2019 放視大賞 - 平面傳達設計組  | 入圍</ElementStarItem>
      </ul>
      <p class="pt-16 fz-16-l gray2">
        打造台中城市觀光品牌，透過副標「美學，從中可見。」可以找尋台中人與人之間互動與生活的美學。
      </p>
    </div>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.printing-img {
  width: 90%;
  right: 0;
  left: 5%;
  bottom: 0;
}
</style>
