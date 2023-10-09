<template>
  <section class="section-title light">
    <div class="default-block wrapper">
      <div class="text">
        <div>
          <h2 class="title title-2">Ready to learn?</h2>
        </div>

        <div class="buttons">
          <a 
            ><button class="button light primary small">Sign up now</button></a
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
  gap: 24px;
}
.text {
  display: flex;
  flex-direction: column;
  grid-gap: 24px;
  gap: 24px;
  text-align: center;
  width: 83.3333333333%;
}
.title {
  color: var(--grey-900);
  font-family: Poppins, ui-sans-serif, system-ui, -apple-system, Segoe UI,
    Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont,
    "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 48px;
  line-height: 2.5rem;
  font-weight: 700;
}
.buttons{
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
@media (max-width: 768px) {
  .wrapper {
    margin-left: 24px;
    margin-right: 24px;
  }
  .buttons {
    flex-direction: column;
    align-items: center;
  }
}
@media (max-width: 1024px) {
  .wrapper {
    margin-left: 40px;
    margin-right: 40px;
    grid-gap: 16px;
    gap: 16px;
  }
  .title {
    font-size: 28px;
    line-height: 1.8rem;
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
  .text {
    width: 100%;
    grid-gap: 16px;
    gap: 16px;
  }
}
</style>