<template>
  <div class="background pb-16">
    <div :class="width=='md'|| width=='lg' || width=='xl'? 'mt-10 mb-10 pb-10 pt-10': 'mt-5 mb-5 pb-5 pt-5'">
      <div class="default-block wrapper">
        <!---->
        <div class="text">
          <div>
            <!---->
            <h2 class="title title-2">
              Our success stories
            </h2>
          </div>
          <!----><!---->
        </div>
      </div>
    </div>
    
        <div class="width-slider">
          
            <v-carousel height="400" hide-delimiters class="carousel">
              <template v-slot:prev="{ props }">
                <v-icon
                  color="primary"
                  icon="mdi-arrow-left"
                  class="icon-tow"
                  @click="props.onClick"
                ></v-icon>
              </template>
              <template v-slot:next="{ props }">
                <v-icon
                  color="primary"
                  icon="mdi-arrow-right"
                  class="icon-one"
                  @click="props.onClick"
                ></v-icon>
              </template>

              <v-carousel-item
                v-for="(item, index) in items"
                :key="index"
                class="d-flex justify-center item"
              >
                <swiper
                  :slidesPerView=" width=='xs'  ? 1.5:1 "
                  :modules="modules"
                  class="mySwiper"
                  id="app"
                  loop
                  speed="500"
                  ref="swiper"
                >
                  <swiper-slide
                    v-for="(item, index) in items"
                    :key="index"
                    class="edit"
                  >
                    <div class="d-flex justify-center content">
                      <v-col
                        cols="12"
                        class="column"
                        sm="6"
                        xs="12"
                        md="6"
                        lg="6"
                      >
                        <div class="video-block">
                          <video
                            poster="https://image.mux.com/QADMp026zxFYOZKkC1tmE3GW4Ygd6BLjQ/thumbnail.jpg?time=0"
                            playsinline=""
                            loop="loop"
                            autoplay="autoplay"
                            muted="muted"
                            preload="metadata"
                            class="video"
                          >
                            <source
                              src="../../assets/puplishing/video-puplishing.mp4"
                              type="video/mp4"
                            />
                          </video>
                        </div>
                      </v-col>
                      <article
                        class="article mb-16 d-flex flex-column align-center justify-center gap-30 text-center"
                      >
                        <p class="name">
                          {{ item.title }}
                        </p>
                        <p class="job mb-4">
                          {{ item.subtitle }}
                        </p>
                        <p class="desc text-center mb-4">
                          <strong>
                            {{ item.titletwo }}
                          </strong>
                        </p>
                        <p class="desc text-center">{{ item.desc }}</p>
                      </article>
                    </div>
                  </swiper-slide>
                </swiper>
              </v-carousel-item>
            </v-carousel>
          
        </div>
     
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/scss/navigation";

import "swiper/css/pagination";
import { Pagination, EffectFlip, Navigation } from "swiper";
import { defineComponent } from "vue";
import { computed, ref, onMounted } from "vue";
import { useDisplay } from "vuetify/lib/framework.mjs";
export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    let items = [
      {
        src: new URL(
          "../../assets/puplishing/video-puplishing.mp4",
          import.meta.url
        ).href,
        title: "billy",
        subtitle: " Stone Axe Studio",
        titletwo: "#1 in 51 countries | 271 million downloads",
        desc: '"Voodoo is more than just a publisher. Working with them helps you grow as a studio. From game ideation to prototype improvement roadmaps, it’s also easy and fun to work with them! They really know how to help you to focus only on the making of the perfect gameplay."',
      },
      {
        src: new URL(
          "../../assets/puplishing/video-puplishing.mp4",
          import.meta.url
        ).href,
        title: "cristiano",
        subtitle: " Stone Axe Studio",
        titletwo: "#1 in 51 countries | 271 million downloads",
        desc: '"The Voodoo Launch OPS team play a huge part in your game’s success, from Android Optimization to developing dozens of AB tests, and more. They’re always heavily involved and super efficient."',
      },
      {
        src: new URL(
          "../../assets/puplishing/video-puplishing.mp4",
          import.meta.url
        ).href,
        title: "messi",
        subtitle: " Stone Axe Studio",
        titletwo: "#1 in 51 countries | 271 million downloads",
        desc: '"The Voodoo Launch OPS team play a huge part in your game’s success, from Android Optimization to developing dozens of AB tests, and more. They’re always heavily involved and super efficient."',
      },
      {
        src: new URL(
          "../../assets/puplishing/video-puplishing.mp4",
          import.meta.url
        ).href,
        title: "neymar",
        subtitle: " Stone Axe Studio",
        titletwo: "#1 in 51 countries | 271 million downloads",
        desc: '"The Voodoo Launch OPS team play a huge part in your game’s success, from Android Optimization to developing dozens of AB tests, and more. They’re always heavily involved and super efficient."',
      },
      {
        src: new URL(
          "../../assets/puplishing/video-puplishing.mp4",
          import.meta.url
        ).href,
        title: "mpappe",
        subtitle: " Stone Axe Studio",
        titletwo: "#1 in 51 countries | 271 million downloads",
        desc: '"The Voodoo Launch OPS team play a huge part in your game’s success, from Android Optimization to developing dozens of AB tests, and more. They’re always heavily involved and super efficient."',
      },
      {
        src: new URL("../../assets/images/brand/facebook.jpg", import.meta.url)
          .href,
        title: "Ramos",
        subtitle: " Stone Axe Studio",
        titletwo: "#1 in 51 countries | 271 million downloads",
        desc: '"The Voodoo Launch OPS team play a huge part in your game’s success, from Android Optimization to developing dozens of AB tests, and more. They’re always heavily involved and super efficient."',
      },
      {
        src: new URL(
          "../../assets/puplishing/video-puplishing.mp4",
          import.meta.url
        ).href,
        title: "Ramos",
        subtitle: " Stone Axe Studio",
        titletwo: "#1 in 51 countries | 271 million downloads",
        desc: '"The Voodoo Launch OPS team play a huge part in your game’s success, from Android Optimization to developing dozens of AB tests, and more. They’re always heavily involved and super efficient."',
      },
      {
        src: new URL(
          "../../assets/puplishing/video-puplishing.mp4",
          import.meta.url
        ).href,
        title: "Ramos",
        subtitle: " Stone Axe Studio",
        titletwo: "#1 in 51 countries | 271 million downloads",
        desc: '"The Voodoo Launch OPS team play a huge part in your game’s success, from Android Optimization to developing dozens of AB tests, and more. They’re always heavily involved and super efficient."',
      },
      {
        src: new URL(
          "../../assets/puplishing/video-puplishing.mp4",
          import.meta.url
        ).href,
        title: "Ramos",
        subtitle: " Stone Axe Studio",
        titletwo: "#1 in 51 countries | 271 million downloads",
        desc: '"The Voodoo Launch OPS team play a huge part in your game’s success, from Android Optimization to developing dozens of AB tests, and more. They’re always heavily involved and super efficient."',
      },
      {
        src: new URL(
          "../../assets/puplishing/video-puplishing.mp4",
          import.meta.url
        ).href,
        title: "Ramos",
        subtitle: " Stone Axe Studio",
        titletwo: "#1 in 51 countries | 271 million downloads",
        desc: '"The Voodoo Launch OPS team play a huge part in your game’s success, from Android Optimization to developing dozens of AB tests, and more. They’re always heavily involved and super efficient."',
      },
    ];
    function prev() {
      this.$refs.swiper.$swiper.slidePrev();
    }
    function next() {
      this.$refs.swiper.$swiper.slideNext();
    }
    const { name } = useDisplay();

const width = computed(() => {
return name.value;
});

    return {
      modules: [Pagination, EffectFlip, Navigation],
      items,
      prev,
      next,
      width
    };
  },
});
</script>
<style scoped>
.background {
  background-color: var(--blue-025);
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

.title-2 {
  font-family: Poppins, ui-sans-serif, system-ui, -apple-system, Segoe UI,
    Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont,
    "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 48px;
  line-height: 4.4rem;
  font-weight: 700;
}
.content {
  display: flex;
  grid-gap: 32px;
  gap: 32px;
  flex-shrink: 0;
}

.width-slider {
  max-width: 1024px;
  margin: 0 auto;
}

.name {
  color: var(--grey-900);
  font-weight: 700;
  font-family: "Lato", ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto,
    Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, "Segoe UI",
    "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 18px;
  line-height: 1.9rem;
}

.edit {
  border-radius: 16px;
  height: 395px;
}
.video-block {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.video {
  width: 100%;
  height: 100%;
  border-radius: 32px;
  object-fit: cover !important;
}

.img {
  width: 100%;
  height: 94%;
  border-radius: 16px;
  overflow: hidden;
}

.column {
  height: 100%;
  padding: 0px !important;
}

.article {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px;
  text-align: center;
  margin-bottom: 72px;
}

@media (max-width:800px) {
  .article {
    width: 89%;
  }

  .content {
    height: auto !important;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    margin: 0;
    padding: 16px;
  }

  .icon-one {
    display: none;
  }

  .icon-tow {
    display: none;
  }

  .width-slider {
    max-width: 450px;
    height: 740px;
  }

  .edit {
    width: 250px;
    height: 740px;
  }

  .carousel {
    height: 740px !important;
  }

  .column {
    flex: 0 0 0%;
    width: 250px !important;
  }

  .img {
    width: 250px;
    height: 250px;
  }

  .item {
    flex-direction: column;
    align-items: center;
  }
  .swiper-slide-active {
    transform: translateX(60px);
  }
  .swiper-slide-next {
    transform: translateX(50px);
  }
  .swiper-slide-prev {
    transform: translateX(68px);
  }
}

.content {
  height: 100%;
}

.icon-one {
  margin-top: 40px;
  color: var(--blue-500);
  border: none;
  border-radius: 50%;
  background-color: rgba(0, 85, 255, 0.089);
  width: 40px;
  height: 40px;
  pointer-events: auto !important;
  position: absolute;
  bottom: 2%;
  left: 80%;
}

.icon-tow {
  margin-top: 40px;
  color: var(--blue-500);
  border: none;
  border-radius: 50%;
  background-color: rgba(0, 85, 255, 0.089);
  width: 40px;
  height: 40px;
  pointer-events: auto !important;
  position: absolute;
  bottom: 2%;
  left: 72%;
}

.arrow {
  display: flex;
  justify-content: center;
  grid-gap: 32px;
  gap: 32px;
  position: absolute;
  bottom: 32px;
  right: 0;
  z-index: 1;
  width: calc(50% - 16px);
}

.desc {
  font-family: "Lato", ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto,
    Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, "Segoe UI",
    "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 18px;
  line-height: 1.8rem;
  font-weight: 400;
  color: var(--grey-700);
  margin-left: auto;
  margin-right: auto;
}
@media (max-width:1024px) {
  .title-2 {
    font-size: 28px;
    line-height: 2rem;
}
}

.job {
  color: #10131b;
  color: var(--grey-900);
  margin-bottom: 16px;
  font-family: "Lato", ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto,
    Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, "Segoe UI",
    "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 14px;
  line-height: 1.01rem;
  font-weight: 400;
}
@media (max-width: 1280px) {
  .width-slider {
      max-width: 928px;
  }
}
</style>
