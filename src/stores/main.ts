import { defineStore } from "pinia";
import { Course, Unit } from "../models";

interface CourseUnit {
    [courseId: string]: Unit[];
}

export interface StoreState {
    courses: Course[] | null;
    courseFiles: CourseUnit | null;
}

export const useStore = defineStore("main", {
    state: (): StoreState => {
        return {
            courses: null,
            courseFiles: null,
        };
    },
    getters: {
        getCourse: (state) => {
            return (courseId: string) =>
                state.courses?.find((course) => course.id === courseId);
        },
        getCourseFiles: (state) => {
            return (courseId: string) => {
                if (state.courseFiles) {
                    if (
                        Object.keys(state.courseFiles).indexOf(courseId) !== -1
                    ) {
                        return state.courseFiles[courseId];
                    } else {
                        return null;
                    }
                } else {
                    return null;
                }
            };
        },
    },
    persist: true,
});
