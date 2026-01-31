<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const stats = [
  { key: 'students', value: 8000, suffix: '+' },
  { key: 'faculty', value: 350, suffix: '+' },
  { key: 'departments', value: 25, suffix: '' },
  { key: 'years', value: 57, suffix: '' }
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
  <section class="stats-section py-5">
    <div class="container position-relative">
      <div class="row g-4">
        <div v-for="(stat, index) in stats" :key="stat.key" class="col-6 col-md-3">
          <div class="stat-item">
            <span class="stat-number">{{ animatedValues[index].toLocaleString() }}{{ stat.suffix }}</span>
            <span class="stat-label">{{ t(`stats.${stat.key}`) }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
