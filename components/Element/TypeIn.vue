<template>
  <TypeInKernel
    @ended="setNext"
    :latter="currentLabel"
    :speed="speed"
    ref="kernel"
    v-bind="$attrs"
  />
</template>

<script>
import {
  defineComponent,
  onMounted,
  ref,
  computed,
} from "@nuxtjs/composition-api";
import TypeInKernel from "../Kernel/TypeInKernel.vue";

export default defineComponent({
  components: {
    TypeInKernel,
  },
  props: {
    labels: {
      type: [Array],
      required: true,
    },
    speed: {
      type: [Number],
      required: false,
      default: 650,
    }
  },
  setup(props) {
    const currentIndex = ref(0);
    const setNext = () => {
      if (props.labels.length === 0) {
        currentIndex.value = 0;
      } else {
        currentIndex.value = (currentIndex.value + 1) % props.labels.length;
        kernel.value.execute();
      }
    };
    const currentLabel = computed(() => {
      if (props.labels.length === 0) {
        return "";
      }
      let index = currentIndex.value % props.labels.length;
      return props.labels[index];
    });

    const kernel = ref(null);
    onMounted(() => {
      kernel.value.execute();
    });

    return {
      kernel,
      currentLabel,
      setNext,
    };
  },
});
</script>
