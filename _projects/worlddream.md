---
layout: page
title: WorldDream
description: Action-compatible 3D world tokens for efficient vision-language-action control.
importance: 1
category: research
related_publications: true
---

WorldDream studies how to add compact explicit 3D world states to VLA policies without slowing down closed-loop control at inference time.

The project introduces **World State Tokens** and **World Prediction Tokens** with a coupled Gaussian world head. The model learns current physical structure and short-horizon environmental change using RGB, depth, alpha, and 3D motion supervision during training. At inference time, Gaussian decoding and rendering modules are removed.

Highlights:

- 3D Gaussian world modeling inside VLA policies.
- Static-dynamic residual transition for local interaction changes.
- 98.6% average success rate on LIBERO.
- Stronger spatial generalization on LIBERO-Plus and real-robot scenes.
