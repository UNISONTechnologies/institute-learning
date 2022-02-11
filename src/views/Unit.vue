<script setup lang="ts">
import MarkdownIt from "markdown-it";
import MarkdownItTexMath from "markdown-it-texmath";
import Katex from "katex";
import { computed, onBeforeMount, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "../stores/main";
import { BASE_COURSE_FILE_PATH } from "../constants";
import { useTitle } from "@vueuse/core";

const route = useRoute();
const router = useRouter();
const store = useStore();

const courseId = route.params.courseId as string;
const filename = route.params.filename as string;
const course = computed(() => store.getCourse(courseId));
const courseFiles = computed(() => store.getCourseFiles(courseId));
const courseFile = computed(() =>
    courseFiles.value
        ? courseFiles.value.find(
              (courseFile) => courseFile.filename === filename
          )
        : null
);

if (!course.value || !courseFiles.value || !courseFile.value) {
    router.push({ name: "Courses" });
}

useTitle(
    `${courseFile.value?.name} | ${course.value?.name} | Institute Learning`
);

const md = new MarkdownIt({}).use(MarkdownItTexMath, {
    engine: Katex,
    delimiters: "brackets",
    katexOptions: { output: "html" },
});

const markdownContent = ref<string>("");
const loading = ref<boolean>(true);
onBeforeMount(() =>
    fetch(BASE_COURSE_FILE_PATH + courseId + "/" + filename + ".md")
        .then((response) => response.text())
        .then((text) => {
            markdownContent.value = md.render(
                text.replaceAll("{% raw %}", "").replaceAll("{% endraw %}", "")
            );
            loading.value = false;
        })
        .catch(console.error)
);

const content = computed(async () =>
    md.render(
        markdownContent.value
            .replaceAll("{% raw %}", "")
            .replaceAll("{% endraw %}", "")
    )
);
</script>

<template>
    <h1 class="text-4xl text-black dark:text-white" v-text="courseFile?.name" />
    <h2
        class="text-xl text-gray-700 dark:text-gray-300 mt-3 mb-7"
        v-text="courseFile?.description"
    />

    <div
        class="max-w-none prose prose-slate dark:prose-invert"
        v-html="markdownContent"
        v-if="!loading"
    ></div>
    <span class="text-black dark:text-white" v-else> Loading... </span>
</template>
