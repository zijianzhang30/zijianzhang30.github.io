---
layout: page
title: BEVFusion Deployment for Unmanned Mining Vehicles
description: Multimodal 3D object detection and edge deployment.
importance: 1
category: engineering
related_publications: false
---

This project focused on training, pruning, acceleration, and deployment of a BEVFusion-based 3D object detection system for unmanned mining vehicles.

The camera branch used Swin, FPN, and Depth LSS to generate BEV features. The point-cloud branch used voxelization and SparseEncoder to extract BEV features. The fused detector was deployed on NVIDIA Orin with TensorRT acceleration.

Highlights:

- Multimodal camera and LiDAR BEV fusion.
- Model pruning and edge inference optimization.
- NVIDIA Orin and TensorRT deployment.
