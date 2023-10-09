<template>
  <section class="content-cards light">
    <div class="wrapper default-block">
      <div class="content-card large white">
        <div
          class="image"
          style="display: block; overflow: hidden; position: relative"
        >
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2Ij48L3N2Zz4="
            role="presentation"
            style="display: block; width: 100%"
          />
          <div
            style="
              background-image: url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBhEIEA4QEA8QDg0NDQ0NDhENFg0NFxUZGBYVFiEaHysjJh0oHRUWJDUlKC0vMjIyGSI4PTcwPCsxMi8BCgsLDg0OHQ8NHC8cFhwvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIABgAGAMBIgACEQEDEQH/xAAaAAACAgMAAAAAAAAAAAAAAAAABAIFAQMH/8QAGhAAAwEBAQEAAAAAAAAAAAAAAAIDARIEEf/EABYBAQEBAAAAAAAAAAAAAAAAAAACAf/EABcRAQEBAQAAAAAAAAAAAAAAAAABEQL/2gAMAwEAAhEDEQA/AOyM2Kv0hOytvw1+xtWZXRo3Zc52MW7Pi4AhSjcgTYHPQncxWXnzoAGidpZmGQAm0f/Z');
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
                https://www.datocms-assets.com/62418/1648562088-wrench.png?dpr=0.25&amp;fm=webp&amp;h=256&amp;w=256   64w,
                https://www.datocms-assets.com/62418/1648562088-wrench.png?dpr=0.5&amp;fm=webp&amp;h=256&amp;w=256   128w,
                https://www.datocms-assets.com/62418/1648562088-wrench.png?dpr=0.75&amp;fm=webp&amp;h=256&amp;w=256  192w,
                https://www.datocms-assets.com/62418/1648562088-wrench.png?fm=webp&amp;h=256&amp;w=256               256w,
                https://www.datocms-assets.com/62418/1648562088-wrench.png?dpr=1.5&amp;fm=webp&amp;h=256&amp;w=256   384w,
                https://www.datocms-assets.com/62418/1648562088-wrench.png?dpr=2&amp;fm=webp&amp;h=256&amp;w=256     512w,
                https://www.datocms-assets.com/62418/1648562088-wrench.png?dpr=3&amp;fm=webp&amp;h=256&amp;w=256     768w,
                https://www.datocms-assets.com/62418/1648562088-wrench.png?dpr=4&amp;fm=webp&amp;h=256&amp;w=256    1024w
              "
              sizes="(max-width: 256px) 100vw, 256px"
              type="image/webp" />
            <source
              srcset="
                https://www.datocms-assets.com/62418/1648562088-wrench.png?dpr=0.25&amp;h=256&amp;w=256   64w,
                https://www.datocms-assets.com/62418/1648562088-wrench.png?dpr=0.5&amp;h=256&amp;w=256   128w,
                https://www.datocms-assets.com/62418/1648562088-wrench.png?dpr=0.75&amp;h=256&amp;w=256  192w,
                https://www.datocms-assets.com/62418/1648562088-wrench.png?h=256&amp;w=256               256w,
                https://www.datocms-assets.com/62418/1648562088-wrench.png?dpr=1.5&amp;h=256&amp;w=256   384w,
                https://www.datocms-assets.com/62418/1648562088-wrench.png?dpr=2&amp;h=256&amp;w=256     512w,
                https://www.datocms-assets.com/62418/1648562088-wrench.png?dpr=3&amp;h=256&amp;w=256     768w,
                https://www.datocms-assets.com/62418/1648562088-wrench.png?dpr=4&amp;h=256&amp;w=256    1024w
              "
              sizes="(max-width: 256px) 100vw, 256px" />
            <img
              src="@/assets/academy/1648562088-wrench.webp"
              alt="A wrench and cogwheels."
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
                  https://www.datocms-assets.com/62418/1648562088-wrench.png?dpr=0.25&amp;fm=webp&amp;h=256&amp;w=256   64w,
                  https://www.datocms-assets.com/62418/1648562088-wrench.png?dpr=0.5&amp;fm=webp&amp;h=256&amp;w=256   128w,
                  https://www.datocms-assets.com/62418/1648562088-wrench.png?dpr=0.75&amp;fm=webp&amp;h=256&amp;w=256  192w,
                  https://www.datocms-assets.com/62418/1648562088-wrench.png?fm=webp&amp;h=256&amp;w=256               256w,
                  https://www.datocms-assets.com/62418/1648562088-wrench.png?dpr=1.5&amp;fm=webp&amp;h=256&amp;w=256   384w,
                  https://www.datocms-assets.com/62418/1648562088-wrench.png?dpr=2&amp;fm=webp&amp;h=256&amp;w=256     512w,
                  https://www.datocms-assets.com/62418/1648562088-wrench.png?dpr=3&amp;fm=webp&amp;h=256&amp;w=256     768w,
                  https://www.datocms-assets.com/62418/1648562088-wrench.png?dpr=4&amp;fm=webp&amp;h=256&amp;w=256    1024w
                "
                sizes="(max-width: 256px) 100vw, 256px"
                type="image/webp" />
              <source
                srcset="
                  https://www.datocms-assets.com/62418/1648562088-wrench.png?dpr=0.25&amp;h=256&amp;w=256   64w,
                  https://www.datocms-assets.com/62418/1648562088-wrench.png?dpr=0.5&amp;h=256&amp;w=256   128w,
                  https://www.datocms-assets.com/62418/1648562088-wrench.png?dpr=0.75&amp;h=256&amp;w=256  192w,
                  https://www.datocms-assets.com/62418/1648562088-wrench.png?h=256&amp;w=256               256w,
                  https://www.datocms-assets.com/62418/1648562088-wrench.png?dpr=1.5&amp;h=256&amp;w=256   384w,
                  https://www.datocms-assets.com/62418/1648562088-wrench.png?dpr=2&amp;h=256&amp;w=256     512w,
                  https://www.datocms-assets.com/62418/1648562088-wrench.png?dpr=3&amp;h=256&amp;w=256     768w,
                  https://www.datocms-assets.com/62418/1648562088-wrench.png?dpr=4&amp;h=256&amp;w=256    1024w
                "
                sizes="(max-width: 256px) 100vw, 256px" />
              <img
                src="@/assets/academy/1648562088-wrench.webp"
                alt="A wrench and cogwheels."
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

        <div class="text">
          <h5 class="title title-5">
            Learn how to build, test and improve hyper and hybrid-casual games
          </h5>
        </div>
      </div>
      <div class="content-card large white">
        <div
          class="image"
          style="display: block; overflow: hidden; position: relative"
        >
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2Ij48L3N2Zz4="
            role="presentation"
            style="display: block; width: 100%"
          />
          <div
            style="
              background-image: url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoICAgLEgoVDhgVDhkMER0VFRUYFyYfGBciIhUdHyslJh0oHhwiJTUlKC0vMjIyHSI4PTcwPCsxMi8BCgsLDg0OHBAQHDsoHSg7LzsvLzwvNS8vLy8vLzUvLy82Ly8vNS8vNS8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIABgAGAMBIgACEQEDEQH/xAAYAAADAQEAAAAAAAAAAAAAAAAABQcDAf/EAB4QAAEEAgMBAAAAAAAAAAAAAAIAAQMEERIFMVEG/8QAFQEBAQAAAAAAAAAAAAAAAAAAAwH/xAAbEQACAwADAAAAAAAAAAAAAAAAAQIDERMhIv/aAAwDAQACEQMRAD8AsNmYYYSMkng5aIp9dm7W/wBCRtRfTxTqjPcblHYs65T1U8nZG8KvHMMg5Z0JTx8hvCOfF1BOOPCoZW642IXB2SEeDjCfZhbtCEtcmiMc1qzADNhCEIZv0VH/2Q==');
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
                https://www.datocms-assets.com/62418/1648561795-books-graduate-hat.png?dpr=0.25&amp;fm=webp&amp;h=256&amp;w=256   64w,
                https://www.datocms-assets.com/62418/1648561795-books-graduate-hat.png?dpr=0.5&amp;fm=webp&amp;h=256&amp;w=256   128w,
                https://www.datocms-assets.com/62418/1648561795-books-graduate-hat.png?dpr=0.75&amp;fm=webp&amp;h=256&amp;w=256  192w,
                https://www.datocms-assets.com/62418/1648561795-books-graduate-hat.png?fm=webp&amp;h=256&amp;w=256               256w,
                https://www.datocms-assets.com/62418/1648561795-books-graduate-hat.png?dpr=1.5&amp;fm=webp&amp;h=256&amp;w=256   384w,
                https://www.datocms-assets.com/62418/1648561795-books-graduate-hat.png?dpr=2&amp;fm=webp&amp;h=256&amp;w=256     512w,
                https://www.datocms-assets.com/62418/1648561795-books-graduate-hat.png?dpr=3&amp;fm=webp&amp;h=256&amp;w=256     768w,
                https://www.datocms-assets.com/62418/1648561795-books-graduate-hat.png?dpr=4&amp;fm=webp&amp;h=256&amp;w=256    1024w
              "
              sizes="(max-width: 256px) 100vw, 256px"
              type="image/webp" />
            <source
              srcset="
                https://www.datocms-assets.com/62418/1648561795-books-graduate-hat.png?dpr=0.25&amp;h=256&amp;w=256   64w,
                https://www.datocms-assets.com/62418/1648561795-books-graduate-hat.png?dpr=0.5&amp;h=256&amp;w=256   128w,
                https://www.datocms-assets.com/62418/1648561795-books-graduate-hat.png?dpr=0.75&amp;h=256&amp;w=256  192w,
                https://www.datocms-assets.com/62418/1648561795-books-graduate-hat.png?h=256&amp;w=256               256w,
                https://www.datocms-assets.com/62418/1648561795-books-graduate-hat.png?dpr=1.5&amp;h=256&amp;w=256   384w,
                https://www.datocms-assets.com/62418/1648561795-books-graduate-hat.png?dpr=2&amp;h=256&amp;w=256     512w,
                https://www.datocms-assets.com/62418/1648561795-books-graduate-hat.png?dpr=3&amp;h=256&amp;w=256     768w,
                https://www.datocms-assets.com/62418/1648561795-books-graduate-hat.png?dpr=4&amp;h=256&amp;w=256    1024w
              "
              sizes="(max-width: 256px) 100vw, 256px" />
            <img
              src="@/assets/academy/1648561795-books-graduate-hat.webp"
              alt="A graduation hat on top of a pile of books."
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
                  https://www.datocms-assets.com/62418/1648561795-books-graduate-hat.png?dpr=0.25&amp;fm=webp&amp;h=256&amp;w=256   64w,
                  https://www.datocms-assets.com/62418/1648561795-books-graduate-hat.png?dpr=0.5&amp;fm=webp&amp;h=256&amp;w=256   128w,
                  https://www.datocms-assets.com/62418/1648561795-books-graduate-hat.png?dpr=0.75&amp;fm=webp&amp;h=256&amp;w=256  192w,
                  https://www.datocms-assets.com/62418/1648561795-books-graduate-hat.png?fm=webp&amp;h=256&amp;w=256               256w,
                  https://www.datocms-assets.com/62418/1648561795-books-graduate-hat.png?dpr=1.5&amp;fm=webp&amp;h=256&amp;w=256   384w,
                  https://www.datocms-assets.com/62418/1648561795-books-graduate-hat.png?dpr=2&amp;fm=webp&amp;h=256&amp;w=256     512w,
                  https://www.datocms-assets.com/62418/1648561795-books-graduate-hat.png?dpr=3&amp;fm=webp&amp;h=256&amp;w=256     768w,
                  https://www.datocms-assets.com/62418/1648561795-books-graduate-hat.png?dpr=4&amp;fm=webp&amp;h=256&amp;w=256    1024w
                "
                sizes="(max-width: 256px) 100vw, 256px"
                type="image/webp" />
              <source
                srcset="
                  https://www.datocms-assets.com/62418/1648561795-books-graduate-hat.png?dpr=0.25&amp;h=256&amp;w=256   64w,
                  https://www.datocms-assets.com/62418/1648561795-books-graduate-hat.png?dpr=0.5&amp;h=256&amp;w=256   128w,
                  https://www.datocms-assets.com/62418/1648561795-books-graduate-hat.png?dpr=0.75&amp;h=256&amp;w=256  192w,
                  https://www.datocms-assets.com/62418/1648561795-books-graduate-hat.png?h=256&amp;w=256               256w,
                  https://www.datocms-assets.com/62418/1648561795-books-graduate-hat.png?dpr=1.5&amp;h=256&amp;w=256   384w,
                  https://www.datocms-assets.com/62418/1648561795-books-graduate-hat.png?dpr=2&amp;h=256&amp;w=256     512w,
                  https://www.datocms-assets.com/62418/1648561795-books-graduate-hat.png?dpr=3&amp;h=256&amp;w=256     768w,
                  https://www.datocms-assets.com/62418/1648561795-books-graduate-hat.png?dpr=4&amp;h=256&amp;w=256    1024w
                "
                sizes="(max-width: 256px) 100vw, 256px" />
              <img
                src="@/assets/academy/1648561795-books-graduate-hat.webp"
                alt="A graduation hat on top of a pile of books."
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

        <div class="text">
          <h5 class="title title-5">
            Access Voodoo’s full areas of expertise with dedicated coaching
          </h5>
        </div>
      </div>
      <div class="content-card large white">
        <div
          class="image"
          style="display: block; overflow: hidden; position: relative"
        >
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2Ij48L3N2Zz4="
            role="presentation"
            style="display: block; width: 100%"
          />
          <div
            style="
              background-image: url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoICAgLFhAUDhgaDg8YGh0NDg4NFyEZHRcVFiEdHysjHR0oHRUWMDUlKC0vMjIyGSI4PTcwPCsxMi8BCgsLDg0OHBAQHDsoICgvLy8vLzYvLy8vLy8vLy8vLzU1Ly8vLy8vLy8vLy81Ly8vLy8vLy81Ly8vLy8vLy8vL//AABEIABgAGAMBIgACEQEDEQH/xAAaAAACAgMAAAAAAAAAAAAAAAAABQEGAwQH/8QAHhAAAgICAgMAAAAAAAAAAAAAAAMBAgQRBTESExT/xAAYAQACAwAAAAAAAAAAAAAAAAACBAABA//EABoRAAMBAAMAAAAAAAAAAAAAAAABAhEDEiH/2gAMAwEAAhEDEQA/AOxtvC1zaRcrkFy3WzLy1rVxJ8Snoa/6577G+HiVy2wKrGXqr6WjcSSKcZl/XGwF6jGX2GmUqHJmsihfF0hu9EgSaaXgWG/XGildaAAM3TCxH//Z');
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
                https://www.datocms-assets.com/62418/1648561869-gift.png?dpr=0.25&amp;fm=webp&amp;h=256&amp;w=256   64w,
                https://www.datocms-assets.com/62418/1648561869-gift.png?dpr=0.5&amp;fm=webp&amp;h=256&amp;w=256   128w,
                https://www.datocms-assets.com/62418/1648561869-gift.png?dpr=0.75&amp;fm=webp&amp;h=256&amp;w=256  192w,
                https://www.datocms-assets.com/62418/1648561869-gift.png?fm=webp&amp;h=256&amp;w=256               256w,
                https://www.datocms-assets.com/62418/1648561869-gift.png?dpr=1.5&amp;fm=webp&amp;h=256&amp;w=256   384w,
                https://www.datocms-assets.com/62418/1648561869-gift.png?dpr=2&amp;fm=webp&amp;h=256&amp;w=256     512w,
                https://www.datocms-assets.com/62418/1648561869-gift.png?dpr=3&amp;fm=webp&amp;h=256&amp;w=256     768w,
                https://www.datocms-assets.com/62418/1648561869-gift.png?dpr=4&amp;fm=webp&amp;h=256&amp;w=256    1024w
              "
              sizes="(max-width: 256px) 100vw, 256px"
              type="image/webp" />
            <source
              srcset="
                https://www.datocms-assets.com/62418/1648561869-gift.png?dpr=0.25&amp;h=256&amp;w=256   64w,
                https://www.datocms-assets.com/62418/1648561869-gift.png?dpr=0.5&amp;h=256&amp;w=256   128w,
                https://www.datocms-assets.com/62418/1648561869-gift.png?dpr=0.75&amp;h=256&amp;w=256  192w,
                https://www.datocms-assets.com/62418/1648561869-gift.png?h=256&amp;w=256               256w,
                https://www.datocms-assets.com/62418/1648561869-gift.png?dpr=1.5&amp;h=256&amp;w=256   384w,
                https://www.datocms-assets.com/62418/1648561869-gift.png?dpr=2&amp;h=256&amp;w=256     512w,
                https://www.datocms-assets.com/62418/1648561869-gift.png?dpr=3&amp;h=256&amp;w=256     768w,
                https://www.datocms-assets.com/62418/1648561869-gift.png?dpr=4&amp;h=256&amp;w=256    1024w
              "
              sizes="(max-width: 256px) 100vw, 256px" />
            <img
              src="@/assets/academy/1648561869-gift.webp"
              alt="A gift."
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
                  https://www.datocms-assets.com/62418/1648561869-gift.png?dpr=0.25&amp;fm=webp&amp;h=256&amp;w=256   64w,
                  https://www.datocms-assets.com/62418/1648561869-gift.png?dpr=0.5&amp;fm=webp&amp;h=256&amp;w=256   128w,
                  https://www.datocms-assets.com/62418/1648561869-gift.png?dpr=0.75&amp;fm=webp&amp;h=256&amp;w=256  192w,
                  https://www.datocms-assets.com/62418/1648561869-gift.png?fm=webp&amp;h=256&amp;w=256               256w,
                  https://www.datocms-assets.com/62418/1648561869-gift.png?dpr=1.5&amp;fm=webp&amp;h=256&amp;w=256   384w,
                  https://www.datocms-assets.com/62418/1648561869-gift.png?dpr=2&amp;fm=webp&amp;h=256&amp;w=256     512w,
                  https://www.datocms-assets.com/62418/1648561869-gift.png?dpr=3&amp;fm=webp&amp;h=256&amp;w=256     768w,
                  https://www.datocms-assets.com/62418/1648561869-gift.png?dpr=4&amp;fm=webp&amp;h=256&amp;w=256    1024w
                "
                sizes="(max-width: 256px) 100vw, 256px"
                type="image/webp" />
              <source
                srcset="
                  https://www.datocms-assets.com/62418/1648561869-gift.png?dpr=0.25&amp;h=256&amp;w=256   64w,
                  https://www.datocms-assets.com/62418/1648561869-gift.png?dpr=0.5&amp;h=256&amp;w=256   128w,
                  https://www.datocms-assets.com/62418/1648561869-gift.png?dpr=0.75&amp;h=256&amp;w=256  192w,
                  https://www.datocms-assets.com/62418/1648561869-gift.png?h=256&amp;w=256               256w,
                  https://www.datocms-assets.com/62418/1648561869-gift.png?dpr=1.5&amp;h=256&amp;w=256   384w,
                  https://www.datocms-assets.com/62418/1648561869-gift.png?dpr=2&amp;h=256&amp;w=256     512w,
                  https://www.datocms-assets.com/62418/1648561869-gift.png?dpr=3&amp;h=256&amp;w=256     768w,
                  https://www.datocms-assets.com/62418/1648561869-gift.png?dpr=4&amp;h=256&amp;w=256    1024w
                "
                sizes="(max-width: 256px) 100vw, 256px" />
              <img
                src="@/assets/academy/1648561869-gift.webp"
                alt="A gift."
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

        <div class="text">
          <p class="label">
            <b>VOODOO ACADEMY ONLY</b>
          </p>
          <h5 class="title title-5">
            Win rewards for building and testing your first prototypes
          </h5>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.content-cards {
    background-color: var(--grey-000);
}
.wrapper {
    max-width: 1024px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    grid-gap: 32px;
    gap: 32px;
}
.large {
    width: 320px;
    padding: 32px;
    background-color: #fff;
    background-color: var(--grey-000);
    box-shadow: 0 30px 60px rgba(0,33,99,.1), 0 2px 5px rgba(0,33,99,.1);
    box-shadow: var(--shadow-l);
    display: grid;
    border-radius: 16px;
    border-radius: var(--radius-16);
    align-items: center;
    justify-items: center;
    grid-template-rows: auto 1fr;
    transform: translateY(0);
}
.image {
    border-radius: 16px;
    border-radius: var(--radius-16);
    margin-bottom: 32px;
    width: 256px;
}
.text {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: center;
    align-self: start;
}
.title {
    color: var(--grey-900);
    font-family: "Poppins",ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,"Noto Sans","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    font-weight: 600;
    font-size: 20px;
    line-height: 1.5rem;
}
.label {
    text-transform: uppercase;
    color: #05f;
    color: var(--blue-500);
    margin-bottom: 8px;
    font-family: "Lato",ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,"Noto Sans","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    font-size: 14px;
    line-height: 1.2rem;
    font-weight: 400;
}
@media (max-width:768px) {
    .wrapper {
        margin-left: 24px !important;
    margin-right: 24px !important;
        flex-direction: column !important;
    align-items: center !important;
    }
    .large {
        width: 100% !important;
    padding: 16px !important;
    }
    .image {
        flex-direction: column !important;
    grid-gap: 24px !important;
    gap: 24px !important;
    }
}
@media (max-width:1024px) {
    .wrapper {
        margin-left: 40px;
    margin-right: 40px;
    }
    .large {
        width: 208px;
    padding: 32px;
}
.image {
    width: 128px !important;
}
.title {
    font-size: 18px;
    line-height: 1.25rem;
}
    }
@media (max-width:1280px) {
    .wrapper {
        max-width: 928px;
    }
    .large {
        width: 288px;
    }
    .image{
        width: 200px;
    }
}
</style>