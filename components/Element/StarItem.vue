<template>
  <component :is="tag" class="star-item" v-bind="$attrs">
    <div class="star-block">
      <div class="star-block-title" v-if="$slots.title">
        <slot name="title"></slot>
      </div>
      <div class="star-block-main">
        <slot name="default"></slot>
      </div>
    </div>
  </component>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  props: {
    tag: {
      type: [String, Object],
      required: false,
      default: "li",
    },
  },
});
</script>

<style lang="scss" scoped>
.star-item {
  &,
  & > .star-block {
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-star;
    align-content: flex-star;
  }

  & > .star-block {
    &:before,
    & > .star-block-title {
      white-space: nowrap;
      flex: 0 0 auto;
      max-width: 100%;
    }

    &,
    & > .star-block-main {
      flex-basis: 0;
      -webkit-box-flex: 1;
      -ms-flex-positive: 1;
      flex-grow: 1;
      max-width: 100%;
    }

    &:before {
      content: "✦";
      color: #fe8ce8;
      padding-right: 20px;
    }

    & > .star-block-title:after {
      content: "｜";
      display: inline;
    }
  }

  &.no-star > .star-block:before {
    display: none;
  }
}
</style>
