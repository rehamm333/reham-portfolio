<script setup>
import { ref } from 'vue'
import NavBar from '@/components/NavBar.vue'
import ContactModal from '@/components/ContactModal.vue'
import CursorGlow from '@/components/CursorGlow.vue'

const isContactOpen = ref(false)
</script>

<template>
  <CursorGlow />
  <NavBar />
  <main>
    <RouterView @open-contact="isContactOpen = true" />
  </main>
  <footer class="site-footer">
    <p>© {{ new Date().getFullYear() }} Reham Alamri</p>
  </footer>

  <ContactModal v-if="isContactOpen" @close="isContactOpen = false" />
</template>

<style scoped>
.site-footer {
  text-align: center;
  padding-block: 28px;
  color: var(--text-muted);
  font-size: 0.85rem;
  border-top: 1px solid var(--line);
}
</style>