<script setup>
/**
 * Card tilts toward the pointer while hovered — a small, contained
 * "it moves with you" moment on the piece of UI the user is engaging with.
 */
import { ref } from 'vue'

defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  tags: { type: Array, default: () => [] },
  href: { type: String, default: '' },
  comingSoon: { type: Boolean, default: false }
})

const card = ref(null)

function onMove(e) {
  if (!card.value) return
  const rect = card.value.getBoundingClientRect()
  const x = (e.clientX - rect.left) / rect.width - 0.5
  const y = (e.clientY - rect.top) / rect.height - 0.5
  card.value.style.transform = `perspective(700px) rotateX(${y * -6}deg) rotateY(${x * 6}deg) translateY(-4px)`
}

function onLeave() {
  if (!card.value) return
  card.value.style.transform = ''
}
</script>

<template>
  <component
    :is="comingSoon ? 'div' : 'a'"
    :href="comingSoon ? undefined : href"
    :target="comingSoon ? undefined : '_blank'"
    :rel="comingSoon ? undefined : 'noopener noreferrer'"
    class="project-card"
    :class="{ 'is-soon': comingSoon }"
    ref="card"
    @pointermove="onMove"
    @pointerleave="onLeave"
  >
    <div class="project-thumb" aria-hidden="true">
      <span v-if="comingSoon">🚀</span>
    </div>
    <div class="project-body">
      <div class="project-heading">
        <h3>{{ title }}</h3>
        <span v-if="!comingSoon" class="project-arrow">↗</span>
      </div>
      <p>{{ description }}</p>
      <ul v-if="tags.length" class="project-tags">
        <li v-for="tag in tags" :key="tag">{{ tag }}</li>
      </ul>
    </div>
  </component>
</template>

<style scoped>
.project-card {
  display: block;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 6px;
  overflow: hidden;
  transition: transform 0.15s ease, border-color 0.2s ease;
  transform-style: preserve-3d;
}

.project-card:not(.is-soon):hover {
  border-color: var(--accent);
}

.is-soon {
  opacity: 0.6;
  cursor: default;
}

.project-thumb {
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  background: linear-gradient(135deg, var(--accent-soft), rgba(255, 180, 84, 0.06));
  border-bottom: 1px solid var(--line);
}

.project-body {
  padding: 24px 26px 28px;
}

.project-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.project-heading h3 {
  font-family: var(--font-display);
  font-weight: 500;
  font-size: 1.2rem;
}

.project-arrow {
  color: var(--accent);
  font-size: 1.1rem;
  flex-shrink: 0;
}

.project-body p {
  color: var(--text-muted);
  font-size: 0.92rem;
  margin-top: 10px;
  line-height: 1.55;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 18px;
}

.project-tags li {
  font-size: 0.78rem;
  color: var(--text-muted);
  border: 1px solid var(--line);
  padding: 4px 10px;
  border-radius: 100px;
}
</style>