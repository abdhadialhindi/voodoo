<template>
  <div >
    <article class="text-center">
      <h2 class="title">Browse our resources</h2>
    </article>
    <div class="border-raduis py-5 position">
      <v-slide-group class="pa-2" v-model="model">
        <template v-slot:next>
          <v-icon
            color="primary"
            icon="mdi-arrow-right"
            class="icon-tow"
          ></v-icon>
        </template>
        <template v-slot:prev>
          <v-icon
            color="primary"
            icon="mdi-arrow-left"
            class="icon-one"
          ></v-icon>
        </template>
        <v-slide-group-item v-for="(item, index) in items" :key="index">
          <div class="border ms-4 pt-4">
            <v-img height="224" src="@/assets/Home/drag.webp" class="text-white cover mx-4" />

            <h2 class="mt-3 font ms-4">
              {{ item.title }}
            </h2>
          </div>
        </v-slide-group-item>
      </v-slide-group>
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
    let items = [
      {
        src: new URL(
          "@/assets/Home/blog.webp",
          import.meta.url
        ).href,
        title: "voodooo hit 6 billion downloads 🌍",
      },
      {
        src: new URL(
          "@/assets/Home/6B.webp",
          import.meta.url
        ).href,
        title: "A snackable guide to partenring with voodoo",
      },
      {
        src: new URL(
          "@/assets/Home/drag.webp",
          import.meta.url
        ).href,
        title: "Voodoo invest 200$ in blockchain games ⚡️",
      },
      {
        src: new URL(
          "@/assets/Home/book.webp",
          import.meta.url
        ).href,
        title: "Snackability: How to make a snackable game",
      },
      {
        src: new URL(
          "@/assets/Home/blog.webp",
          import.meta.url
        ).href,
        title:
          "How voodoo luanch Ops team help turn your prototypes into worldwide hits",
      },
      {
        src: new URL(
          "@/assets/Home/blog.webp",
          import.meta.url
        ).href,
        title: "Game Worthy share their advice on how create a hit game",
      },
    ];
    return { items };
  },
};
</script>
<style  scoped>
.icon-one {
  margin-top: 40px;
  color: var(--blue-500);
  border: none;
  border-radius: 50%;
  background-color: rgba(0, 85, 255, 0.089);
  width: 50px;
  height: 50px;
  pointer-events: auto !important;
  position: absolute;
  bottom: 0%;
  left: 45%;
}

.icon-tow {
  margin-top: 40px;
  color: var(--blue-500);
  border: none;
  border-radius: 50%;
  background-color: rgba(0, 85, 255, 0.089);
  width: 50px;
  height: 50px;
  pointer-events: auto !important;
  position: absolute;
  bottom: 0%;
  left: 55%;
}

.border-raduis {
  margin: 0 auto;
  border-radius: 18px;
  max-width: 1200px;
  height: 450px;
  position: relative;
}

.position {
  position: relative;
}

.cover {
  border-radius: 24px !important;
  width: 90%;
}
.font {
  font-family: Poppins, ui-sans-serif, system-ui, -apple-system, Segoe UI,
    Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont,
    "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: 700;
  font-size: 16px;
  line-height: 2rem;
}
.border {
  /* border-radius: 16px; */
  border: none !important;
  width: 250px !important;
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

.border:hover {
  border-radius: 16px;
  cursor: pointer;
  background-color: rgba(0, 85, 255, 0.089);
}

@media (width<1100px) {
  .border-raduis {
    width: 100%;
  }
  .border {
    width: 288px !important;
  }
}
@media (max-width: 1024px) {
  .title {
    font-size: 28px;
    line-height: 2.2rem;
  }
  article {
    margin-left: 40px;
    margin-right: 40px;
  }
}
@media (max-width: 768px) {
  article {
    margin-left: 24px !important;
    margin-right: 24px !important;
  }
  .border {
    width: 240px;
    transform: translateX(10px);
    padding: 16px;
  }
  .cover {
    width: 87%;
  }
}
</style>
