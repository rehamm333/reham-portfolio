<script setup>
import { onMounted, ref } from 'vue'

const links = [
  { label: 'Home', to: { path: '/', hash: '#home' } },
  { label: 'Skills', to: { path: '/', hash: '#skills' } },
  { label: 'Projects', to: { path: '/', hash: '#projects' } },
  { label: 'Contact', to: { path: '/', hash: '#contact' } }
]

const nameText = 'Reham Ahmed Alamri'
const letters = ref(
  [...nameText].map((ch) => ({ char: ch === ' ' ? '\u00A0' : ch, visible: false }))
)

onMounted(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduced) {
    letters.value.forEach((l) => (l.visible = true))
    return
  }
  letters.value.forEach((letter, i) => {
    setTimeout(() => {
      letter.visible = true
    }, i * 40)
  })
})
</script>

<template>
  <header class="nav">
    <div class="nav-inner">
      <RouterLink to="/" class="nav-name">
        <span
          v-for="(letter, i) in letters"
          :key="i"
          class="nav-letter"
          :class="{ 'is-visible': letter.visible }"
          >{{ letter.char }}</span
        >
      </RouterLink>
      <nav>
        <ul class="nav-links">
          <li v-for="link in links" :key="link.label">
            <RouterLink :to="link.to">{{ link.label }}</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(10px);
  background: rgba(20, 19, 26, 0.7);
  border-bottom: 1px solid var(--line);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 20px;
  padding-inline: clamp(16px, 2.5vw, 32px);
}

.nav-name {
  font-family: var(--font-display);
  font-size: 1.1rem;
  letter-spacing: 0.01em;
}

.nav-letter {
  display: inline-block;
  opacity: 0;
  transform: translateY(-14px);
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.nav-letter.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.nav-links {
  display: flex;
  gap: clamp(18px, 3vw, 34px);
  font-size: 0.95rem;
  color: var(--text-muted);
}

.nav-links a {
  transition: color 0.2s ease;
}

.nav-links a:hover {
  color: var(--text);
}
</style>