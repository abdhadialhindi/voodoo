<template>
  <div>
    <h2 class="title title-2 text-center">Meet the studios</h2>

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
            :slidesPerView="width=='xs' ? 1.5: 1"
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
                <div :class="width=='sm' ? 'pt-8': ''" class="img-block">
                  <img :src="item.src" alt="" class="img"  />
                </div>
                <article
                  class="article mb-16 d-flex flex-column align-center justify-center gap-30 text-center"
                >
                  <p class="name">
                    {{ item.title }}
                  </p>
                  <span class="job">
                    {{ item.subtitle }}
                  </span>
                  <p class="desc text-center">
                    {{ item.desc }}
                  </p>
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
import { useDisplay } from "vuetify";
export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    let items = [
      {
        src: new URL(
          "../../assets/Home/our team8.jpg",
          import.meta.url
        ).href,
        title: "billy",
        subtitle: " Stone Axe Studio",
        desc: '"The Voodoo Launch OPS team play a huge part in your game’s success, from Android Optimization to developing dozens of AB tests, and more. They’re always heavily involved and super efficient."',
      },
      {
        src: new URL(
          "../../assets/Home/our team8.jpg",
          import.meta.url
        ).href,
        title: "cristiano",
        subtitle: " Stone Axe Studio",
        desc: '"The Voodoo Launch OPS team play a huge part in your game’s success, from Android Optimization to developing dozens of AB tests, and more. They’re always heavily involved and super efficient."',
      },
      {
        src: new URL(
          "../../assets/Home/our team8.jpg",
          import.meta.url
        ).href,
        title: "messi",
        subtitle: " Stone Axe Studio",
        desc: '"The Voodoo Launch OPS team play a huge part in your game’s success, from Android Optimization to developing dozens of AB tests, and more. They’re always heavily involved and super efficient."',
      },
      {
        src: new URL(
          "../../assets/Home/our team8.jpg",
          import.meta.url
        ).href,
        title: "neymar",
        subtitle: " Stone Axe Studio",
        desc: '"The Voodoo Launch OPS team play a huge part in your game’s success, from Android Optimization to developing dozens of AB tests, and more. They’re always heavily involved and super efficient."',
      },
      {
        src: new URL(
          "../../assets/Home/our team8.jpg",
          import.meta.url
        ).href,
        title: "mpappe",
        subtitle: " Stone Axe Studio",
        desc: '"The Voodoo Launch OPS team play a huge part in your game’s success, from Android Optimization to developing dozens of AB tests, and more. They’re always heavily involved and super efficient."',
      },
      {
        src: new URL("../../assets/images/brand/facebook.jpg", import.meta.url)
          .href,
        title: "Ramos",
        subtitle: " Stone Axe Studio",
        desc: '"The Voodoo Launch OPS team play a huge part in your game’s success, from Android Optimization to developing dozens of AB tests, and more. They’re always heavily involved and super efficient."',
      },
      {
        src: new URL(
          "../../assets/Home/our team8.jpg",
          import.meta.url
        ).href,
        title: "Ramos",
        subtitle: " Stone Axe Studio",
        desc: '"The Voodoo Launch OPS team play a huge part in your game’s success, from Android Optimization to developing dozens of AB tests, and more. They’re always heavily involved and super efficient."',
      },
      {
        src: new URL(
          "../../assets/Home/our team8.jpg",
          import.meta.url
        ).href,
        title: "Ramos",
        subtitle: " Stone Axe Studio",
        desc: '"The Voodoo Launch OPS team play a huge part in your game’s success, from Android Optimization to developing dozens of AB tests, and more. They’re always heavily involved and super efficient."',
      },
      {
        src: new URL(
          "../../assets/Home/our team8.jpg",
          import.meta.url
        ).href,
        title: "Ramos",
        subtitle: " Stone Axe Studio",
        desc: '"The Voodoo Launch OPS team play a huge part in your game’s success, from Android Optimization to developing dozens of AB tests, and more. They’re always heavily involved and super efficient."',
      },
      {
        src: new URL(
          "../../assets/Home/our team8.jpg",
          import.meta.url
        ).href,
        title: "Ramos",
        subtitle: " Stone Axe Studio",
        desc: '"The Voodoo Launch OPS team play a huge part in your game’s success, from Android Optimization to developing dozens of AB tests, and more. They’re always heavily involved and super efficient."',
      },
    ];
    let elemntes = [
      {
        src: new URL(
          "../../assets/Home/our team8.jpg",
          import.meta.url
        ).href,
        title: "billy",
        subtitle: " Stone Axe Studio",
        desc: '"The Voodoo Launch OPS team play a huge part in your game’s success, from Android Optimization to developing dozens of AB tests, and more. They’re always heavily involved and super efficient."',
      },
      {
        src: new URL(
          "../../assets/Home/our team8.jpg",
          import.meta.url
        ).href,
        title: "cristiano",
        subtitle: " Stone Axe Studio",
        desc: '"The Voodoo Launch OPS team play a huge part in your game’s success, from Android Optimization to developing dozens of AB tests, and more. They’re always heavily involved and super efficient."',
      },
      {
        src: new URL(
          "../../assets/Home/our team8.jpg",
          import.meta.url
        ).href,
        title: "messi",
        subtitle: " Stone Axe Studio",
        desc: '"The Voodoo Launch OPS team play a huge part in your game’s success, from Android Optimization to developing dozens of AB tests, and more. They’re always heavily involved and super efficient."',
      },
      {
        src: new URL(
          "../../assets/Home/our team8.jpg",
          import.meta.url
        ).href,
        title: "neymar",
        subtitle: " Stone Axe Studio",
        desc: '"The Voodoo Launch OPS team play a huge part in your game’s success, from Android Optimization to developing dozens of AB tests, and more. They’re always heavily involved and super efficient."',
      },
      {
        src: new URL(
          "../../assets/Home/our team8.jpg",
          import.meta.url
        ).href,
        title: "mpappe",
        subtitle: " Stone Axe Studio",
        desc: '"The Voodoo Launch OPS team play a huge part in your game’s success, from Android Optimization to developing dozens of AB tests, and more. They’re always heavily involved and super efficient."',
      },
      {
        src: new URL("../../assets/images/brand/facebook.jpg", import.meta.url)
          .href,
        title: "Ramos",
        subtitle: " Stone Axe Studio",
        desc: '"The Voodoo Launch OPS team play a huge part in your game’s success, from Android Optimization to developing dozens of AB tests, and more. They’re always heavily involved and super efficient."',
      },
      {
        src: new URL(
          "../../assets/Home/our team8.jpg",
          import.meta.url
        ).href,
        title: "Ramos",
        subtitle: " Stone Axe Studio",
        desc: '"The Voodoo Launch OPS team play a huge part in your game’s success, from Android Optimization to developing dozens of AB tests, and more. They’re always heavily involved and super efficient."',
      },
      {
        src: new URL(
          "../../assets/Home/our team8.jpg",
          import.meta.url
        ).href,
        title: "Ramos",
        subtitle: " Stone Axe Studio",
        desc: '"The Voodoo Launch OPS team play a huge part in your game’s success, from Android Optimization to developing dozens of AB tests, and more. They’re always heavily involved and super efficient."',
      },
      {
        src: new URL(
          "../../assets/Home/our team8.jpg",
          import.meta.url
        ).href,
        title: "Ramos",
        subtitle: " Stone Axe Studio",
        desc: '"The Voodoo Launch OPS team play a huge part in your game’s success, from Android Optimization to developing dozens of AB tests, and more. They’re always heavily involved and super efficient."',
      },
      {
        src: new URL(
          "../../assets/Home/our team8.jpg",
          import.meta.url
        ).href,
        title: "Ramos",
        subtitle: " Stone Axe Studio",
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
      elemntes,
      width
    };
  },
});
</script>
<style scoped >
.width-slider {
  margin: 0 auto;
  max-width: 1024px;
}
.img-block {
  width: 50%;
}

.name {
  color: var(--grey-900);
  font-weight: 700;
  font-family: "Lato", ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto,
    Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, "Segoe UI",
    "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1.2rem;
  line-height: 1.9rem;
}

.edit {
  border-radius: 16px;
  height: 395px;
}

.img {
   
    width: 100%;
    border-radius: 16px;
    overflow: hidden;
    /* image-rendering: pixelated; */
    top: 45px;
    position: relative;
    height: 62%;

}

.column {
  height: 100%;
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

.title {
    font-family: "Poppins", sans-serif;
  font-size: 48px;
  line-height: 4.4rem;
  font-weight: 700;
  margin-bottom: 24px;
}

@media (width<768px) {
  .article {
    width: 90%;
    margin-top: 0px !important;
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

 
  .edit {
    width: 2px;
    height: 600px;
  }

  .carousel {
    height: 600px !important;
  }

  .column {
    display: flex;
    justify-content: center;
    flex: 0 0 0%;
    width: 100% !important;
  }

  .img {
    
    width:100%;
    height: 200px;
  }

  .item {
    flex-direction: column;
    align-items: center;
  }
  .title {
    font-size: 32px !important;
    line-height: 2.5rem;
  }
  .desc {
    font-size: 18px;
    line-height: 1.8rem;
  }
  .img-block {
    width: 100%;
    margin-bottom: 24px;
  }
  .swiper-slide {
    transform: translateX(-245px);
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
  bottom: 12%;
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
  bottom: 12%;
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

@media (max-width:1024px) {
  .title {
    font-size: 32px !important;
    line-height: 2.5rem;
  }
  .name {
    font-size: 18px;
    line-height: 1.8rem;
  }
  .width-slider {
    margin-left: 40px;
    margin-right: 40px;
  }
 
}
@media (max-width:320px) {
  .width-slider {
    width: 300px;
    height: 600px;
  }

 .swiper-slide {
  transform: translateX(-150px);
 } 
 .img {
  width: 181px;
    height: 139px;
 }
}
@media (max-width:1280px) {
  .width-slider {
    max-width: 928px;
  }
}
</style>
