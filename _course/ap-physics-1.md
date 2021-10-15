---
title: AP Physics 1
tag: ap-physics-1
---

<div class="grid grid-cols-3 gap-4">
{% for course in site.posts %}
<a href="{{ course.url }}">
    <div class="flex flex-wrap -m-4">
      <div class="p-4">
        <div class="border border-gray-200 p-6 rounded-lg">
          <h2 class="text-xl font-bold text-gray-900 mb-2">
          {{ course.title }}
          </h2>
          <p class="leading-relaxed text-base">
         {{ course.description }}
          </p>
        </div>
        </div>
      </div>
      </a>
      {% endfor %}
</div>