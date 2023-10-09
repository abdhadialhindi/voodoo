<template>
  <div class="mt-16 background pt-9">
    <article class="text-center">
      <h1 class="text-h3 font-weight-black mb-3">{{ $t("our value") }}</h1>
    </article>

    <v-row justify="center" class="width-our">
      <v-col
        cols="12"
        sm="6"
        md="4"
        lg="2"
        class="custom7cols"
        v-for="(item, index) in items"
        :key="index"
      >
        <div class="d-flex justify-center">
          <div class="icon mt-7">
            <v-icon class="margin"
              ><i :class="['fas', item.icon]" class="color"></i
            ></v-icon>
          </div>
        </div>
        <p class="text-center mt-4">{{ $t(item.desc) }}</p>
      </v-col>
    </v-row>
    <v-row justify="center" class="width-our">
      <v-btn
        rounded
        height="40"
        width="144"
        class="mt-12 mb-12 text-capitalize"
        color="primary"
      >
      <NuxtLink class="nuxt" to="/senior">
        {{ $t("see our values") }}
      </NuxtLink>
      </v-btn>
    
    </v-row>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    const items = [
      {
        icon: "fa-light fa-fire",
        desc: "Take risks",
      },
      {
        icon: "fa-light fa-bolt",
        desc: "Push for speed",
      },
      {
        icon: "fa-light fa-message",
        desc: "Share and accept feedback",
      },
      {
        icon: "fa-light fa-circle-xmark",
        desc: "Fight BS & politics",
      },
      {
        icon: "fa-solid fa-rotate-left",
        desc: "Set the highest standards",
      },
      {
        icon: "fa-light fa-crown",
        desc: "Act like an owner",
      },
      {
        icon: "fa-light fa-hammer",
        desc: "Disrupt the status quo",
      },
      {
        icon: "fa-light fa-medal",
        desc: "Put the company’s interest first",
      },
      {
        icon: "fa-light fa-rocket",
        desc: "Think big",
      },
      {
        icon: "fa-light fa-star",
        desc: "Think long-term",
      },
    ];
    return { items };
  },
});
</script>
<style scoped>
.background {
  background-color: #f4f9ff;
}

.width-our {
  margin: 0 auto;
  max-width: 1024px;
}

.custom7cols {
  width: 20%;
  max-width: 20%;
  flex-basis: 20%;
}
@media (width<1024px) {
  .custom7cols {
    width: 50%;
    max-width: 50%;
    flex-basis: 50%;
  }
}
@media (width<767px) {
  .custom7cols {
    width: 100%;
    max-width: 100%;
    flex-basis: 100%;
  }
}

.margin {
  width: 25px;
  height: 25px;
}
.nuxt {
  text-decoration: none;
}
.icon {
  background-color: rgba(0, 85, 255, 0.15);
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.color {
  color: var(--blue-500);
}
</style>