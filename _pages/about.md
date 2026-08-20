---
layout: default
title: about
permalink: /
---

<style>
  .home-academic {
    display: grid;
    grid-template-columns: 250px minmax(0, 1fr);
    gap: 42px;
    align-items: start;
    max-width: 1060px;
    margin: 0 auto;
    padding-top: 1.5rem;
  }

  .home-sidebar {
    position: sticky;
    top: 88px;
    font-size: 0.95rem;
    line-height: 1.45;
  }

  .home-sidebar img {
    width: 100%;
    aspect-ratio: 1 / 1.18;
    object-fit: cover;
    border-radius: 4px;
    margin-bottom: 1rem;
  }

  .home-sidebar h1 {
    font-size: 1.65rem;
    margin: 0 0 0.25rem;
  }

  .home-sidebar .cn-name {
    color: var(--global-text-color-light);
    margin-bottom: 0.7rem;
  }

  .home-sidebar .role {
    font-weight: 600;
    margin-bottom: 0.75rem;
  }

  .home-sidebar .meta,
  .home-sidebar .links {
    margin: 0.8rem 0;
  }

  .home-sidebar a {
    display: inline-block;
    margin-right: 0.75rem;
  }

  .home-main h2 {
    font-size: 1.45rem;
    border-bottom: 1px solid var(--global-divider-color);
    padding-bottom: 0.35rem;
    margin: 2.1rem 0 0.85rem;
  }

  .home-main h2:first-child {
    margin-top: 0;
  }

  .home-main p,
  .home-main li {
    line-height: 1.62;
  }

  .home-main ul {
    padding-left: 1.2rem;
  }

  .home-item {
    margin: 1rem 0 1.25rem;
  }

  .home-item-title {
    font-weight: 700;
  }

  .home-item-meta {
    color: var(--global-text-color-light);
    font-size: 0.95rem;
    margin: 0.1rem 0 0.35rem;
  }

  .home-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.45rem;
    margin-top: 0.8rem;
  }

  .home-tags span {
    border: 1px solid var(--global-divider-color);
    border-radius: 4px;
    padding: 0.18rem 0.45rem;
    font-size: 0.86rem;
  }

  @media (max-width: 760px) {
    .home-academic {
      display: block;
      padding-top: 0.5rem;
    }

    .home-sidebar {
      position: static;
      margin-bottom: 2rem;
    }

    .home-sidebar img {
      max-width: 230px;
    }
  }
</style>

<div class="home-academic">
  <aside class="home-sidebar">
    <img src="{{ '/assets/img/profile.png' | relative_url }}" alt="Zijian Zhang">
    <h1>Zijian Zhang</h1>
    <div class="cn-name">张梓健</div>
    <div class="role">M.S. Student, Robotics and Embodied AI</div>
    <div class="meta">
      University of Chinese Academy of Sciences<br>
      School of Artificial Intelligence<br>
      Beijing, China
    </div>
    <div class="links">
      <a href="mailto:zijianzhang821@gmail.com">Email</a>
      <a href="{{ '/cv/' | relative_url }}">CV</a>
      <a href="{{ '/publications/' | relative_url }}">Publications</a>
    </div>
  </aside>

  <main class="home-main">
    <h2>About Me</h2>
    <p>
      I am an incoming M.S. student in Computer Application Technology at the University of Chinese Academy of Sciences, affiliated with the School of Artificial Intelligence. Before that, I received my B.Eng. training in Robotics Engineering at the University of Science and Technology Beijing.
    </p>
    <p>
      My research interests lie in <strong>robot learning</strong>, <strong>vision-language-action models</strong>, <strong>world-action models</strong>, <strong>3D world modeling</strong>, and <strong>3D perception</strong>. I am interested in how robots can build compact geometric and semantic representations of the world, predict short-horizon physical changes, and use these representations for efficient closed-loop manipulation.
    </p>
    <div class="home-tags">
      <span>Robot Learning</span>
      <span>VLA</span>
      <span>World Models</span>
      <span>3D Gaussian</span>
      <span>3D Perception</span>
      <span>Autonomous Driving</span>
    </div>

    <h2>News</h2>
    <ul>
      <li><strong>May 2026:</strong> <a href="https://arxiv.org/abs/2605.20752">GaussianDream</a> is available on arXiv.</li>
      <li><strong>2026:</strong> I will join the University of Chinese Academy of Sciences as an M.S. student.</li>
      <li><strong>2025:</strong> Started research on 3D Gaussian world models and world-action models for robotic manipulation.</li>
    </ul>

    <h2>Education</h2>
    <div class="home-item">
      <div class="home-item-title">University of Chinese Academy of Sciences</div>
      <div class="home-item-meta">M.S. in Computer Application Technology, School of Artificial Intelligence · 2026.09 - Present</div>
      <p>Research interests include robot learning, vision-language-action models, world-action models, and 3D vision.</p>
    </div>
    <div class="home-item">
      <div class="home-item-title">University of Science and Technology Beijing</div>
      <div class="home-item-meta">B.Eng. in Robotics Engineering · 2022.09 - 2026.07</div>
      <p>GPA ranking: 4th. National Scholarship; Xuchang Yuandong Science and Innovation Scholarship, First Prize; Merit Student and Outstanding Student Cadre.</p>
    </div>

    <h2>Research Experience</h2>
    <div class="home-item">
      <div class="home-item-title">GaussianDream: A Feed-Forward 3D Gaussian World Model for Robotic Manipulation</div>
      <div class="home-item-meta">Co-first author · 2025.11 - 2026.05 · <a href="https://arxiv.org/abs/2605.20752">arXiv</a></div>
      <p>Built a 3D Gaussian world model plug-in for VLA policies to learn current scene structure and short-horizon future dynamics from robot trajectories.</p>
    </div>
    <div class="home-item">
      <div class="home-item-title">GaussianWAM: Distilling Geometry and Semantics from 3D Gaussian Fields into World-Action Models</div>
      <div class="home-item-meta">Co-first first author · 2026.04 - 2026.07</div>
      <p>Proposed Gaussian Field Enhancement to inject 3D geometry and visual semantics into action-relevant WAM representations with zero extra inference overhead.</p>
    </div>
    <div class="home-item">
      <div class="home-item-title">WorldDream: Action-Compatible 3D World Tokens for Efficient Vision-Language-Action Control</div>
      <div class="home-item-meta">Co-first second author · 2026.04 - 2026.07</div>
      <p>Designed world state tokens, world prediction tokens, and a coupled Gaussian world head for compact 3D world modeling inside VLA policies.</p>
    </div>
    <div class="home-item">
      <div class="home-item-title">Fuse and Refine: Towards Robust and Accurate HD Map Annotation</div>
      <div class="home-item-meta">First author and independent lead · 2025.10 - 2026.03</div>
      <p>Developed a multimodal HD map auto-labeling pipeline for static road elements in large-scale autonomous-driving scenes.</p>
    </div>

    <h2>Selected Publications</h2>
    <ul>
      <li>
        <strong>GaussianDream: A Feed-Forward 3D Gaussian World Model for Robotic Manipulation.</strong><br>
        Zijian Zhang, Yuqing Jiang, Qian Cheng, Xiaofan Li, Si Liu, Ding Zhao, Ping Luo, Weitao Zhou, Haibao Yu. arXiv:2605.20752, 2026. <a href="https://arxiv.org/abs/2605.20752">Paper</a>
      </li>
      <li>
        <strong>Software-Defined Parallel LiDARs for Active 3D Perception.</strong><br>
        Zijian Zhang. IEEE/ASME MESA, 2025.
      </li>
      <li>
        <strong>Fuse and Refine: Towards Robust and Accurate HD Map Annotation.</strong><br>
        Zijian Zhang et al. Submitted to IROS, 2026.
      </li>
    </ul>

    <h2>Selected Projects</h2>
    <ul>
      <li><strong>Software-Defined Parallel LiDARs:</strong> active LiDAR scanning and V2V collaborative perception for autonomous driving.</li>
      <li><strong>BEVFusion Deployment:</strong> multimodal 3D object detection deployed on NVIDIA Orin with TensorRT acceleration.</li>
      <li><strong>ROBOCON Robot Control:</strong> dual-core controller integration, CAN/RS485 communication, cascaded PID, and chassis control.</li>
    </ul>

    <h2>Awards</h2>
    <ul>
      <li>Champion, ROBOCON Equestrian Speed Race, 2025.</li>
      <li>First Prize, Jingdiao Cup Graduation Design Competition, 2026.</li>
      <li>Champion, ROBOCON Programming Challenge, 2024.</li>
      <li>Third Place, ROBOCON Granary Challenge, 2024.</li>
      <li>National Scholarship; Xuchang Yuandong Science and Innovation Scholarship, First Prize.</li>
    </ul>

    <h2>Skills</h2>
    <p>
      <strong>Programming:</strong> C, C++, Python, MATLAB.<br>
      <strong>Robotics and Perception:</strong> robot learning, VLA, WAM, 3D Gaussian, BEV perception, LiDAR, TensorRT, NVIDIA Orin.<br>
      <strong>Languages:</strong> Chinese, English.
    </p>
  </main>
</div>
