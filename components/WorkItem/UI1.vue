<template>
  <NuxtLink
    :to="{ name: 'works-contents-ui1' }"
    class="mb-60 d-flex border-gray1 border-radius-8 overflow-x-hidden"
    title="UI設計 - Hi BUS!全台公車動態時刻查詢應用服務"
  >
    <div
      class="
        col-6 col-sm-10
        h-min220
        border-right-gray1 border-sm-right-none
        bg-gray
        p-relative
        overflow-hidden
      "
    >
      <img
        class="p-absolute ui-img"
        src="@/assets/works/ui1/a_1-1.png"
        alt=""
      />
    </div>
    <div class="col-4 col-sm-10 pt-60 pl-60 p-sm-24">
      <div class="lh-20 fz-14-r ls-10 blue1">UI設計</div>
      <h2 class="fz-30-b gray1 pt-16">
        Hi BUS!全台公車動態<span class="d-block d-sm-inline" />時刻查詢應用服務
      </h2>
      <div class="pt-16">
        <ElementTag>RWD</ElementTag>
        <ElementTag>The F2E 3rd</ElementTag>
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
