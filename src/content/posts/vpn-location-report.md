---
title: "Your VPN could be lying to you?"
description: "Going through some points from IPInfo's VPN Location Mismatch Report"
pubDate: 2025-12-17
author: "NSPC911"
tags: ["life"]
---

> This is going to be my thoughts on https://ipinfo.io/blog/vpn-location-mismatch-report

First of, I use Windscribe VPN, for the past 3-4 years. I do **not** have a paid plan, and neither do I plan to upgrade. I use the free plan with 10GB via the marketing emails (I just automatically delete them).

Taking a look at the report, the first thing is VPN Location Mismatch. What does that mean?

Well, it means that the VPN's displayed location is different from the actual server location.

For example, if I connect with Proton VPN to Bahamas _server_, my IP address will show as being from Bahamas, but in reality, the server is located in the US. This is done for various reasons, such as legal restrictions, server availability, or performance optimization (or maybe not).

Now according to the report, our torrenter's favourite VPN, Mullvad VPN is 0% mismatch. So yes, continue using that. But for the rest...

| Provider                | Claimed Countries | % Virtual or Unmeasurable |
| ----------------------- | ----------------- | ------------------------- |
| IPVanish                | 108               | 61                        |
| CyberGhost              | 100               | 57                        |
| ExpressVPN              | 105               | 57                        |
| NordVPN                 | 126               | 53                        |
| Private Internet Access | 91                | 52                        |
| ProtonVPN               | 110               | 51                        |
| FastVPN                 | 112               | 49                        |
| X-VPN                   | 89                | 43                        |
| Surfshark               | 100               | 41                        |
| BelkaVPN                | 63                | 41                        |
| ZoogVPN                 | 76                | 34                        |
| VyprVPN                 | 63                | 27                        |
| FastestVPN              | 47                | 26                        |
| TrustZone               | 39                | 18                        |
| PrivateVPN              | 62                | 13                        |
| TunnelBear              | 47                | 9                         |
| VeePN                   | 84                | 6                         |
| IVPN                    | 41                | 0                         |
| Mullvad                 | 50                | 0                         |
| Windscribe              | 70                | 0                         |

What are my thoughts on this?
- Nord VPN & Surfshark: The number of adverts may have an inverse relationship with the quality of the service.
- Proton VPN: They sure are not living up to their "privacy first" motto.
- Windscribe: I didn't really expect this.

Though I do want to emphasise on this. This may not be accurate.

The way IP Info tests this is mentioned in https://ipinfo.io/blog/probe-network-how-we-make-sure-our-data-is-accurate but a simple version of it is as such
1. Connect to a chosen VPN's location
2. Using Probe Servers, measure the round-trip time (RTT) to the VPN's IP address.
3. Repeat step 2 for other probe servers
4. Triangulate the position using the data available.

The issue is with measuring the RTT. There are many factors that can affect the RTT, such as network congestion, routing policies, and server load.

So take this with a grain of salt. But if you are using a VPN from the list above, and you care about the location, maybe consider switching to Mullvad (or Windscribe).
