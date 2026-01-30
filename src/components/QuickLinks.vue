<script setup>
import { ref, onMounted } from 'vue'

const quickLinks = [
  { name: '學生入口', icon: '👨‍🎓', path: '#' },
  { name: '教職員入口', icon: '👨‍🏫', path: '#' },
  { name: '圖書館', icon: '📚', path: '#' },
  { name: '選課系統', icon: '📝', path: '#' },
  { name: '校務信箱', icon: '📧', path: '#' },
  { name: '行事曆', icon: '📅', path: '#' }
]

// 3D Tilt Effect
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
      <h2 class="text-center mb-5 fw-bold">快速連結</h2>
      <div class="row g-4">
        <div 
          v-for="link in quickLinks" 
          :key="link.name"
          class="col-6 col-md-4 col-lg-2"
        >
          <a 
            :href="link.path"
            class="quick-link d-block text-center text-decoration-none"
            @mousemove="(e) => handleMouseMove(e, $event.currentTarget)"
            @mouseleave="handleMouseLeave($event.currentTarget)"
          >
            <div class="quick-link-icon">{{ link.icon }}</div>
            <span class="fw-medium text-dark">{{ link.name }}</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
