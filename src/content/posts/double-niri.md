---
title: "Using two versions of niri simultaneously"
description: "How I keep two versions of niri from conflicting with each other"
pubDate: 2026-09-14
author: "NSPC911"
tags: ["niri", "programming"]
---

[niri](https://github.com/niri-wm/niri) is quite nice, it was the first time I seriously considered linux.
<br/>hyprland wasn't even that interesting, but niri

<ul>it just clicked</ul>

I've been on CachyOS + niri for some time now, installed it on

```sh
$ stat / | rg Birth
Birth: 2025-12-25 14:07:53.728768736 +0800
```

woah Christmas day, maybe Linux was a present to me

Anyways, the reason for two versions of niri is because, there are things that just aren't in main niri just yet.
<br/>It's similar to why I run helix, but in the case of helix, I don't run two versions, I have `helix`, and I have `vim` as backup (`msedit` if on Windows)

But in the case of a full window manager, making changes, and accidentally causing a problem, I find it slightly harder to fix it in the tty than to spin a stable version of niri up
> Yes I know some of you love the tty, I sometimes use it to spawn niri sessions while testing, but I find it not the best y'know (and no [kmscon](https://github.com/kmscon/kmscon) does not count, I can't spawn niri sessions in that)

So, how I handle two niri sessions:

### sddm
sddm is the most important piece, because that's how I switch between the two sessions.

I have `niri`, and I have `niri (patched)`.

`/usr/share/wayland-sessions/niri-patched.desktop`
```ini
[Desktop Entry]
Name=Niri (patched)
Comment=A scrollable-tiling Wayland compositor
Exec=niri-patched-session
Type=Application
DesktopNames=niri-patched
```

Then I open `/usr/bin/niri-session` and add this line after the check for `niri.service`
```sh
    if systemctl --user -q is-active niri-patched.service; then
      echo 'A niri (patched) session is already running.'
      exit 1
    fi
```

Then I copy over the content to `/usr/bin/niri-patched-session`, paste the full content and replace references of `niri` to `niri-patched`

### systemctl

`/usr/lib/systemd/user/niri-patched.service`
```ini
[Unit]
Description=A scrollable-tiling Wayland compositor
BindsTo=graphical-session.target
Before=graphical-session.target
Wants=graphical-session-pre.target
After=graphical-session-pre.target

Wants=xdg-desktop-autostart.target
Before=xdg-desktop-autostart.target

[Service]
Slice=session.slice
Type=notify
ExecStart=niri-patched --session --config /home/nspc911/.config/niri/fork.kdl
```

### niri binary itself

go back to the niri repo
```sh
mold -run cargo build --release
sudo mv target/release/niri /bin/niri-patched
```

### separate config files

I have three different config files for niri
- `base.kdl` - the base config, which is shared between both versions
- `config.kdl` - the config for the main niri version
- `fork.kdl` - the config for the patched niri version

---

and yeah that's it, if it goes well, you now have two versions of niri that you can switch between at any time

<sub>Honestly, I'm not sure why I wrote this post</sub>
