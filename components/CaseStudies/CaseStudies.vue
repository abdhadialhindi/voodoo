<template>
  <v-container>
    <v-row justify="center">
      <div class="text-center width-title">
        <h1 class="title">Case studies</h1>
      </div>
    </v-row>
    <v-row justify="center ">
      <div class="width-case mt-9 mb-16 d-flex justify-center">
        <swiper
          :slidesPerView="width == 'sm' || width == 'xs' ? 3 : 4"
          :spaceBetween="width == 'sm' ? 16 : 16"
          :loop="true"
          :modules="modules"
          speed="800"
        >
          <SwiperSlide v-for="item in items" class="width-slider">
            <div class="d-flex flex-column align-center mt-2">
              <img :src="item.src" alt="" class="img" />
              <div class="width-title2 ms-3">
                <h3 class="mt-4 title-one">
                  {{ item.title }}
                </h3>
              </div>
            </div>
          </SwiperSlide>
        </swiper>
      </div>
    </v-row>
    <v-row justify="center">
      <v-btn color="#d2e5ff" class="mt-5 mb-10" rounded height="40" width="203">
        <span class="color">See More on the blog</span></v-btn
      >
    </v-row>
  </v-container>
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
        src: "https://www.datocms-assets.com/62418/1654791302-casestudy_flex_run_hero-thumbnail.jpg?h=256&w=256",
        title: "Run of Life: Ideation tips for creating viral games",
      },
      {
        src: "https://www.datocms-assets.com/62418/1654773204-casestudy_city_takeover-thumbnail.jpg?h=256&w=256",
        title: "Flex Run 3D: how to make your first hit in nine months",
      },
      {
        src: "https://www.datocms-assets.com/62418/1654768808-casestudy_slice_it_all-thumbnail.jpg?h=256&w=256",
        title: "Run of Life: Ideation tips for creating viral games",
      },
      {
        src: "https://www.datocms-assets.com/62418/1654768863-casestudy_hero_run_of_life-thumbnail.jpg?h=256&w=256",
        title: "Slice it All! How to reduce your CPI in Runners",
      },
      {
        src: "https://www.datocms-assets.com/62418/1654773204-casestudy_city_takeover-thumbnail.jpg?h=256&w=256",
        title:
          "How Game Worthy hit a 62% D1 with their latest hit City Takeover",
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
<style scoped>
.width-case {
  max-width: 1024px;
}

.title {
  font-family: Poppins, ui-sans-serif, system-ui, -apple-system, Segoe UI,
    Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont,
    "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 48px;
  line-height: 5.6rem;
  font-weight: 700;
}

.width-slider {
  width: 249px;
  border-radius: 16px;
  cursor: pointer;
}

.width-slider:hover {
  background-color: var(--blue-025);
}

.title-one {
    color: var(--grey-900);
  font-size: 16px;
  font-weight: 600;
  font-family: Poppins, ui-sans-serif, system-ui, -apple-system, Segoe UI,
    Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont,
    "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    text-transform: none;
}

.img {
  width: 225px;
  height: 225px;
  border-radius: var(--radius-16);
}

.width-title2 {
  width: 100%;
}

.color {
  color: var(--blue-500);
  font-weight: 600;
  font-size: 16px;
  font-family: Poppins, ui-sans-serif, system-ui, -apple-system, Segoe UI,
    Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont,
    "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    text-transform: none;
    letter-spacing: 0.1mm;
}

@media (max-width: 1024px) {
  .title {
    font-size: 28px;
  }
  .width-slider {
    width: 249px !important;
    padding: 16px;
  }
}

@media (max-width: 768px) {
  .width-case {
    width: 100%;
  }
  .width-slider {
    width: 240px !important;
  }
  .title-one {
    text-align: left;
  }
  .swiper-slide-active {
    transform: translateX(-210px) !important;
  }
  .swiper-slide-next {
    transform: translateX(-225px) !important;
  }
  .swiper-slide {
    transform: translateX(-245px);
  }
  .swiper-slide-prev {
    transform: translateX(-200px) !important;
  }
}
@media (max-width: 500px) {
  /* .width-case{
        margin-left: 24px;
        margin-right: 24px;
    } */
  /* .swiper-slide-active {
        transform: translateX(0px);
    }
    .swiper-slide-next {
        transform: translateX(0px);
    }
    .swiper-slide-prev {
        transform: translateX(0px);
    } */
}
</style>