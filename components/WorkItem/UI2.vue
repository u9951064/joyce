<template>
  <NuxtLink
    :to="{ name: 'works-contents-ui2' }"
    class="mb-60 d-flex border border-radius-8 overflow-x-hidden"
    title="UI設計 - 英日西韓語，外語振興補助"
  >
    <div class="ui_1 col-6 border-right bg-blue2 p-relative">
      <img
        class="p-absolute ui-img"
        src="../../assets/works/ui2/a_2-1.png"
        alt=""
      />
    </div>
    <div class="d-flex col-4 pt-60 pl-60">
      <div class="col-10 fz-14-r-10 blue1">UI設計</div>
      <div class="col">
        <h2 class="fz-30-b gray1 pt-16">台鐵 e 訂通 App <br />Redesign</h2>
        <div class="pt-16">
          <ElementTag>APP</ElementTag>
          <ElementTag>Redesign</ElementTag>
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
.ui-img {
  height: 100%;
  right: 0;
  top: 0;
  bottom: 0;
}
</style>
