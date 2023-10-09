<template>
    <section>
        <h1 class="title">Brand that trust us</h1>
        <v-row justify="center" class="wrapper">
           <v-col cols="12" lg="4" xl="4" md="3" sm="6" xs="12" >
                <h1 class="title-1">
                    invision
                </h1>
                <h1 class="title-1">
                    mongoDB
                </h1 >
                <h1 class="title-1">
                    Base
                </h1>
                <h1 class="title-1">
                    vidvard
                </h1>
                <h1 class="title-1">
                    rabid
                </h1>
           </v-col>
           <v-col cols="12" lg="4" xl="4" md="3" sm="6" xs="12" class="text-center">
                <h1 class="title-1">
                    invision
                </h1>
                <h1 class="title-1">
                    mongoDB
                </h1 >
                <h1 class="title-1">
                    Base
                </h1>
                <h1 class="title-1">
                    vidvard
                </h1>
                <h1 class="title-1">
                    rabid
                </h1>
           </v-col>
           <v-col cols="12" lg="4" xl="4" md="3" sm="6" xs="12" class="text-center" >
                <h1 class="title-1">
                    invision
                </h1>
                <h1 class="title-1">
                    mongoDB
                </h1 >
                <h1 class="title-1">
                    Base
                </h1>
                <h1 class="title-1">
                    vidvard
                </h1>
                <h1 class="title-1">
                    rabid
                </h1>
           </v-col>
        </v-row>
    </section>
</template>
<style scoped>
.wrapper {
    max-width: 1024px;
    margin: 0 auto;
    
    
}
.title {
    color: var(--blue-500);
    text-align: center;
    font-size: 32px;
    font-weight: 500;
}
.title-1 {
    font-weight: 600;
    font-size: 24px;
    line-height: 2.4rem;
    margin-bottom: 24px;
}
@media (max-width:768px) {
    
}
@media (max-width:1024px) {
    .wrapper {
        grid-gap: 36px;
        gap: 36px;
    }
}
@media (max-width:1280px) {
    .wrapper {
max-width: 928px;

    }
}
</style>