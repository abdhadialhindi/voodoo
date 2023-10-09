<template>
  <section>
    <v-row justify="center" class="wrapper">
      <v-col cols="12" xl="3" lg="3" md="6" sm="6" xs="12" class="col" v-for="(item,index) in lists" :key="index">
        <img
          contain
          src="@/assets/casestudies/our teams 5.jpg"
          
          class="img"
        />
        <div class="d-flex justify-center align-center flex-column  scale">
          <h1 class="title">Hack</h1>
          <p class="paragraph">lskladlksandknm</p>
          <v-btn color="primary" class="button">
            read more
          </v-btn>
        </div>
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
                title: 'Event',
                sub_title: 'schools - digits - infuluencer',
                Image: new URL('@/assets/casestudies/our teams 5.jpg', import.meta.url).href,
                desc: 'No events coming',
            },
            {
                title: 'Event',
                sub_title: 'schools - digits - infuluencer',
                Image: new URL('@/assets/casestudies/our teams 5.jpg', import.meta.url).href,
                desc: 'No events coming',
            },
            {
                title: 'Event',
                sub_title: 'schools - digits - infuluencer',
                Image: new URL('@/assets/casestudies/our teams 5.jpg', import.meta.url).href,
                desc: 'No events coming',
            },
            {
                title: 'Event',
                sub_title: 'schools - digits - infuluencer',
                Image: new URL('@/assets/casestudies/our teams 5.jpg', import.meta.url).href,
                desc: 'No events coming',
            },
            {
                title: 'Event',
                sub_title: 'schools - digits - infuluencer',
                Image: new URL('@/assets/casestudies/our teams 5.jpg', import.meta.url).href,
                desc: 'No events coming',
            },
            {
                title: 'Event',
                sub_title: 'schools - digits - infuluencer',
                Image: new URL('@/assets/casestudies/our teams 5.jpg', import.meta.url).href,
                desc: 'No events coming',
            },
        ]
        const { locale } = useI18n()
        return { lists }
    }
})
</script>
<style scoped lang="scss">
.wrapper {
  max-width: 1024px;
  margin: 0 auto;
  grid-gap: 72px;
  gap: 72px;
}
.col {
    position: relative;
    overflow: hidden;
    padding: 0 !important;
    height: 200px;
}

.img {
  cursor: pointer;
  width: 100%;
  height: 100%;
}
.scale{
    position: absolute;
    padding: 20px;
  left: 0;
  
  background-color: rgba($color: #fff, $alpha: 0.5);
  
  width: 100%;
  transition: 1s;
  bottom: -100%;
  // height: 50%
}
.col:hover .scale{

bottom: 0;
}
.title {
  
    opacity: 1;
}
@media (max-width: 768px) {
  .wrapper {
    grid-gap: 36px;
    gap: 36px;
  }
}
@media (max-width: 1024px) {
  .wrapper {
    margin-left: 40px;
    margin-right: 40px;
  }
}
@media (max-width: 1280px) {
  .wrapper {
    max-width: 928px;
  }
}
</style>