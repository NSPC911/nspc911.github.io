---
title: "Create testcases, then your prompt"
description: "Why you should attempt to write test cases before prompting your agent."
pubDate: 2026-05-06
author: "NSPC911"
tags: ["ai", "project"]
---

I'm not the most interested in one-trick prompts to get a project up and going, I'd rather do that myself. However, for smaller, but confusing features, I find prompting to be more efficient. Not just prompting however, but writing test cases for them.

[NSPC911/rovr #256](https://github.com/NSPC911/rovr/pull/256) was when I realised how useful this method is. I wrote a couple test cases for how I want the path input's fuzzy matcher to work. GPT 5.3 Codex got to work, and it worked! I booted into Linux, added some test cases, let GPT rip, and it worked! Obviously I had to get rid of the test cases before merging, because those worked only on my machines, but this seems much faster and efficient as compared to prompting endlessly

You cannot create test cases for a project that doesn't exist, you can only create a spec (unless I'm not knowing something) but for features, this is definitely possible.

I'm currently working on a feature to add config prepend and append support for certain values, and I'm doing the same as well. I don't know how to create it, but I know how I want it to behave, so I create a test case.

It is also what an agent is for, continue doing something until a task is achieved. The task being to make changes until the test case succeeds. You can leave it alone, and ensure that the moment you come back, you have something that matches what you are looking for, and needing some minor tweaks (if necessary at all).

It is also theoretically more token efficient, because you don't enter the loop with input tokens, nor will the agent need to keep redoing a test, it knows what to achieve and it will do everything to achieve it
