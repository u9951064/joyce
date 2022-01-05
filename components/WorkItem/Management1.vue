<template>
  <NuxtLink
    :to="{ name: 'works-contents-management1' }"
    class="mb-60 d-flex border-gray1 border-radius-8 overflow-x-hidden"
    title="專案管理 - 導入敏捷式開發專案"
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
      <img
        class="w-100"
        width="1102"
        height="715"
        src="@/assets/works/management1/d_1-1.png"
        alt="導入敏捷式開發專案封面"
      />
    </div>
    <div class="col-4 col-sm-10 pt-60 pl-60 p-sm-24">
      <div class="lh-20 fz-14-r ls-10 blue1">專案管理</div>
      <h2 class="fz-30-b gray1 pt-16">導入敏捷式開發專案</h2>
      <div class="pt-16">
        <ElementTag>Agile</ElementTag>
        <ElementTag>Scrum</ElementTag>
      </div>
      <div class="mt-80 mb-60 mt-sm-40 mb-sm-10">
        <ElementBtn :tag="'span'" class="more-btn">
          <span class="lh-20 fz-14-r ls-10">READ MORE</span>
        </ElementBtn>
      </div>
    </div>
  </NuxtLink>
</template>
