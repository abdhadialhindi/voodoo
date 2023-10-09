<template>
    <div>
        <Home-section class="position"></Home-section>
        <Portfolio-section :class="width=='md' || width=='lg' || width=='xl' ? ' pb-8 ': ''" class="position"></Portfolio-section>
        <Portofolio-section1 :class="width=='md' || width=='lg' || width=='xl' ? 'pt-16 pb-8 ': 'pb-5 pt-5'" ></Portofolio-section1>
        <Portofolio-section2 :class="width=='md' || width=='lg' || width=='xl' ? 'pt-16 pb-8 ': 'pb-5 pt-5'" ></Portofolio-section2>
        <Slider-home :class="width=='md' || width=='lg' || width=='xl' ? 'pt-16 pb-8 ': 'pb-5 pt-5'" ></Slider-home>
        <Icon-home :class="width=='md' || width=='lg' || width=='xl' ? 'pt-16 pb-8 ': 'pb-5 pt-5'" ></Icon-home>
        <Text-image :class="width=='md' || width=='lg' || width=='xl' ? 'pt-16 pb-8 ': 'pb-5 pt-5'" ></Text-image>
        <Client-section :class="width=='md' || width=='lg' || width=='xl' ? 'pt-16 pb-10 mb-16': 'pb-5 pt-5'" ></Client-section>
    </div>
</template>
<script>
import { useDisplay } from 'vuetify/lib/framework.mjs';
export default {
    setup() {
    const { name } = useDisplay();

const width = computed(() => {
  return name.value;
})
 return {width}
}
}
</script>
<style  scoped>
.position {
    position: relative;
    top: -64px;
}
</style>