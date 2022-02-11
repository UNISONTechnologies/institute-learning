<script setup lang="ts">
import SelectCard from "../components/SelectCard.vue";
import { useStore } from "../stores/main";
import { useTitle } from "@vueuse/core";

const store = useStore();
useTitle("Institute Learning");
</script>

<template>
    <h1 class="text-4xl text-black dark:text-white mb-7">Courses</h1>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SelectCard
            v-for="course in store.courses"
            :key="course.id"
            :course-id="course.id"
            :name="course.name"
            :description="course.description"
        />
    </div>
</template>
