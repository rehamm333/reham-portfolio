<script setup>
import { RouterLink } from 'vue-router'

const projects = [
  {
    title: 'Employee Management Dashboard',
    description:
      'An employee data management website designed to organize and display employee information through a clean, responsive, and user-friendly interface.',
    tags: ['HTML', 'CSS', 'JavaScript', 'API'],
    href: 'https://rehamm333.github.io/employee-dashboard/'
  },
  {
    title: 'Beauty & Skincare Hub',
    description:
      'A modern beauty and skincare website that showcases makeup and skincare products through a clean and visually appealing interface.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    href: 'https://rehamm333.github.io/Veloura-Beauty/'
  },
  {
    title: 'The Coffee Collective',
    description:
      'A cozy coffee shop website built with Vue.js, featuring a warm and inviting design that highlights the menu and brand atmosphere.',
    tags: ['Vue.js', 'JavaScript', 'CSS'],
    href: 'https://rehamm333.github.io/coffee-collective/'
  }
]

const stack = ['HTML', 'CSS', 'API', 'Vue.js', 'JavaScript']

const orbitBadges = [
  { label: 'HTML · CSS', style: { top: '2%', right: '-8%' } },
  { label: 'Vue.js · JS', style: { bottom: '11%', left: '-11%' } },
  { label: 'Always learning', style: { bottom: '-5%', right: '2%' } }
]
</script>

<template>
  <section id="projects" class="projects-section">

    <!-- dotted background -->
    <div class="projects-dots" aria-hidden="true"></div>

    <div class="projects-wide projects-layout">

      <div class="projects-text">
        <p class="status-pill">
          <span class="dot"></span>
          Currently: building new projects
        </p>

        <h2 class="projects-title">Projects..</h2>

        <p class="projects-lede">
          These projects reflect my learning journey and passion for web development,
          and I am continuously improving and expanding my skills.
        </p>

        <ul class="stack-tags">
          <li v-for="tech in stack" :key="tech">
            {{ tech }}
          </li>
        </ul>

        <RouterLink to="/projects" class="btn-view-projects">
          View my projects
          <span class="btn-arrow">→</span>
        </RouterLink>
      </div>

      <div class="projects-visual">
        <div class="orbit-wrap" aria-hidden="true">

          <div class="ring ring-outer"></div>
          <div class="ring ring-middle"></div>
          <div class="ring ring-inner"></div>

          <div class="core">
            <span class="core-shape"></span>
          </div>

          <div class="orbit orbit-a">
            <span class="orbit-dot dot-accent"></span>
          </div>

          <div class="orbit orbit-b">
            <span class="orbit-dot dot-amber"></span>
          </div>

          <div class="orbit orbit-c">
            <span class="orbit-dot dot-soft"></span>
          </div>

          <span
            v-for="badge in orbitBadges"
            :key="badge.label"
            class="orbit-badge"
            :style="badge.style"
          >
            {{ badge.label }}
          </span>

        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.projects-section {
  position: relative;

  min-height: 720px;

  scroll-margin-top: 90px;

  padding-top: 45px;
  padding-bottom: 110px;

  margin-bottom: 100px;

  overflow: hidden;
}


/* =========================
   BACKGROUND DOTS
========================= */

.projects-dots {
  position: absolute;

  inset: 0;

  pointer-events: none;

  opacity: 0.22;

  background-image:
    radial-gradient(
      circle,
      rgba(139, 124, 255, 0.55) 1px,
      transparent 1px
    );

  background-size: 24px 24px;

  mask-image:
    linear-gradient(
      to bottom,
      transparent 0%,
      black 15%,
      black 80%,
      transparent 100%
    );
}


/* purple/orange ambient glow */
.projects-section::before {
  content: '';

  position: absolute;

  width: 720px;
  height: 720px;

  right: -100px;
  top: 40px;

  border-radius: 50%;

  background:
    radial-gradient(
      circle,
      rgba(139, 124, 255, 0.16) 0%,
      rgba(255, 180, 84, 0.07) 40%,
      transparent 72%
    );

  filter: blur(25px);

  pointer-events: none;
}


/* =========================
   MAIN WIDTH
========================= */

.projects-wide {
  position: relative;
  z-index: 2;

  width: 100%;

  padding-inline:
    clamp(28px, 5vw, 80px);
}


/* =========================
   LAYOUT
========================= */

.projects-layout {
  display: grid;

  grid-template-columns:
    minmax(0, 0.95fr)
    minmax(360px, 0.8fr);

  align-items: center;

  gap: clamp(60px, 8vw, 130px);
}


/* =========================
   LEFT CONTENT
========================= */

.projects-text {
  width: 100%;

  transform: translateY(-25px);
}


/* status */
.status-pill {
  display: inline-flex;

  align-items: center;

  gap: 10px;

  margin: 0;

  padding: 8px 18px;

  border: 1px solid var(--line);

  border-radius: 100px;

  background: rgba(20, 19, 26, 0.35);

  color: var(--text-muted);

  font-family: var(--font-mono);

  font-size: 0.83rem;
}

.dot {
  width: 7px;
  height: 7px;

  border-radius: 50%;

  background: var(--accent);

  box-shadow:
    0 0 12px rgba(139, 124, 255, 0.8);

  flex-shrink: 0;
}


/* =========================
   TITLE
========================= */

.projects-title {
  margin: 28px 0 0;

  font-family: var(--font-display);

  font-weight: 600;

  font-size:
    clamp(3.8rem, 7vw, 6rem);

  line-height: 0.95;

  letter-spacing: -0.035em;

  color: var(--text);

  text-shadow:
    0 0 24px rgba(139, 124, 255, 0.08);
}


/* =========================
   DESCRIPTION
========================= */

.projects-lede {
  max-width: 610px;

  margin-top: 24px;

  color: var(--text-muted);

  font-size:
    clamp(1rem, 1.4vw, 1.12rem);

  line-height: 1.75;
}


/* =========================
   STACK
========================= */

.stack-tags {
  display: flex;

  gap: 12px;

  width: 100%;

  max-width: 700px;

  margin-top: 28px;

  padding: 0;

  list-style: none;
}

.stack-tags li {
  flex: 1;

  min-width: 85px;

  padding: 9px 14px;

  text-align: center;

  border: 1px solid var(--line);

  border-radius: 7px;

  background:
    rgba(30, 29, 39, 0.6);

  color: var(--text);

  font-family: var(--font-mono);

  font-size: 0.82rem;

  transition:
    border-color 0.2s ease,
    background 0.2s ease,
    transform 0.2s ease;
}

.stack-tags li:hover {
  transform: translateY(-2px);

  border-color: var(--accent);

  background:
    rgba(139, 124, 255, 0.08);
}


/* =========================
   BUTTON
========================= */

.btn-view-projects {
  display: inline-flex;

  align-items: center;
  justify-content: center;

  gap: 14px;

  width: fit-content;

  min-width: 210px;

  margin-top: 34px;

  padding: 13px 28px;

  border-radius: 7px;

  background:
    linear-gradient(
      110deg,
      #8072ff,
      #a28aff
    );

  color: var(--ink);

  font-family: var(--font-ui);

  font-size: 0.92rem;

  font-weight: 600;

  text-decoration: none;

  box-shadow:
    0 8px 28px rgba(139, 124, 255, 0.16);

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.btn-view-projects:hover {
  transform: translateY(-3px);

  box-shadow:
    0 12px 32px rgba(139, 124, 255, 0.26);
}

.btn-arrow {
  font-size: 1.1rem;

  transition: transform 0.2s ease;
}

.btn-view-projects:hover .btn-arrow {
  transform: translateX(5px);
}


/* =========================
   ORBIT AREA
========================= */

.projects-visual {
  position: relative;

  display: flex;

  align-items: center;
  justify-content: center;
}


/* larger circle */
.orbit-wrap {
  position: relative;

  width: min(440px, 36vw);

  aspect-ratio: 1 / 1;

  z-index: 2;
}


/* rings */
.ring {
  position: absolute;

  top: 50%;
  left: 50%;

  transform:
    translate(-50%, -50%);

  border: 1px solid
    rgba(139, 124, 255, 0.2);

  border-radius: 50%;
}

.ring-outer {
  width: 100%;
  height: 100%;
}

.ring-middle {
  width: 72%;
  height: 72%;
}

.ring-inner {
  width: 45%;
  height: 45%;
}


/* =========================
   CENTER
========================= */

.core {
  position: absolute;

  top: 50%;
  left: 50%;

  width: 28%;
  height: 28%;

  transform:
    translate(-50%, -50%);

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 50%;

  border:
    1px solid rgba(139, 124, 255, 0.28);

  background:
    rgba(28, 27, 37, 0.92);

  box-shadow:
    0 0 40px
    rgba(139, 124, 255, 0.08);
}

.core-shape {
  width: 27px;
  height: 27px;

  border:
    2px solid var(--accent);

  clip-path:
    polygon(
      50% 0%,
      100% 25%,
      100% 75%,
      50% 100%,
      0% 75%,
      0% 25%
    );
}


/* =========================
   ORBITS
========================= */

.orbit {
  position: absolute;

  top: 50%;
  left: 50%;

  transform:
    translate(-50%, -50%);

  border-radius: 50%;

  pointer-events: none;
}

.orbit-a {
  width: 100%;
  height: 100%;

  animation:
    spin 16s linear infinite;
}

.orbit-b {
  width: 72%;
  height: 72%;

  animation:
    spin-reverse 11s linear infinite;
}

.orbit-c {
  width: 45%;
  height: 45%;

  animation:
    spin 8s linear infinite;
}


/* orbit dots */
.orbit-dot {
  position: absolute;

  top: -6px;
  left: 50%;

  width: 11px;
  height: 11px;

  transform:
    translateX(-50%);

  border-radius: 50%;

  box-shadow:
    0 0 14px currentColor;
}

.dot-accent {
  background: var(--accent);
  color: var(--accent);
}

.dot-amber {
  background: var(--amber);
  color: var(--amber);
}

.dot-soft {
  background: #d6c5ff;
  color: #d6c5ff;
}


/* =========================
   BADGES
========================= */

.orbit-badge {
  position: absolute;

  padding: 9px 17px;

  border:
    1px solid rgba(139, 124, 255, 0.25);

  border-radius: 100px;

  background:
    rgba(20, 19, 26, 0.9);

  backdrop-filter:
    blur(8px);

  color: var(--text);

  font-family: var(--font-mono);

  font-size: 0.78rem;

  white-space: nowrap;
}


/* =========================
   ANIMATION
========================= */

@keyframes spin {
  from {
    transform:
      translate(-50%, -50%)
      rotate(0deg);
  }

  to {
    transform:
      translate(-50%, -50%)
      rotate(360deg);
  }
}

@keyframes spin-reverse {
  from {
    transform:
      translate(-50%, -50%)
      rotate(360deg);
  }

  to {
    transform:
      translate(-50%, -50%)
      rotate(0deg);
  }
}


/* =========================
   TABLET
========================= */

@media (max-width: 1000px) {

  .projects-layout {
    grid-template-columns:
      1fr 0.8fr;

    gap: 45px;
  }

  .orbit-wrap {
    width: min(360px, 38vw);
  }

  .projects-title {
    font-size:
      clamp(3.4rem, 7vw, 5rem);
  }

}


/* =========================
   MOBILE
========================= */

@media (max-width: 860px) {

  .projects-section {
    min-height: auto;

    scroll-margin-top: 85px;

    padding-top: 40px;
    padding-bottom: 90px;
  }

  .projects-layout {
    grid-template-columns: 1fr;

    gap: 75px;
  }

  .projects-text {
    transform: none;
  }

  .projects-visual {
    order: 2;
  }

  .orbit-wrap {
    width: min(360px, 78vw);
  }

  .stack-tags {
    flex-wrap: wrap;
  }

  .stack-tags li {
    flex:
      1 1 28%;
  }

}


/* =========================
   SMALL MOBILE
========================= */

@media (max-width: 600px) {

  .projects-wide {
    padding-inline: 20px;
  }

  .projects-title {
    font-size:
      clamp(3rem, 15vw, 4rem);
  }

  .projects-lede {
    font-size: 0.98rem;
  }

  .btn-view-projects {
    min-width: 190px;

    padding: 12px 24px;
  }

  .orbit-badge {
    font-size: 0.7rem;

    padding: 7px 12px;
  }

}


/* =========================
   ACCESSIBILITY
========================= */

@media (prefers-reduced-motion: reduce) {

  .orbit-a,
  .orbit-b,
  .orbit-c {
    animation: none;
  }

}
</style>