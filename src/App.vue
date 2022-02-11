<script setup lang="ts">
import NavigationBar from "./components/NavigationBar.vue";
import { useRoute } from "vue-router";
import { useStore } from "./stores/main";
import { onBeforeMount } from "vue";
import {
    BASE_COURSE_FILE_PATH,
    COURSES_URL,
    COURSE_FILES_PATH,
} from "./constants";
import { Course, Unit } from "./models";

const route = useRoute();
const store = useStore();

onBeforeMount(async () => {
    try {
        const coursesRequest = await fetch(COURSES_URL);
        const courses: Course[] = await coursesRequest.json();

        store.courses = courses;

        const courseUnits = {} as { [courseId: string]: Unit[] };
        courses.forEach(async ({ id }) => {
            const courseFilesRequest = await fetch(
                BASE_COURSE_FILE_PATH + id + "/" + COURSE_FILES_PATH
            );

            courseUnits[id] = await courseFilesRequest.json();
        });

        store.courseFiles = courseUnits;
    } catch (error) {
        console.error(error);
    }
});
</script>

<template>
    <NavigationBar />

    <div class="max-w-5xl mx-auto pt-6 px-8 md:px-0 pb-20">
        <router-view :key="route.query" />
    </div>

    <footer>
        <div
            class="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8"
        >
            <nav
                class="-mx-5 -my-2 flex flex-wrap justify-center space-x-5"
                aria-label="Footer"
            >
                <div class="py-2">
                    <router-link
                        to="/"
                        class="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                    >
                        Courses
                    </router-link>
                </div>

                <div class="py-2">
                    <router-link
                        to="/contribute"
                        class="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                    >
                        Contributing
                    </router-link>
                </div>

                <div class="py-2">
                    <router-link
                        to="/about"
                        class="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                    >
                        About
                    </router-link>
                </div>
            </nav>

            <p
                class="mt-8 text-center text-base text-gray-400 max-w-3xl mx-auto"
            >
                Copyright © 2020-{{ new Date().getFullYear() }} UNISON
                Technologies. All rights reserved. Materials on this site may be
                used for educational and non-commerical purposes only.
                Commercial use is not allowed. Using the content on this site to
                imply or suggest an affiliation with UNISON Technologies,
                without permission from UNISON Technologies, is not allowed.
            </p>
        </div>
    </footer>
</template>
