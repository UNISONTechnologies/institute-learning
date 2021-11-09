---
title: AP Physics 1
tag: ap-physics-1
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
    {% unless post.path contains 'practice' %}
    <a href="{{ post.url }}">
        <div class="flex flex-wrap -m-4">
            <div class="p-4">
                <div class="border border-gray-200 p-6 rounded-lg transition duration-300 hover:shadow-lg">
                    <h2 class="text-xl font-bold text-gray-900 mb-1">
                        {{ post.title }}
                    </h2>
                    <h3 class="text-sm text-gray-400 mb-2">
                        {{ post.subtitle }}
                    </h3>
                    <p class="leading-relaxed text-base">
                        {{ post.description }}
                    </p>
                </div>
            </div>
        </div>
    </a>
    {% endunless %}
    {% endfor %}
</div>
