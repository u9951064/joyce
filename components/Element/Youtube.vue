<template>
  <VuePlyr>
    <div class="plyr__video-embed" id="player">
      <iframe
        :src="iframeUrl"
        title="YouTube video player"
        frameborder="0"
        allowfullscreen
        allowtransparency
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  </VuePlyr>
</template>

<script>
import { computed, defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  props: {
    videoId: {
      type: String,
      required: true,
    },
    autoplay: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup(props) {
    const iframeUrl = computed(() => {
      const result = new URL(
        `https://www.youtube-nocookie.com/embed/${props.videoId}`
      );
      result.searchParams.append("autoplay", props.autoplay ? "1" : "0");
      result.searchParams.append("iv_load_policy", 3);
      result.searchParams.append("modestbranding", 1);
      result.searchParams.append("playsinline", 1);
      result.searchParams.append("rel", 0);
      result.searchParams.append("enablejsapi", 1);
      result.searchParams.append("origin", process.env.host);

      return result.toString();
    });

    return {
      iframeUrl,
    };
  },
});
</script>

<style lang="scss" scoped>
</style>
