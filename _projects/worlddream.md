---
layout: page
title: GaussianDream++
description: Efficient 3D Gaussian world modeling for robotic manipulation.
importance: 1
category: research
related_publications: true
---

[Paper](https://arxiv.org/abs/2608.25659)

GaussianDream++ is an efficient 3D Gaussian world modeling framework for robotic manipulation.

The project introduces **World State Tokens** and **World Prediction Tokens** with a coupled Gaussian world head. The model learns current physical structure and short-horizon environmental change using RGB, depth, alpha, and 3D motion supervision during training. At inference time, Gaussian decoding and rendering modules are removed.

Highlights:

- 3D Gaussian world modeling inside VLA policies.
- Static-dynamic residual transition for local interaction changes.
- 98.6% average success rate on LIBERO.
- Stronger spatial generalization on LIBERO-Plus and real-robot scenes.
