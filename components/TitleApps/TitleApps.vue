<template>
  <section class="container">
    <div class="text">
      <h1 class="title">Discover our apps</h1>
      <p class="subtitle">
        Our mission to entertain the world goes deeper than gaming. We create
        innovative and entertaining apps for everyday life.
      </p>
    </div>
  </section>
</template>
<style scoped>
.container {
  
  position: relative;
  top: -64px;
  background: linear-gradient(180deg, var(--blue-025), var(--grey-000));
  padding-top: 160px;
}

.text {
  max-width: 1024px;
  margin: 0 auto;
}

.title {
  text-align: center;
  color: #10131b;
  color: var(--grey-900);
  margin: 0 auto 48px;
  width: 66.6666666667%;
  font-family: Poppins, ui-sans-serif, system-ui, -apple-system, Segoe UI,
    Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont,
    "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 64px;
  line-height: 4.5rem;
  font-weight: 700;
}

.subtitle {
  color: var(--grey-700);
  text-align: center;
  margin: 0 auto 32px;
  width: 66.6666666667%;
  font-family: Lato, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto,
    Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, "Segoe UI",
    "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 24px;
  line-height: 2.5rem;
  font-weight: 400;
}

@media (max-width: 768px) {
  .text {
    margin-left: 24px !important;
    margin-right: 24px !important;
  }

  .title {
    width: 100%;
    margin-bottom: 32px;
    font-size: 48px;
    line-height: 3.2rem;
  }

  .subtitle {
    width: 100%;
    font-size: 18px;
    line-height: 2.4rem;
  }
}

@media (max-width: 1024px) {
  .text {
    margin-left: 40px;
    margin-right: 40px;
  }

  .title {
    width: 100%;
    margin-bottom: 32px;
    font-size: 40px;
    line-height: 3.2rem;
  }

  .subtitle {
    width: 100%;
    font-size: 18px;
    line-height: 2rem;
    margin-bottom: 0;
  }
}

@media (max-width: 1280px) {
  .text {
    max-width: 928px;
  }
}
</style>