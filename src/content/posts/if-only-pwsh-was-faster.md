---
title: If only powershell was faster.
description: Just some ranting on how slow powershell is, and how nice it is to work with it
pubDate: 2026-09-16
author: "NSPC911"
tags: ["terminals", "programming"]
---

I love powershell. I use it everywhere, I'm part of the ~2% that have installed it on Linux

<figure>
  <img src="/images/pwsh-should-be-faster/pkgstats-of-shells-on-aur.png" alt="pkg stats of installed shells on aur"/>
  <figcaption>
    <p>stats of installed shells from the aur. powershell is sitting at 2.40%. <a href="https://pkgstats.archlinux.de/packages?limit=25&offset=0&compare=bash,zsh,fish,dash,nushell,tcsh,elvish,xonsh,dunesh,oil,powershell-bin" style="background: var(--nord-0)">source</a></p>
  </figcaption>
</figure>

powershell has so many tools, but the main flaw:

> IT IS SO SLOWWWWW

Take for instance, startup time.

We will compare python, a 'slow' interpreted language, and powershell.

```
Benchmark 1: python -c "exit(0)"
  Time (mean ± σ):      36.3 ms ±   6.3 ms    [User: 29.1 ms, System: 6.6 ms]
  Range (min … max):    25.5 ms …  56.5 ms    73 runs

Benchmark 2: pwsh -noprofile -c "exit 0"
  Time (mean ± σ):     397.2 ms ±  20.1 ms    [User: 546.7 ms, System: 118.8 ms]
  Range (min … max):   363.8 ms … 431.6 ms    10 runs

Summary
  python -c "exit(0)" ran
   10.94 ± 1.97 times faster than pwsh -noprofile -c "exit 0"
```

That does not look good. I'm just measuring the startup, and its really bad already, powershell took 10x longer than python

Okay, let's measure the time it takes to sort 100000 files by its last modified time

```
$ @(1..10) | % { measure-command { ls /tmp/100k_files/ | sort -Prop LastWriteTime } } | measure-object -Property TotalMilliseconds -Average -StandardDeviation -Minimum -Maximum

Count             : 10
Average           : 5603.9301
Maximum           : 6169.2167
Minimum           : 5209.0599
StandardDeviation : 243.15048516714
Property          : TotalMilliseconds
```

```
Benchmark 1: python -c 'import os;sorted([x for x in os.scandir("/tmp/100k_files")], key=lambda x: x.stat().st_mtime)'
  Time (mean ± σ):     543.3 ms ±  76.0 ms    [User: 254.2 ms, System: 283.3 ms]
  Range (min … max):   440.5 ms … 675.4 ms    10 runs
```

Keep in mind, the timing for powershell excludes its startup time. LOOK AT HOW SLOW IT IS

The entire command is so much shorter than python's, its so clean, BUT ITS SO SLOW

even after removing aliases

```powershell
Get-ChildItem /tmp/100k_files/ | Sort-Object -Prop LastWriteTime
```

```py
import os
sorted([x for x in os.scandir("/tmp/100k_files")], key=lambda x: x.stat().st_mtime)
```

Look, I love powershell, I will still continue using it.

BUT WHY, its so slow, a similar rust program can compile and run faster in the same time that powershell takes to read these things
<br/><sub>I know the answer to this question, .NET is retarded and slow</sub>

Powershell is so nice to write with, and it comes with so many things by default, its a shame that it is slow.

I've seen people complain about powershell's naming scheme, the `Verb-Noun` syntax.

But I find it easy to wrap my head around once I know a bit. There are also a lot of convenient aliases that can help you save a bit of time and mental capacity.

`Get-Help`: get help for a given command
`Invoke-WebRequrest`: start a web request to a given uri
`Add-History`: add a given array of strings to history
`Clear-Host`: clear the host's screen
`Write-Host`: write on the host's screen a given image (can be coloured with flags)
`Format-List`: format a given array into a list view
`Out-File`: outputs stdin to a file, basically `>` with some changes
`Resolve-Path`: resolve a given path, including wildcards

okay, you get the gist (hopefully)

I feel that powershell is quite feature rich, it's like a swiss army knife, but each of its tools is slightly dull or slow at its job: it gets the job done, but slow enough that you have thoughts at the back of your mind on rewriting it in a different language if you need to run it multiple times.

The problem is, this versatility is not found in any other languages. Powershell's `Verb-Noun` philosophy, object-oriented scripting, emphasis on pipes, the closest is `nushell`, but the commands there are less intuitive (for me ), and it doesn't seem to have widespread usage.

Most CLI tools that come with their own argument completer support bash, zsh and powershell, but completely forget the existence of nushell (and I'm not going to write my own argument completer, I have plenty of other things to do ~~like doomscrolling~~)

If only there's a powershell-like language, with the intuitive commands, ease of scripting, multiple available tools by default without needing extra installations, and speed. I'm not expecting much for speed, I just want my shell startup to be less than 250ms. I want a simple 100k sort-by-mtime to be under 1 second. That's it.
<br/><sub>Backwards compatibility on powershell would be nice, kind of like a rust rewrite of powershell, but breaking every dotnet object</sub>

Until then, thanks for coming to my Ted-Talk
