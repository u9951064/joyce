<template>
  <a
    :class="linkClass"
    :title="title"
    :href="linkHref"
    :target="linkTarget"
  >
    <slot></slot>
  </a>
</template>

<script>
import { computed, defineComponent, toRef } from "@nuxtjs/composition-api";

export default defineComponent({
  props: {
    title: {
      type: String,
      required: false,
      nullable: true,
    },
    href: {
      type: String,
      required: false,
      nullable: true,
    },
    target: {
      type: String,
      required: false,
      nullable: true,
      default: '_self',
    },
    class: {
      type: [String, Object],
      required: false,
      nullable: true,
    }
  },
  setup(props) {
    const title = toRef(props, "title");
    const href = toRef(props, "href");
    const target = toRef(props, "target");
    const classList = toRef(props, "class");

    const linkTarget = computed(() => {
      return target.value ? target.value : "_self";
    });

    const linkHref = computed(() => {
      return href.value ? href.value : "javascript:void;";
    });

    const linkClass = computed(() => {
      const classes = {
        btn: true,
      };
      if(typeof classList.value === 'string') {
        classList.value.split(' ').forEach((c) => {
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
      linkClass,
    };
  },
});
</script>

<style lang="scss" scoped>
.btn {
  border: 1px solid $gray1;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 2px 2px 0 0 $gray1;
  transition: all 200ms cubic-bezier(0.608, -0.005, 0.415, 0.989);
  color: $gray1;
  font-weight: 500;
  display: inline-block;
  padding: 16px 40px;
}

.btn:hover {
  box-shadow: 1px 1px 0 0 $gray1;
  transform: translate(1px, 1px);
}

.btn > * {
    display: inline-flex;
    justify-content: center;
    align-items: center;
}
</style>
