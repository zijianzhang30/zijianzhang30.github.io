---
layout: default
title: about
permalink: /
---

<style>
  .profile-home {
    display: grid;
    grid-template-columns: 255px minmax(0, 1fr);
    gap: 46px;
    max-width: 1060px;
    margin: 0 auto;
    padding: 1.4rem 0 4rem;
  }

  .profile-sidebar {
    position: sticky;
    top: 86px;
    align-self: start;
    color: var(--global-text-color);
    font-size: 0.94rem;
    line-height: 1.45;
  }

  .profile-sidebar img {
    width: 100%;
    aspect-ratio: 1 / 1.18;
    object-fit: cover;
    border-radius: 5px;
    margin-bottom: 1rem;
  }

  .profile-sidebar h1 {
    margin: 0 0 0.25rem;
    font-size: 1.72rem;
    line-height: 1.1;
  }

  .profile-role {
    margin: 0.45rem 0 0.9rem;
    font-weight: 600;
  }

  .profile-meta {
    margin: 0.75rem 0;
    color: var(--global-text-color-light);
  }

  .profile-links a {
    display: block;
    width: fit-content;
    margin: 0.26rem 0;
  }

  .profile-content h2 {
    margin: 0 0 0.85rem;
    padding-bottom: 0.35rem;
    border-bottom: 1px solid var(--global-divider-color);
    font-size: 1.45rem;
  }

  .profile-section {
    margin-bottom: 2.15rem;
  }

  .profile-content p,
  .profile-content li {
    line-height: 1.67;
  }

  .news-list {
    margin: 0;
    padding-left: 0;
    list-style: none;
  }

  .news-list li {
    margin-bottom: 0.45rem;
  }

  .news-date {
    color: #b4512c;
    font-weight: 700;
  }

  html[data-theme="dark"] .news-date {
    color: #f0a06f;
  }

  .paper-list {
    display: grid;
    gap: 1.05rem;
  }

  .paper-item {
    display: grid;
    grid-template-columns: 230px minmax(0, 1fr);
    gap: 1.15rem;
    align-items: stretch;
    padding-bottom: 1.15rem;
    border-bottom: 1px solid var(--global-divider-color);
  }

  .paper-thumb {
    width: 100%;
    height: 142px;
    object-fit: cover;
    border-radius: 6px;
    border: 1px solid var(--global-divider-color);
    background: var(--global-bg-color);
  }

  .paper-title {
    margin-bottom: 0.24rem;
    font-weight: 700;
    line-height: 1.38;
  }

  .paper-authors,
  .paper-venue,
  .paper-desc {
    margin-bottom: 0.22rem;
    color: var(--global-text-color-light);
    font-size: 0.95rem;
    line-height: 1.5;
  }

  .paper-links a {
    margin-right: 0.75rem;
    font-size: 0.92rem;
    font-weight: 600;
  }

  @media (max-width: 760px) {
    .profile-home {
      display: block;
      padding-top: 0.5rem;
    }

    .profile-sidebar {
      position: static;
      margin-bottom: 2rem;
    }

    .profile-sidebar img {
      max-width: 230px;
    }

    .paper-item {
      grid-template-columns: 1fr;
    }

    .paper-thumb {
      max-width: 360px;
      height: auto;
    }
  }
</style>

<div class="profile-home">
  <aside class="profile-sidebar">
    <img src="{{ '/assets/img/profile.png' | relative_url }}" alt="Zijian Zhang">
    <h1>Zijian Zhang</h1>
    <div>张梓健</div>
    <div class="profile-role">Incoming Master's student in Computer Application Technology at UCAS.</div>
    <div class="profile-meta">
      Beijing, China<br>
      University of Chinese Academy of Sciences<br>
      School of Artificial Intelligence
    </div>
    <div class="profile-links">
      <a href="mailto:zijianzhang821@gmail.com">Email</a>
      <a href="https://github.com/zijianzhang30" target="_blank" rel="noopener">GitHub</a>
      <a href="{{ '/cv/' | relative_url }}">CV</a>
      <a href="{{ '/publications/' | relative_url }}">Publications</a>
    </div>
  </aside>

  <main class="profile-content">
    <section class="profile-section">
      <h2>About Me</h2>
      <p>
        👋 Welcome to my personal homepage! I am Zijian Zhang, currently an incoming Master's student in Computer Application Technology at the School of Artificial Intelligence, University of Chinese Academy of Sciences. Prior to this, I received my Bachelor's degree in Robotics Engineering from University of Science and Technology Beijing.
      </p>
      <p>
        🔬 My research interests primarily focus on <strong>Robot Learning</strong>, <strong>World Models</strong>, <strong>Vision-Language-Action Models</strong>, and <strong>3D Perception</strong>. I am interested in enabling robots to build compact geometric and semantic representations of the physical world, predict short-horizon dynamics, and perform robust closed-loop manipulation.
      </p>
      <p>
        🤖 I have worked on 3D Gaussian world models for robotic manipulation, world-action model enhancement, HD map auto-labeling, active LiDAR perception, BEVFusion deployment, and ROBOCON robot control systems. Feel free to contact me!
      </p>
    </section>

    <section class="profile-section">
      <h2>🔥 News</h2>
      <ul class="news-list">
        <li><span class="news-date">[2026.08]</span> We release GaussianDream++, with paper available.</li>
        <li><span class="news-date">[2026.08]</span> We release GaussianWAM, with paper available.</li>
        <li><span class="news-date">[2026.05]</span> GaussianDream is available on arXiv.</li>
        <li><span class="news-date">[2026.05]</span> Jingdiao Cup Graduation Design Competition, First Prize.</li>
        <li><span class="news-date">[2026.03]</span> Fuse and Refine is submitted to IROS.</li>
        <li><span class="news-date">[2025.08]</span> Software-Defined Parallel LiDARs for Active 3D Perception is completed as a first-author work.</li>
        <li><span class="news-date">[2025.07]</span> Champion, ROBOCON Equestrian Speed Race.</li>
        <li><span class="news-date">[2024.07]</span> Champion, ROBOCON Programming Challenge; Third Place, ROBOCON Granary Challenge.</li>
      </ul>
    </section>

    <section class="profile-section">
      <h2>📝 Publications</h2>
      <div class="paper-list">
        <article class="paper-item">
          <img class="paper-thumb" src="{{ '/assets/img/papers/worlddream.png' | relative_url }}" alt="GaussianDream++ thumbnail">
          <div>
            <div class="paper-title"><a href="https://arxiv.org/abs/2608.25659" target="_blank" rel="noopener">GaussianDream++: Efficient 3D Gaussian World Modeling for Robotic Manipulation.</a></div>
            <div class="paper-authors">Yuqing Jiang, <strong>Zijian Zhang</strong>, Weitao Zhou, Jiawei Wang, Junjie He, Lei Yang, Haifang Qing, Si Liu, Ding Zhao, Ping Luo, Haibao Yu.</div>
            <div class="paper-venue">arXiv, 2026.</div>
            <div class="paper-desc">Action-compatible 3D world tokens for efficient VLA control.</div>
            <div class="paper-links"><a href="https://arxiv.org/abs/2608.25659" target="_blank" rel="noopener">Paper</a></div>
          </div>
        </article>

        <article class="paper-item">
          <img class="paper-thumb" src="{{ '/assets/img/papers/gaussianwam.png' | relative_url }}" alt="GaussianWAM thumbnail">
          <div>
            <div class="paper-title"><a href="https://arxiv.org/abs/2608.24714" target="_blank" rel="noopener">GaussianWAM: Distilling Geometry and Semantics from 3D Gaussian Fields into World-Action Models.</a></div>
            <div class="paper-authors"><strong>Zijian Zhang</strong>, Yuqing Jiang, Weitao Zhou, Minglei Li, Jinhao Zhang, Yao Mu, Xiaofan Li, Hao Zhao, Haibao Yu.</div>
            <div class="paper-venue">arXiv, 2026.</div>
            <div class="paper-desc">Injecting 3D geometry and visual semantics into action-relevant WAM representations.</div>
            <div class="paper-links"><a href="https://arxiv.org/abs/2608.24714" target="_blank" rel="noopener">Paper</a></div>
          </div>
        </article>

        <article class="paper-item">
          <img class="paper-thumb" src="{{ '/assets/img/papers/GaussianDream.png' | relative_url }}" alt="GaussianDream thumbnail">
          <div>
            <div class="paper-title"><a href="https://arxiv.org/abs/2605.20752" target="_blank" rel="noopener">GaussianDream: A Feed-Forward 3D Gaussian World Model for Robotic Manipulation.</a></div>
            <div class="paper-authors"><strong>Zijian Zhang</strong>, Yuqing Jiang, Qian Cheng, Xiaofan Li, Si Liu, Ding Zhao, Ping Luo, Weitao Zhou, Haibao Yu.</div>
            <div class="paper-venue">arXiv, 2026.</div>
            <div class="paper-desc">A 3D Gaussian world model plug-in with current reconstruction and future prediction.</div>
            <div class="paper-links"><a href="https://arxiv.org/abs/2605.20752" target="_blank" rel="noopener">Paper</a></div>
          </div>
        </article>

        <article class="paper-item">
          <img class="paper-thumb" src="{{ '/assets/img/papers/lidar.png' | relative_url }}" alt="Active LiDAR thumbnail">
          <div>
            <div class="paper-title"><a href="https://ieeexplore.ieee.org/document/11278878" target="_blank" rel="noopener">Software-Defined Parallel LiDARs for Active 3D Perception.</a></div>
            <div class="paper-authors"><strong>Zijian Zhang</strong>.</div>
            <div class="paper-venue">IEEE/ASME MESA, 2025.</div>
            <div class="paper-desc">Collaborative perception and active LiDAR scanning for autonomous-driving scenes.</div>
            <div class="paper-links"><a href="https://ieeexplore.ieee.org/document/11278878" target="_blank" rel="noopener">Paper</a></div>
          </div>
        </article>

        <article class="paper-item">
          <img class="paper-thumb" src="{{ '/assets/img/papers/hdmap.png' | relative_url }}" alt="HD map thumbnail">
          <div>
            <div class="paper-title"><a href="{{ '/projects/hd-map-autolabel/' | relative_url }}">Fuse and Refine: Towards Robust and Accurate HD Map Annotation.</a></div>
            <div class="paper-authors"><strong>Zijian Zhang</strong> et al.</div>
            <div class="paper-venue">Submitted to IROS, 2026.</div>
            <div class="paper-desc">Robust and accurate HD map auto-labeling for large-scale autonomous-driving scenes.</div>
            <div class="paper-links"><a href="{{ '/projects/hd-map-autolabel/' | relative_url }}">Project</a></div>
          </div>
        </article>

        <article class="paper-item">
          <img class="paper-thumb" src="{{ '/assets/img/papers/bevfusion.png' | relative_url }}" alt="BEVFusion thumbnail">
          <div>
            <div class="paper-title"><a href="{{ '/projects/bevfusion/' | relative_url }}">BEVFusion Deployment for Unmanned Mining Vehicles.</a></div>
            <div class="paper-authors"><strong>Zijian Zhang</strong>.</div>
            <div class="paper-venue">Engineering Project, 2025.</div>
            <div class="paper-desc">Multimodal 3D detection, pruning, TensorRT acceleration, and NVIDIA Orin deployment.</div>
            <div class="paper-links"><a href="{{ '/projects/bevfusion/' | relative_url }}">Project</a></div>
          </div>
        </article>
      </div>
    </section>
  </main>
</div>
