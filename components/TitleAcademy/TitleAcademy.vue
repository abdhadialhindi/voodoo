<template>
  <section class="section-title light">
    <div class="default-block wrapper">
      <div class="text">
        <div>
          <h2 class="title title-2">The Voodoo Academy program</h2>
        </div>
        <div class="rich-text paragraph-1">
          <p>
            Fast-track your way to the top of the industry directly with our
            Publishing Team, with exclusive online courses, coaching sessions
            and financial rewards
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
  font-family: Poppins, ui-sans-serif, system-ui, -apple-system, Segoe UI,
    Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont,
    "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 48px;
  line-height: 2.8rem;
  font-weight: 700;
}
.rich-text {
  color: var(--grey-700);
  font-family: Lato, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto,
    Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, "Segoe UI",
    "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 24px;
  line-height: 2rem;
  font-weight: 400;
}
.rich-text p:last-child {
  margin-bottom: 0;
}
@media (max-width: 768px) {
  .wrapper {
    margin-left: 24px !important;
    margin-right: 24px !important;
  }
}
@media (max-width: 1024px) {
  .wrapper {
    grid-gap: 16px;
    gap: 16px;
    margin-left: 40px;
    margin-right: 40px;
  }
  .title {
    font-size: 28px;
    line-height: 2rem;
  }
  .rich-text {
    width: 100%;
    font-size: 18px;
    line-height: 2rem;
  }
}
@media (max-width: 1280px) {
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