<template>
  <section class="section-title light">
    <div class="default-block wrapper">
      <div class="text">
        <div class="buttons">
          <a target="_blank"
            ><button class="button light primary small">
              Join the Discord
            </button></a
          >
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.section-title {
    background-color: var(--grey-000);
}
.wrapper {
    max-width: 1024px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-gap: 24px;
}
.text {
    display: flex;
    flex-direction: column;
    grid-gap: 24px;
    gap: 24px;
    text-align: center;
    width: 83.3333333333%;
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
    font-family: Hartwell,ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,"Noto Sans","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    font-weight: 700;
    font-size: 18px;
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
    justify-content: center;
}
@media (max-width:768px) {
    .wrapper {
        margin-left: 24px !important;
        margin-right: 24px !important;
    }
    .buttons {
        flex-direction: column;
    align-items: center;
    }
}
@media (max-width:1024px) {
    .wrapper {
        grid-gap: 16px;
    gap: 16px;
    margin-left: 40px;
    margin-right: 40px;
    }
    .buttons {
        grid-gap: 16px;
    gap: 16px;
    }
}
@media (max-width:1280px) {
    .wrapper {
        max-width: 928px;
    }
    .text {
        width: 100%;
    grid-gap: 16px;
    gap: 16px;
    }
}
</style>