import { createWebHistory, createRouter } from "vue-router";

import Courses from "../views/Courses.vue";
import Course from "../views/Course.vue";
import Unit from "../views/Unit.vue";
import Contributing from "../views/Contributing.vue";
import About from "../views/About.vue";

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
    { path: "/contribute", name: "Contributing", component: Contributing },
    { path: "/about", name: "About", component: About },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
