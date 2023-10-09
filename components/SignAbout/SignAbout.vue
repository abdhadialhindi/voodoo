<template>
  <section>
    <div class="wrapper">
      <div class="text">
        <h1 class="title">impredit a venenatis vitae</h1>
        <p class="subtitle">Vivmus elementum semper nisi aenean</p>
      </div>
      <div class="btn">
        <v-btn color="primary" size="large"> Contact us</v-btn>
        <v-btn size="large" class="border-btn"><span class="color">presskit</span></v-btn>
      </div>
    </div>
  </section>
</template>
<style scoped>
.wrapper {
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.text {
    width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
}
.title {
    text-transform: uppercase;
  color: #10131b;
  color: var(--grey-900);
  font-family: Poppins, ui-sans-serif, system-ui, -apple-system, Segoe UI,
    Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont,
    "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: 700;
  font-size: 48px;
}
.subtitle {
    text-align: center;
    width: 66.666666666%;
  font-family: Lato, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto,
    Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, "Segoe UI",
    "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 32px;
  font-weight: 300;
  color: #353c4c;
  color: var(--grey-700);
}
.btn {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
}
.border-btn {
    border: 1px solid var(--blue-500);
}
.color {
    color: var(--blue-500);
}
@media (max-width: 768px) {
  .wrapper {
    margin-left: 24px !important;
    margin-right: 24px !important;
  }
}
@media (max-width: 1024px) {
  .wrapper {
    margin-left: 40px;
    margin-right: 40px;
  }
  .title {
    font-size: 16px;
  }
}
@media (max-width: 1280px) {
  .wrapper {
    max-width: 928px;
  }
}
</style>