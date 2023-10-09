<template>
  <section class="section-title light" data-v-642ce63b="">
    <div class="default-block wrapper">
      <div class="text">
        <div>
          <h2 class="title title-2">FAQ</h2>
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
  line-height: 2.5rem;
  font-weight: 700;
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
    line-height: 1.6rem;
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