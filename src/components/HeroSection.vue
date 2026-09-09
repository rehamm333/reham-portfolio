<script setup>
/**
 * Subtle mouse-reactive tilt for the hero shape, on top of the
 * page-wide CursorGlow. Purely decorative, disabled with reduced motion.
 */
import { onMounted, onUnmounted, ref } from 'vue'

const hero = ref(null)
const shape = ref(null)

function onMove(e) {
  if (!hero.value || !shape.value) return
  const rect = hero.value.getBoundingClientRect()
  const relX = (e.clientX - rect.left) / rect.width - 0.5
  const relY = (e.clientY - rect.top) / rect.height - 0.5
  shape.value.style.transform = `translate3d(${relX * 24}px, ${relY * 24}px, 0) rotate(${relX * 6}deg)`
}

const emit = defineEmits(['open-contact'])

onMounted(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!reduced) hero.value?.addEventListener('pointermove', onMove)
})

onUnmounted(() => {
  hero.value?.removeEventListener('pointermove', onMove)
})
</script>

<template>
  <section id="home" class="hero" ref="hero">
    <div class="hero-bg" aria-hidden="true">
      <svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice">
        <g fill="none" stroke="#8b7cff" stroke-width="1">
          <path d="M-50,60 C150,10 250,110 450,60 S750,10 850,60" opacity="0.18" />
          <path d="M-50,120 C150,70 250,170 450,120 S750,70 850,120" opacity="0.15" />
          <path d="M-50,180 C150,130 250,230 450,180 S750,130 850,180" opacity="0.13" />
          <path d="M-50,240 C150,190 250,290 450,240 S750,190 850,240" opacity="0.11" />
          <path d="M-50,300 C150,250 250,350 450,300 S750,250 850,300" opacity="0.09" />
          <path d="M-50,360 C150,310 250,410 450,360 S750,310 850,360" opacity="0.07" />
          <path d="M-50,420 C150,370 250,470 450,420 S750,370 850,420" opacity="0.05" />
        </g>
      </svg>
    </div>
    <div class="hero-shape" ref="shape" aria-hidden="true"></div>
    <div class="hero-wide hero-inner">
      <h1 class="hero-title">
        <span class="bracket">&lt;div&gt;</span>
        <span class="code-block">
          <span class="code-line">👋 Hi, I'm <span class="accent-word">Reham</span></span>
          <span class="code-line">I like making interactive things with code.</span>
          <span class="code-line">I also <span class="accent-word">design</span> &amp; <span class="accent-word">build</span> experiences</span>
          <span class="code-line">that feel simple, smooth &amp; enjoyable.</span>
        </span>
        <span class="bracket">&lt;/div&gt;</span>
      </h1>
      <div class="hero-actions">
        <a href="#projects" class="btn btn-primary">See my projects</a>
        <button type="button" class="btn btn-ghost" @click="emit('open-contact')">Work with me</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  overflow: hidden;
  padding-block: clamp(56px, 8vw, 100px) clamp(60px, 10vw, 120px);
  position: relative;
}

.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}

.hero-bg svg {
  width: 100%;
  height: 100%;
}

.hero-wide {
  width: 100%;
  padding-inline: clamp(12px, 2vw, 24px);
}

.hero-inner {
  position: relative;
  z-index: 2;
}

.hero-shape {
  position: absolute;
  top: 10%;
  right: -8%;
  width: min(46vw, 520px);
  height: min(46vw, 520px);
  border-radius: 40% 60% 55% 45% / 45% 40% 60% 55%;
  background: linear-gradient(135deg, var(--accent-soft), rgba(255, 180, 84, 0.08));
  border: 1px solid var(--line);
  will-change: transform;
  z-index: 1;
}

.hero-title {
  font-family: var(--font-mono);
  font-weight: 500;
  font-size: clamp(1.55rem, 3.8vw, 2.3rem);
  line-height: 1.6;
  max-width: 40ch;
  margin-top: 0;
}

.bracket {
  color: var(--text-muted);
  opacity: 0.55;
  display: block;
}

.code-block {
  display: block;
  padding-left: clamp(20px, 3vw, 36px);
}

.code-line {
  display: block;
}

.accent-word {
  color: var(--accent);
}

.hero-actions {
  margin-top: 40px;
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  padding: 13px 26px;
  font-size: 0.95rem;
  border-radius: 4px;
  transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease;
}

.btn-primary {
  background: var(--accent);
  color: var(--ink);
  font-weight: 600;
}

.btn-primary:hover {
  transform: translateY(-2px);
}

.btn-ghost {
  border: 1px solid var(--line);
  color: var(--text);
}

.btn-ghost:hover {
  border-color: var(--accent);
}
</style>