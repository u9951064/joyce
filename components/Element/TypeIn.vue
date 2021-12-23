<template>
  <span
    class="type-in"
    :class="{
      active: activeIndex <= currentChars.length,
      finished: activeIndex > currentChars.length,
    }"
    >{{ content }}</span
  >
</template>

<script>
import {
  defineComponent,
  onMounted,
  ref,
  computed,
  onUnmounted,
} from "@nuxtjs/composition-api";

export default defineComponent({
  props: {
    labels: {
      type: [Array],
      required: true,
    },
    speed: {
      type: [Number],
      required: false,
      default: 650,
    },
  },
  setup(props) {
    const currentIndex = ref(0);
    const currentChars = computed(() => {
      if (props.labels.length === 0) {
        return [];
      }
      let index = currentIndex.value % props.labels.length;
      return props.labels[index].split("");
    });

    const activeIndex = ref(0);
    const content = computed(() => {
      return currentChars.value
        .filter((c, i) => i < activeIndex.value)
        .join("");
    });

    const doTypeIn = () => {
      if (props.labels.length === 0) {
        return;
      }
      if (activeIndex.value > currentChars.value.length + 1) {
        currentIndex.value = (currentIndex.value + 1) % props.labels.length;
        activeIndex.value = 0;
      } else {
        activeIndex.value = activeIndex.value + 1;
      }
    };

    const timer = ref(null);
    const clearTimer = () => {
      try {
        clearInterval(timer.value);
      } catch (e) {
      } finally {
        timer.value = null;
      }
    };

    const setUpTimer = () => {
      activeIndex.value = 0;
      currentIndex.value = 0;
      if (!timer.value) {
        clearTimer();
      }
      timer.value = setInterval(doTypeIn, props.speed);
    };

    onMounted(() => {
      clearTimer();
      setUpTimer();
    });

    onUnmounted(() => {
      clearTimer();
    });

    return {
      timer,
      activeIndex,
      currentChars,
      content,
    };
  },
});
</script>

<style lang="scss" scoped>
.type-in {
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
    background-color: #34aefa;
    color: #fff;
  }

  @keyframes blink {
    0% {
      border-right-color: $gray1;
    }
    64% {
      border-right-color: $gray1;
    }
    65% {
      border-right-color: rgba(255, 255, 255, 0);
    }
    100% {
      border-right-color: rgba(255, 255, 255, 0);
    }
  }
}
</style>
