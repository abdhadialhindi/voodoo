


<template>
  <div>
    <NuxtLayout>
      <NuxtPage></NuxtPage>
    </NuxtLayout>
  </div>

</template>
<script lang="ts" >
import { defineComponent } from 'vue';

defineComponent({
  
})
</script>
<style>
.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  filter: grayscale(1);
}
</style>
