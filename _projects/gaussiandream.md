---
layout: page
title: GaussianDream
description: A feed-forward 3D Gaussian world model for robotic manipulation.
importance: 3
category: research
related_publications: true
---

[Paper](https://arxiv.org/abs/2605.20752)

GaussianDream is a feed-forward **3D Gaussian World Model** plug-in for robotic manipulation policies. It aims to give VLA policies explicit 3D spatial modeling, dense geometric supervision, and short-horizon future prediction.

The system introduces GaussianDream queries and a temporal 3D-aware encoder. It jointly learns current Gaussian reconstruction and future Gaussian prediction from robot trajectories, supervised by RGB, depth, and pseudo 3D scene flow. Gaussian decoding heads and future prediction modules are removed during inference.

Highlights:

- 98.4% average success rate on LIBERO.
- 54.8% success rate on RoboCasa Human-50.
- 50.0% success rate on real-robot tasks.
