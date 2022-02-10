<script setup lang="ts">
import CourseCard from "../components/CourseCard.vue";
import { useStore } from "../stores/main";

const store = useStore();
</script>

<template>
    <h1 class="text-4xl text-black dark:text-white mb-7">Courses</h1>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <CourseCard
            v-for="course in store.courses"
            :key="course.id"
            :course-id="course.id"
            :name="course.name"
            :description="course.description"
            :teacher="course.teacher"
        />
    </div>
</template>
