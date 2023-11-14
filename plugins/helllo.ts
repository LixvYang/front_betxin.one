import UIKit from "@foxone/uikit";
import { usePresets } from "@foxone/uikit/presets";
// import Passport from "@foxone/mixin-passport";
import { createVuetify } from "vuetify/lib/framework.mjs";
import { usePassport } from "@foxone/mixin-passport/lib/helper";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify(usePresets({}));
  nuxtApp.vueApp.use(vuetify);
  nuxtApp.vueApp.use(UIKit);
  const passport = usePassport(nuxtApp.vueApp);
  // const auth = useCookie('auth', {
  //   default: () => ({ 'token': 'xx', 'channel': 'mixin'}),
  //   watch: true
  // })
  // if (auth) {
  //     passport.sync({
  //       token: auth.value.token,
  //       channel: auth.value.channel as any,
  //     })
  //   }
});
