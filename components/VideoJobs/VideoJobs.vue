<template>
  <div>
    <div class="hero-video-container dark">
      <div class="overlay"></div>
      <img
        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoICAgVCgoLDhgQDg0NGhYdFhsYIx8gJCIlFhoaHysvJh00ICEiJUExKC0vMjIyJSI4PTc1PCsxMjUBCgsLDg0OHBAQHDsoIig7Ozs7Ly8vLy81LzsvNS8vLy8vLy8vLy8vLy81LzUvLy8vLy8vLzsvNS81Ly8vLy8vL//AABEIAA0AGAMBIgACEQEDEQH/xAAXAAEAAwAAAAAAAAAAAAAAAAAGAAMF/8QAIBAAAQQCAQUAAAAAAAAAAAAAAQACAwQGMREFIUFRcf/EABUBAQEAAAAAAAAAAAAAAAAAAAMC/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAECERL/2gAMAwEAAhEDEQA/ANOve4GkTzi8D0+UexwlwrsDUMzSFppS/OVPTVDYGMTuCCeSM+e6iqxmJr53uO9KKatJg4f/2Q=="
        alt="Video thumbnail blurred"
        class="video-thumbnail"
      /><video
        playsinline
        loop
        autoplay
        muted
        preload="metadata"
        class="video"
        style=""
      >
        <source
          src="@/assets/Careers/1654780305-website-careers-hero-video.mp4"
          type="video/mp4"
        />
      </video>
      <div class="default-block wrapper">
        <div class="content">
          <h1 class="title">Entertain the world</h1>
          <div class="kpis-container kpis dark">
            <div class="kpi">
              <div class="title-one">40+</div>
              <div class="subtitle">nationalities</div>
            </div>
            <div class="kpi">
              <div class="title-one">700+</div>
              <div class="subtitle">employees</div>
            </div>
            <div class="kpi">
              <div class="title-one">9</div>
              <div class="subtitle">offices worldwide</div>
            </div>
          </div>
          <div class="buttons">
            <a 
              ><NuxtLink to="/careers">
              <button class="button dark primary small">
                See our open jobs
              </button></NuxtLink></a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.hero-video-container {
  padding-top: 80px;
  padding-bottom: 80px;
  top: -64px;
  min-height: 704px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: linear-gradient(180deg, var(--blue-900), var(--grey-900));
}

.overlay {
  background-color: rgba(15, 18, 26, 0.6);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.video-thumbnail {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.video {
  z-index: 0;
  -o-object-fit: cover;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content {
  width: 78%;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 3;
}

.title {
  color: var(--grey-000);
  margin: 0 auto;
  text-align: center;
  width: 66.666666667%;
  font-family: "Poppins", ui-sans-serif, system-ui, -apple-system, Segoe UI,
    Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont,
    "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: 700;
  font-size: 64px;
  line-height: 7.2rem;
}

.kpis {
  margin: 32px auto 0;
  width: 81.333333333%;
  display: flex;
  justify-content: space-evenly;
  grid-gap: 32px;
  gap: 32px;
}

.kpi {
  display: flex;
  width: 33.3333333333%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
}

.kpis-container .kpi:not(:last-child):after {
  content: "";
  display: block;
  position: absolute;
  right: -16px;
  top: 50%;
  transform: translateY(-50%);
  width: 1px;
  height: 64px;
  background-color: #353c4c;
  background-color: var(--grey-000);
}

.title-one {
  color: var(--grey-000);
  font-family: "Poppins", ui-sans-serif, system-ui, -apple-system, Segoe UI,
    Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont,
    "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";

  font-weight: 600;
  font-size: 32px;
  line-height: 4rem;
}

.subtitle {
  color: var(--grey-000);
  font-family: "Lato", ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto,
    Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, "Segoe UI",
    "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 18px;
  line-height: 2.8rem;
  font-weight: 400;
}

.buttons {
  margin-top: 32px;
  display: flex;
  justify-content: center;
  grid-gap: 24px;
  gap: 24px;
}

a {
  text-decoration: none;
}

.primary {
  background-color: var(--blue-500);
  color: #fff;
  color: var(--grey-000);
  padding: 8px 16px;
  grid-gap: 8px;
  gap: 8px;
  height: 40px;
  font-family: "Poppins", ui-sans-serif, system-ui, -apple-system, Segoe UI,
    Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont,
    "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: 600;
  font-weight: 600;
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

@media (max-width: 768px) {
  .hero-video-container {
    
    min-height: 608px !important;
  }

  .wrapper {
    margin-left: 24px !important;
    margin-right: 24px !important;
  }

  .title {
    width: 100% !important;
  }

  .kpis {
    flex-direction: column !important;
    align-items: center !important;
    grid-gap: 24px !important;
    gap: 24px !important;
  }

  .buttons {
    flex-direction: column !important;
    align-items: center !important;
  }
  .kpis-container .kpi:not(:last-child):after {
    content: "";
    display: block;
    position: absolute;
    right: -16px;
    top: 50%;
    transform: translateY(-50%);
    width: 0px !important;
    height: 64px;
    background-color: #353c4c;
    background-color: var(--grey-000);
  }
}

@media (max-width: 1024px) {
  .hero-video-container {
    min-height: 512px;
  }

  .wrapper {
    margin-left: 40px;
    margin-right: 40px;
  }

  .title {
    font-size: 40px;
    line-height: 4.8rem;
  }

  .kpis {
    width: 100%;
  }

  .kpi {
    width: 100%;
  }

  .title-one {
    font-size: 20px;
    line-height: 3.2rem;
  }

  .buttons {
    grid-gap: 16px;
    gap: 16px;
  }
}

@media (max-width: 1280px) {
  .wrapper {
    max-width: 928px;
  }
}
</style>