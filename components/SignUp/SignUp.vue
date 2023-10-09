<template>
   <v-container>
        <v-row justify="center">
            <article class="text-center mt-5 mb-6 ">
                <h1 class="text-uppercase title">{{title_one}} </h1>
                <p>{{desc_one }}</p>
                
            </article>
        </v-row>
        <v-row justify="center">
            <v-col cols="7">
                <v-row justify="center">
                    <v-col cols="12" md="6" lg="4" xl="4" sm="12" xs="12" v-for="(item, index) in items" :key="index">
                        <article class="mx-7">
                            <h1 class="font">{{ item.title }}</h1>
                            <p class="font-desc">{{ item.desc }}</p>
                        </article>
                    </v-col>
                    <v-row justify="center">
                        <v-col cols="12" md="12" sm="12" lg="4" xl="4" xs="4">
                            <v-btn color="primary" size="x-large" class="mt-5 mb-5 mx-7" >start now</v-btn>
                        </v-col>
                    </v-row>
                </v-row>

            </v-col>

        </v-row>
    </v-container>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    setup() {
        const title_one: string = 'sign up for free';
        const desc_one: string = 'Create your game in under 10 minutes!';
        const items = [
            {
                title: '16000+',
                desc: 'Games devloper use our platform with love'

            },
            {
                title: '38000+',
                desc: 'Games devloper use our platform with love'

            },
            {
                title: '600m+',
                desc: 'Games devloper use our platform with love'

            },
        ]
        return { title_one, desc_one, items }
    }
})
</script>
<style scoped>
.font {
    font-size: 340%;
}

.font-desc {
    font-size: 90%;
}
.title {
    font-size: 48px;
}

</style>

