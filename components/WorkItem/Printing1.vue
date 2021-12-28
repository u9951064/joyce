<template>
  <NuxtLink
    :to="{ name: 'works-contents-printing1' }"
    class="mb-60 d-flex border-gray1 border-radius-8 overflow-x-hidden"
    title="平面設計 - 2021 學員年鑑設計"
  >
    <div
      class="
        col-6 col-sm-10
        h-min220
        border-right-gray1 border-sm-right-none
        bg-purple
        p-relative
        overflow-hidden
      "
    >
      <img
        class="printing-img w-80"
        width="557"
        height="437"
        src="@/assets/works/printing1/c_1-1.png"
        alt=""
      />
    </div>

    <div class="col-4 col-sm-10 pt-60 pl-60 p-sm-24">
      <div class="lh-20 fz-14-r ls-10 blue1">平面設計</div>
      <h2 class="fz-30-b gray1 pt-16">2021 學員年鑑設計</h2>
      <div class="pt-16">
        <ElementTag>年鑑設計</ElementTag>
      </div>
      <div class="mt-80 mb-60 mt-sm-40 mb-sm-10">
        <ElementBtn :tag="'span'" class="more-btn">
          <span class="lh-20 fz-14-r ls-10">READ MORE</span>
        </ElementBtn>
      </div>
    </div>
  </NuxtLink>
</template>
