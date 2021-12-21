<template>
  <NuxtLink
    :to="{ name: 'works-contents-printing2' }"
    class="mb-60 d-flex border border-radius-8 overflow-x-hidden"
    title="平面設計 - TAICHUNG 美學，從中可見"
  >
    <div class="ui_1 col-6 border-right bg-blue2 p-relative">
      <img
        class="p-absolute printing-img"
        src="../../assets/works/printing2/c_2-1.png"
        alt=""
      />
    </div>

    <div class="col-4 pt-60 pl-60">
      <div class="fz-14-r-10 blue1">平面設計</div>
      <h2 class="fz-30-b gray1 pt-16">TAICHUNG<br/>美學，從中可見</h2>
      <div class="pt-16">
        <ElementTag>城市識別</ElementTag>
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
  width: 90%;
  right: 0;
  left: 5%;
  bottom: 0;
}
</style>
