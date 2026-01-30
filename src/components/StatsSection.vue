<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const stats = [
  { key: 'students', value: 35000, suffix: '+' },
  { key: 'faculty', value: 2800, suffix: '+' },
  { key: 'departments', value: 120, suffix: '' },
  { key: 'years', value: 96, suffix: '' }
]

const animatedValues = ref(stats.map(() => 0))
const isVisible = ref(false)

const animateNumber = (index, target) => {
  const duration = 2000
  const steps = 60
  const increment = target / steps
  let current = 0
  
  const timer = setInterval(() => {
    current += increment
    if (current >= target) {
      animatedValues.value[index] = target
      clearInterval(timer)
    } else {
      animatedValues.value[index] = Math.floor(current)
    }
  }, duration / steps)
}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && !isVisible.value) {
        isVisible.value = true
        stats.forEach((stat, index) => {
          setTimeout(() => animateNumber(index, stat.value), index * 150)
        })
      }
    },
    { threshold: 0.3 }
  )
  
  const section = document.querySelector('.stats-section')
  if (section) observer.observe(section)
})
</script>

<template>
  <section class="stats-section">
    <div class="stats-bg"></div>
    <div class="container">
      <div class="stats-grid">
        <div 
          v-for="(stat, index) in stats" 
          :key="stat.key"
          class="stat-item"
        >
          <div class="stat-value">
            {{ animatedValues[index].toLocaleString() }}{{ stat.suffix }}
          </div>
          <div class="stat-label">{{ t(`stats.${stat.key}`) }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stats-section {
  position: relative;
  padding: 5rem 0;
  overflow: hidden;
}

.stats-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    var(--color-primary) 0%,
    var(--color-secondary) 100%
  );
}

.stats-bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.container {
  position: relative;
  z-index: 1;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.stat-item {
  text-align: center;
  color: white;
}

.stat-value {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 800;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, white 0%, rgba(255, 255, 255, 0.8) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  font-size: 1rem;
  opacity: 0.9;
  font-weight: 500;
  letter-spacing: 1px;
}

/* Responsive */
@media (max-width: 768px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem 1rem;
  }
  
  .stats-section {
    padding: 4rem 0;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 1rem;
  }
  
  .stat-value {
    font-size: 2rem;
  }
  
  .stat-label {
    font-size: 0.85rem;
  }
}
</style>
