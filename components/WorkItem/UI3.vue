<template>
  <NuxtLink
    :to="{ name: 'works-contents-ui3' }"
    class="mb-60 d-flex border border-radius-8 overflow-x-hidden"
    title="UI設計 - 英日西韓語，外語振興補助"
  >
    <div class="ui_1 col-6 border-right bg-blue2 p-relative">
      <img
        class="p-absolute ui-img"
        src="../../assets/works/ui3/a_3-1.png"
        alt=""
      />
    </div>
    <div class="col-4 pt-60 pl-60">
      <div class="lh-20 fz-14-r ls-10 blue1">UI設計</div>
      <h2 class="fz-30-b gray1 pt-16">英日西韓語<br />外語振興補助</h2>
      <div class="pt-16">
        <ElementTag>Web</ElementTag>
        <ElementTag>RWD</ElementTag>
        <ElementTag>Landing Page</ElementTag>
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
.ui-img {
  max-width: 100%;
  max-height: 90%;
  bottom: 2%;
  left: 0;
  right: 0;
  margin: auto;
}
</style>
