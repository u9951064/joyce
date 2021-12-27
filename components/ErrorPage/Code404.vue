<template>
  <div class="text-align-center mt-80 mb-80">
    <img
        class="h-min250 w-min250"
        src="@/assets/images/joyce-illustration.svg"
        alt=""
      />
    <h1 class="mb-20 mt-20">Oh! 這個頁面不存在</h1>
    <ElementBtn tag="NuxtLink" :to="{name: 'index'}">點此回到首頁</ElementBtn>
  </div>
</template>
