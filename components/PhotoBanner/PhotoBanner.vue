<template>
    <div class="background">
        <v-container>
            <v-row justify="center">
                <div class="width">
                    <v-row justify="start">
                        <v-col cols="12" md="5" lg="5" xl='5'>
                        <v-row>
                            <article class="font-weight-bold mt-8 font-size">
                                <p>
                                  {{ $t("Nucc nonummy metus . vsteblum volutbat pretum libro.") }}  
                                </p>
                            </article>
                        </v-row>
                            <v-row justify="start" class="justify">
                                <v-col cols="11" class="margin">
                                <v-btn color="primary" class="ms-8 ">
                                    {{$t("see features")}}

                                </v-btn>
                            </v-col>
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