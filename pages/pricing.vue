<template>
  <section class="content">
    <div class="page">
        <IntroPricing></IntroPricing>
        <SpacerProject></SpacerProject>
        <CardPricing></CardPricing>
        <SpacerProject></SpacerProject>
        <SignUp></SignUp>
        <SpacerEnd></SpacerEnd>
    </div>
  </section>
</template>
<style scoped>
.content {
  display: flex;
  flex-direction: row;
  flex: 1;
  min-height: 100vh;
  width: 100vw;
  position: relative;
 
}
.page {
  width: 100%;
}
</style>