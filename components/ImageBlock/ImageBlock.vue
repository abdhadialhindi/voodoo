<template>
  <section class="banner-cta dark">
    <div class="wrapper" ref="boxtwo">
      <div class="text">
        <div class="title">Ready to make a hit in the blockchain space?</div>
        <div class="button">
          <a 
            ><button class="button light primary small">
              Contact us
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                aria-label="arrow-right"
                role="presentation"
                class="base-icon"
              >
                <g fill="var(--grey-000)">
                  <g>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.25 12C4.25 11.5858 4.58579 11.25 5 11.25H19C19.4142 11.25 19.75 11.5858 19.75 12C19.75 12.4142 19.4142 12.75 19 12.75H5C4.58579 12.75 4.25 12.4142 4.25 12Z"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M19.5303 11.4697C19.8232 11.7626 19.8232 12.2374 19.5303 12.5303L14.5303 17.5303C14.2374 17.8232 13.7626 17.8232 13.4697 17.5303C13.1768 17.2374 13.1768 16.7626 13.4697 16.4697L18.4697 11.4697C18.7626 11.1768 19.2374 11.1768 19.5303 11.4697Z"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.4697 6.46967C13.7626 6.17678 14.2374 6.17678 14.5303 6.46967L19.5303 11.4697C19.8232 11.7626 19.8232 12.2374 19.5303 12.5303C19.2374 12.8232 18.7626 12.8232 18.4697 12.5303L13.4697 7.53033C13.1768 7.23744 13.1768 6.76256 13.4697 6.46967Z"
                    ></path>
                  </g>
                </g>
              </svg></button
          ></a>
        </div>
      </div>
      <div class="image" style="perspective: 1000px" ref="imgtwo">
        <img
          src="@/assets/blockchain/1643708751-rocket.png"
          alt="A rocket."
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

        tl.to(imgtwo, 0, { rotateX: x / 4, rotateY: y / 4 });
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
  position: relative;
  top: -64px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 64px 0;
  width: 100%;
  background-color: var(--grey-900);
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
  background-color: var(--grey-800);
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
  color: var(--grey-000);
  margin-bottom: 32px;
  font-family: "Poppins", ui-sans-serif, system-ui, -apple-system, Segoe UI,
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

.small {
  padding: 8px 16px;
  grid-gap: 8px;
  gap: 8px;
  height: 40px;
  font-family: "Poppins", ui-sans-serif, system-ui, -apple-system, Segoe UI,
    Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont,
    "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: 600;
  font-size: 16px;
  line-height: 1.4rem;
}

a {
  text-decoration: none;
}

.base-icon {
  width: 24px;
  height: 24px;
  display: inline-block;
  vertical-align: baseline;
}

.image {
  grid-column: 6/-1;
  grid-row: 1;
  display: grid;
  align-items: center;
  position: relative;
}

img {
  position: absolute;
  width: 100%;
  margin-left: 24px;
}

.button {
  cursor: pointer;
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border-radius: 32px !important;
  border-radius: var(--radius-32) !important;
  border: 0 solid transparent;
  transition: background-color 0.1s ease-in-out;
  display: flex;
  justify-content: center;
}

@media (max-width: 768px) {
  .banner-cta {
    padding: unset !important;
  }

  .wrapper {
    grid-template-columns: unset !important;
    margin-left: 24px !important;
    margin-right: 24px !important;
    padding: 24px !important;
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
    font-size: 26px !important;
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
    font-size: 24px !important;
    line-height: 2rem !important;
  }
}

@media (max-width: 1280px) {
  .wrapper {
    max-width: 928px !important;
  }
}
</style>