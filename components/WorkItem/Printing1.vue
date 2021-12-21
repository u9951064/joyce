<template>
  <NuxtLink
    :to="{ name: 'works-contents-printing1' }"
    class="mb-60 d-flex border border-radius-8 overflow-x-hidden"
    title="平面設計 - 2021 學員年鑑設計"
  >
    <div class="ui_1 col-6 border-right bg-purple">
      <img
        class="printing-img"
        src="../../assets/works/printing1/c_1-1.png"
        alt=""
      />
    </div>

    <div class="col-4 pt-60 pl-60">
      <div class="fz-14-r-10 blue1">平面設計</div>
      <h2 class="fz-30-b gray1 pt-16">2021 學員年鑑設計</h2>
      <div class="pt-16">
        <ElementTag>年鑑設計</ElementTag>
      </div>
      <div class="mt-80 mb-60">
        <ElementBtn :tag="'span'" class="more-btn">
          <span class="fz-14-r-10"> READ MORE</span>
        </ElementBtn>
      </div>
    </div>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.printing-img {
  width: 80%;
}
</style>
