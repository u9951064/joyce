<template>
  <component :is="tag" class="tag">
    <slot></slot>
  </component>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    tag: {
      type: [String, Object],
      required: false,
      default: 'div',
    }
  },
})
</script>

<style lang="scss" scoped>
.tag {
  display: inline-block;
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 0.04em;
  border: 1px solid $gray3;
  color: $gray2;
  border-radius: 1000rem;
  padding: 10px 16px;
}
</style>
