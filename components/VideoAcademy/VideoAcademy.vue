<template>
  <section class="text-image light">
    <div class="default-block wrapper">
      <div class="text">
        <h3 class="title title-3">Get started with the Voodoo Academy</h3>
        <div class="rich-text paragraph-1 custom-bullet">
          <p>
            We have created the Voodoo Academy program to support you in
            learning how to make hyper and hybrid-casual games, and making hits,
            directly with our Publishing Team.
          </p>
        </div>
        <div class="buttons">
          <a  target="_blank"
            ><button class="button light primary small">
              Sign up now
              <!---->
            </button></a
          >
        </div>
      </div>
      <div class="image image-styles">
        <!---->
        <div class="video-container">
          <video
            poster="https://image.mux.com/r9d6jp4k8OTOVn8eDdXHvl2mQK7BI1mA/thumbnail.jpg?time=0"
            playsinline
            loop
            autoplay
            muted
            preload="metadata"
            class="video"
          >
            <source
              src="@/assets/academy/1664974558-voodoo-academy-animation-books.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.text-image {
    background-color: var(--grey-000);
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
.title {
    font-family: Poppins,ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,"Noto Sans","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    font-weight: 700;
    font-size:40px;
    line-height: 3rem;
    color: var(--grey-900);
    margin-bottom: 24px;
}
.rich-text {
    color: var(--grey-900);
    font-family: Lato,ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,"Noto Sans","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    font-size: 18px;
    line-height: 1.75rem;
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
    color: #fff;
    color: var(--grey-000);
    padding: 8px 16px;
    grid-gap: 8px;
    gap: 8px;
    height: 40px;
    font-family: Poppins,ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,"Noto Sans","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    font-weight: 600;
    font-size:16px;
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
.image {
    width: 41.6666666667%;
}
.video-container {
    display: flex;
    align-items: center;
}
.video {
    border-radius: var(--radius-16);
    box-shadow: var(--shadow-l);
    width: 100%;
    -o-object-fit: cover;
    object-fit: cover;
}
@media (max-width:768px) {
    .wrapper {
        flex-direction: column !important;
    align-items: center !important;
    flex-direction: column-reverse !important;
    margin-left: 24px !important;
    margin-right: 24px !important;
    }
    .text {
        width: 100% !important;
    }
    .image {
        width: 100% !important;
    margin-bottom: 24px !important;
    }
}
@media (max-width:1024px) {
 .wrapper {
    margin-left: 40px;
    margin-right: 40px;
 }   
 .text {
    width: 50%;
 }
 .title {
    font-size: 24px;
    line-height: 2rem;
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
@media (max-width:1280px) {
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