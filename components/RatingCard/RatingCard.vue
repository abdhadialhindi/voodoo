<template>
  <section>
    <div class="text-center">
      <v-rating
        v-model="rating"
        bg-color="orange-lighten-1"
        color="yellow"
        readonly
        size="64"
        class="rating"
      ></v-rating>
      <h1 class="title-1">4.8</h1>
    </div>
    <SpacerAcademy></SpacerAcademy>
    <v-row justify="center" class="wrapper">
      <v-col
        cols="12"
        xl="3"
        lg="3"
        md="6"
        sm="6"
        xs="12"
        class="col"
        v-for="(item, index) in lists"
        :key="index"
      >
        <v-card class="mx-auto  box-shadow"   >
          <div class="d-flex justify-center">
            <v-avatar
              size="75"
              color="grey-darken-3"
              image="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
            ></v-avatar>
            <div class="ms-2">
              <v-card-title class="card-title mx-0 px-0 my-0 py-0">{{
                item.title
              }}</v-card-title>
              <p class="mt-0 pt-0 subtitle">{{ item.desc }}</p>
              <v-rating
                
                bg-color="orange-lighten-1"
                color="yellow"
                half-increments
                size="18"
              ></v-rating>
            </div>
          </div>
          <v-card-text class="text-center mx-0 my-0 pt-2 px-0 pb-2"> {{ item.text }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    const rating = 5;
    const lists = [
      {
        title: "Event",
        sub_title: "schools - digits - infuluencer",
        Image: new URL(
          "@/assets/images/ourteams/our teams 5.jpg",
          import.meta.url
        ).href,
        desc: "No events coming",
        text:'text image lorem'
      },
      {
        title: "Event",
        sub_title: "schools - digits - infuluencer",
        Image: new URL(
          "@/assets/images/ourteams/our teams 5.jpg",
          import.meta.url
        ).href,
        desc: "No events coming",
        text:'text image lorem'
      },
      {
        title: "Event",
        sub_title: "schools - digits - infuluencer",
        Image: new URL(
          "@/assets/images/ourteams/our teams 5.jpg",
          import.meta.url
        ).href,
        desc: "No events coming",
        text:'text image lorem'
      },
  
     
 
    ];
    const { locale } = useI18n();
    return { lists, rating };
  },
});
</script>
<style scoped>
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
    box-shadow: 8px 8px 8px -4px #ccc;
    
}
.box-shadow {
    
}
.rating {
  font-size: 48px;
}
.title-1 {
  font-size: 32px;
  font-weight: 700;
}
.card-title {
  font-weight: 700;
  font-size: 16px;
}
.subtitle {
  font-size: 12px;
  font-weight: 200;
}
@media (max-width: 768px) {
}
@media (max-width: 1024px) {
  .rating {
    font-size: 32px;
  }
  .title-1 {
    font-size: 24px;
  }
}
@media (max-width: 128-px) {
}
</style>