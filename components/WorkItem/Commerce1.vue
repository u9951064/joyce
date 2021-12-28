<template>
  <NuxtLink
    :to="{ name: 'works-contents-commerce1' }"
    class="mb-60 d-flex border-gray1 border-radius-8 overflow-x-hidden"
    title="廣告設計 - 學習給你 COW"
  >
    <div
      class="
        col-6 col-sm-10
        h-min220
        border-right-gray1 border-sm-right-none
        bg-red
        p-relative
        overflow-hidden
      "
    >
      <img
        class="p-absolute commerce-img"
        width="707"
        height="393"
        src="@/assets/works/commerce1/b_1-1.png"
        alt=""
      />
    </div>
    <div class="col-4 col-sm-10 pt-60 pl-60 p-sm-24">
      <div class="lh-20 fz-14-r ls-10 blue1">廣告設計</div>
      <h2 class="fz-30-b gray1 pt-16">學習給你 COW</h2>
      <div class="pt-16">
        <ElementTag>過年檔期活動</ElementTag>
        <ElementTag>優惠促銷</ElementTag>
        <ElementTag>各通路素材</ElementTag>
      </div>
      <div class="mt-80 mb-60 mt-sm-40 mb-sm-10">
        <ElementBtn :tag="'span'" class="more-btn">
          <span class="lh-20 fz-14-r ls-10">READ MORE</span>
        </ElementBtn>
      </div>
    </div>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.commerce-img {
  width: 80%;
  bottom: 5%;
  left: 0;
  right: 0;
  margin: auto;
}
</style>
