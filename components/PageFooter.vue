<template>
  <footer class="pageFooter pt-60 pb-60">
    <div class="container-800">
      <h2 class="fz-14-b gray2 text-align-center">CONTACT ME</h2>
      <div class="d-flex w-40 flex-justify-space-between m-auto pt-24">
        <div class="col">
          <ElementBtn :href="'tel:+8869'" :class="'footer-p'" :title="'make a phone call'">
            <span class="fz-14-r-10">
              <img class="d-block" src="../assets/icons/ic-phone.svg" alt="" />
            </span>
          </ElementBtn>
          <a href="tel:"></a>
        </div>
        <div class="col">
          <ElementBtn :href="'http://'" :class="'footer-p'" :title="'send mail'">
            <span class="fz-14-r-10">
              <img class="d-block" src="../assets/icons/ic-mail.svg" alt="" />
            </span>
          </ElementBtn>
          <a href="mailto:"></a>
        </div>
        <div class="col">
          <ElementBtn :href="'http://'" :class="'footer-p'" :title="'LinkIn'">
            <span class="fz-14-r-10">
              <img class="d-block" src="../assets/icons/ic-linkin.svg" alt="" />
            </span>
          </ElementBtn>
        </div>
      </div>
    </div>
    <p class="fz-14-l-4 gray2 pt-40 text-align-center">
      Copyright © 2021 Joyce. ALL Rights Reserved.
    </p>
  </footer>
</template>

<style lang="scss" scoped>
footer.pageFooter {
  background: $gray4;

  & .footer-p {
    padding: 12px;
  }
}
</style>
