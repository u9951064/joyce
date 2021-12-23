<template>
  <footer class="pageFooter pt-60 pb-60">
    <div class="container-800">
      <h2 class="fz-14-b gray2 text-align-center">CONTACT ME</h2>
      <div class="d-flex w-40 flex-justify-space-between m-auto pt-24">
        <div class="col-auto">
          <ElementBtn
            tag="span"
            class="footer-p"
            title="make a phone call"
            @click.native="makeCall"
          >
            <span class="lh-20 fz-14-r ls-10">
              <img class="d-block" src="../assets/icons/ic-phone.svg" alt="" />
            </span>
          </ElementBtn>
        </div>
        <div class="col-auto">
          <ElementBtn
            tag="span"
            class="footer-p"
            title="send mail"
            @click.native="sendMail"
          >
            <span class="lh-20 fz-14-r ls-10">
              <img class="d-block" src="../assets/icons/ic-mail.svg" alt="" />
            </span>
          </ElementBtn>
        </div>
        <div class="col-auto">
          <ElementBtn
            :href="joyceLinkIn"
            class="footer-p"
            title="LinkIn"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span class="lh-20 fz-14-r ls-10">
              <img class="d-block" src="../assets/icons/ic-linkin.svg" alt="" />
            </span>
          </ElementBtn>
        </div>
      </div>
    </div>
    <p class="lh-20 fz-14-l ls-5 gray2 pt-40 text-align-center">
      Copyright © 2021 Joyce. ALL Rights Reserved.
    </p>
  </footer>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";
import { useProfileInfo } from "@/compatible/useProfileInfo";

export default defineComponent({
  setup() {
    return {
      ...useProfileInfo(),
    };
  },
});
</script>

<style lang="scss" scoped>
footer.pageFooter {
  background: $gray4;

  & .footer-p {
    padding: 12px;
  }
}
</style>
