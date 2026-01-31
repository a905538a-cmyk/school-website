<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const features = [
  { key: 'teaching', icon: '🎓' },
  { key: 'industry', icon: '🔬' },
  { key: 'international', icon: '🌏' },
  { key: 'career', icon: '💼' }
]
</script>

<template>
  <section class="py-5 bg-light">
    <div class="container">
      <h2 class="text-center fw-bold mb-5">{{ t('features.title') }}</h2>
      <div class="row g-4">
        <div v-for="feature in features" :key="feature.key" class="col-md-6 col-lg-3">
          <div class="interactive-card text-center p-4 h-100">
            <div class="card-icon mb-3">{{ feature.icon }}</div>
            <h5 class="fw-bold">{{ t(`features.${feature.key}`) }}</h5>
            <p class="text-muted small mb-0">{{ t(`features.${feature.key}Desc`) }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
