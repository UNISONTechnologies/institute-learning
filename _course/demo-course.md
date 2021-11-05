---
title: Your Course Title
tag: Your Course ID
---

<div
    class="grid
            md:grid-cols-3
            sm:grid-cols-1
            grid-flow-row grid-auto-row-dense
            gap-6"
>
    {% assign posts = site.posts | where: "categories", page.tag | sort: "title" %}
    {% for post in posts %}
    <a href="{{ post.url }}">
        <div class="flex flex-wrap -m-4">
            <div class="p-4">
                <div class="border border-gray-200 p-6 rounded-lg transition duration-300 hover:shadow-lg">
                    <h2 class="text-xl font-bold text-gray-900 mb-2">
                        {{ post.title }}
                    </h2>
                    <p class="leading-relaxed text-base">
                        {{ post.description }}
                    </p>
                </div>
            </div>
        </div>
    </a>
    {% endfor %}
</div>
