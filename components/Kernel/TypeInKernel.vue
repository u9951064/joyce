<template>
  <span
    class="type-in-item"
    :class="{
      active: activeIndex <= chars.length,
      finished: activeIndex > chars.length,
    }"
    v-text="content"
  >
  </span>
</template>

<script>
import {
  computed,
  defineComponent,
  onBeforeUnmount,
  ref,
} from "@nuxtjs/composition-api";

export default defineComponent({
  props: {
    latter: {
      type: String,
      required: true,
    },
    speed: {
      type: Number,
      required: true,
    }
  },
  setup(props, { emit }) {
    const activeIndex = ref(0);

    const chars = computed(() => {
      return props.latter.split("");
    });

    const content = computed(() => {
      return chars.value.filter((c, i) => i < activeIndex.value).join("");
    });

    let timer = ref(null);

    const clear = () => {
      try {
        clearInterval(timer.value);
      } catch (e) {
      } finally {
        timer.value = null;
        activeIndex.value = 0;
      }
    };

    const doTypeIn = () => {
      activeIndex.value = activeIndex.value + 1;
      if (activeIndex.value > chars.value.length + 1) {
        clear();
        emit("ended", true);
      }
    };

    const execute = () => {
      activeIndex.value = 0;
      if (!timer.value) {
        clear();
      }
      timer.value = setInterval(doTypeIn, props.speed);
    };

    onBeforeUnmount(() => {
      clear();
    });

    return {
      timer,
      activeIndex,
      chars,
      content,
      execute,
    };
  },
});
</script>

<style lang="scss" scoped>
.type-in-item {
  &.active:after {
    content: "\200B";
    display: inline-block;
    text-align: right;
    width: 3px;
    line-height: 1.1;
    animation-name: blink;
    animation-duration: 0.25s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    border-right-style: solid;
    border-right-width: 1px;
  }

  &.finished {
    background: rgba(58, 193, 255, 0.5);
  }

  @keyframes blink {
    0% {
      border-right-color: $gray1;
    }
    64% {
      border-right-color: $gray1;
    }
    65% {
      border-right-color: rgba(255,255,255,0);
    }
    100% {
      border-right-color: rgba(255,255,255,0);
    }
  }
}
</style>
