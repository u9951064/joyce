<template>
  <NuxtLink
    :to="{ name: 'works-contents-commerce3' }"
    class="mb-60 d-flex border border-radius-8 overflow-x-hidden"
    title="廣告設計 - 進擊の繪師"
  >
    <div class="ui_1 col-6 border-right bg-purple p-relative">
      <img
        class="p-absolute commerce-img"
        src="../../assets/works/commerce3/b_3-1.png"
        alt=""
      />
    </div>
    <div class="col-4 pt-60 pl-60">
      <div class="lh-20 fz-14-r ls-10 blue1">廣告設計</div>
      <h2 class="fz-30-b gray1 pt-16">進擊の繪師</h2>
      <div class="pt-16">
        <ElementTag>免費講座</ElementTag>
      </div>
      <div class="mt-80 mb-60">
        <ElementBtn :tag="'span'" class="more-btn">
          <span class="lh-20 fz-14-r ls-10"> READ MORE</span>
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
