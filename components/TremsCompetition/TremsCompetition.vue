<template>
  <section class="text-image light">
    <div class="default-block wrapper">
      <div class="text no-image">
        <div class="rich-text paragraph-1 custom-bullet">
          <p>
            Read the
            <a>Terms &amp; Conditions</a>
          </p>
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
.no-image {
    margin: 0 auto;
    align-items: center;
    text-align: center;
    width: 66.6666666667%;
}
.text {
    justify-content: center;
    display: flex;
    flex-direction: column;
}
.rich-text {
    color: var(--grey-900);
    font-family: Lato,ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,"Noto Sans","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    font-size: 18px;
    line-height: 2.4rem;
    font-weight: 400;
}
.rich-text p:last-child {
    margin-bottom: 0;
}
.rich-text p a {
    display: inline;
}
.rich-text a {
    color: #05f;
    color: var(--blue-500);
    display: block;
}
a {
    text-decoration: none;
}
@media (max-width:768px) {
    .wrapper {
        flex-direction: column;
    align-items: center;
    flex-direction: column-reverse;
    margin-left: 24px !important;
    margin-right: 24px !important;
    }
    .no-image {
        width: 100% !important;
    }
}
@media (max-width:1024px) {
 .wrapper {
    margin-left: 40px;
    margin-right: 40px;
 }   
 .no-image {
    width: 100%;
 }
 .rich-text {
    width: 100%;
 }
}
@media (max-width:1280px) {
    .wrapper {
        grid-gap: 24px;
    gap: 24px;
    max-width: 928px;
}
 .no-image {
    width: 83.3333333333%;
 }   

}
</style>