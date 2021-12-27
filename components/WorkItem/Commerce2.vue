<template>
  <NuxtLink
    :to="{ name: 'works-contents-commerce2' }"
    class="mb-60 d-flex border-gray1 border-radius-8 overflow-x-hidden"
    title="廣告設計 - Figma新手指南UI/UX設計思維"
  >
    <div
      class="
        col-6 col-sm-10
        h-min220
        border-right-gray1 border-sm-right-none
        bg-yellow
        p-relative
        overflow-hidden
      "
    >
      <img
        class="p-absolute commerce-img"
        src="../../assets/works/commerce2/b_2-1.gif"
        alt=""
      />
    </div>
    <div class="col-4 col-sm-10 pt-60 pl-60 p-sm-24">
      <div class="lh-20 fz-14-r ls-10 blue1">廣告設計</div>
      <h2 class="fz-30-b gray1 pt-16">Figma新手指南<br />UI/UX設計思維</h2>
      <div class="pt-16">
        <ElementTag>官網商品</ElementTag>
        <ElementTag>Figma課程</ElementTag>
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
  width: 85%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
</style>
