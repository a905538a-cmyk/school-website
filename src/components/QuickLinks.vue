<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const quickLinks = [
  { key: 'studentPortal', icon: '👨‍🎓', path: '#', color: 'green' },
  { key: 'facultyPortal', icon: '👨‍🏫', path: '#', color: 'blue' },
  { key: 'library', icon: '📚', path: '#', color: 'purple' },
  { key: 'courses', icon: '📝', path: '#', color: 'orange' },
  { key: 'email', icon: '📧', path: '#', color: 'teal' },
  { key: 'calendar', icon: '📅', path: '#', color: 'pink' }
]

const handleMouseMove = (e, el) => {
  const rect = el.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  const centerX = rect.width / 2
  const centerY = rect.height / 2
  const rotateX = (y - centerY) / 10
  const rotateY = (centerX - x) / 10
  el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`
}

const handleMouseLeave = (el) => {
  el.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)'
}
</script>

<template>
  <section class="py-5 bg-light">
    <div class="container">
      <h2 class="text-center mb-5 fw-bold">{{ t('quickLinks.title') }}</h2>
      <div class="row g-4">
        <div v-for="link in quickLinks" :key="link.key" class="col-6 col-md-4 col-lg-2">
          <a 
            :href="link.path"
            class="quick-link d-block text-center text-decoration-none"
            @mousemove="(e) => handleMouseMove(e, $event.currentTarget)"
            @mouseleave="handleMouseLeave($event.currentTarget)"
          >
            <div class="quick-link-icon" :class="link.color">{{ link.icon }}</div>
            <span class="fw-medium text-dark">{{ t(`quickLinks.${link.key}`) }}</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
