<template>
    <section>
        <h1 class="title">Recommended Vidoes </h1>
        <v-container>
            <div class="d-flex justify-center wrapper">
                <div class="d-flex flex-column justify-center align-center" v-for="(item,index) in lists" :key="index">
                    <p class="desc">{{ item.title }}</p>
                    <img :src="item.Image" alt="" class="img">
                </div>
            </div>
        </v-container>
    </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    const page =1
    const lists = [
      {
        title:'Eget lorem elit',
        Image: new URL("@/assets/videotutorial/our teams 3.jpg", import.meta.url).href,
        
      },
      {
        title:'Eget lorem elit',
        Image: new URL("@/assets/videotutorial/our teams 3.jpg", import.meta.url).href,
        
      },
      {
        title:'Eget lorem elit',
        Image: new URL("@/assets/videotutorial/our teams 3.jpg", import.meta.url).href,
        
      },
      {
        title:'Eget lorem elit',
        Image: new URL("@/assets/videotutorial/our teams 3.jpg", import.meta.url).href,
        
      },
      {
        title:'Eget lorem elit',
        Image: new URL("@/assets/videotutorial/our teams 3.jpg", import.meta.url).href,
        
      },
   
     
      
     
    ];
    const { locale } = useI18n();
    return { lists,page };
  },
});
</script>
<style scoped>
.wrapper {
    grid-gap: 72px;
    gap: 72px;
}
.title {
    color: var(--blue-500);
    text-align: center;
}
.img {
    width: 100%;
}
.desc {
    color: var(--blue-500);
    font-weight: 500;
}
@media (max-width:768px) {
    .wrapper {
        grid-gap: 32px;
        gap: 32px;
    }
}
@media (max-width:768px) {
    .wrapper {
        flex-direction: column;
    }
}
</style>