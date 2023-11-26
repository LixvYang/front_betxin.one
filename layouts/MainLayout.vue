<template>
  <div class="fixed w-full h-full px-0 overflow-auto bg-gray-100 dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
    <TopNav  />
    <div class="max-w-[1140px] mx-auto relative md:top-16 top-[52px]">
      <div id="search-form">
        <TabsSearch
        id="tabs-search"
        class="flex flex-col justify-between mx-auto max-w-xl md:hidden relative lg:px-2.5 px-0 bg-gray-50 dark:bg-gray-700"
        />

        <div id="info-item">
          <SideNavMain />
        </div>
        <slot />
      </div>
    </div>
  </div>
</template>
