---
title: "No reason to use GitHub Copilot"
description: "There is now no reason to use Github copilot."
pubDate: 2026-04-26
author: "NSPC911"
tags: ["ai"]
---

Wow the last post was 5 months ago, I promise I will dump more thoughts here in the future.


So AI, you and me know how the job landscape has changed, everything has changed, all due to AI.

(just stopped the copilot lsp because it is pissing me off)

And we are all hoping the AI bubble bursts, whether it is a small one, or a big one. This might be coming sooner, thanks to Github.

Let me give you a run-through on how Github Copilot (will be referring to this as Copilot from now) works (or used to work).

When you use Copilot, you send a message, and it sends a message back. This message is counted as 1 request, and it is multiplied by the model's multiplier.

This means, using GPT 5.3 Codex, one message is 1 request. Using the currently-in-promotion Claude Opus 4.7? 7.5 requests. Claude Haiku 4.5 uses 0.33 requests.

But have you noticed this? Copilot is using requests; literally every other company uses tokens, they charge on a in-out token basis.

This means you can pull out absolutely insane stuff like this

<figure>
  <img src="/images/gh-copilot-might-just-die/10-mins.png" alt="an opencode session running gpt 5.3 codex for 10 minutes"/>
  <figcaption>
    <p></p>
  </figcaption>
</figure>

and still be charged 1 premium request.

This feature, and the ability to have literally every model at your disposal, is kind of the reason why I suggest Copilot to literally everyone. I use it via Copilot for Education

Now lets get to the problem.

[Github paused new signups for all Copilot subscriptions](https://github.blog/changelog/2026-04-20-changes-to-github-copilot-plans-for-individuals)
- Okay, seems fine.

[Github removes Opus 4.5 and 4.6 charged at 3x](https://github.blog/changelog/2026-04-20-changes-to-github-copilot-plans-for-individuals/#opus-models-removed-from-pro)
- That is just insane, Opus 4.5 and 4.6 were amazing models, I used them all the time when I had access to them.

[Github adds weekly rate limits](https://github.blog/news-insights/company-news/changes-to-github-copilot-individual-plans/#h-how-usage-limits-work-in-github-copilot)
- So monthly limits are just not enough now? We need weekly limits? What next, daily, then hourly limits?

[Github adds GPT 5.5 at 7.5x](https://github.blog/changelog/2026-04-24-gpt-5-5-is-generally-available-for-github-copilot)
- For context, GPT 5.4 is charged at 1x, GPT 5.3 Codex is also charged at 1x. I still use Codex.

[Github adds Opus 4.7 at 7.5x](https://github.blog/changelog/2026-04-16-claude-opus-4-7-is-generally-available)
- Previous Opus models (except Opus 4.6 Fast and Opus 4.1) were charged at 3x.

[Github is moving to a token-based billing](https://www.neowin.net/news/report-github-copilot-is-moving-to-token-based-billing-from-june) (not properly confirmed by github)
- So the main reason to use Copilot is gone.


So what is the point? Why should I use Copilot? If the best models are charged at such steep prices, then why bother? Why can't I just get a HuggingFace subscription and run it off there?<br>
I'm still going to use Copilot; it's free for me, and it is _still working_ (although perhaps not for long). But I think I suggest y'all to switch away.
Switch to something like OpenCode Go, or any Chinese companies. Clearly American firms are interested in getting the most money possible.

The market aquiring phase is over; it is now the milking phase.

---

Updated: 28 April

[New model multipliers for those in annual subscriptions](https://docs.github.com/en/copilot/reference/copilot-billing/models-and-pricing#model-multipliers-for-annual-copilot-pro-and-copilot-pro-subscribers)

What even is this? Overall x5-x9 increase in the initial multipliers, Opus 4.7 is at 27x, nearly hitting Opus 4.6 (Fast), what actual BS.

[Github is moving to usage based billing](https://github.blog/news-insights/company-news/github-copilot-is-moving-to-usage-based-billing)

Yeah, so there simply is no reason to pay for this. Get Claude Code or GPT Codex, because guess what, $10 will only give you $10 in Copilot Credits, and it doesn't get brought over.<br>
Just switch, there is no point to save the sinking ship, clearly enterprise demand is inelastic enough to do this.
