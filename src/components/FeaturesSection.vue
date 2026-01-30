<script setup>
import { RouterLink } from 'vue-router'

const features = [
  {
    icon: '🎓',
    title: '優質教學',
    desc: '業界師資・實務教學・培育專業人才'
  },
  {
    icon: '🔬',
    title: '產學合作',
    desc: '與企業緊密合作・提供實習機會'
  },
  {
    icon: '🌏',
    title: '國際交流',
    desc: '姊妹校遍佈全球・拓展國際視野'
  },
  {
    icon: '💼',
    title: '就業保障',
    desc: '高就業率・校友網絡遍佈各產業'
  }
]
</script>

<template>
  <section class="py-5 bg-light">
    <div class="container">
      <h2 class="text-center fw-bold mb-5">為什麼選擇中華？</h2>
      <div class="row g-4">
        <div 
          v-for="(feature, index) in features" 
          :key="index"
          class="col-md-6 col-lg-3"
        >
          <div class="interactive-card text-center p-4 h-100">
            <div class="card-icon mb-3">{{ feature.icon }}</div>
            <h5 class="fw-bold">{{ feature.title }}</h5>
            <p class="text-muted small mb-0">{{ feature.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
