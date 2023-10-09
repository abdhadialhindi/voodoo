


<template>
  <v-footer
    class="footer-light pt-16 pb-16"
    :style="`background-color: ${myVal[0]}`"
  >
    <div class="default-block wrapper">
      <div class="aside">
        <div class="logo">
          <a class="exact-active-link active-link" aria-current="page"
            ><svg
              width="100"
              height="22"
              viewBox="0 0 120 24"
              xmlns="http://www.w3.org/2000/svg"
              class="voodoo-logo light"
              :style="`color: ${myVal[2]}`"
            >
              <path
                fill="currentColor"
                d="M20.3897 15.0962C20.3897 10.2266 24.5791 6.22339 29.7038 6.22339C34.8285 6.22339 39.0803 10.2266 39.0803 15.0962C39.0803 20.0277 34.8285 24 29.7038 24C24.5791 24 20.3897 20.0277 20.3897 15.0962ZM24.9844 15.0962C24.9844 17.9198 27.0148 19.9659 29.7038 19.9659C32.3617 19.9659 34.4232 17.8579 34.4232 15.0962C34.4232 12.3655 32.3617 10.2885 29.7038 10.2885C27.0772 10.2885 24.9844 12.3965 24.9844 15.0962Z"
              ></path>
              <path
                fill="currentColor"
                d="M40.5534 15.0962C40.5534 10.2266 44.7428 6.22339 49.8675 6.22339C54.9922 6.22339 59.244 10.2266 59.244 15.0962C59.244 20.0277 54.9922 24 49.8675 24C44.7428 24 40.5534 20.0277 40.5534 15.0962ZM45.1481 15.0962C45.1481 17.9198 47.1785 19.9659 49.8675 19.9659C52.5253 19.9659 54.5869 17.8579 54.5869 15.0962C54.5869 12.3655 52.5253 10.2885 49.8675 10.2885C47.2448 10.2885 45.1481 12.3965 45.1481 15.0962Z"
              ></path>
              <path
                fill="currentColor"
                d="M81.1418 15.0962C81.1418 10.2266 85.3312 6.22339 90.456 6.22339C95.5807 6.22339 99.8324 10.2266 99.8324 15.0962C99.8324 20.0277 95.5807 24 90.456 24C85.3312 24 81.1418 20.0277 81.1418 15.0962ZM85.7365 15.0962C85.7365 17.9198 87.7669 19.9659 90.456 19.9659C93.1138 19.9659 95.1754 17.8579 95.1754 15.0962C95.1754 12.3655 93.1138 10.2885 90.456 10.2885C87.8293 10.2885 85.7365 12.3965 85.7365 15.0962Z"
              ></path>
              <path
                fill="currentColor"
                d="M101.309 15.0962C101.309 10.2266 105.499 6.22339 110.624 6.22339C115.748 6.22339 120 10.2266 120 15.0962C120 20.0277 115.748 24 110.624 24C105.495 23.9962 101.309 20.0277 101.309 15.0962ZM105.904 15.0962C105.904 17.9198 107.935 19.9659 110.624 19.9659C113.281 19.9659 115.343 17.8579 115.343 15.0962C115.343 12.3655 113.281 10.2885 110.624 10.2885C107.997 10.2885 105.904 12.3965 105.904 15.0962Z"
              ></path>
              <path
                fill="currentColor"
                d="M11.8005 16.5621L4.92985 0H0L9.78176 23.5977H13.827L23.6906 0H18.7217L11.8005 16.5621Z"
              ></path>
              <path
                fill="currentColor"
                d="M74.8363 0.715576L74.848 7.47658C73.445 6.68367 71.8121 6.22339 70.0818 6.22339C64.9571 6.22339 60.7677 10.2266 60.7677 15.0962C60.7677 20.0277 64.9571 24 70.0818 24C71.816 24 73.445 23.5436 74.848 22.7546V23.5939H79.4739L79.4583 0.715576H74.8363ZM70.0818 19.9659C67.3928 19.9659 65.3624 17.9198 65.3624 15.0962C65.3624 12.3965 67.4552 10.2885 70.0818 10.2885C72.7397 10.2885 74.8012 12.3655 74.8012 15.0962C74.8012 17.854 72.7358 19.9659 70.0818 19.9659Z"
              ></path></svg
          ></a>
        </div>
        <div class="social">
          <a target="_blank" rel="noopener noreferrer"
            ><svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              class="social-icon light"
            >
              <rect
                width="32"
                height="32"
                rx="8"
                :style="`fill: ${myVal[3]}`"
              ></rect>
              <path
                :style="`fill: ${myVal[2]}`"
                d="M22 9H9.96875C9.4375 9 9 9.46875 9 10.0312V22C9 22.5625 9.4375 23 9.96875 23H22C22.5312 23 23 22.5625 23 22V10.0312C23 9.46875 22.5312 9 22 9ZM13.2188 21H11.1562V14.3438H13.2188V21ZM12.1875 13.4062C11.5 13.4062 10.9688 12.875 10.9688 12.2188C10.9688 11.5625 11.5 11 12.1875 11C12.8438 11 13.375 11.5625 13.375 12.2188C13.375 12.875 12.8438 13.4062 12.1875 13.4062ZM21 21H18.9062V17.75C18.9062 17 18.9062 16 17.8438 16C16.75 16 16.5938 16.8438 16.5938 17.7188V21H14.5312V14.3438H16.5V15.25H16.5312C16.8125 14.7188 17.5 14.1562 18.5 14.1562C20.5938 14.1562 21 15.5625 21 17.3438V21Z"
              ></path></svg></a
          ><a target="_blank" rel="noopener noreferrer"
            ><svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              class="social-icon light"
            >
              <rect
                width="32"
                height="32"
                rx="8"
                :style="`fill: ${myVal[3]}`"
              ></rect>
              <path
                :style="`fill: ${myVal[2]}`"
                d="M16 12.4054C14.0147 12.4054 12.4057 14.0147 12.4057 15.9997C12.4057 17.9847 14.015 19.5941 16 19.5941C17.985 19.5941 19.5943 17.9847 19.5943 15.9997C19.5943 14.0147 17.985 12.4054 16 12.4054ZM16 18.3331C14.7113 18.3331 13.6669 17.2884 13.6669 16C13.6669 14.7116 14.7116 13.6669 16 13.6669C17.2884 13.6669 18.3331 14.7116 18.3331 16C18.3331 17.2884 17.2884 18.3331 16 18.3331Z"
              ></path>
              <path
                d="M20.5765 12.2631C20.5765 12.727 20.2005 13.1031 19.7366 13.1031C19.2727 13.1031 18.8966 12.727 18.8966 12.2631C18.8966 11.7992 19.2727 11.4232 19.7366 11.4232C20.2005 11.4232 20.5765 11.7992 20.5765 12.2631Z"
              ></path>
              <path
                :style="`fill: ${myVal[2]}`"
                d="M16 9C14.0989 9 13.8605 9.00806 13.1139 9.04223C12.369 9.07613 11.86 9.1945 11.4148 9.3676C10.9544 9.54654 10.564 9.78577 10.175 10.175C9.78577 10.5643 9.54654 10.9544 9.3676 11.4148C9.1945 11.86 9.07613 12.369 9.04223 13.1139C9.00806 13.8605 9 14.0989 9 16C9 17.9011 9.00806 18.1395 9.04223 18.8861C9.07613 19.631 9.1945 20.14 9.3676 20.5852C9.54654 21.0456 9.78577 21.436 10.175 21.825C10.5643 22.2142 10.9544 22.4535 11.4148 22.6324C11.86 22.8055 12.369 22.9239 13.1139 22.9578C13.8605 22.9919 14.0989 23 16 23C17.9011 23 18.1395 22.9919 18.8861 22.9578C19.631 22.9239 20.14 22.8055 20.5852 22.6324C21.0456 22.4535 21.436 22.2142 21.825 21.825C22.2142 21.4357 22.4535 21.0456 22.6324 20.5852C22.8055 20.14 22.9239 19.631 22.9578 18.8861C22.9919 18.1395 23 17.9011 23 16C23 14.0989 22.9919 13.8605 22.9578 13.1139C22.9239 12.369 22.8055 11.86 22.6324 11.4148C22.4535 10.9544 22.2142 10.564 21.825 10.175C21.4357 9.78577 21.0456 9.54654 20.5852 9.3676C20.14 9.1945 19.631 9.07613 18.8861 9.04223C18.1395 9.00806 17.9011 9 16 9ZM16 10.2612C17.8691 10.2612 18.0903 10.2684 18.8286 10.302C19.511 10.3331 19.8816 10.4471 20.1284 10.5429C20.4551 10.6699 20.6882 10.8216 20.9333 11.0664C21.1784 11.3115 21.3301 11.5446 21.4568 11.8714C21.5527 12.1181 21.6666 12.4887 21.6977 13.1712C21.7313 13.9091 21.7385 14.1306 21.7385 15.9997C21.7385 17.8689 21.7313 18.09 21.6977 18.8283C21.6666 19.5107 21.5527 19.8814 21.4568 20.1281C21.3298 20.4548 21.1781 20.688 20.9333 20.933C20.6882 21.1781 20.4551 21.3298 20.1284 21.4565C19.8816 21.5524 19.511 21.6663 18.8286 21.6974C18.0906 21.731 17.8691 21.7383 16 21.7383C14.1309 21.7383 13.9094 21.731 13.1714 21.6974C12.489 21.6663 12.1184 21.5524 11.8716 21.4565C11.5449 21.3295 11.3118 21.1778 11.0667 20.933C10.8216 20.688 10.6699 20.4548 10.5432 20.1281C10.4473 19.8814 10.3334 19.5107 10.3023 18.8283C10.2687 18.0903 10.2615 17.8689 10.2615 15.9997C10.2615 14.1306 10.2687 13.9094 10.3023 13.1712C10.3334 12.4887 10.4473 12.1181 10.5432 11.8714C10.6702 11.5446 10.8219 11.3115 11.0667 11.0664C11.3115 10.8213 11.5449 10.6696 11.8716 10.5429C12.1184 10.4471 12.489 10.3331 13.1714 10.302C13.9094 10.2684 14.1309 10.2612 16 10.2612Z"
              ></path></svg></a
          ><a target="_blank" rel="noopener noreferrer"
            ><svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              class="social-icon light"
            >
              <rect
                width="32"
                height="32"
                rx="8"
                :style="`fill: ${myVal[3]}`"
              ></rect>
              <path
                :style="`fill: ${myVal[2]}`"
                d="M24.9942 10.7513C24.9324 10.9665 24.7648 11.1153 24.615 11.27C24.2339 11.6638 23.8262 12.0328 23.3804 12.3596C23.2442 12.4595 23.206 12.5675 23.2045 12.7264C23.1731 16.6765 21.369 19.6839 17.7882 21.6933C15.8338 22.7898 13.6882 23.163 11.4266 22.9368C9.89969 22.7839 8.47955 22.3357 7.1594 21.5967C7.10579 21.567 7.05507 21.5326 7 21.4772C8.98529 21.6645 10.7378 21.133 12.3559 19.9628C11.8985 19.8996 11.5 19.8373 11.1198 19.6986C10.1093 19.3291 9.41617 18.6593 9.01186 17.7139C8.91477 17.4864 8.92202 17.4887 9.16885 17.5106C9.60986 17.55 10.0494 17.5528 10.547 17.4168C8.63509 16.9237 7.65983 15.7846 7.60815 13.9144C8.12452 14.1269 8.61142 14.3393 9.16064 14.3191C9.16257 14.3269 9.1645 14.3352 9.16643 14.3429C9.16788 14.3393 9.17175 14.3329 9.1703 14.332C9.16643 14.3278 9.16015 14.326 9.15484 14.3228C8.9452 14.0541 8.66745 13.8439 8.45443 13.5761C7.77093 12.7177 7.45164 11.7773 7.71393 10.7037C7.80088 10.3475 7.94241 10.0087 8.11775 9.76011C8.39743 9.99452 8.68774 10.223 8.96018 10.4688C10.5479 11.9023 12.4356 12.7749 14.576 13.1796C14.9233 13.2451 15.2725 13.2941 15.6247 13.3298C15.7879 13.3463 15.8338 13.311 15.8058 13.1471C15.501 11.3877 16.5193 9.74638 18.3031 9.19607C19.6837 8.77029 20.9391 9.0427 22.0211 9.96705C22.1592 10.0852 22.2674 10.1181 22.4428 10.0623C23.0761 9.86175 23.7011 9.64383 24.3035 9.37005C24.374 9.338 24.4382 9.28626 24.5585 9.29496C24.3228 10.1392 23.6832 10.673 22.9751 11.2091C23.5939 11.1432 24.1402 10.9976 24.6802 10.8246C24.7831 10.7916 24.8797 10.7202 25 10.7545L24.9942 10.7508V10.7513Z"
              ></path></svg></a
          ><a target="_blank" rel="noopener noreferrer"
            ><svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              class="social-icon light"
            >
              <rect
                width="32"
                height="32"
                rx="8"
                :style="`fill: ${myVal[3]}`"
              ></rect>
              <path
                :style="`fill: ${myVal[2]}`"
                d="M19.7188 17L20.1562 14.125H17.375V12.25C17.375 11.4375 17.75 10.6875 19 10.6875H20.2812V8.21875C20.2812 8.21875 19.125 8 18.0312 8C15.75 8 14.25 9.40625 14.25 11.9062V14.125H11.6875V17H14.25V24H17.375V17H19.7188Z"
              ></path></svg></a
          ><a target="_blank" rel="noopener noreferrer"
            ><svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              class="social-icon light"
            >
              <rect
                width="32"
                height="32"
                rx="8"
                :style="`fill: ${myVal[3]}`"
              ></rect>
              <path
                :style="`fill: ${myVal[2]}`"
                d="M9 9V23H23V9H9ZM20.625 12.3438L19.875 13.0625C19.8125 13.0938 19.7812 13.1875 19.7812 13.25V18.5625C19.7812 18.625 19.8125 18.7188 19.875 18.75L20.5938 19.4688V19.625H16.9062V19.4688L17.6875 18.75C17.75 18.6562 17.75 18.6562 17.75 18.5312V14.25L15.625 19.625H15.3438L12.9062 14.25V17.8438C12.875 18 12.9375 18.1562 13.0312 18.25L14.0312 19.4688V19.625H11.2188V19.4688L12.1875 18.25C12.3125 18.1562 12.3438 18 12.3125 17.8438V13.6875C12.3438 13.5938 12.2812 13.4688 12.2188 13.375L11.3438 12.3438V12.1562H14.0625L16.1562 16.7812L18.0312 12.1875H20.625V12.3438Z"
              ></path></svg></a
          ><a target="_blank" rel="noopener noreferrer"
            ><svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              class="social-icon light"
            >
              <rect
                width="32"
                height="32"
                rx="8"
                :style="`fill: ${myVal[3]}`"
              ></rect>
              <path
                :style="`fill: ${myVal[2]}`"
                d="M19.9375 16.4062C19.9375 15.25 20.4688 14.4062 21.5 13.75C20.9062 12.9062 20.0312 12.4688 18.875 12.375C17.75 12.2812 16.5312 13 16.0938 13C15.625 13 14.5625 12.4062 13.7188 12.4062C11.9688 12.4375 10.125 13.7812 10.125 16.5625C10.125 17.375 10.25 18.2188 10.5625 19.0938C10.9688 20.25 12.4062 23.0625 13.9062 23C14.6875 23 15.25 22.4375 16.2812 22.4375C17.2812 22.4375 17.7812 23 18.6562 23C20.1875 23 21.5 20.4375 21.875 19.2812C19.8438 18.3125 19.9375 16.4688 19.9375 16.4062ZM18.1875 11.2812C19.0312 10.2812 18.9375 9.34375 18.9375 9C18.1875 9.0625 17.3125 9.53125 16.8125 10.0938C16.25 10.7188 15.9375 11.5 16 12.3438C16.8125 12.4062 17.5625 12 18.1875 11.2812Z"
              ></path></svg></a
          ><a target="_blank" rel="noopener noreferrer"
            ><svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              class="social-icon light"
            >
              <rect
                width="32"
                height="32"
                rx="8"
                :style="`fill: ${myVal[3]}`"
              ></rect>
              <path
                :style="`fill: ${myVal[2]}`"
                d="M18.1562 15.3438L20.0312 13.4688L11.25 8.40625L18.1562 15.3438ZM9.46875 8C9.0625 8.21875 8.78125 8.625 8.78125 9.125V22.9062C8.78125 23.4062 9.0625 23.8125 9.46875 24L17.4688 16L9.46875 8ZM22.75 15.0625L20.9062 14L18.8438 16L20.9062 18.0312L22.7812 16.9688C23.3438 16.5312 23.3438 15.5 22.75 15.0625ZM11.25 23.5938L20.0312 18.5625L18.1562 16.6875L11.25 23.5938Z"
              ></path></svg
          ></a>
        </div>
        <div class="links mobile">
          <ul class="light">
            <p class="title" :style="`color:${myVal[2]}`">Product</p>
            <li>
              <a class="link" :style="`color:${myVal[1]}`"> Games </a>
            </li>
            <li>
              <a class="link" :style="`color:${myVal[1]}`"> Publishing </a>
            </li>
            <li>
              <a class="link" :style="`color:${myVal[1]}`">
                Casual Publishing
              </a>
            </li>
            <li>
              <a class="link" :style="`color:${myVal[1]}`"> Apps </a>
            </li>
            <li>
              <a class="link" :style="`color:${myVal[1]}`"> Blockchain </a>
            </li>
          </ul>
          <ul class="light">
            <p class="title" :style="`color:${myVal[2]}`">Resources</p>
            <li>
              <a target="_blank" class="link" :style="`color:${myVal[1]}`">
                Blog
              </a>
            </li>
            <li>
            <a class="link" :style="`color:${myVal[1]}`"
              ><NuxtLink
                class="link"
                to="/academy"
                :style="`color:${myVal[1]}`"
                >academy</NuxtLink
              >
            </a>
          </li>
          <li>
            <a class="link" :style="`color:${myVal[1]}`"
              ><NuxtLink
                class="link"
                to="/competition"
                :style="`color:${myVal[1]}`"
                >Competition</NuxtLink
              >
            </a>
          </li>
          </ul>
          <ul class="light">
            <p class="title" :style="`color:${myVal[2]}`">Company</p>
            <li>
              <a class="link" :style="`color:${myVal[1]}`"> Careers </a>
            </li>
            <li>
              <a class="link" :style="`color:${myVal[1]}`"><NuxtLink class="link" to="/Blog">Blog</NuxtLink>  </a>
            </li>
            <li>
              <a class="link" :style="`color:${myVal[1]}`"><NuxtLink class="link" to="/GDPR">GDPR</NuxtLink>  </a>
            </li>
            <li>
              <a target="_blank" class="link" :style="`color:${myVal[1]}`">
                <NuxtLink
                  to="/TokenAudit"
                  class="link"
                  :style="`color:${myVal[1]}`"
                >
                Token Audit
                </NuxtLink>
              </a>
            </li>
          </ul>
          <div class="other mobile display">
            <p :style="`color:${myVal[1]}`">© 2023 Voodoo</p>
            <ul class="light">
              <li>
                <a class="link" :style="`color:${myVal[1]}`"
                  ><NuxtLink
                    to="/trems&conditons"
                    class="link"
                    :style="`color:${myVal[1]}`"
                    >Terms
                  </NuxtLink>
                </a>
              </li>
              <li>
                <a class="link" :style="`color:${myVal[1]}`"
                  ><NuxtLink
                    to="/trems&conditons"
                    class="link"
                    :style="`color:${myVal[1]}`"
                  >
                    Privacy
                  </NuxtLink></a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="other desktopTablet">
          <p :style="`color:${myVal[1]}`">
            <NuxtLink
              to="/trems&conditons"
              class="link"
              :style="`color:${myVal[1]}`"
            >
              Copyright © 2023 Voodoo</NuxtLink
            >
          </p>
          <ul class="light">
            <li>
              <a class="link" :style="`color:${myVal[1]}`"
                ><NuxtLink
                  to="/trems&conditons"
                  class="link"
                  :style="`color:${myVal[1]}`"
                >
                  Terms
                </NuxtLink></a
              >
            </li>
            <li>
              <a class="link" :style="`color:${myVal[1]}`"
                ><NuxtLink
                  to="/trems&conditons"
                  class="link"
                  :style="`color:${myVal[1]}`"
                >
                  Privacy
                </NuxtLink></a
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="links desktop">
        <ul class="light">
          <p class="title" :style="`color:${myVal[2]}`">Product</p>
          <li>
            <a class="link" :style="`color:${myVal[1]}`"><NuxtLink class="link" to="/games"> Games</NuxtLink> </a>
          </li>
          <li>
            <a class="link" :style="`color:${myVal[1]}`"><NuxtLink class="link" to="/Publishing">Publishing </NuxtLink> </a>
          </li>
          <li>
            <a class="link" :style="`color:${myVal[1]}`"><NuxtLink class="link" to="/CasualPublishing"> Casual Publishing</NuxtLink>  </a>
          </li>
          <li>
            <a class="link" :style="`color:${myVal[1]}`"><NuxtLink class="link" to="/Apps"> Apps </NuxtLink></a>
          </li>
          <li>
            <a class="link" :style="`color:${myVal[1]}`"><NuxtLink class="link" to="/blockchain"> Blockchain</NuxtLink> </a>
          </li>
        </ul>
        <ul>
          <p :style="`color:${myVal[2]}`">Resources</p>
          <li>
            <a target="_blank" class="link" :style="`color:${myVal[1]}`">
              <NuxtLink class="link" to="/blog">
              Blog</NuxtLink>
            </a>
          </li>
          <li>
            <a class="link" :style="`color:${myVal[1]}`"
              ><NuxtLink
                class="link"
                to="/academy"
                :style="`color:${myVal[1]}`"
                >academy</NuxtLink
              >
            </a>
          </li>
          <li>
            <a class="link" :style="`color:${myVal[1]}`"
              ><NuxtLink
                class="link"
                to="/competition"
                :style="`color:${myVal[1]}`"
                >Competition</NuxtLink
              >
            </a>
          </li>
          <li>
            <a class="link" :style="`color:${myVal[1]}`"
              ><NuxtLink
                class="link"
                to="/tutorials"
                :style="`color:${myVal[1]}`"
                >tutorials</NuxtLink
              >
            </a>
          </li>
        </ul>
        <ul class="light">
          <p class="title" :style="`color:${myVal[2]}`">Company</p>
          <li>
            <a class="link" :style="`color:${myVal[1]}`"
              ><NuxtLink
                class="link"
                to="/reseller"
                :style="`color:${myVal[1]}`"
                >Reseller</NuxtLink
              >
            </a>
          </li>
          <li>
            <a class="link" :style="`color:${myVal[1]}`"
              ><NuxtLink
                class="link"
                to="/casestudies"
                :style="`color:${myVal[1]}`"
                >Casestudies</NuxtLink
              >
            </a>
          </li>
          <li>
            <a class="link" :style="`color:${myVal[1]}`"
              ><NuxtLink
                class="link"
                to="/about"
                :style="`color:${myVal[1]}`"
                >About</NuxtLink
              >
            </a>
          </li>
          <li>
            <a class="link" :style="`color:${myVal[1]}`"
              ><NuxtLink
                to="/GDPR"
                :style="`color:${myVal[1]}`"
                class="link"
              >
                GDPR</NuxtLink
              >
            </a>
          </li>
          <li>
            <a target="_blank" class="link" :style="`color:${myVal[1]}`"
              ><NuxtLink
                to="/TokenAudit"
                class="link"
                :style="`color:${myVal[1]}`"
              >
                Token Audit
              </NuxtLink>
            </a>
          </li>
        </ul>
      </div>
      <p class="slogan" :style="`color:${myVal[2]}`">Entertain the world™</p>
    </div>
  </v-footer>
</template>
<script lang="ts" >
import { defineComponent, reactive, toRefs } from "vue";
import { computed, ref, onMounted } from "vue";
import { routerKey, RouterLink, RouterView } from "vue-router";
import { useDisplay } from "vuetify";

export default defineComponent({
  props: {},
  setup() {
    const route = useRoute();
    const color = ref("transparent");

    const color1 = ref("black");
    let y = ref(0);

    onMounted(() => {
      window.addEventListener("scroll", () => {
        y.value = window.scrollY;
      });
    });
    const myVal = computed({
      get() {
        if (route.path == "/blockchain")
          return ["#212734", "#b9bfcc", "white", "#353c4c"];
        else return ["#f6f7f9", "black", "black", "white"];
      },
      set() {
        return;
      },
    });
    return {
      y,
      myVal,
    };
  },
});
</script>
<style scoped>
.wrapper {
  display: grid;
  align-items: flex-start;
  grid-template-columns: repeat(2, 1fr);
  width: 1024px;
  margin: 0 auto;
}
.aside {
  display: grid;
}
.logo {
  margin-bottom: 32px;
}
.voodoo-logo.light {
  color: #10131b;
  color: var(--grey-900);
  border-bottom: 2px solid transparent;
}
.links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(149px, 1fr)) !important;
  grid-gap: 32px;
  gap: 32px;
}
.mobile {
  display: none;
}
.title {
  margin-bottom: 32px;
  color: #10131b;
  color: var(--grey-900);
  font-family: Poppins, ui-sans-serif, system-ui, -apple-system, Segoe UI,
    Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont,
    "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: 700;
  font-size: 16px;
  line-height: 1.2rem;
}
.slogan {
  color: #10131b;
  color: var(--grey-900);
  margin-top: 32px;
  text-align: right;
  grid-column: 2/2;
  font-family: Poppins, ui-sans-serif, system-ui, -apple-system, Segoe UI,
    Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont,
    "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: 700;
  font-size: 16px;
  line-height: 1.2rem;
}
.social {
  display: flex;
  grid-gap: 16px;
  gap: 16px;
  margin-bottom: 48px;
  flex-wrap: wrap;
}
a {
  text-decoration: none;
}
.social-icon {
  fill: var(--grey-000);
}
.social-icon rect {
  transition: all 0.3s ease;
}
.social-icon.light path {
  fill: #10131b;
  fill: var(--grey-900);
}
.social-icon.light:hover path {
  fill: #fff;
  fill: var(--grey-000) !important;
}
.social-icon.light:hover rect {
  fill: #347bff;
  fill: var(--blue-400) !important;
}
.other {
  font-family: Lato, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto,
    Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, "Segoe UI",
    "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 14px;
  line-height: 1.2rem;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  grid-gap: 16px;
  gap: 16px;
}
.other p {
  color: #353c4c;
  color: var(--grey-700);
}
ul {
  width: 100%;
  list-style: none;
}
ul li:not(:last-child) a {
  margin-bottom: 16px;
}
.link {
  font-family: Lato, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto,
    Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, "Segoe UI",
    "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 14px;
  line-height: 1.6rem;
  font-weight: 400;
  color: #353c4c;
  color: var(--grey-700);
  display: flex;
}
ul li:not(:last-child) a {
  margin-bottom: 16px;
}
.wrapper .aside .other p {
  color: #353c4c;
  color: var(--grey-700);
}
@media (max-width: 768px) {
  .wrapper .aside .other {
    grid-gap: 16px !important;
    gap: 16px !important;
  }
  .wrapper {
    margin-left: 24px !important;
    margin-right: 24px !important;
  }
  .mobile {
    display: grid !important;
    grid-template-columns: 1fr 1fr !important;
    grid-template-rows: 1fr 1fr !important;
    margin-bottom: 0 !important;
  }
  .title {
    margin-bottom: 16px !important;
  }
  .desktopTablet {
    display: none !important;
  }
  .wrapper .aside .other.mobile {
    display: flex !important;
    flex-direction: column !important;
  }
  .footer-light {
    padding: 48px 0 !important;
    
  }
  .wrapper .aside .other.mobile {
    display: flex !important;
    flex-direction: column !important;
  }
}

@media (max-width: 1024px) {
  .other {
    flex-direction: row;
    grid-gap: 48px;
    gap: 48px;
  }
  .wrapper {
    grid-template-columns: 1fr;
    margin-left: 40px;
    margin-right: 40px;
  }
  .mobile {
    display: flex;
    margin-bottom: 64px;
  }
  .display {
    display: none;
  }
  .title {
    font-size: 16px;
    line-height: 2.1rem;
  }
  .wrapper .links.desktop {
    display: none;
  }
  .slogan {
    grid-column: 1/2;
    margin-top: 64px;
    font-size: 16px;
    line-height: 2rem;
  }
}
@media (max-width: 1280px) {
  .wrapper {
    max-width: 928px;
  }
}
</style>