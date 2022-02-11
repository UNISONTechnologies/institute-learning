<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import feather from "feather-icons";
</script>

<template>
    <div class="max-w-2xl mx-auto">
        <h1 class="text-4xl text-black dark:text-white mb-7">Contributing</h1>

        <div class="prose prose-slate dark:prose-invert">
            <Disclosure v-slot="{ open }">
                <DisclosureButton class="disclosure-button">
                    <span class="text-2xl">How Institute Works</span>

                    <span
                        class="w-5 h-5"
                        v-html="
                            feather.icons[
                                open ? 'chevron-up' : 'chevron-down'
                            ].toSvg()
                        "
                    />
                </DisclosureButton>
                <DisclosurePanel class="px-4">
                    <p>
                        Institute uses GitHub as a content source. All of the
                        resources on this site are stored in the
                        <a
                            href="https://github.com/UNISONTechnologies/institute-learning-resources"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            repository
                            <code>institute-learning-resources</code> </a
                        >. In the root directory, there is one file,
                        <code>courses.json</code>. As you might have guessed,
                        this is a JSON file that has the courses in it. This
                        file is an array of objects, with each object
                        representing a course.
                    </p>

                    <pre><code>{
    "id": "course-id",
    "name": "course name",
    "description": "course description"
}</code></pre>

                    <p>
                        For example, the course object representing the AP
                        Physics 1 is as follows.
                    </p>

                    <pre><code>{
    "id": "ap-physics-1",
    "name": "AP Physics 1",
    "description": "AP Physics 1 is an algebra-based..."
}</code></pre>

                    <p>
                        For every course in the array, there should be a folder
                        with the course ID as its name. For example, there is a
                        folder named
                        <code>ap-physics-1</code> for the AP Physics 1 course.
                    </p>

                    <p>
                        Inside that folder, there should be at least one file.
                        This is <code>files.json</code>, another JSON file with
                        an array of objects, but this time, the objects
                        represent a unit/section.
                    </p>

                    <pre><code>{
    "id": [unit/section numeric ID],
    "name": "unit/section name",
    "description": "unit/section description",
    "filename": "unit/section filename, minus the '.md'"
}</code></pre>

                    <p>
                        The other files are
                        <a
                            href="https://www.markdownguide.org/getting-started/"
                            target="_blank"
                            rel="noopener noreferrer"
                            >Markdown</a
                        >
                        (<code>.md</code>) files which represent a unit/section.
                        If you would like to use
                        <a
                            href="https://www.latex-project.org/about/"
                            target="_blank"
                            rel="noopener noreferrer"
                            >LaTeX</a
                        >, use the bracket delimiters (<code>\(</code> and
                        <code>\)</code>) around the beginning and end of your
                        LaTeX content.
                    </p>
                </DisclosurePanel>
            </Disclosure>
            <Disclosure as="div" class="mt-4" v-slot="{ open }">
                <DisclosureButton class="disclosure-button">
                    <span class="text-2xl">Adding a Course</span>

                    <span
                        class="w-5 h-5"
                        v-html="
                            feather.icons[
                                open ? 'chevron-up' : 'chevron-down'
                            ].toSvg()
                        "
                    />
                </DisclosureButton>
                <DisclosurePanel class="px-4">
                    <p>
                        To add a course, open the <code>courses.json</code> file
                        in the root directory and add a new entry following the
                        format below. Make sure to add a comma to the last curly
                        brace before starting to add your course.
                    </p>

                    <pre><code>{
    "id": "course-id",
    "name": "course name",
    "description": "course description"
}</code></pre>

                    <p>
                        After adding the course to the
                        <code>courses.json</code> file, create a new directory
                        in the root directory with the same course ID as you put
                        into the <code>id</code> field in
                        <code>courses.json</code>. Then create a JSON file with
                        the filename <code>files.json</code> in the new
                        directory. This file should be an array of objects, with
                        each object representing a unit/section. This is covered
                        in the next section.
                    </p>

                    <p>
                        After you are finished adding your course, create a pull
                        request on GitHub.
                    </p>
                </DisclosurePanel>
            </Disclosure>
            <Disclosure as="div" class="mt-4" v-slot="{ open }">
                <DisclosureButton class="disclosure-button">
                    <span class="text-2xl">Adding a Unit/Section</span>

                    <span
                        class="w-5 h-5"
                        v-html="
                            feather.icons[
                                open ? 'chevron-up' : 'chevron-down'
                            ].toSvg()
                        "
                    />
                </DisclosureButton>
                <DisclosurePanel class="px-4">
                    <p>
                        After creating the <code>files.json</code> file, create
                        a blank file with the following contents.
                    </p>

                    <pre><code>[]</code></pre>

                    <p>
                        Between the brackets, you will be putting the
                        units/sections. Each unit/section object follows the
                        following format. Make sure to put a comma between each
                        object, but not after the last one.
                    </p>

                    <pre><code>{
    "id": [unit/section numeric ID],
    "name": "unit/section name",
    "description": "unit/section description",
    "filename": "unit/section filename, minus the '.md'"
}</code></pre>

                    <p class="text-xs">
                        An example can be found in the
                        <a
                            href="https://github.com/UNISONTechnologies/institute-learning-resources/blob/main/ap-physics-1/files.json"
                            target="_blank"
                            rel="noopener noreferrer"
                            >AP Physics 1 <code>files.json</code> file</a
                        >.
                    </p>

                    <p>
                        After creating the entries in <code>files.json</code>,
                        create a file with the filename in the
                        <code>filename</code> field and ending in
                        <code>.md</code>. Add your content following
                        <a
                            href="https://www.markdownguide.org/cheat-sheet/"
                            target="_blank"
                            rel="noopener noreferrer"
                            >Markdown guidelines</a
                        >. If you would like to use
                        <a
                            href="https://www.latex-project.org/about/"
                            target="_blank"
                            rel="noopener noreferrer"
                            >LaTeX</a
                        >, use the bracket delimiters (<code>\(</code> and
                        <code>\)</code>) around the beginning and end of your
                        LaTeX content.
                    </p>

                    <p>
                        Note: For best results, only use heading levels 2 and
                        below (<code>##</code>, <code>###</code>, etc.).
                    </p>

                    <p>
                        After you are finished adding your units/sections,
                        create a pull request on GitHub.
                    </p>
                </DisclosurePanel>
            </Disclosure>
        </div>
    </div>
</template>

<style lang="postcss" scoped>
.disclosure-button {
    @apply flex justify-between w-full;
}
</style>
