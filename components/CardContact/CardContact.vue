<template>
  <section>
    <v-row class="wrapper" justify="center">
      <v-col cols="6" lg="3" xl="3" sm="3" md="3" xs="6" v-for="(item,index) in lists" :key="index">
        <v-card class="card" height="225" width="200">
          <img
            class="img"
           :src="item.Image"
            alt=""
          />

          <div class="d-flex justify-center align-center flex-column content">
            <h1 class="text-center font">{{ item.title }}</h1>
            <p class="text-center subtitle">
              {{ item.sub_title }}
              
            </p>
            <v-btn class="btn " ><span class="primary">{{ item.desc }}</span></v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    setup() {
        const lists = [
            {
                title: 'FAQ',
                sub_title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                Image: new URL('@/assets/contact/png-transparent-joystick-game-controller-video-game-icon-video-game-controller-monochrome-video-game-black-thumbnail.png', import.meta.url).href,
                desc: 'GO TO FAQ',
            },
            {
                title: 'Tutorial',
                sub_title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet,',
                Image: new URL('@/assets/contact/png-transparent-silhouette-trophy-international-champions-cup-uefa-champions-league-trophy-uefa-cup-winners-cup-trophy-sport-silhouette-champion-thumbnail.png', import.meta.url).href,
                desc: 'GO TO TUTORIAL',
            },
            {
                title: 'Blog',
                sub_title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisi',
                Image: new URL('@/assets/contact/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png', import.meta.url).href,
                desc: 'GO TO BLOG',
            },
        ]
        const { locale } = useI18n()
        return { lists }
    }
})
</script>
<style scoped>
.wrapper {
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
  grid-gap: 48px;
  gap: 48px;
}
.img {
  transform: translateX(50%) translateY(-50%);
  width: 100px;
  position: absolute;
  right: 50%;
  bottom: 50%;
  z-index: 11;
}
.card {
  position: relative;
  z-index: 1;
  overflow: visible;
}
.content {
  margin-top: 80px;
  position: absolute;
  width: 100%;
}
.subtitle {
    width: 66.6666666%;
    font-size: 9px;
    font-weight: 300;
    height: 65px;
}
.btn {
    background-color: var(--blue-100);
}
.primary {
    color: var(--blue-500);
}
</style>