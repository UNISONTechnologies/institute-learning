---
layout: practice
title: "Unit 6: Fundamental Interactions and Particles (Practice)"
subtitle: "College Board - Unit 3: Circular Motion and Gravitation"
description: >
    The fundamental interactions, also known as fundamental forces, are the interactions that do not appear to be reducible to more basic interactions.
categories: ap-physics-1
latex: true
---

{% assign _path = page.path | split: "-" %}
{% assign path = _path | slice: 3, _path.size | join: "-" | replace: "-practice.md", "" %}
{% assign category = page.categories | first | strip %}

<h3 id="problem"></h3>

<!-- {% assign problem = site.data.practice[page.categories.first][path][1] %}

### {{ problem.problem | replace: "-|", "\" | replace: "|||", "$$" }}

{% assign answers = problem.answers %}
{% for answer in answers %}
<label class="inline-flex items-center">
<input type="radio" class="form-radio disabled:text-gray-500" name="answer" value="{{ forloop.index0 }}" />
<span class="ml-2"> {{ answer.answer | replace: "-|", "\" | replace: "|||", "$$" }} </span>
</label>
{% endfor %}

<button id="check-button" type="button" class="mt-4 bg-green-500 text-white w-full px-12 py-3 rounded-md disabled:bg-gray-300 disabled:cursor-default" disabled>
    Check
</button>
<div class="flex gap-4">
<button id="previous-button" type="button" class="bg-dark-gray text-white w-1/2 px-12 py-3 rounded-md disabled:invisible">
    Previous
</button>
<button id="next-button" type="button" class="bg-dark-gray text-white w-1/2 px-12 py-3 rounded-md disabled:invisible">
    Next
</button>
</div> -->

<span id="problem-index" style="display: none"> {{ forloop.index0 }} </span>
<span id="json-data" style="display: none">
{{ site.data.practice[page.categories.first][path] | replace: '”', '"' | replace: "=>", ":" }}
</span>
