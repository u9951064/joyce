<template>
  <NuxtLink
    :to="{name: 'works-contents-commerce2'}"
    class="mb-60 d-flex border border-radius-8 overflow-x-hidden"
    title="廣告設計 - Figma新手指南UI/UX設計思維"
  >
    <div class="ui_1 col-6 border-right bg-yellow p-relative">
      <img class="p-absolute commerce-img" src="../../assets/works/commerce2/b_2-1.gif" alt="" />
    </div>
    <div class="d-flex col-4 pt-60 pl-60">
      <div class="col-10 fz-14-r-10 blue1">廣告設計</div>
      <div class="col">
        <h2 class="fz-30-b gray1 pt-16">Figma新手指南<br/>UI/UX設計思維</h2>
        <div class="pt-16">
          <ElementTag>官網商品</ElementTag>
          <ElementTag>Figma課程</ElementTag>
        </div>
        <div class="mt-80 mb-60">
          <ElementBtn :tag="'span'" :class="'more-btn'">
            <span class="fz-14-r-10"> READ MORE</span>
          </ElementBtn>
        </div>
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
