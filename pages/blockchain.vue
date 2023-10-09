<template>
    <div class="back">
        <IntroBlock class=" pb-16"></IntroBlock>
        <ImageDark class="pt-16 pb-16 position"></ImageDark>
        <ImageDark2 class=""></ImageDark2>
        <TitleBlock :class="width=='md' || width=='lg' || width=='xl' ? 'pt-16 pb-16': 'pb-12'"></TitleBlock>
        <ScrollBlock v-if="width=='sm' || width=='md' ||width=='lg' ||width=='xl'"></ScrollBlock>
        <ScrollBlock2 v-else class="mt-9 mb-16"></ScrollBlock2>
        <ImageBlock class="mt-16 mb-9"></ImageBlock>
        <LogoBlock class="pt-10"></LogoBlock>
    </div>
</template>
<script lang="ts" >
import { defineComponent, reactive, toRefs } from 'vue'
import { computed, ref, onMounted } from 'vue'
import { routerKey, RouterLink, RouterView } from 'vue-router';
import { useDisplay } from 'vuetify'

export default defineComponent({
    props: {


    },
    setup() {

        const color = ref('transparent');
        const route = useRoute();
        const color1 = ref("black")

        onMounted(() => {

            window.addEventListener('scroll', () => {

                if (window.scrollY > 10) { // if user has scrolled more than 100px from top of page, change color of v-app-bar  
                    if (route.path == '/blockchain') {
                        color.value = 'black'
                        color1.value = "#fff"
                    }
                    else {
                        color.value = '#fff'; // set new color for v-app-bar
                        color1.value = "black"
                    }
                }

                // else if (route.path == '/blockchain') {
                //     color.value = 'black'
                //     color1.value = "#fff"
                // }
                else { // otherwise, reset back to original color  

                    if (route.path == '/blockchain') {
                        color1.value = "#fff"
                        color.value = 'transparent';
                    }
                    else {
                        color.value = 'transparent'; // reset back to original color  
                        color1.value = "black"
                    }
                }

            });

        });


        // document.addEventListener("scroll", function () {
        //     let bodytopPosition = document.body.getBoundingClientRect().top;
        //     if (bodytopPosition < 64) {
        //         showbackgound.value = 'white';
        //     } else {
        //         showbackgound.value = 'red';
        //     }
        // })
        interface item {
            title: string
        }
        const items: item[] = [
            { title: 'Hybrid publishing' },
            { title: 'casual publishing' },
        ];

        const state = reactive({
            drawer: false as boolean,
        })
        const { name } = useDisplay()

        const width = computed(() => {
            return name.value

        })
        function color2() {
            if (route.path == '/blockchain') {
                return color1.value = "#fff"
            }
            else {
                return color1.value = 'black'
            }

        }

        return {
            width, ...toRefs(state), items, color, console, color1
        }
    }


})
</script>
<style scoped>
.position{
    position: relative;
    top: -64px;
}
.back{
    background-color: var(--grey-900) !important;
    width: 100%;
}
</style>