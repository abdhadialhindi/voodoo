<template>
  <div class="mt-6">
    <article class="text-center art">
      <h1 class="title">{{ $t("Our teams") }}</h1>
      <p class="mt-6 subtitle">
        {{
          $t(
            "Our teams strive for innovation and excellence across the mobile industry"
          )
        }}
      </p>
    </article>

    <v-row justify="center" class="width">
      <v-col
        cols="12"
        lg="3"
        md="4"
        sm="4"
        xs="4"
        v-for="(item, index) in items"
        :key="index"
        class="column"
      >
        <div class="curser">
          <img
            :src="item.src"
            class="border-raduis mt-7 mb-7"
          />
          <p class="text-center  font-size">
            {{ $t(item.title) }}
          </p>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    const items = [
      {
        title: "Games",

        src: new URL(
            "@/assets/Careers/1649922796-team-blockchain-wide.jpg",
            import.meta.url
          ).href,
      },
      {
        title: "Consumer Apps",

        src: new URL(
            "@/assets/Careers/1649922796-team-blockchain-wide.jpg",
            import.meta.url
          ).href,
      },
      {
        title: "Blockchain",

        src: new URL(
            "@/assets/Careers/1649922811-team-gaming-wide.jpg",
            import.meta.url
          ).href,
      },
      {
        title: "Growth",

        src: new URL(
            "@/assets/Careers/1649922811-team-gaming-wide.jpg",
            import.meta.url
          ).href,
      },
      {
        title: "Engineering & Data",

        src: new URL(
            "@/assets/Careers/1649922814-team-growth-wide.jpg",
            import.meta.url
          ).href,
      },
      {
        title: "Strategy & Oparetions",

        src: new URL(
            "@/assets/Careers/1649922814-team-growth-wide.jpg",
            import.meta.url
          ).href,
      },
      {
        title: "Corporate",

        src: new URL(
            "@/assets/Careers/1649922814-team-growth-wide.jpg",
            import.meta.url
          ).href,
      },
    ];
    return { items };
  },
});
</script>
<style scoped>
.width {
  max-width: 1024px;
  margin: 0 auto;
}

.border-raduis {
  border-radius: 16px;
  width: 100%;
  height: 145px;
}
.font-size {
    font-family: "Poppins",ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,"Noto Sans","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    font-weight: 600;
    font-size: 20px;
    line-height: 2.4rem;
    color: var(--grey-900);
}
.curser {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer !important;
}
.curser:hover {
  transform: translateY(-2%);
  transition: 0.3s;
}
.title {
  font-family: Poppins, ui-sans-serif, system-ui, -apple-system, Segoe UI,
    Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont,
    "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 48px;
  line-height: 6.4rem;
  font-weight: 700;
  color: var(--grey-900);
}
.subtitle {
  font-family: "Lato", ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto,
    Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, "Segoe UI",
    "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 24px;
  line-height: 4rem;
  font-weight: 400;
}
@media (max-width: 768px) {
  .width {
    margin-left: 24px !important;
    margin-right: 24px !important;
  }
  .art {
    margin-left: 24px !important;
    margin-right: 24px !important;
  }
  .border-raduis {
    /* width: auto !important; */
    height: auto;
  }
}
@media (max-width: 1024px) {
  .width {
    margin-left: 40px;
    margin-right: 40px;
  }
  .title {
    font-size: 28px;
    line-height: 2rem;
  }
  .subtitle {
    font-size: 18px;
    line-height: 3.2rem;
  }
  .art {
    margin-left: 40px;
    margin-right: 40px;
  }
  .font-size {
    font-size: 18px;
    line-height: 2rem;
  }
}
</style>