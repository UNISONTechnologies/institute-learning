<script setup lang="ts">
const props = defineProps<{
    courseId: string;
    filename?: string;
    name: string;
    description: string;
}>();
</script>

<template>
    <router-link
        :to="
            props.filename
                ? `/course/${props.courseId}/${props.filename}`
                : `/course/${props.courseId}`
        "
        class="w-full bg-white dark:bg-gray-900 rounded-lg shadow divide-y divide-gray-200"
    >
        <div class="w-full flex items-center justify-between p-6 space-x-6">
            <div class="flex-1">
                <h3
                    class="text-gray-900 dark:text-white text-md font-medium"
                    v-text="props.name"
                />
                <p
                    class="mt-2 text-gray-500 dark:text-gray-400 text-sm whitespace-normal break-words"
                    v-text="props.description"
                />
            </div>
        </div>
    </router-link>
</template>
