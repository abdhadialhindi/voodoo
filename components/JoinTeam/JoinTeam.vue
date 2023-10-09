<template>
  <div class="pt-16">
    <v-row
      justify="center"
      class="width-join"
      v-if="width == 'md' || width == 'lg' || width == 'sm'"
    >
      <v-col cols="12" sm="5" md="6" lg="3" class="colomn">
        <v-card
          elevation="8"
          class="border-raduis d-flex justify-center flex-column align-center mb-6"
        >
          <v-rating
            v-model="rating"
            color="primary"
            class="rating"
            active-color="primary"
            half-increments
            hover
            size="24"
          ></v-rating>
          <span class="text-center mt-3 font-lable">4.4/5</span>
        </v-card>
        <v-card
          elevation="8"
          class="border-raduis d-flex justify-center flex-column align-center"
        >
          <v-progress-circular
            :rotate="360"
            :size="87"
            :width="10"
            model-value="80"
            color="primary"
            bg-color="#6aa0ff"
            class="border"
          >
            <span>80%</span>
          </v-progress-circular>
          <span class="text-center mt-3 font-lable">{{
            $t("Approve of the CEO")
          }}</span>
        </v-card>
      </v-col>
      <v-col cols="12" sm="5" md="6" lg="3" class="colomn">
        <v-card
          elevation="8"
          class="border-raduis d-flex justify-center flex-column align-center mb-6"
        >
          <v-progress-circular
            :rotate="360"
            :size="87"
            :width="10"
            model-value="80"
            color="primary"
            bg-color="#6aa0ff"
            class="border"
          >
            <span>80%</span>
          </v-progress-circular>
          <span class="text-center mt-3 font-lable">{{
            $t("Recommend to a friend")
          }}</span>
        </v-card>
        <v-card
          elevation="8"
          class="border-raduis d-flex justify-center align-center mb-6"
        >
          <img
            src="@/assets/Careers/1652779867-logo-best-workplaces-2x.png"
            alt=""
            class="img"
          />
        </v-card>
      </v-col>
      <v-col cols="12" sm="10" md="12" lg="6" class="flex">
        <v-carousel
          hide-delimiters
          class="carousel"
          :show-arrows="true"
          draggable="true"
        >
          <template v-slot:next="{ props }">
            <v-icon
              color="primary"
              icon="mdi-arrow-right"
              class="icon-tow"
              @click="props.onClick"
            ></v-icon>
          </template>
          <template v-slot:prev="{ props }">
            <v-icon
              color="primary"
              icon="mdi-arrow-left"
              class="icon-one"
              @click="props.onClick"
            ></v-icon>
          </template>
          <v-carousel-item
            v-for="(item, i) in items"
            :src="item.src"
            :key="i"
            cover
            class="carousel align-end text-white"
          >
            <v-card-title class="card-title">{{ $t(item.title) }}</v-card-title>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
    <v-row v-else-if="width == 'xs'">
      <v-col cols="12" sm="5" md="6" lg="3" class="colomn">
        <v-card
          elevation="8"
          class="border-raduis d-flex justify-center flex-column align-center mb-6"
        >
          <v-rating
            v-model="rating"
            color="primary"
            class="rating"
            active-color="primary"
            half-increments
            hover
            size="24"
          ></v-rating>
          <span class="text-center mt-3 font-lable lato">4.4/5</span>
        </v-card>
        <v-card
          elevation="8"
          class="border-raduis d-flex justify-center flex-column align-center"
        >
          <v-progress-circular
            :rotate="360"
            :size="87"
            :width="10"
            model-value="80"
            color="primary"
            bg-color="#6aa0ff"
            class="border"
          >
            <span>80%</span>
          </v-progress-circular>
          <span class="text-center mt-3 font-lable lato">{{
            $t("Approve of the CEO")
          }}</span>
        </v-card>
      </v-col>
      <v-col cols="12" sm="5" md="6" lg="3" class="colomn">
        <v-card
          elevation="8"
          class="border-raduis d-flex justify-center flex-column align-center mb-6"
        >
          <v-progress-circular
            :rotate="360"
            :size="87"
            :width="10"
            model-value="80"
            color="primary"
            bg-color="#6aa0ff"
            class="border"
          >
            <span class="lato">80%</span>
          </v-progress-circular>
          <span class="text-center mt-3 font-lable lato">{{
            $t("Recommend to a friend")
          }}</span>
        </v-card>
        <v-card
          elevation="8"
          class="border-raduis d-flex justify-center align-center mb-6"
        >
          <img
            src="@/assets/Careers/1652779867-logo-best-workplaces-2x.png"
            alt=""
            class="img"
          />
        </v-card>
      </v-col>

      <swiper :slides-per-view="2" :space-between="8" loop class="swiper">
        <swiper-slide v-for="(item, index) in items" :key="index">
          <div
            :style="`background-image: url('${item.src}');`"
            class="img-one d-flex flex-column-reverse text-center"
          >
            <h1 class="title-swiper">
              {{ $t(item.title) }}
            </h1>
          </div>
        </swiper-slide>
      </swiper>
    </v-row>

    <div class="width-join d-flex justify-center mt-16">
      <article class="text-center text mb-16">
        <h1 class="title">Join the team</h1>
        <p class="desc">
          {{
            $t(
              "We’re looking for talented individuals from across the globe to come and entertain the world with us"
            )
          }}
        </p>
        <div>
          <v-btn rounded height="40" width="172" class="btn" color="primary">{{
            $t("see our open jobs")
          }}</v-btn>
        </div>
      </article>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { useDisplay } from "vuetify";

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    let model = 1;
    let rating = 4.5;
    const items = [
      {
        src: new URL("@/assets/Careers/1649922811-team-gaming-wide.jpg", import.meta.url).href,

        title: "Amsterdam office",
      },
      {
        src: new URL("@/assets/Careers/1649922811-team-gaming-wide.jpg", import.meta.url)
          .href,
        title: "Paris office",
      },
      {
        src: new URL("@/assets/Careers/1649922811-team-gaming-wide.jpg", import.meta.url)
          .href,
        title: "Barcelona office",
      },
      {
        src: new URL("@/assets/Careers/1649922811-team-gaming-wide.jpg", import.meta.url)
          .href,
        title: "Montpellier office",
      },
    ];
    function swip(item) {
      item = 0;
      item = item - 1;
      return item;
    }
    const { name } = useDisplay();
    const width = computed(() => {
      return name.value;
    });
    return {
      rating,
      items,
      model,
      swip,
      width,
    };
  },
});
</script>
<style scoped lang="scss">
.width-join {
  max-width: 1024px;
  margin: 0 auto;
}

.border-raduis {
  border-radius: 16px;
  height: 212px;
}

.rating {
  font-size: 19px;
}
.card-title {
  font-family: "Poppins", ui-sans-serif, system-ui, -apple-system, Segoe UI,
    Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont,
    "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: 600;
  font-size: 20px;
  line-height: 2.4rem;
  color: var(--grey-000);
}
.lato {
  font-family: "Lato", ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto,
    Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, "Segoe UI",
    "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 18px;
  line-height: 2.8rem;
  font-weight: 400;
  color: var(--grey-900);
  margin-top: 16px;
  text-align: center;
}

.border {
  border: 1px solid transparent !important;
}

.img {
  width: 128px;
  height: 128px;
}

.carousel {
  width: 472px;
  height: 450px !important;
  border-radius: 16px;
}
.swiper {
  transform: translateX(-36px) !important;
}
.icon-one {
  margin-top: 40px;
  color: white !important;
  border: none;
  border-radius: 50%;
  background-color: var(--blue-500);
  width: 50px;
  height: 50px;
  pointer-events: auto;
  position: absolute;
  bottom: 2%;
  left: 75%;
}
.swiper-slide-active {
  transform: translateX(-112px) !important;
}
.swiper-slide-next {
  transform: translateX(-90px) !important;
  width: 200px !important;
  height: 200px !important;
}
.swiper-slide {
  transform: translateX(-80px);
  border-radius: 16px;
  width: 200px !important;
  height: 200px !important;
}
.icon-tow {
  margin-top: 40px;
  color: white !important;
  border: none;
  border-radius: 50%;
  background-color: var(--blue-500);
  width: 50px;
  height: 50px;
  pointer-events: auto;
  position: absolute;
  bottom: 2%;
  left: 88%;
}

.text {
  width: 83.3333333333%;
  display: flex;
  flex-direction: column;
  grid-gap: 24px;
  gap: 24px;
}

.title {
  font-family: "Poppins", ui-sans-serif, system-ui, -apple-system, Segoe UI,
    Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont,
    "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 48px;
  line-height: 3.6rem;
  font-weight: 700;
}
.btn {
  font-family: Poppins, ui-sans-serif, system-ui, -apple-system, Segoe UI,
    Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont,
    "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: 600;
  font-size: 16px;
  text-transform: none;
  letter-spacing: 0.1mm;
}
.card {
  height: 228px;
  margin: 0 8px;
}
.img-one {
  border-radius: 16px;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
}
.desc {
  color: #353c4c;
  font-family: "Lato", ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto,
    Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, "Segoe UI",
    "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 24px;
  line-height: 4rem;
  font-weight: 400;
}
.title-swiper {
  color: #fff;
  font-size: 18px;
  line-height: 2rem;
  font-weight: 700;
}

@media (max-width: 1024px) {
  .width-join {
    margin-left: 40px;
    margin-right: 40px;
  }

  .title {
    font-size: 28px;
    line-height: 2.2rem;
  }
  .desc {
    font-size: 18px;
    line-height: 2.2rem;
  }
  .carousel {
    width: 100% !important;
    height: 456px !important;
  }
  .card-title {
    font-size: 18px;
    line-height: 2rem;
  }
  .icon-one {
    width: 40px;
    height: 40px;
    left: 80%;
  }
  .icon-tow {
    width: 40px;
    height: 40px;
  }
  .text {
    width: 100%;
    grid-gap: 16px;
    gap: 16px;
  }
}
@media (max-width: 768px) {
  .width-join {
    margin-left: 24px !important;
    margin-right: 24px !important;
  }

  .colomn {
    width: 291px !important;
    flex: 0 0 84%;
    max-width: 84%;
    margin: 0 auto;
  }
  .img {
  }
  .carousel {
    width: 100% !important;
    height: 456px !important;
  }
}
@media (max-width: 600px) {
  .flex {
    width: 100% !important;
  }
  .title-swiper {
    font-family: "Poppins", ui-sans-serif, system-ui, -apple-system, Segoe UI,
      Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont,
      "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-size: 18px;
    font-weight: 600;
  }
}
</style>