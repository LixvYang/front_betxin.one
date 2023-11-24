<script setup>
const route = useRoute();
const dark = ref(false);
const colorTheme = computed(() => localStorage.getItem("color-theme"))
const user = useUserStore()
</script>

<template>
  <div
    id="SideNavMain"
    :class="route.fullPath === '/' ? 'lg:w-60' : 'lg:w-[220px]'"
    class="hidden md:block fixed z-0 bg-gray-200 h-full lg:border-r-0 border-r w-[75px] overflow-auto dark:bg-gray-800"
  >
    <div class="lg:w-full w-[55px] mx-auto">
      <NuxtLink :to="`/user/${user.getUserInfo.uid}`">
        <ClientOnly>
          <MenuItem
            iconString="For You"
            colorString="#6C89D3"
            sizeString="30"
          />
        </ClientOnly>
      </NuxtLink>
      <MenuItem iconString="Following" colorString="#5979F0" sizeString="27" />
      <MenuItem iconString="LIVE" colorString="#8A64D0" sizeString="27" />
      <MenuItem iconString="Collect" colorString="#AA66C3" sizeString="27" />
      <MenuItem iconString="Clock" colorString="#6AB48F" sizeString="27" />

      <div class="border-b lg:ml-2 mt-2" />

      <div
        class="lg:block hidden text-xs text-gray-600 font-semibold pt-4 pb-2 px-2"
      >
        Suggested accounts
      </div>

      <div class="lg:hidden block pt-3" />

      <div class="cursor-pointer">
        <MenuItemFollow />
      </div>

      <button class="lg:block hidden text-[#F02C56] pt-1.5 pl-2 text-[13px]">
        See all
      </button>

      <div class="border-b lg:ml-2 mt-2" />

      <div
        class="lg:block hidden text-xs text-gray-600 font-semibold pt-4 pb-2 px-2"
      >
        Following accounts
      </div>

      <div class="lg:hidden block pt-3" />

      <div class="cursor-pointer">
        <MenuItemFollow />
      </div>

      <button class="lg:block hidden text-[#F02C56] pt-1.5 pl-2 text-[13px]">
        See More
      </button>

      <div class="lg:block hidden border-b lg:ml-2 mt-2" />

      <div class="lg:block hidden text-[11px] text-gray-500">
        <div class="pt-4 px-2">
          About Newsroom TikTok Shop Contact Careers ByteDance
        </div>
        <div class="pt-4 px-2">
          TikTok for Good Advertise Developers Transparency TikTok Rewards
          TikTok Browse TikTok Embeds
        </div>
        <div class="pt-4 px-2">
          Help Safety Terms Privacy Creator Portal Community Guidelines
        </div>
        <div class="pt-4 px-2">© 2023 TikTok</div>
      </div>

      <div class="pb-14"></div>
    </div>
  </div>
</template>
