<template>
  <div class="responsive">
    <svg
      width="100"
      height="22"
      viewBox="0 0 120 24"
      :style="`color:${colorvoodoo}`"
      xmlns="http://www.w3.org/2000/svg"
      class="voodoo-logo light"
    >
      <path
        fill="currentColor"
        d="M20.3897 15.0962C20.3897 10.2266 24.5791 6.22339 29.7038 6.22339C34.8285 6.22339 39.0803 10.2266 39.0803 15.0962C39.0803 20.0277 34.8285 24 29.7038 24C24.5791 24 20.3897 20.0277 20.3897 15.0962ZM24.9844 15.0962C24.9844 17.9198 27.0148 19.9659 29.7038 19.9659C32.3617 19.9659 34.4232 17.8579 34.4232 15.0962C34.4232 12.3655 32.3617 10.2885 29.7038 10.2885C27.0772 10.2885 24.9844 12.3965 24.9844 15.0962Z"
      ></path>
      <path
        fill="currentColor"
        d="M40.5534 15.0962C40.5534 10.2266 44.7428 6.22339 49.8675 6.22339C54.9922 6.22339 59.244 10.2266 59.244 15.0962C59.244 20.0277 54.9922 24 49.8675 24C44.7428 24 40.5534 20.0277 40.5534 15.0962ZM45.1481 15.0962C45.1481 17.9198 47.1785 19.9659 49.8675 19.9659C52.5253 19.9659 54.5869 17.8579 54.5869 15.0962C54.5869 12.3655 52.5253 10.2885 49.8675 10.2885C47.2448 10.2885 45.1481 12.3965 45.1481 15.0962Z"
      ></path>
      <path
        fill="currentColor"
        d="M81.1418 15.0962C81.1418 10.2266 85.3312 6.22339 90.456 6.22339C95.5807 6.22339 99.8324 10.2266 99.8324 15.0962C99.8324 20.0277 95.5807 24 90.456 24C85.3312 24 81.1418 20.0277 81.1418 15.0962ZM85.7365 15.0962C85.7365 17.9198 87.7669 19.9659 90.456 19.9659C93.1138 19.9659 95.1754 17.8579 95.1754 15.0962C95.1754 12.3655 93.1138 10.2885 90.456 10.2885C87.8293 10.2885 85.7365 12.3965 85.7365 15.0962Z"
      ></path>
      <path
        fill="currentColor"
        d="M101.309 15.0962C101.309 10.2266 105.499 6.22339 110.624 6.22339C115.748 6.22339 120 10.2266 120 15.0962C120 20.0277 115.748 24 110.624 24C105.495 23.9962 101.309 20.0277 101.309 15.0962ZM105.904 15.0962C105.904 17.9198 107.935 19.9659 110.624 19.9659C113.281 19.9659 115.343 17.8579 115.343 15.0962C115.343 12.3655 113.281 10.2885 110.624 10.2885C107.997 10.2885 105.904 12.3965 105.904 15.0962Z"
      ></path>
      <path
        fill="currentColor"
        d="M11.8005 16.5621L4.92985 0H0L9.78176 23.5977H13.827L23.6906 0H18.7217L11.8005 16.5621Z"
      ></path>
      <path
        fill="currentColor"
        d="M74.8363 0.715576L74.848 7.47658C73.445 6.68367 71.8121 6.22339 70.0818 6.22339C64.9571 6.22339 60.7677 10.2266 60.7677 15.0962C60.7677 20.0277 64.9571 24 70.0818 24C71.816 24 73.445 23.5436 74.848 22.7546V23.5939H79.4739L79.4583 0.715576H74.8363ZM70.0818 19.9659C67.3928 19.9659 65.3624 17.9198 65.3624 15.0962C65.3624 12.3965 67.4552 10.2885 70.0818 10.2885C72.7397 10.2885 74.8012 12.3655 74.8012 15.0962C74.8012 17.854 72.7358 19.9659 70.0818 19.9659Z"
      ></path>
    </svg>
  </div>
</template>
<script lang="ts" >
import { defineComponent, reactive, toRefs } from "vue";
import { computed, ref, onMounted } from "vue";
import { routerKey, RouterLink, RouterView } from "vue-router";
import { useDisplay } from "vuetify";

export default defineComponent({
  props: {},
  setup() {
    let scrollPosition = ref(0);
    const color = ref("transparent");
    const route = useRoute();
    const color1 = ref("black");
    
    onMounted(() => {
      window.addEventListener("scroll", () => {
        scrollPosition.value = window.scrollY;
        console.log(scrollPosition.value);
      });
    });

    var colorvoodoo = computed({
      get() {
        if (route.path == "/blockchain" || (route.path == "/jobs" && scrollPosition.value==0)) {
          return ( "#fff");
        } else if (scrollPosition.value > 0 && route.path == "/jobs") {
          return  "black";
        } else {
          return ( "black");
        }
      },
      set() {
        return;
      },
    });

    return {
      colorvoodoo,
      scrollPosition,
    };
  },
});
</script>
<style scoped>
@media (max-width<768px) {
  .responsive {
    width: 80px !important;
    margin-left: 32px !important;
  }
}
</style>