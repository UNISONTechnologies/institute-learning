<script setup lang="ts">
import ThemeSwitcher from "./ThemeSwitcher.vue";
</script>

<template>
    <nav class="max-w-5xl mx-auto">
        <!-- Header start -->
        <div class="block sm:flex sm:justify-between sm:items-center mb-6 pt-3">
            <!-- Header menu links and small screen hamburger menu start -->
            <div class="flex justify-between items-center px-6 pt-2 sm:px-0">
                <router-link to="/"
                    class="text-pink-700 dark:text-pink-400 block text-left text-lg font-bold sm:mr-4 mb-2 sm:py-2"
                >
                    Institute Learning
                </router-link>

                <div class="flex items-center space-x-4">
                    <theme-switcher
                        class="sm:hidden bg-gray-200 dark:bg-gray-800 text-black dark:text-white hover:shadow-sm p-2 rounded-lg"
                    />
                </div>
            </div>

            <!-- Header right section buttons start -->
            <div
                class="hidden sm:flex justify-between items-center flex-col md:flex-row"
            >
                <!-- Theme switcher larger screen start -->
                <theme-switcher
                    class="ml-4 bg-gray-200 dark:bg-gray-800 text-black dark:text-white p-2 shadow-sm rounded-xl cursor-pointer"
                />
                <!-- Theme switcher larger screen end -->
            </div>
            <!-- Header right section buttons stendart -->
        </div>
        <!-- Header end -->
    </nav>
</template>

<style scoped lang="postcss">
nav a.router-link-exact-active {
    @apply text-pink-700;
    @apply hover:text-pink-800;
    @apply dark:text-pink-400;
    @apply dark:hover:text-pink-500;
}

nav .link {
    @apply block text-left text-lg font-medium text-black dark:text-white hover:text-pink-800 dark:hover:text-pink-400 sm:mx-4 mb-2 sm:py-2;
}
</style>
