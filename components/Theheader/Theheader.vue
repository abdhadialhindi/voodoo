<template>
  <div>
    <v-navigation-drawer
      location="top"
      v-model="drawer"
      :order="4"
      v-if="width == 'sm' || width == 'xs' || width == 'md'"
      class="navigation"
      style="
        height: 100vh;
        transition: all 0.5s ease-in-out !important;
        top: 53px !important;
      "
      :style="`background-color:${colorpath ? '#212734' : '#fff'}`"
      elevation="0"
    >
      <v-list class="list mt-5">
        <NuxtLink to="/games" class="nuxt">
          <v-list-item
            :style="`color:${colorpath ? '#fff' : 'black'}`"
            class="ms-4"
          >
            Games
          </v-list-item>
        </NuxtLink>
        <NuxtLink to="/blockchain" class="nuxt">
          <v-list-item
            :style="`color:${colorpath ? '#fff' : 'black'}`"
            class="ms-4"
          >
            Blockchain
          </v-list-item>
        </NuxtLink>
        <NuxtLink to="/Apps" class="nuxt">
          <v-list-item
            :style="`color:${colorpath ? '#fff' : 'black'}`"
            class="ms-4"
          >
            Apps
          </v-list-item>
        </NuxtLink>
        <NuxtLink to="/puplishing" class="nuxt">
          <v-list-item
            :style="`color:${colorpath ? '#fff' : 'black'}`"
            class="ms-4"
          >
            Hybrid puplishing
          </v-list-item>
        </NuxtLink>
        <NuxtLink to="/casual-puplishing" class="nuxt">
          <v-list-item
            :style="`color:${colorpath ? '#fff' : 'black'}`"
            class="ms-4"
          >
            Casual puplishing
          </v-list-item>
        </NuxtLink>
        <NuxtLink to="/jobs" class="nuxt">
          <v-list-item
            :style="`color:${colorpath ? '#fff' : 'black'}`"
            class="ms-4"
          >
            jobs
          </v-list-item>
        </NuxtLink>
      </v-list>
      <div
        class="button-group mt-16 d-flex justify-center align-start"
        :style="`background-color:${colorpath ? '#353c4c' : '#fff'}`"
      >
        <div class="mt-4">
          <v-btn
            variant="text"
            class="me-4 font-weight-bold"
            color="primary"
            height="40"
            >Log In</v-btn
          >
          <v-btn
            rounded
            class="ms-2 font-weight-bold"
            height="40"
            color="primary"
            ><NuxtLink to="/contact">Sign Up</NuxtLink> </v-btn
          >
        </div>
      </div>
    </v-navigation-drawer>
    <v-app-bar app light flat :style="`background-color:${color}`">
      <v-toolbar
        :color="drawer ? colortool : 'transparent'"
        v-if="width == 'xs'"
        class="toolbar"
        flat
      >
        <v-app-bar-title>
          <NuxtLink to="/" class="response">
            <Voodoo></Voodoo>
          </NuxtLink>
        </v-app-bar-title>
        <v-spacer />
        <v-app-bar-nav-icon
          variant="text"
          @click.stop="drawer = !drawer"
          v-if="!drawer"
          :style="`color: ${coloricon ? '#fff' : 'balck'}`"
          size="small"
        ></v-app-bar-nav-icon>
        <v-app-bar-nav-icon
          variant="text"
          @click.stop="drawer = !drawer"
          :style="`color: ${colorpath ? '#fff' : 'balck'}`"
          v-else
          icon="mdi-close"
          width="24"
        ></v-app-bar-nav-icon>
      </v-toolbar>
      <v-toolbar
        v-else-if="width == 'sm'"
        class="toolbar"
        :color="drawer ? colortool : 'transparent'"
        flat
      >
        <v-app-bar-title class="ms-8">
          <NuxtLink>
            <Voodoo></Voodoo>
          </NuxtLink>
        </v-app-bar-title>
        <v-spacer />
        <div class="d-flex justify-center me-8">
          <div class="d-flex justify-between me-8 align-center">
            <NuxtLink>
              <v-btn
                variant="text"
                class="me-4 font-weight-bold"
                color="primary"
                height="40"
                >Log In</v-btn
              >
            </NuxtLink>
            <NuxtLink>
              <v-btn
                rounded
                class="ms-2 font-weight-bold text"
                height="40"
                color="primary"
                variant="flat"
                ><span>sign up</span></v-btn
              >
            </NuxtLink>
          </div>
          <div>
            <v-app-bar-nav-icon
              :style="`color: ${colorpath ? '#fff' : 'balck'} !important`"
              variant="text"
              @click.stop="drawer = !drawer"
              v-if="!drawer"
              class="font-icon"
            ></v-app-bar-nav-icon>
            <v-app-bar-nav-icon
              :style="`color: ${colorpath ? '#fff' : 'balck'} !important`"
              variant="text"
              @click.stop="drawer = !drawer"
              v-else
              icon="mdi-close"
              class="font-icon"
            ></v-app-bar-nav-icon>
          </div>
        </div>
      </v-toolbar>
      <v-toolbar v-else class="toolbar" color="transparent" flat>
        <v-container>
          <v-row justify="center">
            <div class="main-header d-flex justify-space-between">
              <div class="d-flex justify-space-between">
                <NuxtLink to="/" class="voodoo" >
                  <Voodoo></Voodoo>
                </NuxtLink>

                <div class="width-link d-flex align-center">
                  <NuxtLink
                    to="/games"
                    class="link hover-btn"
                    :style="`color:${$route.path=='/games' ? '#05f' : colorvoodoo}`"
                  >
                    Games</NuxtLink
                  >
                  <div>
                    <v-menu
                      open-on-hover
                      width="50"
                      height="130"
                      location="bottom"
                      class="text-center mt-5"
                      activator="parent"
                    >
                      <template v-slot:activator="{ props }">
                        <NuxtLink
                          v-bind="props"
                          class="link hover-btn cruser"
                          :style="`color:${colorvoodoo}`"
                        >
                          Publishing</NuxtLink
                        >
                      </template>

                      <v-list class="text-left rounded-xl mt-2 width-list me-8">
                        <v-list-item>
                          <NuxtLink to="/puplishing" class="link hover-btn">
                            <v-btn
                              variant="text"
                              size="default"
                              class="hover-btn"
                              :style="`color:black`"
                              ><v-list-item-title>
                                Hybrid publishing
                              </v-list-item-title>
                            </v-btn>
                          </NuxtLink>
                        </v-list-item>
                        <v-list-item>
                          <NuxtLink
                            to="casual-puplishing"
                            class="link hover-btn"
                          >
                            <v-btn
                              variant="text"
                              size="default"
                              class="hover-btn"
                              :style="`color:black`"
                              ><v-list-item-title>
                                Casual puplishing
                              </v-list-item-title>
                            </v-btn>
                          </NuxtLink>
                        </v-list-item>
                      </v-list>
                    </v-menu>
                  </div>
                  <NuxtLink
                    to="/Apps"
                    class="link hover-btn"
                    :style="`color:${$route.path=='/Apps' ? '#05f': colorvoodoo }`"
                    >Apps
                  </NuxtLink>
                  <NuxtLink
                    to="/blockchain"
                    class="link hover-btn"
                    :style="`color:${$route.path=='/blockchain' ? '#05f' : colorvoodoo}`"
                    >Blockchain
                  </NuxtLink>
                  <NuxtLink
                    to="/jobs"
                    class="link hover-btn"
                    :style="`color:${$route.path=='/jobs' ? '#05f' : colorvoodoo}`"
                    >Careers
                  </NuxtLink>
                 
                  <div>
                    <v-menu
                      open-on-hover
                      width="50"
                      height="225"
                      location="bottom"
                      class="text-center mt-5"
                      activator="parent"
                    >
                      <template v-slot:activator="{ props }">
                        <NuxtLink
                          v-bind="props"
                          class="link hover-btn cruser"
                          :style="`color:${colorvoodoo}`"
                        >
                          Resources</NuxtLink
                        >
                      </template>

                      <v-list class="text-left rounded-xl mt-2 width-list me-8">
                        <v-list-item>
                          <NuxtLink to="/academy" class="link hover-btn">
                            <v-btn
                              variant="text"
                              size="default"
                              class="hover-btn"
                              :style="`color:black`"
                              ><v-list-item-title>
                                Academy
                              </v-list-item-title>
                            </v-btn>
                          </NuxtLink>
                        </v-list-item>
                        <v-list-item>
                          <NuxtLink
                            to="/industries"
                            class="link hover-btn"
                          >
                            <v-btn
                              variant="text"
                              size="default"
                              class="hover-btn"
                              :style="`color:black`"
                              ><v-list-item-title>
                                Industries
                              </v-list-item-title>
                            </v-btn>
                          </NuxtLink>
                        </v-list-item>
                        <v-list-item>
                          <NuxtLink
                            to="/pricing"
                            class="link hover-btn"
                          >
                            <v-btn
                              variant="text"
                              size="default"
                              class="hover-btn"
                              :style="`color:black`"
                              ><v-list-item-title>
                                Pricing
                              </v-list-item-title>
                            </v-btn>
                          </NuxtLink>
                        </v-list-item>
                        <v-list-item>
                          <NuxtLink
                            to="/features"
                            class="link hover-btn"
                          >
                            <v-btn
                              variant="text"
                              size="default"
                              class="hover-btn"
                              :style="`color:black`"
                              ><v-list-item-title>
                                Features
                              </v-list-item-title>
                            </v-btn>
                          </NuxtLink>
                        </v-list-item>
                      </v-list>
                    </v-menu>
                  </div>
                </div>
              </div>

              <div class="d-flex justify-between button ms-6">
                <v-btn
                  variant="text"
                  class="me-6 font-weight-bold text-capitalize text"
                  color="primary"
                  height="40"
                  >Log in</v-btn
                >
                <NuxtLink to="/contact" class="text-decoration-none">
                  <v-btn
                    rounded
                    size="small"
                    class="ms-2 font-weight-bold text-capitalize text"
                    height="40"
                    width="93"
                    color="primary"
                    variant="flat"
                    >sign up</v-btn
                  ></NuxtLink
                >
              </div>
            </div>
          </v-row>
        </v-container>
      </v-toolbar>
    </v-app-bar>
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
    const color5 = ref("#fff");
    const color = ref("transparent");
    const route = useRoute();
    const color1 = ref("black");
    const color6 = ref();
    let scrollPosition = ref(0);
    onMounted(() => {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 10) {
          if (route.path == "/blockchain") {
            color.value = "#10131b";
            color1.value = "#fff";
          } else {
            color.value = "#fff";
            color1.value = "black";
          }
        } else {
          if (route.path == "/blockchain" || route.path == "/jobs") {
            color1.value = "#fff";
            color.value = "transparent";
          } else {
            color.value = "transparent";
            color1.value = "black";
          }
        }
      });
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

    
    interface item {
      title: string;
    }
    const items: item[] = [
      { title: "Hybrid publishing" },
      { title: "casual publishing" },
    ];

    const state = reactive({
      drawer: false as boolean,
    });
    const { name } = useDisplay();

    const width = computed(() => {
      return name.value;
    });

    var colorpath = computed({
      get() {
        return route.path == "/blockchain";
      },
      set() {
        return;
      },
    });
    var coloricon = computed({
      get() {
        return route.path == "/blockchain" || route.path == "/jobs";
      },
      set() {
        return;
      },
    });
    var colortool = computed({
      get() {
        if (route.path == "/blockchain") {
          return (color5.value = "#212734");
        } else {
          return (color5.value = "#fff");
        }
      },
      set() {
        return;
      },
    });

    return {
      width,
      ...toRefs(state),
      items,
      color,
      console,
      color1,
      color5,
      color6,
      colorpath,
      colortool,
      coloricon,
      colorvoodoo,
      scrollPosition,
    };
  },
});
</script>
<style scoped >


.toolbar {
  width: 100% !important;
}


.button-group {
  position: fixed;
  width: 100%;
  bottom: 9%;
  padding: 16px;
  /* height: 25%; */
  z-index: 100;
}

.font-icon {
  font-size: 14px !important;
}

.main-header {
  width: 1024px;
}

.hover-btn {
  position: relative;
}

.hover-btn:hover {
  color: var(--blue-500) !important;
}

.width-link {
  display: grid;
  grid-template-columns: 1fr auto auto;
  align-items: center;
  margin-left: 48px;
  width: 100%;
  gap: 32px;
}

.link {
  text-decoration: none;
  /* color: black; */
  display: flex;
  font-family: Lato, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto,
    Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, "Segoe UI",
    "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 16px;
  font-weight: 400;
}

.nuxt {
  text-decoration: none;
  color: black;
}

.width-list {
  width: 225px;
  margin-right: 35px;
  position: relative;
  right: 30px;
}
.cruser {
  cursor: pointer;
}

.voodoo {
  display: flex;
  justify-content: center;
  align-items: center;
}
.text {
  font-family: Poppins, ui-sans-serif, system-ui, -apple-system, Segoe UI,
    Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont,
    "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 16px;
  letter-spacing: 0ch;
  text-transform: none !important;
}
.button {
  margin-right: 16px;
}

@media (max-width<768px) {
  .response {
    width: 80px !important;
    margin-left: 32px !important;
  }
}
</style>