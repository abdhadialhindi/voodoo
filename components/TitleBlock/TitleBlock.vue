<template>
  <section   class="section-title dark">
    <div  class="default-block wrapper">
      <!---->
      <div  class="text">
        <div >
          <!---->
          <h2  class="title title-2">
            Our full-stack platform
          </h2>
        </div>
        <div  class="rich-text paragraph-1">
          <p>
            We have built a unique platform to help you create the next
            generation of mobile blockchain games, leveraging our market leader
            expertise.
          </p>
        </div>
        <!---->
      </div>
    </div>
  </section>
</template>
<style scoped>
.dark {
  background-color: var(--grey-900);
}
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 24px;
  gap: 24px;
  max-width: 1024px;
  margin: 0 auto;
}
.text {
  display: flex;
  flex-direction: column;
  grid-gap: 24px;
  gap: 24px;
  text-align: center;
  width: 83.3333333333%;
}
.title {
  color: var(--grey-000);
  font-family: Poppins, ui-sans-serif, system-ui, -apple-system, Segoe UI,
    Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont,
    "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 48px;
  line-height: 3.6rem;
  font-weight: 700;
}
.rich-text {
  color: var(--grey-200);
  font-family: Lato, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto,
    Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, "Segoe UI",
    "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 24px;
  line-height: 3rem;
  font-weight: 400;
}
.rich-text p:last-child {
  margin-bottom: 0;
}
@media (max-width: 768px) {
  .wrapper {
    margin-left: 24px;
    margin-right: 24px;
  }
}
@media (max-width: 1024px) {
  .wrapper {
    margin-left: 40px;
    margin-right: 40px;
    grid-gap: 16px;
    gap: 16px;
  }
  .title {
    font-size: 28px;
    line-height: 2.2rem;
  }
  .rich-text {
    font-size: 18px;
    line-height: 2.2rem;
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