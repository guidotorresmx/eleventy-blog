---
title: Hello World
layout: "index.njk"
---

Hello eleventy people

<ul>
    {%- for post in collections.blog -%}
        <li>
            <a href="{{ post.url }}">
                {{ post.data.title }}
            </a>
        </li>
    {%- endfor -%}
</ul>