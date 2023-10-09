<template>
    <v-container class="mt-16">
        <v-row justify="center">

            <div class="width-list px-8 mb-10">
                <v-row justify="center">
                    <v-col cols="12" md="6" lg="4" xl="4" v-for="(list, index) in lists" :key="index" class="mb-6">
                        <div class="width d-flex justify-center align-center mb-2"
                            :style="{ 'background-image': 'url(' + list.Image + ')' }">
                            <article class="text-center text-white">
                                <h1>{{ $t(list.title) }}</h1>
                                <p>{{ $t(list.sub_title) }}</p>
                            </article>
                        </div>
                        <p>{{ $t(list.desc) }}</p>
                        
                    </v-col>
                </v-row>
            </div>

        </v-row>
    </v-container>
</template>
<script lang="ts">

import { defineComponent } from 'vue';
export default defineComponent({
    setup() {
        const lists = [
            {
                title: 'Event',
                sub_title: 'schools - digits - infuluencer',
                Image: new URL('@/assets/industries/event.jpg', import.meta.url).href,
                desc: 'No events coming',
            },
            {
                title: 'Event',
                sub_title: 'schools - digits - infuluencer',
                Image: new URL('@/assets/industries/event.jpg', import.meta.url).href,
                desc: 'No events coming',
            },
            {
                title: 'Event',
                sub_title: 'schools - digits - infuluencer',
                Image: new URL('@/assets/industries/event.jpg', import.meta.url).href,
                desc: 'No events coming',
            },
            {
                title: 'Event',
                sub_title: 'schools - digits - infuluencer',
                Image: new URL('@/assets/industries/event.jpg', import.meta.url).href,
                desc: 'No events coming',
            },
            {
                title: 'Event',
                sub_title: 'schools - digits - infuluencer',
                Image: new URL('@/assets/industries/event.jpg', import.meta.url).href,
                desc: 'No events coming',
            },
            {
                title: 'Event',
                sub_title: 'schools - digits - infuluencer',
                Image: new URL('@/assets/industries/event.jpg', import.meta.url).href,
                desc: 'No events coming',
            },
        ]
        const { locale } = useI18n()
        return { lists }
    }
})


</script>
<style scoped>
.width-list {
    width: 1024px;
}

.width {
    width: 100%;
    height: 250px;
    background-size: 100% 100%;
}
</style>