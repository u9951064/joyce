<template>
  <div :class="tagClass">
    <slot></slot>
  </div>
</template>

<script>
import { computed, defineComponent, toRef } from "@nuxtjs/composition-api";

export default defineComponent({
  props: {
    class: {
      type: [String, Object],
      required: false,
      nullable: true,
    },
  },
  setup(props) {
    const classList = toRef(props, "class");

    const tagClass = computed(() => {
      const classes = {
        tag: true,
      };
      if (typeof classList.value === "string") {
        classList.value.split(" ").forEach((c) => {
          classes[c] = true;
        });
      } else {
        Object.assign(classes, classList.value);
      }
      return classes;
    });

    return {
      title,
      linkHref,
      linkTarget,
      tagClass,
    };
  },
});
</script>

<style lang="scss" scoped>
.tag {
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 0.04em;
  border: 1px solid $gray3;
  color: $gray2;
  border-radius: 1000rem;
  padding: 10px 16px;
}
</style>
