<script setup lang="ts">
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "../stores/main";
import SelectCard from "../components/SelectCard.vue";
import { useTitle } from "@vueuse/core";

const route = useRoute();
const router = useRouter();
const store = useStore();

const courseId = route.params.courseId as string;
const course = computed(() => store.getCourse(courseId));
const courseFiles = computed(() => store.getCourseFiles(courseId));

if (!course.value || !courseFiles.value) {
    router.push({ name: "Courses" });
}

useTitle(`${course.value?.name} | Institute Learning`);
</script>

<template>
    <h1 class="text-4xl text-black dark:text-white" v-text="course?.name" />
    <h2
        class="text-sm sm:text-base text-gray-700 dark:text-gray-300 mt-3 mb-7"
        v-text="course?.description"
    />

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SelectCard
            v-for="unit in courseFiles"
            :key="unit.id"
            :course-id="courseId"
            :filename="unit.filename"
            :name="unit.name"
            :description="unit.description"
        />
    </div>
</template>
