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

  .home-nav {
    margin: 1rem 0 1.15rem;
    padding: 0.85rem 0;
    border-top: 1px solid var(--global-divider-color);
    border-bottom: 1px solid var(--global-divider-color);
  }

  .home-nav a {
    display: block;
    margin: 0.28rem 0;
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
    <div class="home-nav">
      <a href="#experience">Experience</a>
      <a href="#paper">Paper</a>
      <a href="#project">Project</a>
      <a href="#awards">Awards</a>
      <a href="#skills">Skills</a>
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

    <h2 id="experience">Experience</h2>
    <div class="home-item">
      <div class="home-item-title"><a href="https://ia.cas.cn/" target="_blank" rel="noopener">Institute of Automation, Chinese Academy of Sciences</a></div>
      <div class="home-item-meta">Research Intern · 2024.08 - 2025.09</div>
      <p>Worked on multimodal perception and robot learning in a research environment focused on intelligent science and technology.</p>
    </div>
    <div class="home-item">
      <div class="home-item-title"><a href="https://www.trunk.tech/" target="_blank" rel="noopener">Trunk Tech</a></div>
      <div class="home-item-meta">Research Engineer · 2025.09 - 2026.02</div>
      <p>Worked on autonomous-driving perception and system deployment for intelligent trucking and logistics scenarios.</p>
    </div>
    <div class="home-item">
      <div class="home-item-title"><a href="https://github.com/TuojingAI" target="_blank" rel="noopener">Tuojing AI</a></div>
      <div class="home-item-meta">Research / Engineering Intern · 2026.02 - Present</div>
      <p>Currently working on embodied AI and world-model research and engineering tasks.</p>
    </div>
    <div class="home-item">
      <div class="home-item-title"><a href="https://cy.ustb.edu.cn/cyjd/dshd_ca6c6ee6a2a54e389e52a8928a7e7d56/jcdc_ca6c6ee6a2a54e389e52a8928a7e7d56/5a0c37fcfc1a4825bc57540432b46948.htm" target="_blank" rel="noopener">MEI Competitive Robotics Lab</a></div>
      <div class="home-item-meta">Robotics Researcher and Control Engineer · 2023.08 - 2024.08</div>
      <p>Worked on ROBOCON robot control systems, including electrical control, communication, cascaded PID control, chassis control, and competition robot development.</p>
    </div>

    <h2 id="paper">Paper</h2>
    <ul>
      <li>
        <strong><a href="https://arxiv.org/abs/2605.20752">GaussianDream: A Feed-Forward 3D Gaussian World Model for Robotic Manipulation.</a></strong><br>
        Zijian Zhang, Yuqing Jiang, Qian Cheng, Xiaofan Li, Si Liu, Ding Zhao, Ping Luo, Weitao Zhou, Haibao Yu. arXiv:2605.20752, 2026.
      </li>
      <li>
        <strong><a href="https://ieeexplore.ieee.org/document/11278878" target="_blank" rel="noopener">Software-Defined Parallel LiDARs for Active 3D Perception.</a></strong><br>
        Zijian Zhang. IEEE/ASME MESA, 2025.
      </li>
      <li>
        <strong><a href="{{ '/projects/hd-map-autolabel/' | relative_url }}">Fuse and Refine: Towards Robust and Accurate HD Map Annotation.</a></strong><br>
        Zijian Zhang et al. Submitted to IROS, 2026.
      </li>
      <li>
        <strong><a href="https://arxiv.org/abs/2608.24714">GaussianDream++.</a></strong><br>
        arXiv:2608.24714, 2026.
      </li>
      <li>
        <strong><a href="https://arxiv.org/abs/2608.25659">GaussianWAM: Distilling Geometry and Semantics from 3D Gaussian Fields into World-Action Models.</a></strong><br>
        arXiv:2608.25659, 2026.
      </li>
    </ul>

    <h2 id="project">Project</h2>
    <ul>
      <li><strong><a href="{{ '/projects/bevfusion/' | relative_url }}">BEVFusion Deployment for Unmanned Mining Vehicles:</a></strong> multimodal 3D object detection, pruning, TensorRT acceleration, and NVIDIA Orin deployment.</li>
      <li><strong><a href="{{ '/projects/robocon/' | relative_url }}">ROBOCON Robot Control:</a></strong> electrical control, CAN/RS485 communication, cascaded PID, chassis control, and competition robot development.</li>
    </ul>

    <h2 id="awards">Awards</h2>
    <ul>
      <li>Champion, ROBOCON Equestrian Speed Race, 2025.</li>
      <li>First Prize, Jingdiao Cup Graduation Design Competition, 2026.</li>
      <li>Champion, ROBOCON Programming Challenge, 2024.</li>
      <li>Third Place, ROBOCON Granary Challenge, 2024.</li>
      <li>National Scholarship; Xuchang Yuandong Science and Innovation Scholarship, First Prize.</li>
    </ul>

    <h2 id="skills">Skills</h2>
    <p>
      <strong>Programming:</strong> C, C++, Python, MATLAB.<br>
      <strong>Robotics and Perception:</strong> robot learning, VLA, WAM, 3D Gaussian, BEV perception, LiDAR, TensorRT, NVIDIA Orin.<br>
      <strong>Languages:</strong> Chinese, English.
    </p>
  </main>
</div>
