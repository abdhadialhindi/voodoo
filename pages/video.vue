<template>
  <section class="content">
    <div class="page">
      <SpacerProject></SpacerProject>
      <TitleVideo></TitleVideo>
      <SpacerProject></SpacerProject>
      <SpacerProject></SpacerProject>
      <SpacerEnd v-if="width=='xs'"></SpacerEnd>
      <RecommendedVidoes></RecommendedVidoes>
      <SignUp></SignUp>
    </div>
  </section>
</template>
<script lang="ts" >
import { defineComponent } from "vue";
import { computed} from "vue";

import { useDisplay } from "vuetify";

export default defineComponent({
  props: {},
  setup() {
    const { name } = useDisplay();

    const width = computed(() => {
      return name.value;
    });

    return {
      width,
    };
  },
});
</script>
<style scoped>
</style>