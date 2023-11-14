import { usePassport } from "@foxone/mixin-passport/lib/helper";

// must use in setup function
const passport = usePassport();

const authData = await passport.auth({
  // AuthOptions
});

export default function() {
    
}