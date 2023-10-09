<template>
  <section class="section-title light">
    <div class="default-block wrapper">
      <div class="text">
        <div>
          <h2 class="title title-2">Join the team</h2>
        </div>
        <div class="rich-text paragraph-1">
          <p>
            We’re always on the lookout for talented people with a passion for
            apps. If you’re up for the challenge, it’s time to reach out.
          </p>
        </div>
        <div class="buttons">
          <a
            
            ><button class="button light primary small">
              See our open positions
            </button></a
          >
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
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
  font-family: Poppins, ui-sans-serif, system-ui, -apple-system, Segoe UI,
    Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont,
    "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 48px;
  line-height: 4.1rem;
  font-weight: 700;
  color: var(--grey-900);
}
.rich-text {
  color: var(--grey-700);
  font-family: Lato, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto,
    Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, "Segoe UI",
    "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 24px;
  line-height: 2.4rem;
  font-weight: 400;
}
.rich-text p:last-child {
  margin-bottom: 0;
}

.rich-text p {
  margin-bottom: 16px;
}
.buttons {
  display: flex;
  justify-content: center;
  grid-gap: 24px;
  gap: 24px;
}
.primary {
  background-color: #05f;
  background-color: var(--blue-500);
  color: #fff;
  color: var(--grey-000);
}
.small {
  padding: 8px 16px;
  grid-gap: 8px;
  gap: 8px;
  height: 40px;
  font-family: Poppins, ui-sans-serif, system-ui, -apple-system, Segoe UI,
    Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont,
    "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: 600;
  font-size: 16px;
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

@media (max-width: 768px) {
  .wrapper {
    margin-left: 24px !important;
    margin-right: 24px !important;
  }
  .buttons {
    flex-direction: column !important;
    align-items: center !important;
  }
}

@media (max-width: 1024px) {
  .wrapper {
    grid-gap: 16px;
    gap: 16px;
  }
  .title {
    font-size: 28px !important;
    line-height: 3rem;
  }
  .rich-text {
    font-size: 18px;
    line-height: 2.2rem;
    width: 100%;
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
a {
  text-decoration: none;
}
</style>