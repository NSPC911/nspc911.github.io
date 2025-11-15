---
title: "rovr v0.5.0"
description: "Our monthly check in on rovr"
pubDate: 2025-11-15
author: "NSPC911"
tags: ["terminals", "rovr", "project"]
---

# rovr v0.5.0

quite a couple things have changed since the last release of v0.4.3.post2

for those who are new here, [rovr](https://nspc911.github.io/rovr) is my current project
it is a python based terminal file manager built to experiment with the [Textual framework](https://textual.texualize.io) to solve my issues with [superfile](https://github.com/yorukot/superfile)

some major changes have been done, it shouldn't impact much considering the smaller reach this has, but I just wanted to make this post for fun

## breaking changes

a bump in the minor version for a major version zero project means something has been irreversibly changed

well four things have been changed

- `interface.preview_*`

  previously there were only texts for error, binary and initial placeholder. it has been refactored into its own section at `settings.preview_text` with two more texts
  - `interface.preview_text.error` (for errors in rendering)
  - `interface.preview_text.binary` (for binary files)
  - `interface.preview_text.start` (shown for a split second when starting up)
  - `interface.preview_text.empty` (when the file is empty)
  - `interface.preview_text.too_large` (when the file is too large, which is >1MB)

- `settings.preview_full`

  this was quite a scuffed feature, it let you view the full content of a file, and also an archive, but there were major performance issues, so I've removed it for now.
  Archive previews list the full contents though

- `settings.cd_on_quit`

  originally this was from superfile, but after the `--cwd-file` was added in `0.4.0`, it had to happen
  you can check the updated function for it at https://nspc911.github.io/rovr/features/cd-on-quit/

- `interface.compact_mode`

  it got expanded to two sections
  - `interface.compact_mode.buttons` to compact the header buttons
  - `interface.compact_mode.panels` to make the panels smaller

## new features

- `interface.scroll_off`

  The number of files to keep above and below the cursor when moving through the file list.

  Defaults to 3

- sort order

  finally, you can change the sort order in rovr. you can just press the button for it or press `,` and you can view the switcher!

- new CLI flags

  `--show-keys` let's you see the name of the keys that you press, useful for any rebinding
  `--tree-dom` lets you view the DOM structure if you want to make some changes to the styles

- state manager

  also another feature that had to be made
  lets you save the panel visibility ane sort orders for other sessions. this syncs across different instances, so a change in one gets reflected in the others


this should be the most important changes, obviously refer to the full diff to know what changed
