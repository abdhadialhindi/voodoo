<template>
  <section class="text-image light">
    <div class="default-block wrapper">
      <div class="text">
        <p class="label"><b>GAMES</b></p>
        <h3 class="title title-3">We launch chart-topping hits</h3>
        <div class="rich-text paragraph-1 custom-bullet">
          <p>
            Our portfolio of hyper-casual and casual games has over 6 billion
            downloads and entertains over 300 million people per month.
          </p>
        </div>
        <div class="buttons">
          <a  class=""
            ><button class="button light primary small">
              See our games
              <!---->
            </button></a
          >
        </div>
      </div>
      <div class="image image-styles">
        <!---->
        <div class="video-container">
          <video
            poster="https://image.mux.com/Jzulm8Z1vm01OfMIvnsH5iIlHoDjNUwzN/thumbnail.jpg?time=0"
            playsinline
            loop
            autoplay
            muted
            preload="metadata"
            class="video"
          >
            <source
              src="https://www.datocms-assets.com/62418/1656073902-home-animation-1.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.page section:first-of-type > div {
  position: relative;
}
.wrapper {
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-gap: 136px;
  gap: 136px;
}
.text {
  justify-content: center;
  display: flex;
  flex-direction: column;
  width: 50%;
}
.label {
  color: var(--blue-500);
  font-family: "Lato", ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto,
    Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, "Segoe UI",
    "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 14px;
  line-height: 2.4rem;
  font-weight: 400;
}
.title {
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 40px;
  line-height: 2.8rem;
  margin-bottom: 24px;
}
.rich-text {
  color: var(--grey-900);
  font-family: "Lato", ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto,
    Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, "Segoe UI",
    "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 18px;
  line-height: 1.8rem;
  font-weight: 400;
}
.rich-text p:last-child {
  margin-bottom: 0;
}
.buttons {
  margin-top: 24px;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
}
a {
  text-decoration: none;
}
.primary {
  background-color: var(--blue-500);
  color: var(--grey-000);
  padding: 8px 16px;
  grid-gap: 8px;
  gap: 8px;
  height: 40px;
  font-family: Poppins, ui-sans-serif, system-ui, -apple-system, Segoe UI,
    Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont,
    "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
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
  width: 41.6666666667%;
}
.video-container {
  display: flex;
  align-items: center;
}
.video {
  border-radius: 16px;
  border-radius: var(--radius-16);
  box-shadow: 0 30px 60px rgb(0 33 99 / 10%), 0 2px 5px rgb(0 33 99 / 10%);
  box-shadow: var(--shadow-l);
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
}
@media (max-width: 768px) {
  .wrapper {
    margin-left: 24px !important;
    margin-right: 24px !important;
    flex-direction: column;
    align-items: center !important;
    flex-direction: column-reverse !important;
  }
  .text {
    width: 100% !important;
  }
  .image {
    width: 100% !important;
    margin-bottom: 24px !important;
  }
}
@media (max-width: 1024px) {
  .wrapper {
    margin-left: 40px;
    margin-right: 40px;
  }
  .text {
    width: 50%;
  }
  .title {
    font-size: 28px;
    line-height: 3.2rem;
    margin-bottom: 16px;
  }
  .rich-text {
    width: 100%;
  }
  .buttons {
    margin-top: 24px;
  }
  .image {
    width: 50%;
  }
}
@media (max-width: 1280px) {
  .wrapper {
    max-width: 928px;
    grid-gap: 24px;
    gap: 24px;
  }
  .text {
    width: 58.3333333333%;
  }
}
</style>