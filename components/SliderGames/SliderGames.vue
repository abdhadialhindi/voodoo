<template>
  <div>
    <article class="text-center">
      <h1 class="title-one">Latest releases</h1>
    </article>
    <swiper
      :slidesPerView="width == '768' || width == 'xs' ? 1 : 2"
      :loop="true"
      :modules="modules"
      class="display pt-16 pb-16"
      speed="800"
      :spaceBetween="width == 'sm' || width == 'xs' ? 10 : 38"
    >
      <SwiperSlide
        v-for="item in items"
        class="width-slider"
        :style="
          width == 'lg' || width == 'xl' || width == 'md'
            ? 'transform: translate(-253px)'
            : 'transform: translate(0)'
        "
      >
        <v-card class="wrapper" elevation="0">
          <div class="text">
            <div class="app-icon">
              <div class="img"></div>
            </div>
            <h3 class="title mb-2">{{ item.title }}</h3>
            <p class="subtitle">{{ item.desc }}</p>
          </div>
          <div class="video">
            <img
              src="@/assets/images/photo/iphone-cropped-light.b4a45e0.png"
              class="iphone"
              alt="uu"
            />
            <video
              class="video-one"
              playsinline
              muted
              loop
              autoplay
              preload="metadata"
            >
              <source
                src="https://www.datocms-assets.com/62418/1647509655-slap-and-run.mp4#t=0.001"
                type="video/mp4"
              />
            </video>
          </div>
        </v-card>
      </SwiperSlide>
    </swiper>
    <div class="d-flex justify-center">
      <v-btn color="#d2e5ff" class="mt-12 mb-10 color" rounded>
        See more on the App store</v-btn
      >
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, EffectFlip } from "swiper";
import { useDisplay } from "vuetify";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const items = [
      {
        src: new URL(
          "data:image/svg+xml;base64,phn2zyb4bwxucz0iahr0cdovl3d3dy53my5vcmcvmjawmc9zdmciihdpzhropsi2ncigagvpz2h0psi2nci+pc9zdmc+",
          import.meta.url
        ).href,
        title: " Bucket Crusher",
        desc: "by Stone Axe",
      },
      {
        src: new URL(
          "data:image/svg+xml;base64,phn2zyb4bwxucz0iahr0cdovl3d3dy53my5vcmcvmjawmc9zdmciihdpzhropsi2ncigagvpz2h0psi2nci+pc9zdmc+",
          import.meta.url
        ).href,
        title: " Bucket Crusher",
        desc: "by stone axe",
      },
      {
        src: new URL(
          "data:image/svg+xml;base64,phn2zyb4bwxucz0iahr0cdovl3d3dy53my5vcmcvmjawmc9zdmciihdpzhropsi2ncigagvpz2h0psi2nci+pc9zdmc+",
          import.meta.url
        ).href,
        title: " Bucket Crusher",
        desc: "by stone axe",
      },
      {
        src: new URL(
          "data:image/svg+xml;base64,phn2zyb4bwxucz0iahr0cdovl3d3dy53my5vcmcvmjawmc9zdmciihdpzhropsi2ncigagvpz2h0psi2nci+pc9zdmc+",
          import.meta.url
        ).href,
        title: " Bucket Crusher",
        desc: "by stone axe",
      },
      {
        src: new URL(
          "data:image/svg+xml;base64,phn2zyb4bwxucz0iahr0cdovl3d3dy53my5vcmcvmjawmc9zdmciihdpzhropsi2ncigagvpz2h0psi2nci+pc9zdmc+",
          import.meta.url
        ).href,
        title: " Bucket Crusher",
        desc: "by stone axe",
      },
    ];

    const { name } = useDisplay();

    const width = computed(() => {
      return name.value;
    });

    return {
      modules: [Pagination, EffectFlip],
      items,
      width,
    };
  },
};
</script>
<style scoped lang="css">
.width {
  max-width: 100%;
}
.width-slider {
  box-shadow: 0 30px 60px rgb(0 33 99 / 10%), 0 2px 5px rgb(0 33 99 / 10%);
  box-shadow: var(--shadow-l);
  border-radius: 32px;
  border-radius: var(--radius-32);

  transition: all 0.2s ease-in-out;
}

.wrapper {
  width: 100% !important;
  display: flex;
  justify-content: space-between;
}
.width-slider:hover {
  transition: 500ms ease;
  transform: translateY(-10px);
  background-color: #f4f9ff;
}
.wrapper:hover {
  transition: 500ms ease;
  transform: translateY(-10px);
  background-color: #f4f9ff;
}
@media (width<1024px) {
  .width-slider {
    width: 300px;
    flex-direction: column !important;
    margin-left: 24px;
    margin-right: 48px !important;
  }

  .title {
    font-size: 20px;
    line-height: 2.2rem;
  }
  .title-one {
    font-size: 28px !important;
  }
}

@media (max-width: 768px) {
  .wrapper {
    flex-direction: column !important;
    max-width: 300px !important;

    margin-left: auto;
    margin-right: auto;
  }

  .text {
    padding-left: unset !important;
    padding-top: 24px;
    align-items: center;
    max-width: 100%;
  }

  .app-icon {
    width: 48px;
  }

  .video {
    width: 200px;
    align-self: center !important;
    margin-left: 40px;
  }

  .video-one {
    width: 178px;
    top: 9px;
  }
  .width-slider {
    width: 275px !important;
    /* margin-left: 25px;
        margin-right: 25px; */
  }
}

.wrapper {
  cursor: pointer;
  /* box-shadow: var(--shadow-l); */
  border-radius: 32px;
  border-radius: var(--radius-32);
  display: flex;
  justify-content: space-between;
  width: 592px;
  transition: all 0.2s ease-in-out;
}

.text {
  padding-left: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 300px;
}

.app-icon {
  display: block;
  overflow: hidden;
  position: relative;
  width: 64px;
  margin-bottom: 8px px;
  border-radius: 16px;
  border-radius: var(--radius-16);
  height: 64px;
}

.img {
  background-size: cover;
  opacity: 1;
  position: absolute;
  transition: opacity;
  background-image: url("@/assets/feature/features2.jpg");
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
}

.title {
  font-family: Poppins, ui-sans-serif, system-ui, -apple-system, Segoe UI,
    Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont,
    "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: 700;
  font-size: 28px;
  line-height: 2rem;
  color: var(--blue-500);
}

.title-one {
  font-family: Poppins, ui-sans-serif, system-ui, -apple-system, Segoe UI,
    Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont,
    "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 48px;
  color: var(--grey-900);
  font-weight: 700;
}

.subtitle {
  font-family: Lato, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto,
    Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, "Segoe UI",
    "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 14px;
  line-height: 2.4rem;
  font-weight: 400;
  color: var(--grey-700);
}

.video {
  width: 200px;
  height: 256px;
  margin-top: 32px;
  margin-right: 48px;
  position: relative;
  display: flex;
  justify-content: center;
  overflow: hidden;
}

.iphone {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0);
  z-index: 1;
}

.video-one {
  width: 178px;
  position: absolute;
  left: 11px;
  top: 9px;
  z-index: 0;
}

.color {
  color: var(--blue-500);
  font-family: Poppins, ui-sans-serif, system-ui, -apple-system, Segoe UI,
    Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont,
    "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    text-transform: none;
    font-weight: 600;
    font-size: 16px;
    background-color: var(--blue-050) !important;
    width: 246px !important;
    letter-spacing: 0.1mm;
}
</style>