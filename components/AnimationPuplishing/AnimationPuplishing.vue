<template>
  <section class="marquee-section light">
    <div class="wrapper default-block">
      <h2 class="title">Some studios that love us</h2>
      <div class="marquee">
        <div
          class="logos"
          style="--image-width: 2023.5px; --negative-image-width: -2023.5px"
        >
          <img
            src="@/assets/puplishing/1651664212-logos-marquee-publishing-2x.png"
            alt="Marquee Logo"
            class="logo"
            style="--image-width: 2023.5px; --negative-image-width: -2023.5px"
          /><img
            src="@/assets/puplishing/1651664212-logos-marquee-publishing-2x.png"
            alt="Marquee Logo"
            class="logo"
            style="--image-width: 2023.5px; --negative-image-width: -2023.5px"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.default-block {
  max-width: 1024px;
  margin: 0 auto;
}
.title {
  color: black;
  text-align: center;
  margin-bottom: 32px;
  font-family: "Poppins", ui-sans-serif, system-ui, -apple-system, Segoe UI,
    Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont,
    "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: 600;
  font-size: 20px;
  line-height: 2.2rem;
}
.marquee {
  position: relative;
  overflow: hidden;
}
.logos {
  overflow: hidden;
  will-change: transform;
  animation: marquee 35s linear infinite;
  display: inline-flex;
}
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(var(--negative-image-width));
  }
}
.logo {
  max-height: 64px;
  padding-right: 96px;
  width: var(--image-width);
}
.logos:hover {
  animation-play-state: paused;
}
@media (max-width: 768px) {
  .default-block {
    margin-left: 24px;
    margin-right: 24px;
  }
}
@media (max-width: 1024px) {
  .default-block {
    margin-left: 40px;
    margin-right: 40px;
  }
  .title {
    font-size: 18px;
    line-height: 1.7rem;
  }
}
@media (max-width: 1280px) {
  .default-block {
    max-width: 928px;
  }
}
</style>