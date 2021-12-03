<template>
  <header class="page-header">
    <div class="pt-24 pb-16 fz-14-b bg-white nav-keeper">
      <nav class="p-fixed container-1000 d-flex flex-align-center flex-justify-space-between pt-24 pb-16">
        <div class="col-auto">
          <NuxtLink to="/works" class="gray2" title="回首頁">
            <img class="" src="@/assets/images/logo.svg" alt="Joyce's Logo" />
          </NuxtLink>
        </div>
        <ul class="d-flex flex-align-center fz-14-b">
          <li>
            <NuxtLink to="/works" class="gray2" title="作品集">WORKS</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" class="ml-24 gray2" title="關於我">ABOUT</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/resume" class="ml-24 gray2" title="履歷表">RESUME</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header.page-header {
  & > .nav-keeper:before {
    content: '\200B';
    display: block;
  }
}
</style>
