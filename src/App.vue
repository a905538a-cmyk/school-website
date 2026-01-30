<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

// Mouse cursor glow effect
const cursorGlow = ref(null)
const isHovering = ref(false)

const handleMouseMove = (e) => {
  if (cursorGlow.value) {
    cursorGlow.value.style.left = e.clientX + 'px'
    cursorGlow.value.style.top = e.clientY + 'px'
  }
}

const handleMouseOver = (e) => {
  if (e.target.matches('a, button, .interactive-card, .quick-link')) {
    isHovering.value = true
  }
}

const handleMouseOut = () => {
  isHovering.value = false
}

// Scroll fade-in effect
const observeElements = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    },
    { threshold: 0.1 }
  )
  
  document.querySelectorAll('.fade-in-section').forEach(el => {
    observer.observe(el)
  })
}

onMounted(() => {
  document.addEventListener('mousemove', handleMouseMove)
  document.addEventListener('mouseover', handleMouseOver)
  document.addEventListener('mouseout', handleMouseOut)
  
  // Observe fade-in elements after route change
  setTimeout(observeElements, 100)
})

onUnmounted(() => {
  document.removeEventListener('mousemove', handleMouseMove)
  document.removeEventListener('mouseover', handleMouseOver)
  document.removeEventListener('mouseout', handleMouseOut)
})
</script>

<template>
  <div class="app">
    <!-- Cursor Glow Effect -->
    <div 
      ref="cursorGlow" 
      class="cursor-glow d-none d-lg-block"
      :class="{ expanded: isHovering }"
    ></div>
    
    <Header />
    <main>
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<style>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}
</style>
