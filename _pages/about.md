---
layout: default
title: about
permalink: /
---

<style>
  :root {
    --zz-ink: #17202a;
    --zz-muted: #687384;
    --zz-line: rgba(23, 32, 42, 0.12);
    --zz-card: rgba(255, 255, 255, 0.78);
    --zz-accent: #0f6f78;
    --zz-accent-2: #c06f3f;
    --zz-soft: #eef7f6;
  }

  html[data-theme="dark"] {
    --zz-ink: #edf2f7;
    --zz-muted: #aab6c5;
    --zz-line: rgba(237, 242, 247, 0.14);
    --zz-card: rgba(18, 24, 32, 0.72);
    --zz-soft: rgba(15, 111, 120, 0.16);
  }

  .zz-home {
    max-width: 1180px;
    margin: 0 auto;
    padding: 2.2rem 0 4rem;
  }

  .zz-hero {
    position: relative;
    display: grid;
    grid-template-columns: minmax(0, 1fr) 310px;
    gap: 2.4rem;
    align-items: stretch;
    padding: 2.2rem;
    overflow: hidden;
    border: 1px solid var(--zz-line);
    border-radius: 28px;
    background:
      radial-gradient(circle at 8% 16%, rgba(15, 111, 120, 0.18), transparent 31%),
      radial-gradient(circle at 92% 5%, rgba(192, 111, 63, 0.18), transparent 28%),
      linear-gradient(135deg, rgba(238, 247, 246, 0.86), rgba(255, 255, 255, 0.46));
    box-shadow: 0 28px 70px rgba(23, 32, 42, 0.08);
  }

  html[data-theme="dark"] .zz-hero {
    background:
      radial-gradient(circle at 8% 16%, rgba(15, 111, 120, 0.26), transparent 31%),
      radial-gradient(circle at 92% 5%, rgba(192, 111, 63, 0.22), transparent 28%),
      linear-gradient(135deg, rgba(16, 23, 31, 0.96), rgba(12, 17, 24, 0.7));
  }

  .zz-kicker {
    width: fit-content;
    margin-bottom: 1rem;
    padding: 0.32rem 0.7rem;
    border: 1px solid var(--zz-line);
    border-radius: 999px;
    color: var(--zz-accent);
    font-size: 0.82rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .zz-hero h1 {
    margin: 0;
    color: var(--zz-ink);
    font-size: clamp(2.55rem, 6vw, 5rem);
    line-height: 0.96;
    letter-spacing: -0.07em;
  }

  .zz-cn-name {
    margin-top: 0.7rem;
    color: var(--zz-muted);
    font-size: 1.25rem;
    letter-spacing: 0.18em;
  }

  .zz-subtitle {
    max-width: 760px;
    margin: 1.25rem 0 0;
    color: var(--zz-muted);
    font-size: 1.08rem;
    line-height: 1.72;
  }

  .zz-subtitle strong {
    color: var(--zz-ink);
  }

  .zz-actions,
  .zz-tags,
  .zz-social {
    display: flex;
    flex-wrap: wrap;
    gap: 0.65rem;
  }

  .zz-actions {
    margin-top: 1.45rem;
  }

  .zz-button {
    display: inline-flex;
    align-items: center;
    gap: 0.42rem;
    padding: 0.58rem 0.9rem;
    border-radius: 999px;
    border: 1px solid var(--zz-line);
    color: var(--zz-ink);
    font-weight: 700;
    text-decoration: none !important;
    transition: transform 160ms ease, border-color 160ms ease, background 160ms ease;
  }

  .zz-button:hover {
    transform: translateY(-2px);
    border-color: var(--zz-accent);
    background: var(--zz-soft);
  }

  .zz-button.primary {
    border-color: transparent;
    background: var(--zz-accent);
    color: white;
  }

  .zz-side-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100%;
    padding: 1rem;
    border: 1px solid var(--zz-line);
    border-radius: 22px;
    background: var(--zz-card);
    backdrop-filter: blur(16px);
  }

  .zz-portrait {
    width: 100%;
    aspect-ratio: 0.82 / 1;
    object-fit: cover;
    border-radius: 18px;
    filter: saturate(0.96) contrast(1.03);
  }

  .zz-affiliation {
    margin-top: 1rem;
    color: var(--zz-muted);
    line-height: 1.5;
  }

  .zz-affiliation strong {
    color: var(--zz-ink);
  }

  .zz-layout {
    display: grid;
    grid-template-columns: 230px minmax(0, 1fr);
    gap: 2.2rem;
    margin-top: 2.2rem;
  }

  .zz-nav {
    position: sticky;
    top: 86px;
    align-self: start;
    padding: 1.1rem;
    border: 1px solid var(--zz-line);
    border-radius: 20px;
    background: var(--zz-card);
  }

  .zz-nav a {
    display: block;
    padding: 0.42rem 0;
    color: var(--zz-muted);
    font-weight: 700;
    text-decoration: none !important;
  }

  .zz-nav a:hover {
    color: var(--zz-accent);
  }

  .zz-section {
    margin-bottom: 2.35rem;
  }

  .zz-section h2 {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin: 0 0 1.1rem;
    color: var(--zz-ink);
    font-size: 1.45rem;
    letter-spacing: -0.03em;
  }

  .zz-section h2::after {
    content: "";
    flex: 1;
    height: 1px;
    background: var(--zz-line);
  }

  .zz-card,
  .zz-paper,
  .zz-mini-card {
    border: 1px solid var(--zz-line);
    border-radius: 20px;
    background: var(--zz-card);
  }

  .zz-card {
    padding: 1.15rem 1.2rem;
    margin-bottom: 0.9rem;
  }

  .zz-card-head {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 0.35rem;
  }

  .zz-title {
    color: var(--zz-ink);
    font-weight: 800;
    line-height: 1.32;
  }

  .zz-date {
    flex: 0 0 auto;
    color: var(--zz-accent);
    font-size: 0.9rem;
    font-weight: 800;
  }

  .zz-meta {
    color: var(--zz-muted);
    font-size: 0.94rem;
    line-height: 1.45;
  }

  .zz-card ul,
  .zz-paper ul {
    margin: 0.65rem 0 0;
    padding-left: 1.1rem;
  }

  .zz-card li,
  .zz-paper li {
    margin-bottom: 0.32rem;
    line-height: 1.58;
  }

  .zz-tags {
    margin-top: 1rem;
  }

  .zz-tag {
    padding: 0.28rem 0.58rem;
    border: 1px solid var(--zz-line);
    border-radius: 999px;
    background: var(--zz-soft);
    color: var(--zz-accent);
    font-size: 0.84rem;
    font-weight: 800;
  }

  .zz-news {
    padding-left: 0;
    list-style: none;
  }

  .zz-news li {
    display: grid;
    grid-template-columns: 92px 1fr;
    gap: 0.9rem;
    padding: 0.68rem 0;
    border-bottom: 1px solid var(--zz-line);
  }

  .zz-news time {
    color: var(--zz-accent-2);
    font-weight: 800;
  }

  .zz-paper {
    display: grid;
    grid-template-columns: 42px 1fr;
    gap: 0.9rem;
    padding: 1rem;
    margin-bottom: 0.82rem;
  }

  .zz-index {
    display: grid;
    place-items: center;
    width: 42px;
    height: 42px;
    border-radius: 14px;
    background: var(--zz-soft);
    color: var(--zz-accent);
    font-weight: 900;
  }

  .zz-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.9rem;
  }

  .zz-mini-card {
    padding: 1rem;
  }

  .zz-mini-card p {
    margin: 0.4rem 0 0;
    color: var(--zz-muted);
    line-height: 1.58;
  }

  @media (max-width: 900px) {
    .zz-hero,
    .zz-layout,
    .zz-grid {
      grid-template-columns: 1fr;
    }

    .zz-nav {
      position: static;
    }

    .zz-side-card {
      max-width: 320px;
    }
  }

  @media (max-width: 560px) {
    .zz-home {
      padding-top: 0.5rem;
    }

    .zz-hero {
      padding: 1.25rem;
      border-radius: 20px;
    }

    .zz-card-head,
    .zz-news li {
      display: block;
    }

    .zz-date {
      margin-top: 0.25rem;
    }
  }
</style>

<div class="zz-home">
  <section class="zz-hero">
    <div>
      <div class="zz-kicker">Robot Learning · 3D World Models · Embodied AI</div>
      <h1>Zijian<br>Zhang</h1>
      <div class="zz-cn-name">张梓健</div>
      <p class="zz-subtitle">
        I am an incoming M.S. student at the <strong>University of Chinese Academy of Sciences</strong>, working on robot learning, vision-language-action models, world-action models, 3D Gaussian world modeling, and active 3D perception.
      </p>
      <div class="zz-actions">
        <a class="zz-button primary" href="mailto:zijianzhang821@gmail.com"><i class="fa-solid fa-envelope"></i>Email</a>
        <a class="zz-button" href="{{ '/cv/' | relative_url }}"><i class="fa-solid fa-file-lines"></i>CV</a>
        <a class="zz-button" href="{{ '/publications/' | relative_url }}"><i class="fa-solid fa-book-open"></i>Publications</a>
        <a class="zz-button" href="{{ '/projects/' | relative_url }}"><i class="fa-solid fa-cubes"></i>Projects</a>
      </div>
      <div class="zz-tags">
        <span class="zz-tag">VLA</span>
        <span class="zz-tag">World-Action Models</span>
        <span class="zz-tag">3D Gaussian</span>
        <span class="zz-tag">LiDAR</span>
        <span class="zz-tag">TensorRT / Orin</span>
      </div>
    </div>
    <aside class="zz-side-card">
      <img class="zz-portrait" src="{{ '/assets/img/profile.png' | relative_url }}" alt="Zijian Zhang">
      <div class="zz-affiliation">
        <strong>School of Artificial Intelligence</strong><br>
        University of Chinese Academy of Sciences<br>
        Beijing, China
      </div>
    </aside>
  </section>

  <div class="zz-layout">
    <nav class="zz-nav" aria-label="homepage sections">
      <a href="#about">About</a>
      <a href="#news">News</a>
      <a href="#education">Education</a>
      <a href="#experience">Experience</a>
      <a href="#publications">Publications</a>
      <a href="#projects">Projects</a>
      <a href="#awards">Awards</a>
      <a href="#skills">Skills</a>
    </nav>

    <main>
      <section id="about" class="zz-section">
        <h2>About Me</h2>
        <div class="zz-card">
          <p>
            My research focuses on how robots can build compact geometric and semantic representations of the world, predict short-horizon physical changes, and use these representations for efficient closed-loop manipulation. I also have engineering experience in autonomous-driving perception, edge deployment, active LiDAR scanning, and competition robot control systems.
          </p>
        </div>
      </section>

      <section id="news" class="zz-section">
        <h2>News</h2>
        <ul class="zz-news">
          <li><time>Aug 2026</time><span>GaussianDream++ and GaussianWAM are available on arXiv.</span></li>
          <li><time>May 2026</time><span>GaussianDream is available on arXiv.</span></li>
          <li><time>2026</time><span>I will join UCAS as an M.S. student in Computer Application Technology.</span></li>
          <li><time>2025</time><span>Started research on 3D Gaussian world models and world-action models for robotic manipulation.</span></li>
        </ul>
      </section>

      <section id="education" class="zz-section">
        <h2>Education</h2>
        <div class="zz-card">
          <div class="zz-card-head">
            <div><div class="zz-title">University of Chinese Academy of Sciences</div><div class="zz-meta">M.S. in Computer Application Technology · School of Artificial Intelligence</div></div>
            <div class="zz-date">2026.09 -- Present</div>
          </div>
          <ul><li>Research interests: robot learning, VLA, world-action models, and 3D vision.</li></ul>
        </div>
        <div class="zz-card">
          <div class="zz-card-head">
            <div><div class="zz-title">University of Science and Technology Beijing</div><div class="zz-meta">B.Eng. in Robotics Engineering</div></div>
            <div class="zz-date">2022.09 -- 2026.07</div>
          </div>
          <ul>
            <li>Comprehensive score: 90.46, Rank 4.</li>
            <li>National Scholarship; Xuchang Yuandong Science and Innovation Scholarship, First Prize.</li>
            <li>Merit Student and Outstanding Student Cadre.</li>
          </ul>
        </div>
      </section>

      <section id="experience" class="zz-section">
        <h2>Experience</h2>
        <div class="zz-card"><div class="zz-card-head"><div><div class="zz-title">Institute of Automation, Chinese Academy of Sciences</div><div class="zz-meta">Research Intern · Multimodal perception and robot learning</div></div><div class="zz-date">2024.08 -- 2025.09</div></div></div>
        <div class="zz-card"><div class="zz-card-head"><div><div class="zz-title">Trunk Tech</div><div class="zz-meta">Research Engineer · Autonomous-driving perception and deployment</div></div><div class="zz-date">2025.09 -- 2026.02</div></div></div>
        <div class="zz-card"><div class="zz-card-head"><div><div class="zz-title">Tuojing AI</div><div class="zz-meta">Research / Engineering Intern · Embodied AI and world-model research</div></div><div class="zz-date">2026.02 -- Present</div></div></div>
        <div class="zz-card"><div class="zz-card-head"><div><div class="zz-title">MEI Competitive Robotics Lab</div><div class="zz-meta">Robotics researcher and control engineer for ROBOCON</div></div><div class="zz-date">2023.08 -- 2024.08</div></div></div>
      </section>

      <section id="publications" class="zz-section">
        <h2>Selected Publications</h2>
        <article class="zz-paper"><div class="zz-index">01</div><div><div class="zz-title"><a href="https://arxiv.org/abs/2608.25659">GaussianDream++: Efficient 3D Gaussian World Modeling for Robotic Manipulation.</a></div><div class="zz-meta">Yuqing Jiang, Zijian Zhang, Weitao Zhou, Jiawei Wang, Junjie He, Lei Yang, Haifang Qing, Si Liu, Ding Zhao, Ping Luo, Haibao Yu. arXiv, 2026.</div></div></article>
        <article class="zz-paper"><div class="zz-index">02</div><div><div class="zz-title"><a href="https://arxiv.org/abs/2608.24714">GaussianWAM: Distilling Geometry and Semantics from 3D Gaussian Fields into World-Action Models.</a></div><div class="zz-meta">Zijian Zhang, Yuqing Jiang, Weitao Zhou, Minglei Li, Jinhao Zhang, Yao Mu, Xiaofan Li, Hao Zhao, Haibao Yu. arXiv, 2026.</div></div></article>
        <article class="zz-paper"><div class="zz-index">03</div><div><div class="zz-title"><a href="https://arxiv.org/abs/2605.20752">GaussianDream: A Feed-Forward 3D Gaussian World Model for Robotic Manipulation.</a></div><div class="zz-meta">Zijian Zhang, Yuqing Jiang, Qian Cheng, Xiaofan Li, Si Liu, Ding Zhao, Ping Luo, Weitao Zhou, Haibao Yu. arXiv, 2026.</div></div></article>
        <article class="zz-paper"><div class="zz-index">04</div><div><div class="zz-title"><a href="https://ieeexplore.ieee.org/document/11278878">Software-Defined Parallel LiDARs for Active 3D Perception.</a></div><div class="zz-meta">Zijian Zhang. IEEE/ASME MESA, 2025.</div></div></article>
      </section>

      <section id="projects" class="zz-section">
        <h2>Projects</h2>
        <div class="zz-grid">
          <a class="zz-mini-card" href="{{ '/projects/worlddream/' | relative_url }}"><div class="zz-title">GaussianDream++</div><p>Action-compatible 3D world tokens for efficient VLA control.</p></a>
          <a class="zz-mini-card" href="{{ '/projects/gaussianwam/' | relative_url }}"><div class="zz-title">GaussianWAM</div><p>Distilling 3D geometry and semantics into world-action models.</p></a>
          <a class="zz-mini-card" href="{{ '/projects/hd-map-autolabel/' | relative_url }}"><div class="zz-title">Fuse and Refine</div><p>Robust HD map auto-labeling from multimodal perception.</p></a>
          <a class="zz-mini-card" href="{{ '/projects/bevfusion/' | relative_url }}"><div class="zz-title">BEVFusion Deployment</div><p>Multimodal 3D detection, pruning, TensorRT, and Orin deployment.</p></a>
        </div>
      </section>

      <section id="awards" class="zz-section">
        <h2>Awards</h2>
        <div class="zz-card">
          <ul>
            <li>Champion, ROBOCON Equestrian Speed Race, 2025.</li>
            <li>First Prize, Jingdiao Cup Graduation Design Competition, 2026.</li>
            <li>Champion, ROBOCON Programming Challenge, 2024.</li>
            <li>Third Place, ROBOCON Granary Challenge, 2024.</li>
            <li>National Scholarship; Xuchang Yuandong Science and Innovation Scholarship, First Prize.</li>
          </ul>
        </div>
      </section>

      <section id="skills" class="zz-section">
        <h2>Skills</h2>
        <div class="zz-grid">
          <div class="zz-mini-card"><div class="zz-title">Programming</div><p>C, C++, Python, MATLAB</p></div>
          <div class="zz-mini-card"><div class="zz-title">Robotics and Perception</div><p>Robot learning, VLA, WAM, 3D Gaussian, BEV perception, LiDAR, TensorRT, NVIDIA Orin</p></div>
        </div>
      </section>
    </main>
  </div>
</div>
