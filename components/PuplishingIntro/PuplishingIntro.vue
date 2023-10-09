<template>
  <div class="hero-alt-container light">
    <div class="default-block">
      <div class="image-desktop" style="top: calc(64px + -0.541328%)">
        <div style="display: block; overflow: hidden; position: relative">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOTIwIiBoZWlnaHQ9IjgwMCI+PC9zdmc+"
            role="presentation"
            style="display: block; width: 100%"
          />
          <div
            style="
              background-image: url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBhUICAgLCg0VDg8QEQ8ODhkdFREYFx8ZGBYfFhUaHy0vGikoHSEWJDUlKC0vMjIyHSI4PTcwPCsxMi8BCgsLDg0OHBAQHDsoIigvLy87Ozs7Ozs7Oy8vLy8vLy8vOzs7Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIAAoAGAMBIgACEQEDEQH/xAAXAAADAQAAAAAAAAAAAAAAAAABAwQH/8QAHBAAAgMAAwEAAAAAAAAAAAAAAAECBBETMVED/8QAFwEAAwEAAAAAAAAAAAAAAAAAAgMEAf/EABkRAAMAAwAAAAAAAAAAAAAAAAABAhEhMf/aAAwDAQACEQMRAD8A1r53nN44YVKcWt0kaXgyHQTRgq1d41kUEnthJbi29UOlrHD/2Q==');
              background-size: cover;
              opacity: 0;
              transition: opacity 500ms ease 500ms;
              position: absolute;
              left: 0px;
              top: 0px;
              width: 100%;
              height: 100%;
            "
          ></div>
          <picture>
            <source
              srcset="
                https://www.datocms-assets.com/62418/1654775899-hero-publishing.png?dpr=0.25&amp;fm=webp&amp;h=800&amp;w=1920  480w,
                https://www.datocms-assets.com/62418/1654775899-hero-publishing.png?dpr=0.5&amp;fm=webp&amp;h=800&amp;w=1920   960w,
                https://www.datocms-assets.com/62418/1654775899-hero-publishing.png?dpr=0.75&amp;fm=webp&amp;h=800&amp;w=1920 1440w,
                https://www.datocms-assets.com/62418/1654775899-hero-publishing.png?fm=webp&amp;h=800&amp;w=1920              1920w,
                https://www.datocms-assets.com/62418/1654775899-hero-publishing.png?dpr=1.5&amp;fm=webp&amp;h=800&amp;w=1920  2880w,
                https://www.datocms-assets.com/62418/1654775899-hero-publishing.png?dpr=2&amp;fm=webp&amp;h=800&amp;w=1920    3840w
              "
              sizes="(max-width: 1920px) 100vw, 1920px"
              type="image/webp"
            />
            <source
              srcset="
                https://www.datocms-assets.com/62418/1654775899-hero-publishing.png?dpr=0.25&amp;h=800&amp;w=1920  480w,
                https://www.datocms-assets.com/62418/1654775899-hero-publishing.png?dpr=0.5&amp;h=800&amp;w=1920   960w,
                https://www.datocms-assets.com/62418/1654775899-hero-publishing.png?dpr=0.75&amp;h=800&amp;w=1920 1440w,
                https://www.datocms-assets.com/62418/1654775899-hero-publishing.png?h=800&amp;w=1920              1920w,
                https://www.datocms-assets.com/62418/1654775899-hero-publishing.png?dpr=1.5&amp;h=800&amp;w=1920  2880w,
                https://www.datocms-assets.com/62418/1654775899-hero-publishing.png?dpr=2&amp;h=800&amp;w=1920    3840w
              "
              sizes="(max-width: 1920px) 100vw, 1920px"
            />
            <img
              src="https://www.datocms-assets.com/62418/1654775899-hero-publishing.png?h=800&amp;w=1920"
              alt="A rocket and a trophy, surrounded with game icons, App store icons, and gold coins."
              style="
                position: absolute;
                left: 0px;
                top: 0px;
                width: 100%;
                height: 100%;
                opacity: 1;
                transition: opacity 500ms ease 500ms;
              "
              :style="`top: calc(0px + -${windowTop / 30}%) ;`"
            /> </picture
          ><noscript>
            <picture>
              <source
                srcset="
                  https://www.datocms-assets.com/62418/1654775899-hero-publishing.png?dpr=0.25&amp;fm=webp&amp;h=800&amp;w=1920  480w,
                  https://www.datocms-assets.com/62418/1654775899-hero-publishing.png?dpr=0.5&amp;fm=webp&amp;h=800&amp;w=1920   960w,
                  https://www.datocms-assets.com/62418/1654775899-hero-publishing.png?dpr=0.75&amp;fm=webp&amp;h=800&amp;w=1920 1440w,
                  https://www.datocms-assets.com/62418/1654775899-hero-publishing.png?fm=webp&amp;h=800&amp;w=1920              1920w,
                  https://www.datocms-assets.com/62418/1654775899-hero-publishing.png?dpr=1.5&amp;fm=webp&amp;h=800&amp;w=1920  2880w,
                  https://www.datocms-assets.com/62418/1654775899-hero-publishing.png?dpr=2&amp;fm=webp&amp;h=800&amp;w=1920    3840w
                "
                sizes="(max-width: 1920px) 100vw, 1920px"
                type="image/webp"
              />
              <source
                srcset="
                  https://www.datocms-assets.com/62418/1654775899-hero-publishing.png?dpr=0.25&amp;h=800&amp;w=1920  480w,
                  https://www.datocms-assets.com/62418/1654775899-hero-publishing.png?dpr=0.5&amp;h=800&amp;w=1920   960w,
                  https://www.datocms-assets.com/62418/1654775899-hero-publishing.png?dpr=0.75&amp;h=800&amp;w=1920 1440w,
                  https://www.datocms-assets.com/62418/1654775899-hero-publishing.png?h=800&amp;w=1920              1920w,
                  https://www.datocms-assets.com/62418/1654775899-hero-publishing.png?dpr=1.5&amp;h=800&amp;w=1920  2880w,
                  https://www.datocms-assets.com/62418/1654775899-hero-publishing.png?dpr=2&amp;h=800&amp;w=1920    3840w
                "
                sizes="(max-width: 1920px) 100vw, 1920px"
              />
              <img
                src="@/assets/puplishing/1654775899-hero-publishing.webp"
                alt="A rocket and a trophy, surrounded with game icons, App store icons, and gold coins."
                style="
                  position: absolute;
                  left: 0px;
                  top: 0px;
                  width: 100%;
                  height: 100%;
                "
                :style="`top: calc(0px + -${windowTop / 30}%) ;`"
                loading="lazy"
              />
            </picture>
          </noscript>
        </div>
      </div>
      <div class="image-tablet">
        <div style="display: block; overflow: hidden; position: relative">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2ODgiIGhlaWdodD0iMzg3Ij48L3N2Zz4="
            role="presentation"
            style="display: block; width: 100%"
          />
          <div
            style="
              background-image: url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoICAgLEgoVDhgWDg4NGBENDhEMFxUZGCIiFhUaHysjGh0oHRUWJTUlKC0vMjIyGSU4PTcwPCsxMi8BCgsLDg0OHBAQHDsoIig7Ozs7OzsvOy87Ly8vLy8vLy81Oy8vLy8vLy8vNS8vLy8vLzUvLy8vLy8vLy8vLy8vL//AABEIAA4AGAMBIgACEQEDEQH/xAAYAAACAwAAAAAAAAAAAAAAAAAEBQABB//EAB4QAAEEAQUAAAAAAAAAAAAAAAEAAgMRBAUSExQx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQD/xAAcEQAABgMAAAAAAAAAAAAAAAAAAQIREiEDIjH/2gAMAwEAAhEDEQA/ANfypxBEXH1L8bVWukIIR+XCJo6KWR4DGPsIWoyRXQpi9hp2mbbCpD8QDaURjeOwjZ6H/9k=');
              background-size: cover;
              opacity: 0;
              transition: opacity 500ms ease 500ms;
              position: absolute;
              left: 0px;
              top: 0px;
              width: 100%;
              height: 100%;
            "
          ></div>
          <picture>
            <source
              srcset="
                https://www.datocms-assets.com/62418/1654775889-hero-publishing-mobile.png?dpr=0.25&amp;fm=webp&amp;h=387&amp;w=688  172w,
                https://www.datocms-assets.com/62418/1654775889-hero-publishing-mobile.png?dpr=0.5&amp;fm=webp&amp;h=387&amp;w=688   344w,
                https://www.datocms-assets.com/62418/1654775889-hero-publishing-mobile.png?dpr=0.75&amp;fm=webp&amp;h=387&amp;w=688  516w,
                https://www.datocms-assets.com/62418/1654775889-hero-publishing-mobile.png?fm=webp&amp;h=387&amp;w=688               688w,
                https://www.datocms-assets.com/62418/1654775889-hero-publishing-mobile.png?dpr=1.5&amp;fm=webp&amp;h=387&amp;w=688  1032w,
                https://www.datocms-assets.com/62418/1654775889-hero-publishing-mobile.png?dpr=2&amp;fm=webp&amp;h=387&amp;w=688    1376w
              "
              sizes="(max-width: 688px) 100vw, 688px"
              type="image/webp"
            />
            <source
              srcset="
                https://www.datocms-assets.com/62418/1654775889-hero-publishing-mobile.png?dpr=0.25&amp;h=387&amp;w=688  172w,
                https://www.datocms-assets.com/62418/1654775889-hero-publishing-mobile.png?dpr=0.5&amp;h=387&amp;w=688   344w,
                https://www.datocms-assets.com/62418/1654775889-hero-publishing-mobile.png?dpr=0.75&amp;h=387&amp;w=688  516w,
                https://www.datocms-assets.com/62418/1654775889-hero-publishing-mobile.png?h=387&amp;w=688               688w,
                https://www.datocms-assets.com/62418/1654775889-hero-publishing-mobile.png?dpr=1.5&amp;h=387&amp;w=688  1032w,
                https://www.datocms-assets.com/62418/1654775889-hero-publishing-mobile.png?dpr=2&amp;h=387&amp;w=688    1376w
              "
              sizes="(max-width: 688px) 100vw, 688px"
            />
            <img
              src="https://www.datocms-assets.com/62418/1654775889-hero-publishing-mobile.png?h=387&amp;w=688"
              alt="A rocket and a trophy, surrounded with game icons, App store icons, and gold coins."
              style="
                position: absolute;
                left: 0px;
                top: 0px;
                width: 100%;
                height: 100%;
                opacity: 1;
                transition: opacity 500ms ease 500ms;
              "
            /> </picture
          ><noscript>
            <picture>
              <source
                srcset="
                  https://www.datocms-assets.com/62418/1654775889-hero-publishing-mobile.png?dpr=0.25&amp;fm=webp&amp;h=387&amp;w=688  172w,
                  https://www.datocms-assets.com/62418/1654775889-hero-publishing-mobile.png?dpr=0.5&amp;fm=webp&amp;h=387&amp;w=688   344w,
                  https://www.datocms-assets.com/62418/1654775889-hero-publishing-mobile.png?dpr=0.75&amp;fm=webp&amp;h=387&amp;w=688  516w,
                  https://www.datocms-assets.com/62418/1654775889-hero-publishing-mobile.png?fm=webp&amp;h=387&amp;w=688               688w,
                  https://www.datocms-assets.com/62418/1654775889-hero-publishing-mobile.png?dpr=1.5&amp;fm=webp&amp;h=387&amp;w=688  1032w,
                  https://www.datocms-assets.com/62418/1654775889-hero-publishing-mobile.png?dpr=2&amp;fm=webp&amp;h=387&amp;w=688    1376w
                "
                sizes="(max-width: 688px) 100vw, 688px"
                type="image/webp"
              />
              <source
                srcset="
                  https://www.datocms-assets.com/62418/1654775889-hero-publishing-mobile.png?dpr=0.25&amp;h=387&amp;w=688  172w,
                  https://www.datocms-assets.com/62418/1654775889-hero-publishing-mobile.png?dpr=0.5&amp;h=387&amp;w=688   344w,
                  https://www.datocms-assets.com/62418/1654775889-hero-publishing-mobile.png?dpr=0.75&amp;h=387&amp;w=688  516w,
                  https://www.datocms-assets.com/62418/1654775889-hero-publishing-mobile.png?h=387&amp;w=688               688w,
                  https://www.datocms-assets.com/62418/1654775889-hero-publishing-mobile.png?dpr=1.5&amp;h=387&amp;w=688  1032w,
                  https://www.datocms-assets.com/62418/1654775889-hero-publishing-mobile.png?dpr=2&amp;h=387&amp;w=688    1376w
                "
                sizes="(max-width: 688px) 100vw, 688px"
              />
              <img
                src="@/assets/puplishing/1654775889-hero-publishing-mobile.webp"
                alt="A rocket and a trophy, surrounded with game icons, App store icons, and gold coins."
                style="
                  position: absolute;
                  left: 0px;
                  top: 0px;
                  width: 100%;
                  height: 100%;
                "
                loading="lazy"
              />
            </picture>
          </noscript>
        </div>
      </div>
      <div class="content">
        <h1 class="title">Build the next hit game</h1>
        <!---->
        <div class="kpis-container kpis light">
          <div class="kpi">
            <div class="title-one">6 billion</div>
            <div class="subtitle">downloads</div>
          </div>
          <div class="kpi">
            <div class="title-one">#1 publisher</div>
            <div class="subtitle">yearly since 2018</div>
          </div>
          <div class="kpi">
            <div class="title-one">150 million</div>
            <div class="subtitle">monthly active users</div>
          </div>
        </div>
        <div class="buttons">
          <a data-v-ce8a907a="" href="https://www.voodoo.io/publishing/sign-up"
            ><button data-v-ce8a907a="" class="button light primary small">
              Sign up
            </button></a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      windowTop: "",
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll(e) {
      this.windowTop =
        window.top.scrollY; /* or: e.target.documentElement.scrollTop */
    },
  },
};
</script>
<style scoped>
.hero-alt-container {
  background-image: var(--blue025-to-white-gradient);
  padding-top: 112px;
  min-height: 704px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: -64px;
}
.default-block {
  max-width: 1024px;
  margin: 0 auto;
}
.image-desktop {
  width: 100%;
  position: absolute;
  top: 64px;
  left: 50%;
  transform: translateX(-50%);
}
.image-tablet {
  display: none;
}
.content {
  display: flex;
  flex-direction: column;
  grid-gap: 32px;
  gap: 32px;
  position: relative;
}
.title {
  text-align: center;
  color: #10131b;
  color: var(--grey-900);
  margin: 0 auto;
  width: 66.6666666667%;
  font-family: "Poppins", ui-sans-serif, system-ui, -apple-system, Segoe UI,
    Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont,
    "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 64px;
  line-height: 4.2rem;
  font-weight: 700;
}
.kpis {
  margin: 0 auto;
  width: 83.3333333333%;
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
html {
  position: relative;
  scroll-behavior: smooth;
}
.title-one {
  color: var(--blue-500);
  font-family: "Hartwell", ui-sans-serif, system-ui, -apple-system, Segoe UI,
    Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont,
    "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: 700;
  font-size: 32px;
  line-height: 4rem;
}
.subtitle {
  color: var(--grey-700);
  font-family: "Lato", ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto,
    Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, "Segoe UI",
    "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 18px;
  line-height: 1.4rem;
  font-weight: 400;
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
  background-color: var(--grey-700);
}
.buttons {
  display: flex;
  justify-content: center;
  grid-gap: 24px;
  gap: 24px;
  align-items: center;
}
.primary {
  background-color: var(--blue-500);

  color: var(--grey-000);
  padding: 8px 16px;
  grid-gap: 8px;
  gap: 8px;
  height: 40px !important;
  font-family: Poppins, ui-sans-serif, system-ui, -apple-system, Segoe UI,
    Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont,
    "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: 600;
  font-size: 16px;

  cursor: pointer;
  width: max-content;
  user-select: none;
  border-radius: var(--radius-32);
  border: 0 solid transparent;
  transition: background-color 0.1s ease-in-out;
  display: flex;
  height: 64px;
  justify-content: center;
  align-items: center;
}
a {
  text-decoration: none;
}
@media (max-width: 768px) {
  .default-block {
    margin-left: 24px;
    margin-right: 24px;
  }
  .title {
    width: 100%;
  }
  .kpis-container {
    flex-direction: column;
    align-items: center;
    grid-gap: 24px;
    gap: 24px;
  }
  .kpi {
    width: 100%;
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
    background-color: var(--grey-700);
  }
}
@media (max-width: 1024px) {
  .hero-alt-container {
    min-height: unset;
    align-items: flex-start;
  }
  .default-block {
    margin-left: 40px;
    margin-right: 40px;
  }
  .image-desktop {
    display: none;
  }
  .image-tablet {
    display: flex;
    justify-content: center;
    margin-bottom: 32px;
  }
  .title {
    font-size: 40px;
    line-height: 3.3rem;
  }
  .kpis {
    width: 100%;
  }
  .title-one {
    font-size: 24px;
    line-height: 2.4rem;
  }
}
@media (max-width: 1280px) {
  .default-block {
    max-width: 928px;
  }
}
</style>