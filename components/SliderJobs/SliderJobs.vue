<template>
  <div>
    <div
      v-if="width == 'lg' || width == 'md' || width == 'xl' || width == 'sm'"
      class="container"
    >
      <swiper
        :slidesPerView="width == 'md' || width=='sm' ? 3 : 3"
        :spaceBetween="width=='md' || width=='sm' ? 50 :10"
        :modules="modules"
        class="mySwiper"
        id="app"
        :loop="true"
        speed="1000"
        allowSlidePrev   
        effect="coverflow"
            
      >
        <swiper-slide
          v-for="(item, index) in items"
          :key="`${index}${keyOfSwiper}`"
          class="edit"
        >
          <div class="video-jump">
            <video
              preload="metadata"
              :src="item.src"
              :controls="item ? true : false"
              class="video"
              playsinline
              v-if="item.poster == true"
            >
              <!-- <source src="@/assets/videos/video2.mp4" type="video/mp4"> -->
            </video>
            <img
              v-else
              :src="item.img_url"
              alt=""
              class="video"
              @click="clickFun(item)"
            />
            <div
              class="thumbnail-overlay"
              v-show="item.poster == false"
              @click="clickFun(item)"
            >
              <div class="content-block">
                <a>
                  <button class="button light primary small no-text">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      aria-label="play-triangle"
                      role="presentation"
                      class="base-icon"
                    >
                      <g fill="#fff">
                        <g>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M19.7 14.0098C19.6999 14.0099 19.7 14.0098 19.7 14.0098L8.8565 20.6368C7.22285 21.6344 5.12658 20.4593 5.12658 18.5446L5.12658 5.29052C5.12658 3.37595 7.22267 2.20043 8.85647 3.1992M8.85647 3.1992L19.7 9.82528C19.7 9.8253 19.6999 9.82526 19.7 9.82528C21.265 10.7813 21.2649 13.0538 19.7 14.0098M19.0029 12.8687C19.7146 12.434 19.7146 11.4011 19.0029 10.9664L8.15923 4.34021C7.41645 3.88607 6.46376 4.42025 6.46376 5.29052L6.46375 18.5446C6.46375 19.4148 7.41645 19.9494 8.15941 19.4957L19.0029 12.8687Z"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </button>
                </a>
                <div class="text-block">
                  <p class="title">Arthur</p>
                  <p class="subtitle">Blockchain Tech Lead</p>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
   
    </div>
    <div v-else>
      <div class="video-jump2">
        <video
          preload="metadata"
          src="@/assets/Careers/video-slider.mp4"
          :controls="items[0] ? true : false"
          class="video"
          playsinline
          v-if="items[0].poster == true"
        >
          <!-- <source src="@/assets/videos/video2.mp4" type="video/mp4"> -->
        </video>
        <img
          v-else
          src="@/assets/Careers/jobs-slider-responsive.jpg"
          alt=""
          class="video"
          @click="clickFun(items[0])"
        />
        <div
          class="thumbnail-overlay2"
          v-show="items[0].poster == false"
          @click="clickFun(items[0])"
        >
          <div class="content-block">
            <a>
              <button class="button light primary small no-text">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  aria-label="play-triangle"
                  role="presentation"
                  class="base-icon"
                >
                  <g fill="#fff">
                    <g>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M19.7 14.0098C19.6999 14.0099 19.7 14.0098 19.7 14.0098L8.8565 20.6368C7.22285 21.6344 5.12658 20.4593 5.12658 18.5446L5.12658 5.29052C5.12658 3.37595 7.22267 2.20043 8.85647 3.1992M8.85647 3.1992L19.7 9.82528C19.7 9.8253 19.6999 9.82526 19.7 9.82528C21.265 10.7813 21.2649 13.0538 19.7 14.0098M19.0029 12.8687C19.7146 12.434 19.7146 11.4011 19.0029 10.9664L8.15923 4.34021C7.41645 3.88607 6.46376 4.42025 6.46376 5.29052L6.46375 18.5446C6.46375 19.4148 7.41645 19.9494 8.15941 19.4957L19.0029 12.8687Z"
                      ></path>
                    </g>
                  </g>
                </svg>
              </button>
            </a>
            <div class="text-block">
              <p class="title">Arthur</p>
              <p class="subtitle">Blockchain Tech Lead</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
import { defineComponent } from "vue";

import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { ref } from "vue";
// import required modules
import { Pagination, EffectFlip } from "swiper";
import { useDisplay } from "vuetify";
export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    let items = ref([
      {
        src: new URL("@/assets/Careers/video-slider.mp4", import.meta.url)
          .href,
          img_url:new URL("@/assets/Careers/jobs-slider-responsive.jpg", import.meta.url)
          .href,
        poster: false,
      },
      {
        src: new URL("@/assets/Careers/video-slider.mp4", import.meta.url)
          .href,
          img_url:new URL("@/assets/Careers/jobs-slider-responsive.jpg", import.meta.url)
          .href,
        poster: false,
      },
      {
        src: new URL("@/assets/Careers/video-slider.mp4", import.meta.url)
          .href,
          img_url:new URL("@/assets/Careers/jobs-slider-responsive.jpg", import.meta.url)
          .href,
        poster: false,
      },
      {
        src: new URL("@/assets/Careers/video-slider.mp4", import.meta.url)
          .href,
          img_url:new URL("@/assets/Careers/jobs-slider-responsive.jpg", import.meta.url)
          .href,
        poster: false,
      },
      {
        src: new URL("@/assets/Careers/video-slider.mp4", import.meta.url)
          .href,
          img_url:new URL("@/assets/Careers/jobs-slider-responsive.jpg", import.meta.url)
          .href,
        poster: false,
      },
      {
        src: new URL("@/assets/images/brand/facebook.jpg", import.meta.url)
          .href,
          img_url:new URL("@/assets/Careers/jobs-slider-responsive.jpg", import.meta.url)
          .href,
        poster: false,
      },
      {
        src: new URL("@/assets/Careers/video-slider.mp4", import.meta.url)
          .href,
          img_url:new URL("@/assets/Careers/jobs-slider-responsive.jpg", import.meta.url)
          .href,
        poster: false,
      },
      {
        src: new URL("@/assets/Careers/video-slider.mp4", import.meta.url)
          .href,
          img_url:new URL("@/assets/Careers/jobs-slider-responsive.jpg", import.meta.url)
          .href,
        poster: false,
      },
      {
        src: new URL("@/assets/Careers/video-slider.mp4", import.meta.url)
          .href,
          img_url:new URL("@/assets/Careers/jobs-slider-responsive.jpg", import.meta.url)
          .href,
        poster: false,
      },
      {
        src: new URL("@/assets/Careers/video-slider.mp4", import.meta.url)
          .href,
          img_url:new URL("@/assets/Careers/jobs-slider-responsive.jpg", import.meta.url)
          .href,
        poster: false,
      },
    ]);
    const { name } = useDisplay();
    const width = computed(() => {
      return name.value;
    });
    function clickFun(item) {
      item.poster = true;
    }
    return {
      modules: [Pagination, EffectFlip],
      items,
      clickFun,
      width,
    };
  },
});
</script>

<style  lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.swiper-slide-active {
  opacity: 0.242948;
}

.swiper-slide {
  opacity: 0.5;
  cursor: pointer;

  height: 383px !important;
  transform: scale(0.7) translateX(-40%);
}

.swiper-slide-prev {
  opacity: 1;
}

.swiper-slide-next {
  width: 800px !important;
  // transform: perspective(-1px) rotateX(0deg) rotateY(0deg) scale(0.814919);
  transform: scale(1) translateX(-20%);
  opacity: 1;
}

.video {
  /* position: relative; */
  object-fit: cover;
  /* width: 403px;     */
  width: 100%;
  /* overflow: hidden; */
  height: 100%;

  /* margin-bottom: 24px; */
  overflow-clip-margin: content-box;
  /* transform: translateZ(20%); */
  border-radius: 20px;
}

.edit {
  border-radius: 20px;
}
.thumbnail-overlay2 {
  position: relative;
  width: 100%;
  height: 100%;
  bottom: 93px;
  left: 0;
  background: linear-gradient(
    180deg,
    rgba(16, 19, 27, 0) 50%,
    rgba(16, 19, 27, 0.75)
  );
  display: flex;
  align-items: flex-end;
  border-radius: 32px;
}
.video-jump {
  width: 100%;
  height: 100%;
}

.mySwiper {
  display: flex;
  justify-content: center;
}

.thumbnail-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  left: 0;
  background: linear-gradient(
    180deg,
    rgba(16, 19, 27, 0) 50%,
    rgba(16, 19, 27, 0.75)
  );
  display: flex;
  align-items: flex-end;
  border-radius: 32px;
}

.content-block {
  margin-left: 24px;
  margin-bottom: 24px;
  display: flex;
  grid-gap: 16px;
  gap: 16px;
  align-items: center;
}

.text-block {
  color: #fff;
}

.title {
  font-weight: 700;
  font-size: 1.5rem;
}

.subtitle {
  font-weight: 400;
  font-size: 1.1rem;
}

.button.no-text.small {
  width: 24px;
}

.button.primary,
.button.submit {
  background-color: #05f;
  color: #fff;
}

.button.small {
  padding: 8px 16px;
  grid-gap: 8px;
  gap: 8px;
  height: 32px;
}

.button.small,
.rich-text h6 {
  font-family: Hartwell, ui-sans-serif, system-ui, -apple-system, Segoe UI,
    Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont,
    "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 2.4rem;
}

.button {
  cursor: pointer;

  width: max-content;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border-radius: 100%;

  border: 0 solid transparent;
  transition: background-color 0.1s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
}

.button.small .base-icon {
  width: 24px;
  height: 24px;
  position: absolute;
  display: inline-block;
  vertical-align: baseline;
  background-color: #05f;
}
.video-jump2 {
  width: 88%;
  margin-left: 24px;
  margin-right: 24px;
  height: 80%;
}

@media (max-width: 1024px) {
  .edit {
    
    height: 252px !important;
  }
  .swiper-slide-next {
    width: 448px !important;
    transform: scale(1) translateX(-19%) !important ;
  }
  .swiper-slide {
    transform: scale(0.7) translateX(-50%) ;
  }

  
  
}

@media (max-width: 768px) {
  .edit {
    width: 295px !important;
    height: 168px !important;
  }

  .swiper-slide {
    transform: scale(1) translateX(4%) !important;
    opacity: 1;
    margin-left: 4px !important;
    margin-right: 16px !important;
  }
}
</style>