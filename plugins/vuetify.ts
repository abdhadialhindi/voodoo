import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import '@fortawesome/fontawesome-free/css/all.css';
import { aliases, fa } from 'vuetify/iconsets/fa';


import { createVuetify, ThemeDefinition } from 'vuetify'

const myCustomLightTheme = {
  dark: false,
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa,
    },
  },

  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: '#05f',
    'primary-darken-1': '#3700B3',
    secondary: '#03DAC6',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  }
}

export default defineNuxtPlugin((nuxt) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'myCustomLightTheme',
      themes: {
        myCustomLightTheme,
      }
    },
    display: {
     
      thresholds: {
        xs: 0,
        sm: 768,
        md: 1024,
        lg: 1280,
        xl: 1920,
      },
    },
   
    
    ssr: true,
    components,
    directives,
  });
  nuxt.vueApp.use(vuetify);
});
