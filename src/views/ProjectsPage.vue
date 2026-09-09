<script setup>
import { RouterLink } from 'vue-router'
import employeeImg from '@/assets/projects/employee.png'
import beautyImg from '@/assets/projects/Beauty.png'
import coffeeImg from '@/assets/projects/img3.png'

const projects = [
  {
    title: 'Employee Management Dashboard',
    description:
      'An employee data management website designed to organize and display employee information through a clean, responsive, and user-friendly interface.',
    tags: ['HTML', 'CSS', 'JavaScript', 'API'],
    href: 'https://rehamm333.github.io/employee-dashboard/',
    image: employeeImg
  },
  {
    title: 'Beauty & Skincare Hub',
    description:
      'A modern beauty and skincare website that showcases makeup and skincare products through a clean and visually appealing interface.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    href: 'https://rehamm333.github.io/Veloura-Beauty/',
    image: beautyImg
  },
  {
    title: 'The Coffee Collective',
    description:
      'A cozy coffee shop website built with Vue.js, featuring a warm and inviting design that highlights the menu and brand atmosphere.',
    tags: ['Vue.js', 'JavaScript', 'CSS'],
    href: 'https://rehamm333.github.io/coffee-collective/',
    image: coffeeImg
  }
]
</script>

<template>
  <section class="projects-page">
    <div class="page-wide">
      <RouterLink to="/" class="back-link">← Back home</RouterLink>

      <h1 class="page-title">My <span class="accent-word">Projects</span></h1>
      <p class="page-lede">Some of the projects I've been working on recently.</p>

      <div class="cards-grid">
        <article v-for="project in projects" :key="project.title" class="project-card">
          <div class="thumb">
            <img :src="project.image" :alt="project.title" />
          </div>

          <div class="card-body">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>

            <ul class="tags">
              <li v-for="tag in project.tags" :key="tag">{{ tag }}</li>
            </ul>

            <a :href="project.href" target="_blank" rel="noopener noreferrer" class="visit-link">
              🔗 Visit
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-page {
  padding-block: clamp(40px, 8vw, 80px) clamp(80px, 12vw, 140px);
  min-height: 100vh;
}

.page-wide {
  width: 100%;
  padding-inline: clamp(16px, 2.5vw, 32px);
}

.back-link {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: 0.9rem;
  color: var(--text-muted);
  transition: color 0.2s ease;
}

.back-link:hover {
  color: var(--accent);
}

.page-title {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: clamp(2.4rem, 6vw, 3.6rem);
  margin-top: 24px;
}

.accent-word {
  color: var(--accent);
}

.page-lede {
  color: var(--text-muted);
  margin-top: 14px;
  font-size: 1.05rem;
}

.cards-grid {
  margin-top: 48px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}

.project-card {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 10px;
  overflow: hidden;
  transition: border-color 0.2s ease, transform 0.2s ease;
}

.project-card:hover {
  border-color: var(--accent);
  transform: translateY(-3px);
}

.thumb {
  height: 170px;
  overflow: hidden;
}

.thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  display: block;
  transition: transform 0.3s ease;
}

.project-card:hover .thumb img {
  transform: scale(1.05);
}

.card-body {
  padding: 22px 24px 26px;
}

.card-body h3 {
  font-family: var(--font-display);
  font-weight: 500;
  font-size: 1.2rem;
}

.card-body p {
  color: var(--text-muted);
  font-size: 0.92rem;
  margin-top: 10px;
  line-height: 1.55;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 18px;
}

.tags li {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--accent);
  background: var(--accent-soft);
  padding: 5px 12px;
  border-radius: 100px;
}

.visit-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 18px;
  color: var(--accent);
  font-weight: 600;
  font-size: 0.92rem;
}
</style>