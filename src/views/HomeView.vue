<script setup>
import HeroSection from '@/components/HeroSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import ContactSection from '@/components/ContactSection.vue'

defineEmits(['open-contact'])
</script>

<template>
  <HeroSection @open-contact="$emit('open-contact')" />
  <SkillsSection />
  <ProjectsSection />
  <ContactSection />
</template>