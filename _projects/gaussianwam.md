---
layout: page
title: GaussianWAM
description: Distilling geometry and semantics from 3D Gaussian fields into world-action models.
importance: 2
category: research
related_publications: true
---

[Paper](https://arxiv.org/abs/2608.25659)

GaussianWAM addresses the lack of reliable 3D geometry and visual semantics in world-action models trained mainly in RGB or 2D video latent spaces.

The project uses **3D Gaussian Fields** as a unified spatial carrier. Geometry and semantic features are bound to Gaussian primitives, then rendered semantic, depth, and alpha signals are distilled into action-relevant WAM representations. The Gaussian teacher and auxiliary heads are only used during training, so the policy keeps zero additional inference overhead.

Highlights:

- Gaussian Field Enhancement for world-action models.
- Joint geometry and semantic distillation.
- FastWAM on LIBERO-Plus: 52.05% to 70.99%.
- Cosmos Policy: 71.52% to 77.30%.
