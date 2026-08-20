---
layout: page
title: Fuse and Refine
description: Robust and accurate HD map auto-labeling for autonomous-driving scenes.
importance: 4
category: engineering
related_publications: true
---

Fuse and Refine is an HD map auto-labeling framework for static road elements in large-scale autonomous-driving scenes.

Starting from VMA as the baseline, the project builds a complete training and evaluation pipeline on self-collected data. It fuses image and LiDAR information, uses **Sp-Net** to improve cross-scene coarse detection robustness, projects initial predictions back to raw point-cloud space for local sampling, and uses **Refine-Net** to correct geometric position and shape errors.

Highlights:

- Multi-modal HD map auto-labeling.
- Image and LiDAR fusion for static road elements.
- Coarse-to-fine geometry refinement.
- Submitted to IROS as a first-author work.
