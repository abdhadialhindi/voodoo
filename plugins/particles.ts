import Particles from "vue3-particles";
 
declare module "vue3-particles";


export default defineNuxtPlugin((nuxt) => {
    nuxt.vueApp.use(Particles);
  });
  