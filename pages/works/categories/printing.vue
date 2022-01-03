<template>
  <ul class="work-printing">
    <li><WorkItemPrinting1 /></li>
    <li><WorkItemPrinting2 /></li>
  </ul>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";
import { useHeader } from "~/compatible/useHeader";

export default defineComponent({
  head: {},
  setup() {
    const meta = useHeader({
      title: "作品集 - 印刷設計",
      description:
        "2021學員年鑑設計：透過精裝及打凹樣式提高整本書籍珍貴感，收錄所有優勝者作品參賽選手可當獎品紀念外，分校同仁於招生介紹時也能達到行銷推廣作用。TAICHUNG 美學，從中可見：打造台中城市觀光品牌，透過副標「美學，從中可見。」找尋台中人與人之間互動與生活美學。",
    });
  },
});
</script>
