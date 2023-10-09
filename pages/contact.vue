<template>
   <section >
    <IntroContact class="position"></IntroContact>
    
    <CardContact class="card-intro"></CardContact>
    <SpacerProject class="display"></SpacerProject>
    <SpacerProject class="display"></SpacerProject>
    <FormContact></FormContact>

   
   </section>
</template>
<style scoped>
.position {
    overflow: hidden;
    position: relative;
    z-index: 1;
}
.card-intro {
   position: relative;
    transform: translateY(-50%);
    z-index: 10;
    
    
   
}
.display {
    display: none;
}
@media (max-width:768px) {
.card-intro {
    transform: translateY(10%);
}
.display {
    display: block;
}
}



</style>