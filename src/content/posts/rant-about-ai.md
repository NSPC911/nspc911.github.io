---
title: "My thoughts on AI"
description: "My honest thoughts on AI and its figurative bubble"
pubDate: 2025-12-06
author: "NSPC911"
tags: ["life", "ai"]
---

Rant ahead, this is just a dump of my thoughts on AI in general. Things will go off-topic, or not, I don't want this to be corpo-speak.

1. Usage in everyday life

I think this has been mentioned a couple times, people nowadays just go to ChatGPT for any simple questions, instead of Googling it up. Even Google is stealing its own clicks with its AI Overview.

Me personally, I have a rule of "search before asking". General questions like
> Define "order of reaction"

can be very easily answered by AI

but something niche, like
> powershell command to take the output of a jq command and convert it into a powershell object

I tend to ask to AI (you can check more about AI in my terminal at [/posts/local-command-helper](/posts/local-command-helper))

but aside from that, I don't entirely agree with the statement
> "Saying 'thanks' to ChatGPT costs a lot of water"

because there are people that waste more resources and water by asking questions that Google would provide a better answer at.
- you also get to use your brain this way!

2. Usage for code

Just about four days ago, [Anthropic bought bun](https://www.anthropic.com/news/anthropic-acquires-bun-as-claude-code-reaches-usd1b-milestone), a runtime for JavaScript written in Zig. We all raced to interpret what this means, but the general consensus is that Anthropic bought bun, because of opencode.

<details>
<summary>Backstory on Claude and Coding</summary>
Anthropic has an offerring for coding, called Claude Code. It lets you use your Claude subscription in the terminal for coding related tasks. If I remember correctly, Claude Code was the first of its kind.
</details>
<details>
<summary>What came after Claude Code</summary>
then came along OpenAI Codex, <i>then</i> opencode, Gemini CLI, crush, then the Qwen team forked Gemini CLI, and Github made their own. (I'm still rooted for the Kimi CLI, because it is written in Python, but I applaud Codex for being written in Rust).
</details>

<details>
<summary>But what is opencode?</summary>
opencode lets you bring your own API key for any of their supported providers. opencode supports literally everyone, Claude, Gemini, Kimi, Ollama, etc, even GitHub Copilot! This means that opencode is truly open in terms of source and choice of model.
</details>

So, why Bun?

- Because Claude Code makes use of bun. And so does opencode.
- Bun isn't sustainable as compared to Deno<br>What do I mean by this?<br>Deni has certain corporate plans that let it earn a bit of money for its work. Bun doesn't have this (not sure about GitHub sponsors).

By buying bun, Anthropic ensures that they have a say in bun's future, and ensure that they have the slightest edge over opencode.

This also begs the question, what the fuck are these CEOs saying?

<div class="video-wrapper">
  <div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%;"><iframe src="https://www.youtube.com/embed/esCSpbDPJik?rel=0&start=985" style="top: 0; left: 0; width: 100%; height: 100%; position: absolute; border: 0;" allowfullscreen scrolling="no" allow="accelerometer *; clipboard-write *; encrypted-media *; gyroscope *; picture-in-picture *; web-share *;" referrerpolicy="strict-origin"></iframe></div>
</div>

If AI truly is advancing as fast as they are stating it is, then why did these assholes state that CS jobs are done in 6 months, 9 months ago?

Bun is open sourced under a MIT Licence, which means Anthropic can just fork Bun and ship their own features. Or even better, ask Claude to make Bun 2.0? Call it Bread or something, idk.

Anyways, irrelevant ramble, I do use AI in coding, but not like 'vibe-code' as people say.

My current project, `rovr` does involve a few AI generated code, but most of it is written by me. If I really need AI to write something, it is either
1. I don't know how to write it (`rovr` handling multiple archive formats with a single class)
2. Multi-tasking

I want to clarify on the multi-tasking part. Sometimes, I want to create something, but a bug is more important than a feature, so I just create a new workspace, activate the environment, tell Copilot what I want the new feature to do, and let it lose. Almost 90% of the time, I make a change to it, because I just
1. Don't like the method it used
2. I don't understand the method it uses
3. I use it as a learning point to recreate it my way.

https://github.com/nspc911/rovr/pulls?q=is%3Apr+author%3A%40copilot

But I genuinely love AI as a code reviewer. There are some faults here and there, but it is honestly amazing and helps fix up any thing that I overlook on accident.

3. AI's impact on the market

Oh how do I even start?

1. GPU prices have absolutely soared within the last 5 years. It originally was already high thanks to Crypto Miners, but made worse thanks to these fucking companies that buy anything remotely close to a GPU.

Clearly there is an issue when NVIDIA pays AI companies to buy GPUs from them, but no, apparently that is legal enough. But you know what is illegal? Colored people with no criminal backgrounds in the US, because clearly they are much more of an issue compared to a white Drug Dealer? (The US is genuinely such a shitshow, I'm happy I still haven't stepped foot into it).

Within the last month, RAM prices have also increased, by a lot. I think this meme perfectly shows the Black Friday reality.

<figure>
  <img src="/images/ai-crashout/w-black-friday-deal.jpeg" alt="a meme from r/pcmasterrace where a person waits for RAM prices to fall, but Black Friday had its highest prices."/>
  <figcaption>
    <p>I genuinely have no words. <a href="https://www.reddit.com/r/pcmasterrace/comments/1pe0ja5/w_black_friday_deal/?utm_source=share&utm_medium=mweb3x&utm_name=mweb3xcss&utm_term=1&utm_content=share_button" style="color: #2e3440">source</a></p>
  </figcaption>
</figure>

If this couldn't get worse, [Micron left the consumer RAM space for 'other important' profitable spaces](https://investors.micron.com/news-releases/news-release-details/micron-announces-exit-crucial-consumer-business).

But guess what, even [Samsung needs to negotiate with Samsung itself](https://www.pcworld.com/article/2998935/ram-is-so-expensive-samsung-wont-even-sell-it-to-samsung.html) (true or not), what the fuck is going on right now? Why was I born in 2008??

It kind of barely affected me, because I got my new laptop (Lenovo IdeaPad 5) in October, but I still face issues related to not having a dedicated GPU.

My teacher was talking about how he would be buying a Strix Halo on Black Friday, look how that turned out?

Now with all these in mind, PC builders stopped building PCs, which led to motherboard manufacturers losing demand, because these fucking datacenters don't care about motherboards, because they manufacture custom ones.

So we have insanely high GPU and RAM prices, low motherboard prices. And guess what is our alternative? Using NVIDIA GeForce Now. Essentially renting your own system.

We are now even closer to the "You will own nothing and be happy" much more than ever before.

4. The figurative bubble

So we gave two options for the current AI bubble
1. Too big to fail

Too much money was pumped into AI, so it just is impossible to fail.

2. Monopoly

Only one company holds control over every AI system, with every other company closing

This seems the most likely, considering how much Google has advanced, how bad Microsoft Copilot and ChatGPT are and how niche Claude is

This means only Google will emerge as the AI monopoly, once again, just like in other areas.

3. The stock market fucking dies like the dotcom bubble burst, but worse

This feels the least likely due to 'Too big to fail'

But with all these three possible outcomes, I highly doubt that GPU prices would ever decrease. GPUs just handle calculation differently, and there are definitely different uses for GPUs that CPUs cannot do. Just like crypto-mining and AI, GPUs will be pulled apart yet again very soon.

But RAM on the other hand, I'm not sure. Micron leaving the consumer market means the oligopoly market just got worse. Samsung doesn't seem like they will increase their supplies. So we will just have to wait and see.

