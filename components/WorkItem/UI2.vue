<template>
  <NuxtLink
    to="/about"
    class="mb-60 d-flex border border-radius-8 overflow-x-hidden"
    title="UI設計 - 青年充電再出發，外語能力大躍進"
  >
    <div class="col-6 border-right bg-green"></div>
    <div class="d-flex col-4 pt-60 pl-60">
      <div class="col-10 fz-14-r-10 blue1">UI設計</div>
      <div class="col">
        <h2 class="fz-30-b gray1 pt-16">
          青年充電再出發<br />外語能力大躍進
        </h2>
        <div class="pt-8">
          <ElementTag>Web</ElementTag>
          <ElementTag>RWD</ElementTag>
          <ElementTag>Landing Page</ElementTag>
          <ElementTag>學習外語</ElementTag>
        </div>
        <div class="mt-80 mb-60">
          <ElementBtn :tag="'span'" :class="'more-btn'">
            <span class="fz-14-r-10">READ MORE</span>
          </ElementBtn>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
