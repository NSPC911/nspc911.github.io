---
title: "I made my own GitHub Copilot CLI"
description: "Copilot could never be what gh-copilot was, so I made one myself because of a thing called 'free will'"
pubDate: 2025-11-19
author: "NSPC911"
tags: ["ai","terminals"]
---

So on 25th September 2025, GitHub published a blog that stated the deprecation of my beloved [gh-copilot](https://github.com/github/gh-copilot) extension

https://github.blog/changelog/2025-09-25-upcoming-deprecation-of-gh-copilot-cli-extension

I never really checked it at that time, so when I tried to summon <kbd>ghcs</kbd> about a week ago, i got the fated error message

```
 ghcs

The gh-copilot extension has been deprecated in favor of the newer GitHub Copilot CLI.

For more information, visit:
- Copilot CLI: https://github.com/github/copilot-cli
- Deprecation announcement: https://github.blog/changelog/2025-09-25-upcoming-deprecation-of-gh-copilot-cli-extension

No commands will be executed.
```

I wasn't that much affected, I still used [opencode](https://opencode.ai) for any of my 'agentic' needs, but I wanted something that can do something similar to `ghcs`

So let's set the ground rules.
1. It must be done fully in PowerShell
  - This means it wouldn't depend on any other runtime, languages, whatever
  - Also means that running commands is far easier
2. It must support suggesting a command, and explaining a command
3. It should look nice

With that out of the way, I introduce to you, my scuffed command helper

https://github.com/NSPC911/dotfiles/blob/62e81e6696e1c29c9174e5e6e1e951e1e926f70c/readonly_Documents/PowerShell/Microsoft.PowerShell_profile.ps1#L360-L510

So first off, yes, this is done in 100% powershell, but it does depend on a few certain libraries
1. [bat](https://github.com/sharkdp/bat) for syntax highlighting of commands
2. [rich-cli](https://github.com/Textualize/rich-cli) for a neater rendering of markdown
  - I did take a look at both [`Show-Markdown`](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/show-markdown?view=powershell-7.5) and [charmbracelet/glow](https://github.com/charmbracelet/glow) but they just didn't look nice or customisable as compared to `rich`.

Next, it does look relatively nice

<figure>
  <img src="/images/local-command-helper/create-100-files-in-cwd.png" alt="asked for a command to create 100 files in the current directory, then copied to clipboard"/>
  <figcaption>
    <p>can you believe this is written with just powershell?</p>
  </figcaption>
</figure>

https://en.wikipedia.org/wiki/Box-drawing_characters and https://gist.github.com/fnky/458719343aabd01cfb17a3a4f7296797 were quite helpful in creating the UI itself

<figure>
  <img src="/images/local-command-helper/nice-ui.png" alt="i asked to create 100000 files in a directory, edited in some error catchers, asked it to add progress bars, then ran it"/>
  <figcaption>
    <p>i quite like this</p>
  </figcaption>
</figure>

to some, this might seem too verbose, but I just want to see what commands my script is running

also the command explainer

<figure>
  <img src="/images/local-command-helper/explain-this-command.png" alt="i asked it to explain the previous command which was to create 100000 files"/>
  <figcaption>
    <p>asking it to explain a command</p>
  </figcaption>
</figure>

but screenshots don't do justice, so here is a video

<div class="video-wrapper">
  <video controls width="auto" height="auto" src="/videos/local-command-helper/scuffed-video.mp4">
    Your browser does not support the video tag.
  </video>
</div>

The video is sped up at certain places. Parts like querying the LLM itself is quite slow, because I don't have a dedicated GPU, nor is 16GB RAM enough.

I'm not planning to make this cross-shell, so either switch to powershell or create one yourself
