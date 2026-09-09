<script setup>
/**
 * A soft violet glow that follows the pointer with a slight lag (lerp),
 * so it feels alive instead of snapping straight to the cursor.
 * - Skipped on touch-only devices (no pointer to follow).
 * - Skipped when the user prefers reduced motion.
 */
import { onMounted, onUnmounted, ref } from 'vue'

const glow = ref(null)

let targetX = 0
let targetY = 0
let currentX = 0
let currentY = 0
let rafId = null
let active = false

function onPointerMove(e) {
  targetX = e.clientX
  targetY = e.clientY
  if (!active) {
    // snap on first movement so it doesn't drift in from a corner
    currentX = targetX
    currentY = targetY
    active = true
  }
}

function tick() {
  // ease toward the real cursor position — the "trailing" feel
  currentX += (targetX - currentX) * 0.12
  currentY += (targetY - currentY) * 0.12
  if (glow.value) {
    glow.value.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`
  }
  rafId = requestAnimationFrame(tick)
}

onMounted(() => {
  const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (!canHover || reduced) return

  window.addEventListener('pointermove', onPointerMove, { passive: true })
  rafId = requestAnimationFrame(tick)
})

onUnmounted(() => {
  window.removeEventListener('pointermove', onPointerMove)
  if (rafId) cancelAnimationFrame(rafId)
})
</script>

<template>
  <div ref="glow" class="cursor-glow" aria-hidden="true"></div>
</template>

<style scoped>
.cursor-glow {
  position: fixed;
  top: 0;
  left: 0;
  width: 480px;
  height: 480px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(139, 124, 255, 0.16) 0%, rgba(139, 124, 255, 0) 70%);
  pointer-events: none;
  z-index: 1;
  will-change: transform;
  mix-blend-mode: screen;
}

@media (hover: none), (pointer: coarse) {
  .cursor-glow {
    display: none;
  }
}
</style>