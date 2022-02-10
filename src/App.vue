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
</template>
