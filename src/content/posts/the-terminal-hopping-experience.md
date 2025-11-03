---
title: "The Terminal Hopping Experience"
description: "Yeah sure, what could go wrong when switching between like 5 terminals in a year?"
pubDate: 2025-11-04
author: "NSPC911"
tags: ["rice","terminals"]
---

<script>
const base = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : import.meta.env.BASE_URL + '/';
</script>

So, terminals, our lovely tool that we spend so much time on.

Maybe you are on neovim, configuring your plugins instead of doing some actual work.

Or maybe you are using it for the [OpenAI DevDay 2025](https://x.com/jshchnz/status/1975257083860922873).

Anyways, the point is that us developers love the terminal. We are in it all the time, and we talk about it all the time. So, here is my experience of terminal emulator hopping, because I can't distro hop just yet.

1. Windows Terminal (2024 - 2025 Feb)

  Windows Terminal was obviously the first one I started with. This was back when I was still running my old Lenovo 300e

<figure>
  <img src="/images/mygoat.png" alt="picture of my lenovo 300e in its final stages"/>
  <figcaption>
    <p>my goated lenovo 300e, stayed with me for 4 years</p>
  </figcaption>
</figure>

obviously we aren't here for the laptop, we are here to nerd out over terminals!

On it, I was running normal [`cmd.exe`](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/cmd) injected with [chrisant996/clink](https://github.com/chrisant996/clink).

I was using VSCode then, and wasn't as interested in the terminal as before

2. Warp Terminal (2025 March - 2025 May)

  This was when I got my Surface Pro 7+. It had its motherboard fried recently, but that's not the point.

<figure>
  <img src="/images/surface.png" alt="picture of my surface pro 7+ not able to boot"/>
  <figcaption>
    <p>my surface pro, served me well while it lasted (7 months)</p>
  </figcaption>
</figure>

I started using Warp because I found the concept of having a terminal AI assistant fascinating. So I got it.

Warp forced me away from `cmd`, to `powershell` (not `pwsh` for now). I did miss `cmd`'s syntax for a while, but I grew to like `powershell`'s verbose nature

<figure>
  <img src="/images/warp.png" alt="my warp setup"/>
  <figcaption>
    <p>my warp setup</p>
  </figcaption>
</figure>

I also started using <Helix/>[helix](https://github.com/helix-editor/helix) in May.

Early June, I realised that my usage of Warp's AI has slowed down, and I noticed some issues with its UI as well, which led me to go after other terminal emulators.

So I started searching for an alternative terminal emulator

3. Alacritty (2025 June)

  I wanted to try the most starred terminal emulator. [tabby](https://github.com/Eugeny/tabby) exists, but its baggage (electron) is absolutely insane, so I went with alacritty.

It was fine I guess, but I missed my tabs and splits and most importantly, ligatures.

So I searched for more.

4. Rio (2025 June - July)

  Rio was a major upgrade from Alacritty. I finally got splits, a cool bookmark tab thing, and also ligatures!
<figure>
  <img src="/images/rio.png" alt="my rio setup"/>
  <figcaption>
    <p>my rio setup</p>
  </figcaption>
</figure>
I was pretty satisfied with this setup, aside from a few flaws with rio itself.

- [#1196](https://github.com/raphamorim/rio/issues/1196): New Tabs and Splits inherit width and height from previous split/tab

  Super weird bug where if you zoom in on a pane/tab and create a new pane/tab, that new pane/tab will look smaller and take up a smaller space until you zoom in/out in that new pane/tab

- [#1192](https://github.com/raphamorim/rio/issues/1192): Certain Geometric shapes fail to render properly

  Another niche bug that affects some people using such shapes. It never quite bothered me, but once I noticed it, I couldn't stop noticing it

- Ghost Splits

  This actually happens quite a lot of time, but I can't make it occur at will

<figure>
  <img src="/images/ghostsplit_inrio.png" alt="ghost splits in rio"/>
  <figcaption>
    <p>ghost splits in rio</p>
  </figcaption>
</figure>

- Negative Splits

  This happened in a little stress tester moment, super funny, managed to lag the hell out of my surface

<figure>
  <img src="/images/negativesplit_inrio.png" alt="negative splits in rio"/>
  <figcaption>
    <p>what happens when you hold down the create split button for 10 seconds</p>
  </figcaption>
</figure>

Anyways, I didn't really switch from rio, it took me about a month to actually get out, because of wezterm's issues

<img src="/images/weztermbeingfunny.png" alt="wezterm glitching out in its rendering"/>

Until I managed to fix it with
```lua
config.front_end = "WebGpu"
config.webgpu_power_preference = "LowPower"
config.automatically_reload_config = true
```

5. Wezterm (2025 July - Now)

  With that now solved, I am now still using Wezterm. The config reached 220+ lines, and aside from some minor ocassional crashes, there isn't any issues.

I still have my Rio and Alacritty configs in my [dotfiles](https://github.com/NSPC911/dotfiles). I will talk about my dotfile journey in a different post.
