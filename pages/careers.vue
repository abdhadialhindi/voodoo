

<template>
  <section
    class="content isDesktop"
    style="--padding-top-hero: 112px; --padding-top-hero-alt: 112px"
  >
    <section class="jobs">
      <div class="default-block">
        <h1 class="title">Explore our jobs</h1>
        <section class="filters">
          <div class="search">
            <div class="input-container">
              <div class="input-icon">
                <svg
                  
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  aria-label="magnifying-glass"
                  role="presentation"
                  class="base-icon"
                >
                  <g fill="var(--grey-900)">
                    <g>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M15.1835 7.36853C13.0254 5.21049 9.52657 5.21049 7.36853 7.36853C5.21049 9.52657 5.21049 13.0254 7.36853 15.1835C9.52657 17.3415 13.0254 17.3415 15.1835 15.1835C17.3415 13.0254 17.3415 9.52657 15.1835 7.36853ZM16.2441 6.30787C13.5003 3.56404 9.05169 3.56404 6.30787 6.30787C3.56404 9.05169 3.56404 13.5003 6.30787 16.2441C9.05169 18.988 13.5003 18.988 16.2441 16.2441C18.988 13.5003 18.988 9.05169 16.2441 6.30787Z"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M15.1797 15.1797C15.4726 14.8868 15.9474 14.8868 16.2403 15.1797L19.5303 18.4697C19.8232 18.7626 19.8232 19.2374 19.5303 19.5303C19.2374 19.8232 18.7626 19.8232 18.4697 19.5303L15.1797 16.2403C14.8868 15.9474 14.8868 15.4726 15.1797 15.1797Z"
                      ></path>
                    </g>
                  </g></svg
                ><input
                  
                  placeholder="Search"
                  type="text"
                  variations="light"
                  class="input"
                />
              </div>
            </div>
          </div>
          <div class="selects">
            <section class="input-container base-multi-select input">
              <div class="input" @click="drawer[0] = !drawer[0]">
                Team

                <div class="infos">
                  
                  <svg
                    v-if="drawer[0] == false"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    aria-label="chevron-down"
                    role="presentation"
                    class="base-icon"
                  >
                    <g fill="'var(--grey-900)'">
                      <g>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M7.46967 9.46968C7.76256 9.17678 8.23744 9.17678 8.53033 9.46968L12 12.9393L15.4697 9.46968C15.7626 9.17678 16.2374 9.17678 16.5303 9.46968C16.8232 9.76257 16.8232 10.2374 16.5303 10.5303L12.5303 14.5303C12.3897 14.671 12.1989 14.75 12 14.75C11.8011 14.75 11.6103 14.671 11.4697 14.5303L7.46967 10.5303C7.17678 10.2374 7.17678 9.76257 7.46967 9.46968Z"
                        ></path>
                      </g>
                    </g>
                  </svg>
                  <svg
                    v-else
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    aria-label="chevron-up"
                    role="presentation"
                    class="base-icon"
                  >
                    <g data-v-8a6a3d50="" fill="'var(--grey-900)'">
                      <g data-v-8a6a3d50="">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12 9.25001C12.1989 9.25001 12.3897 9.32902 12.5303 9.46968L16.5303 13.4697C16.8232 13.7626 16.8232 14.2374 16.5303 14.5303C16.2374 14.8232 15.7626 14.8232 15.4697 14.5303L12 11.0607L8.53033 14.5303C8.23744 14.8232 7.76256 14.8232 7.46967 14.5303C7.17678 14.2374 7.17678 13.7626 7.46967 13.4697L11.4697 9.46968C11.6103 9.32902 11.8011 9.25001 12 9.25001Z"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
              <div class="options" v-if="drawer[0] == true">
                <div class="option">
                  <div class="base-checkbox">
                    <div class="checkbox-container">
                      <input
                        id="Blockchain"
                        type="checkbox"
                        class="input"
                        value="false"
                      /><svg
                        data-v-8a6a3d50=""
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        aria-label="check-mark"
                        role="presentation"
                        class="base-icon"
                      >
                        <g data-v-8a6a3d50="" fill="var(--grey-000)">
                          <g data-v-8a6a3d50="">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M21.5303 5.13634C21.8232 5.42923 21.8232 5.90411 21.5303 6.197L9.53033 18.197C9.38968 18.3377 9.19891 18.4167 9 18.4167C8.80109 18.4167 8.61032 18.3377 8.46967 18.197L2.46967 12.197C2.17678 11.9041 2.17678 11.4292 2.46967 11.1363C2.76256 10.8434 3.23744 10.8434 3.53033 11.1363L9 16.606L20.4697 5.13634C20.7626 4.84345 21.2374 4.84345 21.5303 5.13634Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <label for="Blockchain" class="label">Blockchain</label>
                  </div>
                  <!---->
                </div>
                <div class="option">
                  <div class="base-checkbox">
                    <div class="checkbox-container">
                      <input
                        id="Consumer Apps"
                        type="checkbox"
                        class="input"
                        value="false"
                      /><svg
                        data-v-8a6a3d50=""
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        aria-label="check-mark"
                        role="presentation"
                        class="base-icon"
                      >
                        <g data-v-8a6a3d50="" fill="var(--grey-000)">
                          <g data-v-8a6a3d50="">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M21.5303 5.13634C21.8232 5.42923 21.8232 5.90411 21.5303 6.197L9.53033 18.197C9.38968 18.3377 9.19891 18.4167 9 18.4167C8.80109 18.4167 8.61032 18.3377 8.46967 18.197L2.46967 12.197C2.17678 11.9041 2.17678 11.4292 2.46967 11.1363C2.76256 10.8434 3.23744 10.8434 3.53033 11.1363L9 16.606L20.4697 5.13634C20.7626 4.84345 21.2374 4.84345 21.5303 5.13634Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <label for="Consumer Apps" class="label"
                      >Consumer Apps</label
                    >
                  </div>
                  <!---->
                </div>
                <div class="option">
                  <div class="base-checkbox">
                    <div class="checkbox-container">
                      <input
                        id="Corporate"
                        type="checkbox"
                        class="input"
                        value="false"
                      /><svg
                        data-v-8a6a3d50=""
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        aria-label="check-mark"
                        role="presentation"
                        class="base-icon"
                      >
                        <g data-v-8a6a3d50="" fill="var(--grey-000)">
                          <g data-v-8a6a3d50="">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M21.5303 5.13634C21.8232 5.42923 21.8232 5.90411 21.5303 6.197L9.53033 18.197C9.38968 18.3377 9.19891 18.4167 9 18.4167C8.80109 18.4167 8.61032 18.3377 8.46967 18.197L2.46967 12.197C2.17678 11.9041 2.17678 11.4292 2.46967 11.1363C2.76256 10.8434 3.23744 10.8434 3.53033 11.1363L9 16.606L20.4697 5.13634C20.7626 4.84345 21.2374 4.84345 21.5303 5.13634Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <label for="Corporate" class="label">Corporate</label>
                  </div>
                  <!---->
                </div>
                <div class="option">
                  <div class="base-checkbox">
                    <div class="checkbox-container">
                      <input
                        id="Engineering &amp; Data"
                        type="checkbox"
                        class="input"
                        value="false"
                      /><svg
                        data-v-8a6a3d50=""
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        aria-label="check-mark"
                        role="presentation"
                        class="base-icon"
                      >
                        <g data-v-8a6a3d50="" fill="var(--grey-000)">
                          <g data-v-8a6a3d50="">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M21.5303 5.13634C21.8232 5.42923 21.8232 5.90411 21.5303 6.197L9.53033 18.197C9.38968 18.3377 9.19891 18.4167 9 18.4167C8.80109 18.4167 8.61032 18.3377 8.46967 18.197L2.46967 12.197C2.17678 11.9041 2.17678 11.4292 2.46967 11.1363C2.76256 10.8434 3.23744 10.8434 3.53033 11.1363L9 16.606L20.4697 5.13634C20.7626 4.84345 21.2374 4.84345 21.5303 5.13634Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <label for="Engineering &amp; Data" class="label"
                      >Engineering &amp; Data</label
                    >
                  </div>
                  <!---->
                </div>
                <div class="option">
                  <div class="base-checkbox">
                    <div class="checkbox-container">
                      <input
                        id="Gaming"
                        type="checkbox"
                        class="input"
                        value="false"
                      /><svg
                        data-v-8a6a3d50=""
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        aria-label="check-mark"
                        role="presentation"
                        class="base-icon"
                      >
                        <g data-v-8a6a3d50="" fill="var(--grey-000)">
                          <g data-v-8a6a3d50="">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M21.5303 5.13634C21.8232 5.42923 21.8232 5.90411 21.5303 6.197L9.53033 18.197C9.38968 18.3377 9.19891 18.4167 9 18.4167C8.80109 18.4167 8.61032 18.3377 8.46967 18.197L2.46967 12.197C2.17678 11.9041 2.17678 11.4292 2.46967 11.1363C2.76256 10.8434 3.23744 10.8434 3.53033 11.1363L9 16.606L20.4697 5.13634C20.7626 4.84345 21.2374 4.84345 21.5303 5.13634Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <label for="Gaming" class="label">Gaming</label>
                  </div>
                  <!---->
                </div>
                <div class="option">
                  <div class="base-checkbox">
                    <div class="checkbox-container">
                      <input
                        id="Growth"
                        type="checkbox"
                        class="input"
                        value="false"
                      /><svg
                        data-v-8a6a3d50=""
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        aria-label="check-mark"
                        role="presentation"
                        class="base-icon"
                      >
                        <g data-v-8a6a3d50="" fill="var(--grey-000)">
                          <g data-v-8a6a3d50="">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M21.5303 5.13634C21.8232 5.42923 21.8232 5.90411 21.5303 6.197L9.53033 18.197C9.38968 18.3377 9.19891 18.4167 9 18.4167C8.80109 18.4167 8.61032 18.3377 8.46967 18.197L2.46967 12.197C2.17678 11.9041 2.17678 11.4292 2.46967 11.1363C2.76256 10.8434 3.23744 10.8434 3.53033 11.1363L9 16.606L20.4697 5.13634C20.7626 4.84345 21.2374 4.84345 21.5303 5.13634Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <label for="Growth" class="label">Growth</label>
                  </div>
                  <!---->
                </div>
                <div class="option">
                  <div class="base-checkbox">
                    <div class="checkbox-container">
                      <input
                        id="Strategy &amp; Operations"
                        type="checkbox"
                        class="input"
                        value="false"
                      /><svg
                        data-v-8a6a3d50=""
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        aria-label="check-mark"
                        role="presentation"
                        class="base-icon"
                      >
                        <g data-v-8a6a3d50="" fill="var(--grey-000)">
                          <g data-v-8a6a3d50="">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M21.5303 5.13634C21.8232 5.42923 21.8232 5.90411 21.5303 6.197L9.53033 18.197C9.38968 18.3377 9.19891 18.4167 9 18.4167C8.80109 18.4167 8.61032 18.3377 8.46967 18.197L2.46967 12.197C2.17678 11.9041 2.17678 11.4292 2.46967 11.1363C2.76256 10.8434 3.23744 10.8434 3.53033 11.1363L9 16.606L20.4697 5.13634C20.7626 4.84345 21.2374 4.84345 21.5303 5.13634Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <label for="Strategy &amp; Operations" class="label"
                      >Strategy &amp; Operations</label
                    >
                  </div>
                  <!---->
                </div>
              </div>
            </section>
            <section class="input-container base-multi-select input">
              <div class="input" @click="drawer[1] = !drawer[1]">
                Expertise

                <div class="infos">
                  <svg
                    v-if="drawer[1] == false"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    aria-label="chevron-down"
                    role="presentation"
                    class="base-icon"
                  >
                    <g fill="'var(--grey-900)'">
                      <g>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M7.46967 9.46968C7.76256 9.17678 8.23744 9.17678 8.53033 9.46968L12 12.9393L15.4697 9.46968C15.7626 9.17678 16.2374 9.17678 16.5303 9.46968C16.8232 9.76257 16.8232 10.2374 16.5303 10.5303L12.5303 14.5303C12.3897 14.671 12.1989 14.75 12 14.75C11.8011 14.75 11.6103 14.671 11.4697 14.5303L7.46967 10.5303C7.17678 10.2374 7.17678 9.76257 7.46967 9.46968Z"
                        ></path>
                      </g>
                    </g>
                  </svg>
                  <svg
                    v-else
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    aria-label="chevron-up"
                    role="presentation"
                    class="base-icon"
                  >
                    <g data-v-8a6a3d50="" fill="'var(--grey-900)'">
                      <g data-v-8a6a3d50="">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12 9.25001C12.1989 9.25001 12.3897 9.32902 12.5303 9.46968L16.5303 13.4697C16.8232 13.7626 16.8232 14.2374 16.5303 14.5303C16.2374 14.8232 15.7626 14.8232 15.4697 14.5303L12 11.0607L8.53033 14.5303C8.23744 14.8232 7.76256 14.8232 7.46967 14.5303C7.17678 14.2374 7.17678 13.7626 7.46967 13.4697L11.4697 9.46968C11.6103 9.32902 11.8011 9.25001 12 9.25001Z"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
              <div data-v-75ca44ff="" class="options" v-if="drawer[1] == true">
                <div data-v-4991919a="" data-v-75ca44ff="" class="option">
                  <div data-v-4991919a="" class="base-checkbox">
                    <div data-v-4991919a="" class="checkbox-container">
                      <input
                        data-v-4991919a=""
                        id="Art &amp; Design"
                        type="checkbox"
                        class="input"
                        value="false"
                      /><svg
                        data-v-8a6a3d50=""
                        data-v-4991919a=""
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        aria-label="check-mark"
                        role="presentation"
                        class="base-icon"
                      >
                        <g data-v-8a6a3d50="" fill="var(--grey-000)">
                          <g data-v-8a6a3d50="">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M21.5303 5.13634C21.8232 5.42923 21.8232 5.90411 21.5303 6.197L9.53033 18.197C9.38968 18.3377 9.19891 18.4167 9 18.4167C8.80109 18.4167 8.61032 18.3377 8.46967 18.197L2.46967 12.197C2.17678 11.9041 2.17678 11.4292 2.46967 11.1363C2.76256 10.8434 3.23744 10.8434 3.53033 11.1363L9 16.606L20.4697 5.13634C20.7626 4.84345 21.2374 4.84345 21.5303 5.13634Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <label
                      data-v-4991919a=""
                      for="Art &amp; Design"
                      class="label"
                      >Art &amp; Design</label
                    >
                  </div>
                  <!---->
                </div>
                <div data-v-4991919a="" data-v-75ca44ff="" class="option">
                  <div data-v-4991919a="" class="base-checkbox">
                    <div data-v-4991919a="" class="checkbox-container">
                      <input
                        data-v-4991919a=""
                        id="Data"
                        type="checkbox"
                        class="input"
                        value="false"
                      /><svg
                        data-v-8a6a3d50=""
                        data-v-4991919a=""
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        aria-label="check-mark"
                        role="presentation"
                        class="base-icon"
                      >
                        <g data-v-8a6a3d50="" fill="var(--grey-000)">
                          <g data-v-8a6a3d50="">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M21.5303 5.13634C21.8232 5.42923 21.8232 5.90411 21.5303 6.197L9.53033 18.197C9.38968 18.3377 9.19891 18.4167 9 18.4167C8.80109 18.4167 8.61032 18.3377 8.46967 18.197L2.46967 12.197C2.17678 11.9041 2.17678 11.4292 2.46967 11.1363C2.76256 10.8434 3.23744 10.8434 3.53033 11.1363L9 16.606L20.4697 5.13634C20.7626 4.84345 21.2374 4.84345 21.5303 5.13634Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <label data-v-4991919a="" for="Data" class="label"
                      >Data</label
                    >
                  </div>
                  <!---->
                </div>
                <div data-v-4991919a="" data-v-75ca44ff="" class="option">
                  <div data-v-4991919a="" class="base-checkbox">
                    <div data-v-4991919a="" class="checkbox-container">
                      <input
                        data-v-4991919a=""
                        id="Engineering"
                        type="checkbox"
                        class="input"
                        value="false"
                      /><svg
                        data-v-8a6a3d50=""
                        data-v-4991919a=""
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        aria-label="check-mark"
                        role="presentation"
                        class="base-icon"
                      >
                        <g data-v-8a6a3d50="" fill="var(--grey-000)">
                          <g data-v-8a6a3d50="">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M21.5303 5.13634C21.8232 5.42923 21.8232 5.90411 21.5303 6.197L9.53033 18.197C9.38968 18.3377 9.19891 18.4167 9 18.4167C8.80109 18.4167 8.61032 18.3377 8.46967 18.197L2.46967 12.197C2.17678 11.9041 2.17678 11.4292 2.46967 11.1363C2.76256 10.8434 3.23744 10.8434 3.53033 11.1363L9 16.606L20.4697 5.13634C20.7626 4.84345 21.2374 4.84345 21.5303 5.13634Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <label data-v-4991919a="" for="Engineering" class="label"
                      >Engineering</label
                    >
                  </div>
                  <!---->
                </div>
                <div data-v-4991919a="" data-v-75ca44ff="" class="option">
                  <div data-v-4991919a="" class="base-checkbox">
                    <div data-v-4991919a="" class="checkbox-container">
                      <input
                        data-v-4991919a=""
                        id="Finance"
                        type="checkbox"
                        class="input"
                        value="false"
                      /><svg
                        data-v-8a6a3d50=""
                        data-v-4991919a=""
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        aria-label="check-mark"
                        role="presentation"
                        class="base-icon"
                      >
                        <g data-v-8a6a3d50="" fill="var(--grey-000)">
                          <g data-v-8a6a3d50="">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M21.5303 5.13634C21.8232 5.42923 21.8232 5.90411 21.5303 6.197L9.53033 18.197C9.38968 18.3377 9.19891 18.4167 9 18.4167C8.80109 18.4167 8.61032 18.3377 8.46967 18.197L2.46967 12.197C2.17678 11.9041 2.17678 11.4292 2.46967 11.1363C2.76256 10.8434 3.23744 10.8434 3.53033 11.1363L9 16.606L20.4697 5.13634C20.7626 4.84345 21.2374 4.84345 21.5303 5.13634Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <label data-v-4991919a="" for="Finance" class="label"
                      >Finance</label
                    >
                  </div>
                  <!---->
                </div>
                <div data-v-4991919a="" data-v-75ca44ff="" class="option">
                  <div data-v-4991919a="" class="base-checkbox">
                    <div data-v-4991919a="" class="checkbox-container">
                      <input
                        data-v-4991919a=""
                        id="Game Development"
                        type="checkbox"
                        class="input"
                        value="false"
                      /><svg
                        data-v-8a6a3d50=""
                        data-v-4991919a=""
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        aria-label="check-mark"
                        role="presentation"
                        class="base-icon"
                      >
                        <g data-v-8a6a3d50="" fill="var(--grey-000)">
                          <g data-v-8a6a3d50="">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M21.5303 5.13634C21.8232 5.42923 21.8232 5.90411 21.5303 6.197L9.53033 18.197C9.38968 18.3377 9.19891 18.4167 9 18.4167C8.80109 18.4167 8.61032 18.3377 8.46967 18.197L2.46967 12.197C2.17678 11.9041 2.17678 11.4292 2.46967 11.1363C2.76256 10.8434 3.23744 10.8434 3.53033 11.1363L9 16.606L20.4697 5.13634C20.7626 4.84345 21.2374 4.84345 21.5303 5.13634Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <label
                      data-v-4991919a=""
                      for="Game Development"
                      class="label"
                      >Game Development</label
                    >
                  </div>
                  <!---->
                </div>
                <div data-v-4991919a="" data-v-75ca44ff="" class="option">
                  <div data-v-4991919a="" class="base-checkbox">
                    <div data-v-4991919a="" class="checkbox-container">
                      <input
                        data-v-4991919a=""
                        id="Legal"
                        type="checkbox"
                        class="input"
                        value="false"
                      /><svg
                        data-v-8a6a3d50=""
                        data-v-4991919a=""
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        aria-label="check-mark"
                        role="presentation"
                        class="base-icon"
                      >
                        <g data-v-8a6a3d50="" fill="var(--grey-000)">
                          <g data-v-8a6a3d50="">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M21.5303 5.13634C21.8232 5.42923 21.8232 5.90411 21.5303 6.197L9.53033 18.197C9.38968 18.3377 9.19891 18.4167 9 18.4167C8.80109 18.4167 8.61032 18.3377 8.46967 18.197L2.46967 12.197C2.17678 11.9041 2.17678 11.4292 2.46967 11.1363C2.76256 10.8434 3.23744 10.8434 3.53033 11.1363L9 16.606L20.4697 5.13634C20.7626 4.84345 21.2374 4.84345 21.5303 5.13634Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <label data-v-4991919a="" for="Legal" class="label"
                      >Legal</label
                    >
                  </div>
                  <!---->
                </div>
                <div data-v-4991919a="" data-v-75ca44ff="" class="option">
                  <div data-v-4991919a="" class="base-checkbox">
                    <div data-v-4991919a="" class="checkbox-container">
                      <input
                        data-v-4991919a=""
                        id="Marketing"
                        type="checkbox"
                        class="input"
                        value="false"
                      /><svg
                        data-v-8a6a3d50=""
                        data-v-4991919a=""
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        aria-label="check-mark"
                        role="presentation"
                        class="base-icon"
                      >
                        <g data-v-8a6a3d50="" fill="var(--grey-000)">
                          <g data-v-8a6a3d50="">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M21.5303 5.13634C21.8232 5.42923 21.8232 5.90411 21.5303 6.197L9.53033 18.197C9.38968 18.3377 9.19891 18.4167 9 18.4167C8.80109 18.4167 8.61032 18.3377 8.46967 18.197L2.46967 12.197C2.17678 11.9041 2.17678 11.4292 2.46967 11.1363C2.76256 10.8434 3.23744 10.8434 3.53033 11.1363L9 16.606L20.4697 5.13634C20.7626 4.84345 21.2374 4.84345 21.5303 5.13634Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <label data-v-4991919a="" for="Marketing" class="label"
                      >Marketing</label
                    >
                  </div>
                  <!---->
                </div>
                <div data-v-4991919a="" data-v-75ca44ff="" class="option">
                  <div data-v-4991919a="" class="base-checkbox">
                    <div data-v-4991919a="" class="checkbox-container">
                      <input
                        data-v-4991919a=""
                        id="People"
                        type="checkbox"
                        class="input"
                        value="false"
                      /><svg
                        data-v-8a6a3d50=""
                        data-v-4991919a=""
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        aria-label="check-mark"
                        role="presentation"
                        class="base-icon"
                      >
                        <g data-v-8a6a3d50="" fill="var(--grey-000)">
                          <g data-v-8a6a3d50="">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M21.5303 5.13634C21.8232 5.42923 21.8232 5.90411 21.5303 6.197L9.53033 18.197C9.38968 18.3377 9.19891 18.4167 9 18.4167C8.80109 18.4167 8.61032 18.3377 8.46967 18.197L2.46967 12.197C2.17678 11.9041 2.17678 11.4292 2.46967 11.1363C2.76256 10.8434 3.23744 10.8434 3.53033 11.1363L9 16.606L20.4697 5.13634C20.7626 4.84345 21.2374 4.84345 21.5303 5.13634Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <label data-v-4991919a="" for="People" class="label"
                      >People</label
                    >
                  </div>
                  <!---->
                </div>
                <div data-v-4991919a="" data-v-75ca44ff="" class="option">
                  <div data-v-4991919a="" class="base-checkbox">
                    <div data-v-4991919a="" class="checkbox-container">
                      <input
                        data-v-4991919a=""
                        id="Product Management"
                        type="checkbox"
                        class="input"
                        value="false"
                      /><svg
                        data-v-8a6a3d50=""
                        data-v-4991919a=""
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        aria-label="check-mark"
                        role="presentation"
                        class="base-icon"
                      >
                        <g data-v-8a6a3d50="" fill="var(--grey-000)">
                          <g data-v-8a6a3d50="">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M21.5303 5.13634C21.8232 5.42923 21.8232 5.90411 21.5303 6.197L9.53033 18.197C9.38968 18.3377 9.19891 18.4167 9 18.4167C8.80109 18.4167 8.61032 18.3377 8.46967 18.197L2.46967 12.197C2.17678 11.9041 2.17678 11.4292 2.46967 11.1363C2.76256 10.8434 3.23744 10.8434 3.53033 11.1363L9 16.606L20.4697 5.13634C20.7626 4.84345 21.2374 4.84345 21.5303 5.13634Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <label
                      data-v-4991919a=""
                      for="Product Management"
                      class="label"
                      >Product Management</label
                    >
                  </div>
                  <!---->
                </div>
                <div data-v-4991919a="" data-v-75ca44ff="" class="option">
                  <div data-v-4991919a="" class="base-checkbox">
                    <div data-v-4991919a="" class="checkbox-container">
                      <input
                        data-v-4991919a=""
                        id="Project Management"
                        type="checkbox"
                        class="input"
                        value="false"
                      /><svg
                        data-v-8a6a3d50=""
                        data-v-4991919a=""
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        aria-label="check-mark"
                        role="presentation"
                        class="base-icon"
                      >
                        <g data-v-8a6a3d50="" fill="var(--grey-000)">
                          <g data-v-8a6a3d50="">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M21.5303 5.13634C21.8232 5.42923 21.8232 5.90411 21.5303 6.197L9.53033 18.197C9.38968 18.3377 9.19891 18.4167 9 18.4167C8.80109 18.4167 8.61032 18.3377 8.46967 18.197L2.46967 12.197C2.17678 11.9041 2.17678 11.4292 2.46967 11.1363C2.76256 10.8434 3.23744 10.8434 3.53033 11.1363L9 16.606L20.4697 5.13634C20.7626 4.84345 21.2374 4.84345 21.5303 5.13634Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <label
                      data-v-4991919a=""
                      for="Project Management"
                      class="label"
                      >Project Management</label
                    >
                  </div>
                  <!---->
                </div>
                <div data-v-4991919a="" data-v-75ca44ff="" class="option">
                  <div data-v-4991919a="" class="base-checkbox">
                    <div data-v-4991919a="" class="checkbox-container">
                      <input
                        data-v-4991919a=""
                        id="Talent Acquisition"
                        type="checkbox"
                        class="input"
                        value="false"
                      /><svg
                        data-v-8a6a3d50=""
                        data-v-4991919a=""
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        aria-label="check-mark"
                        role="presentation"
                        class="base-icon"
                      >
                        <g data-v-8a6a3d50="" fill="var(--grey-000)">
                          <g data-v-8a6a3d50="">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M21.5303 5.13634C21.8232 5.42923 21.8232 5.90411 21.5303 6.197L9.53033 18.197C9.38968 18.3377 9.19891 18.4167 9 18.4167C8.80109 18.4167 8.61032 18.3377 8.46967 18.197L2.46967 12.197C2.17678 11.9041 2.17678 11.4292 2.46967 11.1363C2.76256 10.8434 3.23744 10.8434 3.53033 11.1363L9 16.606L20.4697 5.13634C20.7626 4.84345 21.2374 4.84345 21.5303 5.13634Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <label
                      data-v-4991919a=""
                      for="Talent Acquisition"
                      class="label"
                      >Talent Acquisition</label
                    >
                  </div>
                  <!---->
                </div>
                <div data-v-4991919a="" data-v-75ca44ff="" class="option">
                  <div data-v-4991919a="" class="base-checkbox">
                    <div data-v-4991919a="" class="checkbox-container">
                      <input
                        data-v-4991919a=""
                        id="User Acquisition &amp; Monetization"
                        type="checkbox"
                        class="input"
                        value="false"
                      /><svg
                        data-v-8a6a3d50=""
                        data-v-4991919a=""
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        aria-label="check-mark"
                        role="presentation"
                        class="base-icon"
                      >
                        <g data-v-8a6a3d50="" fill="var(--grey-000)">
                          <g data-v-8a6a3d50="">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M21.5303 5.13634C21.8232 5.42923 21.8232 5.90411 21.5303 6.197L9.53033 18.197C9.38968 18.3377 9.19891 18.4167 9 18.4167C8.80109 18.4167 8.61032 18.3377 8.46967 18.197L2.46967 12.197C2.17678 11.9041 2.17678 11.4292 2.46967 11.1363C2.76256 10.8434 3.23744 10.8434 3.53033 11.1363L9 16.606L20.4697 5.13634C20.7626 4.84345 21.2374 4.84345 21.5303 5.13634Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <label
                      data-v-4991919a=""
                      for="User Acquisition &amp; Monetization"
                      class="label"
                      >User Acquisition &amp; Monetization</label
                    >
                  </div>
                  <!---->
                </div>
              </div>
            </section>
            <section class="input-container base-multi-select input">
              <div class="input" @click="drawer[2] = !drawer[2]">
                Location

                <div class="infos">
                  <svg
                    v-if="drawer[2] == false"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    aria-label="chevron-down"
                    role="presentation"
                    class="base-icon"
                  >
                    <g fill="'var(--grey-900)'">
                      <g>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M7.46967 9.46968C7.76256 9.17678 8.23744 9.17678 8.53033 9.46968L12 12.9393L15.4697 9.46968C15.7626 9.17678 16.2374 9.17678 16.5303 9.46968C16.8232 9.76257 16.8232 10.2374 16.5303 10.5303L12.5303 14.5303C12.3897 14.671 12.1989 14.75 12 14.75C11.8011 14.75 11.6103 14.671 11.4697 14.5303L7.46967 10.5303C7.17678 10.2374 7.17678 9.76257 7.46967 9.46968Z"
                        ></path>
                      </g>
                    </g>
                  </svg>
                  <svg
                    v-else
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    aria-label="chevron-up"
                    role="presentation"
                    class="base-icon"
                  >
                    <g data-v-8a6a3d50="" fill="'var(--grey-900)'">
                      <g data-v-8a6a3d50="">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12 9.25001C12.1989 9.25001 12.3897 9.32902 12.5303 9.46968L16.5303 13.4697C16.8232 13.7626 16.8232 14.2374 16.5303 14.5303C16.2374 14.8232 15.7626 14.8232 15.4697 14.5303L12 11.0607L8.53033 14.5303C8.23744 14.8232 7.76256 14.8232 7.46967 14.5303C7.17678 14.2374 7.17678 13.7626 7.46967 13.4697L11.4697 9.46968C11.6103 9.32902 11.8011 9.25001 12 9.25001Z"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
              <div data-v-75ca44ff="" class="options" v-if="drawer[2] == true">
                <div data-v-4991919a="" data-v-75ca44ff="" class="option">
                  <div data-v-4991919a="" class="base-checkbox">
                    <div data-v-4991919a="" class="checkbox-container">
                      <input
                        data-v-4991919a=""
                        id="Barcelona"
                        type="checkbox"
                        class="input"
                        value="false"
                      /><svg
                        data-v-8a6a3d50=""
                        data-v-4991919a=""
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        aria-label="check-mark"
                        role="presentation"
                        class="base-icon"
                      >
                        <g data-v-8a6a3d50="" fill="var(--grey-000)">
                          <g data-v-8a6a3d50="">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M21.5303 5.13634C21.8232 5.42923 21.8232 5.90411 21.5303 6.197L9.53033 18.197C9.38968 18.3377 9.19891 18.4167 9 18.4167C8.80109 18.4167 8.61032 18.3377 8.46967 18.197L2.46967 12.197C2.17678 11.9041 2.17678 11.4292 2.46967 11.1363C2.76256 10.8434 3.23744 10.8434 3.53033 11.1363L9 16.606L20.4697 5.13634C20.7626 4.84345 21.2374 4.84345 21.5303 5.13634Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <label data-v-4991919a="" for="Barcelona" class="label"
                      >Barcelona</label
                    >
                  </div>
                  <!---->
                </div>
                <div data-v-4991919a="" data-v-75ca44ff="" class="option">
                  <div data-v-4991919a="" class="base-checkbox">
                    <div data-v-4991919a="" class="checkbox-container">
                      <input
                        data-v-4991919a=""
                        id="Paris"
                        type="checkbox"
                        class="input"
                        value="false"
                      /><svg
                        data-v-8a6a3d50=""
                        data-v-4991919a=""
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        aria-label="check-mark"
                        role="presentation"
                        class="base-icon"
                      >
                        <g data-v-8a6a3d50="" fill="var(--grey-000)">
                          <g data-v-8a6a3d50="">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M21.5303 5.13634C21.8232 5.42923 21.8232 5.90411 21.5303 6.197L9.53033 18.197C9.38968 18.3377 9.19891 18.4167 9 18.4167C8.80109 18.4167 8.61032 18.3377 8.46967 18.197L2.46967 12.197C2.17678 11.9041 2.17678 11.4292 2.46967 11.1363C2.76256 10.8434 3.23744 10.8434 3.53033 11.1363L9 16.606L20.4697 5.13634C20.7626 4.84345 21.2374 4.84345 21.5303 5.13634Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <label data-v-4991919a="" for="Paris" class="label"
                      >Paris</label
                    >
                  </div>
                  <!---->
                </div>
                <div data-v-4991919a="" data-v-75ca44ff="" class="option">
                  <div data-v-4991919a="" class="base-checkbox">
                    <div data-v-4991919a="" class="checkbox-container">
                      <input
                        data-v-4991919a=""
                        id="Tel Aviv"
                        type="checkbox"
                        class="input"
                        value="false"
                      /><svg
                        data-v-8a6a3d50=""
                        data-v-4991919a=""
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        aria-label="check-mark"
                        role="presentation"
                        class="base-icon"
                      >
                        <g data-v-8a6a3d50="" fill="var(--grey-000)">
                          <g data-v-8a6a3d50="">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M21.5303 5.13634C21.8232 5.42923 21.8232 5.90411 21.5303 6.197L9.53033 18.197C9.38968 18.3377 9.19891 18.4167 9 18.4167C8.80109 18.4167 8.61032 18.3377 8.46967 18.197L2.46967 12.197C2.17678 11.9041 2.17678 11.4292 2.46967 11.1363C2.76256 10.8434 3.23744 10.8434 3.53033 11.1363L9 16.606L20.4697 5.13634C20.7626 4.84345 21.2374 4.84345 21.5303 5.13634Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <label data-v-4991919a="" for="Tel Aviv" class="label"
                      >Tel Aviv</label
                    >
                  </div>
                  <!---->
                </div>
              </div>
            </section>
            <section class="input-container base-multi-select input">
              <div class="input" @click="drawer[3] = !drawer[3]">
                Workplace type

                <div class="infos">
                  <svg
                    v-if="drawer[3] == false"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    aria-label="chevron-down"
                    role="presentation"
                    class="base-icon"
                  >
                    <g fill="'var(--grey-900)'">
                      <g>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M7.46967 9.46968C7.76256 9.17678 8.23744 9.17678 8.53033 9.46968L12 12.9393L15.4697 9.46968C15.7626 9.17678 16.2374 9.17678 16.5303 9.46968C16.8232 9.76257 16.8232 10.2374 16.5303 10.5303L12.5303 14.5303C12.3897 14.671 12.1989 14.75 12 14.75C11.8011 14.75 11.6103 14.671 11.4697 14.5303L7.46967 10.5303C7.17678 10.2374 7.17678 9.76257 7.46967 9.46968Z"
                        ></path>
                      </g>
                    </g>
                  </svg>
                  <svg
                    v-else
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    aria-label="chevron-up"
                    role="presentation"
                    class="base-icon"
                  >
                    <g data-v-8a6a3d50="" fill="'var(--grey-900)'">
                      <g data-v-8a6a3d50="">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12 9.25001C12.1989 9.25001 12.3897 9.32902 12.5303 9.46968L16.5303 13.4697C16.8232 13.7626 16.8232 14.2374 16.5303 14.5303C16.2374 14.8232 15.7626 14.8232 15.4697 14.5303L12 11.0607L8.53033 14.5303C8.23744 14.8232 7.76256 14.8232 7.46967 14.5303C7.17678 14.2374 7.17678 13.7626 7.46967 13.4697L11.4697 9.46968C11.6103 9.32902 11.8011 9.25001 12 9.25001Z"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
              <div data-v-75ca44ff="" class="options" v-if="drawer[3] == true">
                <div data-v-4991919a="" data-v-75ca44ff="" class="option">
                  <div data-v-4991919a="" class="base-checkbox">
                    <div data-v-4991919a="" class="checkbox-container">
                      <input
                        data-v-4991919a=""
                        id="Hybrid"
                        type="checkbox"
                        class="input"
                        value="false"
                      /><svg
                        data-v-8a6a3d50=""
                        data-v-4991919a=""
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        aria-label="check-mark"
                        role="presentation"
                        class="base-icon"
                      >
                        <g data-v-8a6a3d50="" fill="var(--grey-000)">
                          <g data-v-8a6a3d50="">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M21.5303 5.13634C21.8232 5.42923 21.8232 5.90411 21.5303 6.197L9.53033 18.197C9.38968 18.3377 9.19891 18.4167 9 18.4167C8.80109 18.4167 8.61032 18.3377 8.46967 18.197L2.46967 12.197C2.17678 11.9041 2.17678 11.4292 2.46967 11.1363C2.76256 10.8434 3.23744 10.8434 3.53033 11.1363L9 16.606L20.4697 5.13634C20.7626 4.84345 21.2374 4.84345 21.5303 5.13634Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <label data-v-4991919a="" for="Hybrid" class="label"
                      >Hybrid</label
                    >
                  </div>
                  <!---->
                </div>
                <div data-v-4991919a="" data-v-75ca44ff="" class="option">
                  <div data-v-4991919a="" class="base-checkbox">
                    <div data-v-4991919a="" class="checkbox-container">
                      <input
                        data-v-4991919a=""
                        id="On-site"
                        type="checkbox"
                        class="input"
                        value="false"
                      /><svg
                        data-v-8a6a3d50=""
                        data-v-4991919a=""
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        aria-label="check-mark"
                        role="presentation"
                        class="base-icon"
                      >
                        <g data-v-8a6a3d50="" fill="var(--grey-000)">
                          <g data-v-8a6a3d50="">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M21.5303 5.13634C21.8232 5.42923 21.8232 5.90411 21.5303 6.197L9.53033 18.197C9.38968 18.3377 9.19891 18.4167 9 18.4167C8.80109 18.4167 8.61032 18.3377 8.46967 18.197L2.46967 12.197C2.17678 11.9041 2.17678 11.4292 2.46967 11.1363C2.76256 10.8434 3.23744 10.8434 3.53033 11.1363L9 16.606L20.4697 5.13634C20.7626 4.84345 21.2374 4.84345 21.5303 5.13634Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <label data-v-4991919a="" for="On-site" class="label"
                      >On-site</label
                    >
                  </div>
                  <!---->
                </div>
                <div data-v-4991919a="" data-v-75ca44ff="" class="option">
                  <div data-v-4991919a="" class="base-checkbox">
                    <div data-v-4991919a="" class="checkbox-container">
                      <input
                        data-v-4991919a=""
                        id="Remote"
                        type="checkbox"
                        class="input"
                        value="false"
                      /><svg
                        data-v-8a6a3d50=""
                        data-v-4991919a=""
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        aria-label="check-mark"
                        role="presentation"
                        class="base-icon"
                      >
                        <g data-v-8a6a3d50="" fill="var(--grey-000)">
                          <g data-v-8a6a3d50="">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M21.5303 5.13634C21.8232 5.42923 21.8232 5.90411 21.5303 6.197L9.53033 18.197C9.38968 18.3377 9.19891 18.4167 9 18.4167C8.80109 18.4167 8.61032 18.3377 8.46967 18.197L2.46967 12.197C2.17678 11.9041 2.17678 11.4292 2.46967 11.1363C2.76256 10.8434 3.23744 10.8434 3.53033 11.1363L9 16.606L20.4697 5.13634C20.7626 4.84345 21.2374 4.84345 21.5303 5.13634Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <label data-v-4991919a="" for="Remote" class="label"
                      >Remote</label
                    >
                  </div>
                  <!---->
                </div>
              </div>
            </section>
          </div>
        </section>
        <h2 class="jobs-count">We found <span>42 jobs</span> corresponding.</h2>
        <section class="jobs-list">
          <div class="">
            <div class="titles">
              <p>Title</p>
              <p>Team</p>
              <p>Expertise</p>
              <p>Location</p>
              <p>Type</p>
            </div>
            <div class="items">
              <a class="item"
                ><div class="desktop">
                  <span> Game Lead - Casual Games </span>
                  <p>Gaming</p>
                  <p>Project Management</p>
                  <p>Paris</p>
                  <p>Remote</p>
                </div>
                <div class="mobile">
                  <span> Game Lead - Casual Games </span>
                  <div class="description">
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="users-2"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6 15.75C4.21421 15.75 2.75 17.2142 2.75 19C2.75 19.4142 2.41421 19.75 2 19.75C1.58579 19.75 1.25 19.4142 1.25 19C1.25 16.3858 3.38579 14.25 6 14.25H10C12.6142 14.25 14.75 16.3858 14.75 19C14.75 19.4142 14.4142 19.75 14 19.75C13.5858 19.75 13.25 19.4142 13.25 19C13.25 17.2142 11.7858 15.75 10 15.75H6Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M9.97947 6.54018C8.82861 5.48134 7.01733 5.46816 6.0496 6.51034C5.04291 7.59446 5.08987 9.24842 6.1496 10.3897C7.11984 11.4345 8.8389 11.419 9.98966 10.3504C11.0556 9.36056 11.0879 7.65878 9.97947 6.54018ZM11.0068 5.44708C9.35665 3.91831 6.57863 3.73619 4.9504 5.48966C3.35709 7.20554 3.51013 9.75158 5.0504 11.4103C6.68016 13.1655 9.3611 12.981 11.0103 11.4496C12.74 9.84344 12.7119 7.15488 11.0338 5.4731C11.0294 5.46869 11.025 5.46433 11.0205 5.46002C11.016 5.45564 11.0114 5.45132 11.0068 5.44708Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M15.25 14C15.25 13.5858 15.5858 13.25 16 13.25H19C21.1142 13.25 22.75 14.8858 22.75 17C22.75 17.4142 22.4142 17.75 22 17.75C21.5858 17.75 21.25 17.4142 21.25 17C21.25 15.7142 20.2858 14.75 19 14.75H16C15.5858 14.75 15.25 14.4142 15.25 14Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M18.7836 7.24441C18.0522 6.60027 16.919 6.64161 16.3303 7.23033C16.321 7.23962 16.3115 7.24867 16.3017 7.25747C15.6827 7.8146 15.6639 8.9276 16.3575 9.69828C16.9146 10.3173 18.0276 10.3361 18.7983 9.64253C19.4466 9.05901 19.4926 7.96805 18.7836 7.24441ZM19.7966 6.1379C18.5319 5.00456 16.4912 4.96427 15.2837 6.15573C13.9189 7.40013 14.14 9.47674 15.2425 10.7017C16.4854 12.0827 18.5724 11.8639 19.8017 10.7575C21.1474 9.54633 21.1069 7.45152 19.8352 6.17456C19.829 6.16826 19.8227 6.16204 19.8162 6.15591C19.8097 6.14977 19.8032 6.14376 19.7966 6.1379Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Gaming</p>
                    </div>
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="target"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M14.5712 9.42882C14.8641 9.72172 14.8641 10.1966 14.5712 10.4895L12.0601 13.0005C11.7672 13.2934 11.2924 13.2934 10.9995 13.0005C10.7066 12.7076 10.7066 12.2328 10.9995 11.9399L13.5105 9.42882C13.8034 9.13593 14.2783 9.13593 14.5712 9.42882Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M18.1227 1.25553C18.3607 1.29417 18.5656 1.44486 18.6734 1.66053L19.8951 4.1049L22.3395 5.32663C22.5551 5.43442 22.7058 5.63932 22.7445 5.87731C22.7831 6.1153 22.705 6.35735 22.5345 6.52783L18.5328 10.5295C18.3922 10.6702 18.2014 10.7492 18.0025 10.7492H14.0008C13.5866 10.7492 13.2508 10.4134 13.2508 9.99917V5.9975C13.2508 5.79859 13.3298 5.60782 13.4705 5.46717L17.4722 1.46551C17.6426 1.29502 17.8847 1.21689 18.1227 1.25553ZM14.7508 6.30816V9.24917H17.6918L20.7379 6.20308L19.0007 5.33482C18.8555 5.26223 18.7378 5.14448 18.6652 4.99926L17.7969 3.26208L14.7508 6.30816Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.7482 3.92571C11.7735 4.33915 11.459 4.69487 11.0455 4.72025C6.88357 4.9757 3.66447 8.46941 3.74982 12.6383C3.83517 16.8072 7.19457 20.1663 11.3635 20.2511C15.5324 20.336 19.0258 17.1165 19.2807 12.9546C19.3061 12.5411 19.6618 12.2265 20.0752 12.2518C20.4886 12.2772 20.8033 12.6328 20.7779 13.0463C20.4737 18.0114 16.3063 21.8521 11.3329 21.7508C6.35959 21.6496 2.35195 17.6424 2.25013 12.669C2.14831 7.69567 5.98858 3.5278 10.9536 3.22307C11.3671 3.19769 11.7228 3.51228 11.7482 3.92571Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.7451 7.70683C11.7901 8.1186 11.4928 8.48885 11.081 8.53382C9.00869 8.76011 7.4628 10.5482 7.53836 12.6314C7.61393 14.7147 9.2853 16.3861 11.3686 16.4616C13.4518 16.5372 15.2399 14.9913 15.4662 12.919C15.5111 12.5072 15.8814 12.2099 16.2932 12.2549C16.7049 12.2998 17.0023 12.6701 16.9573 13.0818C16.6457 15.9358 14.1832 18.0647 11.3142 17.9607C8.44518 17.8566 6.14341 15.5548 6.03935 12.6858C5.93528 9.81681 8.06424 7.35433 10.9182 7.04268C11.3299 6.99772 11.7002 7.29507 11.7451 7.70683Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Project Management</p>
                    </div>
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="pin-map-location"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 7.75C10.7572 7.75 9.75 8.75721 9.75 10C9.75 11.2428 10.7572 12.25 12 12.25C13.2428 12.25 14.25 11.2428 14.25 10C14.25 8.75721 13.2428 7.75 12 7.75ZM8.25 10C8.25 7.92879 9.92879 6.25 12 6.25C14.0712 6.25 15.75 7.92879 15.75 10C15.75 12.0712 14.0712 13.75 12 13.75C9.92879 13.75 8.25 12.0712 8.25 10Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 3.75C8.54821 3.75 5.75 6.54821 5.75 10C5.75 12.3384 7.33713 14.908 9.07546 16.9878C9.92687 18.0064 10.7804 18.8678 11.4218 19.4748C11.6434 19.6846 11.8392 19.8634 12 20.0073C12.1608 19.8634 12.3566 19.6846 12.5782 19.4748C13.2196 18.8678 14.0731 18.0064 14.9245 16.9878C16.6629 14.908 18.25 12.3384 18.25 10C18.25 6.54821 15.4518 3.75 12 3.75ZM12 21C11.5239 21.5795 11.5238 21.5794 11.5236 21.5793L11.5217 21.5777L11.5168 21.5737L11.4997 21.5595C11.4851 21.5472 11.464 21.5296 11.4368 21.5066C11.3826 21.4607 11.3043 21.3937 11.2053 21.3071C11.0075 21.134 10.7267 20.8823 10.3907 20.5643C9.71961 19.9291 8.82313 19.0248 7.92454 17.9497C6.16287 15.842 4.25 12.9116 4.25 10C4.25 5.71979 7.71979 2.25 12 2.25C16.2802 2.25 19.75 5.71979 19.75 10C19.75 12.9116 17.8371 15.842 16.0755 17.9497C15.1769 19.0248 14.2804 19.9291 13.6093 20.5643C13.2733 20.8823 12.9925 21.134 12.7947 21.3071C12.6957 21.3937 12.6174 21.4607 12.5632 21.5066C12.536 21.5296 12.5149 21.5472 12.5003 21.5595L12.4832 21.5737L12.4783 21.5777L12.4769 21.5789C12.4767 21.579 12.4761 21.5795 12 21ZM12 21L12.4761 21.5795C12.1994 21.8068 11.8003 21.8065 11.5236 21.5793L12 21Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Paris</p>
                    </div>
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="earth-world-globe"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.4842 2.5555C11.785 2.27065 12.2597 2.28351 12.5445 2.58423C17.4855 7.80049 17.4855 16.1995 12.5445 21.4158C12.2597 21.7165 11.785 21.7294 11.4842 21.4445C11.1835 21.1597 11.1706 20.685 11.4555 20.3842C15.8485 15.7465 15.8485 8.25351 11.4555 3.61577C11.1706 3.31505 11.1835 2.84035 11.4842 2.5555Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12.5158 2.5555C12.8165 2.84035 12.8294 3.31505 12.5445 3.61577C8.1515 8.25351 8.1515 15.7465 12.5445 20.3842C12.8294 20.685 12.8165 21.1597 12.5158 21.4445C12.2151 21.7294 11.7404 21.7165 11.4555 21.4158C6.51451 16.1995 6.51451 7.80049 11.4555 2.58423C11.7404 2.28351 12.2151 2.27065 12.5158 2.5555Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.25 3C11.25 2.58579 11.5858 2.25 12 2.25C17.3962 2.25 21.75 6.60379 21.75 12C21.75 17.3962 17.3962 21.75 12 21.75C11.5858 21.75 11.25 21.4142 11.25 21C11.25 20.5858 11.5858 20.25 12 20.25C16.5678 20.25 20.25 16.5678 20.25 12C20.25 7.43221 16.5678 3.75 12 3.75C11.5858 3.75 11.25 3.41421 11.25 3Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 3.75C7.43221 3.75 3.75 7.43221 3.75 12C3.75 16.5678 7.43221 20.25 12 20.25C12.4142 20.25 12.75 20.5858 12.75 21C12.75 21.4142 12.4142 21.75 12 21.75C6.60379 21.75 2.25 17.3962 2.25 12C2.25 6.60379 6.60379 2.25 12 2.25C12.4142 2.25 12.75 2.58579 12.75 3C12.75 3.41421 12.4142 3.75 12 3.75Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M2.75999 9C2.75999 8.58579 3.09578 8.25 3.50999 8.25H20.49C20.9042 8.25 21.24 8.58579 21.24 9C21.24 9.41421 20.9042 9.75 20.49 9.75H3.50999C3.09578 9.75 2.75999 9.41421 2.75999 9Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M2.75999 15C2.75999 14.5858 3.09578 14.25 3.50999 14.25H20.49C20.9042 14.25 21.24 14.5858 21.24 15C21.24 15.4142 20.9042 15.75 20.49 15.75H3.50999C3.09578 15.75 2.75999 15.4142 2.75999 15Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Remote</p>
                    </div>
                  </div>
                </div></a
              ><a class="item"
                ><div class="desktop">
                  <span> Accountant </span>
                  <p>Corporate</p>
                  <p>Finance</p>
                  <p>Paris</p>
                  <p>Hybrid</p>
                </div>
                <div class="mobile">
                  <span> Accountant </span>
                  <div class="description">
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="users-2"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6 15.75C4.21421 15.75 2.75 17.2142 2.75 19C2.75 19.4142 2.41421 19.75 2 19.75C1.58579 19.75 1.25 19.4142 1.25 19C1.25 16.3858 3.38579 14.25 6 14.25H10C12.6142 14.25 14.75 16.3858 14.75 19C14.75 19.4142 14.4142 19.75 14 19.75C13.5858 19.75 13.25 19.4142 13.25 19C13.25 17.2142 11.7858 15.75 10 15.75H6Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M9.97947 6.54018C8.82861 5.48134 7.01733 5.46816 6.0496 6.51034C5.04291 7.59446 5.08987 9.24842 6.1496 10.3897C7.11984 11.4345 8.8389 11.419 9.98966 10.3504C11.0556 9.36056 11.0879 7.65878 9.97947 6.54018ZM11.0068 5.44708C9.35665 3.91831 6.57863 3.73619 4.9504 5.48966C3.35709 7.20554 3.51013 9.75158 5.0504 11.4103C6.68016 13.1655 9.3611 12.981 11.0103 11.4496C12.74 9.84344 12.7119 7.15488 11.0338 5.4731C11.0294 5.46869 11.025 5.46433 11.0205 5.46002C11.016 5.45564 11.0114 5.45132 11.0068 5.44708Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M15.25 14C15.25 13.5858 15.5858 13.25 16 13.25H19C21.1142 13.25 22.75 14.8858 22.75 17C22.75 17.4142 22.4142 17.75 22 17.75C21.5858 17.75 21.25 17.4142 21.25 17C21.25 15.7142 20.2858 14.75 19 14.75H16C15.5858 14.75 15.25 14.4142 15.25 14Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M18.7836 7.24441C18.0522 6.60027 16.919 6.64161 16.3303 7.23033C16.321 7.23962 16.3115 7.24867 16.3017 7.25747C15.6827 7.8146 15.6639 8.9276 16.3575 9.69828C16.9146 10.3173 18.0276 10.3361 18.7983 9.64253C19.4466 9.05901 19.4926 7.96805 18.7836 7.24441ZM19.7966 6.1379C18.5319 5.00456 16.4912 4.96427 15.2837 6.15573C13.9189 7.40013 14.14 9.47674 15.2425 10.7017C16.4854 12.0827 18.5724 11.8639 19.8017 10.7575C21.1474 9.54633 21.1069 7.45152 19.8352 6.17456C19.829 6.16826 19.8227 6.16204 19.8162 6.15591C19.8097 6.14977 19.8032 6.14376 19.7966 6.1379Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Corporate</p>
                    </div>
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="target"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M14.5712 9.42882C14.8641 9.72172 14.8641 10.1966 14.5712 10.4895L12.0601 13.0005C11.7672 13.2934 11.2924 13.2934 10.9995 13.0005C10.7066 12.7076 10.7066 12.2328 10.9995 11.9399L13.5105 9.42882C13.8034 9.13593 14.2783 9.13593 14.5712 9.42882Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M18.1227 1.25553C18.3607 1.29417 18.5656 1.44486 18.6734 1.66053L19.8951 4.1049L22.3395 5.32663C22.5551 5.43442 22.7058 5.63932 22.7445 5.87731C22.7831 6.1153 22.705 6.35735 22.5345 6.52783L18.5328 10.5295C18.3922 10.6702 18.2014 10.7492 18.0025 10.7492H14.0008C13.5866 10.7492 13.2508 10.4134 13.2508 9.99917V5.9975C13.2508 5.79859 13.3298 5.60782 13.4705 5.46717L17.4722 1.46551C17.6426 1.29502 17.8847 1.21689 18.1227 1.25553ZM14.7508 6.30816V9.24917H17.6918L20.7379 6.20308L19.0007 5.33482C18.8555 5.26223 18.7378 5.14448 18.6652 4.99926L17.7969 3.26208L14.7508 6.30816Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.7482 3.92571C11.7735 4.33915 11.459 4.69487 11.0455 4.72025C6.88357 4.9757 3.66447 8.46941 3.74982 12.6383C3.83517 16.8072 7.19457 20.1663 11.3635 20.2511C15.5324 20.336 19.0258 17.1165 19.2807 12.9546C19.3061 12.5411 19.6618 12.2265 20.0752 12.2518C20.4886 12.2772 20.8033 12.6328 20.7779 13.0463C20.4737 18.0114 16.3063 21.8521 11.3329 21.7508C6.35959 21.6496 2.35195 17.6424 2.25013 12.669C2.14831 7.69567 5.98858 3.5278 10.9536 3.22307C11.3671 3.19769 11.7228 3.51228 11.7482 3.92571Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.7451 7.70683C11.7901 8.1186 11.4928 8.48885 11.081 8.53382C9.00869 8.76011 7.4628 10.5482 7.53836 12.6314C7.61393 14.7147 9.2853 16.3861 11.3686 16.4616C13.4518 16.5372 15.2399 14.9913 15.4662 12.919C15.5111 12.5072 15.8814 12.2099 16.2932 12.2549C16.7049 12.2998 17.0023 12.6701 16.9573 13.0818C16.6457 15.9358 14.1832 18.0647 11.3142 17.9607C8.44518 17.8566 6.14341 15.5548 6.03935 12.6858C5.93528 9.81681 8.06424 7.35433 10.9182 7.04268C11.3299 6.99772 11.7002 7.29507 11.7451 7.70683Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Finance</p>
                    </div>
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="pin-map-location"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 7.75C10.7572 7.75 9.75 8.75721 9.75 10C9.75 11.2428 10.7572 12.25 12 12.25C13.2428 12.25 14.25 11.2428 14.25 10C14.25 8.75721 13.2428 7.75 12 7.75ZM8.25 10C8.25 7.92879 9.92879 6.25 12 6.25C14.0712 6.25 15.75 7.92879 15.75 10C15.75 12.0712 14.0712 13.75 12 13.75C9.92879 13.75 8.25 12.0712 8.25 10Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 3.75C8.54821 3.75 5.75 6.54821 5.75 10C5.75 12.3384 7.33713 14.908 9.07546 16.9878C9.92687 18.0064 10.7804 18.8678 11.4218 19.4748C11.6434 19.6846 11.8392 19.8634 12 20.0073C12.1608 19.8634 12.3566 19.6846 12.5782 19.4748C13.2196 18.8678 14.0731 18.0064 14.9245 16.9878C16.6629 14.908 18.25 12.3384 18.25 10C18.25 6.54821 15.4518 3.75 12 3.75ZM12 21C11.5239 21.5795 11.5238 21.5794 11.5236 21.5793L11.5217 21.5777L11.5168 21.5737L11.4997 21.5595C11.4851 21.5472 11.464 21.5296 11.4368 21.5066C11.3826 21.4607 11.3043 21.3937 11.2053 21.3071C11.0075 21.134 10.7267 20.8823 10.3907 20.5643C9.71961 19.9291 8.82313 19.0248 7.92454 17.9497C6.16287 15.842 4.25 12.9116 4.25 10C4.25 5.71979 7.71979 2.25 12 2.25C16.2802 2.25 19.75 5.71979 19.75 10C19.75 12.9116 17.8371 15.842 16.0755 17.9497C15.1769 19.0248 14.2804 19.9291 13.6093 20.5643C13.2733 20.8823 12.9925 21.134 12.7947 21.3071C12.6957 21.3937 12.6174 21.4607 12.5632 21.5066C12.536 21.5296 12.5149 21.5472 12.5003 21.5595L12.4832 21.5737L12.4783 21.5777L12.4769 21.5789C12.4767 21.579 12.4761 21.5795 12 21ZM12 21L12.4761 21.5795C12.1994 21.8068 11.8003 21.8065 11.5236 21.5793L12 21Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Paris</p>
                    </div>
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="earth-world-globe"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.4842 2.5555C11.785 2.27065 12.2597 2.28351 12.5445 2.58423C17.4855 7.80049 17.4855 16.1995 12.5445 21.4158C12.2597 21.7165 11.785 21.7294 11.4842 21.4445C11.1835 21.1597 11.1706 20.685 11.4555 20.3842C15.8485 15.7465 15.8485 8.25351 11.4555 3.61577C11.1706 3.31505 11.1835 2.84035 11.4842 2.5555Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12.5158 2.5555C12.8165 2.84035 12.8294 3.31505 12.5445 3.61577C8.1515 8.25351 8.1515 15.7465 12.5445 20.3842C12.8294 20.685 12.8165 21.1597 12.5158 21.4445C12.2151 21.7294 11.7404 21.7165 11.4555 21.4158C6.51451 16.1995 6.51451 7.80049 11.4555 2.58423C11.7404 2.28351 12.2151 2.27065 12.5158 2.5555Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.25 3C11.25 2.58579 11.5858 2.25 12 2.25C17.3962 2.25 21.75 6.60379 21.75 12C21.75 17.3962 17.3962 21.75 12 21.75C11.5858 21.75 11.25 21.4142 11.25 21C11.25 20.5858 11.5858 20.25 12 20.25C16.5678 20.25 20.25 16.5678 20.25 12C20.25 7.43221 16.5678 3.75 12 3.75C11.5858 3.75 11.25 3.41421 11.25 3Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 3.75C7.43221 3.75 3.75 7.43221 3.75 12C3.75 16.5678 7.43221 20.25 12 20.25C12.4142 20.25 12.75 20.5858 12.75 21C12.75 21.4142 12.4142 21.75 12 21.75C6.60379 21.75 2.25 17.3962 2.25 12C2.25 6.60379 6.60379 2.25 12 2.25C12.4142 2.25 12.75 2.58579 12.75 3C12.75 3.41421 12.4142 3.75 12 3.75Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M2.75999 9C2.75999 8.58579 3.09578 8.25 3.50999 8.25H20.49C20.9042 8.25 21.24 8.58579 21.24 9C21.24 9.41421 20.9042 9.75 20.49 9.75H3.50999C3.09578 9.75 2.75999 9.41421 2.75999 9Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M2.75999 15C2.75999 14.5858 3.09578 14.25 3.50999 14.25H20.49C20.9042 14.25 21.24 14.5858 21.24 15C21.24 15.4142 20.9042 15.75 20.49 15.75H3.50999C3.09578 15.75 2.75999 15.4142 2.75999 15Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Hybrid</p>
                    </div>
                  </div>
                </div></a
              ><a class="item"
                ><div class="desktop">
                  <span> Senior Talent Acquisition Manager - Business </span>
                  <p>Corporate</p>
                  <p>Talent Acquisition</p>
                  <p>Paris</p>
                  <p>Hybrid</p>
                </div>
                <div class="mobile">
                  <span> Senior Talent Acquisition Manager - Business </span>
                  <div class="description">
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="users-2"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6 15.75C4.21421 15.75 2.75 17.2142 2.75 19C2.75 19.4142 2.41421 19.75 2 19.75C1.58579 19.75 1.25 19.4142 1.25 19C1.25 16.3858 3.38579 14.25 6 14.25H10C12.6142 14.25 14.75 16.3858 14.75 19C14.75 19.4142 14.4142 19.75 14 19.75C13.5858 19.75 13.25 19.4142 13.25 19C13.25 17.2142 11.7858 15.75 10 15.75H6Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M9.97947 6.54018C8.82861 5.48134 7.01733 5.46816 6.0496 6.51034C5.04291 7.59446 5.08987 9.24842 6.1496 10.3897C7.11984 11.4345 8.8389 11.419 9.98966 10.3504C11.0556 9.36056 11.0879 7.65878 9.97947 6.54018ZM11.0068 5.44708C9.35665 3.91831 6.57863 3.73619 4.9504 5.48966C3.35709 7.20554 3.51013 9.75158 5.0504 11.4103C6.68016 13.1655 9.3611 12.981 11.0103 11.4496C12.74 9.84344 12.7119 7.15488 11.0338 5.4731C11.0294 5.46869 11.025 5.46433 11.0205 5.46002C11.016 5.45564 11.0114 5.45132 11.0068 5.44708Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M15.25 14C15.25 13.5858 15.5858 13.25 16 13.25H19C21.1142 13.25 22.75 14.8858 22.75 17C22.75 17.4142 22.4142 17.75 22 17.75C21.5858 17.75 21.25 17.4142 21.25 17C21.25 15.7142 20.2858 14.75 19 14.75H16C15.5858 14.75 15.25 14.4142 15.25 14Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M18.7836 7.24441C18.0522 6.60027 16.919 6.64161 16.3303 7.23033C16.321 7.23962 16.3115 7.24867 16.3017 7.25747C15.6827 7.8146 15.6639 8.9276 16.3575 9.69828C16.9146 10.3173 18.0276 10.3361 18.7983 9.64253C19.4466 9.05901 19.4926 7.96805 18.7836 7.24441ZM19.7966 6.1379C18.5319 5.00456 16.4912 4.96427 15.2837 6.15573C13.9189 7.40013 14.14 9.47674 15.2425 10.7017C16.4854 12.0827 18.5724 11.8639 19.8017 10.7575C21.1474 9.54633 21.1069 7.45152 19.8352 6.17456C19.829 6.16826 19.8227 6.16204 19.8162 6.15591C19.8097 6.14977 19.8032 6.14376 19.7966 6.1379Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Corporate</p>
                    </div>
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="target"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M14.5712 9.42882C14.8641 9.72172 14.8641 10.1966 14.5712 10.4895L12.0601 13.0005C11.7672 13.2934 11.2924 13.2934 10.9995 13.0005C10.7066 12.7076 10.7066 12.2328 10.9995 11.9399L13.5105 9.42882C13.8034 9.13593 14.2783 9.13593 14.5712 9.42882Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M18.1227 1.25553C18.3607 1.29417 18.5656 1.44486 18.6734 1.66053L19.8951 4.1049L22.3395 5.32663C22.5551 5.43442 22.7058 5.63932 22.7445 5.87731C22.7831 6.1153 22.705 6.35735 22.5345 6.52783L18.5328 10.5295C18.3922 10.6702 18.2014 10.7492 18.0025 10.7492H14.0008C13.5866 10.7492 13.2508 10.4134 13.2508 9.99917V5.9975C13.2508 5.79859 13.3298 5.60782 13.4705 5.46717L17.4722 1.46551C17.6426 1.29502 17.8847 1.21689 18.1227 1.25553ZM14.7508 6.30816V9.24917H17.6918L20.7379 6.20308L19.0007 5.33482C18.8555 5.26223 18.7378 5.14448 18.6652 4.99926L17.7969 3.26208L14.7508 6.30816Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.7482 3.92571C11.7735 4.33915 11.459 4.69487 11.0455 4.72025C6.88357 4.9757 3.66447 8.46941 3.74982 12.6383C3.83517 16.8072 7.19457 20.1663 11.3635 20.2511C15.5324 20.336 19.0258 17.1165 19.2807 12.9546C19.3061 12.5411 19.6618 12.2265 20.0752 12.2518C20.4886 12.2772 20.8033 12.6328 20.7779 13.0463C20.4737 18.0114 16.3063 21.8521 11.3329 21.7508C6.35959 21.6496 2.35195 17.6424 2.25013 12.669C2.14831 7.69567 5.98858 3.5278 10.9536 3.22307C11.3671 3.19769 11.7228 3.51228 11.7482 3.92571Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.7451 7.70683C11.7901 8.1186 11.4928 8.48885 11.081 8.53382C9.00869 8.76011 7.4628 10.5482 7.53836 12.6314C7.61393 14.7147 9.2853 16.3861 11.3686 16.4616C13.4518 16.5372 15.2399 14.9913 15.4662 12.919C15.5111 12.5072 15.8814 12.2099 16.2932 12.2549C16.7049 12.2998 17.0023 12.6701 16.9573 13.0818C16.6457 15.9358 14.1832 18.0647 11.3142 17.9607C8.44518 17.8566 6.14341 15.5548 6.03935 12.6858C5.93528 9.81681 8.06424 7.35433 10.9182 7.04268C11.3299 6.99772 11.7002 7.29507 11.7451 7.70683Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Talent Acquisition</p>
                    </div>
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="pin-map-location"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 7.75C10.7572 7.75 9.75 8.75721 9.75 10C9.75 11.2428 10.7572 12.25 12 12.25C13.2428 12.25 14.25 11.2428 14.25 10C14.25 8.75721 13.2428 7.75 12 7.75ZM8.25 10C8.25 7.92879 9.92879 6.25 12 6.25C14.0712 6.25 15.75 7.92879 15.75 10C15.75 12.0712 14.0712 13.75 12 13.75C9.92879 13.75 8.25 12.0712 8.25 10Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 3.75C8.54821 3.75 5.75 6.54821 5.75 10C5.75 12.3384 7.33713 14.908 9.07546 16.9878C9.92687 18.0064 10.7804 18.8678 11.4218 19.4748C11.6434 19.6846 11.8392 19.8634 12 20.0073C12.1608 19.8634 12.3566 19.6846 12.5782 19.4748C13.2196 18.8678 14.0731 18.0064 14.9245 16.9878C16.6629 14.908 18.25 12.3384 18.25 10C18.25 6.54821 15.4518 3.75 12 3.75ZM12 21C11.5239 21.5795 11.5238 21.5794 11.5236 21.5793L11.5217 21.5777L11.5168 21.5737L11.4997 21.5595C11.4851 21.5472 11.464 21.5296 11.4368 21.5066C11.3826 21.4607 11.3043 21.3937 11.2053 21.3071C11.0075 21.134 10.7267 20.8823 10.3907 20.5643C9.71961 19.9291 8.82313 19.0248 7.92454 17.9497C6.16287 15.842 4.25 12.9116 4.25 10C4.25 5.71979 7.71979 2.25 12 2.25C16.2802 2.25 19.75 5.71979 19.75 10C19.75 12.9116 17.8371 15.842 16.0755 17.9497C15.1769 19.0248 14.2804 19.9291 13.6093 20.5643C13.2733 20.8823 12.9925 21.134 12.7947 21.3071C12.6957 21.3937 12.6174 21.4607 12.5632 21.5066C12.536 21.5296 12.5149 21.5472 12.5003 21.5595L12.4832 21.5737L12.4783 21.5777L12.4769 21.5789C12.4767 21.579 12.4761 21.5795 12 21ZM12 21L12.4761 21.5795C12.1994 21.8068 11.8003 21.8065 11.5236 21.5793L12 21Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Paris</p>
                    </div>
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="earth-world-globe"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.4842 2.5555C11.785 2.27065 12.2597 2.28351 12.5445 2.58423C17.4855 7.80049 17.4855 16.1995 12.5445 21.4158C12.2597 21.7165 11.785 21.7294 11.4842 21.4445C11.1835 21.1597 11.1706 20.685 11.4555 20.3842C15.8485 15.7465 15.8485 8.25351 11.4555 3.61577C11.1706 3.31505 11.1835 2.84035 11.4842 2.5555Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12.5158 2.5555C12.8165 2.84035 12.8294 3.31505 12.5445 3.61577C8.1515 8.25351 8.1515 15.7465 12.5445 20.3842C12.8294 20.685 12.8165 21.1597 12.5158 21.4445C12.2151 21.7294 11.7404 21.7165 11.4555 21.4158C6.51451 16.1995 6.51451 7.80049 11.4555 2.58423C11.7404 2.28351 12.2151 2.27065 12.5158 2.5555Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.25 3C11.25 2.58579 11.5858 2.25 12 2.25C17.3962 2.25 21.75 6.60379 21.75 12C21.75 17.3962 17.3962 21.75 12 21.75C11.5858 21.75 11.25 21.4142 11.25 21C11.25 20.5858 11.5858 20.25 12 20.25C16.5678 20.25 20.25 16.5678 20.25 12C20.25 7.43221 16.5678 3.75 12 3.75C11.5858 3.75 11.25 3.41421 11.25 3Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 3.75C7.43221 3.75 3.75 7.43221 3.75 12C3.75 16.5678 7.43221 20.25 12 20.25C12.4142 20.25 12.75 20.5858 12.75 21C12.75 21.4142 12.4142 21.75 12 21.75C6.60379 21.75 2.25 17.3962 2.25 12C2.25 6.60379 6.60379 2.25 12 2.25C12.4142 2.25 12.75 2.58579 12.75 3C12.75 3.41421 12.4142 3.75 12 3.75Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M2.75999 9C2.75999 8.58579 3.09578 8.25 3.50999 8.25H20.49C20.9042 8.25 21.24 8.58579 21.24 9C21.24 9.41421 20.9042 9.75 20.49 9.75H3.50999C3.09578 9.75 2.75999 9.41421 2.75999 9Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M2.75999 15C2.75999 14.5858 3.09578 14.25 3.50999 14.25H20.49C20.9042 14.25 21.24 14.5858 21.24 15C21.24 15.4142 20.9042 15.75 20.49 15.75H3.50999C3.09578 15.75 2.75999 15.4142 2.75999 15Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Hybrid</p>
                    </div>
                  </div>
                </div></a
              ><a class="item"
                ><div class="desktop">
                  <span> Senior 3D Environment Game Artist </span>
                  <p>Gaming</p>
                  <p>Art &amp; Design</p>
                  <p>Paris</p>
                  <p>Remote</p>
                </div>
                <div class="mobile">
                  <span> Senior 3D Environment Game Artist </span>
                  <div class="description">
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="users-2"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6 15.75C4.21421 15.75 2.75 17.2142 2.75 19C2.75 19.4142 2.41421 19.75 2 19.75C1.58579 19.75 1.25 19.4142 1.25 19C1.25 16.3858 3.38579 14.25 6 14.25H10C12.6142 14.25 14.75 16.3858 14.75 19C14.75 19.4142 14.4142 19.75 14 19.75C13.5858 19.75 13.25 19.4142 13.25 19C13.25 17.2142 11.7858 15.75 10 15.75H6Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M9.97947 6.54018C8.82861 5.48134 7.01733 5.46816 6.0496 6.51034C5.04291 7.59446 5.08987 9.24842 6.1496 10.3897C7.11984 11.4345 8.8389 11.419 9.98966 10.3504C11.0556 9.36056 11.0879 7.65878 9.97947 6.54018ZM11.0068 5.44708C9.35665 3.91831 6.57863 3.73619 4.9504 5.48966C3.35709 7.20554 3.51013 9.75158 5.0504 11.4103C6.68016 13.1655 9.3611 12.981 11.0103 11.4496C12.74 9.84344 12.7119 7.15488 11.0338 5.4731C11.0294 5.46869 11.025 5.46433 11.0205 5.46002C11.016 5.45564 11.0114 5.45132 11.0068 5.44708Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M15.25 14C15.25 13.5858 15.5858 13.25 16 13.25H19C21.1142 13.25 22.75 14.8858 22.75 17C22.75 17.4142 22.4142 17.75 22 17.75C21.5858 17.75 21.25 17.4142 21.25 17C21.25 15.7142 20.2858 14.75 19 14.75H16C15.5858 14.75 15.25 14.4142 15.25 14Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M18.7836 7.24441C18.0522 6.60027 16.919 6.64161 16.3303 7.23033C16.321 7.23962 16.3115 7.24867 16.3017 7.25747C15.6827 7.8146 15.6639 8.9276 16.3575 9.69828C16.9146 10.3173 18.0276 10.3361 18.7983 9.64253C19.4466 9.05901 19.4926 7.96805 18.7836 7.24441ZM19.7966 6.1379C18.5319 5.00456 16.4912 4.96427 15.2837 6.15573C13.9189 7.40013 14.14 9.47674 15.2425 10.7017C16.4854 12.0827 18.5724 11.8639 19.8017 10.7575C21.1474 9.54633 21.1069 7.45152 19.8352 6.17456C19.829 6.16826 19.8227 6.16204 19.8162 6.15591C19.8097 6.14977 19.8032 6.14376 19.7966 6.1379Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Gaming</p>
                    </div>
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="target"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M14.5712 9.42882C14.8641 9.72172 14.8641 10.1966 14.5712 10.4895L12.0601 13.0005C11.7672 13.2934 11.2924 13.2934 10.9995 13.0005C10.7066 12.7076 10.7066 12.2328 10.9995 11.9399L13.5105 9.42882C13.8034 9.13593 14.2783 9.13593 14.5712 9.42882Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M18.1227 1.25553C18.3607 1.29417 18.5656 1.44486 18.6734 1.66053L19.8951 4.1049L22.3395 5.32663C22.5551 5.43442 22.7058 5.63932 22.7445 5.87731C22.7831 6.1153 22.705 6.35735 22.5345 6.52783L18.5328 10.5295C18.3922 10.6702 18.2014 10.7492 18.0025 10.7492H14.0008C13.5866 10.7492 13.2508 10.4134 13.2508 9.99917V5.9975C13.2508 5.79859 13.3298 5.60782 13.4705 5.46717L17.4722 1.46551C17.6426 1.29502 17.8847 1.21689 18.1227 1.25553ZM14.7508 6.30816V9.24917H17.6918L20.7379 6.20308L19.0007 5.33482C18.8555 5.26223 18.7378 5.14448 18.6652 4.99926L17.7969 3.26208L14.7508 6.30816Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.7482 3.92571C11.7735 4.33915 11.459 4.69487 11.0455 4.72025C6.88357 4.9757 3.66447 8.46941 3.74982 12.6383C3.83517 16.8072 7.19457 20.1663 11.3635 20.2511C15.5324 20.336 19.0258 17.1165 19.2807 12.9546C19.3061 12.5411 19.6618 12.2265 20.0752 12.2518C20.4886 12.2772 20.8033 12.6328 20.7779 13.0463C20.4737 18.0114 16.3063 21.8521 11.3329 21.7508C6.35959 21.6496 2.35195 17.6424 2.25013 12.669C2.14831 7.69567 5.98858 3.5278 10.9536 3.22307C11.3671 3.19769 11.7228 3.51228 11.7482 3.92571Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.7451 7.70683C11.7901 8.1186 11.4928 8.48885 11.081 8.53382C9.00869 8.76011 7.4628 10.5482 7.53836 12.6314C7.61393 14.7147 9.2853 16.3861 11.3686 16.4616C13.4518 16.5372 15.2399 14.9913 15.4662 12.919C15.5111 12.5072 15.8814 12.2099 16.2932 12.2549C16.7049 12.2998 17.0023 12.6701 16.9573 13.0818C16.6457 15.9358 14.1832 18.0647 11.3142 17.9607C8.44518 17.8566 6.14341 15.5548 6.03935 12.6858C5.93528 9.81681 8.06424 7.35433 10.9182 7.04268C11.3299 6.99772 11.7002 7.29507 11.7451 7.70683Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Art &amp; Design</p>
                    </div>
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="pin-map-location"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 7.75C10.7572 7.75 9.75 8.75721 9.75 10C9.75 11.2428 10.7572 12.25 12 12.25C13.2428 12.25 14.25 11.2428 14.25 10C14.25 8.75721 13.2428 7.75 12 7.75ZM8.25 10C8.25 7.92879 9.92879 6.25 12 6.25C14.0712 6.25 15.75 7.92879 15.75 10C15.75 12.0712 14.0712 13.75 12 13.75C9.92879 13.75 8.25 12.0712 8.25 10Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 3.75C8.54821 3.75 5.75 6.54821 5.75 10C5.75 12.3384 7.33713 14.908 9.07546 16.9878C9.92687 18.0064 10.7804 18.8678 11.4218 19.4748C11.6434 19.6846 11.8392 19.8634 12 20.0073C12.1608 19.8634 12.3566 19.6846 12.5782 19.4748C13.2196 18.8678 14.0731 18.0064 14.9245 16.9878C16.6629 14.908 18.25 12.3384 18.25 10C18.25 6.54821 15.4518 3.75 12 3.75ZM12 21C11.5239 21.5795 11.5238 21.5794 11.5236 21.5793L11.5217 21.5777L11.5168 21.5737L11.4997 21.5595C11.4851 21.5472 11.464 21.5296 11.4368 21.5066C11.3826 21.4607 11.3043 21.3937 11.2053 21.3071C11.0075 21.134 10.7267 20.8823 10.3907 20.5643C9.71961 19.9291 8.82313 19.0248 7.92454 17.9497C6.16287 15.842 4.25 12.9116 4.25 10C4.25 5.71979 7.71979 2.25 12 2.25C16.2802 2.25 19.75 5.71979 19.75 10C19.75 12.9116 17.8371 15.842 16.0755 17.9497C15.1769 19.0248 14.2804 19.9291 13.6093 20.5643C13.2733 20.8823 12.9925 21.134 12.7947 21.3071C12.6957 21.3937 12.6174 21.4607 12.5632 21.5066C12.536 21.5296 12.5149 21.5472 12.5003 21.5595L12.4832 21.5737L12.4783 21.5777L12.4769 21.5789C12.4767 21.579 12.4761 21.5795 12 21ZM12 21L12.4761 21.5795C12.1994 21.8068 11.8003 21.8065 11.5236 21.5793L12 21Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Paris</p>
                    </div>
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="earth-world-globe"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.4842 2.5555C11.785 2.27065 12.2597 2.28351 12.5445 2.58423C17.4855 7.80049 17.4855 16.1995 12.5445 21.4158C12.2597 21.7165 11.785 21.7294 11.4842 21.4445C11.1835 21.1597 11.1706 20.685 11.4555 20.3842C15.8485 15.7465 15.8485 8.25351 11.4555 3.61577C11.1706 3.31505 11.1835 2.84035 11.4842 2.5555Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12.5158 2.5555C12.8165 2.84035 12.8294 3.31505 12.5445 3.61577C8.1515 8.25351 8.1515 15.7465 12.5445 20.3842C12.8294 20.685 12.8165 21.1597 12.5158 21.4445C12.2151 21.7294 11.7404 21.7165 11.4555 21.4158C6.51451 16.1995 6.51451 7.80049 11.4555 2.58423C11.7404 2.28351 12.2151 2.27065 12.5158 2.5555Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.25 3C11.25 2.58579 11.5858 2.25 12 2.25C17.3962 2.25 21.75 6.60379 21.75 12C21.75 17.3962 17.3962 21.75 12 21.75C11.5858 21.75 11.25 21.4142 11.25 21C11.25 20.5858 11.5858 20.25 12 20.25C16.5678 20.25 20.25 16.5678 20.25 12C20.25 7.43221 16.5678 3.75 12 3.75C11.5858 3.75 11.25 3.41421 11.25 3Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 3.75C7.43221 3.75 3.75 7.43221 3.75 12C3.75 16.5678 7.43221 20.25 12 20.25C12.4142 20.25 12.75 20.5858 12.75 21C12.75 21.4142 12.4142 21.75 12 21.75C6.60379 21.75 2.25 17.3962 2.25 12C2.25 6.60379 6.60379 2.25 12 2.25C12.4142 2.25 12.75 2.58579 12.75 3C12.75 3.41421 12.4142 3.75 12 3.75Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M2.75999 9C2.75999 8.58579 3.09578 8.25 3.50999 8.25H20.49C20.9042 8.25 21.24 8.58579 21.24 9C21.24 9.41421 20.9042 9.75 20.49 9.75H3.50999C3.09578 9.75 2.75999 9.41421 2.75999 9Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M2.75999 15C2.75999 14.5858 3.09578 14.25 3.50999 14.25H20.49C20.9042 14.25 21.24 14.5858 21.24 15C21.24 15.4142 20.9042 15.75 20.49 15.75H3.50999C3.09578 15.75 2.75999 15.4142 2.75999 15Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Remote</p>
                    </div>
                  </div>
                </div></a
              ><a class="item"
                ><div class="desktop">
                  <span> Community Manager - Mob Control </span>
                  <p>Gaming</p>
                  <p>Marketing</p>
                  <p>Barcelona</p>
                  <p>Remote</p>
                </div>
                <div class="mobile">
                  <span> Community Manager - Mob Control </span>
                  <div class="description">
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="users-2"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6 15.75C4.21421 15.75 2.75 17.2142 2.75 19C2.75 19.4142 2.41421 19.75 2 19.75C1.58579 19.75 1.25 19.4142 1.25 19C1.25 16.3858 3.38579 14.25 6 14.25H10C12.6142 14.25 14.75 16.3858 14.75 19C14.75 19.4142 14.4142 19.75 14 19.75C13.5858 19.75 13.25 19.4142 13.25 19C13.25 17.2142 11.7858 15.75 10 15.75H6Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M9.97947 6.54018C8.82861 5.48134 7.01733 5.46816 6.0496 6.51034C5.04291 7.59446 5.08987 9.24842 6.1496 10.3897C7.11984 11.4345 8.8389 11.419 9.98966 10.3504C11.0556 9.36056 11.0879 7.65878 9.97947 6.54018ZM11.0068 5.44708C9.35665 3.91831 6.57863 3.73619 4.9504 5.48966C3.35709 7.20554 3.51013 9.75158 5.0504 11.4103C6.68016 13.1655 9.3611 12.981 11.0103 11.4496C12.74 9.84344 12.7119 7.15488 11.0338 5.4731C11.0294 5.46869 11.025 5.46433 11.0205 5.46002C11.016 5.45564 11.0114 5.45132 11.0068 5.44708Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M15.25 14C15.25 13.5858 15.5858 13.25 16 13.25H19C21.1142 13.25 22.75 14.8858 22.75 17C22.75 17.4142 22.4142 17.75 22 17.75C21.5858 17.75 21.25 17.4142 21.25 17C21.25 15.7142 20.2858 14.75 19 14.75H16C15.5858 14.75 15.25 14.4142 15.25 14Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M18.7836 7.24441C18.0522 6.60027 16.919 6.64161 16.3303 7.23033C16.321 7.23962 16.3115 7.24867 16.3017 7.25747C15.6827 7.8146 15.6639 8.9276 16.3575 9.69828C16.9146 10.3173 18.0276 10.3361 18.7983 9.64253C19.4466 9.05901 19.4926 7.96805 18.7836 7.24441ZM19.7966 6.1379C18.5319 5.00456 16.4912 4.96427 15.2837 6.15573C13.9189 7.40013 14.14 9.47674 15.2425 10.7017C16.4854 12.0827 18.5724 11.8639 19.8017 10.7575C21.1474 9.54633 21.1069 7.45152 19.8352 6.17456C19.829 6.16826 19.8227 6.16204 19.8162 6.15591C19.8097 6.14977 19.8032 6.14376 19.7966 6.1379Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Gaming</p>
                    </div>
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="target"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M14.5712 9.42882C14.8641 9.72172 14.8641 10.1966 14.5712 10.4895L12.0601 13.0005C11.7672 13.2934 11.2924 13.2934 10.9995 13.0005C10.7066 12.7076 10.7066 12.2328 10.9995 11.9399L13.5105 9.42882C13.8034 9.13593 14.2783 9.13593 14.5712 9.42882Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M18.1227 1.25553C18.3607 1.29417 18.5656 1.44486 18.6734 1.66053L19.8951 4.1049L22.3395 5.32663C22.5551 5.43442 22.7058 5.63932 22.7445 5.87731C22.7831 6.1153 22.705 6.35735 22.5345 6.52783L18.5328 10.5295C18.3922 10.6702 18.2014 10.7492 18.0025 10.7492H14.0008C13.5866 10.7492 13.2508 10.4134 13.2508 9.99917V5.9975C13.2508 5.79859 13.3298 5.60782 13.4705 5.46717L17.4722 1.46551C17.6426 1.29502 17.8847 1.21689 18.1227 1.25553ZM14.7508 6.30816V9.24917H17.6918L20.7379 6.20308L19.0007 5.33482C18.8555 5.26223 18.7378 5.14448 18.6652 4.99926L17.7969 3.26208L14.7508 6.30816Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.7482 3.92571C11.7735 4.33915 11.459 4.69487 11.0455 4.72025C6.88357 4.9757 3.66447 8.46941 3.74982 12.6383C3.83517 16.8072 7.19457 20.1663 11.3635 20.2511C15.5324 20.336 19.0258 17.1165 19.2807 12.9546C19.3061 12.5411 19.6618 12.2265 20.0752 12.2518C20.4886 12.2772 20.8033 12.6328 20.7779 13.0463C20.4737 18.0114 16.3063 21.8521 11.3329 21.7508C6.35959 21.6496 2.35195 17.6424 2.25013 12.669C2.14831 7.69567 5.98858 3.5278 10.9536 3.22307C11.3671 3.19769 11.7228 3.51228 11.7482 3.92571Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.7451 7.70683C11.7901 8.1186 11.4928 8.48885 11.081 8.53382C9.00869 8.76011 7.4628 10.5482 7.53836 12.6314C7.61393 14.7147 9.2853 16.3861 11.3686 16.4616C13.4518 16.5372 15.2399 14.9913 15.4662 12.919C15.5111 12.5072 15.8814 12.2099 16.2932 12.2549C16.7049 12.2998 17.0023 12.6701 16.9573 13.0818C16.6457 15.9358 14.1832 18.0647 11.3142 17.9607C8.44518 17.8566 6.14341 15.5548 6.03935 12.6858C5.93528 9.81681 8.06424 7.35433 10.9182 7.04268C11.3299 6.99772 11.7002 7.29507 11.7451 7.70683Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Marketing</p>
                    </div>
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="pin-map-location"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 7.75C10.7572 7.75 9.75 8.75721 9.75 10C9.75 11.2428 10.7572 12.25 12 12.25C13.2428 12.25 14.25 11.2428 14.25 10C14.25 8.75721 13.2428 7.75 12 7.75ZM8.25 10C8.25 7.92879 9.92879 6.25 12 6.25C14.0712 6.25 15.75 7.92879 15.75 10C15.75 12.0712 14.0712 13.75 12 13.75C9.92879 13.75 8.25 12.0712 8.25 10Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 3.75C8.54821 3.75 5.75 6.54821 5.75 10C5.75 12.3384 7.33713 14.908 9.07546 16.9878C9.92687 18.0064 10.7804 18.8678 11.4218 19.4748C11.6434 19.6846 11.8392 19.8634 12 20.0073C12.1608 19.8634 12.3566 19.6846 12.5782 19.4748C13.2196 18.8678 14.0731 18.0064 14.9245 16.9878C16.6629 14.908 18.25 12.3384 18.25 10C18.25 6.54821 15.4518 3.75 12 3.75ZM12 21C11.5239 21.5795 11.5238 21.5794 11.5236 21.5793L11.5217 21.5777L11.5168 21.5737L11.4997 21.5595C11.4851 21.5472 11.464 21.5296 11.4368 21.5066C11.3826 21.4607 11.3043 21.3937 11.2053 21.3071C11.0075 21.134 10.7267 20.8823 10.3907 20.5643C9.71961 19.9291 8.82313 19.0248 7.92454 17.9497C6.16287 15.842 4.25 12.9116 4.25 10C4.25 5.71979 7.71979 2.25 12 2.25C16.2802 2.25 19.75 5.71979 19.75 10C19.75 12.9116 17.8371 15.842 16.0755 17.9497C15.1769 19.0248 14.2804 19.9291 13.6093 20.5643C13.2733 20.8823 12.9925 21.134 12.7947 21.3071C12.6957 21.3937 12.6174 21.4607 12.5632 21.5066C12.536 21.5296 12.5149 21.5472 12.5003 21.5595L12.4832 21.5737L12.4783 21.5777L12.4769 21.5789C12.4767 21.579 12.4761 21.5795 12 21ZM12 21L12.4761 21.5795C12.1994 21.8068 11.8003 21.8065 11.5236 21.5793L12 21Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Barcelona</p>
                    </div>
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="earth-world-globe"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.4842 2.5555C11.785 2.27065 12.2597 2.28351 12.5445 2.58423C17.4855 7.80049 17.4855 16.1995 12.5445 21.4158C12.2597 21.7165 11.785 21.7294 11.4842 21.4445C11.1835 21.1597 11.1706 20.685 11.4555 20.3842C15.8485 15.7465 15.8485 8.25351 11.4555 3.61577C11.1706 3.31505 11.1835 2.84035 11.4842 2.5555Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12.5158 2.5555C12.8165 2.84035 12.8294 3.31505 12.5445 3.61577C8.1515 8.25351 8.1515 15.7465 12.5445 20.3842C12.8294 20.685 12.8165 21.1597 12.5158 21.4445C12.2151 21.7294 11.7404 21.7165 11.4555 21.4158C6.51451 16.1995 6.51451 7.80049 11.4555 2.58423C11.7404 2.28351 12.2151 2.27065 12.5158 2.5555Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.25 3C11.25 2.58579 11.5858 2.25 12 2.25C17.3962 2.25 21.75 6.60379 21.75 12C21.75 17.3962 17.3962 21.75 12 21.75C11.5858 21.75 11.25 21.4142 11.25 21C11.25 20.5858 11.5858 20.25 12 20.25C16.5678 20.25 20.25 16.5678 20.25 12C20.25 7.43221 16.5678 3.75 12 3.75C11.5858 3.75 11.25 3.41421 11.25 3Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 3.75C7.43221 3.75 3.75 7.43221 3.75 12C3.75 16.5678 7.43221 20.25 12 20.25C12.4142 20.25 12.75 20.5858 12.75 21C12.75 21.4142 12.4142 21.75 12 21.75C6.60379 21.75 2.25 17.3962 2.25 12C2.25 6.60379 6.60379 2.25 12 2.25C12.4142 2.25 12.75 2.58579 12.75 3C12.75 3.41421 12.4142 3.75 12 3.75Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M2.75999 9C2.75999 8.58579 3.09578 8.25 3.50999 8.25H20.49C20.9042 8.25 21.24 8.58579 21.24 9C21.24 9.41421 20.9042 9.75 20.49 9.75H3.50999C3.09578 9.75 2.75999 9.41421 2.75999 9Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M2.75999 15C2.75999 14.5858 3.09578 14.25 3.50999 14.25H20.49C20.9042 14.25 21.24 14.5858 21.24 15C21.24 15.4142 20.9042 15.75 20.49 15.75H3.50999C3.09578 15.75 2.75999 15.4142 2.75999 15Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Remote</p>
                    </div>
                  </div>
                </div></a
              ><a class="item"
                ><div class="desktop">
                  <span> IT Manager </span>
                  <p>Corporate</p>
                  <p>People</p>
                  <p>Paris</p>
                  <p>On-site</p>
                </div>
                <div class="mobile">
                  <span> IT Manager </span>
                  <div class="description">
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="users-2"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6 15.75C4.21421 15.75 2.75 17.2142 2.75 19C2.75 19.4142 2.41421 19.75 2 19.75C1.58579 19.75 1.25 19.4142 1.25 19C1.25 16.3858 3.38579 14.25 6 14.25H10C12.6142 14.25 14.75 16.3858 14.75 19C14.75 19.4142 14.4142 19.75 14 19.75C13.5858 19.75 13.25 19.4142 13.25 19C13.25 17.2142 11.7858 15.75 10 15.75H6Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M9.97947 6.54018C8.82861 5.48134 7.01733 5.46816 6.0496 6.51034C5.04291 7.59446 5.08987 9.24842 6.1496 10.3897C7.11984 11.4345 8.8389 11.419 9.98966 10.3504C11.0556 9.36056 11.0879 7.65878 9.97947 6.54018ZM11.0068 5.44708C9.35665 3.91831 6.57863 3.73619 4.9504 5.48966C3.35709 7.20554 3.51013 9.75158 5.0504 11.4103C6.68016 13.1655 9.3611 12.981 11.0103 11.4496C12.74 9.84344 12.7119 7.15488 11.0338 5.4731C11.0294 5.46869 11.025 5.46433 11.0205 5.46002C11.016 5.45564 11.0114 5.45132 11.0068 5.44708Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M15.25 14C15.25 13.5858 15.5858 13.25 16 13.25H19C21.1142 13.25 22.75 14.8858 22.75 17C22.75 17.4142 22.4142 17.75 22 17.75C21.5858 17.75 21.25 17.4142 21.25 17C21.25 15.7142 20.2858 14.75 19 14.75H16C15.5858 14.75 15.25 14.4142 15.25 14Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M18.7836 7.24441C18.0522 6.60027 16.919 6.64161 16.3303 7.23033C16.321 7.23962 16.3115 7.24867 16.3017 7.25747C15.6827 7.8146 15.6639 8.9276 16.3575 9.69828C16.9146 10.3173 18.0276 10.3361 18.7983 9.64253C19.4466 9.05901 19.4926 7.96805 18.7836 7.24441ZM19.7966 6.1379C18.5319 5.00456 16.4912 4.96427 15.2837 6.15573C13.9189 7.40013 14.14 9.47674 15.2425 10.7017C16.4854 12.0827 18.5724 11.8639 19.8017 10.7575C21.1474 9.54633 21.1069 7.45152 19.8352 6.17456C19.829 6.16826 19.8227 6.16204 19.8162 6.15591C19.8097 6.14977 19.8032 6.14376 19.7966 6.1379Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Corporate</p>
                    </div>
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="target"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M14.5712 9.42882C14.8641 9.72172 14.8641 10.1966 14.5712 10.4895L12.0601 13.0005C11.7672 13.2934 11.2924 13.2934 10.9995 13.0005C10.7066 12.7076 10.7066 12.2328 10.9995 11.9399L13.5105 9.42882C13.8034 9.13593 14.2783 9.13593 14.5712 9.42882Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M18.1227 1.25553C18.3607 1.29417 18.5656 1.44486 18.6734 1.66053L19.8951 4.1049L22.3395 5.32663C22.5551 5.43442 22.7058 5.63932 22.7445 5.87731C22.7831 6.1153 22.705 6.35735 22.5345 6.52783L18.5328 10.5295C18.3922 10.6702 18.2014 10.7492 18.0025 10.7492H14.0008C13.5866 10.7492 13.2508 10.4134 13.2508 9.99917V5.9975C13.2508 5.79859 13.3298 5.60782 13.4705 5.46717L17.4722 1.46551C17.6426 1.29502 17.8847 1.21689 18.1227 1.25553ZM14.7508 6.30816V9.24917H17.6918L20.7379 6.20308L19.0007 5.33482C18.8555 5.26223 18.7378 5.14448 18.6652 4.99926L17.7969 3.26208L14.7508 6.30816Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.7482 3.92571C11.7735 4.33915 11.459 4.69487 11.0455 4.72025C6.88357 4.9757 3.66447 8.46941 3.74982 12.6383C3.83517 16.8072 7.19457 20.1663 11.3635 20.2511C15.5324 20.336 19.0258 17.1165 19.2807 12.9546C19.3061 12.5411 19.6618 12.2265 20.0752 12.2518C20.4886 12.2772 20.8033 12.6328 20.7779 13.0463C20.4737 18.0114 16.3063 21.8521 11.3329 21.7508C6.35959 21.6496 2.35195 17.6424 2.25013 12.669C2.14831 7.69567 5.98858 3.5278 10.9536 3.22307C11.3671 3.19769 11.7228 3.51228 11.7482 3.92571Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.7451 7.70683C11.7901 8.1186 11.4928 8.48885 11.081 8.53382C9.00869 8.76011 7.4628 10.5482 7.53836 12.6314C7.61393 14.7147 9.2853 16.3861 11.3686 16.4616C13.4518 16.5372 15.2399 14.9913 15.4662 12.919C15.5111 12.5072 15.8814 12.2099 16.2932 12.2549C16.7049 12.2998 17.0023 12.6701 16.9573 13.0818C16.6457 15.9358 14.1832 18.0647 11.3142 17.9607C8.44518 17.8566 6.14341 15.5548 6.03935 12.6858C5.93528 9.81681 8.06424 7.35433 10.9182 7.04268C11.3299 6.99772 11.7002 7.29507 11.7451 7.70683Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>People</p>
                    </div>
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="pin-map-location"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 7.75C10.7572 7.75 9.75 8.75721 9.75 10C9.75 11.2428 10.7572 12.25 12 12.25C13.2428 12.25 14.25 11.2428 14.25 10C14.25 8.75721 13.2428 7.75 12 7.75ZM8.25 10C8.25 7.92879 9.92879 6.25 12 6.25C14.0712 6.25 15.75 7.92879 15.75 10C15.75 12.0712 14.0712 13.75 12 13.75C9.92879 13.75 8.25 12.0712 8.25 10Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 3.75C8.54821 3.75 5.75 6.54821 5.75 10C5.75 12.3384 7.33713 14.908 9.07546 16.9878C9.92687 18.0064 10.7804 18.8678 11.4218 19.4748C11.6434 19.6846 11.8392 19.8634 12 20.0073C12.1608 19.8634 12.3566 19.6846 12.5782 19.4748C13.2196 18.8678 14.0731 18.0064 14.9245 16.9878C16.6629 14.908 18.25 12.3384 18.25 10C18.25 6.54821 15.4518 3.75 12 3.75ZM12 21C11.5239 21.5795 11.5238 21.5794 11.5236 21.5793L11.5217 21.5777L11.5168 21.5737L11.4997 21.5595C11.4851 21.5472 11.464 21.5296 11.4368 21.5066C11.3826 21.4607 11.3043 21.3937 11.2053 21.3071C11.0075 21.134 10.7267 20.8823 10.3907 20.5643C9.71961 19.9291 8.82313 19.0248 7.92454 17.9497C6.16287 15.842 4.25 12.9116 4.25 10C4.25 5.71979 7.71979 2.25 12 2.25C16.2802 2.25 19.75 5.71979 19.75 10C19.75 12.9116 17.8371 15.842 16.0755 17.9497C15.1769 19.0248 14.2804 19.9291 13.6093 20.5643C13.2733 20.8823 12.9925 21.134 12.7947 21.3071C12.6957 21.3937 12.6174 21.4607 12.5632 21.5066C12.536 21.5296 12.5149 21.5472 12.5003 21.5595L12.4832 21.5737L12.4783 21.5777L12.4769 21.5789C12.4767 21.579 12.4761 21.5795 12 21ZM12 21L12.4761 21.5795C12.1994 21.8068 11.8003 21.8065 11.5236 21.5793L12 21Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Paris</p>
                    </div>
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="earth-world-globe"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.4842 2.5555C11.785 2.27065 12.2597 2.28351 12.5445 2.58423C17.4855 7.80049 17.4855 16.1995 12.5445 21.4158C12.2597 21.7165 11.785 21.7294 11.4842 21.4445C11.1835 21.1597 11.1706 20.685 11.4555 20.3842C15.8485 15.7465 15.8485 8.25351 11.4555 3.61577C11.1706 3.31505 11.1835 2.84035 11.4842 2.5555Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12.5158 2.5555C12.8165 2.84035 12.8294 3.31505 12.5445 3.61577C8.1515 8.25351 8.1515 15.7465 12.5445 20.3842C12.8294 20.685 12.8165 21.1597 12.5158 21.4445C12.2151 21.7294 11.7404 21.7165 11.4555 21.4158C6.51451 16.1995 6.51451 7.80049 11.4555 2.58423C11.7404 2.28351 12.2151 2.27065 12.5158 2.5555Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.25 3C11.25 2.58579 11.5858 2.25 12 2.25C17.3962 2.25 21.75 6.60379 21.75 12C21.75 17.3962 17.3962 21.75 12 21.75C11.5858 21.75 11.25 21.4142 11.25 21C11.25 20.5858 11.5858 20.25 12 20.25C16.5678 20.25 20.25 16.5678 20.25 12C20.25 7.43221 16.5678 3.75 12 3.75C11.5858 3.75 11.25 3.41421 11.25 3Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 3.75C7.43221 3.75 3.75 7.43221 3.75 12C3.75 16.5678 7.43221 20.25 12 20.25C12.4142 20.25 12.75 20.5858 12.75 21C12.75 21.4142 12.4142 21.75 12 21.75C6.60379 21.75 2.25 17.3962 2.25 12C2.25 6.60379 6.60379 2.25 12 2.25C12.4142 2.25 12.75 2.58579 12.75 3C12.75 3.41421 12.4142 3.75 12 3.75Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M2.75999 9C2.75999 8.58579 3.09578 8.25 3.50999 8.25H20.49C20.9042 8.25 21.24 8.58579 21.24 9C21.24 9.41421 20.9042 9.75 20.49 9.75H3.50999C3.09578 9.75 2.75999 9.41421 2.75999 9Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M2.75999 15C2.75999 14.5858 3.09578 14.25 3.50999 14.25H20.49C20.9042 14.25 21.24 14.5858 21.24 15C21.24 15.4142 20.9042 15.75 20.49 15.75H3.50999C3.09578 15.75 2.75999 15.4142 2.75999 15Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>On-site</p>
                    </div>
                  </div>
                </div></a
              ><a class="item"
                ><div class="desktop">
                  <span> Data Scientist </span>
                  <p>Engineering &amp; Data</p>
                  <p>Data</p>
                  <p>Paris</p>
                  <p>Hybrid</p>
                </div>
                <div class="mobile">
                  <span> Data Scientist </span>
                  <div class="description">
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="users-2"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6 15.75C4.21421 15.75 2.75 17.2142 2.75 19C2.75 19.4142 2.41421 19.75 2 19.75C1.58579 19.75 1.25 19.4142 1.25 19C1.25 16.3858 3.38579 14.25 6 14.25H10C12.6142 14.25 14.75 16.3858 14.75 19C14.75 19.4142 14.4142 19.75 14 19.75C13.5858 19.75 13.25 19.4142 13.25 19C13.25 17.2142 11.7858 15.75 10 15.75H6Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M9.97947 6.54018C8.82861 5.48134 7.01733 5.46816 6.0496 6.51034C5.04291 7.59446 5.08987 9.24842 6.1496 10.3897C7.11984 11.4345 8.8389 11.419 9.98966 10.3504C11.0556 9.36056 11.0879 7.65878 9.97947 6.54018ZM11.0068 5.44708C9.35665 3.91831 6.57863 3.73619 4.9504 5.48966C3.35709 7.20554 3.51013 9.75158 5.0504 11.4103C6.68016 13.1655 9.3611 12.981 11.0103 11.4496C12.74 9.84344 12.7119 7.15488 11.0338 5.4731C11.0294 5.46869 11.025 5.46433 11.0205 5.46002C11.016 5.45564 11.0114 5.45132 11.0068 5.44708Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M15.25 14C15.25 13.5858 15.5858 13.25 16 13.25H19C21.1142 13.25 22.75 14.8858 22.75 17C22.75 17.4142 22.4142 17.75 22 17.75C21.5858 17.75 21.25 17.4142 21.25 17C21.25 15.7142 20.2858 14.75 19 14.75H16C15.5858 14.75 15.25 14.4142 15.25 14Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M18.7836 7.24441C18.0522 6.60027 16.919 6.64161 16.3303 7.23033C16.321 7.23962 16.3115 7.24867 16.3017 7.25747C15.6827 7.8146 15.6639 8.9276 16.3575 9.69828C16.9146 10.3173 18.0276 10.3361 18.7983 9.64253C19.4466 9.05901 19.4926 7.96805 18.7836 7.24441ZM19.7966 6.1379C18.5319 5.00456 16.4912 4.96427 15.2837 6.15573C13.9189 7.40013 14.14 9.47674 15.2425 10.7017C16.4854 12.0827 18.5724 11.8639 19.8017 10.7575C21.1474 9.54633 21.1069 7.45152 19.8352 6.17456C19.829 6.16826 19.8227 6.16204 19.8162 6.15591C19.8097 6.14977 19.8032 6.14376 19.7966 6.1379Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Engineering &amp; Data</p>
                    </div>
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="target"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M14.5712 9.42882C14.8641 9.72172 14.8641 10.1966 14.5712 10.4895L12.0601 13.0005C11.7672 13.2934 11.2924 13.2934 10.9995 13.0005C10.7066 12.7076 10.7066 12.2328 10.9995 11.9399L13.5105 9.42882C13.8034 9.13593 14.2783 9.13593 14.5712 9.42882Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M18.1227 1.25553C18.3607 1.29417 18.5656 1.44486 18.6734 1.66053L19.8951 4.1049L22.3395 5.32663C22.5551 5.43442 22.7058 5.63932 22.7445 5.87731C22.7831 6.1153 22.705 6.35735 22.5345 6.52783L18.5328 10.5295C18.3922 10.6702 18.2014 10.7492 18.0025 10.7492H14.0008C13.5866 10.7492 13.2508 10.4134 13.2508 9.99917V5.9975C13.2508 5.79859 13.3298 5.60782 13.4705 5.46717L17.4722 1.46551C17.6426 1.29502 17.8847 1.21689 18.1227 1.25553ZM14.7508 6.30816V9.24917H17.6918L20.7379 6.20308L19.0007 5.33482C18.8555 5.26223 18.7378 5.14448 18.6652 4.99926L17.7969 3.26208L14.7508 6.30816Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.7482 3.92571C11.7735 4.33915 11.459 4.69487 11.0455 4.72025C6.88357 4.9757 3.66447 8.46941 3.74982 12.6383C3.83517 16.8072 7.19457 20.1663 11.3635 20.2511C15.5324 20.336 19.0258 17.1165 19.2807 12.9546C19.3061 12.5411 19.6618 12.2265 20.0752 12.2518C20.4886 12.2772 20.8033 12.6328 20.7779 13.0463C20.4737 18.0114 16.3063 21.8521 11.3329 21.7508C6.35959 21.6496 2.35195 17.6424 2.25013 12.669C2.14831 7.69567 5.98858 3.5278 10.9536 3.22307C11.3671 3.19769 11.7228 3.51228 11.7482 3.92571Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.7451 7.70683C11.7901 8.1186 11.4928 8.48885 11.081 8.53382C9.00869 8.76011 7.4628 10.5482 7.53836 12.6314C7.61393 14.7147 9.2853 16.3861 11.3686 16.4616C13.4518 16.5372 15.2399 14.9913 15.4662 12.919C15.5111 12.5072 15.8814 12.2099 16.2932 12.2549C16.7049 12.2998 17.0023 12.6701 16.9573 13.0818C16.6457 15.9358 14.1832 18.0647 11.3142 17.9607C8.44518 17.8566 6.14341 15.5548 6.03935 12.6858C5.93528 9.81681 8.06424 7.35433 10.9182 7.04268C11.3299 6.99772 11.7002 7.29507 11.7451 7.70683Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Data</p>
                    </div>
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="pin-map-location"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 7.75C10.7572 7.75 9.75 8.75721 9.75 10C9.75 11.2428 10.7572 12.25 12 12.25C13.2428 12.25 14.25 11.2428 14.25 10C14.25 8.75721 13.2428 7.75 12 7.75ZM8.25 10C8.25 7.92879 9.92879 6.25 12 6.25C14.0712 6.25 15.75 7.92879 15.75 10C15.75 12.0712 14.0712 13.75 12 13.75C9.92879 13.75 8.25 12.0712 8.25 10Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 3.75C8.54821 3.75 5.75 6.54821 5.75 10C5.75 12.3384 7.33713 14.908 9.07546 16.9878C9.92687 18.0064 10.7804 18.8678 11.4218 19.4748C11.6434 19.6846 11.8392 19.8634 12 20.0073C12.1608 19.8634 12.3566 19.6846 12.5782 19.4748C13.2196 18.8678 14.0731 18.0064 14.9245 16.9878C16.6629 14.908 18.25 12.3384 18.25 10C18.25 6.54821 15.4518 3.75 12 3.75ZM12 21C11.5239 21.5795 11.5238 21.5794 11.5236 21.5793L11.5217 21.5777L11.5168 21.5737L11.4997 21.5595C11.4851 21.5472 11.464 21.5296 11.4368 21.5066C11.3826 21.4607 11.3043 21.3937 11.2053 21.3071C11.0075 21.134 10.7267 20.8823 10.3907 20.5643C9.71961 19.9291 8.82313 19.0248 7.92454 17.9497C6.16287 15.842 4.25 12.9116 4.25 10C4.25 5.71979 7.71979 2.25 12 2.25C16.2802 2.25 19.75 5.71979 19.75 10C19.75 12.9116 17.8371 15.842 16.0755 17.9497C15.1769 19.0248 14.2804 19.9291 13.6093 20.5643C13.2733 20.8823 12.9925 21.134 12.7947 21.3071C12.6957 21.3937 12.6174 21.4607 12.5632 21.5066C12.536 21.5296 12.5149 21.5472 12.5003 21.5595L12.4832 21.5737L12.4783 21.5777L12.4769 21.5789C12.4767 21.579 12.4761 21.5795 12 21ZM12 21L12.4761 21.5795C12.1994 21.8068 11.8003 21.8065 11.5236 21.5793L12 21Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Paris</p>
                    </div>
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="earth-world-globe"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.4842 2.5555C11.785 2.27065 12.2597 2.28351 12.5445 2.58423C17.4855 7.80049 17.4855 16.1995 12.5445 21.4158C12.2597 21.7165 11.785 21.7294 11.4842 21.4445C11.1835 21.1597 11.1706 20.685 11.4555 20.3842C15.8485 15.7465 15.8485 8.25351 11.4555 3.61577C11.1706 3.31505 11.1835 2.84035 11.4842 2.5555Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12.5158 2.5555C12.8165 2.84035 12.8294 3.31505 12.5445 3.61577C8.1515 8.25351 8.1515 15.7465 12.5445 20.3842C12.8294 20.685 12.8165 21.1597 12.5158 21.4445C12.2151 21.7294 11.7404 21.7165 11.4555 21.4158C6.51451 16.1995 6.51451 7.80049 11.4555 2.58423C11.7404 2.28351 12.2151 2.27065 12.5158 2.5555Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.25 3C11.25 2.58579 11.5858 2.25 12 2.25C17.3962 2.25 21.75 6.60379 21.75 12C21.75 17.3962 17.3962 21.75 12 21.75C11.5858 21.75 11.25 21.4142 11.25 21C11.25 20.5858 11.5858 20.25 12 20.25C16.5678 20.25 20.25 16.5678 20.25 12C20.25 7.43221 16.5678 3.75 12 3.75C11.5858 3.75 11.25 3.41421 11.25 3Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 3.75C7.43221 3.75 3.75 7.43221 3.75 12C3.75 16.5678 7.43221 20.25 12 20.25C12.4142 20.25 12.75 20.5858 12.75 21C12.75 21.4142 12.4142 21.75 12 21.75C6.60379 21.75 2.25 17.3962 2.25 12C2.25 6.60379 6.60379 2.25 12 2.25C12.4142 2.25 12.75 2.58579 12.75 3C12.75 3.41421 12.4142 3.75 12 3.75Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M2.75999 9C2.75999 8.58579 3.09578 8.25 3.50999 8.25H20.49C20.9042 8.25 21.24 8.58579 21.24 9C21.24 9.41421 20.9042 9.75 20.49 9.75H3.50999C3.09578 9.75 2.75999 9.41421 2.75999 9Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M2.75999 15C2.75999 14.5858 3.09578 14.25 3.50999 14.25H20.49C20.9042 14.25 21.24 14.5858 21.24 15C21.24 15.4142 20.9042 15.75 20.49 15.75H3.50999C3.09578 15.75 2.75999 15.4142 2.75999 15Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Hybrid</p>
                    </div>
                  </div>
                </div></a
              ><a class="item"
                ><div class="desktop">
                  <span> Junior Data Analyst (end-of-studies internship) </span>
                  <p>Engineering &amp; Data</p>
                  <p>Data</p>
                  <p>Paris</p>
                  <p>On-site</p>
                </div>
                <div class="mobile">
                  <span> Junior Data Analyst (end-of-studies internship) </span>
                  <div class="description">
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="users-2"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6 15.75C4.21421 15.75 2.75 17.2142 2.75 19C2.75 19.4142 2.41421 19.75 2 19.75C1.58579 19.75 1.25 19.4142 1.25 19C1.25 16.3858 3.38579 14.25 6 14.25H10C12.6142 14.25 14.75 16.3858 14.75 19C14.75 19.4142 14.4142 19.75 14 19.75C13.5858 19.75 13.25 19.4142 13.25 19C13.25 17.2142 11.7858 15.75 10 15.75H6Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M9.97947 6.54018C8.82861 5.48134 7.01733 5.46816 6.0496 6.51034C5.04291 7.59446 5.08987 9.24842 6.1496 10.3897C7.11984 11.4345 8.8389 11.419 9.98966 10.3504C11.0556 9.36056 11.0879 7.65878 9.97947 6.54018ZM11.0068 5.44708C9.35665 3.91831 6.57863 3.73619 4.9504 5.48966C3.35709 7.20554 3.51013 9.75158 5.0504 11.4103C6.68016 13.1655 9.3611 12.981 11.0103 11.4496C12.74 9.84344 12.7119 7.15488 11.0338 5.4731C11.0294 5.46869 11.025 5.46433 11.0205 5.46002C11.016 5.45564 11.0114 5.45132 11.0068 5.44708Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M15.25 14C15.25 13.5858 15.5858 13.25 16 13.25H19C21.1142 13.25 22.75 14.8858 22.75 17C22.75 17.4142 22.4142 17.75 22 17.75C21.5858 17.75 21.25 17.4142 21.25 17C21.25 15.7142 20.2858 14.75 19 14.75H16C15.5858 14.75 15.25 14.4142 15.25 14Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M18.7836 7.24441C18.0522 6.60027 16.919 6.64161 16.3303 7.23033C16.321 7.23962 16.3115 7.24867 16.3017 7.25747C15.6827 7.8146 15.6639 8.9276 16.3575 9.69828C16.9146 10.3173 18.0276 10.3361 18.7983 9.64253C19.4466 9.05901 19.4926 7.96805 18.7836 7.24441ZM19.7966 6.1379C18.5319 5.00456 16.4912 4.96427 15.2837 6.15573C13.9189 7.40013 14.14 9.47674 15.2425 10.7017C16.4854 12.0827 18.5724 11.8639 19.8017 10.7575C21.1474 9.54633 21.1069 7.45152 19.8352 6.17456C19.829 6.16826 19.8227 6.16204 19.8162 6.15591C19.8097 6.14977 19.8032 6.14376 19.7966 6.1379Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Engineering &amp; Data</p>
                    </div>
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="target"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M14.5712 9.42882C14.8641 9.72172 14.8641 10.1966 14.5712 10.4895L12.0601 13.0005C11.7672 13.2934 11.2924 13.2934 10.9995 13.0005C10.7066 12.7076 10.7066 12.2328 10.9995 11.9399L13.5105 9.42882C13.8034 9.13593 14.2783 9.13593 14.5712 9.42882Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M18.1227 1.25553C18.3607 1.29417 18.5656 1.44486 18.6734 1.66053L19.8951 4.1049L22.3395 5.32663C22.5551 5.43442 22.7058 5.63932 22.7445 5.87731C22.7831 6.1153 22.705 6.35735 22.5345 6.52783L18.5328 10.5295C18.3922 10.6702 18.2014 10.7492 18.0025 10.7492H14.0008C13.5866 10.7492 13.2508 10.4134 13.2508 9.99917V5.9975C13.2508 5.79859 13.3298 5.60782 13.4705 5.46717L17.4722 1.46551C17.6426 1.29502 17.8847 1.21689 18.1227 1.25553ZM14.7508 6.30816V9.24917H17.6918L20.7379 6.20308L19.0007 5.33482C18.8555 5.26223 18.7378 5.14448 18.6652 4.99926L17.7969 3.26208L14.7508 6.30816Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.7482 3.92571C11.7735 4.33915 11.459 4.69487 11.0455 4.72025C6.88357 4.9757 3.66447 8.46941 3.74982 12.6383C3.83517 16.8072 7.19457 20.1663 11.3635 20.2511C15.5324 20.336 19.0258 17.1165 19.2807 12.9546C19.3061 12.5411 19.6618 12.2265 20.0752 12.2518C20.4886 12.2772 20.8033 12.6328 20.7779 13.0463C20.4737 18.0114 16.3063 21.8521 11.3329 21.7508C6.35959 21.6496 2.35195 17.6424 2.25013 12.669C2.14831 7.69567 5.98858 3.5278 10.9536 3.22307C11.3671 3.19769 11.7228 3.51228 11.7482 3.92571Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.7451 7.70683C11.7901 8.1186 11.4928 8.48885 11.081 8.53382C9.00869 8.76011 7.4628 10.5482 7.53836 12.6314C7.61393 14.7147 9.2853 16.3861 11.3686 16.4616C13.4518 16.5372 15.2399 14.9913 15.4662 12.919C15.5111 12.5072 15.8814 12.2099 16.2932 12.2549C16.7049 12.2998 17.0023 12.6701 16.9573 13.0818C16.6457 15.9358 14.1832 18.0647 11.3142 17.9607C8.44518 17.8566 6.14341 15.5548 6.03935 12.6858C5.93528 9.81681 8.06424 7.35433 10.9182 7.04268C11.3299 6.99772 11.7002 7.29507 11.7451 7.70683Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Data</p>
                    </div>
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="pin-map-location"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 7.75C10.7572 7.75 9.75 8.75721 9.75 10C9.75 11.2428 10.7572 12.25 12 12.25C13.2428 12.25 14.25 11.2428 14.25 10C14.25 8.75721 13.2428 7.75 12 7.75ZM8.25 10C8.25 7.92879 9.92879 6.25 12 6.25C14.0712 6.25 15.75 7.92879 15.75 10C15.75 12.0712 14.0712 13.75 12 13.75C9.92879 13.75 8.25 12.0712 8.25 10Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 3.75C8.54821 3.75 5.75 6.54821 5.75 10C5.75 12.3384 7.33713 14.908 9.07546 16.9878C9.92687 18.0064 10.7804 18.8678 11.4218 19.4748C11.6434 19.6846 11.8392 19.8634 12 20.0073C12.1608 19.8634 12.3566 19.6846 12.5782 19.4748C13.2196 18.8678 14.0731 18.0064 14.9245 16.9878C16.6629 14.908 18.25 12.3384 18.25 10C18.25 6.54821 15.4518 3.75 12 3.75ZM12 21C11.5239 21.5795 11.5238 21.5794 11.5236 21.5793L11.5217 21.5777L11.5168 21.5737L11.4997 21.5595C11.4851 21.5472 11.464 21.5296 11.4368 21.5066C11.3826 21.4607 11.3043 21.3937 11.2053 21.3071C11.0075 21.134 10.7267 20.8823 10.3907 20.5643C9.71961 19.9291 8.82313 19.0248 7.92454 17.9497C6.16287 15.842 4.25 12.9116 4.25 10C4.25 5.71979 7.71979 2.25 12 2.25C16.2802 2.25 19.75 5.71979 19.75 10C19.75 12.9116 17.8371 15.842 16.0755 17.9497C15.1769 19.0248 14.2804 19.9291 13.6093 20.5643C13.2733 20.8823 12.9925 21.134 12.7947 21.3071C12.6957 21.3937 12.6174 21.4607 12.5632 21.5066C12.536 21.5296 12.5149 21.5472 12.5003 21.5595L12.4832 21.5737L12.4783 21.5777L12.4769 21.5789C12.4767 21.579 12.4761 21.5795 12 21ZM12 21L12.4761 21.5795C12.1994 21.8068 11.8003 21.8065 11.5236 21.5793L12 21Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Paris</p>
                    </div>
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="earth-world-globe"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.4842 2.5555C11.785 2.27065 12.2597 2.28351 12.5445 2.58423C17.4855 7.80049 17.4855 16.1995 12.5445 21.4158C12.2597 21.7165 11.785 21.7294 11.4842 21.4445C11.1835 21.1597 11.1706 20.685 11.4555 20.3842C15.8485 15.7465 15.8485 8.25351 11.4555 3.61577C11.1706 3.31505 11.1835 2.84035 11.4842 2.5555Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12.5158 2.5555C12.8165 2.84035 12.8294 3.31505 12.5445 3.61577C8.1515 8.25351 8.1515 15.7465 12.5445 20.3842C12.8294 20.685 12.8165 21.1597 12.5158 21.4445C12.2151 21.7294 11.7404 21.7165 11.4555 21.4158C6.51451 16.1995 6.51451 7.80049 11.4555 2.58423C11.7404 2.28351 12.2151 2.27065 12.5158 2.5555Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.25 3C11.25 2.58579 11.5858 2.25 12 2.25C17.3962 2.25 21.75 6.60379 21.75 12C21.75 17.3962 17.3962 21.75 12 21.75C11.5858 21.75 11.25 21.4142 11.25 21C11.25 20.5858 11.5858 20.25 12 20.25C16.5678 20.25 20.25 16.5678 20.25 12C20.25 7.43221 16.5678 3.75 12 3.75C11.5858 3.75 11.25 3.41421 11.25 3Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 3.75C7.43221 3.75 3.75 7.43221 3.75 12C3.75 16.5678 7.43221 20.25 12 20.25C12.4142 20.25 12.75 20.5858 12.75 21C12.75 21.4142 12.4142 21.75 12 21.75C6.60379 21.75 2.25 17.3962 2.25 12C2.25 6.60379 6.60379 2.25 12 2.25C12.4142 2.25 12.75 2.58579 12.75 3C12.75 3.41421 12.4142 3.75 12 3.75Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M2.75999 9C2.75999 8.58579 3.09578 8.25 3.50999 8.25H20.49C20.9042 8.25 21.24 8.58579 21.24 9C21.24 9.41421 20.9042 9.75 20.49 9.75H3.50999C3.09578 9.75 2.75999 9.41421 2.75999 9Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M2.75999 15C2.75999 14.5858 3.09578 14.25 3.50999 14.25H20.49C20.9042 14.25 21.24 14.5858 21.24 15C21.24 15.4142 20.9042 15.75 20.49 15.75H3.50999C3.09578 15.75 2.75999 15.4142 2.75999 15Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>On-site</p>
                    </div>
                  </div>
                </div></a
              ><a class="item"
                ><div class="desktop">
                  <span> Fullstack Engineer </span>
                  <p>Engineering &amp; Data</p>
                  <p>Engineering</p>
                  <p>Paris</p>
                  <p>Hybrid</p>
                </div>
                <div class="mobile">
                  <span> Fullstack Engineer </span>
                  <div class="description">
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="users-2"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6 15.75C4.21421 15.75 2.75 17.2142 2.75 19C2.75 19.4142 2.41421 19.75 2 19.75C1.58579 19.75 1.25 19.4142 1.25 19C1.25 16.3858 3.38579 14.25 6 14.25H10C12.6142 14.25 14.75 16.3858 14.75 19C14.75 19.4142 14.4142 19.75 14 19.75C13.5858 19.75 13.25 19.4142 13.25 19C13.25 17.2142 11.7858 15.75 10 15.75H6Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M9.97947 6.54018C8.82861 5.48134 7.01733 5.46816 6.0496 6.51034C5.04291 7.59446 5.08987 9.24842 6.1496 10.3897C7.11984 11.4345 8.8389 11.419 9.98966 10.3504C11.0556 9.36056 11.0879 7.65878 9.97947 6.54018ZM11.0068 5.44708C9.35665 3.91831 6.57863 3.73619 4.9504 5.48966C3.35709 7.20554 3.51013 9.75158 5.0504 11.4103C6.68016 13.1655 9.3611 12.981 11.0103 11.4496C12.74 9.84344 12.7119 7.15488 11.0338 5.4731C11.0294 5.46869 11.025 5.46433 11.0205 5.46002C11.016 5.45564 11.0114 5.45132 11.0068 5.44708Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M15.25 14C15.25 13.5858 15.5858 13.25 16 13.25H19C21.1142 13.25 22.75 14.8858 22.75 17C22.75 17.4142 22.4142 17.75 22 17.75C21.5858 17.75 21.25 17.4142 21.25 17C21.25 15.7142 20.2858 14.75 19 14.75H16C15.5858 14.75 15.25 14.4142 15.25 14Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M18.7836 7.24441C18.0522 6.60027 16.919 6.64161 16.3303 7.23033C16.321 7.23962 16.3115 7.24867 16.3017 7.25747C15.6827 7.8146 15.6639 8.9276 16.3575 9.69828C16.9146 10.3173 18.0276 10.3361 18.7983 9.64253C19.4466 9.05901 19.4926 7.96805 18.7836 7.24441ZM19.7966 6.1379C18.5319 5.00456 16.4912 4.96427 15.2837 6.15573C13.9189 7.40013 14.14 9.47674 15.2425 10.7017C16.4854 12.0827 18.5724 11.8639 19.8017 10.7575C21.1474 9.54633 21.1069 7.45152 19.8352 6.17456C19.829 6.16826 19.8227 6.16204 19.8162 6.15591C19.8097 6.14977 19.8032 6.14376 19.7966 6.1379Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Engineering &amp; Data</p>
                    </div>
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="target"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M14.5712 9.42882C14.8641 9.72172 14.8641 10.1966 14.5712 10.4895L12.0601 13.0005C11.7672 13.2934 11.2924 13.2934 10.9995 13.0005C10.7066 12.7076 10.7066 12.2328 10.9995 11.9399L13.5105 9.42882C13.8034 9.13593 14.2783 9.13593 14.5712 9.42882Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M18.1227 1.25553C18.3607 1.29417 18.5656 1.44486 18.6734 1.66053L19.8951 4.1049L22.3395 5.32663C22.5551 5.43442 22.7058 5.63932 22.7445 5.87731C22.7831 6.1153 22.705 6.35735 22.5345 6.52783L18.5328 10.5295C18.3922 10.6702 18.2014 10.7492 18.0025 10.7492H14.0008C13.5866 10.7492 13.2508 10.4134 13.2508 9.99917V5.9975C13.2508 5.79859 13.3298 5.60782 13.4705 5.46717L17.4722 1.46551C17.6426 1.29502 17.8847 1.21689 18.1227 1.25553ZM14.7508 6.30816V9.24917H17.6918L20.7379 6.20308L19.0007 5.33482C18.8555 5.26223 18.7378 5.14448 18.6652 4.99926L17.7969 3.26208L14.7508 6.30816Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.7482 3.92571C11.7735 4.33915 11.459 4.69487 11.0455 4.72025C6.88357 4.9757 3.66447 8.46941 3.74982 12.6383C3.83517 16.8072 7.19457 20.1663 11.3635 20.2511C15.5324 20.336 19.0258 17.1165 19.2807 12.9546C19.3061 12.5411 19.6618 12.2265 20.0752 12.2518C20.4886 12.2772 20.8033 12.6328 20.7779 13.0463C20.4737 18.0114 16.3063 21.8521 11.3329 21.7508C6.35959 21.6496 2.35195 17.6424 2.25013 12.669C2.14831 7.69567 5.98858 3.5278 10.9536 3.22307C11.3671 3.19769 11.7228 3.51228 11.7482 3.92571Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.7451 7.70683C11.7901 8.1186 11.4928 8.48885 11.081 8.53382C9.00869 8.76011 7.4628 10.5482 7.53836 12.6314C7.61393 14.7147 9.2853 16.3861 11.3686 16.4616C13.4518 16.5372 15.2399 14.9913 15.4662 12.919C15.5111 12.5072 15.8814 12.2099 16.2932 12.2549C16.7049 12.2998 17.0023 12.6701 16.9573 13.0818C16.6457 15.9358 14.1832 18.0647 11.3142 17.9607C8.44518 17.8566 6.14341 15.5548 6.03935 12.6858C5.93528 9.81681 8.06424 7.35433 10.9182 7.04268C11.3299 6.99772 11.7002 7.29507 11.7451 7.70683Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Engineering</p>
                    </div>
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="pin-map-location"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 7.75C10.7572 7.75 9.75 8.75721 9.75 10C9.75 11.2428 10.7572 12.25 12 12.25C13.2428 12.25 14.25 11.2428 14.25 10C14.25 8.75721 13.2428 7.75 12 7.75ZM8.25 10C8.25 7.92879 9.92879 6.25 12 6.25C14.0712 6.25 15.75 7.92879 15.75 10C15.75 12.0712 14.0712 13.75 12 13.75C9.92879 13.75 8.25 12.0712 8.25 10Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 3.75C8.54821 3.75 5.75 6.54821 5.75 10C5.75 12.3384 7.33713 14.908 9.07546 16.9878C9.92687 18.0064 10.7804 18.8678 11.4218 19.4748C11.6434 19.6846 11.8392 19.8634 12 20.0073C12.1608 19.8634 12.3566 19.6846 12.5782 19.4748C13.2196 18.8678 14.0731 18.0064 14.9245 16.9878C16.6629 14.908 18.25 12.3384 18.25 10C18.25 6.54821 15.4518 3.75 12 3.75ZM12 21C11.5239 21.5795 11.5238 21.5794 11.5236 21.5793L11.5217 21.5777L11.5168 21.5737L11.4997 21.5595C11.4851 21.5472 11.464 21.5296 11.4368 21.5066C11.3826 21.4607 11.3043 21.3937 11.2053 21.3071C11.0075 21.134 10.7267 20.8823 10.3907 20.5643C9.71961 19.9291 8.82313 19.0248 7.92454 17.9497C6.16287 15.842 4.25 12.9116 4.25 10C4.25 5.71979 7.71979 2.25 12 2.25C16.2802 2.25 19.75 5.71979 19.75 10C19.75 12.9116 17.8371 15.842 16.0755 17.9497C15.1769 19.0248 14.2804 19.9291 13.6093 20.5643C13.2733 20.8823 12.9925 21.134 12.7947 21.3071C12.6957 21.3937 12.6174 21.4607 12.5632 21.5066C12.536 21.5296 12.5149 21.5472 12.5003 21.5595L12.4832 21.5737L12.4783 21.5777L12.4769 21.5789C12.4767 21.579 12.4761 21.5795 12 21ZM12 21L12.4761 21.5795C12.1994 21.8068 11.8003 21.8065 11.5236 21.5793L12 21Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Paris</p>
                    </div>
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="earth-world-globe"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.4842 2.5555C11.785 2.27065 12.2597 2.28351 12.5445 2.58423C17.4855 7.80049 17.4855 16.1995 12.5445 21.4158C12.2597 21.7165 11.785 21.7294 11.4842 21.4445C11.1835 21.1597 11.1706 20.685 11.4555 20.3842C15.8485 15.7465 15.8485 8.25351 11.4555 3.61577C11.1706 3.31505 11.1835 2.84035 11.4842 2.5555Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12.5158 2.5555C12.8165 2.84035 12.8294 3.31505 12.5445 3.61577C8.1515 8.25351 8.1515 15.7465 12.5445 20.3842C12.8294 20.685 12.8165 21.1597 12.5158 21.4445C12.2151 21.7294 11.7404 21.7165 11.4555 21.4158C6.51451 16.1995 6.51451 7.80049 11.4555 2.58423C11.7404 2.28351 12.2151 2.27065 12.5158 2.5555Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.25 3C11.25 2.58579 11.5858 2.25 12 2.25C17.3962 2.25 21.75 6.60379 21.75 12C21.75 17.3962 17.3962 21.75 12 21.75C11.5858 21.75 11.25 21.4142 11.25 21C11.25 20.5858 11.5858 20.25 12 20.25C16.5678 20.25 20.25 16.5678 20.25 12C20.25 7.43221 16.5678 3.75 12 3.75C11.5858 3.75 11.25 3.41421 11.25 3Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 3.75C7.43221 3.75 3.75 7.43221 3.75 12C3.75 16.5678 7.43221 20.25 12 20.25C12.4142 20.25 12.75 20.5858 12.75 21C12.75 21.4142 12.4142 21.75 12 21.75C6.60379 21.75 2.25 17.3962 2.25 12C2.25 6.60379 6.60379 2.25 12 2.25C12.4142 2.25 12.75 2.58579 12.75 3C12.75 3.41421 12.4142 3.75 12 3.75Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M2.75999 9C2.75999 8.58579 3.09578 8.25 3.50999 8.25H20.49C20.9042 8.25 21.24 8.58579 21.24 9C21.24 9.41421 20.9042 9.75 20.49 9.75H3.50999C3.09578 9.75 2.75999 9.41421 2.75999 9Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M2.75999 15C2.75999 14.5858 3.09578 14.25 3.50999 14.25H20.49C20.9042 14.25 21.24 14.5858 21.24 15C21.24 15.4142 20.9042 15.75 20.49 15.75H3.50999C3.09578 15.75 2.75999 15.4142 2.75999 15Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Hybrid</p>
                    </div>
                  </div>
                </div></a
              ><a class="item"
                ><div class="desktop">
                  <span> QA Engineer - Casual Games </span>
                  <p>Gaming</p>
                  <p>Game Development</p>
                  <p>Barcelona</p>
                  <p>Remote</p>
                </div>
                <div class="mobile">
                  <span> QA Engineer - Casual Games </span>
                  <div class="description">
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="users-2"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6 15.75C4.21421 15.75 2.75 17.2142 2.75 19C2.75 19.4142 2.41421 19.75 2 19.75C1.58579 19.75 1.25 19.4142 1.25 19C1.25 16.3858 3.38579 14.25 6 14.25H10C12.6142 14.25 14.75 16.3858 14.75 19C14.75 19.4142 14.4142 19.75 14 19.75C13.5858 19.75 13.25 19.4142 13.25 19C13.25 17.2142 11.7858 15.75 10 15.75H6Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M9.97947 6.54018C8.82861 5.48134 7.01733 5.46816 6.0496 6.51034C5.04291 7.59446 5.08987 9.24842 6.1496 10.3897C7.11984 11.4345 8.8389 11.419 9.98966 10.3504C11.0556 9.36056 11.0879 7.65878 9.97947 6.54018ZM11.0068 5.44708C9.35665 3.91831 6.57863 3.73619 4.9504 5.48966C3.35709 7.20554 3.51013 9.75158 5.0504 11.4103C6.68016 13.1655 9.3611 12.981 11.0103 11.4496C12.74 9.84344 12.7119 7.15488 11.0338 5.4731C11.0294 5.46869 11.025 5.46433 11.0205 5.46002C11.016 5.45564 11.0114 5.45132 11.0068 5.44708Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M15.25 14C15.25 13.5858 15.5858 13.25 16 13.25H19C21.1142 13.25 22.75 14.8858 22.75 17C22.75 17.4142 22.4142 17.75 22 17.75C21.5858 17.75 21.25 17.4142 21.25 17C21.25 15.7142 20.2858 14.75 19 14.75H16C15.5858 14.75 15.25 14.4142 15.25 14Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M18.7836 7.24441C18.0522 6.60027 16.919 6.64161 16.3303 7.23033C16.321 7.23962 16.3115 7.24867 16.3017 7.25747C15.6827 7.8146 15.6639 8.9276 16.3575 9.69828C16.9146 10.3173 18.0276 10.3361 18.7983 9.64253C19.4466 9.05901 19.4926 7.96805 18.7836 7.24441ZM19.7966 6.1379C18.5319 5.00456 16.4912 4.96427 15.2837 6.15573C13.9189 7.40013 14.14 9.47674 15.2425 10.7017C16.4854 12.0827 18.5724 11.8639 19.8017 10.7575C21.1474 9.54633 21.1069 7.45152 19.8352 6.17456C19.829 6.16826 19.8227 6.16204 19.8162 6.15591C19.8097 6.14977 19.8032 6.14376 19.7966 6.1379Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Gaming</p>
                    </div>
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="target"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M14.5712 9.42882C14.8641 9.72172 14.8641 10.1966 14.5712 10.4895L12.0601 13.0005C11.7672 13.2934 11.2924 13.2934 10.9995 13.0005C10.7066 12.7076 10.7066 12.2328 10.9995 11.9399L13.5105 9.42882C13.8034 9.13593 14.2783 9.13593 14.5712 9.42882Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M18.1227 1.25553C18.3607 1.29417 18.5656 1.44486 18.6734 1.66053L19.8951 4.1049L22.3395 5.32663C22.5551 5.43442 22.7058 5.63932 22.7445 5.87731C22.7831 6.1153 22.705 6.35735 22.5345 6.52783L18.5328 10.5295C18.3922 10.6702 18.2014 10.7492 18.0025 10.7492H14.0008C13.5866 10.7492 13.2508 10.4134 13.2508 9.99917V5.9975C13.2508 5.79859 13.3298 5.60782 13.4705 5.46717L17.4722 1.46551C17.6426 1.29502 17.8847 1.21689 18.1227 1.25553ZM14.7508 6.30816V9.24917H17.6918L20.7379 6.20308L19.0007 5.33482C18.8555 5.26223 18.7378 5.14448 18.6652 4.99926L17.7969 3.26208L14.7508 6.30816Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.7482 3.92571C11.7735 4.33915 11.459 4.69487 11.0455 4.72025C6.88357 4.9757 3.66447 8.46941 3.74982 12.6383C3.83517 16.8072 7.19457 20.1663 11.3635 20.2511C15.5324 20.336 19.0258 17.1165 19.2807 12.9546C19.3061 12.5411 19.6618 12.2265 20.0752 12.2518C20.4886 12.2772 20.8033 12.6328 20.7779 13.0463C20.4737 18.0114 16.3063 21.8521 11.3329 21.7508C6.35959 21.6496 2.35195 17.6424 2.25013 12.669C2.14831 7.69567 5.98858 3.5278 10.9536 3.22307C11.3671 3.19769 11.7228 3.51228 11.7482 3.92571Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.7451 7.70683C11.7901 8.1186 11.4928 8.48885 11.081 8.53382C9.00869 8.76011 7.4628 10.5482 7.53836 12.6314C7.61393 14.7147 9.2853 16.3861 11.3686 16.4616C13.4518 16.5372 15.2399 14.9913 15.4662 12.919C15.5111 12.5072 15.8814 12.2099 16.2932 12.2549C16.7049 12.2998 17.0023 12.6701 16.9573 13.0818C16.6457 15.9358 14.1832 18.0647 11.3142 17.9607C8.44518 17.8566 6.14341 15.5548 6.03935 12.6858C5.93528 9.81681 8.06424 7.35433 10.9182 7.04268C11.3299 6.99772 11.7002 7.29507 11.7451 7.70683Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Game Development</p>
                    </div>
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="pin-map-location"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 7.75C10.7572 7.75 9.75 8.75721 9.75 10C9.75 11.2428 10.7572 12.25 12 12.25C13.2428 12.25 14.25 11.2428 14.25 10C14.25 8.75721 13.2428 7.75 12 7.75ZM8.25 10C8.25 7.92879 9.92879 6.25 12 6.25C14.0712 6.25 15.75 7.92879 15.75 10C15.75 12.0712 14.0712 13.75 12 13.75C9.92879 13.75 8.25 12.0712 8.25 10Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 3.75C8.54821 3.75 5.75 6.54821 5.75 10C5.75 12.3384 7.33713 14.908 9.07546 16.9878C9.92687 18.0064 10.7804 18.8678 11.4218 19.4748C11.6434 19.6846 11.8392 19.8634 12 20.0073C12.1608 19.8634 12.3566 19.6846 12.5782 19.4748C13.2196 18.8678 14.0731 18.0064 14.9245 16.9878C16.6629 14.908 18.25 12.3384 18.25 10C18.25 6.54821 15.4518 3.75 12 3.75ZM12 21C11.5239 21.5795 11.5238 21.5794 11.5236 21.5793L11.5217 21.5777L11.5168 21.5737L11.4997 21.5595C11.4851 21.5472 11.464 21.5296 11.4368 21.5066C11.3826 21.4607 11.3043 21.3937 11.2053 21.3071C11.0075 21.134 10.7267 20.8823 10.3907 20.5643C9.71961 19.9291 8.82313 19.0248 7.92454 17.9497C6.16287 15.842 4.25 12.9116 4.25 10C4.25 5.71979 7.71979 2.25 12 2.25C16.2802 2.25 19.75 5.71979 19.75 10C19.75 12.9116 17.8371 15.842 16.0755 17.9497C15.1769 19.0248 14.2804 19.9291 13.6093 20.5643C13.2733 20.8823 12.9925 21.134 12.7947 21.3071C12.6957 21.3937 12.6174 21.4607 12.5632 21.5066C12.536 21.5296 12.5149 21.5472 12.5003 21.5595L12.4832 21.5737L12.4783 21.5777L12.4769 21.5789C12.4767 21.579 12.4761 21.5795 12 21ZM12 21L12.4761 21.5795C12.1994 21.8068 11.8003 21.8065 11.5236 21.5793L12 21Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Barcelona</p>
                    </div>
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="earth-world-globe"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.4842 2.5555C11.785 2.27065 12.2597 2.28351 12.5445 2.58423C17.4855 7.80049 17.4855 16.1995 12.5445 21.4158C12.2597 21.7165 11.785 21.7294 11.4842 21.4445C11.1835 21.1597 11.1706 20.685 11.4555 20.3842C15.8485 15.7465 15.8485 8.25351 11.4555 3.61577C11.1706 3.31505 11.1835 2.84035 11.4842 2.5555Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12.5158 2.5555C12.8165 2.84035 12.8294 3.31505 12.5445 3.61577C8.1515 8.25351 8.1515 15.7465 12.5445 20.3842C12.8294 20.685 12.8165 21.1597 12.5158 21.4445C12.2151 21.7294 11.7404 21.7165 11.4555 21.4158C6.51451 16.1995 6.51451 7.80049 11.4555 2.58423C11.7404 2.28351 12.2151 2.27065 12.5158 2.5555Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.25 3C11.25 2.58579 11.5858 2.25 12 2.25C17.3962 2.25 21.75 6.60379 21.75 12C21.75 17.3962 17.3962 21.75 12 21.75C11.5858 21.75 11.25 21.4142 11.25 21C11.25 20.5858 11.5858 20.25 12 20.25C16.5678 20.25 20.25 16.5678 20.25 12C20.25 7.43221 16.5678 3.75 12 3.75C11.5858 3.75 11.25 3.41421 11.25 3Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 3.75C7.43221 3.75 3.75 7.43221 3.75 12C3.75 16.5678 7.43221 20.25 12 20.25C12.4142 20.25 12.75 20.5858 12.75 21C12.75 21.4142 12.4142 21.75 12 21.75C6.60379 21.75 2.25 17.3962 2.25 12C2.25 6.60379 6.60379 2.25 12 2.25C12.4142 2.25 12.75 2.58579 12.75 3C12.75 3.41421 12.4142 3.75 12 3.75Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M2.75999 9C2.75999 8.58579 3.09578 8.25 3.50999 8.25H20.49C20.9042 8.25 21.24 8.58579 21.24 9C21.24 9.41421 20.9042 9.75 20.49 9.75H3.50999C3.09578 9.75 2.75999 9.41421 2.75999 9Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M2.75999 15C2.75999 14.5858 3.09578 14.25 3.50999 14.25H20.49C20.9042 14.25 21.24 14.5858 21.24 15C21.24 15.4142 20.9042 15.75 20.49 15.75H3.50999C3.09578 15.75 2.75999 15.4142 2.75999 15Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Remote</p>
                    </div>
                  </div>
                </div></a
              ><a class="item"
                ><div class="desktop">
                  <span> IT &amp; SaaS Administrator - Freelance </span>
                  <p>Corporate</p>
                  <p>People</p>
                  <p>Paris</p>
                  <p>On-site</p>
                </div>
                <div class="mobile">
                  <span> IT &amp; SaaS Administrator - Freelance </span>
                  <div class="description">
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="users-2"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6 15.75C4.21421 15.75 2.75 17.2142 2.75 19C2.75 19.4142 2.41421 19.75 2 19.75C1.58579 19.75 1.25 19.4142 1.25 19C1.25 16.3858 3.38579 14.25 6 14.25H10C12.6142 14.25 14.75 16.3858 14.75 19C14.75 19.4142 14.4142 19.75 14 19.75C13.5858 19.75 13.25 19.4142 13.25 19C13.25 17.2142 11.7858 15.75 10 15.75H6Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M9.97947 6.54018C8.82861 5.48134 7.01733 5.46816 6.0496 6.51034C5.04291 7.59446 5.08987 9.24842 6.1496 10.3897C7.11984 11.4345 8.8389 11.419 9.98966 10.3504C11.0556 9.36056 11.0879 7.65878 9.97947 6.54018ZM11.0068 5.44708C9.35665 3.91831 6.57863 3.73619 4.9504 5.48966C3.35709 7.20554 3.51013 9.75158 5.0504 11.4103C6.68016 13.1655 9.3611 12.981 11.0103 11.4496C12.74 9.84344 12.7119 7.15488 11.0338 5.4731C11.0294 5.46869 11.025 5.46433 11.0205 5.46002C11.016 5.45564 11.0114 5.45132 11.0068 5.44708Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M15.25 14C15.25 13.5858 15.5858 13.25 16 13.25H19C21.1142 13.25 22.75 14.8858 22.75 17C22.75 17.4142 22.4142 17.75 22 17.75C21.5858 17.75 21.25 17.4142 21.25 17C21.25 15.7142 20.2858 14.75 19 14.75H16C15.5858 14.75 15.25 14.4142 15.25 14Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M18.7836 7.24441C18.0522 6.60027 16.919 6.64161 16.3303 7.23033C16.321 7.23962 16.3115 7.24867 16.3017 7.25747C15.6827 7.8146 15.6639 8.9276 16.3575 9.69828C16.9146 10.3173 18.0276 10.3361 18.7983 9.64253C19.4466 9.05901 19.4926 7.96805 18.7836 7.24441ZM19.7966 6.1379C18.5319 5.00456 16.4912 4.96427 15.2837 6.15573C13.9189 7.40013 14.14 9.47674 15.2425 10.7017C16.4854 12.0827 18.5724 11.8639 19.8017 10.7575C21.1474 9.54633 21.1069 7.45152 19.8352 6.17456C19.829 6.16826 19.8227 6.16204 19.8162 6.15591C19.8097 6.14977 19.8032 6.14376 19.7966 6.1379Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Corporate</p>
                    </div>
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="target"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M14.5712 9.42882C14.8641 9.72172 14.8641 10.1966 14.5712 10.4895L12.0601 13.0005C11.7672 13.2934 11.2924 13.2934 10.9995 13.0005C10.7066 12.7076 10.7066 12.2328 10.9995 11.9399L13.5105 9.42882C13.8034 9.13593 14.2783 9.13593 14.5712 9.42882Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M18.1227 1.25553C18.3607 1.29417 18.5656 1.44486 18.6734 1.66053L19.8951 4.1049L22.3395 5.32663C22.5551 5.43442 22.7058 5.63932 22.7445 5.87731C22.7831 6.1153 22.705 6.35735 22.5345 6.52783L18.5328 10.5295C18.3922 10.6702 18.2014 10.7492 18.0025 10.7492H14.0008C13.5866 10.7492 13.2508 10.4134 13.2508 9.99917V5.9975C13.2508 5.79859 13.3298 5.60782 13.4705 5.46717L17.4722 1.46551C17.6426 1.29502 17.8847 1.21689 18.1227 1.25553ZM14.7508 6.30816V9.24917H17.6918L20.7379 6.20308L19.0007 5.33482C18.8555 5.26223 18.7378 5.14448 18.6652 4.99926L17.7969 3.26208L14.7508 6.30816Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.7482 3.92571C11.7735 4.33915 11.459 4.69487 11.0455 4.72025C6.88357 4.9757 3.66447 8.46941 3.74982 12.6383C3.83517 16.8072 7.19457 20.1663 11.3635 20.2511C15.5324 20.336 19.0258 17.1165 19.2807 12.9546C19.3061 12.5411 19.6618 12.2265 20.0752 12.2518C20.4886 12.2772 20.8033 12.6328 20.7779 13.0463C20.4737 18.0114 16.3063 21.8521 11.3329 21.7508C6.35959 21.6496 2.35195 17.6424 2.25013 12.669C2.14831 7.69567 5.98858 3.5278 10.9536 3.22307C11.3671 3.19769 11.7228 3.51228 11.7482 3.92571Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.7451 7.70683C11.7901 8.1186 11.4928 8.48885 11.081 8.53382C9.00869 8.76011 7.4628 10.5482 7.53836 12.6314C7.61393 14.7147 9.2853 16.3861 11.3686 16.4616C13.4518 16.5372 15.2399 14.9913 15.4662 12.919C15.5111 12.5072 15.8814 12.2099 16.2932 12.2549C16.7049 12.2998 17.0023 12.6701 16.9573 13.0818C16.6457 15.9358 14.1832 18.0647 11.3142 17.9607C8.44518 17.8566 6.14341 15.5548 6.03935 12.6858C5.93528 9.81681 8.06424 7.35433 10.9182 7.04268C11.3299 6.99772 11.7002 7.29507 11.7451 7.70683Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>People</p>
                    </div>
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="pin-map-location"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 7.75C10.7572 7.75 9.75 8.75721 9.75 10C9.75 11.2428 10.7572 12.25 12 12.25C13.2428 12.25 14.25 11.2428 14.25 10C14.25 8.75721 13.2428 7.75 12 7.75ZM8.25 10C8.25 7.92879 9.92879 6.25 12 6.25C14.0712 6.25 15.75 7.92879 15.75 10C15.75 12.0712 14.0712 13.75 12 13.75C9.92879 13.75 8.25 12.0712 8.25 10Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 3.75C8.54821 3.75 5.75 6.54821 5.75 10C5.75 12.3384 7.33713 14.908 9.07546 16.9878C9.92687 18.0064 10.7804 18.8678 11.4218 19.4748C11.6434 19.6846 11.8392 19.8634 12 20.0073C12.1608 19.8634 12.3566 19.6846 12.5782 19.4748C13.2196 18.8678 14.0731 18.0064 14.9245 16.9878C16.6629 14.908 18.25 12.3384 18.25 10C18.25 6.54821 15.4518 3.75 12 3.75ZM12 21C11.5239 21.5795 11.5238 21.5794 11.5236 21.5793L11.5217 21.5777L11.5168 21.5737L11.4997 21.5595C11.4851 21.5472 11.464 21.5296 11.4368 21.5066C11.3826 21.4607 11.3043 21.3937 11.2053 21.3071C11.0075 21.134 10.7267 20.8823 10.3907 20.5643C9.71961 19.9291 8.82313 19.0248 7.92454 17.9497C6.16287 15.842 4.25 12.9116 4.25 10C4.25 5.71979 7.71979 2.25 12 2.25C16.2802 2.25 19.75 5.71979 19.75 10C19.75 12.9116 17.8371 15.842 16.0755 17.9497C15.1769 19.0248 14.2804 19.9291 13.6093 20.5643C13.2733 20.8823 12.9925 21.134 12.7947 21.3071C12.6957 21.3937 12.6174 21.4607 12.5632 21.5066C12.536 21.5296 12.5149 21.5472 12.5003 21.5595L12.4832 21.5737L12.4783 21.5777L12.4769 21.5789C12.4767 21.579 12.4761 21.5795 12 21ZM12 21L12.4761 21.5795C12.1994 21.8068 11.8003 21.8065 11.5236 21.5793L12 21Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Paris</p>
                    </div>
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="earth-world-globe"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.4842 2.5555C11.785 2.27065 12.2597 2.28351 12.5445 2.58423C17.4855 7.80049 17.4855 16.1995 12.5445 21.4158C12.2597 21.7165 11.785 21.7294 11.4842 21.4445C11.1835 21.1597 11.1706 20.685 11.4555 20.3842C15.8485 15.7465 15.8485 8.25351 11.4555 3.61577C11.1706 3.31505 11.1835 2.84035 11.4842 2.5555Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12.5158 2.5555C12.8165 2.84035 12.8294 3.31505 12.5445 3.61577C8.1515 8.25351 8.1515 15.7465 12.5445 20.3842C12.8294 20.685 12.8165 21.1597 12.5158 21.4445C12.2151 21.7294 11.7404 21.7165 11.4555 21.4158C6.51451 16.1995 6.51451 7.80049 11.4555 2.58423C11.7404 2.28351 12.2151 2.27065 12.5158 2.5555Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.25 3C11.25 2.58579 11.5858 2.25 12 2.25C17.3962 2.25 21.75 6.60379 21.75 12C21.75 17.3962 17.3962 21.75 12 21.75C11.5858 21.75 11.25 21.4142 11.25 21C11.25 20.5858 11.5858 20.25 12 20.25C16.5678 20.25 20.25 16.5678 20.25 12C20.25 7.43221 16.5678 3.75 12 3.75C11.5858 3.75 11.25 3.41421 11.25 3Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 3.75C7.43221 3.75 3.75 7.43221 3.75 12C3.75 16.5678 7.43221 20.25 12 20.25C12.4142 20.25 12.75 20.5858 12.75 21C12.75 21.4142 12.4142 21.75 12 21.75C6.60379 21.75 2.25 17.3962 2.25 12C2.25 6.60379 6.60379 2.25 12 2.25C12.4142 2.25 12.75 2.58579 12.75 3C12.75 3.41421 12.4142 3.75 12 3.75Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M2.75999 9C2.75999 8.58579 3.09578 8.25 3.50999 8.25H20.49C20.9042 8.25 21.24 8.58579 21.24 9C21.24 9.41421 20.9042 9.75 20.49 9.75H3.50999C3.09578 9.75 2.75999 9.41421 2.75999 9Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M2.75999 15C2.75999 14.5858 3.09578 14.25 3.50999 14.25H20.49C20.9042 14.25 21.24 14.5858 21.24 15C21.24 15.4142 20.9042 15.75 20.49 15.75H3.50999C3.09578 15.75 2.75999 15.4142 2.75999 15Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>On-site</p>
                    </div>
                  </div>
                </div></a
              ><a class="item"
                ><div class="desktop">
                  <span> Senior QA Associate - Wizz </span>
                  <p>Consumer Apps</p>
                  <p>Product Management</p>
                  <p>Paris</p>
                  <p>Hybrid</p>
                </div>
                <div class="mobile">
                  <span> Senior QA Associate - Wizz </span>
                  <div class="description">
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="users-2"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6 15.75C4.21421 15.75 2.75 17.2142 2.75 19C2.75 19.4142 2.41421 19.75 2 19.75C1.58579 19.75 1.25 19.4142 1.25 19C1.25 16.3858 3.38579 14.25 6 14.25H10C12.6142 14.25 14.75 16.3858 14.75 19C14.75 19.4142 14.4142 19.75 14 19.75C13.5858 19.75 13.25 19.4142 13.25 19C13.25 17.2142 11.7858 15.75 10 15.75H6Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M9.97947 6.54018C8.82861 5.48134 7.01733 5.46816 6.0496 6.51034C5.04291 7.59446 5.08987 9.24842 6.1496 10.3897C7.11984 11.4345 8.8389 11.419 9.98966 10.3504C11.0556 9.36056 11.0879 7.65878 9.97947 6.54018ZM11.0068 5.44708C9.35665 3.91831 6.57863 3.73619 4.9504 5.48966C3.35709 7.20554 3.51013 9.75158 5.0504 11.4103C6.68016 13.1655 9.3611 12.981 11.0103 11.4496C12.74 9.84344 12.7119 7.15488 11.0338 5.4731C11.0294 5.46869 11.025 5.46433 11.0205 5.46002C11.016 5.45564 11.0114 5.45132 11.0068 5.44708Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M15.25 14C15.25 13.5858 15.5858 13.25 16 13.25H19C21.1142 13.25 22.75 14.8858 22.75 17C22.75 17.4142 22.4142 17.75 22 17.75C21.5858 17.75 21.25 17.4142 21.25 17C21.25 15.7142 20.2858 14.75 19 14.75H16C15.5858 14.75 15.25 14.4142 15.25 14Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M18.7836 7.24441C18.0522 6.60027 16.919 6.64161 16.3303 7.23033C16.321 7.23962 16.3115 7.24867 16.3017 7.25747C15.6827 7.8146 15.6639 8.9276 16.3575 9.69828C16.9146 10.3173 18.0276 10.3361 18.7983 9.64253C19.4466 9.05901 19.4926 7.96805 18.7836 7.24441ZM19.7966 6.1379C18.5319 5.00456 16.4912 4.96427 15.2837 6.15573C13.9189 7.40013 14.14 9.47674 15.2425 10.7017C16.4854 12.0827 18.5724 11.8639 19.8017 10.7575C21.1474 9.54633 21.1069 7.45152 19.8352 6.17456C19.829 6.16826 19.8227 6.16204 19.8162 6.15591C19.8097 6.14977 19.8032 6.14376 19.7966 6.1379Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Consumer Apps</p>
                    </div>
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="target"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M14.5712 9.42882C14.8641 9.72172 14.8641 10.1966 14.5712 10.4895L12.0601 13.0005C11.7672 13.2934 11.2924 13.2934 10.9995 13.0005C10.7066 12.7076 10.7066 12.2328 10.9995 11.9399L13.5105 9.42882C13.8034 9.13593 14.2783 9.13593 14.5712 9.42882Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M18.1227 1.25553C18.3607 1.29417 18.5656 1.44486 18.6734 1.66053L19.8951 4.1049L22.3395 5.32663C22.5551 5.43442 22.7058 5.63932 22.7445 5.87731C22.7831 6.1153 22.705 6.35735 22.5345 6.52783L18.5328 10.5295C18.3922 10.6702 18.2014 10.7492 18.0025 10.7492H14.0008C13.5866 10.7492 13.2508 10.4134 13.2508 9.99917V5.9975C13.2508 5.79859 13.3298 5.60782 13.4705 5.46717L17.4722 1.46551C17.6426 1.29502 17.8847 1.21689 18.1227 1.25553ZM14.7508 6.30816V9.24917H17.6918L20.7379 6.20308L19.0007 5.33482C18.8555 5.26223 18.7378 5.14448 18.6652 4.99926L17.7969 3.26208L14.7508 6.30816Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.7482 3.92571C11.7735 4.33915 11.459 4.69487 11.0455 4.72025C6.88357 4.9757 3.66447 8.46941 3.74982 12.6383C3.83517 16.8072 7.19457 20.1663 11.3635 20.2511C15.5324 20.336 19.0258 17.1165 19.2807 12.9546C19.3061 12.5411 19.6618 12.2265 20.0752 12.2518C20.4886 12.2772 20.8033 12.6328 20.7779 13.0463C20.4737 18.0114 16.3063 21.8521 11.3329 21.7508C6.35959 21.6496 2.35195 17.6424 2.25013 12.669C2.14831 7.69567 5.98858 3.5278 10.9536 3.22307C11.3671 3.19769 11.7228 3.51228 11.7482 3.92571Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.7451 7.70683C11.7901 8.1186 11.4928 8.48885 11.081 8.53382C9.00869 8.76011 7.4628 10.5482 7.53836 12.6314C7.61393 14.7147 9.2853 16.3861 11.3686 16.4616C13.4518 16.5372 15.2399 14.9913 15.4662 12.919C15.5111 12.5072 15.8814 12.2099 16.2932 12.2549C16.7049 12.2998 17.0023 12.6701 16.9573 13.0818C16.6457 15.9358 14.1832 18.0647 11.3142 17.9607C8.44518 17.8566 6.14341 15.5548 6.03935 12.6858C5.93528 9.81681 8.06424 7.35433 10.9182 7.04268C11.3299 6.99772 11.7002 7.29507 11.7451 7.70683Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Product Management</p>
                    </div>
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="pin-map-location"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 7.75C10.7572 7.75 9.75 8.75721 9.75 10C9.75 11.2428 10.7572 12.25 12 12.25C13.2428 12.25 14.25 11.2428 14.25 10C14.25 8.75721 13.2428 7.75 12 7.75ZM8.25 10C8.25 7.92879 9.92879 6.25 12 6.25C14.0712 6.25 15.75 7.92879 15.75 10C15.75 12.0712 14.0712 13.75 12 13.75C9.92879 13.75 8.25 12.0712 8.25 10Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 3.75C8.54821 3.75 5.75 6.54821 5.75 10C5.75 12.3384 7.33713 14.908 9.07546 16.9878C9.92687 18.0064 10.7804 18.8678 11.4218 19.4748C11.6434 19.6846 11.8392 19.8634 12 20.0073C12.1608 19.8634 12.3566 19.6846 12.5782 19.4748C13.2196 18.8678 14.0731 18.0064 14.9245 16.9878C16.6629 14.908 18.25 12.3384 18.25 10C18.25 6.54821 15.4518 3.75 12 3.75ZM12 21C11.5239 21.5795 11.5238 21.5794 11.5236 21.5793L11.5217 21.5777L11.5168 21.5737L11.4997 21.5595C11.4851 21.5472 11.464 21.5296 11.4368 21.5066C11.3826 21.4607 11.3043 21.3937 11.2053 21.3071C11.0075 21.134 10.7267 20.8823 10.3907 20.5643C9.71961 19.9291 8.82313 19.0248 7.92454 17.9497C6.16287 15.842 4.25 12.9116 4.25 10C4.25 5.71979 7.71979 2.25 12 2.25C16.2802 2.25 19.75 5.71979 19.75 10C19.75 12.9116 17.8371 15.842 16.0755 17.9497C15.1769 19.0248 14.2804 19.9291 13.6093 20.5643C13.2733 20.8823 12.9925 21.134 12.7947 21.3071C12.6957 21.3937 12.6174 21.4607 12.5632 21.5066C12.536 21.5296 12.5149 21.5472 12.5003 21.5595L12.4832 21.5737L12.4783 21.5777L12.4769 21.5789C12.4767 21.579 12.4761 21.5795 12 21ZM12 21L12.4761 21.5795C12.1994 21.8068 11.8003 21.8065 11.5236 21.5793L12 21Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Paris</p>
                    </div>
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="earth-world-globe"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.4842 2.5555C11.785 2.27065 12.2597 2.28351 12.5445 2.58423C17.4855 7.80049 17.4855 16.1995 12.5445 21.4158C12.2597 21.7165 11.785 21.7294 11.4842 21.4445C11.1835 21.1597 11.1706 20.685 11.4555 20.3842C15.8485 15.7465 15.8485 8.25351 11.4555 3.61577C11.1706 3.31505 11.1835 2.84035 11.4842 2.5555Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12.5158 2.5555C12.8165 2.84035 12.8294 3.31505 12.5445 3.61577C8.1515 8.25351 8.1515 15.7465 12.5445 20.3842C12.8294 20.685 12.8165 21.1597 12.5158 21.4445C12.2151 21.7294 11.7404 21.7165 11.4555 21.4158C6.51451 16.1995 6.51451 7.80049 11.4555 2.58423C11.7404 2.28351 12.2151 2.27065 12.5158 2.5555Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.25 3C11.25 2.58579 11.5858 2.25 12 2.25C17.3962 2.25 21.75 6.60379 21.75 12C21.75 17.3962 17.3962 21.75 12 21.75C11.5858 21.75 11.25 21.4142 11.25 21C11.25 20.5858 11.5858 20.25 12 20.25C16.5678 20.25 20.25 16.5678 20.25 12C20.25 7.43221 16.5678 3.75 12 3.75C11.5858 3.75 11.25 3.41421 11.25 3Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 3.75C7.43221 3.75 3.75 7.43221 3.75 12C3.75 16.5678 7.43221 20.25 12 20.25C12.4142 20.25 12.75 20.5858 12.75 21C12.75 21.4142 12.4142 21.75 12 21.75C6.60379 21.75 2.25 17.3962 2.25 12C2.25 6.60379 6.60379 2.25 12 2.25C12.4142 2.25 12.75 2.58579 12.75 3C12.75 3.41421 12.4142 3.75 12 3.75Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M2.75999 9C2.75999 8.58579 3.09578 8.25 3.50999 8.25H20.49C20.9042 8.25 21.24 8.58579 21.24 9C21.24 9.41421 20.9042 9.75 20.49 9.75H3.50999C3.09578 9.75 2.75999 9.41421 2.75999 9Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M2.75999 15C2.75999 14.5858 3.09578 14.25 3.50999 14.25H20.49C20.9042 14.25 21.24 14.5858 21.24 15C21.24 15.4142 20.9042 15.75 20.49 15.75H3.50999C3.09578 15.75 2.75999 15.4142 2.75999 15Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Hybrid</p>
                    </div>
                  </div>
                </div></a
              ><a class="item"
                ><div class="desktop">
                  <span> Senior Game Artist - Casual Games </span>
                  <p>Gaming</p>
                  <p>Art &amp; Design</p>
                  <p>Paris</p>
                  <p>Hybrid</p>
                </div>
                <div class="mobile">
                  <span> Senior Game Artist - Casual Games </span>
                  <div class="description">
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="users-2"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6 15.75C4.21421 15.75 2.75 17.2142 2.75 19C2.75 19.4142 2.41421 19.75 2 19.75C1.58579 19.75 1.25 19.4142 1.25 19C1.25 16.3858 3.38579 14.25 6 14.25H10C12.6142 14.25 14.75 16.3858 14.75 19C14.75 19.4142 14.4142 19.75 14 19.75C13.5858 19.75 13.25 19.4142 13.25 19C13.25 17.2142 11.7858 15.75 10 15.75H6Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M9.97947 6.54018C8.82861 5.48134 7.01733 5.46816 6.0496 6.51034C5.04291 7.59446 5.08987 9.24842 6.1496 10.3897C7.11984 11.4345 8.8389 11.419 9.98966 10.3504C11.0556 9.36056 11.0879 7.65878 9.97947 6.54018ZM11.0068 5.44708C9.35665 3.91831 6.57863 3.73619 4.9504 5.48966C3.35709 7.20554 3.51013 9.75158 5.0504 11.4103C6.68016 13.1655 9.3611 12.981 11.0103 11.4496C12.74 9.84344 12.7119 7.15488 11.0338 5.4731C11.0294 5.46869 11.025 5.46433 11.0205 5.46002C11.016 5.45564 11.0114 5.45132 11.0068 5.44708Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M15.25 14C15.25 13.5858 15.5858 13.25 16 13.25H19C21.1142 13.25 22.75 14.8858 22.75 17C22.75 17.4142 22.4142 17.75 22 17.75C21.5858 17.75 21.25 17.4142 21.25 17C21.25 15.7142 20.2858 14.75 19 14.75H16C15.5858 14.75 15.25 14.4142 15.25 14Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M18.7836 7.24441C18.0522 6.60027 16.919 6.64161 16.3303 7.23033C16.321 7.23962 16.3115 7.24867 16.3017 7.25747C15.6827 7.8146 15.6639 8.9276 16.3575 9.69828C16.9146 10.3173 18.0276 10.3361 18.7983 9.64253C19.4466 9.05901 19.4926 7.96805 18.7836 7.24441ZM19.7966 6.1379C18.5319 5.00456 16.4912 4.96427 15.2837 6.15573C13.9189 7.40013 14.14 9.47674 15.2425 10.7017C16.4854 12.0827 18.5724 11.8639 19.8017 10.7575C21.1474 9.54633 21.1069 7.45152 19.8352 6.17456C19.829 6.16826 19.8227 6.16204 19.8162 6.15591C19.8097 6.14977 19.8032 6.14376 19.7966 6.1379Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Gaming</p>
                    </div>
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="target"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M14.5712 9.42882C14.8641 9.72172 14.8641 10.1966 14.5712 10.4895L12.0601 13.0005C11.7672 13.2934 11.2924 13.2934 10.9995 13.0005C10.7066 12.7076 10.7066 12.2328 10.9995 11.9399L13.5105 9.42882C13.8034 9.13593 14.2783 9.13593 14.5712 9.42882Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M18.1227 1.25553C18.3607 1.29417 18.5656 1.44486 18.6734 1.66053L19.8951 4.1049L22.3395 5.32663C22.5551 5.43442 22.7058 5.63932 22.7445 5.87731C22.7831 6.1153 22.705 6.35735 22.5345 6.52783L18.5328 10.5295C18.3922 10.6702 18.2014 10.7492 18.0025 10.7492H14.0008C13.5866 10.7492 13.2508 10.4134 13.2508 9.99917V5.9975C13.2508 5.79859 13.3298 5.60782 13.4705 5.46717L17.4722 1.46551C17.6426 1.29502 17.8847 1.21689 18.1227 1.25553ZM14.7508 6.30816V9.24917H17.6918L20.7379 6.20308L19.0007 5.33482C18.8555 5.26223 18.7378 5.14448 18.6652 4.99926L17.7969 3.26208L14.7508 6.30816Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.7482 3.92571C11.7735 4.33915 11.459 4.69487 11.0455 4.72025C6.88357 4.9757 3.66447 8.46941 3.74982 12.6383C3.83517 16.8072 7.19457 20.1663 11.3635 20.2511C15.5324 20.336 19.0258 17.1165 19.2807 12.9546C19.3061 12.5411 19.6618 12.2265 20.0752 12.2518C20.4886 12.2772 20.8033 12.6328 20.7779 13.0463C20.4737 18.0114 16.3063 21.8521 11.3329 21.7508C6.35959 21.6496 2.35195 17.6424 2.25013 12.669C2.14831 7.69567 5.98858 3.5278 10.9536 3.22307C11.3671 3.19769 11.7228 3.51228 11.7482 3.92571Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.7451 7.70683C11.7901 8.1186 11.4928 8.48885 11.081 8.53382C9.00869 8.76011 7.4628 10.5482 7.53836 12.6314C7.61393 14.7147 9.2853 16.3861 11.3686 16.4616C13.4518 16.5372 15.2399 14.9913 15.4662 12.919C15.5111 12.5072 15.8814 12.2099 16.2932 12.2549C16.7049 12.2998 17.0023 12.6701 16.9573 13.0818C16.6457 15.9358 14.1832 18.0647 11.3142 17.9607C8.44518 17.8566 6.14341 15.5548 6.03935 12.6858C5.93528 9.81681 8.06424 7.35433 10.9182 7.04268C11.3299 6.99772 11.7002 7.29507 11.7451 7.70683Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Art &amp; Design</p>
                    </div>
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="pin-map-location"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 7.75C10.7572 7.75 9.75 8.75721 9.75 10C9.75 11.2428 10.7572 12.25 12 12.25C13.2428 12.25 14.25 11.2428 14.25 10C14.25 8.75721 13.2428 7.75 12 7.75ZM8.25 10C8.25 7.92879 9.92879 6.25 12 6.25C14.0712 6.25 15.75 7.92879 15.75 10C15.75 12.0712 14.0712 13.75 12 13.75C9.92879 13.75 8.25 12.0712 8.25 10Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 3.75C8.54821 3.75 5.75 6.54821 5.75 10C5.75 12.3384 7.33713 14.908 9.07546 16.9878C9.92687 18.0064 10.7804 18.8678 11.4218 19.4748C11.6434 19.6846 11.8392 19.8634 12 20.0073C12.1608 19.8634 12.3566 19.6846 12.5782 19.4748C13.2196 18.8678 14.0731 18.0064 14.9245 16.9878C16.6629 14.908 18.25 12.3384 18.25 10C18.25 6.54821 15.4518 3.75 12 3.75ZM12 21C11.5239 21.5795 11.5238 21.5794 11.5236 21.5793L11.5217 21.5777L11.5168 21.5737L11.4997 21.5595C11.4851 21.5472 11.464 21.5296 11.4368 21.5066C11.3826 21.4607 11.3043 21.3937 11.2053 21.3071C11.0075 21.134 10.7267 20.8823 10.3907 20.5643C9.71961 19.9291 8.82313 19.0248 7.92454 17.9497C6.16287 15.842 4.25 12.9116 4.25 10C4.25 5.71979 7.71979 2.25 12 2.25C16.2802 2.25 19.75 5.71979 19.75 10C19.75 12.9116 17.8371 15.842 16.0755 17.9497C15.1769 19.0248 14.2804 19.9291 13.6093 20.5643C13.2733 20.8823 12.9925 21.134 12.7947 21.3071C12.6957 21.3937 12.6174 21.4607 12.5632 21.5066C12.536 21.5296 12.5149 21.5472 12.5003 21.5595L12.4832 21.5737L12.4783 21.5777L12.4769 21.5789C12.4767 21.579 12.4761 21.5795 12 21ZM12 21L12.4761 21.5795C12.1994 21.8068 11.8003 21.8065 11.5236 21.5793L12 21Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Paris</p>
                    </div>
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="earth-world-globe"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.4842 2.5555C11.785 2.27065 12.2597 2.28351 12.5445 2.58423C17.4855 7.80049 17.4855 16.1995 12.5445 21.4158C12.2597 21.7165 11.785 21.7294 11.4842 21.4445C11.1835 21.1597 11.1706 20.685 11.4555 20.3842C15.8485 15.7465 15.8485 8.25351 11.4555 3.61577C11.1706 3.31505 11.1835 2.84035 11.4842 2.5555Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12.5158 2.5555C12.8165 2.84035 12.8294 3.31505 12.5445 3.61577C8.1515 8.25351 8.1515 15.7465 12.5445 20.3842C12.8294 20.685 12.8165 21.1597 12.5158 21.4445C12.2151 21.7294 11.7404 21.7165 11.4555 21.4158C6.51451 16.1995 6.51451 7.80049 11.4555 2.58423C11.7404 2.28351 12.2151 2.27065 12.5158 2.5555Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.25 3C11.25 2.58579 11.5858 2.25 12 2.25C17.3962 2.25 21.75 6.60379 21.75 12C21.75 17.3962 17.3962 21.75 12 21.75C11.5858 21.75 11.25 21.4142 11.25 21C11.25 20.5858 11.5858 20.25 12 20.25C16.5678 20.25 20.25 16.5678 20.25 12C20.25 7.43221 16.5678 3.75 12 3.75C11.5858 3.75 11.25 3.41421 11.25 3Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 3.75C7.43221 3.75 3.75 7.43221 3.75 12C3.75 16.5678 7.43221 20.25 12 20.25C12.4142 20.25 12.75 20.5858 12.75 21C12.75 21.4142 12.4142 21.75 12 21.75C6.60379 21.75 2.25 17.3962 2.25 12C2.25 6.60379 6.60379 2.25 12 2.25C12.4142 2.25 12.75 2.58579 12.75 3C12.75 3.41421 12.4142 3.75 12 3.75Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M2.75999 9C2.75999 8.58579 3.09578 8.25 3.50999 8.25H20.49C20.9042 8.25 21.24 8.58579 21.24 9C21.24 9.41421 20.9042 9.75 20.49 9.75H3.50999C3.09578 9.75 2.75999 9.41421 2.75999 9Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M2.75999 15C2.75999 14.5858 3.09578 14.25 3.50999 14.25H20.49C20.9042 14.25 21.24 14.5858 21.24 15C21.24 15.4142 20.9042 15.75 20.49 15.75H3.50999C3.09578 15.75 2.75999 15.4142 2.75999 15Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Hybrid</p>
                    </div>
                  </div>
                </div></a
              ><a class="item"
                ><div class="desktop">
                  <span> Growth Manager - Wizz </span>
                  <p>Consumer Apps</p>
                  <p>User Acquisition &amp; Monetization</p>
                  <p>Paris</p>
                  <p>Hybrid</p>
                </div>
                <div class="mobile">
                  <span> Growth Manager - Wizz </span>
                  <div class="description">
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="users-2"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6 15.75C4.21421 15.75 2.75 17.2142 2.75 19C2.75 19.4142 2.41421 19.75 2 19.75C1.58579 19.75 1.25 19.4142 1.25 19C1.25 16.3858 3.38579 14.25 6 14.25H10C12.6142 14.25 14.75 16.3858 14.75 19C14.75 19.4142 14.4142 19.75 14 19.75C13.5858 19.75 13.25 19.4142 13.25 19C13.25 17.2142 11.7858 15.75 10 15.75H6Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M9.97947 6.54018C8.82861 5.48134 7.01733 5.46816 6.0496 6.51034C5.04291 7.59446 5.08987 9.24842 6.1496 10.3897C7.11984 11.4345 8.8389 11.419 9.98966 10.3504C11.0556 9.36056 11.0879 7.65878 9.97947 6.54018ZM11.0068 5.44708C9.35665 3.91831 6.57863 3.73619 4.9504 5.48966C3.35709 7.20554 3.51013 9.75158 5.0504 11.4103C6.68016 13.1655 9.3611 12.981 11.0103 11.4496C12.74 9.84344 12.7119 7.15488 11.0338 5.4731C11.0294 5.46869 11.025 5.46433 11.0205 5.46002C11.016 5.45564 11.0114 5.45132 11.0068 5.44708Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M15.25 14C15.25 13.5858 15.5858 13.25 16 13.25H19C21.1142 13.25 22.75 14.8858 22.75 17C22.75 17.4142 22.4142 17.75 22 17.75C21.5858 17.75 21.25 17.4142 21.25 17C21.25 15.7142 20.2858 14.75 19 14.75H16C15.5858 14.75 15.25 14.4142 15.25 14Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M18.7836 7.24441C18.0522 6.60027 16.919 6.64161 16.3303 7.23033C16.321 7.23962 16.3115 7.24867 16.3017 7.25747C15.6827 7.8146 15.6639 8.9276 16.3575 9.69828C16.9146 10.3173 18.0276 10.3361 18.7983 9.64253C19.4466 9.05901 19.4926 7.96805 18.7836 7.24441ZM19.7966 6.1379C18.5319 5.00456 16.4912 4.96427 15.2837 6.15573C13.9189 7.40013 14.14 9.47674 15.2425 10.7017C16.4854 12.0827 18.5724 11.8639 19.8017 10.7575C21.1474 9.54633 21.1069 7.45152 19.8352 6.17456C19.829 6.16826 19.8227 6.16204 19.8162 6.15591C19.8097 6.14977 19.8032 6.14376 19.7966 6.1379Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Consumer Apps</p>
                    </div>
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="target"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M14.5712 9.42882C14.8641 9.72172 14.8641 10.1966 14.5712 10.4895L12.0601 13.0005C11.7672 13.2934 11.2924 13.2934 10.9995 13.0005C10.7066 12.7076 10.7066 12.2328 10.9995 11.9399L13.5105 9.42882C13.8034 9.13593 14.2783 9.13593 14.5712 9.42882Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M18.1227 1.25553C18.3607 1.29417 18.5656 1.44486 18.6734 1.66053L19.8951 4.1049L22.3395 5.32663C22.5551 5.43442 22.7058 5.63932 22.7445 5.87731C22.7831 6.1153 22.705 6.35735 22.5345 6.52783L18.5328 10.5295C18.3922 10.6702 18.2014 10.7492 18.0025 10.7492H14.0008C13.5866 10.7492 13.2508 10.4134 13.2508 9.99917V5.9975C13.2508 5.79859 13.3298 5.60782 13.4705 5.46717L17.4722 1.46551C17.6426 1.29502 17.8847 1.21689 18.1227 1.25553ZM14.7508 6.30816V9.24917H17.6918L20.7379 6.20308L19.0007 5.33482C18.8555 5.26223 18.7378 5.14448 18.6652 4.99926L17.7969 3.26208L14.7508 6.30816Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.7482 3.92571C11.7735 4.33915 11.459 4.69487 11.0455 4.72025C6.88357 4.9757 3.66447 8.46941 3.74982 12.6383C3.83517 16.8072 7.19457 20.1663 11.3635 20.2511C15.5324 20.336 19.0258 17.1165 19.2807 12.9546C19.3061 12.5411 19.6618 12.2265 20.0752 12.2518C20.4886 12.2772 20.8033 12.6328 20.7779 13.0463C20.4737 18.0114 16.3063 21.8521 11.3329 21.7508C6.35959 21.6496 2.35195 17.6424 2.25013 12.669C2.14831 7.69567 5.98858 3.5278 10.9536 3.22307C11.3671 3.19769 11.7228 3.51228 11.7482 3.92571Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.7451 7.70683C11.7901 8.1186 11.4928 8.48885 11.081 8.53382C9.00869 8.76011 7.4628 10.5482 7.53836 12.6314C7.61393 14.7147 9.2853 16.3861 11.3686 16.4616C13.4518 16.5372 15.2399 14.9913 15.4662 12.919C15.5111 12.5072 15.8814 12.2099 16.2932 12.2549C16.7049 12.2998 17.0023 12.6701 16.9573 13.0818C16.6457 15.9358 14.1832 18.0647 11.3142 17.9607C8.44518 17.8566 6.14341 15.5548 6.03935 12.6858C5.93528 9.81681 8.06424 7.35433 10.9182 7.04268C11.3299 6.99772 11.7002 7.29507 11.7451 7.70683Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>User Acquisition &amp; Monetization</p>
                    </div>
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="pin-map-location"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 7.75C10.7572 7.75 9.75 8.75721 9.75 10C9.75 11.2428 10.7572 12.25 12 12.25C13.2428 12.25 14.25 11.2428 14.25 10C14.25 8.75721 13.2428 7.75 12 7.75ZM8.25 10C8.25 7.92879 9.92879 6.25 12 6.25C14.0712 6.25 15.75 7.92879 15.75 10C15.75 12.0712 14.0712 13.75 12 13.75C9.92879 13.75 8.25 12.0712 8.25 10Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 3.75C8.54821 3.75 5.75 6.54821 5.75 10C5.75 12.3384 7.33713 14.908 9.07546 16.9878C9.92687 18.0064 10.7804 18.8678 11.4218 19.4748C11.6434 19.6846 11.8392 19.8634 12 20.0073C12.1608 19.8634 12.3566 19.6846 12.5782 19.4748C13.2196 18.8678 14.0731 18.0064 14.9245 16.9878C16.6629 14.908 18.25 12.3384 18.25 10C18.25 6.54821 15.4518 3.75 12 3.75ZM12 21C11.5239 21.5795 11.5238 21.5794 11.5236 21.5793L11.5217 21.5777L11.5168 21.5737L11.4997 21.5595C11.4851 21.5472 11.464 21.5296 11.4368 21.5066C11.3826 21.4607 11.3043 21.3937 11.2053 21.3071C11.0075 21.134 10.7267 20.8823 10.3907 20.5643C9.71961 19.9291 8.82313 19.0248 7.92454 17.9497C6.16287 15.842 4.25 12.9116 4.25 10C4.25 5.71979 7.71979 2.25 12 2.25C16.2802 2.25 19.75 5.71979 19.75 10C19.75 12.9116 17.8371 15.842 16.0755 17.9497C15.1769 19.0248 14.2804 19.9291 13.6093 20.5643C13.2733 20.8823 12.9925 21.134 12.7947 21.3071C12.6957 21.3937 12.6174 21.4607 12.5632 21.5066C12.536 21.5296 12.5149 21.5472 12.5003 21.5595L12.4832 21.5737L12.4783 21.5777L12.4769 21.5789C12.4767 21.579 12.4761 21.5795 12 21ZM12 21L12.4761 21.5795C12.1994 21.8068 11.8003 21.8065 11.5236 21.5793L12 21Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Paris</p>
                    </div>
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="earth-world-globe"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.4842 2.5555C11.785 2.27065 12.2597 2.28351 12.5445 2.58423C17.4855 7.80049 17.4855 16.1995 12.5445 21.4158C12.2597 21.7165 11.785 21.7294 11.4842 21.4445C11.1835 21.1597 11.1706 20.685 11.4555 20.3842C15.8485 15.7465 15.8485 8.25351 11.4555 3.61577C11.1706 3.31505 11.1835 2.84035 11.4842 2.5555Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12.5158 2.5555C12.8165 2.84035 12.8294 3.31505 12.5445 3.61577C8.1515 8.25351 8.1515 15.7465 12.5445 20.3842C12.8294 20.685 12.8165 21.1597 12.5158 21.4445C12.2151 21.7294 11.7404 21.7165 11.4555 21.4158C6.51451 16.1995 6.51451 7.80049 11.4555 2.58423C11.7404 2.28351 12.2151 2.27065 12.5158 2.5555Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.25 3C11.25 2.58579 11.5858 2.25 12 2.25C17.3962 2.25 21.75 6.60379 21.75 12C21.75 17.3962 17.3962 21.75 12 21.75C11.5858 21.75 11.25 21.4142 11.25 21C11.25 20.5858 11.5858 20.25 12 20.25C16.5678 20.25 20.25 16.5678 20.25 12C20.25 7.43221 16.5678 3.75 12 3.75C11.5858 3.75 11.25 3.41421 11.25 3Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 3.75C7.43221 3.75 3.75 7.43221 3.75 12C3.75 16.5678 7.43221 20.25 12 20.25C12.4142 20.25 12.75 20.5858 12.75 21C12.75 21.4142 12.4142 21.75 12 21.75C6.60379 21.75 2.25 17.3962 2.25 12C2.25 6.60379 6.60379 2.25 12 2.25C12.4142 2.25 12.75 2.58579 12.75 3C12.75 3.41421 12.4142 3.75 12 3.75Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M2.75999 9C2.75999 8.58579 3.09578 8.25 3.50999 8.25H20.49C20.9042 8.25 21.24 8.58579 21.24 9C21.24 9.41421 20.9042 9.75 20.49 9.75H3.50999C3.09578 9.75 2.75999 9.41421 2.75999 9Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M2.75999 15C2.75999 14.5858 3.09578 14.25 3.50999 14.25H20.49C20.9042 14.25 21.24 14.5858 21.24 15C21.24 15.4142 20.9042 15.75 20.49 15.75H3.50999C3.09578 15.75 2.75999 15.4142 2.75999 15Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Hybrid</p>
                    </div>
                  </div>
                </div></a
              ><a class="item"
                ><div class="desktop">
                  <span> Front-End Engineer (Vue.JS) - Blockchain </span>
                  <p>Blockchain</p>
                  <p>Engineering</p>
                  <p>Paris</p>
                  <p>Hybrid</p>
                </div>
                <div class="mobile">
                  <span> Front-End Engineer (Vue.JS) - Blockchain </span>
                  <div class="description">
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="users-2"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6 15.75C4.21421 15.75 2.75 17.2142 2.75 19C2.75 19.4142 2.41421 19.75 2 19.75C1.58579 19.75 1.25 19.4142 1.25 19C1.25 16.3858 3.38579 14.25 6 14.25H10C12.6142 14.25 14.75 16.3858 14.75 19C14.75 19.4142 14.4142 19.75 14 19.75C13.5858 19.75 13.25 19.4142 13.25 19C13.25 17.2142 11.7858 15.75 10 15.75H6Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M9.97947 6.54018C8.82861 5.48134 7.01733 5.46816 6.0496 6.51034C5.04291 7.59446 5.08987 9.24842 6.1496 10.3897C7.11984 11.4345 8.8389 11.419 9.98966 10.3504C11.0556 9.36056 11.0879 7.65878 9.97947 6.54018ZM11.0068 5.44708C9.35665 3.91831 6.57863 3.73619 4.9504 5.48966C3.35709 7.20554 3.51013 9.75158 5.0504 11.4103C6.68016 13.1655 9.3611 12.981 11.0103 11.4496C12.74 9.84344 12.7119 7.15488 11.0338 5.4731C11.0294 5.46869 11.025 5.46433 11.0205 5.46002C11.016 5.45564 11.0114 5.45132 11.0068 5.44708Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M15.25 14C15.25 13.5858 15.5858 13.25 16 13.25H19C21.1142 13.25 22.75 14.8858 22.75 17C22.75 17.4142 22.4142 17.75 22 17.75C21.5858 17.75 21.25 17.4142 21.25 17C21.25 15.7142 20.2858 14.75 19 14.75H16C15.5858 14.75 15.25 14.4142 15.25 14Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M18.7836 7.24441C18.0522 6.60027 16.919 6.64161 16.3303 7.23033C16.321 7.23962 16.3115 7.24867 16.3017 7.25747C15.6827 7.8146 15.6639 8.9276 16.3575 9.69828C16.9146 10.3173 18.0276 10.3361 18.7983 9.64253C19.4466 9.05901 19.4926 7.96805 18.7836 7.24441ZM19.7966 6.1379C18.5319 5.00456 16.4912 4.96427 15.2837 6.15573C13.9189 7.40013 14.14 9.47674 15.2425 10.7017C16.4854 12.0827 18.5724 11.8639 19.8017 10.7575C21.1474 9.54633 21.1069 7.45152 19.8352 6.17456C19.829 6.16826 19.8227 6.16204 19.8162 6.15591C19.8097 6.14977 19.8032 6.14376 19.7966 6.1379Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Blockchain</p>
                    </div>
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="target"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M14.5712 9.42882C14.8641 9.72172 14.8641 10.1966 14.5712 10.4895L12.0601 13.0005C11.7672 13.2934 11.2924 13.2934 10.9995 13.0005C10.7066 12.7076 10.7066 12.2328 10.9995 11.9399L13.5105 9.42882C13.8034 9.13593 14.2783 9.13593 14.5712 9.42882Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M18.1227 1.25553C18.3607 1.29417 18.5656 1.44486 18.6734 1.66053L19.8951 4.1049L22.3395 5.32663C22.5551 5.43442 22.7058 5.63932 22.7445 5.87731C22.7831 6.1153 22.705 6.35735 22.5345 6.52783L18.5328 10.5295C18.3922 10.6702 18.2014 10.7492 18.0025 10.7492H14.0008C13.5866 10.7492 13.2508 10.4134 13.2508 9.99917V5.9975C13.2508 5.79859 13.3298 5.60782 13.4705 5.46717L17.4722 1.46551C17.6426 1.29502 17.8847 1.21689 18.1227 1.25553ZM14.7508 6.30816V9.24917H17.6918L20.7379 6.20308L19.0007 5.33482C18.8555 5.26223 18.7378 5.14448 18.6652 4.99926L17.7969 3.26208L14.7508 6.30816Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.7482 3.92571C11.7735 4.33915 11.459 4.69487 11.0455 4.72025C6.88357 4.9757 3.66447 8.46941 3.74982 12.6383C3.83517 16.8072 7.19457 20.1663 11.3635 20.2511C15.5324 20.336 19.0258 17.1165 19.2807 12.9546C19.3061 12.5411 19.6618 12.2265 20.0752 12.2518C20.4886 12.2772 20.8033 12.6328 20.7779 13.0463C20.4737 18.0114 16.3063 21.8521 11.3329 21.7508C6.35959 21.6496 2.35195 17.6424 2.25013 12.669C2.14831 7.69567 5.98858 3.5278 10.9536 3.22307C11.3671 3.19769 11.7228 3.51228 11.7482 3.92571Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.7451 7.70683C11.7901 8.1186 11.4928 8.48885 11.081 8.53382C9.00869 8.76011 7.4628 10.5482 7.53836 12.6314C7.61393 14.7147 9.2853 16.3861 11.3686 16.4616C13.4518 16.5372 15.2399 14.9913 15.4662 12.919C15.5111 12.5072 15.8814 12.2099 16.2932 12.2549C16.7049 12.2998 17.0023 12.6701 16.9573 13.0818C16.6457 15.9358 14.1832 18.0647 11.3142 17.9607C8.44518 17.8566 6.14341 15.5548 6.03935 12.6858C5.93528 9.81681 8.06424 7.35433 10.9182 7.04268C11.3299 6.99772 11.7002 7.29507 11.7451 7.70683Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Engineering</p>
                    </div>
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="pin-map-location"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 7.75C10.7572 7.75 9.75 8.75721 9.75 10C9.75 11.2428 10.7572 12.25 12 12.25C13.2428 12.25 14.25 11.2428 14.25 10C14.25 8.75721 13.2428 7.75 12 7.75ZM8.25 10C8.25 7.92879 9.92879 6.25 12 6.25C14.0712 6.25 15.75 7.92879 15.75 10C15.75 12.0712 14.0712 13.75 12 13.75C9.92879 13.75 8.25 12.0712 8.25 10Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 3.75C8.54821 3.75 5.75 6.54821 5.75 10C5.75 12.3384 7.33713 14.908 9.07546 16.9878C9.92687 18.0064 10.7804 18.8678 11.4218 19.4748C11.6434 19.6846 11.8392 19.8634 12 20.0073C12.1608 19.8634 12.3566 19.6846 12.5782 19.4748C13.2196 18.8678 14.0731 18.0064 14.9245 16.9878C16.6629 14.908 18.25 12.3384 18.25 10C18.25 6.54821 15.4518 3.75 12 3.75ZM12 21C11.5239 21.5795 11.5238 21.5794 11.5236 21.5793L11.5217 21.5777L11.5168 21.5737L11.4997 21.5595C11.4851 21.5472 11.464 21.5296 11.4368 21.5066C11.3826 21.4607 11.3043 21.3937 11.2053 21.3071C11.0075 21.134 10.7267 20.8823 10.3907 20.5643C9.71961 19.9291 8.82313 19.0248 7.92454 17.9497C6.16287 15.842 4.25 12.9116 4.25 10C4.25 5.71979 7.71979 2.25 12 2.25C16.2802 2.25 19.75 5.71979 19.75 10C19.75 12.9116 17.8371 15.842 16.0755 17.9497C15.1769 19.0248 14.2804 19.9291 13.6093 20.5643C13.2733 20.8823 12.9925 21.134 12.7947 21.3071C12.6957 21.3937 12.6174 21.4607 12.5632 21.5066C12.536 21.5296 12.5149 21.5472 12.5003 21.5595L12.4832 21.5737L12.4783 21.5777L12.4769 21.5789C12.4767 21.579 12.4761 21.5795 12 21ZM12 21L12.4761 21.5795C12.1994 21.8068 11.8003 21.8065 11.5236 21.5793L12 21Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Paris</p>
                    </div>
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="earth-world-globe"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.4842 2.5555C11.785 2.27065 12.2597 2.28351 12.5445 2.58423C17.4855 7.80049 17.4855 16.1995 12.5445 21.4158C12.2597 21.7165 11.785 21.7294 11.4842 21.4445C11.1835 21.1597 11.1706 20.685 11.4555 20.3842C15.8485 15.7465 15.8485 8.25351 11.4555 3.61577C11.1706 3.31505 11.1835 2.84035 11.4842 2.5555Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12.5158 2.5555C12.8165 2.84035 12.8294 3.31505 12.5445 3.61577C8.1515 8.25351 8.1515 15.7465 12.5445 20.3842C12.8294 20.685 12.8165 21.1597 12.5158 21.4445C12.2151 21.7294 11.7404 21.7165 11.4555 21.4158C6.51451 16.1995 6.51451 7.80049 11.4555 2.58423C11.7404 2.28351 12.2151 2.27065 12.5158 2.5555Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.25 3C11.25 2.58579 11.5858 2.25 12 2.25C17.3962 2.25 21.75 6.60379 21.75 12C21.75 17.3962 17.3962 21.75 12 21.75C11.5858 21.75 11.25 21.4142 11.25 21C11.25 20.5858 11.5858 20.25 12 20.25C16.5678 20.25 20.25 16.5678 20.25 12C20.25 7.43221 16.5678 3.75 12 3.75C11.5858 3.75 11.25 3.41421 11.25 3Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 3.75C7.43221 3.75 3.75 7.43221 3.75 12C3.75 16.5678 7.43221 20.25 12 20.25C12.4142 20.25 12.75 20.5858 12.75 21C12.75 21.4142 12.4142 21.75 12 21.75C6.60379 21.75 2.25 17.3962 2.25 12C2.25 6.60379 6.60379 2.25 12 2.25C12.4142 2.25 12.75 2.58579 12.75 3C12.75 3.41421 12.4142 3.75 12 3.75Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M2.75999 9C2.75999 8.58579 3.09578 8.25 3.50999 8.25H20.49C20.9042 8.25 21.24 8.58579 21.24 9C21.24 9.41421 20.9042 9.75 20.49 9.75H3.50999C3.09578 9.75 2.75999 9.41421 2.75999 9Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M2.75999 15C2.75999 14.5858 3.09578 14.25 3.50999 14.25H20.49C20.9042 14.25 21.24 14.5858 21.24 15C21.24 15.4142 20.9042 15.75 20.49 15.75H3.50999C3.09578 15.75 2.75999 15.4142 2.75999 15Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Hybrid</p>
                    </div>
                  </div>
                </div></a
              ><a class="item"
                ><div class="desktop">
                  <span> Publishing Manager - Blockchain </span>
                  <p>Blockchain</p>
                  <p>Product Management</p>
                  <p>Paris</p>
                  <p>Hybrid</p>
                </div>
                <div class="mobile">
                  <span> Publishing Manager - Blockchain </span>
                  <div class="description">
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="users-2"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6 15.75C4.21421 15.75 2.75 17.2142 2.75 19C2.75 19.4142 2.41421 19.75 2 19.75C1.58579 19.75 1.25 19.4142 1.25 19C1.25 16.3858 3.38579 14.25 6 14.25H10C12.6142 14.25 14.75 16.3858 14.75 19C14.75 19.4142 14.4142 19.75 14 19.75C13.5858 19.75 13.25 19.4142 13.25 19C13.25 17.2142 11.7858 15.75 10 15.75H6Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M9.97947 6.54018C8.82861 5.48134 7.01733 5.46816 6.0496 6.51034C5.04291 7.59446 5.08987 9.24842 6.1496 10.3897C7.11984 11.4345 8.8389 11.419 9.98966 10.3504C11.0556 9.36056 11.0879 7.65878 9.97947 6.54018ZM11.0068 5.44708C9.35665 3.91831 6.57863 3.73619 4.9504 5.48966C3.35709 7.20554 3.51013 9.75158 5.0504 11.4103C6.68016 13.1655 9.3611 12.981 11.0103 11.4496C12.74 9.84344 12.7119 7.15488 11.0338 5.4731C11.0294 5.46869 11.025 5.46433 11.0205 5.46002C11.016 5.45564 11.0114 5.45132 11.0068 5.44708Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M15.25 14C15.25 13.5858 15.5858 13.25 16 13.25H19C21.1142 13.25 22.75 14.8858 22.75 17C22.75 17.4142 22.4142 17.75 22 17.75C21.5858 17.75 21.25 17.4142 21.25 17C21.25 15.7142 20.2858 14.75 19 14.75H16C15.5858 14.75 15.25 14.4142 15.25 14Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M18.7836 7.24441C18.0522 6.60027 16.919 6.64161 16.3303 7.23033C16.321 7.23962 16.3115 7.24867 16.3017 7.25747C15.6827 7.8146 15.6639 8.9276 16.3575 9.69828C16.9146 10.3173 18.0276 10.3361 18.7983 9.64253C19.4466 9.05901 19.4926 7.96805 18.7836 7.24441ZM19.7966 6.1379C18.5319 5.00456 16.4912 4.96427 15.2837 6.15573C13.9189 7.40013 14.14 9.47674 15.2425 10.7017C16.4854 12.0827 18.5724 11.8639 19.8017 10.7575C21.1474 9.54633 21.1069 7.45152 19.8352 6.17456C19.829 6.16826 19.8227 6.16204 19.8162 6.15591C19.8097 6.14977 19.8032 6.14376 19.7966 6.1379Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Blockchain</p>
                    </div>
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="target"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M14.5712 9.42882C14.8641 9.72172 14.8641 10.1966 14.5712 10.4895L12.0601 13.0005C11.7672 13.2934 11.2924 13.2934 10.9995 13.0005C10.7066 12.7076 10.7066 12.2328 10.9995 11.9399L13.5105 9.42882C13.8034 9.13593 14.2783 9.13593 14.5712 9.42882Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M18.1227 1.25553C18.3607 1.29417 18.5656 1.44486 18.6734 1.66053L19.8951 4.1049L22.3395 5.32663C22.5551 5.43442 22.7058 5.63932 22.7445 5.87731C22.7831 6.1153 22.705 6.35735 22.5345 6.52783L18.5328 10.5295C18.3922 10.6702 18.2014 10.7492 18.0025 10.7492H14.0008C13.5866 10.7492 13.2508 10.4134 13.2508 9.99917V5.9975C13.2508 5.79859 13.3298 5.60782 13.4705 5.46717L17.4722 1.46551C17.6426 1.29502 17.8847 1.21689 18.1227 1.25553ZM14.7508 6.30816V9.24917H17.6918L20.7379 6.20308L19.0007 5.33482C18.8555 5.26223 18.7378 5.14448 18.6652 4.99926L17.7969 3.26208L14.7508 6.30816Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.7482 3.92571C11.7735 4.33915 11.459 4.69487 11.0455 4.72025C6.88357 4.9757 3.66447 8.46941 3.74982 12.6383C3.83517 16.8072 7.19457 20.1663 11.3635 20.2511C15.5324 20.336 19.0258 17.1165 19.2807 12.9546C19.3061 12.5411 19.6618 12.2265 20.0752 12.2518C20.4886 12.2772 20.8033 12.6328 20.7779 13.0463C20.4737 18.0114 16.3063 21.8521 11.3329 21.7508C6.35959 21.6496 2.35195 17.6424 2.25013 12.669C2.14831 7.69567 5.98858 3.5278 10.9536 3.22307C11.3671 3.19769 11.7228 3.51228 11.7482 3.92571Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.7451 7.70683C11.7901 8.1186 11.4928 8.48885 11.081 8.53382C9.00869 8.76011 7.4628 10.5482 7.53836 12.6314C7.61393 14.7147 9.2853 16.3861 11.3686 16.4616C13.4518 16.5372 15.2399 14.9913 15.4662 12.919C15.5111 12.5072 15.8814 12.2099 16.2932 12.2549C16.7049 12.2998 17.0023 12.6701 16.9573 13.0818C16.6457 15.9358 14.1832 18.0647 11.3142 17.9607C8.44518 17.8566 6.14341 15.5548 6.03935 12.6858C5.93528 9.81681 8.06424 7.35433 10.9182 7.04268C11.3299 6.99772 11.7002 7.29507 11.7451 7.70683Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Product Management</p>
                    </div>
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="pin-map-location"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 7.75C10.7572 7.75 9.75 8.75721 9.75 10C9.75 11.2428 10.7572 12.25 12 12.25C13.2428 12.25 14.25 11.2428 14.25 10C14.25 8.75721 13.2428 7.75 12 7.75ZM8.25 10C8.25 7.92879 9.92879 6.25 12 6.25C14.0712 6.25 15.75 7.92879 15.75 10C15.75 12.0712 14.0712 13.75 12 13.75C9.92879 13.75 8.25 12.0712 8.25 10Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 3.75C8.54821 3.75 5.75 6.54821 5.75 10C5.75 12.3384 7.33713 14.908 9.07546 16.9878C9.92687 18.0064 10.7804 18.8678 11.4218 19.4748C11.6434 19.6846 11.8392 19.8634 12 20.0073C12.1608 19.8634 12.3566 19.6846 12.5782 19.4748C13.2196 18.8678 14.0731 18.0064 14.9245 16.9878C16.6629 14.908 18.25 12.3384 18.25 10C18.25 6.54821 15.4518 3.75 12 3.75ZM12 21C11.5239 21.5795 11.5238 21.5794 11.5236 21.5793L11.5217 21.5777L11.5168 21.5737L11.4997 21.5595C11.4851 21.5472 11.464 21.5296 11.4368 21.5066C11.3826 21.4607 11.3043 21.3937 11.2053 21.3071C11.0075 21.134 10.7267 20.8823 10.3907 20.5643C9.71961 19.9291 8.82313 19.0248 7.92454 17.9497C6.16287 15.842 4.25 12.9116 4.25 10C4.25 5.71979 7.71979 2.25 12 2.25C16.2802 2.25 19.75 5.71979 19.75 10C19.75 12.9116 17.8371 15.842 16.0755 17.9497C15.1769 19.0248 14.2804 19.9291 13.6093 20.5643C13.2733 20.8823 12.9925 21.134 12.7947 21.3071C12.6957 21.3937 12.6174 21.4607 12.5632 21.5066C12.536 21.5296 12.5149 21.5472 12.5003 21.5595L12.4832 21.5737L12.4783 21.5777L12.4769 21.5789C12.4767 21.579 12.4761 21.5795 12 21ZM12 21L12.4761 21.5795C12.1994 21.8068 11.8003 21.8065 11.5236 21.5793L12 21Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Paris</p>
                    </div>
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="earth-world-globe"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.4842 2.5555C11.785 2.27065 12.2597 2.28351 12.5445 2.58423C17.4855 7.80049 17.4855 16.1995 12.5445 21.4158C12.2597 21.7165 11.785 21.7294 11.4842 21.4445C11.1835 21.1597 11.1706 20.685 11.4555 20.3842C15.8485 15.7465 15.8485 8.25351 11.4555 3.61577C11.1706 3.31505 11.1835 2.84035 11.4842 2.5555Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12.5158 2.5555C12.8165 2.84035 12.8294 3.31505 12.5445 3.61577C8.1515 8.25351 8.1515 15.7465 12.5445 20.3842C12.8294 20.685 12.8165 21.1597 12.5158 21.4445C12.2151 21.7294 11.7404 21.7165 11.4555 21.4158C6.51451 16.1995 6.51451 7.80049 11.4555 2.58423C11.7404 2.28351 12.2151 2.27065 12.5158 2.5555Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.25 3C11.25 2.58579 11.5858 2.25 12 2.25C17.3962 2.25 21.75 6.60379 21.75 12C21.75 17.3962 17.3962 21.75 12 21.75C11.5858 21.75 11.25 21.4142 11.25 21C11.25 20.5858 11.5858 20.25 12 20.25C16.5678 20.25 20.25 16.5678 20.25 12C20.25 7.43221 16.5678 3.75 12 3.75C11.5858 3.75 11.25 3.41421 11.25 3Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 3.75C7.43221 3.75 3.75 7.43221 3.75 12C3.75 16.5678 7.43221 20.25 12 20.25C12.4142 20.25 12.75 20.5858 12.75 21C12.75 21.4142 12.4142 21.75 12 21.75C6.60379 21.75 2.25 17.3962 2.25 12C2.25 6.60379 6.60379 2.25 12 2.25C12.4142 2.25 12.75 2.58579 12.75 3C12.75 3.41421 12.4142 3.75 12 3.75Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M2.75999 9C2.75999 8.58579 3.09578 8.25 3.50999 8.25H20.49C20.9042 8.25 21.24 8.58579 21.24 9C21.24 9.41421 20.9042 9.75 20.49 9.75H3.50999C3.09578 9.75 2.75999 9.41421 2.75999 9Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M2.75999 15C2.75999 14.5858 3.09578 14.25 3.50999 14.25H20.49C20.9042 14.25 21.24 14.5858 21.24 15C21.24 15.4142 20.9042 15.75 20.49 15.75H3.50999C3.09578 15.75 2.75999 15.4142 2.75999 15Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Hybrid</p>
                    </div>
                  </div>
                </div></a
              ><a class="item"
                ><div class="desktop">
                  <span> Unity Developer - Blockchain </span>
                  <p>Blockchain</p>
                  <p>Game Development</p>
                  <p>Paris</p>
                  <p>Hybrid</p>
                </div>
                <div class="mobile">
                  <span> Unity Developer - Blockchain </span>
                  <div class="description">
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="users-2"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6 15.75C4.21421 15.75 2.75 17.2142 2.75 19C2.75 19.4142 2.41421 19.75 2 19.75C1.58579 19.75 1.25 19.4142 1.25 19C1.25 16.3858 3.38579 14.25 6 14.25H10C12.6142 14.25 14.75 16.3858 14.75 19C14.75 19.4142 14.4142 19.75 14 19.75C13.5858 19.75 13.25 19.4142 13.25 19C13.25 17.2142 11.7858 15.75 10 15.75H6Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M9.97947 6.54018C8.82861 5.48134 7.01733 5.46816 6.0496 6.51034C5.04291 7.59446 5.08987 9.24842 6.1496 10.3897C7.11984 11.4345 8.8389 11.419 9.98966 10.3504C11.0556 9.36056 11.0879 7.65878 9.97947 6.54018ZM11.0068 5.44708C9.35665 3.91831 6.57863 3.73619 4.9504 5.48966C3.35709 7.20554 3.51013 9.75158 5.0504 11.4103C6.68016 13.1655 9.3611 12.981 11.0103 11.4496C12.74 9.84344 12.7119 7.15488 11.0338 5.4731C11.0294 5.46869 11.025 5.46433 11.0205 5.46002C11.016 5.45564 11.0114 5.45132 11.0068 5.44708Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M15.25 14C15.25 13.5858 15.5858 13.25 16 13.25H19C21.1142 13.25 22.75 14.8858 22.75 17C22.75 17.4142 22.4142 17.75 22 17.75C21.5858 17.75 21.25 17.4142 21.25 17C21.25 15.7142 20.2858 14.75 19 14.75H16C15.5858 14.75 15.25 14.4142 15.25 14Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M18.7836 7.24441C18.0522 6.60027 16.919 6.64161 16.3303 7.23033C16.321 7.23962 16.3115 7.24867 16.3017 7.25747C15.6827 7.8146 15.6639 8.9276 16.3575 9.69828C16.9146 10.3173 18.0276 10.3361 18.7983 9.64253C19.4466 9.05901 19.4926 7.96805 18.7836 7.24441ZM19.7966 6.1379C18.5319 5.00456 16.4912 4.96427 15.2837 6.15573C13.9189 7.40013 14.14 9.47674 15.2425 10.7017C16.4854 12.0827 18.5724 11.8639 19.8017 10.7575C21.1474 9.54633 21.1069 7.45152 19.8352 6.17456C19.829 6.16826 19.8227 6.16204 19.8162 6.15591C19.8097 6.14977 19.8032 6.14376 19.7966 6.1379Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Blockchain</p>
                    </div>
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="target"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M14.5712 9.42882C14.8641 9.72172 14.8641 10.1966 14.5712 10.4895L12.0601 13.0005C11.7672 13.2934 11.2924 13.2934 10.9995 13.0005C10.7066 12.7076 10.7066 12.2328 10.9995 11.9399L13.5105 9.42882C13.8034 9.13593 14.2783 9.13593 14.5712 9.42882Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M18.1227 1.25553C18.3607 1.29417 18.5656 1.44486 18.6734 1.66053L19.8951 4.1049L22.3395 5.32663C22.5551 5.43442 22.7058 5.63932 22.7445 5.87731C22.7831 6.1153 22.705 6.35735 22.5345 6.52783L18.5328 10.5295C18.3922 10.6702 18.2014 10.7492 18.0025 10.7492H14.0008C13.5866 10.7492 13.2508 10.4134 13.2508 9.99917V5.9975C13.2508 5.79859 13.3298 5.60782 13.4705 5.46717L17.4722 1.46551C17.6426 1.29502 17.8847 1.21689 18.1227 1.25553ZM14.7508 6.30816V9.24917H17.6918L20.7379 6.20308L19.0007 5.33482C18.8555 5.26223 18.7378 5.14448 18.6652 4.99926L17.7969 3.26208L14.7508 6.30816Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.7482 3.92571C11.7735 4.33915 11.459 4.69487 11.0455 4.72025C6.88357 4.9757 3.66447 8.46941 3.74982 12.6383C3.83517 16.8072 7.19457 20.1663 11.3635 20.2511C15.5324 20.336 19.0258 17.1165 19.2807 12.9546C19.3061 12.5411 19.6618 12.2265 20.0752 12.2518C20.4886 12.2772 20.8033 12.6328 20.7779 13.0463C20.4737 18.0114 16.3063 21.8521 11.3329 21.7508C6.35959 21.6496 2.35195 17.6424 2.25013 12.669C2.14831 7.69567 5.98858 3.5278 10.9536 3.22307C11.3671 3.19769 11.7228 3.51228 11.7482 3.92571Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.7451 7.70683C11.7901 8.1186 11.4928 8.48885 11.081 8.53382C9.00869 8.76011 7.4628 10.5482 7.53836 12.6314C7.61393 14.7147 9.2853 16.3861 11.3686 16.4616C13.4518 16.5372 15.2399 14.9913 15.4662 12.919C15.5111 12.5072 15.8814 12.2099 16.2932 12.2549C16.7049 12.2998 17.0023 12.6701 16.9573 13.0818C16.6457 15.9358 14.1832 18.0647 11.3142 17.9607C8.44518 17.8566 6.14341 15.5548 6.03935 12.6858C5.93528 9.81681 8.06424 7.35433 10.9182 7.04268C11.3299 6.99772 11.7002 7.29507 11.7451 7.70683Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Game Development</p>
                    </div>
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="pin-map-location"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 7.75C10.7572 7.75 9.75 8.75721 9.75 10C9.75 11.2428 10.7572 12.25 12 12.25C13.2428 12.25 14.25 11.2428 14.25 10C14.25 8.75721 13.2428 7.75 12 7.75ZM8.25 10C8.25 7.92879 9.92879 6.25 12 6.25C14.0712 6.25 15.75 7.92879 15.75 10C15.75 12.0712 14.0712 13.75 12 13.75C9.92879 13.75 8.25 12.0712 8.25 10Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 3.75C8.54821 3.75 5.75 6.54821 5.75 10C5.75 12.3384 7.33713 14.908 9.07546 16.9878C9.92687 18.0064 10.7804 18.8678 11.4218 19.4748C11.6434 19.6846 11.8392 19.8634 12 20.0073C12.1608 19.8634 12.3566 19.6846 12.5782 19.4748C13.2196 18.8678 14.0731 18.0064 14.9245 16.9878C16.6629 14.908 18.25 12.3384 18.25 10C18.25 6.54821 15.4518 3.75 12 3.75ZM12 21C11.5239 21.5795 11.5238 21.5794 11.5236 21.5793L11.5217 21.5777L11.5168 21.5737L11.4997 21.5595C11.4851 21.5472 11.464 21.5296 11.4368 21.5066C11.3826 21.4607 11.3043 21.3937 11.2053 21.3071C11.0075 21.134 10.7267 20.8823 10.3907 20.5643C9.71961 19.9291 8.82313 19.0248 7.92454 17.9497C6.16287 15.842 4.25 12.9116 4.25 10C4.25 5.71979 7.71979 2.25 12 2.25C16.2802 2.25 19.75 5.71979 19.75 10C19.75 12.9116 17.8371 15.842 16.0755 17.9497C15.1769 19.0248 14.2804 19.9291 13.6093 20.5643C13.2733 20.8823 12.9925 21.134 12.7947 21.3071C12.6957 21.3937 12.6174 21.4607 12.5632 21.5066C12.536 21.5296 12.5149 21.5472 12.5003 21.5595L12.4832 21.5737L12.4783 21.5777L12.4769 21.5789C12.4767 21.579 12.4761 21.5795 12 21ZM12 21L12.4761 21.5795C12.1994 21.8068 11.8003 21.8065 11.5236 21.5793L12 21Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Paris</p>
                    </div>
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="earth-world-globe"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.4842 2.5555C11.785 2.27065 12.2597 2.28351 12.5445 2.58423C17.4855 7.80049 17.4855 16.1995 12.5445 21.4158C12.2597 21.7165 11.785 21.7294 11.4842 21.4445C11.1835 21.1597 11.1706 20.685 11.4555 20.3842C15.8485 15.7465 15.8485 8.25351 11.4555 3.61577C11.1706 3.31505 11.1835 2.84035 11.4842 2.5555Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12.5158 2.5555C12.8165 2.84035 12.8294 3.31505 12.5445 3.61577C8.1515 8.25351 8.1515 15.7465 12.5445 20.3842C12.8294 20.685 12.8165 21.1597 12.5158 21.4445C12.2151 21.7294 11.7404 21.7165 11.4555 21.4158C6.51451 16.1995 6.51451 7.80049 11.4555 2.58423C11.7404 2.28351 12.2151 2.27065 12.5158 2.5555Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.25 3C11.25 2.58579 11.5858 2.25 12 2.25C17.3962 2.25 21.75 6.60379 21.75 12C21.75 17.3962 17.3962 21.75 12 21.75C11.5858 21.75 11.25 21.4142 11.25 21C11.25 20.5858 11.5858 20.25 12 20.25C16.5678 20.25 20.25 16.5678 20.25 12C20.25 7.43221 16.5678 3.75 12 3.75C11.5858 3.75 11.25 3.41421 11.25 3Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 3.75C7.43221 3.75 3.75 7.43221 3.75 12C3.75 16.5678 7.43221 20.25 12 20.25C12.4142 20.25 12.75 20.5858 12.75 21C12.75 21.4142 12.4142 21.75 12 21.75C6.60379 21.75 2.25 17.3962 2.25 12C2.25 6.60379 6.60379 2.25 12 2.25C12.4142 2.25 12.75 2.58579 12.75 3C12.75 3.41421 12.4142 3.75 12 3.75Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M2.75999 9C2.75999 8.58579 3.09578 8.25 3.50999 8.25H20.49C20.9042 8.25 21.24 8.58579 21.24 9C21.24 9.41421 20.9042 9.75 20.49 9.75H3.50999C3.09578 9.75 2.75999 9.41421 2.75999 9Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M2.75999 15C2.75999 14.5858 3.09578 14.25 3.50999 14.25H20.49C20.9042 14.25 21.24 14.5858 21.24 15C21.24 15.4142 20.9042 15.75 20.49 15.75H3.50999C3.09578 15.75 2.75999 15.4142 2.75999 15Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Hybrid</p>
                    </div>
                  </div>
                </div></a
              ><a class="item"
                ><div class="desktop">
                  <span> Blockchain Engineer </span>
                  <p>Blockchain</p>
                  <p>Product Management</p>
                  <p>Paris</p>
                  <p>Hybrid</p>
                </div>
                <div class="mobile">
                  <span> Blockchain Engineer </span>
                  <div class="description">
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="users-2"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6 15.75C4.21421 15.75 2.75 17.2142 2.75 19C2.75 19.4142 2.41421 19.75 2 19.75C1.58579 19.75 1.25 19.4142 1.25 19C1.25 16.3858 3.38579 14.25 6 14.25H10C12.6142 14.25 14.75 16.3858 14.75 19C14.75 19.4142 14.4142 19.75 14 19.75C13.5858 19.75 13.25 19.4142 13.25 19C13.25 17.2142 11.7858 15.75 10 15.75H6Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M9.97947 6.54018C8.82861 5.48134 7.01733 5.46816 6.0496 6.51034C5.04291 7.59446 5.08987 9.24842 6.1496 10.3897C7.11984 11.4345 8.8389 11.419 9.98966 10.3504C11.0556 9.36056 11.0879 7.65878 9.97947 6.54018ZM11.0068 5.44708C9.35665 3.91831 6.57863 3.73619 4.9504 5.48966C3.35709 7.20554 3.51013 9.75158 5.0504 11.4103C6.68016 13.1655 9.3611 12.981 11.0103 11.4496C12.74 9.84344 12.7119 7.15488 11.0338 5.4731C11.0294 5.46869 11.025 5.46433 11.0205 5.46002C11.016 5.45564 11.0114 5.45132 11.0068 5.44708Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M15.25 14C15.25 13.5858 15.5858 13.25 16 13.25H19C21.1142 13.25 22.75 14.8858 22.75 17C22.75 17.4142 22.4142 17.75 22 17.75C21.5858 17.75 21.25 17.4142 21.25 17C21.25 15.7142 20.2858 14.75 19 14.75H16C15.5858 14.75 15.25 14.4142 15.25 14Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M18.7836 7.24441C18.0522 6.60027 16.919 6.64161 16.3303 7.23033C16.321 7.23962 16.3115 7.24867 16.3017 7.25747C15.6827 7.8146 15.6639 8.9276 16.3575 9.69828C16.9146 10.3173 18.0276 10.3361 18.7983 9.64253C19.4466 9.05901 19.4926 7.96805 18.7836 7.24441ZM19.7966 6.1379C18.5319 5.00456 16.4912 4.96427 15.2837 6.15573C13.9189 7.40013 14.14 9.47674 15.2425 10.7017C16.4854 12.0827 18.5724 11.8639 19.8017 10.7575C21.1474 9.54633 21.1069 7.45152 19.8352 6.17456C19.829 6.16826 19.8227 6.16204 19.8162 6.15591C19.8097 6.14977 19.8032 6.14376 19.7966 6.1379Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Blockchain</p>
                    </div>
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="target"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M14.5712 9.42882C14.8641 9.72172 14.8641 10.1966 14.5712 10.4895L12.0601 13.0005C11.7672 13.2934 11.2924 13.2934 10.9995 13.0005C10.7066 12.7076 10.7066 12.2328 10.9995 11.9399L13.5105 9.42882C13.8034 9.13593 14.2783 9.13593 14.5712 9.42882Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M18.1227 1.25553C18.3607 1.29417 18.5656 1.44486 18.6734 1.66053L19.8951 4.1049L22.3395 5.32663C22.5551 5.43442 22.7058 5.63932 22.7445 5.87731C22.7831 6.1153 22.705 6.35735 22.5345 6.52783L18.5328 10.5295C18.3922 10.6702 18.2014 10.7492 18.0025 10.7492H14.0008C13.5866 10.7492 13.2508 10.4134 13.2508 9.99917V5.9975C13.2508 5.79859 13.3298 5.60782 13.4705 5.46717L17.4722 1.46551C17.6426 1.29502 17.8847 1.21689 18.1227 1.25553ZM14.7508 6.30816V9.24917H17.6918L20.7379 6.20308L19.0007 5.33482C18.8555 5.26223 18.7378 5.14448 18.6652 4.99926L17.7969 3.26208L14.7508 6.30816Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.7482 3.92571C11.7735 4.33915 11.459 4.69487 11.0455 4.72025C6.88357 4.9757 3.66447 8.46941 3.74982 12.6383C3.83517 16.8072 7.19457 20.1663 11.3635 20.2511C15.5324 20.336 19.0258 17.1165 19.2807 12.9546C19.3061 12.5411 19.6618 12.2265 20.0752 12.2518C20.4886 12.2772 20.8033 12.6328 20.7779 13.0463C20.4737 18.0114 16.3063 21.8521 11.3329 21.7508C6.35959 21.6496 2.35195 17.6424 2.25013 12.669C2.14831 7.69567 5.98858 3.5278 10.9536 3.22307C11.3671 3.19769 11.7228 3.51228 11.7482 3.92571Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.7451 7.70683C11.7901 8.1186 11.4928 8.48885 11.081 8.53382C9.00869 8.76011 7.4628 10.5482 7.53836 12.6314C7.61393 14.7147 9.2853 16.3861 11.3686 16.4616C13.4518 16.5372 15.2399 14.9913 15.4662 12.919C15.5111 12.5072 15.8814 12.2099 16.2932 12.2549C16.7049 12.2998 17.0023 12.6701 16.9573 13.0818C16.6457 15.9358 14.1832 18.0647 11.3142 17.9607C8.44518 17.8566 6.14341 15.5548 6.03935 12.6858C5.93528 9.81681 8.06424 7.35433 10.9182 7.04268C11.3299 6.99772 11.7002 7.29507 11.7451 7.70683Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Product Management</p>
                    </div>
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="pin-map-location"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 7.75C10.7572 7.75 9.75 8.75721 9.75 10C9.75 11.2428 10.7572 12.25 12 12.25C13.2428 12.25 14.25 11.2428 14.25 10C14.25 8.75721 13.2428 7.75 12 7.75ZM8.25 10C8.25 7.92879 9.92879 6.25 12 6.25C14.0712 6.25 15.75 7.92879 15.75 10C15.75 12.0712 14.0712 13.75 12 13.75C9.92879 13.75 8.25 12.0712 8.25 10Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 3.75C8.54821 3.75 5.75 6.54821 5.75 10C5.75 12.3384 7.33713 14.908 9.07546 16.9878C9.92687 18.0064 10.7804 18.8678 11.4218 19.4748C11.6434 19.6846 11.8392 19.8634 12 20.0073C12.1608 19.8634 12.3566 19.6846 12.5782 19.4748C13.2196 18.8678 14.0731 18.0064 14.9245 16.9878C16.6629 14.908 18.25 12.3384 18.25 10C18.25 6.54821 15.4518 3.75 12 3.75ZM12 21C11.5239 21.5795 11.5238 21.5794 11.5236 21.5793L11.5217 21.5777L11.5168 21.5737L11.4997 21.5595C11.4851 21.5472 11.464 21.5296 11.4368 21.5066C11.3826 21.4607 11.3043 21.3937 11.2053 21.3071C11.0075 21.134 10.7267 20.8823 10.3907 20.5643C9.71961 19.9291 8.82313 19.0248 7.92454 17.9497C6.16287 15.842 4.25 12.9116 4.25 10C4.25 5.71979 7.71979 2.25 12 2.25C16.2802 2.25 19.75 5.71979 19.75 10C19.75 12.9116 17.8371 15.842 16.0755 17.9497C15.1769 19.0248 14.2804 19.9291 13.6093 20.5643C13.2733 20.8823 12.9925 21.134 12.7947 21.3071C12.6957 21.3937 12.6174 21.4607 12.5632 21.5066C12.536 21.5296 12.5149 21.5472 12.5003 21.5595L12.4832 21.5737L12.4783 21.5777L12.4769 21.5789C12.4767 21.579 12.4761 21.5795 12 21ZM12 21L12.4761 21.5795C12.1994 21.8068 11.8003 21.8065 11.5236 21.5793L12 21Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Paris</p>
                    </div>
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="earth-world-globe"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.4842 2.5555C11.785 2.27065 12.2597 2.28351 12.5445 2.58423C17.4855 7.80049 17.4855 16.1995 12.5445 21.4158C12.2597 21.7165 11.785 21.7294 11.4842 21.4445C11.1835 21.1597 11.1706 20.685 11.4555 20.3842C15.8485 15.7465 15.8485 8.25351 11.4555 3.61577C11.1706 3.31505 11.1835 2.84035 11.4842 2.5555Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12.5158 2.5555C12.8165 2.84035 12.8294 3.31505 12.5445 3.61577C8.1515 8.25351 8.1515 15.7465 12.5445 20.3842C12.8294 20.685 12.8165 21.1597 12.5158 21.4445C12.2151 21.7294 11.7404 21.7165 11.4555 21.4158C6.51451 16.1995 6.51451 7.80049 11.4555 2.58423C11.7404 2.28351 12.2151 2.27065 12.5158 2.5555Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.25 3C11.25 2.58579 11.5858 2.25 12 2.25C17.3962 2.25 21.75 6.60379 21.75 12C21.75 17.3962 17.3962 21.75 12 21.75C11.5858 21.75 11.25 21.4142 11.25 21C11.25 20.5858 11.5858 20.25 12 20.25C16.5678 20.25 20.25 16.5678 20.25 12C20.25 7.43221 16.5678 3.75 12 3.75C11.5858 3.75 11.25 3.41421 11.25 3Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 3.75C7.43221 3.75 3.75 7.43221 3.75 12C3.75 16.5678 7.43221 20.25 12 20.25C12.4142 20.25 12.75 20.5858 12.75 21C12.75 21.4142 12.4142 21.75 12 21.75C6.60379 21.75 2.25 17.3962 2.25 12C2.25 6.60379 6.60379 2.25 12 2.25C12.4142 2.25 12.75 2.58579 12.75 3C12.75 3.41421 12.4142 3.75 12 3.75Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M2.75999 9C2.75999 8.58579 3.09578 8.25 3.50999 8.25H20.49C20.9042 8.25 21.24 8.58579 21.24 9C21.24 9.41421 20.9042 9.75 20.49 9.75H3.50999C3.09578 9.75 2.75999 9.41421 2.75999 9Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M2.75999 15C2.75999 14.5858 3.09578 14.25 3.50999 14.25H20.49C20.9042 14.25 21.24 14.5858 21.24 15C21.24 15.4142 20.9042 15.75 20.49 15.75H3.50999C3.09578 15.75 2.75999 15.4142 2.75999 15Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Hybrid</p>
                    </div>
                  </div>
                </div></a
              ><a class="item"
                ><div class="desktop">
                  <span> Senior UI Designer/Artist - Casual Games </span>
                  <p>Gaming</p>
                  <p>Art &amp; Design</p>
                  <p>Paris</p>
                  <p>Remote</p>
                </div>
                <div class="mobile">
                  <span> Senior UI Designer/Artist - Casual Games </span>
                  <div class="description">
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="users-2"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6 15.75C4.21421 15.75 2.75 17.2142 2.75 19C2.75 19.4142 2.41421 19.75 2 19.75C1.58579 19.75 1.25 19.4142 1.25 19C1.25 16.3858 3.38579 14.25 6 14.25H10C12.6142 14.25 14.75 16.3858 14.75 19C14.75 19.4142 14.4142 19.75 14 19.75C13.5858 19.75 13.25 19.4142 13.25 19C13.25 17.2142 11.7858 15.75 10 15.75H6Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M9.97947 6.54018C8.82861 5.48134 7.01733 5.46816 6.0496 6.51034C5.04291 7.59446 5.08987 9.24842 6.1496 10.3897C7.11984 11.4345 8.8389 11.419 9.98966 10.3504C11.0556 9.36056 11.0879 7.65878 9.97947 6.54018ZM11.0068 5.44708C9.35665 3.91831 6.57863 3.73619 4.9504 5.48966C3.35709 7.20554 3.51013 9.75158 5.0504 11.4103C6.68016 13.1655 9.3611 12.981 11.0103 11.4496C12.74 9.84344 12.7119 7.15488 11.0338 5.4731C11.0294 5.46869 11.025 5.46433 11.0205 5.46002C11.016 5.45564 11.0114 5.45132 11.0068 5.44708Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M15.25 14C15.25 13.5858 15.5858 13.25 16 13.25H19C21.1142 13.25 22.75 14.8858 22.75 17C22.75 17.4142 22.4142 17.75 22 17.75C21.5858 17.75 21.25 17.4142 21.25 17C21.25 15.7142 20.2858 14.75 19 14.75H16C15.5858 14.75 15.25 14.4142 15.25 14Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M18.7836 7.24441C18.0522 6.60027 16.919 6.64161 16.3303 7.23033C16.321 7.23962 16.3115 7.24867 16.3017 7.25747C15.6827 7.8146 15.6639 8.9276 16.3575 9.69828C16.9146 10.3173 18.0276 10.3361 18.7983 9.64253C19.4466 9.05901 19.4926 7.96805 18.7836 7.24441ZM19.7966 6.1379C18.5319 5.00456 16.4912 4.96427 15.2837 6.15573C13.9189 7.40013 14.14 9.47674 15.2425 10.7017C16.4854 12.0827 18.5724 11.8639 19.8017 10.7575C21.1474 9.54633 21.1069 7.45152 19.8352 6.17456C19.829 6.16826 19.8227 6.16204 19.8162 6.15591C19.8097 6.14977 19.8032 6.14376 19.7966 6.1379Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Gaming</p>
                    </div>
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="target"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M14.5712 9.42882C14.8641 9.72172 14.8641 10.1966 14.5712 10.4895L12.0601 13.0005C11.7672 13.2934 11.2924 13.2934 10.9995 13.0005C10.7066 12.7076 10.7066 12.2328 10.9995 11.9399L13.5105 9.42882C13.8034 9.13593 14.2783 9.13593 14.5712 9.42882Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M18.1227 1.25553C18.3607 1.29417 18.5656 1.44486 18.6734 1.66053L19.8951 4.1049L22.3395 5.32663C22.5551 5.43442 22.7058 5.63932 22.7445 5.87731C22.7831 6.1153 22.705 6.35735 22.5345 6.52783L18.5328 10.5295C18.3922 10.6702 18.2014 10.7492 18.0025 10.7492H14.0008C13.5866 10.7492 13.2508 10.4134 13.2508 9.99917V5.9975C13.2508 5.79859 13.3298 5.60782 13.4705 5.46717L17.4722 1.46551C17.6426 1.29502 17.8847 1.21689 18.1227 1.25553ZM14.7508 6.30816V9.24917H17.6918L20.7379 6.20308L19.0007 5.33482C18.8555 5.26223 18.7378 5.14448 18.6652 4.99926L17.7969 3.26208L14.7508 6.30816Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.7482 3.92571C11.7735 4.33915 11.459 4.69487 11.0455 4.72025C6.88357 4.9757 3.66447 8.46941 3.74982 12.6383C3.83517 16.8072 7.19457 20.1663 11.3635 20.2511C15.5324 20.336 19.0258 17.1165 19.2807 12.9546C19.3061 12.5411 19.6618 12.2265 20.0752 12.2518C20.4886 12.2772 20.8033 12.6328 20.7779 13.0463C20.4737 18.0114 16.3063 21.8521 11.3329 21.7508C6.35959 21.6496 2.35195 17.6424 2.25013 12.669C2.14831 7.69567 5.98858 3.5278 10.9536 3.22307C11.3671 3.19769 11.7228 3.51228 11.7482 3.92571Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.7451 7.70683C11.7901 8.1186 11.4928 8.48885 11.081 8.53382C9.00869 8.76011 7.4628 10.5482 7.53836 12.6314C7.61393 14.7147 9.2853 16.3861 11.3686 16.4616C13.4518 16.5372 15.2399 14.9913 15.4662 12.919C15.5111 12.5072 15.8814 12.2099 16.2932 12.2549C16.7049 12.2998 17.0023 12.6701 16.9573 13.0818C16.6457 15.9358 14.1832 18.0647 11.3142 17.9607C8.44518 17.8566 6.14341 15.5548 6.03935 12.6858C5.93528 9.81681 8.06424 7.35433 10.9182 7.04268C11.3299 6.99772 11.7002 7.29507 11.7451 7.70683Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Art &amp; Design</p>
                    </div>
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="pin-map-location"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 7.75C10.7572 7.75 9.75 8.75721 9.75 10C9.75 11.2428 10.7572 12.25 12 12.25C13.2428 12.25 14.25 11.2428 14.25 10C14.25 8.75721 13.2428 7.75 12 7.75ZM8.25 10C8.25 7.92879 9.92879 6.25 12 6.25C14.0712 6.25 15.75 7.92879 15.75 10C15.75 12.0712 14.0712 13.75 12 13.75C9.92879 13.75 8.25 12.0712 8.25 10Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 3.75C8.54821 3.75 5.75 6.54821 5.75 10C5.75 12.3384 7.33713 14.908 9.07546 16.9878C9.92687 18.0064 10.7804 18.8678 11.4218 19.4748C11.6434 19.6846 11.8392 19.8634 12 20.0073C12.1608 19.8634 12.3566 19.6846 12.5782 19.4748C13.2196 18.8678 14.0731 18.0064 14.9245 16.9878C16.6629 14.908 18.25 12.3384 18.25 10C18.25 6.54821 15.4518 3.75 12 3.75ZM12 21C11.5239 21.5795 11.5238 21.5794 11.5236 21.5793L11.5217 21.5777L11.5168 21.5737L11.4997 21.5595C11.4851 21.5472 11.464 21.5296 11.4368 21.5066C11.3826 21.4607 11.3043 21.3937 11.2053 21.3071C11.0075 21.134 10.7267 20.8823 10.3907 20.5643C9.71961 19.9291 8.82313 19.0248 7.92454 17.9497C6.16287 15.842 4.25 12.9116 4.25 10C4.25 5.71979 7.71979 2.25 12 2.25C16.2802 2.25 19.75 5.71979 19.75 10C19.75 12.9116 17.8371 15.842 16.0755 17.9497C15.1769 19.0248 14.2804 19.9291 13.6093 20.5643C13.2733 20.8823 12.9925 21.134 12.7947 21.3071C12.6957 21.3937 12.6174 21.4607 12.5632 21.5066C12.536 21.5296 12.5149 21.5472 12.5003 21.5595L12.4832 21.5737L12.4783 21.5777L12.4769 21.5789C12.4767 21.579 12.4761 21.5795 12 21ZM12 21L12.4761 21.5795C12.1994 21.8068 11.8003 21.8065 11.5236 21.5793L12 21Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Paris</p>
                    </div>
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="earth-world-globe"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.4842 2.5555C11.785 2.27065 12.2597 2.28351 12.5445 2.58423C17.4855 7.80049 17.4855 16.1995 12.5445 21.4158C12.2597 21.7165 11.785 21.7294 11.4842 21.4445C11.1835 21.1597 11.1706 20.685 11.4555 20.3842C15.8485 15.7465 15.8485 8.25351 11.4555 3.61577C11.1706 3.31505 11.1835 2.84035 11.4842 2.5555Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12.5158 2.5555C12.8165 2.84035 12.8294 3.31505 12.5445 3.61577C8.1515 8.25351 8.1515 15.7465 12.5445 20.3842C12.8294 20.685 12.8165 21.1597 12.5158 21.4445C12.2151 21.7294 11.7404 21.7165 11.4555 21.4158C6.51451 16.1995 6.51451 7.80049 11.4555 2.58423C11.7404 2.28351 12.2151 2.27065 12.5158 2.5555Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.25 3C11.25 2.58579 11.5858 2.25 12 2.25C17.3962 2.25 21.75 6.60379 21.75 12C21.75 17.3962 17.3962 21.75 12 21.75C11.5858 21.75 11.25 21.4142 11.25 21C11.25 20.5858 11.5858 20.25 12 20.25C16.5678 20.25 20.25 16.5678 20.25 12C20.25 7.43221 16.5678 3.75 12 3.75C11.5858 3.75 11.25 3.41421 11.25 3Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 3.75C7.43221 3.75 3.75 7.43221 3.75 12C3.75 16.5678 7.43221 20.25 12 20.25C12.4142 20.25 12.75 20.5858 12.75 21C12.75 21.4142 12.4142 21.75 12 21.75C6.60379 21.75 2.25 17.3962 2.25 12C2.25 6.60379 6.60379 2.25 12 2.25C12.4142 2.25 12.75 2.58579 12.75 3C12.75 3.41421 12.4142 3.75 12 3.75Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M2.75999 9C2.75999 8.58579 3.09578 8.25 3.50999 8.25H20.49C20.9042 8.25 21.24 8.58579 21.24 9C21.24 9.41421 20.9042 9.75 20.49 9.75H3.50999C3.09578 9.75 2.75999 9.41421 2.75999 9Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M2.75999 15C2.75999 14.5858 3.09578 14.25 3.50999 14.25H20.49C20.9042 14.25 21.24 14.5858 21.24 15C21.24 15.4142 20.9042 15.75 20.49 15.75H3.50999C3.09578 15.75 2.75999 15.4142 2.75999 15Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Remote</p>
                    </div>
                  </div>
                </div></a
              ><a class="item"
                ><div class="desktop">
                  <span> Senior Game Data Analyst - Tarboosh Studio </span>
                  <p>Gaming</p>
                  <p>Data</p>
                  <p>Paris</p>
                  <p>Remote</p>
                </div>
                <div class="mobile">
                  <span> Senior Game Data Analyst - Tarboosh Studio </span>
                  <div class="description">
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="users-2"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6 15.75C4.21421 15.75 2.75 17.2142 2.75 19C2.75 19.4142 2.41421 19.75 2 19.75C1.58579 19.75 1.25 19.4142 1.25 19C1.25 16.3858 3.38579 14.25 6 14.25H10C12.6142 14.25 14.75 16.3858 14.75 19C14.75 19.4142 14.4142 19.75 14 19.75C13.5858 19.75 13.25 19.4142 13.25 19C13.25 17.2142 11.7858 15.75 10 15.75H6Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M9.97947 6.54018C8.82861 5.48134 7.01733 5.46816 6.0496 6.51034C5.04291 7.59446 5.08987 9.24842 6.1496 10.3897C7.11984 11.4345 8.8389 11.419 9.98966 10.3504C11.0556 9.36056 11.0879 7.65878 9.97947 6.54018ZM11.0068 5.44708C9.35665 3.91831 6.57863 3.73619 4.9504 5.48966C3.35709 7.20554 3.51013 9.75158 5.0504 11.4103C6.68016 13.1655 9.3611 12.981 11.0103 11.4496C12.74 9.84344 12.7119 7.15488 11.0338 5.4731C11.0294 5.46869 11.025 5.46433 11.0205 5.46002C11.016 5.45564 11.0114 5.45132 11.0068 5.44708Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M15.25 14C15.25 13.5858 15.5858 13.25 16 13.25H19C21.1142 13.25 22.75 14.8858 22.75 17C22.75 17.4142 22.4142 17.75 22 17.75C21.5858 17.75 21.25 17.4142 21.25 17C21.25 15.7142 20.2858 14.75 19 14.75H16C15.5858 14.75 15.25 14.4142 15.25 14Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M18.7836 7.24441C18.0522 6.60027 16.919 6.64161 16.3303 7.23033C16.321 7.23962 16.3115 7.24867 16.3017 7.25747C15.6827 7.8146 15.6639 8.9276 16.3575 9.69828C16.9146 10.3173 18.0276 10.3361 18.7983 9.64253C19.4466 9.05901 19.4926 7.96805 18.7836 7.24441ZM19.7966 6.1379C18.5319 5.00456 16.4912 4.96427 15.2837 6.15573C13.9189 7.40013 14.14 9.47674 15.2425 10.7017C16.4854 12.0827 18.5724 11.8639 19.8017 10.7575C21.1474 9.54633 21.1069 7.45152 19.8352 6.17456C19.829 6.16826 19.8227 6.16204 19.8162 6.15591C19.8097 6.14977 19.8032 6.14376 19.7966 6.1379Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Gaming</p>
                    </div>
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="target"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M14.5712 9.42882C14.8641 9.72172 14.8641 10.1966 14.5712 10.4895L12.0601 13.0005C11.7672 13.2934 11.2924 13.2934 10.9995 13.0005C10.7066 12.7076 10.7066 12.2328 10.9995 11.9399L13.5105 9.42882C13.8034 9.13593 14.2783 9.13593 14.5712 9.42882Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M18.1227 1.25553C18.3607 1.29417 18.5656 1.44486 18.6734 1.66053L19.8951 4.1049L22.3395 5.32663C22.5551 5.43442 22.7058 5.63932 22.7445 5.87731C22.7831 6.1153 22.705 6.35735 22.5345 6.52783L18.5328 10.5295C18.3922 10.6702 18.2014 10.7492 18.0025 10.7492H14.0008C13.5866 10.7492 13.2508 10.4134 13.2508 9.99917V5.9975C13.2508 5.79859 13.3298 5.60782 13.4705 5.46717L17.4722 1.46551C17.6426 1.29502 17.8847 1.21689 18.1227 1.25553ZM14.7508 6.30816V9.24917H17.6918L20.7379 6.20308L19.0007 5.33482C18.8555 5.26223 18.7378 5.14448 18.6652 4.99926L17.7969 3.26208L14.7508 6.30816Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.7482 3.92571C11.7735 4.33915 11.459 4.69487 11.0455 4.72025C6.88357 4.9757 3.66447 8.46941 3.74982 12.6383C3.83517 16.8072 7.19457 20.1663 11.3635 20.2511C15.5324 20.336 19.0258 17.1165 19.2807 12.9546C19.3061 12.5411 19.6618 12.2265 20.0752 12.2518C20.4886 12.2772 20.8033 12.6328 20.7779 13.0463C20.4737 18.0114 16.3063 21.8521 11.3329 21.7508C6.35959 21.6496 2.35195 17.6424 2.25013 12.669C2.14831 7.69567 5.98858 3.5278 10.9536 3.22307C11.3671 3.19769 11.7228 3.51228 11.7482 3.92571Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.7451 7.70683C11.7901 8.1186 11.4928 8.48885 11.081 8.53382C9.00869 8.76011 7.4628 10.5482 7.53836 12.6314C7.61393 14.7147 9.2853 16.3861 11.3686 16.4616C13.4518 16.5372 15.2399 14.9913 15.4662 12.919C15.5111 12.5072 15.8814 12.2099 16.2932 12.2549C16.7049 12.2998 17.0023 12.6701 16.9573 13.0818C16.6457 15.9358 14.1832 18.0647 11.3142 17.9607C8.44518 17.8566 6.14341 15.5548 6.03935 12.6858C5.93528 9.81681 8.06424 7.35433 10.9182 7.04268C11.3299 6.99772 11.7002 7.29507 11.7451 7.70683Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Data</p>
                    </div>
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="pin-map-location"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 7.75C10.7572 7.75 9.75 8.75721 9.75 10C9.75 11.2428 10.7572 12.25 12 12.25C13.2428 12.25 14.25 11.2428 14.25 10C14.25 8.75721 13.2428 7.75 12 7.75ZM8.25 10C8.25 7.92879 9.92879 6.25 12 6.25C14.0712 6.25 15.75 7.92879 15.75 10C15.75 12.0712 14.0712 13.75 12 13.75C9.92879 13.75 8.25 12.0712 8.25 10Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 3.75C8.54821 3.75 5.75 6.54821 5.75 10C5.75 12.3384 7.33713 14.908 9.07546 16.9878C9.92687 18.0064 10.7804 18.8678 11.4218 19.4748C11.6434 19.6846 11.8392 19.8634 12 20.0073C12.1608 19.8634 12.3566 19.6846 12.5782 19.4748C13.2196 18.8678 14.0731 18.0064 14.9245 16.9878C16.6629 14.908 18.25 12.3384 18.25 10C18.25 6.54821 15.4518 3.75 12 3.75ZM12 21C11.5239 21.5795 11.5238 21.5794 11.5236 21.5793L11.5217 21.5777L11.5168 21.5737L11.4997 21.5595C11.4851 21.5472 11.464 21.5296 11.4368 21.5066C11.3826 21.4607 11.3043 21.3937 11.2053 21.3071C11.0075 21.134 10.7267 20.8823 10.3907 20.5643C9.71961 19.9291 8.82313 19.0248 7.92454 17.9497C6.16287 15.842 4.25 12.9116 4.25 10C4.25 5.71979 7.71979 2.25 12 2.25C16.2802 2.25 19.75 5.71979 19.75 10C19.75 12.9116 17.8371 15.842 16.0755 17.9497C15.1769 19.0248 14.2804 19.9291 13.6093 20.5643C13.2733 20.8823 12.9925 21.134 12.7947 21.3071C12.6957 21.3937 12.6174 21.4607 12.5632 21.5066C12.536 21.5296 12.5149 21.5472 12.5003 21.5595L12.4832 21.5737L12.4783 21.5777L12.4769 21.5789C12.4767 21.579 12.4761 21.5795 12 21ZM12 21L12.4761 21.5795C12.1994 21.8068 11.8003 21.8065 11.5236 21.5793L12 21Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Paris</p>
                    </div>
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="earth-world-globe"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.4842 2.5555C11.785 2.27065 12.2597 2.28351 12.5445 2.58423C17.4855 7.80049 17.4855 16.1995 12.5445 21.4158C12.2597 21.7165 11.785 21.7294 11.4842 21.4445C11.1835 21.1597 11.1706 20.685 11.4555 20.3842C15.8485 15.7465 15.8485 8.25351 11.4555 3.61577C11.1706 3.31505 11.1835 2.84035 11.4842 2.5555Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12.5158 2.5555C12.8165 2.84035 12.8294 3.31505 12.5445 3.61577C8.1515 8.25351 8.1515 15.7465 12.5445 20.3842C12.8294 20.685 12.8165 21.1597 12.5158 21.4445C12.2151 21.7294 11.7404 21.7165 11.4555 21.4158C6.51451 16.1995 6.51451 7.80049 11.4555 2.58423C11.7404 2.28351 12.2151 2.27065 12.5158 2.5555Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.25 3C11.25 2.58579 11.5858 2.25 12 2.25C17.3962 2.25 21.75 6.60379 21.75 12C21.75 17.3962 17.3962 21.75 12 21.75C11.5858 21.75 11.25 21.4142 11.25 21C11.25 20.5858 11.5858 20.25 12 20.25C16.5678 20.25 20.25 16.5678 20.25 12C20.25 7.43221 16.5678 3.75 12 3.75C11.5858 3.75 11.25 3.41421 11.25 3Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 3.75C7.43221 3.75 3.75 7.43221 3.75 12C3.75 16.5678 7.43221 20.25 12 20.25C12.4142 20.25 12.75 20.5858 12.75 21C12.75 21.4142 12.4142 21.75 12 21.75C6.60379 21.75 2.25 17.3962 2.25 12C2.25 6.60379 6.60379 2.25 12 2.25C12.4142 2.25 12.75 2.58579 12.75 3C12.75 3.41421 12.4142 3.75 12 3.75Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M2.75999 9C2.75999 8.58579 3.09578 8.25 3.50999 8.25H20.49C20.9042 8.25 21.24 8.58579 21.24 9C21.24 9.41421 20.9042 9.75 20.49 9.75H3.50999C3.09578 9.75 2.75999 9.41421 2.75999 9Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M2.75999 15C2.75999 14.5858 3.09578 14.25 3.50999 14.25H20.49C20.9042 14.25 21.24 14.5858 21.24 15C21.24 15.4142 20.9042 15.75 20.49 15.75H3.50999C3.09578 15.75 2.75999 15.4142 2.75999 15Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Remote</p>
                    </div>
                  </div>
                </div></a
              ><a class="item"
                ><div class="desktop">
                  <span> Senior Game Data Analyst - Teskin Studio </span>
                  <p>Gaming</p>
                  <p>Data</p>
                  <p>Tel Aviv</p>
                  <p>Remote</p>
                </div>
                <div class="mobile">
                  <span> Senior Game Data Analyst - Teskin Studio </span>
                  <div class="description">
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="users-2"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6 15.75C4.21421 15.75 2.75 17.2142 2.75 19C2.75 19.4142 2.41421 19.75 2 19.75C1.58579 19.75 1.25 19.4142 1.25 19C1.25 16.3858 3.38579 14.25 6 14.25H10C12.6142 14.25 14.75 16.3858 14.75 19C14.75 19.4142 14.4142 19.75 14 19.75C13.5858 19.75 13.25 19.4142 13.25 19C13.25 17.2142 11.7858 15.75 10 15.75H6Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M9.97947 6.54018C8.82861 5.48134 7.01733 5.46816 6.0496 6.51034C5.04291 7.59446 5.08987 9.24842 6.1496 10.3897C7.11984 11.4345 8.8389 11.419 9.98966 10.3504C11.0556 9.36056 11.0879 7.65878 9.97947 6.54018ZM11.0068 5.44708C9.35665 3.91831 6.57863 3.73619 4.9504 5.48966C3.35709 7.20554 3.51013 9.75158 5.0504 11.4103C6.68016 13.1655 9.3611 12.981 11.0103 11.4496C12.74 9.84344 12.7119 7.15488 11.0338 5.4731C11.0294 5.46869 11.025 5.46433 11.0205 5.46002C11.016 5.45564 11.0114 5.45132 11.0068 5.44708Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M15.25 14C15.25 13.5858 15.5858 13.25 16 13.25H19C21.1142 13.25 22.75 14.8858 22.75 17C22.75 17.4142 22.4142 17.75 22 17.75C21.5858 17.75 21.25 17.4142 21.25 17C21.25 15.7142 20.2858 14.75 19 14.75H16C15.5858 14.75 15.25 14.4142 15.25 14Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M18.7836 7.24441C18.0522 6.60027 16.919 6.64161 16.3303 7.23033C16.321 7.23962 16.3115 7.24867 16.3017 7.25747C15.6827 7.8146 15.6639 8.9276 16.3575 9.69828C16.9146 10.3173 18.0276 10.3361 18.7983 9.64253C19.4466 9.05901 19.4926 7.96805 18.7836 7.24441ZM19.7966 6.1379C18.5319 5.00456 16.4912 4.96427 15.2837 6.15573C13.9189 7.40013 14.14 9.47674 15.2425 10.7017C16.4854 12.0827 18.5724 11.8639 19.8017 10.7575C21.1474 9.54633 21.1069 7.45152 19.8352 6.17456C19.829 6.16826 19.8227 6.16204 19.8162 6.15591C19.8097 6.14977 19.8032 6.14376 19.7966 6.1379Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Gaming</p>
                    </div>
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="target"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M14.5712 9.42882C14.8641 9.72172 14.8641 10.1966 14.5712 10.4895L12.0601 13.0005C11.7672 13.2934 11.2924 13.2934 10.9995 13.0005C10.7066 12.7076 10.7066 12.2328 10.9995 11.9399L13.5105 9.42882C13.8034 9.13593 14.2783 9.13593 14.5712 9.42882Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M18.1227 1.25553C18.3607 1.29417 18.5656 1.44486 18.6734 1.66053L19.8951 4.1049L22.3395 5.32663C22.5551 5.43442 22.7058 5.63932 22.7445 5.87731C22.7831 6.1153 22.705 6.35735 22.5345 6.52783L18.5328 10.5295C18.3922 10.6702 18.2014 10.7492 18.0025 10.7492H14.0008C13.5866 10.7492 13.2508 10.4134 13.2508 9.99917V5.9975C13.2508 5.79859 13.3298 5.60782 13.4705 5.46717L17.4722 1.46551C17.6426 1.29502 17.8847 1.21689 18.1227 1.25553ZM14.7508 6.30816V9.24917H17.6918L20.7379 6.20308L19.0007 5.33482C18.8555 5.26223 18.7378 5.14448 18.6652 4.99926L17.7969 3.26208L14.7508 6.30816Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.7482 3.92571C11.7735 4.33915 11.459 4.69487 11.0455 4.72025C6.88357 4.9757 3.66447 8.46941 3.74982 12.6383C3.83517 16.8072 7.19457 20.1663 11.3635 20.2511C15.5324 20.336 19.0258 17.1165 19.2807 12.9546C19.3061 12.5411 19.6618 12.2265 20.0752 12.2518C20.4886 12.2772 20.8033 12.6328 20.7779 13.0463C20.4737 18.0114 16.3063 21.8521 11.3329 21.7508C6.35959 21.6496 2.35195 17.6424 2.25013 12.669C2.14831 7.69567 5.98858 3.5278 10.9536 3.22307C11.3671 3.19769 11.7228 3.51228 11.7482 3.92571Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.7451 7.70683C11.7901 8.1186 11.4928 8.48885 11.081 8.53382C9.00869 8.76011 7.4628 10.5482 7.53836 12.6314C7.61393 14.7147 9.2853 16.3861 11.3686 16.4616C13.4518 16.5372 15.2399 14.9913 15.4662 12.919C15.5111 12.5072 15.8814 12.2099 16.2932 12.2549C16.7049 12.2998 17.0023 12.6701 16.9573 13.0818C16.6457 15.9358 14.1832 18.0647 11.3142 17.9607C8.44518 17.8566 6.14341 15.5548 6.03935 12.6858C5.93528 9.81681 8.06424 7.35433 10.9182 7.04268C11.3299 6.99772 11.7002 7.29507 11.7451 7.70683Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Data</p>
                    </div>
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="pin-map-location"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 7.75C10.7572 7.75 9.75 8.75721 9.75 10C9.75 11.2428 10.7572 12.25 12 12.25C13.2428 12.25 14.25 11.2428 14.25 10C14.25 8.75721 13.2428 7.75 12 7.75ZM8.25 10C8.25 7.92879 9.92879 6.25 12 6.25C14.0712 6.25 15.75 7.92879 15.75 10C15.75 12.0712 14.0712 13.75 12 13.75C9.92879 13.75 8.25 12.0712 8.25 10Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 3.75C8.54821 3.75 5.75 6.54821 5.75 10C5.75 12.3384 7.33713 14.908 9.07546 16.9878C9.92687 18.0064 10.7804 18.8678 11.4218 19.4748C11.6434 19.6846 11.8392 19.8634 12 20.0073C12.1608 19.8634 12.3566 19.6846 12.5782 19.4748C13.2196 18.8678 14.0731 18.0064 14.9245 16.9878C16.6629 14.908 18.25 12.3384 18.25 10C18.25 6.54821 15.4518 3.75 12 3.75ZM12 21C11.5239 21.5795 11.5238 21.5794 11.5236 21.5793L11.5217 21.5777L11.5168 21.5737L11.4997 21.5595C11.4851 21.5472 11.464 21.5296 11.4368 21.5066C11.3826 21.4607 11.3043 21.3937 11.2053 21.3071C11.0075 21.134 10.7267 20.8823 10.3907 20.5643C9.71961 19.9291 8.82313 19.0248 7.92454 17.9497C6.16287 15.842 4.25 12.9116 4.25 10C4.25 5.71979 7.71979 2.25 12 2.25C16.2802 2.25 19.75 5.71979 19.75 10C19.75 12.9116 17.8371 15.842 16.0755 17.9497C15.1769 19.0248 14.2804 19.9291 13.6093 20.5643C13.2733 20.8823 12.9925 21.134 12.7947 21.3071C12.6957 21.3937 12.6174 21.4607 12.5632 21.5066C12.536 21.5296 12.5149 21.5472 12.5003 21.5595L12.4832 21.5737L12.4783 21.5777L12.4769 21.5789C12.4767 21.579 12.4761 21.5795 12 21ZM12 21L12.4761 21.5795C12.1994 21.8068 11.8003 21.8065 11.5236 21.5793L12 21Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Tel Aviv</p>
                    </div>
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="earth-world-globe"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.4842 2.5555C11.785 2.27065 12.2597 2.28351 12.5445 2.58423C17.4855 7.80049 17.4855 16.1995 12.5445 21.4158C12.2597 21.7165 11.785 21.7294 11.4842 21.4445C11.1835 21.1597 11.1706 20.685 11.4555 20.3842C15.8485 15.7465 15.8485 8.25351 11.4555 3.61577C11.1706 3.31505 11.1835 2.84035 11.4842 2.5555Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12.5158 2.5555C12.8165 2.84035 12.8294 3.31505 12.5445 3.61577C8.1515 8.25351 8.1515 15.7465 12.5445 20.3842C12.8294 20.685 12.8165 21.1597 12.5158 21.4445C12.2151 21.7294 11.7404 21.7165 11.4555 21.4158C6.51451 16.1995 6.51451 7.80049 11.4555 2.58423C11.7404 2.28351 12.2151 2.27065 12.5158 2.5555Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.25 3C11.25 2.58579 11.5858 2.25 12 2.25C17.3962 2.25 21.75 6.60379 21.75 12C21.75 17.3962 17.3962 21.75 12 21.75C11.5858 21.75 11.25 21.4142 11.25 21C11.25 20.5858 11.5858 20.25 12 20.25C16.5678 20.25 20.25 16.5678 20.25 12C20.25 7.43221 16.5678 3.75 12 3.75C11.5858 3.75 11.25 3.41421 11.25 3Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 3.75C7.43221 3.75 3.75 7.43221 3.75 12C3.75 16.5678 7.43221 20.25 12 20.25C12.4142 20.25 12.75 20.5858 12.75 21C12.75 21.4142 12.4142 21.75 12 21.75C6.60379 21.75 2.25 17.3962 2.25 12C2.25 6.60379 6.60379 2.25 12 2.25C12.4142 2.25 12.75 2.58579 12.75 3C12.75 3.41421 12.4142 3.75 12 3.75Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M2.75999 9C2.75999 8.58579 3.09578 8.25 3.50999 8.25H20.49C20.9042 8.25 21.24 8.58579 21.24 9C21.24 9.41421 20.9042 9.75 20.49 9.75H3.50999C3.09578 9.75 2.75999 9.41421 2.75999 9Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M2.75999 15C2.75999 14.5858 3.09578 14.25 3.50999 14.25H20.49C20.9042 14.25 21.24 14.5858 21.24 15C21.24 15.4142 20.9042 15.75 20.49 15.75H3.50999C3.09578 15.75 2.75999 15.4142 2.75999 15Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Remote</p>
                    </div>
                  </div>
                </div></a
              ><a class="item"
                ><div class="desktop">
                  <span> Junior Data Analyst (end-of-studies internship) </span>
                  <p>Engineering &amp; Data</p>
                  <p>Data</p>
                  <p>Paris</p>
                  <p>On-site</p>
                </div>
                <div class="mobile">
                  <span> Junior Data Analyst (end-of-studies internship) </span>
                  <div class="description">
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="users-2"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6 15.75C4.21421 15.75 2.75 17.2142 2.75 19C2.75 19.4142 2.41421 19.75 2 19.75C1.58579 19.75 1.25 19.4142 1.25 19C1.25 16.3858 3.38579 14.25 6 14.25H10C12.6142 14.25 14.75 16.3858 14.75 19C14.75 19.4142 14.4142 19.75 14 19.75C13.5858 19.75 13.25 19.4142 13.25 19C13.25 17.2142 11.7858 15.75 10 15.75H6Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M9.97947 6.54018C8.82861 5.48134 7.01733 5.46816 6.0496 6.51034C5.04291 7.59446 5.08987 9.24842 6.1496 10.3897C7.11984 11.4345 8.8389 11.419 9.98966 10.3504C11.0556 9.36056 11.0879 7.65878 9.97947 6.54018ZM11.0068 5.44708C9.35665 3.91831 6.57863 3.73619 4.9504 5.48966C3.35709 7.20554 3.51013 9.75158 5.0504 11.4103C6.68016 13.1655 9.3611 12.981 11.0103 11.4496C12.74 9.84344 12.7119 7.15488 11.0338 5.4731C11.0294 5.46869 11.025 5.46433 11.0205 5.46002C11.016 5.45564 11.0114 5.45132 11.0068 5.44708Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M15.25 14C15.25 13.5858 15.5858 13.25 16 13.25H19C21.1142 13.25 22.75 14.8858 22.75 17C22.75 17.4142 22.4142 17.75 22 17.75C21.5858 17.75 21.25 17.4142 21.25 17C21.25 15.7142 20.2858 14.75 19 14.75H16C15.5858 14.75 15.25 14.4142 15.25 14Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M18.7836 7.24441C18.0522 6.60027 16.919 6.64161 16.3303 7.23033C16.321 7.23962 16.3115 7.24867 16.3017 7.25747C15.6827 7.8146 15.6639 8.9276 16.3575 9.69828C16.9146 10.3173 18.0276 10.3361 18.7983 9.64253C19.4466 9.05901 19.4926 7.96805 18.7836 7.24441ZM19.7966 6.1379C18.5319 5.00456 16.4912 4.96427 15.2837 6.15573C13.9189 7.40013 14.14 9.47674 15.2425 10.7017C16.4854 12.0827 18.5724 11.8639 19.8017 10.7575C21.1474 9.54633 21.1069 7.45152 19.8352 6.17456C19.829 6.16826 19.8227 6.16204 19.8162 6.15591C19.8097 6.14977 19.8032 6.14376 19.7966 6.1379Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Engineering &amp; Data</p>
                    </div>
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="target"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M14.5712 9.42882C14.8641 9.72172 14.8641 10.1966 14.5712 10.4895L12.0601 13.0005C11.7672 13.2934 11.2924 13.2934 10.9995 13.0005C10.7066 12.7076 10.7066 12.2328 10.9995 11.9399L13.5105 9.42882C13.8034 9.13593 14.2783 9.13593 14.5712 9.42882Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M18.1227 1.25553C18.3607 1.29417 18.5656 1.44486 18.6734 1.66053L19.8951 4.1049L22.3395 5.32663C22.5551 5.43442 22.7058 5.63932 22.7445 5.87731C22.7831 6.1153 22.705 6.35735 22.5345 6.52783L18.5328 10.5295C18.3922 10.6702 18.2014 10.7492 18.0025 10.7492H14.0008C13.5866 10.7492 13.2508 10.4134 13.2508 9.99917V5.9975C13.2508 5.79859 13.3298 5.60782 13.4705 5.46717L17.4722 1.46551C17.6426 1.29502 17.8847 1.21689 18.1227 1.25553ZM14.7508 6.30816V9.24917H17.6918L20.7379 6.20308L19.0007 5.33482C18.8555 5.26223 18.7378 5.14448 18.6652 4.99926L17.7969 3.26208L14.7508 6.30816Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.7482 3.92571C11.7735 4.33915 11.459 4.69487 11.0455 4.72025C6.88357 4.9757 3.66447 8.46941 3.74982 12.6383C3.83517 16.8072 7.19457 20.1663 11.3635 20.2511C15.5324 20.336 19.0258 17.1165 19.2807 12.9546C19.3061 12.5411 19.6618 12.2265 20.0752 12.2518C20.4886 12.2772 20.8033 12.6328 20.7779 13.0463C20.4737 18.0114 16.3063 21.8521 11.3329 21.7508C6.35959 21.6496 2.35195 17.6424 2.25013 12.669C2.14831 7.69567 5.98858 3.5278 10.9536 3.22307C11.3671 3.19769 11.7228 3.51228 11.7482 3.92571Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.7451 7.70683C11.7901 8.1186 11.4928 8.48885 11.081 8.53382C9.00869 8.76011 7.4628 10.5482 7.53836 12.6314C7.61393 14.7147 9.2853 16.3861 11.3686 16.4616C13.4518 16.5372 15.2399 14.9913 15.4662 12.919C15.5111 12.5072 15.8814 12.2099 16.2932 12.2549C16.7049 12.2998 17.0023 12.6701 16.9573 13.0818C16.6457 15.9358 14.1832 18.0647 11.3142 17.9607C8.44518 17.8566 6.14341 15.5548 6.03935 12.6858C5.93528 9.81681 8.06424 7.35433 10.9182 7.04268C11.3299 6.99772 11.7002 7.29507 11.7451 7.70683Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Data</p>
                    </div>
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="pin-map-location"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 7.75C10.7572 7.75 9.75 8.75721 9.75 10C9.75 11.2428 10.7572 12.25 12 12.25C13.2428 12.25 14.25 11.2428 14.25 10C14.25 8.75721 13.2428 7.75 12 7.75ZM8.25 10C8.25 7.92879 9.92879 6.25 12 6.25C14.0712 6.25 15.75 7.92879 15.75 10C15.75 12.0712 14.0712 13.75 12 13.75C9.92879 13.75 8.25 12.0712 8.25 10Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 3.75C8.54821 3.75 5.75 6.54821 5.75 10C5.75 12.3384 7.33713 14.908 9.07546 16.9878C9.92687 18.0064 10.7804 18.8678 11.4218 19.4748C11.6434 19.6846 11.8392 19.8634 12 20.0073C12.1608 19.8634 12.3566 19.6846 12.5782 19.4748C13.2196 18.8678 14.0731 18.0064 14.9245 16.9878C16.6629 14.908 18.25 12.3384 18.25 10C18.25 6.54821 15.4518 3.75 12 3.75ZM12 21C11.5239 21.5795 11.5238 21.5794 11.5236 21.5793L11.5217 21.5777L11.5168 21.5737L11.4997 21.5595C11.4851 21.5472 11.464 21.5296 11.4368 21.5066C11.3826 21.4607 11.3043 21.3937 11.2053 21.3071C11.0075 21.134 10.7267 20.8823 10.3907 20.5643C9.71961 19.9291 8.82313 19.0248 7.92454 17.9497C6.16287 15.842 4.25 12.9116 4.25 10C4.25 5.71979 7.71979 2.25 12 2.25C16.2802 2.25 19.75 5.71979 19.75 10C19.75 12.9116 17.8371 15.842 16.0755 17.9497C15.1769 19.0248 14.2804 19.9291 13.6093 20.5643C13.2733 20.8823 12.9925 21.134 12.7947 21.3071C12.6957 21.3937 12.6174 21.4607 12.5632 21.5066C12.536 21.5296 12.5149 21.5472 12.5003 21.5595L12.4832 21.5737L12.4783 21.5777L12.4769 21.5789C12.4767 21.579 12.4761 21.5795 12 21ZM12 21L12.4761 21.5795C12.1994 21.8068 11.8003 21.8065 11.5236 21.5793L12 21Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Paris</p>
                    </div>
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="earth-world-globe"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.4842 2.5555C11.785 2.27065 12.2597 2.28351 12.5445 2.58423C17.4855 7.80049 17.4855 16.1995 12.5445 21.4158C12.2597 21.7165 11.785 21.7294 11.4842 21.4445C11.1835 21.1597 11.1706 20.685 11.4555 20.3842C15.8485 15.7465 15.8485 8.25351 11.4555 3.61577C11.1706 3.31505 11.1835 2.84035 11.4842 2.5555Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12.5158 2.5555C12.8165 2.84035 12.8294 3.31505 12.5445 3.61577C8.1515 8.25351 8.1515 15.7465 12.5445 20.3842C12.8294 20.685 12.8165 21.1597 12.5158 21.4445C12.2151 21.7294 11.7404 21.7165 11.4555 21.4158C6.51451 16.1995 6.51451 7.80049 11.4555 2.58423C11.7404 2.28351 12.2151 2.27065 12.5158 2.5555Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.25 3C11.25 2.58579 11.5858 2.25 12 2.25C17.3962 2.25 21.75 6.60379 21.75 12C21.75 17.3962 17.3962 21.75 12 21.75C11.5858 21.75 11.25 21.4142 11.25 21C11.25 20.5858 11.5858 20.25 12 20.25C16.5678 20.25 20.25 16.5678 20.25 12C20.25 7.43221 16.5678 3.75 12 3.75C11.5858 3.75 11.25 3.41421 11.25 3Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 3.75C7.43221 3.75 3.75 7.43221 3.75 12C3.75 16.5678 7.43221 20.25 12 20.25C12.4142 20.25 12.75 20.5858 12.75 21C12.75 21.4142 12.4142 21.75 12 21.75C6.60379 21.75 2.25 17.3962 2.25 12C2.25 6.60379 6.60379 2.25 12 2.25C12.4142 2.25 12.75 2.58579 12.75 3C12.75 3.41421 12.4142 3.75 12 3.75Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M2.75999 9C2.75999 8.58579 3.09578 8.25 3.50999 8.25H20.49C20.9042 8.25 21.24 8.58579 21.24 9C21.24 9.41421 20.9042 9.75 20.49 9.75H3.50999C3.09578 9.75 2.75999 9.41421 2.75999 9Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M2.75999 15C2.75999 14.5858 3.09578 14.25 3.50999 14.25H20.49C20.9042 14.25 21.24 14.5858 21.24 15C21.24 15.4142 20.9042 15.75 20.49 15.75H3.50999C3.09578 15.75 2.75999 15.4142 2.75999 15Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>On-site</p>
                    </div>
                  </div>
                </div></a
              ><a class="item"
                ><div class="desktop">
                  <span> Legal Intern - Corporate M&amp;A </span>
                  <p>Corporate</p>
                  <p>Legal</p>
                  <p>Paris</p>
                  <p>Hybrid</p>
                </div>
                <div class="mobile">
                  <span> Legal Intern - Corporate M&amp;A </span>
                  <div class="description">
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="users-2"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6 15.75C4.21421 15.75 2.75 17.2142 2.75 19C2.75 19.4142 2.41421 19.75 2 19.75C1.58579 19.75 1.25 19.4142 1.25 19C1.25 16.3858 3.38579 14.25 6 14.25H10C12.6142 14.25 14.75 16.3858 14.75 19C14.75 19.4142 14.4142 19.75 14 19.75C13.5858 19.75 13.25 19.4142 13.25 19C13.25 17.2142 11.7858 15.75 10 15.75H6Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M9.97947 6.54018C8.82861 5.48134 7.01733 5.46816 6.0496 6.51034C5.04291 7.59446 5.08987 9.24842 6.1496 10.3897C7.11984 11.4345 8.8389 11.419 9.98966 10.3504C11.0556 9.36056 11.0879 7.65878 9.97947 6.54018ZM11.0068 5.44708C9.35665 3.91831 6.57863 3.73619 4.9504 5.48966C3.35709 7.20554 3.51013 9.75158 5.0504 11.4103C6.68016 13.1655 9.3611 12.981 11.0103 11.4496C12.74 9.84344 12.7119 7.15488 11.0338 5.4731C11.0294 5.46869 11.025 5.46433 11.0205 5.46002C11.016 5.45564 11.0114 5.45132 11.0068 5.44708Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M15.25 14C15.25 13.5858 15.5858 13.25 16 13.25H19C21.1142 13.25 22.75 14.8858 22.75 17C22.75 17.4142 22.4142 17.75 22 17.75C21.5858 17.75 21.25 17.4142 21.25 17C21.25 15.7142 20.2858 14.75 19 14.75H16C15.5858 14.75 15.25 14.4142 15.25 14Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M18.7836 7.24441C18.0522 6.60027 16.919 6.64161 16.3303 7.23033C16.321 7.23962 16.3115 7.24867 16.3017 7.25747C15.6827 7.8146 15.6639 8.9276 16.3575 9.69828C16.9146 10.3173 18.0276 10.3361 18.7983 9.64253C19.4466 9.05901 19.4926 7.96805 18.7836 7.24441ZM19.7966 6.1379C18.5319 5.00456 16.4912 4.96427 15.2837 6.15573C13.9189 7.40013 14.14 9.47674 15.2425 10.7017C16.4854 12.0827 18.5724 11.8639 19.8017 10.7575C21.1474 9.54633 21.1069 7.45152 19.8352 6.17456C19.829 6.16826 19.8227 6.16204 19.8162 6.15591C19.8097 6.14977 19.8032 6.14376 19.7966 6.1379Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Corporate</p>
                    </div>
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="target"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M14.5712 9.42882C14.8641 9.72172 14.8641 10.1966 14.5712 10.4895L12.0601 13.0005C11.7672 13.2934 11.2924 13.2934 10.9995 13.0005C10.7066 12.7076 10.7066 12.2328 10.9995 11.9399L13.5105 9.42882C13.8034 9.13593 14.2783 9.13593 14.5712 9.42882Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M18.1227 1.25553C18.3607 1.29417 18.5656 1.44486 18.6734 1.66053L19.8951 4.1049L22.3395 5.32663C22.5551 5.43442 22.7058 5.63932 22.7445 5.87731C22.7831 6.1153 22.705 6.35735 22.5345 6.52783L18.5328 10.5295C18.3922 10.6702 18.2014 10.7492 18.0025 10.7492H14.0008C13.5866 10.7492 13.2508 10.4134 13.2508 9.99917V5.9975C13.2508 5.79859 13.3298 5.60782 13.4705 5.46717L17.4722 1.46551C17.6426 1.29502 17.8847 1.21689 18.1227 1.25553ZM14.7508 6.30816V9.24917H17.6918L20.7379 6.20308L19.0007 5.33482C18.8555 5.26223 18.7378 5.14448 18.6652 4.99926L17.7969 3.26208L14.7508 6.30816Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.7482 3.92571C11.7735 4.33915 11.459 4.69487 11.0455 4.72025C6.88357 4.9757 3.66447 8.46941 3.74982 12.6383C3.83517 16.8072 7.19457 20.1663 11.3635 20.2511C15.5324 20.336 19.0258 17.1165 19.2807 12.9546C19.3061 12.5411 19.6618 12.2265 20.0752 12.2518C20.4886 12.2772 20.8033 12.6328 20.7779 13.0463C20.4737 18.0114 16.3063 21.8521 11.3329 21.7508C6.35959 21.6496 2.35195 17.6424 2.25013 12.669C2.14831 7.69567 5.98858 3.5278 10.9536 3.22307C11.3671 3.19769 11.7228 3.51228 11.7482 3.92571Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.7451 7.70683C11.7901 8.1186 11.4928 8.48885 11.081 8.53382C9.00869 8.76011 7.4628 10.5482 7.53836 12.6314C7.61393 14.7147 9.2853 16.3861 11.3686 16.4616C13.4518 16.5372 15.2399 14.9913 15.4662 12.919C15.5111 12.5072 15.8814 12.2099 16.2932 12.2549C16.7049 12.2998 17.0023 12.6701 16.9573 13.0818C16.6457 15.9358 14.1832 18.0647 11.3142 17.9607C8.44518 17.8566 6.14341 15.5548 6.03935 12.6858C5.93528 9.81681 8.06424 7.35433 10.9182 7.04268C11.3299 6.99772 11.7002 7.29507 11.7451 7.70683Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Legal</p>
                    </div>
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="pin-map-location"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 7.75C10.7572 7.75 9.75 8.75721 9.75 10C9.75 11.2428 10.7572 12.25 12 12.25C13.2428 12.25 14.25 11.2428 14.25 10C14.25 8.75721 13.2428 7.75 12 7.75ZM8.25 10C8.25 7.92879 9.92879 6.25 12 6.25C14.0712 6.25 15.75 7.92879 15.75 10C15.75 12.0712 14.0712 13.75 12 13.75C9.92879 13.75 8.25 12.0712 8.25 10Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 3.75C8.54821 3.75 5.75 6.54821 5.75 10C5.75 12.3384 7.33713 14.908 9.07546 16.9878C9.92687 18.0064 10.7804 18.8678 11.4218 19.4748C11.6434 19.6846 11.8392 19.8634 12 20.0073C12.1608 19.8634 12.3566 19.6846 12.5782 19.4748C13.2196 18.8678 14.0731 18.0064 14.9245 16.9878C16.6629 14.908 18.25 12.3384 18.25 10C18.25 6.54821 15.4518 3.75 12 3.75ZM12 21C11.5239 21.5795 11.5238 21.5794 11.5236 21.5793L11.5217 21.5777L11.5168 21.5737L11.4997 21.5595C11.4851 21.5472 11.464 21.5296 11.4368 21.5066C11.3826 21.4607 11.3043 21.3937 11.2053 21.3071C11.0075 21.134 10.7267 20.8823 10.3907 20.5643C9.71961 19.9291 8.82313 19.0248 7.92454 17.9497C6.16287 15.842 4.25 12.9116 4.25 10C4.25 5.71979 7.71979 2.25 12 2.25C16.2802 2.25 19.75 5.71979 19.75 10C19.75 12.9116 17.8371 15.842 16.0755 17.9497C15.1769 19.0248 14.2804 19.9291 13.6093 20.5643C13.2733 20.8823 12.9925 21.134 12.7947 21.3071C12.6957 21.3937 12.6174 21.4607 12.5632 21.5066C12.536 21.5296 12.5149 21.5472 12.5003 21.5595L12.4832 21.5737L12.4783 21.5777L12.4769 21.5789C12.4767 21.579 12.4761 21.5795 12 21ZM12 21L12.4761 21.5795C12.1994 21.8068 11.8003 21.8065 11.5236 21.5793L12 21Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Paris</p>
                    </div>
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="earth-world-globe"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.4842 2.5555C11.785 2.27065 12.2597 2.28351 12.5445 2.58423C17.4855 7.80049 17.4855 16.1995 12.5445 21.4158C12.2597 21.7165 11.785 21.7294 11.4842 21.4445C11.1835 21.1597 11.1706 20.685 11.4555 20.3842C15.8485 15.7465 15.8485 8.25351 11.4555 3.61577C11.1706 3.31505 11.1835 2.84035 11.4842 2.5555Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12.5158 2.5555C12.8165 2.84035 12.8294 3.31505 12.5445 3.61577C8.1515 8.25351 8.1515 15.7465 12.5445 20.3842C12.8294 20.685 12.8165 21.1597 12.5158 21.4445C12.2151 21.7294 11.7404 21.7165 11.4555 21.4158C6.51451 16.1995 6.51451 7.80049 11.4555 2.58423C11.7404 2.28351 12.2151 2.27065 12.5158 2.5555Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.25 3C11.25 2.58579 11.5858 2.25 12 2.25C17.3962 2.25 21.75 6.60379 21.75 12C21.75 17.3962 17.3962 21.75 12 21.75C11.5858 21.75 11.25 21.4142 11.25 21C11.25 20.5858 11.5858 20.25 12 20.25C16.5678 20.25 20.25 16.5678 20.25 12C20.25 7.43221 16.5678 3.75 12 3.75C11.5858 3.75 11.25 3.41421 11.25 3Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 3.75C7.43221 3.75 3.75 7.43221 3.75 12C3.75 16.5678 7.43221 20.25 12 20.25C12.4142 20.25 12.75 20.5858 12.75 21C12.75 21.4142 12.4142 21.75 12 21.75C6.60379 21.75 2.25 17.3962 2.25 12C2.25 6.60379 6.60379 2.25 12 2.25C12.4142 2.25 12.75 2.58579 12.75 3C12.75 3.41421 12.4142 3.75 12 3.75Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M2.75999 9C2.75999 8.58579 3.09578 8.25 3.50999 8.25H20.49C20.9042 8.25 21.24 8.58579 21.24 9C21.24 9.41421 20.9042 9.75 20.49 9.75H3.50999C3.09578 9.75 2.75999 9.41421 2.75999 9Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M2.75999 15C2.75999 14.5858 3.09578 14.25 3.50999 14.25H20.49C20.9042 14.25 21.24 14.5858 21.24 15C21.24 15.4142 20.9042 15.75 20.49 15.75H3.50999C3.09578 15.75 2.75999 15.4142 2.75999 15Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Hybrid</p>
                    </div>
                  </div>
                </div></a
              ><a class="item"
                ><div class="desktop">
                  <span> Labour Law Internship </span>
                  <p>Corporate</p>
                  <p>People</p>
                  <p>Paris</p>
                  <p>Hybrid</p>
                </div>
                <div class="mobile">
                  <span> Labour Law Internship </span>
                  <div class="description">
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="users-2"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6 15.75C4.21421 15.75 2.75 17.2142 2.75 19C2.75 19.4142 2.41421 19.75 2 19.75C1.58579 19.75 1.25 19.4142 1.25 19C1.25 16.3858 3.38579 14.25 6 14.25H10C12.6142 14.25 14.75 16.3858 14.75 19C14.75 19.4142 14.4142 19.75 14 19.75C13.5858 19.75 13.25 19.4142 13.25 19C13.25 17.2142 11.7858 15.75 10 15.75H6Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M9.97947 6.54018C8.82861 5.48134 7.01733 5.46816 6.0496 6.51034C5.04291 7.59446 5.08987 9.24842 6.1496 10.3897C7.11984 11.4345 8.8389 11.419 9.98966 10.3504C11.0556 9.36056 11.0879 7.65878 9.97947 6.54018ZM11.0068 5.44708C9.35665 3.91831 6.57863 3.73619 4.9504 5.48966C3.35709 7.20554 3.51013 9.75158 5.0504 11.4103C6.68016 13.1655 9.3611 12.981 11.0103 11.4496C12.74 9.84344 12.7119 7.15488 11.0338 5.4731C11.0294 5.46869 11.025 5.46433 11.0205 5.46002C11.016 5.45564 11.0114 5.45132 11.0068 5.44708Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M15.25 14C15.25 13.5858 15.5858 13.25 16 13.25H19C21.1142 13.25 22.75 14.8858 22.75 17C22.75 17.4142 22.4142 17.75 22 17.75C21.5858 17.75 21.25 17.4142 21.25 17C21.25 15.7142 20.2858 14.75 19 14.75H16C15.5858 14.75 15.25 14.4142 15.25 14Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M18.7836 7.24441C18.0522 6.60027 16.919 6.64161 16.3303 7.23033C16.321 7.23962 16.3115 7.24867 16.3017 7.25747C15.6827 7.8146 15.6639 8.9276 16.3575 9.69828C16.9146 10.3173 18.0276 10.3361 18.7983 9.64253C19.4466 9.05901 19.4926 7.96805 18.7836 7.24441ZM19.7966 6.1379C18.5319 5.00456 16.4912 4.96427 15.2837 6.15573C13.9189 7.40013 14.14 9.47674 15.2425 10.7017C16.4854 12.0827 18.5724 11.8639 19.8017 10.7575C21.1474 9.54633 21.1069 7.45152 19.8352 6.17456C19.829 6.16826 19.8227 6.16204 19.8162 6.15591C19.8097 6.14977 19.8032 6.14376 19.7966 6.1379Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Corporate</p>
                    </div>
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="target"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M14.5712 9.42882C14.8641 9.72172 14.8641 10.1966 14.5712 10.4895L12.0601 13.0005C11.7672 13.2934 11.2924 13.2934 10.9995 13.0005C10.7066 12.7076 10.7066 12.2328 10.9995 11.9399L13.5105 9.42882C13.8034 9.13593 14.2783 9.13593 14.5712 9.42882Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M18.1227 1.25553C18.3607 1.29417 18.5656 1.44486 18.6734 1.66053L19.8951 4.1049L22.3395 5.32663C22.5551 5.43442 22.7058 5.63932 22.7445 5.87731C22.7831 6.1153 22.705 6.35735 22.5345 6.52783L18.5328 10.5295C18.3922 10.6702 18.2014 10.7492 18.0025 10.7492H14.0008C13.5866 10.7492 13.2508 10.4134 13.2508 9.99917V5.9975C13.2508 5.79859 13.3298 5.60782 13.4705 5.46717L17.4722 1.46551C17.6426 1.29502 17.8847 1.21689 18.1227 1.25553ZM14.7508 6.30816V9.24917H17.6918L20.7379 6.20308L19.0007 5.33482C18.8555 5.26223 18.7378 5.14448 18.6652 4.99926L17.7969 3.26208L14.7508 6.30816Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.7482 3.92571C11.7735 4.33915 11.459 4.69487 11.0455 4.72025C6.88357 4.9757 3.66447 8.46941 3.74982 12.6383C3.83517 16.8072 7.19457 20.1663 11.3635 20.2511C15.5324 20.336 19.0258 17.1165 19.2807 12.9546C19.3061 12.5411 19.6618 12.2265 20.0752 12.2518C20.4886 12.2772 20.8033 12.6328 20.7779 13.0463C20.4737 18.0114 16.3063 21.8521 11.3329 21.7508C6.35959 21.6496 2.35195 17.6424 2.25013 12.669C2.14831 7.69567 5.98858 3.5278 10.9536 3.22307C11.3671 3.19769 11.7228 3.51228 11.7482 3.92571Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.7451 7.70683C11.7901 8.1186 11.4928 8.48885 11.081 8.53382C9.00869 8.76011 7.4628 10.5482 7.53836 12.6314C7.61393 14.7147 9.2853 16.3861 11.3686 16.4616C13.4518 16.5372 15.2399 14.9913 15.4662 12.919C15.5111 12.5072 15.8814 12.2099 16.2932 12.2549C16.7049 12.2998 17.0023 12.6701 16.9573 13.0818C16.6457 15.9358 14.1832 18.0647 11.3142 17.9607C8.44518 17.8566 6.14341 15.5548 6.03935 12.6858C5.93528 9.81681 8.06424 7.35433 10.9182 7.04268C11.3299 6.99772 11.7002 7.29507 11.7451 7.70683Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>People</p>
                    </div>
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="pin-map-location"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 7.75C10.7572 7.75 9.75 8.75721 9.75 10C9.75 11.2428 10.7572 12.25 12 12.25C13.2428 12.25 14.25 11.2428 14.25 10C14.25 8.75721 13.2428 7.75 12 7.75ZM8.25 10C8.25 7.92879 9.92879 6.25 12 6.25C14.0712 6.25 15.75 7.92879 15.75 10C15.75 12.0712 14.0712 13.75 12 13.75C9.92879 13.75 8.25 12.0712 8.25 10Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 3.75C8.54821 3.75 5.75 6.54821 5.75 10C5.75 12.3384 7.33713 14.908 9.07546 16.9878C9.92687 18.0064 10.7804 18.8678 11.4218 19.4748C11.6434 19.6846 11.8392 19.8634 12 20.0073C12.1608 19.8634 12.3566 19.6846 12.5782 19.4748C13.2196 18.8678 14.0731 18.0064 14.9245 16.9878C16.6629 14.908 18.25 12.3384 18.25 10C18.25 6.54821 15.4518 3.75 12 3.75ZM12 21C11.5239 21.5795 11.5238 21.5794 11.5236 21.5793L11.5217 21.5777L11.5168 21.5737L11.4997 21.5595C11.4851 21.5472 11.464 21.5296 11.4368 21.5066C11.3826 21.4607 11.3043 21.3937 11.2053 21.3071C11.0075 21.134 10.7267 20.8823 10.3907 20.5643C9.71961 19.9291 8.82313 19.0248 7.92454 17.9497C6.16287 15.842 4.25 12.9116 4.25 10C4.25 5.71979 7.71979 2.25 12 2.25C16.2802 2.25 19.75 5.71979 19.75 10C19.75 12.9116 17.8371 15.842 16.0755 17.9497C15.1769 19.0248 14.2804 19.9291 13.6093 20.5643C13.2733 20.8823 12.9925 21.134 12.7947 21.3071C12.6957 21.3937 12.6174 21.4607 12.5632 21.5066C12.536 21.5296 12.5149 21.5472 12.5003 21.5595L12.4832 21.5737L12.4783 21.5777L12.4769 21.5789C12.4767 21.579 12.4761 21.5795 12 21ZM12 21L12.4761 21.5795C12.1994 21.8068 11.8003 21.8065 11.5236 21.5793L12 21Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Paris</p>
                    </div>
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="earth-world-globe"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.4842 2.5555C11.785 2.27065 12.2597 2.28351 12.5445 2.58423C17.4855 7.80049 17.4855 16.1995 12.5445 21.4158C12.2597 21.7165 11.785 21.7294 11.4842 21.4445C11.1835 21.1597 11.1706 20.685 11.4555 20.3842C15.8485 15.7465 15.8485 8.25351 11.4555 3.61577C11.1706 3.31505 11.1835 2.84035 11.4842 2.5555Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12.5158 2.5555C12.8165 2.84035 12.8294 3.31505 12.5445 3.61577C8.1515 8.25351 8.1515 15.7465 12.5445 20.3842C12.8294 20.685 12.8165 21.1597 12.5158 21.4445C12.2151 21.7294 11.7404 21.7165 11.4555 21.4158C6.51451 16.1995 6.51451 7.80049 11.4555 2.58423C11.7404 2.28351 12.2151 2.27065 12.5158 2.5555Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.25 3C11.25 2.58579 11.5858 2.25 12 2.25C17.3962 2.25 21.75 6.60379 21.75 12C21.75 17.3962 17.3962 21.75 12 21.75C11.5858 21.75 11.25 21.4142 11.25 21C11.25 20.5858 11.5858 20.25 12 20.25C16.5678 20.25 20.25 16.5678 20.25 12C20.25 7.43221 16.5678 3.75 12 3.75C11.5858 3.75 11.25 3.41421 11.25 3Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 3.75C7.43221 3.75 3.75 7.43221 3.75 12C3.75 16.5678 7.43221 20.25 12 20.25C12.4142 20.25 12.75 20.5858 12.75 21C12.75 21.4142 12.4142 21.75 12 21.75C6.60379 21.75 2.25 17.3962 2.25 12C2.25 6.60379 6.60379 2.25 12 2.25C12.4142 2.25 12.75 2.58579 12.75 3C12.75 3.41421 12.4142 3.75 12 3.75Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M2.75999 9C2.75999 8.58579 3.09578 8.25 3.50999 8.25H20.49C20.9042 8.25 21.24 8.58579 21.24 9C21.24 9.41421 20.9042 9.75 20.49 9.75H3.50999C3.09578 9.75 2.75999 9.41421 2.75999 9Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M2.75999 15C2.75999 14.5858 3.09578 14.25 3.50999 14.25H20.49C20.9042 14.25 21.24 14.5858 21.24 15C21.24 15.4142 20.9042 15.75 20.49 15.75H3.50999C3.09578 15.75 2.75999 15.4142 2.75999 15Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Hybrid</p>
                    </div>
                  </div>
                </div></a
              ><a class="item"
                ><div class="desktop">
                  <span>
                    Senior Talent Acquisition Manager - Tech &amp; Product
                  </span>
                  <p>Corporate</p>
                  <p>Talent Acquisition</p>
                  <p>Paris</p>
                  <p>Hybrid</p>
                </div>
                <div class="mobile">
                  <span>
                    Senior Talent Acquisition Manager - Tech &amp; Product
                  </span>
                  <div class="description">
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="users-2"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6 15.75C4.21421 15.75 2.75 17.2142 2.75 19C2.75 19.4142 2.41421 19.75 2 19.75C1.58579 19.75 1.25 19.4142 1.25 19C1.25 16.3858 3.38579 14.25 6 14.25H10C12.6142 14.25 14.75 16.3858 14.75 19C14.75 19.4142 14.4142 19.75 14 19.75C13.5858 19.75 13.25 19.4142 13.25 19C13.25 17.2142 11.7858 15.75 10 15.75H6Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M9.97947 6.54018C8.82861 5.48134 7.01733 5.46816 6.0496 6.51034C5.04291 7.59446 5.08987 9.24842 6.1496 10.3897C7.11984 11.4345 8.8389 11.419 9.98966 10.3504C11.0556 9.36056 11.0879 7.65878 9.97947 6.54018ZM11.0068 5.44708C9.35665 3.91831 6.57863 3.73619 4.9504 5.48966C3.35709 7.20554 3.51013 9.75158 5.0504 11.4103C6.68016 13.1655 9.3611 12.981 11.0103 11.4496C12.74 9.84344 12.7119 7.15488 11.0338 5.4731C11.0294 5.46869 11.025 5.46433 11.0205 5.46002C11.016 5.45564 11.0114 5.45132 11.0068 5.44708Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M15.25 14C15.25 13.5858 15.5858 13.25 16 13.25H19C21.1142 13.25 22.75 14.8858 22.75 17C22.75 17.4142 22.4142 17.75 22 17.75C21.5858 17.75 21.25 17.4142 21.25 17C21.25 15.7142 20.2858 14.75 19 14.75H16C15.5858 14.75 15.25 14.4142 15.25 14Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M18.7836 7.24441C18.0522 6.60027 16.919 6.64161 16.3303 7.23033C16.321 7.23962 16.3115 7.24867 16.3017 7.25747C15.6827 7.8146 15.6639 8.9276 16.3575 9.69828C16.9146 10.3173 18.0276 10.3361 18.7983 9.64253C19.4466 9.05901 19.4926 7.96805 18.7836 7.24441ZM19.7966 6.1379C18.5319 5.00456 16.4912 4.96427 15.2837 6.15573C13.9189 7.40013 14.14 9.47674 15.2425 10.7017C16.4854 12.0827 18.5724 11.8639 19.8017 10.7575C21.1474 9.54633 21.1069 7.45152 19.8352 6.17456C19.829 6.16826 19.8227 6.16204 19.8162 6.15591C19.8097 6.14977 19.8032 6.14376 19.7966 6.1379Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Corporate</p>
                    </div>
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="target"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M14.5712 9.42882C14.8641 9.72172 14.8641 10.1966 14.5712 10.4895L12.0601 13.0005C11.7672 13.2934 11.2924 13.2934 10.9995 13.0005C10.7066 12.7076 10.7066 12.2328 10.9995 11.9399L13.5105 9.42882C13.8034 9.13593 14.2783 9.13593 14.5712 9.42882Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M18.1227 1.25553C18.3607 1.29417 18.5656 1.44486 18.6734 1.66053L19.8951 4.1049L22.3395 5.32663C22.5551 5.43442 22.7058 5.63932 22.7445 5.87731C22.7831 6.1153 22.705 6.35735 22.5345 6.52783L18.5328 10.5295C18.3922 10.6702 18.2014 10.7492 18.0025 10.7492H14.0008C13.5866 10.7492 13.2508 10.4134 13.2508 9.99917V5.9975C13.2508 5.79859 13.3298 5.60782 13.4705 5.46717L17.4722 1.46551C17.6426 1.29502 17.8847 1.21689 18.1227 1.25553ZM14.7508 6.30816V9.24917H17.6918L20.7379 6.20308L19.0007 5.33482C18.8555 5.26223 18.7378 5.14448 18.6652 4.99926L17.7969 3.26208L14.7508 6.30816Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.7482 3.92571C11.7735 4.33915 11.459 4.69487 11.0455 4.72025C6.88357 4.9757 3.66447 8.46941 3.74982 12.6383C3.83517 16.8072 7.19457 20.1663 11.3635 20.2511C15.5324 20.336 19.0258 17.1165 19.2807 12.9546C19.3061 12.5411 19.6618 12.2265 20.0752 12.2518C20.4886 12.2772 20.8033 12.6328 20.7779 13.0463C20.4737 18.0114 16.3063 21.8521 11.3329 21.7508C6.35959 21.6496 2.35195 17.6424 2.25013 12.669C2.14831 7.69567 5.98858 3.5278 10.9536 3.22307C11.3671 3.19769 11.7228 3.51228 11.7482 3.92571Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.7451 7.70683C11.7901 8.1186 11.4928 8.48885 11.081 8.53382C9.00869 8.76011 7.4628 10.5482 7.53836 12.6314C7.61393 14.7147 9.2853 16.3861 11.3686 16.4616C13.4518 16.5372 15.2399 14.9913 15.4662 12.919C15.5111 12.5072 15.8814 12.2099 16.2932 12.2549C16.7049 12.2998 17.0023 12.6701 16.9573 13.0818C16.6457 15.9358 14.1832 18.0647 11.3142 17.9607C8.44518 17.8566 6.14341 15.5548 6.03935 12.6858C5.93528 9.81681 8.06424 7.35433 10.9182 7.04268C11.3299 6.99772 11.7002 7.29507 11.7451 7.70683Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Talent Acquisition</p>
                    </div>
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="pin-map-location"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 7.75C10.7572 7.75 9.75 8.75721 9.75 10C9.75 11.2428 10.7572 12.25 12 12.25C13.2428 12.25 14.25 11.2428 14.25 10C14.25 8.75721 13.2428 7.75 12 7.75ZM8.25 10C8.25 7.92879 9.92879 6.25 12 6.25C14.0712 6.25 15.75 7.92879 15.75 10C15.75 12.0712 14.0712 13.75 12 13.75C9.92879 13.75 8.25 12.0712 8.25 10Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 3.75C8.54821 3.75 5.75 6.54821 5.75 10C5.75 12.3384 7.33713 14.908 9.07546 16.9878C9.92687 18.0064 10.7804 18.8678 11.4218 19.4748C11.6434 19.6846 11.8392 19.8634 12 20.0073C12.1608 19.8634 12.3566 19.6846 12.5782 19.4748C13.2196 18.8678 14.0731 18.0064 14.9245 16.9878C16.6629 14.908 18.25 12.3384 18.25 10C18.25 6.54821 15.4518 3.75 12 3.75ZM12 21C11.5239 21.5795 11.5238 21.5794 11.5236 21.5793L11.5217 21.5777L11.5168 21.5737L11.4997 21.5595C11.4851 21.5472 11.464 21.5296 11.4368 21.5066C11.3826 21.4607 11.3043 21.3937 11.2053 21.3071C11.0075 21.134 10.7267 20.8823 10.3907 20.5643C9.71961 19.9291 8.82313 19.0248 7.92454 17.9497C6.16287 15.842 4.25 12.9116 4.25 10C4.25 5.71979 7.71979 2.25 12 2.25C16.2802 2.25 19.75 5.71979 19.75 10C19.75 12.9116 17.8371 15.842 16.0755 17.9497C15.1769 19.0248 14.2804 19.9291 13.6093 20.5643C13.2733 20.8823 12.9925 21.134 12.7947 21.3071C12.6957 21.3937 12.6174 21.4607 12.5632 21.5066C12.536 21.5296 12.5149 21.5472 12.5003 21.5595L12.4832 21.5737L12.4783 21.5777L12.4769 21.5789C12.4767 21.579 12.4761 21.5795 12 21ZM12 21L12.4761 21.5795C12.1994 21.8068 11.8003 21.8065 11.5236 21.5793L12 21Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Paris</p>
                    </div>
                    <div class="text">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="earth-world-globe"
                        role="presentation"
                        class="base-icon"
                      >
                        <g fill="var(--grey-500)">
                          <g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.4842 2.5555C11.785 2.27065 12.2597 2.28351 12.5445 2.58423C17.4855 7.80049 17.4855 16.1995 12.5445 21.4158C12.2597 21.7165 11.785 21.7294 11.4842 21.4445C11.1835 21.1597 11.1706 20.685 11.4555 20.3842C15.8485 15.7465 15.8485 8.25351 11.4555 3.61577C11.1706 3.31505 11.1835 2.84035 11.4842 2.5555Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12.5158 2.5555C12.8165 2.84035 12.8294 3.31505 12.5445 3.61577C8.1515 8.25351 8.1515 15.7465 12.5445 20.3842C12.8294 20.685 12.8165 21.1597 12.5158 21.4445C12.2151 21.7294 11.7404 21.7165 11.4555 21.4158C6.51451 16.1995 6.51451 7.80049 11.4555 2.58423C11.7404 2.28351 12.2151 2.27065 12.5158 2.5555Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.25 3C11.25 2.58579 11.5858 2.25 12 2.25C17.3962 2.25 21.75 6.60379 21.75 12C21.75 17.3962 17.3962 21.75 12 21.75C11.5858 21.75 11.25 21.4142 11.25 21C11.25 20.5858 11.5858 20.25 12 20.25C16.5678 20.25 20.25 16.5678 20.25 12C20.25 7.43221 16.5678 3.75 12 3.75C11.5858 3.75 11.25 3.41421 11.25 3Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 3.75C7.43221 3.75 3.75 7.43221 3.75 12C3.75 16.5678 7.43221 20.25 12 20.25C12.4142 20.25 12.75 20.5858 12.75 21C12.75 21.4142 12.4142 21.75 12 21.75C6.60379 21.75 2.25 17.3962 2.25 12C2.25 6.60379 6.60379 2.25 12 2.25C12.4142 2.25 12.75 2.58579 12.75 3C12.75 3.41421 12.4142 3.75 12 3.75Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M2.75999 9C2.75999 8.58579 3.09578 8.25 3.50999 8.25H20.49C20.9042 8.25 21.24 8.58579 21.24 9C21.24 9.41421 20.9042 9.75 20.49 9.75H3.50999C3.09578 9.75 2.75999 9.41421 2.75999 9Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M2.75999 15C2.75999 14.5858 3.09578 14.25 3.50999 14.25H20.49C20.9042 14.25 21.24 14.5858 21.24 15C21.24 15.4142 20.9042 15.75 20.49 15.75H3.50999C3.09578 15.75 2.75999 15.4142 2.75999 15Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p>Hybrid</p>
                    </div>
                  </div>
                </div></a
              >
            </div>
            <div class="cta-job-page">
              <a
                ><button class="button light primary small">
                  Show more
                </button></a
              >
            </div>
          </div>
        </section>
      </div>
    </section>
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
      drawer: [false, false, false, false, false, false, false, false],
    });

    return {
      ...toRefs(state),
    };
  },
});
</script>
<style scoped>
.content {
  top: -64px;

  display: flex;
  flex-direction: row;
  flex: 1;
  min-height: 100vh;
  width: 100vw;
  position: relative;
}
.jobs {
  width: 100%;
  background: var(--blue025-to-white-gradient) no-repeat top;
  background-size: 100% 80vh;
}
.default-block {
  max-width: 1024px;
  margin: 0 auto;
}
.title {
  margin-top: 160px;
  text-align: center;
  font-family: Poppins, ui-sans-serif, system-ui, -apple-system, Segoe UI,
    Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont,
    "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 64px;
  line-height: 4rem;
  font-weight: 700;
}
.filters {
  margin: 64px 0;
}
.filters .search .input-container {
  margin: 0 auto 32px;
  max-width: 592px;
}
.input-container {
  margin-bottom: 48px;
}
.input-container .input-icon {
  position: relative;
}
.input-container .input-icon svg {
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
}
.base-icon {
  display: inline-block;
  vertical-align: baseline;
}
.filters .search input {
  background-color: #fff;
  background-color: var(--grey-000);
  box-shadow: 0 15px 30px rgba(0, 33, 99, 0.08), 0 2px 5px rgba(0, 33, 99, 0.15);
  box-shadow: var(--shadow-m);
  height: 64px;
  padding-left: 48px;
}
.input-container .input-icon input {
  color: #10131b;
  color: var(--grey-900);
  font-family: "Lato", ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto,
    Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, "Segoe UI",
    "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 18px;
  line-height: 1.6rem;
  font-weight: 400;
}
.input-container .input {
  width: 100%;
  background-color: #eceef2;
  background-color: var(--grey-050);
  border-radius: 32px;
  border-radius: var(--radius-32);
  padding: 8px 16px;
  border: 1px solid transparent;
  outline: none;
  transition: border 0.25s ease-in;
  -webkit-appearance: none;
}
.filters .selects {
  display: flex;
  align-items: center;
  justify-content: center;
  grid-gap: 32px;
  gap: 32px;
}
.filters .selects section {
  width: 25%;
}
.filters .input-container {
  margin: 0;
  max-width: 592px;
}
.base-multi-select {
  position: relative;
}
.input-container {
  margin-bottom: 48px;
}
.base-multi-select .input {
  display: flex;
  cursor: pointer;
  justify-content: space-between;
  align-items: center;
}
.input-container .input {
  width: 100%;
  background-color: #eceef2;
  background-color: var(--grey-050);
  border-radius: 32px;
  border-radius: var(--radius-32);
  padding: 8px 16px;
  border: 1px solid transparent;
  height: 48px;
  outline: none;
  transition: border 0.25s ease-in;
  -webkit-appearance: none;
}
.base-multi-select .infos {
  display: flex;
  align-items: center;
  grid-gap: 16px;
  gap: 16px;
}
.base-multi-select .infos .selected-items {
  font-weight: 700;
  border-radius: 50%;
  background-color: #05f;
  background-color: var(--blue-500);
  color: #fff;
  color: var(--grey-000);
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.base-multi-select .options {
  position: absolute;
  top: 58px;
  left: 0;
  background: #fff;
  background: var(--grey-000);
  border-radius: 16px;
  border-radius: var(--radius-16);
  box-shadow: 0 15px 30px rgba(0, 33, 99, 0.08), 0 2px 5px rgba(0, 33, 99, 0.15);
  box-shadow: var(--shadow-m);
  padding: 16px;
  visibility: visible;
  opacity: 1;
  z-index: 2;
  overflow-y: scroll;
  max-height: 400px;
  width: 100%;
}
.base-multi-select .options .option {
  display: flex;
  align-items: center;
  grid-gap: 8px;
  gap: 8px;
}
.base-checkbox {
  margin-bottom: 0;
  padding: 8px 16px;
  border-radius: 8px;
  border-radius: var(--radius-8);
  width: 100%;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  grid-gap: 16px;
  gap: 16px;
  color: #10131b;
  color: var(--grey-900);
  width: 100%;
}
.checkbox-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.base-checkbox .checkbox-container .input {
  background-color: transparent;
  border: 1px solid #b9bfcc;
  border: 1px solid var(--grey-200);
  border-radius: 4px;
  border-radius: var(--radius-4);
  width: 20px !important;
  height: 20px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  position: relative;
  z-index: 1;
  padding: 0 !important;
}
.base-multi-select input {
  box-shadow: none;
}
.base-checkbox .checkbox-container svg {
  position: absolute;
  z-index: -1;
}
.filters .selects .base-checkbox .label {
  width: 100%;
  color: #10131b;
  color: var(--grey-900);
  cursor: pointer;
  font-family: "Lato", ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto,
    Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, "Segoe UI",
    "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 16px;
  line-height: 1.6rem;
  font-weight: 400;
}
.base-multi-select .options .option .base-checkbox:hover {
  background-color: #f6f7f9;
  background-color: var(--grey-025);
}
.base-multi-select .options .option label:hover {
  color: #05f;
  color: var(--blue-500);
}
.base-checkbox .checkbox-container .input:checked {
  border: 1px solid #05f;
  border: 1px solid var(--blue-500);
}
.base-checkbox .checkbox-container .input:checked ~ svg {
  width: 100%;
  border-radius: 4px;
  border-radius: var(--radius-4);
  z-index: 0;
  height: 100%;
  padding: 4px;
  background: #05f;
  background: var(--blue-500);
}
.jobs .jobs-count {
  margin-bottom: 32px;
  padding: 0 16px;
  font-family: Poppins, ui-sans-serif, system-ui, -apple-system, Segoe UI,
    Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont,
    "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: 600;
  font-size: 20px;
  line-height: 1.3rem;
}
.jobs .jobs-count span {
  color: #05f;
  color: var(--blue-500);
}
.jobs .jobs-list {
  padding-bottom: 128px;
}
.jobs-list .titles {
  display: grid;
  grid-template-columns: 4fr repeat(2, minmax(96px, 2fr)) 1fr 1fr;
  grid-gap: 32px;
  gap: 32px;
  padding: 16px;
  align-items: center;
  margin-bottom: 32px;
}
.jobs-list .titles p {
  color: #10131b;
  color: var(--grey-900);
  font-family: "Poppins", ui-sans-serif, system-ui, -apple-system, Segoe UI,
    Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont,
    "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: 600;
  font-size: 16px;
  line-height: 1.2rem;
}
.jobs-list .items {
  margin-bottom: 64px;
}
.jobs-list .items .item:not(:last-child) {
  margin-bottom: 8px;
}
.jobs-list .items .item {
  display: flex;
  padding: 16px;
  align-items: center;
  color: #10131b;
  color: var(--grey-900);
  border-radius: 8px;
  border-radius: var(--radius-8);
  font-family: "Lato", ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto,
    Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, "Segoe UI",
    "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 16px;
  line-height: 1.4rem;
  font-weight: 400;
}
a {
  text-decoration: none;
}
.jobs-list .items .item .desktop {
  width: 100%;
  display: grid;
  grid-template-columns: 4fr repeat(2, minmax(96px, 2fr)) 1fr 1fr;
  grid-gap: 32px;
  gap: 32px;
}
.jobs-list .items .item span {
  color: #05f;
  color: var(--blue-500);
  text-align: left;
}
.jobs-list .items .item .mobile {
  display: none;
  width: 100%;
}
.jobs-list .items .item .mobile .description {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  grid-gap: 16px;
  gap: 16px;
}
.jobs-list .items .item .mobile span {
  display: block;
}
.jobs-list .items .item:hover {
  background-color: #f4f9ff;
  background-color: var(--blue-025);
}
.jobs-list .cta-job-page button {
  margin: 0 auto 96px;
}
.button.primary,
.button.submit {
  background-color: #05f;
  background-color: var(--blue-500);
  color: #fff;
  color: var(--grey-000);
}
.button.small {
  padding: 8px 16px;
  grid-gap: 8px;
  gap: 8px;
  height: 40px;
  font-family: Poppins, ui-sans-serif, system-ui, -apple-system, Segoe UI,
    Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont,
    "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: 600;
  font-size: 16px;
  line-height: 2rem;
}
.button {
  cursor: pointer;
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border-radius: 32px;
  border-radius: var(--radius-32);
  border: 0 solid transparent;
  transition: background-color 0.1s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
}
@media (max-width: 768px) {
  .default-block {
    margin-left: 24px !important;
    margin-right: 24px !important;
  }
  .filters .selects {
    flex-wrap: wrap !important;
    grid-gap: 16px !important;
    gap: 16px !important;
  }
  .filters .selects section {
    width: 100% !important;
    grid-gap: 16px !important;
    gap: 16px !important;
  }
  .jobs-list .items .item .mobile .description {
    grid-gap: 4px 16px;
    gap: 4px 16px;
  }
  .jobs .jobs-count {
    text-align: left;
  }
}
@media (max-width: 1024px) {
  .default-block {
    margin-left: 40px;
    margin-right: 40px;
  }
  .title {
    margin-top: 112px;
    font-size: 40px;
    line-height: 2.5rem;
  }
  .filters {
    margin: 48px 0;
  }
  .jobs .jobs-count {
    font-size: 18px;
    line-height: 1rem;
  }
  .jobs .jobs-list {
    padding-bottom: 64px;
  }
  .jobs-list .titles {
    display: none;
  }
  .jobs-list .items .item {
    display: flex;
  }
  .jobs-list .items .item .desktop {
    display: none;
  }
  .jobs-list .items .item .mobile {
    display: grid;
  }
}
@media (max-width: 1280px) {
  .default-block {
    max-width: 928px;
  }
}
</style>