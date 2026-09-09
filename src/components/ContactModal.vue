<script setup>
import { ref } from 'vue'

const emit = defineEmits(['close'])

const email = ref('')
const fullName = ref('')
const message = ref('')

function onSend() {
  const subject = encodeURIComponent(`New message from ${fullName.value || 'your portfolio'}`)
  const body = encodeURIComponent(
    `Name: ${fullName.value}\nEmail: ${email.value}\n\n${message.value}`
  )
  // Opens the visitor's mail app with everything pre-filled, addressed to Reham.
  window.location.href = `mailto:reham788@outlook.com?subject=${subject}&body=${body}`
}

function onOverlayClick(e) {
  if (e.target === e.currentTarget) emit('close')
}
</script>

<template>
  <div class="overlay" @click="onOverlayClick">
    <aside class="panel">
      <button type="button" class="return-btn" @click="emit('close')">
        <span aria-hidden="true">←</span> Return
      </button>

      <p class="eyebrow">Contact</p>

      <div class="contact-info">
        <a href="mailto:reham788@outlook.com">reham788@outlook.com</a>
        <a href="https://wa.me/966544695535?text=Hello%20Reham" target="_blank" rel="noopener noreferrer"
          >+966 54 469 5535</a
        >
      </div>

      <form class="contact-form" @submit.prevent="onSend">
        <input v-model="email" type="email" placeholder="Your email" required />
        <input v-model="fullName" type="text" placeholder="Your full name" required />
        <textarea v-model="message" placeholder="How can I help you?" rows="5" required></textarea>
        <button type="submit" class="send-btn">Send</button>
      </form>
    </aside>
  </div>
</template>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(10, 9, 14, 0.6);
  backdrop-filter: blur(2px);
  z-index: 50;
  display: flex;
  justify-content: flex-end;
}

.panel {
  width: min(420px, 100%);
  height: 100%;
  background: var(--surface);
  border-left: 1px solid var(--line);
  padding: 40px clamp(24px, 5vw, 44px);
  overflow-y: auto;
  animation: slide-in 0.35s ease;
}

@keyframes slide-in {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .panel {
    animation: none;
  }
}

.return-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--text-muted);
  font-size: 0.95rem;
  margin-bottom: 40px;
  transition: color 0.2s ease;
}

.return-btn:hover {
  color: var(--text);
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 14px;
  margin-bottom: 28px;
  padding-bottom: 28px;
  border-bottom: 1px solid var(--line);
}

.contact-info a {
  font-size: 1.05rem;
  color: var(--text);
  transition: color 0.2s ease;
}

.contact-info a:hover {
  color: var(--accent);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  background: var(--ink);
  border: 1px solid var(--line);
  border-radius: 6px;
  padding: 13px 16px;
  color: var(--text);
  font-family: var(--font-ui);
  font-size: 0.95rem;
  resize: vertical;
  transition: border-color 0.2s ease;
}

.contact-form input::placeholder,
.contact-form textarea::placeholder {
  color: var(--text-muted);
}

.contact-form input:focus,
.contact-form textarea:focus {
  outline: none;
  border-color: var(--accent);
}

.send-btn {
  align-self: flex-start;
  margin-top: 6px;
  padding: 13px 30px;
  background: var(--accent);
  color: var(--ink);
  font-weight: 600;
  font-size: 0.95rem;
  border-radius: 4px;
  transition: transform 0.2s ease;
}

.send-btn:hover {
  transform: translateY(-2px);
}
</style>