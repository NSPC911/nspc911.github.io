---
title: Amendments to previous pwsh rant
description: Thought I'd make a follow up post to my previous rant post
pubDate: 2026-09-28
author: "NSPC911"
tags: ["terminals", "programming"]
---

Hello, its your neighbourhood masochist that decided using powershell on linux was a good idea.

First off: pwsh taking 500ms on startup was entirely my fault, I didn't know battery saver would throttle CPU _that_ much

```
Benchmark 1: powershell -nop -c 'exit'
  Time (mean ± σ):     167.8 ms ±  19.8 ms    [User: 195.1 ms, System: 49.3 ms]
  Range (min … max):   137.6 ms … 217.4 ms    13 runs

Benchmark 2: python -c 'exit(0)'
  Time (mean ± σ):      16.2 ms ±   4.7 ms    [User: 13.2 ms, System: 2.8 ms]
  Range (min … max):     8.9 ms …  27.6 ms    133 runs

Summary
  python -c 'exit(0)' ran
   10.38 ± 3.24 times faster than powershell -nop -c 'exit'
```

Python is still 10x faster, but hey, I'll take a 500ms startup after `$PROFILE` loading

Okay, let's measure the time it takes to sort 100000 files by its last modified time

```
$ @(1..10) | % { measure-command { ls /tmp/100k_files/ | sort -Prop LastWriteTime } } | measure-object -Property TotalMilliseconds -Average -StandardDeviation -Minimum -Maximum

Count             : 10
Average           : 1837.92465
Sum               :
Maximum           : 1967.3165
Minimum           : 1732.5296
StandardDeviation : 71.0279587161164
Property          : TotalMilliseconds
```

```
Benchmark 1: python -c 'import os;sorted([x for x in os.scandir("/tmp/100k_files")], key=lambda x: x.stat().st_mtime)'
  Time (mean ± σ):     188.3 ms ±  11.0 ms    [User: 87.3 ms, System: 99.8 ms]
  Range (min … max):   180.4 ms … 222.8 ms    13 runs
```

Faster, but obviously still 10x slower than python.

I will stand with the fact that powershell is slow, and that I would love to have a powershell-like language without the dotnet baggage, but thought to admit fault where I was wrong.
