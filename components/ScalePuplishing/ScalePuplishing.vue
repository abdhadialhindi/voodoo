<template>
  <section class="banner-cta light">
    <div class="wrapper" ref="boxtwo">
      <div class="text">
        <div class="title">Ready to start working with Voodoo?</div>
        <div class="button">
          <a href="https://www.voodoo.io/publishing/sign-up" data-v-ce8a907a=""
            ><button class="button light primary small" data-v-ce8a907a="">
              Sign up
            </button></a
          >
        </div>
      </div>
      <div class="image" style="perspective: 1000px">
        <img
          ref="imgtwo"
          src="@/assets/puplishing/1651581529-illu-rocket-bannercta-light.png"
          alt="A rocket."
          class="img"
          style="
            transition-property: transform;
            transition-duration: 1000ms;
            transform-origin: center center;
            transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
          "
        />
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { gsap } from "gsap";

// const box:any = this.$refs.box;

export default {
  mounted() {
    const boxtwo: any = this.$refs.boxtwo; // get the box element from the DOM using refs.

    const imgtwo: any = this.$refs.imgtwo; // get the image element from the DOM using refs.

    // create a timeline instance to animate with gsap

    let tl = gsap.timeline();

    // add a mousemove event listener to the box element

    boxtwo.addEventListener(
      "mousemove",
      (e: { [x: string]: number; offsetX: number; offsetY: number }) => {
        // calculate the mouse position relative to the center of the box element

        let x = (e.clientX - boxtwo.offsetWidth / 2) / 5;

        let y = (e.clientY - boxtwo.offsetHeight / 2) / 5;

        // animate the image position with gsap, relative to its original position in the center of the box element

        tl.to(imgtwo, 0, { rotateX: x / 7, rotateY: y / 7 });
      }
    );
    boxtwo.addEventListener("mouseleave", () => {
      tl.to(imgtwo, 0, { x: 0, y: 0 });
    });
  },
};
</script>
<style scoped>
.banner-cta {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 64px 0;
  width: 100%;
}
.wrapper {
  border-radius: var(--radius-32);
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 24px;
  -moz-column-gap: 24px;
  column-gap: 24px;
  max-width: 1024px;
  margin: 0 auto;
  background-color: var(--blue-050);
}
.text {
  grid-column: 1 / span 6;
  grid-row: 1;
  padding: 80px 0 80px 64px;
  display: flex;
  flex-direction: column;
}
.image {
  grid-column: 6/-1;
  grid-row: 1;
  display: grid;
  align-items: center;
  position: relative;
}
.title {
  color: var(--grey-900);
  margin-bottom: 32px;
  font-family: Poppins, ui-sans-serif, system-ui, -apple-system, Segoe UI,
    Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont,
    "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: 700;
  font-size: 40px;
  line-height: 3.6rem;
}
.button.primary {
  background-color: #05f;
  background-color: var(--blue-500);
  color: #fff;
  color: var(--grey-000);
}
.button.small {
  padding: 8px 16px;
  grid-gap: 8px;
  gap: 8px;
  font-family: Poppins, ui-sans-serif, system-ui, -apple-system, Segoe UI,
    Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont,
    "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: 700;
  font-size: 16px;
}
a {
  text-decoration: none;
}
.button {
  cursor: pointer;
  width: max-content;
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border-radius: 32px;
  border-radius: var(--radius-32);
  border: 0 solid transparent;
  transition: background-color 0.1s ease-in-out;
  display: flex;

  justify-content: center;
}
.image {
  grid-column: 6/-1;
  grid-row: 1;
  display: grid;
  align-items: center;
  position: relative;
}
.img {
  position: absolute;
  width: 100%;
  margin-left: 24px;
}
@media (max-width: 768px) {
  .banner-cta {
    padding: unset !important;
  }

  .wrapper {
    margin-left: 24px !important;
    margin-right: 24px !important;
    padding: 24px !important;
    grid-template-columns: unset !important;
  }

  .text {
    width: 100% !important;
    grid-column: 1/-1 !important;
    grid-row: 1 !important;
    padding: 0 !important;
    margin-bottom: 40px !important;
    align-items: center !important;
  }

  .title {
    text-align: center !important;
    font-size: 24px !important;
    line-height: 2.2rem !important ;
  }

  .image {
    width: 100% !important;
    grid-column: 1/-1 !important;
    grid-row: 2 !important;
  }

  .image img {
    position: unset !important;
    max-width: 224px !important;
    margin: 0 auto !important;
  }
}

@media (max-width: 1024px) {
  .wrapper {
    margin-left: 40px;
    margin-right: 40px;
  }

  .title {
    font-size: 24px;
    line-height: 2.2rem;
  }
}

@media (max-width<1280px) {
  .wrapper {
    max-width: 928px;
  }
}
</style>