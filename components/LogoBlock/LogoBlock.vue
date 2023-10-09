<template>
  <div class="logos-links dark">
    <div class="default-block">
      <div class="logos">
        <a target="_blank" class="link"
          ><img
            src="https://www.datocms-assets.com/62418/1643726232-pocket-gamer-biz.svg"
            class="logo-image" /></a
        ><a target="_blank" class="link"
          ><img
            src="https://www.datocms-assets.com/62418/1643726234-techcrunch.svg"
            class="logo-image" /></a
        ><a target="_blank" class="link"
          ><img
            src="https://www.datocms-assets.com/62418/1643710631-bloomberg.svg"
            class="logo-image" /></a
        ><a target="_blank" class="link"
          ><img
            src="https://www.datocms-assets.com/62418/1643710649-les-echos.svg"
            class="logo-image"
        /></a>
      </div>
    </div>
  </div>
</template>
<style scoped>
.logos-links {
  background-color: var(--grey-900);
  position: relative;
  top: -64px;
}

.default-block {
  max-width: 1024px;
  margin: 0 auto;
}

.logos {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  grid-gap: 32px;
  gap: 32px;
  width: 100%;
}

.link {
  transition: transform 0.2s ease-in-out;
  text-decoration: none;
}

.logo-image {
  width: 100%;
}

.link:hover {
  transform: scale(0.95);
}

@media (max-width: 768) {
  .default-block {
    margin-left: 24px;
    margin-right: 24px;
  }
}

@media (max-width: 1024px) {
  .default-block {
    margin-left: 40px;
    margin-right: 40px;
  }
}
@media (max-width: 1280px) {
  .default-block {
    max-width: 928px;
  }
}
</style>