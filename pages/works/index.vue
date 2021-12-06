<template>
  <main>
    <section class="container-800">
      <div class="d-flex pt-120 border-bottom-gray1">
        <div class="col">
          <h1 class="fz-40-b gray1">Hi Ｉ’m Joyce!</h1>
          <div class="fz-16-l gray2 pt-16">
            我是名網頁視覺設計師，擅長 網頁設計<br />
            相信設計應兼顧產品一致性與易用性，為用戶帶來更棒的體驗。
          </div>
          <div class="pt-40">
            <ElementBtn :href="'/about'" :title="'關於我'">
              <span class="fz-14-r-10"
                >關於我
                <img
                  class="d-block ml-2"
                  src="../../assets/icons/ic-joyce.svg"
                  alt="關於我"
              /></span>
            </ElementBtn>
            <ElementBtn :href="'/resume'" :class="'ml-24'" :title="'下載履歷'">
              <span class="fz-14-r-10"
                >下載履歷
                <img
                  class="d-block ml-2"
                  src="../../assets/icons/ic-download.svg"
                  alt="關於我"
              /></span>
            </ElementBtn>
          </div>
        </div>
        <div class="col-auto pt-80">
          <img
            class="d-block"
            src="../../assets/images/joyce-illustration.svg"
            alt=""
          />
        </div>
      </div>
    </section>


  </main>
</template>
