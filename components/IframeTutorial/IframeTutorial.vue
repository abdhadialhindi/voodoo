<template>
  <section>
    <v-row justify="center">
      <h1 class="ms-4 title">Games</h1>
      <h1 class="ms-4 title">Analytics</h1>
      <h1 class="ms-4 title">Marketing</h1>
      <h1 class="ms-4 title">General</h1>
    </v-row>
    <v-container>
        <v-row>
      <v-col cols="12" xl="4" lg="4" sm="6" md="6" xs="12" v-for="(item, index) in lists" :key="index">
        <NuxtLink to="/video">
        <div class="box" :style="`background-image: url(${item.Image});`">
          <div class="overlay">
            <v-icon icon="mdi-play" class="icon"></v-icon>
            <div class="buttons d-flex justify-space-between px-2 py-2">
              <div>
                <v-btn class="btn me-2" color="primary" size="small"
                  >Games</v-btn
                >
                <v-btn class="btn" color="green" size="small">Games</v-btn>
              </div>
            </div>
          </div>
        </div>
    </NuxtLink>
        <h1>{{ item.title }}</h1>
      </v-col>
    </v-row>
   <v-row justify="start">
    <v-pagination
      v-model="page"
      :length="4"
      color="primary"
      next-icon="mdi-menu-right"
    ></v-pagination>
</v-row>
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
        title:'How to use ristique senecuts',
        Image: new URL("@/assets/tutorial/our teams.jpg", import.meta.url).href,
        
      },
      {
        title:'How to use ristique senecuts',
        Image: new URL("@/assets/tutorial/our teams.jpg", import.meta.url).href,
        
      },
      {
        title:'How to use ristique senecuts',
        Image: new URL("@/assets/tutorial/our teams.jpg", import.meta.url).href,
        
      },
      {
        title:'How to use ristique senecuts',
        Image: new URL("@/assets/tutorial/our teams.jpg", import.meta.url).href,
        
      },
      {
        title:'How to use ristique senecuts',
        Image: new URL("@/assets/tutorial/our teams.jpg", import.meta.url).href,
        
      },
      {
        title:'How to use ristique senecuts',
        Image: new URL("@/assets/tutorial/our teams.jpg", import.meta.url).href,
       
      },
      {
        title:'How to use ristique senecuts',
        Image: new URL("@/assets/tutorial/our teams.jpg", import.meta.url).href,
       
      },
      {
        title:'How to use ristique senecuts',
        Image: new URL("@/assets/tutorial/our teams.jpg", import.meta.url).href,
       
      },
      {
        title:'How to use ristique senecuts',
        Image: new URL("@/assets/tutorial/our teams.jpg", import.meta.url).href,
       
      },
    ];
    const { locale } = useI18n();
    return { lists,page };
  },
});
</script>
<style scoped>
.title {
  position: relative;
  cursor: pointer;
  margin-bottom: 16px;
}
.title:after {
  content: "";
  position: absolute;
  top: 100%;
  left: 0;
  width: 0%;
  margin-right: 16px;
  height: 1px;
  
  transition: 1s linear;
}
.title:hover::after {
    width: 100%;
    height: 1px;
    color: var(--blue-500);
  border: 1px solid;
}
.box {
  background-image: url("@/assets/tutorial/our teams.jpg");
  background-size: cover;
  height: 200px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}
.overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: rgba(131, 131, 136, 0.603);
  transition: 1s linear;
}
.box:hover .overlay {
  top: 0;
  
}
.icon {
  color: #fff;
  opacity: 0.9;
  font-size: 48px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
.btn {
  text-transform: none;
}
.buttons {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
<style>
.v-pagination__prev {
    display: none !important;
}
.v-pagination__list li{
    border: 1px solid var(--blue-500);
    margin: 0 !important;
    border-radius: 0px !important;
}

</style>