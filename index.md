---
layout: main
title: Home
---

<div class="grid
            md:grid-cols-3
            sm:grid-cols-1
            grid-flow-row grid-auto-row-dense
            gap-6">
{% for course in site.data.courses %}
<a href="/course/{{ course.id }}">
    <div class="flex flex-wrap -m-4">
      <div class="p-4">
        <div class="border border-gray-200 p-6 rounded-lg transition duration-300 hover:shadow-lg">
          <h2 class="text-xl font-bold text-gray-900 mb-2">
          {{ course.name }}
          </h2>
          <p class="leading-relaxed text-base">
         {{ course.description }}
          </p>
        </div>
        </div>
      </div>
      </a>
      {% endfor %}

<a href="/contributing">
    <div class="flex flex-wrap -m-4">
      <div class="p-4">
        <div class="border border-gray-200 p-6 rounded-lg transition duration-300 hover:shadow-lg">
          <h2 class="text-xl font-bold text-gray-900 mb-2">
          Contributing
          </h2>
          <p class="leading-relaxed text-base">
         Learn how to add courses and notes to Institute
          </p>
        </div>
        </div>
      </div>
      </a>
</div>
