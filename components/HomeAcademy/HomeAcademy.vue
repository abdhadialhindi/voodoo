<template>
  <div class="hero-alt-container light">
    <div class="default-block">
      <div class="image-desktop" style="top: calc(64px + 0%)">
        <div style="display: block; overflow: hidden; position: relative">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOTIwIiBoZWlnaHQ9IjgwMCI+PC9zdmc+"
            role="presentation"
            style="display: block; width: 100%"
          />
          <div
            style="
              background-image: url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBhUICAgLCgoVDg8VEw8ZDh0VFREOFxUZGBYTFhUaHy0lGh0oHRUiJDUxKC0vMjIyGSI4PTcwPCsxMi8BCgsLDg0OHBAQHDsoIhwvLy8vOzs7OzsvLy8vLy8vLy8vLzs7Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIAAoAGAMBIgACEQEDEQH/xAAYAAACAwAAAAAAAAAAAAAAAAADBAABB//EAB0QAAEEAgMAAAAAAAAAAAAAAAEAAgMRBAUxMkH/xAAWAQEBAQAAAAAAAAAAAAAAAAABAgD/xAAYEQEBAAMAAAAAAAAAAAAAAAABAAJBUf/aAAwDAQACEQMRAD8A1eDYukNOjpOh7S27SdAeBGZ1TkmrSmfsjCKa1Uh5wF8KKhORf//Z');
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
          <picture
            ><source
              srcset="
                https://www.datocms-assets.com/62418/1648118072-cover-image-2x.png?dpr=0.25&amp;fm=webp&amp;h=800&amp;w=1920  480w,
                https://www.datocms-assets.com/62418/1648118072-cover-image-2x.png?dpr=0.5&amp;fm=webp&amp;h=800&amp;w=1920   960w,
                https://www.datocms-assets.com/62418/1648118072-cover-image-2x.png?dpr=0.75&amp;fm=webp&amp;h=800&amp;w=1920 1440w,
                https://www.datocms-assets.com/62418/1648118072-cover-image-2x.png?fm=webp&amp;h=800&amp;w=1920              1920w,
                https://www.datocms-assets.com/62418/1648118072-cover-image-2x.png?dpr=1.5&amp;fm=webp&amp;h=800&amp;w=1920  2880w,
                https://www.datocms-assets.com/62418/1648118072-cover-image-2x.png?dpr=2&amp;fm=webp&amp;h=800&amp;w=1920    3840w
              "
              sizes="(max-width: 1920px) 100vw, 1920px"
              type="image/webp" />
            <source
              srcset="
                https://www.datocms-assets.com/62418/1648118072-cover-image-2x.png?dpr=0.25&amp;h=800&amp;w=1920  480w,
                https://www.datocms-assets.com/62418/1648118072-cover-image-2x.png?dpr=0.5&amp;h=800&amp;w=1920   960w,
                https://www.datocms-assets.com/62418/1648118072-cover-image-2x.png?dpr=0.75&amp;h=800&amp;w=1920 1440w,
                https://www.datocms-assets.com/62418/1648118072-cover-image-2x.png?h=800&amp;w=1920              1920w,
                https://www.datocms-assets.com/62418/1648118072-cover-image-2x.png?dpr=1.5&amp;h=800&amp;w=1920  2880w,
                https://www.datocms-assets.com/62418/1648118072-cover-image-2x.png?dpr=2&amp;h=800&amp;w=1920    3840w
              "
              sizes="(max-width: 1920px) 100vw, 1920px" />
            <img
              src="@/assets/academy/1648118072-cover-image-2x.webp"
              alt="Screens showing Voodoo Academy teachers, surrounded with graduating hats. books, and video icons."
              style="
                position: absolute;
                left: 0px;
                top: 0px;
                width: 100%;
                height: 100%;
                opacity: 1;
                transition: opacity 500ms ease 500ms;
              " /></picture
          ><noscript
            ><picture
              ><source
                srcset="
                  https://www.datocms-assets.com/62418/1648118072-cover-image-2x.png?dpr=0.25&amp;fm=webp&amp;h=800&amp;w=1920  480w,
                  https://www.datocms-assets.com/62418/1648118072-cover-image-2x.png?dpr=0.5&amp;fm=webp&amp;h=800&amp;w=1920   960w,
                  https://www.datocms-assets.com/62418/1648118072-cover-image-2x.png?dpr=0.75&amp;fm=webp&amp;h=800&amp;w=1920 1440w,
                  https://www.datocms-assets.com/62418/1648118072-cover-image-2x.png?fm=webp&amp;h=800&amp;w=1920              1920w,
                  https://www.datocms-assets.com/62418/1648118072-cover-image-2x.png?dpr=1.5&amp;fm=webp&amp;h=800&amp;w=1920  2880w,
                  https://www.datocms-assets.com/62418/1648118072-cover-image-2x.png?dpr=2&amp;fm=webp&amp;h=800&amp;w=1920    3840w
                "
                sizes="(max-width: 1920px) 100vw, 1920px"
                type="image/webp" />
              <source
                srcset="
                  https://www.datocms-assets.com/62418/1648118072-cover-image-2x.png?dpr=0.25&amp;h=800&amp;w=1920  480w,
                  https://www.datocms-assets.com/62418/1648118072-cover-image-2x.png?dpr=0.5&amp;h=800&amp;w=1920   960w,
                  https://www.datocms-assets.com/62418/1648118072-cover-image-2x.png?dpr=0.75&amp;h=800&amp;w=1920 1440w,
                  https://www.datocms-assets.com/62418/1648118072-cover-image-2x.png?h=800&amp;w=1920              1920w,
                  https://www.datocms-assets.com/62418/1648118072-cover-image-2x.png?dpr=1.5&amp;h=800&amp;w=1920  2880w,
                  https://www.datocms-assets.com/62418/1648118072-cover-image-2x.png?dpr=2&amp;h=800&amp;w=1920    3840w
                "
                sizes="(max-width: 1920px) 100vw, 1920px" />
              <img
                src="@/assets/academy/1648118072-cover-image-2x.webp"
                alt="Screens showing Voodoo Academy teachers, surrounded with graduating hats. books, and video icons."
                style="
                  position: absolute;
                  left: 0px;
                  top: 0px;
                  width: 100%;
                  height: 100%;
                "
                loading="lazy" /></picture
          ></noscript>
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
              background-image: url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoICAgLCgoQDhYQFRcXGhkVDhgVFxgdGiIVFiEaHy0jGh0oHSEWJDUlKC0vMjIyGSI4PTcwPCsxMi8BCgsLDg0OHRAQHDscIh0vLy8vOzs7Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIAA4AGAMBIgACEQEDEQH/xAAYAAEAAwEAAAAAAAAAAAAAAAAFAQMHAP/EAB0QAAAHAQEBAAAAAAAAAAAAAAABAgMEBREhEgb/xAAXAQADAQAAAAAAAAAAAAAAAAABAgMA/8QAGREAAgMBAAAAAAAAAAAAAAAAABECEiEB/9oADAMBAAIRAxEAPwDVZts1HbMy6YLjfQJW7mBGVWNup6D0UzLa9IUcFgF0TKzSpO4OFbUFHnBIS0TI/9k=');
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
          <picture
            ><source
              srcset="
                https://www.datocms-assets.com/62418/1647945684-cover-image-responsive.png?dpr=0.25&amp;fm=webp&amp;h=387&amp;w=688  172w,
                https://www.datocms-assets.com/62418/1647945684-cover-image-responsive.png?dpr=0.5&amp;fm=webp&amp;h=387&amp;w=688   344w,
                https://www.datocms-assets.com/62418/1647945684-cover-image-responsive.png?dpr=0.75&amp;fm=webp&amp;h=387&amp;w=688  516w,
                https://www.datocms-assets.com/62418/1647945684-cover-image-responsive.png?fm=webp&amp;h=387&amp;w=688               688w,
                https://www.datocms-assets.com/62418/1647945684-cover-image-responsive.png?dpr=1.5&amp;fm=webp&amp;h=387&amp;w=688  1032w,
                https://www.datocms-assets.com/62418/1647945684-cover-image-responsive.png?dpr=2&amp;fm=webp&amp;h=387&amp;w=688    1376w,
                https://www.datocms-assets.com/62418/1647945684-cover-image-responsive.png?dpr=3&amp;fm=webp&amp;h=387&amp;w=688    2064w,
                https://www.datocms-assets.com/62418/1647945684-cover-image-responsive.png?dpr=4&amp;fm=webp&amp;h=387&amp;w=688    2752w
              "
              sizes="(max-width: 688px) 100vw, 688px"
              type="image/webp" />
            <source
              srcset="
                https://www.datocms-assets.com/62418/1647945684-cover-image-responsive.png?dpr=0.25&amp;h=387&amp;w=688  172w,
                https://www.datocms-assets.com/62418/1647945684-cover-image-responsive.png?dpr=0.5&amp;h=387&amp;w=688   344w,
                https://www.datocms-assets.com/62418/1647945684-cover-image-responsive.png?dpr=0.75&amp;h=387&amp;w=688  516w,
                https://www.datocms-assets.com/62418/1647945684-cover-image-responsive.png?h=387&amp;w=688               688w,
                https://www.datocms-assets.com/62418/1647945684-cover-image-responsive.png?dpr=1.5&amp;h=387&amp;w=688  1032w,
                https://www.datocms-assets.com/62418/1647945684-cover-image-responsive.png?dpr=2&amp;h=387&amp;w=688    1376w,
                https://www.datocms-assets.com/62418/1647945684-cover-image-responsive.png?dpr=3&amp;h=387&amp;w=688    2064w,
                https://www.datocms-assets.com/62418/1647945684-cover-image-responsive.png?dpr=4&amp;h=387&amp;w=688    2752w
              "
              sizes="(max-width: 688px) 100vw, 688px" />
            <img
              src="@/assets/academy/1647945684-cover-image-responsive.webp"
              alt="Screens showing Voodoo Academy teachers, surrounded with graduating hats, books, and video icons."
              style="
                position: absolute;
                left: 0px;
                top: 0px;
                width: 100%;
                height: 100%;
                opacity: 1;
                transition: opacity 500ms ease 500ms;
              " /></picture
          ><noscript
            ><picture
              ><source
                srcset="
                  https://www.datocms-assets.com/62418/1647945684-cover-image-responsive.png?dpr=0.25&amp;fm=webp&amp;h=387&amp;w=688  172w,
                  https://www.datocms-assets.com/62418/1647945684-cover-image-responsive.png?dpr=0.5&amp;fm=webp&amp;h=387&amp;w=688   344w,
                  https://www.datocms-assets.com/62418/1647945684-cover-image-responsive.png?dpr=0.75&amp;fm=webp&amp;h=387&amp;w=688  516w,
                  https://www.datocms-assets.com/62418/1647945684-cover-image-responsive.png?fm=webp&amp;h=387&amp;w=688               688w,
                  https://www.datocms-assets.com/62418/1647945684-cover-image-responsive.png?dpr=1.5&amp;fm=webp&amp;h=387&amp;w=688  1032w,
                  https://www.datocms-assets.com/62418/1647945684-cover-image-responsive.png?dpr=2&amp;fm=webp&amp;h=387&amp;w=688    1376w,
                  https://www.datocms-assets.com/62418/1647945684-cover-image-responsive.png?dpr=3&amp;fm=webp&amp;h=387&amp;w=688    2064w,
                  https://www.datocms-assets.com/62418/1647945684-cover-image-responsive.png?dpr=4&amp;fm=webp&amp;h=387&amp;w=688    2752w
                "
                sizes="(max-width: 688px) 100vw, 688px"
                type="image/webp" />
              <source
                srcset="
                  https://www.datocms-assets.com/62418/1647945684-cover-image-responsive.png?dpr=0.25&amp;h=387&amp;w=688  172w,
                  https://www.datocms-assets.com/62418/1647945684-cover-image-responsive.png?dpr=0.5&amp;h=387&amp;w=688   344w,
                  https://www.datocms-assets.com/62418/1647945684-cover-image-responsive.png?dpr=0.75&amp;h=387&amp;w=688  516w,
                  https://www.datocms-assets.com/62418/1647945684-cover-image-responsive.png?h=387&amp;w=688               688w,
                  https://www.datocms-assets.com/62418/1647945684-cover-image-responsive.png?dpr=1.5&amp;h=387&amp;w=688  1032w,
                  https://www.datocms-assets.com/62418/1647945684-cover-image-responsive.png?dpr=2&amp;h=387&amp;w=688    1376w,
                  https://www.datocms-assets.com/62418/1647945684-cover-image-responsive.png?dpr=3&amp;h=387&amp;w=688    2064w,
                  https://www.datocms-assets.com/62418/1647945684-cover-image-responsive.png?dpr=4&amp;h=387&amp;w=688    2752w
                "
                sizes="(max-width: 688px) 100vw, 688px" />
              <img
                src="@/assets/academy/1647945684-cover-image-responsive.webp"
                alt="Screens showing Voodoo Academy teachers, surrounded with graduating hats, books, and video icons."
                style="
                  position: absolute;
                  left: 0px;
                  top: 0px;
                  width: 100%;
                  height: 100%;
                "
                loading="lazy" /></picture
          ></noscript>
        </div>
      </div>
      <div class="content">
        <div class="logo">
          <div style="display: block; overflow: hidden; position: relative">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iNjQiPjwvc3ZnPg=="
              role="presentation"
              style="display: block; width: 100%"
            />
            <div
              style="
                background-image: url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBhIICAgLCgoLDhgQGA0NDhUNDR0YFxUZGBYfFhUdHysjJh0oHRUWJDUlKC0vMjIyGSI4PTcwPCsxMi8BCgsLDg0OHBAQHDsoFhwvLy8vOzs7Ly87Ly8vLy8vLy8vLy87Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIAAgAGAMBIgACEQEDEQH/xAAWAAEBAQAAAAAAAAAAAAAAAAAABwP/xAAcEAACAgIDAAAAAAAAAAAAAAAAAQMRAgUEFDL/xAAWAQEBAQAAAAAAAAAAAAAAAAACAwH/xAAXEQEBAQEAAAAAAAAAAAAAAAABABEC/9oADAMBAAIRAxEAPwCgyY86FXFhbMO1t8nThVAFTkjrHPt8fESYAA8m2jf/2Q==');
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
            <picture
              ><source
                srcset="
                  https://www.datocms-assets.com/62418/1648026663-voodoo-academy-1.png?dpr=0.25&amp;fit=clip&amp;fm=webp&amp;h=64  50w,
                  https://www.datocms-assets.com/62418/1648026663-voodoo-academy-1.png?dpr=0.5&amp;fit=clip&amp;fm=webp&amp;h=64  100w,
                  https://www.datocms-assets.com/62418/1648026663-voodoo-academy-1.png?dpr=0.75&amp;fit=clip&amp;fm=webp&amp;h=64 150w,
                  https://www.datocms-assets.com/62418/1648026663-voodoo-academy-1.png?fit=clip&amp;fm=webp&amp;h=64              200w,
                  https://www.datocms-assets.com/62418/1648026663-voodoo-academy-1.png?dpr=1.5&amp;fit=clip&amp;fm=webp&amp;h=64  300w,
                  https://www.datocms-assets.com/62418/1648026663-voodoo-academy-1.png?dpr=2&amp;fit=clip&amp;fm=webp&amp;h=64    400w,
                  https://www.datocms-assets.com/62418/1648026663-voodoo-academy-1.png?dpr=3&amp;fit=clip&amp;fm=webp&amp;h=64    600w
                "
                sizes="(max-width: 200px) 100vw, 200px"
                type="image/webp" />
              <source
                srcset="
                  https://www.datocms-assets.com/62418/1648026663-voodoo-academy-1.png?dpr=0.25&amp;fit=clip&amp;h=64  50w,
                  https://www.datocms-assets.com/62418/1648026663-voodoo-academy-1.png?dpr=0.5&amp;fit=clip&amp;h=64  100w,
                  https://www.datocms-assets.com/62418/1648026663-voodoo-academy-1.png?dpr=0.75&amp;fit=clip&amp;h=64 150w,
                  https://www.datocms-assets.com/62418/1648026663-voodoo-academy-1.png?fit=clip&amp;h=64              200w,
                  https://www.datocms-assets.com/62418/1648026663-voodoo-academy-1.png?dpr=1.5&amp;fit=clip&amp;h=64  300w,
                  https://www.datocms-assets.com/62418/1648026663-voodoo-academy-1.png?dpr=2&amp;fit=clip&amp;h=64    400w,
                  https://www.datocms-assets.com/62418/1648026663-voodoo-academy-1.png?dpr=3&amp;fit=clip&amp;h=64    600w
                "
                sizes="(max-width: 200px) 100vw, 200px" />
              <img
                src="@/assets/academy/1648026663-voodoo-academy-1 (1).webp"
                alt="Voodoo Academy logo."
                style="
                  position: absolute;
                  left: 0px;
                  top: 0px;
                  width: 100%;
                  height: 100%;
                  opacity: 1;
                  transition: opacity 500ms ease 500ms;
                " /></picture
            ><noscript
              ><picture
                ><source
                  srcset="
                    https://www.datocms-assets.com/62418/1648026663-voodoo-academy-1.png?dpr=0.25&amp;fit=clip&amp;fm=webp&amp;h=64  50w,
                    https://www.datocms-assets.com/62418/1648026663-voodoo-academy-1.png?dpr=0.5&amp;fit=clip&amp;fm=webp&amp;h=64  100w,
                    https://www.datocms-assets.com/62418/1648026663-voodoo-academy-1.png?dpr=0.75&amp;fit=clip&amp;fm=webp&amp;h=64 150w,
                    https://www.datocms-assets.com/62418/1648026663-voodoo-academy-1.png?fit=clip&amp;fm=webp&amp;h=64              200w,
                    https://www.datocms-assets.com/62418/1648026663-voodoo-academy-1.png?dpr=1.5&amp;fit=clip&amp;fm=webp&amp;h=64  300w,
                    https://www.datocms-assets.com/62418/1648026663-voodoo-academy-1.png?dpr=2&amp;fit=clip&amp;fm=webp&amp;h=64    400w,
                    https://www.datocms-assets.com/62418/1648026663-voodoo-academy-1.png?dpr=3&amp;fit=clip&amp;fm=webp&amp;h=64    600w
                  "
                  sizes="(max-width: 200px) 100vw, 200px"
                  type="image/webp" />
                <source
                  srcset="
                    https://www.datocms-assets.com/62418/1648026663-voodoo-academy-1.png?dpr=0.25&amp;fit=clip&amp;h=64  50w,
                    https://www.datocms-assets.com/62418/1648026663-voodoo-academy-1.png?dpr=0.5&amp;fit=clip&amp;h=64  100w,
                    https://www.datocms-assets.com/62418/1648026663-voodoo-academy-1.png?dpr=0.75&amp;fit=clip&amp;h=64 150w,
                    https://www.datocms-assets.com/62418/1648026663-voodoo-academy-1.png?fit=clip&amp;h=64              200w,
                    https://www.datocms-assets.com/62418/1648026663-voodoo-academy-1.png?dpr=1.5&amp;fit=clip&amp;h=64  300w,
                    https://www.datocms-assets.com/62418/1648026663-voodoo-academy-1.png?dpr=2&amp;fit=clip&amp;h=64    400w,
                    https://www.datocms-assets.com/62418/1648026663-voodoo-academy-1.png?dpr=3&amp;fit=clip&amp;h=64    600w
                  "
                  sizes="(max-width: 200px) 100vw, 200px" />
                <img
                  src="@/assets/academy/1648026663-voodoo-academy-1 (1).webp"
                  alt="Voodoo Academy logo."
                  style="
                    position: absolute;
                    left: 0px;
                    top: 0px;
                    width: 100%;
                    height: 100%;
                  "
                  loading="lazy" /></picture
            ></noscript>
          </div>
        </div>
        <h1 class="title">Start making hit games today</h1>
        <div class="buttons">
          <a
           
            
            target="_blank"
            ><button
             
              class="button light primary small icon-left"
            >
              Sign up now
            </button></a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.hero-alt-container{
    background-image: var(--blue025-to-white-gradient);
    min-height: 704px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 112px;

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
    top: -64px;
}
.logo {
    width: auto;
    height: 64px;
    margin: 0 auto;
}
.title {
    text-align: center;
    color: var(--grey-900);
    margin: 0 auto;
    width: 66.6666666667%;
    font-family: "Poppins",ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,"Noto Sans","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    font-size: 62px;
    line-height: 4.4rem;
    font-weight: 700;
}
.buttons {
    display: flex;
    justify-content: center;
    grid-gap: 24px;
    gap: 24px;
}
a {
    text-decoration: none;
}
.primary {
    background-color: #05f;
    background-color: var(--blue-500);
    color: #fff;
    color: var(--grey-000);
    padding: 8px 16px;
    grid-gap: 8px;
    gap: 8px;
    height: 40px;
    flex-direction: row-reverse;
    font-family: Poppins,ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,"Noto Sans","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    font-weight: 600;
    font-size: 16px;
    line-height: 2rem;
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
    transition: background-color .1s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
}
@media (max-width:768px) {
    .default-block {
        margin-left: 24px !important;
    margin-right: 24px !important;
    }
    .title {
        width: 100% !important;
    }
    .buttons {
        flex-direction: column !important;
    align-items: center !important;
    }
    .content {
        top: 0px !important;
    }
}
@media (max-width:1024px) {
    .hero-alt-container {
        min-height: unset;
    padding-bottom: 48px;
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
    line-height: 2.5rem;
    }
   
    .buttons {
        grid-gap: 16px;
    gap: 16px;
    }
}
@media (max-width:1280px) {
    .default-block {
        max-width: 928px;
    }
}
</style>