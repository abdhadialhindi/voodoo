<template>
  <section class="videos-carousel light">
    <div class="wrappers">
      <div class="flicking-viewport">
        <div class="flicking-camera">
          <div class="wrapper">
            <div class="image-block active">
              <div class="thumbnail">
                <div
                  style="display: block; overflow: hidden; position: relative"
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MDAiIGhlaWdodD0iNDUwIj48L3N2Zz4="
                    role="presentation"
                    style="display: block; width: 100%"
                  />
                  <div
                    style="
                      background-image: url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoQDhALBwkODRYQDg0GCBENFgcNFxUZGBYVFiEaHysjGh0oHRUWJDUlKC0vMjIyGSI4PTcwPCsxMi8BCgsLDg0OHRAQHDscIigvLy8vLzUvLy87Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIAA4AGAMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAEAAcB/8QAGhAAAgMBAQAAAAAAAAAAAAAAAAECAxEiBP/EABUBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAERIf/aAAwDAQACEQMRAD8A2SUkkHncolY8QaXQwE9O2etECvWEELqP/9k=);
                      background-size: cover;
                      opacity: 0;
                      transition: opacity 0.5s 0.5s;
                      position: absolute;
                      left: 0;
                      top: 0;
                      width: 100%;
                      height: 100%;
                    "
                  ></div>
                  <picture
                    ><source
                      srcset="
                        https://web.archive.org/web/20220815035258im_/https://www.datocms-assets.com/62418/1653916517-thumbnail-summer-competition-livestream.png?dpr=0.25&amp;fm=webp&amp;h=450&amp;w=800  200w,
                        https://web.archive.org/web/20220815035258im_/https://www.datocms-assets.com/62418/1653916517-thumbnail-summer-competition-livestream.png?dpr=0.5&amp;fm=webp&amp;h=450&amp;w=800   400w,
                        https://web.archive.org/web/20220815035258im_/https://www.datocms-assets.com/62418/1653916517-thumbnail-summer-competition-livestream.png?dpr=0.75&amp;fm=webp&amp;h=450&amp;w=800  600w,
                        https://web.archive.org/web/20220815035258im_/https://www.datocms-assets.com/62418/1653916517-thumbnail-summer-competition-livestream.png?fm=webp&amp;h=450&amp;w=800               800w,
                        https://web.archive.org/web/20220815035258im_/https://www.datocms-assets.com/62418/1653916517-thumbnail-summer-competition-livestream.png?dpr=1.5&amp;fm=webp&amp;h=450&amp;w=800  1200w,
                        https://web.archive.org/web/20220815035258im_/https://www.datocms-assets.com/62418/1653916517-thumbnail-summer-competition-livestream.png?dpr=2&amp;fm=webp&amp;h=450&amp;w=800    1600w
                      "
                      sizes="(max-width: 800px) 100vw, 800px"
                      type="image/webp" />
                    <source
                      srcset="
                        https://web.archive.org/web/20220815035258im_/https://www.datocms-assets.com/62418/1653916517-thumbnail-summer-competition-livestream.png?dpr=0.25&amp;h=450&amp;w=800  200w,
                        https://web.archive.org/web/20220815035258im_/https://www.datocms-assets.com/62418/1653916517-thumbnail-summer-competition-livestream.png?dpr=0.5&amp;h=450&amp;w=800   400w,
                        https://web.archive.org/web/20220815035258im_/https://www.datocms-assets.com/62418/1653916517-thumbnail-summer-competition-livestream.png?dpr=0.75&amp;h=450&amp;w=800  600w,
                        https://web.archive.org/web/20220815035258im_/https://www.datocms-assets.com/62418/1653916517-thumbnail-summer-competition-livestream.png?h=450&amp;w=800               800w,
                        https://web.archive.org/web/20220815035258im_/https://www.datocms-assets.com/62418/1653916517-thumbnail-summer-competition-livestream.png?dpr=1.5&amp;h=450&amp;w=800  1200w,
                        https://web.archive.org/web/20220815035258im_/https://www.datocms-assets.com/62418/1653916517-thumbnail-summer-competition-livestream.png?dpr=2&amp;h=450&amp;w=800    1600w
                      "
                      sizes="(max-width: 800px) 100vw, 800px" />
                    <img
                      src="@/assets/competition/1653916517-thumbnail-summer-competition-livestream.png"
                      style="
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 100%;
                        height: 100%;
                        opacity: 1;
                        transition: opacity 0.5s 0.5s;
                      " /></picture
                  ><noscript
                    ><picture
                      ><source
                        srcset="
                          https://web.archive.org/web/20220815035258im_/https://www.datocms-assets.com/62418/1653916517-thumbnail-summer-competition-livestream.png?dpr=0.25&amp;fm=webp&amp;h=450&amp;w=800  200w,
                          https://web.archive.org/web/20220815035258im_/https://www.datocms-assets.com/62418/1653916517-thumbnail-summer-competition-livestream.png?dpr=0.5&amp;fm=webp&amp;h=450&amp;w=800   400w,
                          https://web.archive.org/web/20220815035258im_/https://www.datocms-assets.com/62418/1653916517-thumbnail-summer-competition-livestream.png?dpr=0.75&amp;fm=webp&amp;h=450&amp;w=800  600w,
                          https://web.archive.org/web/20220815035258im_/https://www.datocms-assets.com/62418/1653916517-thumbnail-summer-competition-livestream.png?fm=webp&amp;h=450&amp;w=800               800w,
                          https://web.archive.org/web/20220815035258im_/https://www.datocms-assets.com/62418/1653916517-thumbnail-summer-competition-livestream.png?dpr=1.5&amp;fm=webp&amp;h=450&amp;w=800  1200w,
                          https://web.archive.org/web/20220815035258im_/https://www.datocms-assets.com/62418/1653916517-thumbnail-summer-competition-livestream.png?dpr=2&amp;fm=webp&amp;h=450&amp;w=800    1600w
                        "
                        sizes="(max-width: 800px) 100vw, 800px"
                        type="image/webp" />
                      <source
                        srcset="
                          https://web.archive.org/web/20220815035258im_/https://www.datocms-assets.com/62418/1653916517-thumbnail-summer-competition-livestream.png?dpr=0.25&amp;h=450&amp;w=800  200w,
                          https://web.archive.org/web/20220815035258im_/https://www.datocms-assets.com/62418/1653916517-thumbnail-summer-competition-livestream.png?dpr=0.5&amp;h=450&amp;w=800   400w,
                          https://web.archive.org/web/20220815035258im_/https://www.datocms-assets.com/62418/1653916517-thumbnail-summer-competition-livestream.png?dpr=0.75&amp;h=450&amp;w=800  600w,
                          https://web.archive.org/web/20220815035258im_/https://www.datocms-assets.com/62418/1653916517-thumbnail-summer-competition-livestream.png?h=450&amp;w=800               800w,
                          https://web.archive.org/web/20220815035258im_/https://www.datocms-assets.com/62418/1653916517-thumbnail-summer-competition-livestream.png?dpr=1.5&amp;h=450&amp;w=800  1200w,
                          https://web.archive.org/web/20220815035258im_/https://www.datocms-assets.com/62418/1653916517-thumbnail-summer-competition-livestream.png?dpr=2&amp;h=450&amp;w=800    1600w
                        "
                        sizes="(max-width: 800px) 100vw, 800px" />
                      <img
                        src="@/assets/competition/1653916517-thumbnail-summer-competition-livestream.png"
                        style="
                          position: absolute;
                          left: 0;
                          top: 0;
                          width: 100%;
                          height: 100%;
                        "
                        loading="lazy" /></picture
                  ></noscript>
                </div>
                <div class="thumbnail-overlay">
                  <div class="content-block">
                    <a
                      ><button class="button light primary small no-text">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          aria-label="play-triangle"
                          role="presentation"
                          class="base-icon"
                        >
                          <g fill="var(--grey-000)">
                            <g>
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M19.7 14.0098C19.6999 14.0099 19.7 14.0098 19.7 14.0098L8.8565 20.6368C7.22285 21.6344 5.12658 20.4593 5.12658 18.5446L5.12658 5.29052C5.12658 3.37595 7.22267 2.20043 8.85647 3.1992M8.85647 3.1992L19.7 9.82528C19.7 9.8253 19.6999 9.82526 19.7 9.82528C21.265 10.7813 21.2649 13.0538 19.7 14.0098M19.0029 12.8687C19.7146 12.434 19.7146 11.4011 19.0029 10.9664L8.15923 4.34021C7.41645 3.88607 6.46376 4.42025 6.46376 5.29052L6.46375 18.5446C6.46375 19.4148 7.41645 19.9494 8.15941 19.4957L19.0029 12.8687Z"
                              ></path>
                            </g>
                          </g>
                        </svg></button
                    ></a>
                    <div class="text-block">
                      <p class="title">Kick-Off</p>
                      <p class="subtitle">Voodoo Summer Game Competition</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.videos-carousel {
  background-color: var(--grey-000);
  height: 450px;
}
.wrappers {
  position: relative;
  overflow: hidden;
}
.flicking-viewport {
  overflow: unset;
  display: flex;
  position: relative;
  overflow: hidden;
}
.flicking-camera {
  display: flex;
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  flex-direction: row;
  z-index: 1;
}
.videos-carousel .wrapper .flicking-camera > * {
  flex-shrink: 0;
}
.wrapper {
  position: relative;
  overflow: hidden;
  padding: 0 16px;
  display: flex;
  align-items: center;
}
.image-block {
  width: 800px;
  height: 450px;
  border-radius: 16px;
  border-radius: var(--radius-16);
  overflow: hidden;
  position: relative;
}
.thumbnail {
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  left: 0;
  cursor: pointer;
  border-radius: 16px;
  border-radius: var(--radius-16);
  overflow: hidden;
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
}
.content-block {
  margin-left: 24px;
  margin-bottom: 24px;
  display: flex;
  grid-gap: 16px;
  gap: 16px;
  align-items: center;
}
a {
  text-decoration: none;
}
.button.no-text.small {
  width: 40px;
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
  height: 40px;
  font-family: Hartwell, ui-sans-serif, system-ui, -apple-system, Segoe UI,
    Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont,
    "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: 700;
  font-size: 18px;
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
  border-radius: 32px;
  border-radius: var(--radius-32);
  border: 0 solid transparent;
  transition: background-color 0.1s ease-in-out;
  display: flex;
  justify-content: center;
}
.base-icon {
  width: 24px;
  height: 24px;
  position: absolute;
  display: inline-block;
  vertical-align: baseline;
}
.text-block {
  color: var(--grey-000);
}
.title {
  font-family: Hartwell, ui-sans-serif, system-ui, -apple-system, Segoe UI,
    Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont,
    "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: 700;
  font-size: 24px;
  line-height: 2.3rem;
}
.subtitle {
  font-family: Lato, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto,
    Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, "Segoe UI",
    "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 18px;
  line-height: 1.8rem;
  font-weight: 400;
}
@media (max-width: 768px) {
  .videos-carousel {
    height: 168px;
  }
  .wrapper {
    padding: 0 8px;
  }
  .image-block {
    width: 295px;
    height: 168px;
  }
  .content-block {
    margin-left: 8px;
    margin-bottom: 8px;
  }
}
@media (max-width: 1024px) {
  .videos-carousel {
    height: 252px;
  }
  .image-block {
    width: 448px;
    height: 252px;
  }
  .content-block {
    grid-gap: 12px;
    gap: 12px;
  }
  .title {
    font-size: 20px;
    line-height: 1.4rem;
  }
}
@media (max-width: 1280px) {
  .videos-carousel {
    height: 342px;
  }
  .image-block {
    width: 608px;
    height: 342px;
  }
  .content-block {
    margin-left: 16px;
    margin-bottom: 16px;
  }
}
</style>