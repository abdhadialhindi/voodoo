<template>
  <div>
    <div class="text-center width-title">
      <h1 class="title">Top of the charts</h1>
    </div>

    <div class="width-list mt-9 mb-16 d-flex">
      <div class="col">
        <div
          class="d-flex justify-space-between wrraper"
          v-for="(item, index) in items"
          :key="index"
        >
          <img :src="item.src" class="app-icon" />
          <article class="ms-4">
            <h3 class="title-one mb-2">
              {{ item.title }}
            </h3>
            <p class="desc">
              {{ item.desc }}
            </p>
          </article>
          <a
            
            target="_blank"
            class="icon"
            ><svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              aria-label="external-link"
              role="presentation"
              class="base-icon"
            >
              <g fill="var(--blue-500)">
                <g>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.25 5C14.25 4.58579 14.5858 4.25 15 4.25H19C19.4142 4.25 19.75 4.58579 19.75 5V9C19.75 9.41421 19.4142 9.75 19 9.75C18.5858 9.75 18.25 9.41421 18.25 9V5.75H15C14.5858 5.75 14.25 5.41421 14.25 5Z"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19.5303 4.46967C19.8232 4.76256 19.8232 5.23744 19.5303 5.53033L13.5303 11.5303C13.2374 11.8232 12.7626 11.8232 12.4697 11.5303C12.1768 11.2374 12.1768 10.7626 12.4697 10.4697L18.4697 4.46967C18.7626 4.17678 19.2374 4.17678 19.5303 4.46967Z"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9 4.75C6.65279 4.75 4.75 6.65279 4.75 9V15C4.75 17.3472 6.65279 19.25 9 19.25H15C17.3472 19.25 19.25 17.3472 19.25 15V13C19.25 12.5858 19.5858 12.25 20 12.25C20.4142 12.25 20.75 12.5858 20.75 13V15C20.75 18.1756 18.1756 20.75 15 20.75H9C5.82436 20.75 3.25 18.1756 3.25 15V9C3.25 5.82436 5.82436 3.25 9 3.25H11C11.4142 3.25 11.75 3.58579 11.75 4C11.75 4.41421 11.4142 4.75 11 4.75H9Z"
                  ></path>
                </g>
              </g></svg
          ></a>
        </div>
      </div>

      <div class="column">
        <div class="video-block">
          <div class="position">
            <img
              src="../../assets/images/photo/iphonefull.png"
              alt=""
              class="iphone"
            />
            <video autoplay loop muted class="video">
              <source
                src="https://www.datocms-assets.com/62418/1647340593-helix-jump.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </div>
    <div class="width-btn d-flex justify-center">
      <v-btn color="#d2e5ff" class="color mb-15" rounded>
        See more on the App store</v-btn
      >
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { useDisplay } from "vuetify";

export default defineComponent({
  setup() {
    const items = [
      {
        src: "https://www.datocms-assets.com/62418/1647340593-helix-jump.mp4",
        src_video: "https://www.datocms-assets.com/62418/1647442710-paper2.mp4",
        title: "Helix Jump",
        desc: "12800000 downloads",
      },
      {
        src: "https://www.datocms-assets.com/62418/1647340558-icon-paper-io-2.png?h=156&w=156",
        src_video: "https://www.datocms-assets.com/62418/1647442710-paper2.mp4",
        title: "Paper.io 2",
        desc: "12800000 downloads",
      },
      {
        src: "https://www.datocms-assets.com/62418/1647443105-aquapark.png?h=156&w=156",
        src_video:
          "https://www.datocms-assets.com/62418/1647443090-aquapark.mp4",
        title: "Aquapark.io",
        desc: "12800000 downloads",
      },
      {
        src: "https://www.datocms-assets.com/62418/1647443141-crowd_city.png?h=156&w=156",
        src_video:
          "https://www.datocms-assets.com/62418/1647443147-crowd-city.mp4",
        title: "Crowd city",
        desc: "12800000 downloads",
      },
      {
        src: "https://www.datocms-assets.com/62418/1647443392-hole_io.png?h=156&w=156",
        src_video:
          "https://www.datocms-assets.com/62418/1647443385-hole-io.mp4",
        title: "Hole.io",
        desc: "12800000 downloads",
      },
      {
        src: "https://www.datocms-assets.com/62418/1647443482-snake_vs_block.png?h=156&w=156",
        src_video:
          "https://www.datocms-assets.com/62418/1647443488-snake-vs-block.mp4",
        title: "Snack vs Block",
        desc: "12800000 downloads",
      },
      {
        src: "https://www.datocms-assets.com/62418/1647444524-shortcut_run.png?h=156&w=156",
        src_video:
          "https://www.datocms-assets.com/62418/1647444529-shortcut-run.mp4",
        title: "Shortcut Run",
        desc: "12800000 downloads",
      },
      {
        src: "https://www.datocms-assets.com/62418/1647443744-wood_turning.png?h=156&w=156",
        src_video:
          "https://www.datocms-assets.com/62418/1647443751-wood-turning.mp4",
        title: "Woodturning",
        desc: "12800000 downloads",
      },
      {
        src: "https://www.datocms-assets.com/62418/1647443794-spiral_roll.png?h=156&w=156",
        src_video:
          "https://www.datocms-assets.com/62418/1647443799-spiral-roll.mp4",
        title: "Spiral Roll",
        desc: "12800000 downloads",
      },
      {
        src: "https://www.datocms-assets.com/62418/1647443836-scribbble_rider.png?h=156&w=156",
        src_video:
          "https://www.datocms-assets.com/62418/1647443831-scribbble-rider.mp4",
        title: "Scribble Rider",
        desc: "12800000 downloads",
      },
      {
        src: "https://www.datocms-assets.com/62418/1647443872-cube_surfer.png?h=156&w=156",
        src_video:
          "https://www.datocms-assets.com/62418/1647443878-cube-surfer.mp4",
        title: "Cube Surfer",
        desc: "12800000 downloads",
      },
      {
        src: "https://www.datocms-assets.com/62418/1647444490-stack_colors.png?h=156&w=156",
        src_video:
          "https://www.datocms-assets.com/62418/1647444484-stack-colors.mp4",
        title: "Stack colors",
        desc: "12800000 downloads",
      },
      {
        src: "https://www.datocms-assets.com/62418/1647447078-push_em_all.png?h=156&w=156",
        src_video:
          "https://www.datocms-assets.com/62418/1647447073-push-em-all.mp4",
        title: "Push em all",
        desc: "12800000 downloads",
      },
      {
        src: "https://www.datocms-assets.com/62418/1647444563-draw_climber.jpg?h=156&w=156",
        src_video:
          "https://www.datocms-assets.com/62418/1647444559-draw-climber.mp4",
        title: "Draw climber",
        desc: "12800000 downloads",
      },
      {
        src: "https://www.datocms-assets.com/62418/1647444590-color_road.jpg?h=156&w=156",
        src_video:
          "https://www.datocms-assets.com/62418/1647444594-color-road.mp4",
        title: "Color Road",
        desc: "12800000 downloads",
      },
      {
        src: "https://www.datocms-assets.com/62418/1647447003-draw_joust.png?h=156&w=156",
        src_video:
          "https://www.datocms-assets.com/62418/1647446999-draw-joust.mp4",
        title: "Draw Joust",
        desc: "12800000 downloads",
      },
      {
        src: "https://www.datocms-assets.com/62418/1647447036-fire_balls_3d.png?h=156&w=156",
        src_video:
          "https://www.datocms-assets.com/62418/1647447041-fire-balls-3d.mp4",
        title: "Fire Balls 3D",
        desc: "12800000 downloads",
      },
      {
        src: "https://www.datocms-assets.com/62418/1647447103-roof_rails.png?h=156&w=156",
        src_video:
          "https://www.datocms-assets.com/62418/1647447107-roof-rails.mp4",
        title: "Roof Rails",
        desc: "12800000 downloads",
      },
      {
        src: "https://www.datocms-assets.com/62418/1647447138-ball_blast.png?h=156&w=156",
        src_video:
          "https://www.datocms-assets.com/62418/1647447135-ball-blast.mp4",
        title: "Ball Blast",
        desc: "12800000 downloads",
      },
      {
        src: "https://www.datocms-assets.com/62418/1647447163-roller_splat.png?h=156&w=156",
        src_video:
          "https://www.datocms-assets.com/62418/1647447167-roller-splat.mp4",
        title: "Roller Splat",
        desc: "12800000 downloads",
      },
    ];

    const { name } = useDisplay();

    const width = computed(() => {
      return name.value;
    });

    return {
      items,
      width,
    };
  },
});
</script>
<style scoped lang="scss">
.icon {
  display: none;
  position: absolute;
  width: 32px;
  height: 32px;
  top: 8px;
  right: 8px;
  align-items: center;
  justify-content: center;
  transition: all 0.1s ease-in-out;
}
a {
  text-decoration: none;
}
.icon:hover{
    transform: scale(1.1);
}
.base-icon {
  display: inline-block;
  vertical-align: baseline;
}
.width-btn {
  width: 50%;
}
.title {
  font-family: "Poppins", ui-sans-serif, system-ui, -apple-system, Segoe UI,
    Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont,
    "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";

  line-height: 4.4rem;
  font-weight: 700;
  font-size: 48px;
  color: var(--grey-900);
}
.col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;
  gap: 24px;
}

.width-list {
  display: flex;
  max-width: 1024px;
  margin: auto;
}

.width-title {
  width: 83.3333333333%;
  display: flex;
  flex-direction: column;
  grid-gap: 24px;
  gap: 24px;
  text-align: center;
}

.app-icon {
  display: block;
  overflow: hidden;
  position: relative;
  width: 64px;
  height: 64px;
  box-shadow: 0 15px 30px rgb(0 33 99 / 8%), 0 2px 5px rgb(0 33 99 / 15%);
  box-shadow: var(--shadow-m);
  border-radius: 16px;
  border-radius: var(--radius-16);
  flex-shrink: 0;
}
.desc {
  font-size: 14px;
  font-weight: 400;
  font-family: "Lato", ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto,
    Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, "Segoe UI",
    "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
  color: var(--grey-900);
}

.iphone {
  width: 276px;
  height: 100%;
  position: relative;
  z-index: 1;
  transform: translateZ(0);
}

.video {
  position: absolute;
  top: 13px;
  width: 247px;
  left: 15px;
  border-radius: 16px;
  border-radius: var(--radius-16);
  z-index: 0;
}

.position {
  position: relative;
}

.wrraper:hover {
  background-color: var(--blue-025);
  .icon {
    display: flex;
  }
}

.wrraper {
  border-radius: 16px;
  border-radius: var(--radius-16);
  display: flex;
  align-items: center;
  transition: all 0.2s ease-in-out;
  padding: 32px 24px;
  grid-gap: 24px;
  gap: 24px;
  position: relative;
  cursor: pointer;
}
.title-one {
  font-size: 16px;
  font-family: "Hartwell", ui-sans-serif, system-ui, -apple-system, Segoe UI,
    Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont,
    "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: 600;
  color: var(--grey-900);
}
.column {
  height: 558px;
  margin: 0 auto;
  position: sticky;
  position: sticky;
  top: 128px;

  display: flex;
  justify-content: center;
  filter: drop-shadow(0 30px 60px rgba(0, 33, 99, 0.1))
    drop-shadow(0 2px 5px rgba(0, 33, 99, 0.1));
}

.color {
  color: var(--blue-500);
  font-family: Poppins, ui-sans-serif, system-ui, -apple-system, Segoe UI,
    Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont,
    "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-weight: 600;
    font-size: 16px;
    text-transform: none;
}
.width-row {
  width: 100%;
}
@media (max-width: 1024px) {
  .col {
    grid-template-columns: 1fr;
    justify-items: center;
    grid-gap: 16px;
    gap: 16px;
  }
}
@media (max-width: 768px) {
  .width-btn {
    width: 100%;
  }
  .column {
    display: none;
  }
  .app-icon {
    width: auto !important;
    height: auto !important;
  }
  .title-one {
    text-align: left !important;
  }
  .desc {
    text-align: left !important;
  }
  .wrraper {
    flex-direction: column;
    width: auto;
    grid-gap: 24px;
    gap: 24px;
    padding: 0;
  }
  .col {
    width: 100% !important;
    grid-template-columns: 1fr 1fr !important;
    grid-gap: 40px;
    gap: 40px;
  }
  .media {
    width: auto !important;
  }
}
@media (max-width: 1024px) {
  .title {
    font-size: 28px;
    line-height: 2.5;
  }
  .width-title {
  }
}
@media (max-width: 1280px) {
  .width-title {
    width: 100%;
    grid-gap: 16px;
    gap: 16px;
  }
}
@media (max-width: 320px) {
  .col {
    grid-template-columns: 1fr !important;
  }
}
</style>
