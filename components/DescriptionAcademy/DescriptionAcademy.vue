<template>
  <section class="section-title light">
    <div class="default-block wrapper">
      <div class="accordion">
        <div
          class="item"
          :class="{ isactive: drawer[0] }"
          @click="drawer[0] = !drawer[0]"
        >
          <div class="title">
            <b
              >I already have experience in hyper-casual; can I still
              participate in the program? </b
            ><svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              aria-label="chevron-down"
              role="presentation"
              class="base-icon"
            >
              <g>
                <g>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.46967 9.46968C7.76256 9.17678 8.23744 9.17678 8.53033 9.46968L12 12.9393L15.4697 9.46968C15.7626 9.17678 16.2374 9.17678 16.5303 9.46968C16.8232 9.76257 16.8232 10.2374 16.5303 10.5303L12.5303 14.5303C12.3897 14.671 12.1989 14.75 12 14.75C11.8011 14.75 11.6103 14.671 11.4697 14.5303L7.46967 10.5303C7.17678 10.2374 7.17678 9.76257 7.46967 9.46968Z"
                  ></path>
                </g>
              </g>
            </svg>
          </div>
          <div class="description" >
            <div class="rich-text paragraph-1">
              <p >
                Our Voodoo Academy program is reserved for developers or
                students with limited previous experience in hyper-casual. If
                you started recently in the industry, you are welcome to join.
                If you are already a seasoned hyper-casual, note that all
                studios working with Voodoo and registered to our Publishing
                Platform can access all Voodoo Academy online training content.
              </p>
            </div>
          </div>
        </div>
         <div
          class="item"
          :class="{ isactive: drawer[1] }"
          @click="drawer[1] = !drawer[1]"
        >
          <div class="title">
            <b
              >What are the criteria for participating in the Voodoo Academy
              program? </b
            ><svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              aria-label="chevron-down"
              role="presentation"
              class="base-icon"
            >
              <g>
                <g>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.46967 9.46968C7.76256 9.17678 8.23744 9.17678 8.53033 9.46968L12 12.9393L15.4697 9.46968C15.7626 9.17678 16.2374 9.17678 16.5303 9.46968C16.8232 9.76257 16.8232 10.2374 16.5303 10.5303L12.5303 14.5303C12.3897 14.671 12.1989 14.75 12 14.75C11.8011 14.75 11.6103 14.671 11.4697 14.5303L7.46967 10.5303C7.17678 10.2374 7.17678 9.76257 7.46967 9.46968Z"
                  ></path>
                </g>
              </g>
            </svg>
          </div>
          <div class="description">
            <div class="rich-text paragraph-1">
              <p>
                You need to be new in hyper-casual gaming, thus never having
                published (launched) a mobile game with Voodoo or another
                publisher, having started recently to build and test games.
              </p>
            </div>
          </div>
        </div>
         <div
          class="item"
          :class="{ isactive: drawer[2] }"
          @click="drawer[2] = !drawer[2]"
        >
          <div class="title">
            <b>How can I get financial rewards?</b
            ><svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              aria-label="chevron-down"
              role="presentation"
              class="base-icon"
            >
              <g>
                <g>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.46967 9.46968C7.76256 9.17678 8.23744 9.17678 8.53033 9.46968L12 12.9393L15.4697 9.46968C15.7626 9.17678 16.2374 9.17678 16.5303 9.46968C16.8232 9.76257 16.8232 10.2374 16.5303 10.5303L12.5303 14.5303C12.3897 14.671 12.1989 14.75 12 14.75C11.8011 14.75 11.6103 14.671 11.4697 14.5303L7.46967 10.5303C7.17678 10.2374 7.17678 9.76257 7.46967 9.46968Z"
                  ></path>
                </g>
              </g>
            </svg>
          </div>
          <div class="description">
            <div class="rich-text paragraph-1">
              <p>
                To get the financial rewards, you need to start prototyping on
                our publishing platform. The terms &amp; conditions of the
                rewards will be detailed in the contract you will sign before
                testing prototypes. <br /><br />You can get:
              </p>
              <ul>
                <li>
                  <p>
                    $300 for your first 3 prototypes tested: pick up $150 for
                    your first prototype, and $150 for the third
                  </p>
                </li>
                <li>
                  <p>
                    $1,000 for a high-potential prototype as defined on our
                    Publishing Platform. Example: $35c CPI, 25% D1 retention,
                    10-minute playtime
                  </p>
                </li>
                <li>
                  <p>
                    $200,000 minimum guaranteed for a game launched and
                    confirmed
                  </p>
                </li>
                <li>
                  <p>
                    Dedicated weekly coaching by a Publishing Manager and
                    recurring financial support for creating consistently strong
                    prototypes
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
         <div
          class="item"
          :class="{ isactive: drawer[3] }"
          @click="drawer[3] = !drawer[3]"
        >
          <div class="title">
            <b>How long does the Voodoo Academy program take to complete?</b
            ><svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              aria-label="chevron-down"
              role="presentation"
              class="base-icon"
            >
              <g>
                <g>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.46967 9.46968C7.76256 9.17678 8.23744 9.17678 8.53033 9.46968L12 12.9393L15.4697 9.46968C15.7626 9.17678 16.2374 9.17678 16.5303 9.46968C16.8232 9.76257 16.8232 10.2374 16.5303 10.5303L12.5303 14.5303C12.3897 14.671 12.1989 14.75 12 14.75C11.8011 14.75 11.6103 14.671 11.4697 14.5303L7.46967 10.5303C7.17678 10.2374 7.17678 9.76257 7.46967 9.46968Z"
                  ></path>
                </g>
              </g>
            </svg>
          </div>
          <div class="description">
            <div class="rich-text paragraph-1">
              <p>
                The Voodoo Academy program is designed to last up to one year,
                with regularly uploaded training courses, multiple interactions
                with the Voodoo teams, and dedicated sessions with trainers.
                After the program, you will be able to keep working with the
                Voodoo teams as an official game-making studio.
              </p>
            </div>
          </div>
        </div>
         <div
          class="item"
          :class="{ isactive: drawer[4] }"
          @click="drawer[4] = !drawer[4]"
        >
          <div class="title">
            <b>Are all courses in English? </b
            ><svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              aria-label="chevron-down"
              role="presentation"
              class="base-icon"
            >
              <g>
                <g>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.46967 9.46968C7.76256 9.17678 8.23744 9.17678 8.53033 9.46968L12 12.9393L15.4697 9.46968C15.7626 9.17678 16.2374 9.17678 16.5303 9.46968C16.8232 9.76257 16.8232 10.2374 16.5303 10.5303L12.5303 14.5303C12.3897 14.671 12.1989 14.75 12 14.75C11.8011 14.75 11.6103 14.671 11.4697 14.5303L7.46967 10.5303C7.17678 10.2374 7.17678 9.76257 7.46967 9.46968Z"
                  ></path>
                </g>
              </g>
            </svg>
          </div>
          <div class="description">
            <div class="rich-text paragraph-1">
              <p>
                All online training content on the Voodoo Academy is in English,
                but participants will be able to receive coaching in English,
                French and Turkish from the launch. More languages will be added
                to both the online training platform and coaching sessions in
                due course.
              </p>
            </div>
          </div>
        </div>
         <div
          class="item"
          :class="{ isactive: drawer[5] }"
          @click="drawer[5] = !drawer[5]"
        >
          <div class="title">
            <b>Can we test prototypes on both iOS and Android? </b
            ><svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              aria-label="chevron-down"
              role="presentation"
              class="base-icon"
            >
              <g>
                <g>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.46967 9.46968C7.76256 9.17678 8.23744 9.17678 8.53033 9.46968L12 12.9393L15.4697 9.46968C15.7626 9.17678 16.2374 9.17678 16.5303 9.46968C16.8232 9.76257 16.8232 10.2374 16.5303 10.5303L12.5303 14.5303C12.3897 14.671 12.1989 14.75 12 14.75C11.8011 14.75 11.6103 14.671 11.4697 14.5303L7.46967 10.5303C7.17678 10.2374 7.17678 9.76257 7.46967 9.46968Z"
                  ></path>
                </g>
              </g>
            </svg>
          </div>
          <div class="description">
            <div class="rich-text paragraph-1">
              <p>
                The Academy includes training for developing games on both iOS
                and Android, and participants will be able to test prototypes on
                both OS.
              </p>
            </div>
          </div>
        </div>
         <div
          class="item"
          :class="{ isactive: drawer[6] }"
          @click="drawer[6] = !drawer[6]"
        >
          <div class="title">
            <b
              >Will I learn how to code on Unity, on the Voodoo Academy
              platform?</b
            ><svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              aria-label="chevron-down"
              role="presentation"
              class="base-icon"
            >
              <g>
                <g>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.46967 9.46968C7.76256 9.17678 8.23744 9.17678 8.53033 9.46968L12 12.9393L15.4697 9.46968C15.7626 9.17678 16.2374 9.17678 16.5303 9.46968C16.8232 9.76257 16.8232 10.2374 16.5303 10.5303L12.5303 14.5303C12.3897 14.671 12.1989 14.75 12 14.75C11.8011 14.75 11.6103 14.671 11.4697 14.5303L7.46967 10.5303C7.17678 10.2374 7.17678 9.76257 7.46967 9.46968Z"
                  ></path>
                </g>
              </g>
            </svg>
          </div>
          <div class="description">
            <div class="rich-text paragraph-1">
              <p>
                You won't, the program is targeted at people who already have a
                good knowledge of Unity. However, we will share links of
                external sources &amp; tips to help you reinforce your knowledge
                of Unity.
              </p>
            </div>
          </div>
        </div>
         <div
          class="item"
          :class="{ isactive: drawer[7] }"
          @click="drawer[7] = !drawer[7]"
        >
          <div class="title">
            <b
              >Will I be able to discuss my prototypes with Voodoo experts
              during the program?</b
            ><svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              aria-label="chevron-down"
              role="presentation"
              class="base-icon"
            >
              <g>
                <g>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.46967 9.46968C7.76256 9.17678 8.23744 9.17678 8.53033 9.46968L12 12.9393L15.4697 9.46968C15.7626 9.17678 16.2374 9.17678 16.5303 9.46968C16.8232 9.76257 16.8232 10.2374 16.5303 10.5303L12.5303 14.5303C12.3897 14.671 12.1989 14.75 12 14.75C11.8011 14.75 11.6103 14.671 11.4697 14.5303L7.46967 10.5303C7.17678 10.2374 7.17678 9.76257 7.46967 9.46968Z"
                  ></path>
                </g>
              </g>
            </svg>
          </div>
          <div class="description">
            <div class="rich-text paragraph-1">
              <p>
                Of course, the objective of the program is to help you kick off
                in hyper-casual and reach the right level of execution. You will
                have the opportunity to interact with our experts in multiple
                formats, including one-on-one sessions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" >
import { defineComponent, reactive, toRefs } from "vue";
import { computed, ref, onMounted } from "vue";
import { routerKey, RouterLink, RouterView } from "vue-router";
import { useDisplay } from "vuetify";

export default defineComponent({
  props: {},
  setup() {
    

    const state = reactive({
      drawer: [false,false,false,false,false,false,false,false] ,
    });


   

    return {
    ...toRefs(state)
    };
  },
});
</script>
<style scoped>
.section-title {
  background-color: var(--grey-000);
}
.wrapper {
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
.accordion {
  border: none;
  display: flex;
  flex-direction: column;
  grid-gap: 16px;
  gap: 16px;
  width: 66.6666666667%;
}
.item {
  border-radius: 16px;
  border-radius: var(--radius-16);
  padding: 16px;
  cursor: pointer;
  font-family: Lato, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto,
    Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, "Segoe UI",
    "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 18px;
  line-height: 1.75rem;
  font-weight: 400;
}
.title {
  display: flex;
  align-items: stretch;
  color: #10131b;
  color: var(--grey-900);
}
.section-title .wrapper .accordion .item b,
.section-title .wrapper .accordion .item strong {
  font-weight: 700;
}
.base-icon {
  display: inline-block;
  vertical-align: baseline;
  fill: currentColor;
  flex-shrink: 0;
}
.description {
  color: #353c4c;
  color: var(--grey-700);
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
}
.rich-text {
  color: var(--grey-900);
  font-family: Lato, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto,
    Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, "Segoe UI",
    "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 18px;
  line-height: 1.6rem;
  font-weight: 400;
}
.rich-text p:last-child {
  margin-bottom: 0;
}
.isactive {
  background: var(--blue-025);
}
.section-title .wrapper .accordion .item.isactive .title {
  color: #05f;
  color: var(--blue-500);
}
.section-title .wrapper .accordion .item.isactive .description {
    max-height:250px ;
    margin-top: 16px;
}
@media (max-width: 768px) {
  .wrapper {
    margin-left: 24px !important;
    margin-right: 24px !important;
  }
}
@media (max-width: 1024px) {
  .wrapper {
    margin-left: 40px;
    margin-right: 40px;
  }
  .accordion {
    width: 100% !important;
  }
  .rich-text {
    width: 100%;
  }
}
@media (max-width: 1280px) {
  .wrapper {
    max-width: 928px;
  }
  .accordion {
    width: 83.3333333333%;
  }
}
</style>