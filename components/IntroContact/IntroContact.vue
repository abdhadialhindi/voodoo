<template>
    <div class="background">
        <v-container>
            <v-row justify="center">
                <div class="width">
                    <v-row justify="start">
                        <v-col cols="12" md="5" lg="5" xl='5'>
                        <v-row justify="center" align="end">
                            <article class="font-weight-bold mt-16 pt-16 font-size ">
                                <p>
                                  Get In Touch  
                                </p>
                                <p class="font">fiels intro touche</p>
                            </article>
                        </v-row>
                           
                        </v-col>
                    </v-row>
                </div>
            </v-row>
        </v-container>
    </div>
</template>
<style scoped>
.width {
    width: 1024px
}

.background {
    width: 100%;
    background-image: url("@/assets/feature/features1.jpg");
    background-size: 100% 100%;
    
    height: 380px;
    /* position: relative; */
    /* botttopm: 64px; */
}
.font-size{
font-size: 36px;
word-wrap: break-word;
color: white;
}
.font {
    font-size: 16px;
    font-weight: 200;
}
@media (width<767px) {
    .font-size{
        text-align: center;
    }
    .justify{
        justify-content: center !important;
    }
    .margin{
        margin-left: 44px !important;
    }
}
</style>