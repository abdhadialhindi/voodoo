<template>
  <section>
    <div class="wrapper">
      <div v-for="(item, index) in items" :key="index" class="width-img">
        <img :src="item.src" alt="" class="img"/>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data: () => ({
    model: null,
    items: [
      {
        src: new URL("@/assets/feature/brand/brand-01.png", import.meta.url)
          .href,
      },
      {
        src: new URL("@/assets/feature/brand/brand-02.png", import.meta.url)
          .href,
      },
      {
        src: new URL("@/assets/feature/brand/brand-03.png", import.meta.url)
          .href,
      },
      {
        src: new URL("@/assets/feature/brand/brand-04.png", import.meta.url)
          .href,
      },
      {
        src: new URL("@/assets/feature/brand/brand-05.png", import.meta.url)
          .href,
      },
      {
        src: new URL("@/assets/feature/brand/brand-06.png", import.meta.url)
          .href,
      },
    ],
  }),
};
</script>
<style  scoped>
.wrapper {
  display: flex;
  justify-content: center;
  max-width: 928px;
  margin: 0 auto;
  grid-gap: 48px;
  gap: 48px;
  max-height: 150px;
}
.width-img {
  width: 110px;
}
.img {
  width: 110px;
}
@media (max-width: 768px) {
  .wrapper {
    margin-left: 24px;
    margin-right: 24px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    max-height: 928px;
  }
}
@media (max-width: 1024px) {
  .wrapper {
    margin-left: 40px;
    margin-right: 40px;
  }
}
@media (max-width: 1280px) {
}
</style>
