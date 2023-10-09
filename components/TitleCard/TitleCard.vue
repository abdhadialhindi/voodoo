<template>
  <section class="section-title light">
    <div class="default-block wrapper">
      <div class="text">
        <div>
          <h3 class="title title-3">Rewards</h3>
        </div>
        <div class="rich-text paragraph-1">
          <p>
            The Voodoo Academy program offers various financial rewards and
            coaching sessions to support you and your future game studio
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.section-title {
    background-color: var(--grey-000);
}
.wrapper {
    max-width: 1024px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-gap: 24px;
    gap: 24px;
}
.text {
    width: 83.3333333333%;
    display: flex;
    flex-direction: column;
    grid-gap: 24px;
    gap: 24px;
    text-align: center;
}
.title {
    color: var(--grey-900);
    font-family: Poppins,ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,"Noto Sans","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    font-weight: 700;
    font-size: 40px;
    line-height: 2.8rem;
}
.rich-text {
    color: var(--grey-700);
    font-family: Lato,ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,"Noto Sans","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    font-size: 24px;
    line-height: 2rem;
    font-weight: 400;
}
.rich-text p:last-child {
    margin-bottom: 0;
}
@media (max-width:768px) {
    .wrapper {
        margin-left: 24px !important;
    margin-right: 24px !important;
    }
}
@media (max-width:1024px) {
    .wrapper {
        grid-gap: 16px;
    gap: 16px;
    margin-left: 40px;
    margin-right: 40px;
    }
    .title {
        font-size: 24px;
    line-height: 1.6rem;
    }
    .rich-text {
        font-size: 18px;
    line-height: 1.9rem;
    width: 100%;
    }
}
@media (max-width:1280px) {
    .wrapper {
        max-width: 928px;
    }
    .text {
        width: 100%;
    grid-gap: 16px;
    gap: 16px;
    }
}
</style>