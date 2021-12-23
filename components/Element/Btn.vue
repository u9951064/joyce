<template>
  <component :is="tag" class="btn" v-bind="$attrs">
    <slot></slot>
  </component>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  props: {
    tag: {
      type: [String, Object],
      required: false,
      default: "a",
    },
  },
});
</script>

<style lang="scss" scoped>
.btn {
  cursor: pointer;
  border: 1px solid $gray1;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 2px 2px 0 0 $gray1;
  transition: all 200ms cubic-bezier(0.608, -0.005, 0.415, 0.989);
  color: $gray1;
  font-weight: 500;
  display: inline-block;
  padding: 12px 40px;

  & > * {
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }

  &:hover {
    box-shadow: 1px 1px 0 0 $gray1;
    transform: translate(1px, 1px);
  }
}
</style>
