<template>
  <NuxtLink
    :to="{ name: 'works-contents-printing2' }"
    class="mb-60 d-flex border-gray1 border-radius-8 overflow-x-hidden"
    title="平面設計 - TAICHUNG 美學，從中可見"
  >
    <div
      class="
        col-6 col-sm-10
        h-min220
        border-right-gray1 border-sm-right-none
        bg-blue2
        p-relative
        overflow-hidden
      "
    >
      <picture>
        <source
          srcset="@/assets/works/printing2/c_2-1.webp"
          type="image/webp"
        />
        <img
          class="p-absolute printing-img w-90"
          width="1172"
          height="750"
          loading="lazy"
          src="@/assets/works/printing2/c_2-1.png"
          alt="TAICHUNG 美學，從中可見 作品封面"
        />
      </picture>
    </div>

    <div class="col-4 col-sm-10 pt-60 pl-60 p-sm-24">
      <div class="lh-20 fz-14-r ls-10 blue1">平面設計</div>
      <h2 class="fz-30-b gray1 pt-16">TAICHUNG<br />美學，從中可見</h2>
      <div class="pt-16">
        <ElementTag>城市識別設計</ElementTag>
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
.printing-img {
  right: 0;
  left: 5%;
  bottom: 0;
}
</style>
