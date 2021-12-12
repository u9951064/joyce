<template>
  <NuxtLink
    :to="{name: 'works-contents-management1'}"
    class="mb-60 d-flex border border-radius-8 overflow-x-hidden"
    title="專案管理 - 導入敏捷式開發專案"
  >
    <div class="ui_1 col-6 border-right bg-blue2">
      <img class="w-100" src="../../assets/works/management1/d_1-1.png" alt="" />
    </div>
    <div class="d-flex col-4 pt-60 pl-60">
      <div class="col-10 fz-14-r-10 blue1">專案管理</div>
      <div class="col">
        <h2 class="fz-30-b gray1 pt-16">導入敏捷式開發專案</h2>
        <div class="pt-16">
          <ElementTag>align</ElementTag>
          <ElementTag>scrum</ElementTag>
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
