import { createWebHistory, createRouter } from "vue-router";

import Courses from "../views/Courses.vue";
import Course from "../views/Course.vue";
import Unit from "../views/Unit.vue";

const routes = [
    { path: "/", name: "Courses", component: Courses },
    {
        path: "/course/:courseId/",
        name: "Course",
        component: Course,
    },
    {
        path: "/course/:courseId/:filename",
        name: "Unit",
        component: Unit,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
