---
layout: notes
title: Contributing
---

## Before You Start

Make a [fork](https://github.com/UNISONTechnologies/institute-learning/fork){:target="\_blank"} of the [Institute Learning repository](https://github.com/UNISONTechnologies/institute-learning){:target="\_blank"}.

## Publishing Changes

Whenever you make a change you want to be added to the main Institute Learning site, [make a pull request](https://docs.github.com/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork){:target="\_blank"}.

## Adding a Course

If you want to add a course to Institute Learning, start by opening the `_data/courses.json` file and adding an ID, name, and description of the course. The ID should be delimited with dashes, instead of spaces or underscores. Make a note of the ID, as you'll need it for the posts and the course page.

After editing the courses file, copy the `demo-course.md` file in the `_course` directory and rename the pasted file with the following format: `your-id.md`. Then, change the title and tag to be your course's name and ID.

## Adding Unit/Section Notes

To create a page of notes for a unit or section, you need to create a post in the `_posts` directory. Jekyll mandates that these files be named in the following format: `YEAR-MONTH-DAY-title.md`. Replace `title` with a dash-delimited unit/section name. Copy the following front matter into the top of your newly-created file.

```yaml
---
layout: notes
title: Your Title
description: >
    Your Description
categories: Your Course ID
---
```

If you want LaTeX support enabled, add `latex: true` before the last `---`. Then, after adding your front matter, add your content. Institute Learning uses Jekyll, which supports Markdown. So all posts can be written in Markdown or directly in HTML, but Markdown is preferred.
