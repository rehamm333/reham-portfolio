<script setup>
const links = [
  { label: 'Home', to: { path: '/', hash: '#home' } },
  { label: 'Skills', to: { path: '/', hash: '#skills' } },
  { label: 'Projects', to: { path: '/', hash: '#projects' } },
  { label: 'Contact', to: { path: '/', hash: '#contact' } }
]
</script>

<template>
  <header class="nav">
    <div class="nav-inner">
      <RouterLink to="/" class="nav-name">Reham Ahmed Alamri</RouterLink>
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