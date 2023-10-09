<template>
  <div class="wrapper">
    <h1 class="title">Explaor our jobs</h1>
    <section class="filters">
        <v-text-field
            placeholder="Search"
            append-inner-icon="mdi-search"
            rounded
            dirty
          ></v-text-field>
    </section>
  </div>
</template>
<style scoped>
.wrapper {
  max-width: 1024px;
  margin: 0 auto;
}
.title {
  text-align: center;
  font-family: Poppins, ui-sans-serif, system-ui, -apple-system, Segoe UI,
    Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont,
    "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 64px;
  line-height: 4rem;
  font-weight: 700;
}
.filters {
    margin: 64px 0;
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
  }
  .title {
    font-size: 40px;
    line-height: 2.5rem;
  }
  .filters {
    margin: 48px 0;
  }
}
@media (max-width: 1280px) {
  .wrapper {
    max-width: 928px;
  }
}
</style>