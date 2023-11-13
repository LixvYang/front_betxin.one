import UIKit from "@foxone/uikit";
import { usePresets } from "@foxone/uikit/presets";
import Passport from "@foxone/mixin-passport";
import { createVuetify } from "vuetify/lib/framework.mjs";


export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify(
  usePresets({
    // overwrite vuetify options
  })
);

    nuxtApp.vueApp.use(vuetify)
    nuxtApp.vueApp.use(UIKit)
  // Doing something with nuxtApp
  console.log(1111)
})