<template>
  <section>
    <h1 class="title">How Create a game</h1>
    <div class="wrapper">
      <video
        src="@/assets/videotutorial/video2.mp4"
        controls
        class="video"
      ></video>
      <v-btn color="green" class="btn">Games</v-btn>
      <p class="desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        cupiditate hic corrupti eaque eveniet in! Nihil vel saepe nam non,
        sapiente tempore hic recusandae cumque ipsa quo sequi dolorem maiores.
      </p>
    </div>
  </section>
</template>
<style scoped>
.title {
  font-weight: 600;
  font-size: 48px;
  text-align: center;
  color: var(--blue-500);
}
.wrapper {
  max-width: 768px;
  margin: 0 auto;
  height: 70vh;
}
.video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.btn {
  text-transform: none;
}
.desc {
    margin-top: 12px;
}
</style>