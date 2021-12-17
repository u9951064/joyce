<template>
  <img @click="openViewer" />
</template>

<script>
import { defineComponent, getCurrentInstance } from "@nuxtjs/composition-api";

export default defineComponent({
  setup(props, { attrs }) {
    const imageSrc = props.src || attrs.src;
    const imageAlt = props.alt || attrs.alt || "";
    const viewerApi = getCurrentInstance().proxy.$viewerApi;
    const openViewer = () => {
      viewerApi({
        images: [{
          src: imageSrc,
          alt: imageAlt,
        }],
        options: {
          inline: false,
          button: true,
          navbar: false,
          title: true,
          toolbar: true,
          tooltip: false,
          movable: false,
          zoomable: true,
          rotatable: false,
          scalable: false,
          transition: false,
          fullscreen: false,
          keyboard: false,
        },
      });
    };
    return {
      openViewer,
    };
  },
});
</script>

<style lang="scss" src="../../assets/scss/plugins/viewer.scss"></style>
