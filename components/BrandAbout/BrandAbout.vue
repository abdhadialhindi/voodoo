<template>
  <section>
    <div class="wrapper">
      <div v-for="(item, index) in items" :key="index" class="width-img">
        <div class="d-flex">
          <img :src="item.src" alt="" class="img" />
          <div class="rich-text ms-4 d-flex flex-column align-center justify-center">
            <h1 class="title">{{ item.title }}</h1>
            <p class="number " :style="`color:${index==0 ? '#05f': index==1 ? '#007d68':index==2 ? '#b60089': ''}`">{{ item.desc }}</p>
          </div>
        </div>
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
        src: new URL(
          "@/assets/about/png-transparent-joystick-game-controller-video-game-icon-video-game-controller-monochrome-video-game-black-thumbnail.png",
          import.meta.url
        ).href,
        title: "Games made",
        desc: "983",
      },
      {
        src: new URL(
          "@/assets/about/png-transparent-joystick-game-controller-video-game-icon-video-game-controller-monochrome-video-game-black-thumbnail.png",
          import.meta.url
        ).href,
        title: "Founded in",
        desc: "2013",
      },
      {
        src: new URL(
          "@/assets/about/png-transparent-joystick-game-controller-video-game-icon-video-game-controller-monochrome-video-game-black-thumbnail.png",
          import.meta.url
        ).href,
        title: "Partners",
        desc: "24",
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
  width: 270px;
}
.img {
  width: 110px;
}
.title {
    font-weight: 200;
}
.number {
font-weight: 700;
font-size: 28px;
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
  