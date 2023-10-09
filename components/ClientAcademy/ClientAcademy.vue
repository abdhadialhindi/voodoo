<template>
  <div>
    <div class="border-raduis py-5 position">
      <swiper
        :slides-per-view="
          width == 'md' || width == 'sm' || width == 'xs' ? '3' : '4'
        "
        :navigation="{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }"
        :modules="modules"
        loop="true"
        class="swiper"
      >
        <v-icon icon="mdi-arrow-left" class="swiper-button-prev"></v-icon>
        <v-icon
          color="primary"
          icon="mdi-arrow-right"
          class="icon-tow swiper-button-next"
        ></v-icon>

        <swiper-slide v-for="(item, index) in items" :key="index">
          <div class="border pt-4">
            <v-img
              :src="item.src"
              class="text-white cover mx-4"
            />

            <h2 class="mt-3 font ms-4">
              {{ item.title }}
            </h2>
            <p class="desc ms-4">
              {{ item.desc }}
            </p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
  <script>
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, EffectFlip, Navigation } from "swiper";
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
          "@/assets/academy/1648562714-lp-introduction.png",
          import.meta.url
        ).href,
        title: "Introduction",
        desc: "Welcome to Voodoo Academy! This course will take you through the basics of hyper-casual.",
      },
      {
        src: new URL(
          "@/assets/academy/1648562730-lp-voodoo-tools.png",
          import.meta.url
        ).href,
        title: "Unity 101",
        desc: "Discover all the Unity basics required to start your journey in hyper-casual gaming.",
      },
      {
        src: new URL(
          "@/assets/academy/1648562723-lp-unity-101.png",
          import.meta.url
        ).href,
        title: "Voodoo Tools",
        desc: " Find out everything you need to know about Voodoo tools and how to use them.",
      },
      {
        src: new URL(
          "@/assets/academy/1648562710-lp-finding-the-right-idea.png",
          import.meta.url
        ).href,
        title: " Finding the Right Idea",
        desc: "Learn our techniques on how to come up with marketable ideas, and how to know which ideas to discard",
      },
      {
        src: new URL(
          "@/assets/academy/1648562710-lp-finding-the-right-idea.png",
          import.meta.url
        ).href,
        title: " Building your Game",
        desc: "Follow this learning path to find out how to take your game from idea to prototype.",
      },
      {
        src: new URL(
          "@/assets/academy/1648562710-lp-finding-the-right-idea.png",
          import.meta.url
        ).href,
        title: " Marketing your Game",
        desc: " Learn how to make great ad videos, CPI do’s and don’ts, and discover how marketable your game is.",
      },
      {
        src: new URL(
          "@/assets/academy/1648562710-lp-finding-the-right-idea.png",
          import.meta.url
        ).href,
        title: "Iterating on your Game",
        desc: "Learn how to decide to iterate or kill fast and move on to a new idea after receiving your test results.",
      },
      {
        
        src: new URL(
          "@/assets/academy/1648562710-lp-finding-the-right-idea.png",
          import.meta.url
        ).href,
        title: "Game Art in Hyper-casual",
        desc: "Follow this learning path to find out how to make effective game art in hyper-casual games. ",
      },
    ];
    const { name } = useDisplay();

    const width = computed(() => {
      return name.value;
    });

    return { items, modules: [Navigation], width };
  },
};
</script>
  <style  lang="scss" scoped>
.swiper-button-prev {
  margin-top: 40px;
  color: var(--blue-500);
  border: none;
  border-radius: 50%;
  background-color: rgba(0, 85, 255, 0.089);
  width: 40px;
  height: 40px;
  pointer-events: auto !important;
  position: absolute;
  top: 71.5%;
  left: 48%;
  transition: background-color 0.1s ease-in-out;
}
.swiper-button-next:hover {
  background-color: var(--blue-100);
}
.swiper-button-prev:hover {
  background-color: var(--blue-100);
}
.swiper-button-next {
  margin-top: 40px;
  color: var(--blue-500);
  border: none;
  border-radius: 50%;
  background-color: rgba(0, 85, 255, 0.089);
  width: 40px;
  height: 40px;
  pointer-events: auto !important;
  position: absolute;
  top: 71.5%;
  left: 55%;
  cursor: pointer;
  transition: background-color 0.1s ease-in-out;
}

.border-raduis {
  margin: 0 auto;
  border-radius: 18px;
  max-width: 1024px;
  position: relative;
  height: 376px;
}
.v-slide-group__next,
.v-slide-group__prev {
  /* align-items: center; */
  /* display: flex; */
  /* flex: 0 1 52px; */
  /* justify-content: center; */
  /* min-width: 52px; */
  /* cursor: pointer; */
  width: 0px !important;
}

.swiper {
  height: 376px;
}
.cover {
  border-radius: 24px !important;
}
.font {
  font-family: Poppins, ui-sans-serif, system-ui, -apple-system, Segoe UI,
    Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont,
    "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: 600;
  font-size: 16px;
  line-height: 2rem;
  color: var(--grey-900);
  margin-top: 24px;
}
.desc {
  font-family: Lato, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto,
    Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, "Segoe UI",
    "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 14px;
  line-height: 1.6rem;
  font-weight: 400;
  color: var(--grey-900);
  margin-top: 8px;
}
.border {
  /* border-radius: 16px; */
  border: none !important;
  width: 240px;
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
.swiper-button-prev::after {
  content: "";
  display: none !important;
}
.swiper-button-next::after {
  display: none;
}
@media (max-width: 1280px) {
  .border-raduis {
    max-width: 928px !important;
  }
  .border {
    width: 288px;
    margin: 0 10px;
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
  .border {
    width: 224px;
    margin: 0 auto;
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
  .swiper-button-next {
    display: none;
  }
  .swiper-button-prev {
    display: none;
  }
}
@media (max-width: 620px) {
  .swiper-slide-next {
    transform: translateX(-80px);
  }
  .swiper-slide-active {
    transform: translateX(-170px);
  }
}
@media (max-width: 390px) {
  .swiper-slide-next {
    transform: translateX(-90px) !important;
  }
  .swiper-slide-active {
    transform: translateX(-200px) !important;
  }
  .swiper-slide {
    transform: translateX(20px);
  }
}
</style>
  