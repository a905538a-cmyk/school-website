<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="about-page">
    <div class="page-header">
      <div class="container position-relative">
        <h1>{{ t('about.title') }}</h1>
        <p class="mb-0">{{ t('about.subtitle') }}</p>
      </div>
    </div>
    
    <section class="py-5">
      <div class="container">
        <div class="row align-items-center g-5">
          <div class="col-lg-6">
            <h2 class="fw-bold mb-4">{{ t('about.intro') }}</h2>
            <p class="lead text-muted">{{ t('about.introText1') }}</p>
            <p>{{ t('about.introText2') }}</p>
          </div>
          <div class="col-lg-6">
            <img src="https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80" class="img-fluid rounded-4 shadow" alt="校園風景">
          </div>
        </div>
      </div>
    </section>
    
    <section class="py-5 bg-light">
      <div class="container">
        <h2 class="fw-bold text-center mb-5">{{ t('about.visionTitle') }}</h2>
        <div class="row g-4">
          <div class="col-md-4">
            <div class="card border-0 shadow-sm h-100 text-center p-4">
              <div class="display-1 mb-3">🎯</div>
              <h5 class="fw-bold">{{ t('about.vision') }}</h5>
              <p class="text-muted mb-0">{{ t('about.visionText') }}</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card border-0 shadow-sm h-100 text-center p-4">
              <div class="display-1 mb-3">🚀</div>
              <h5 class="fw-bold">{{ t('about.mission') }}</h5>
              <p class="text-muted mb-0">{{ t('about.missionText') }}</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card border-0 shadow-sm h-100 text-center p-4">
              <div class="display-1 mb-3">💡</div>
              <h5 class="fw-bold">{{ t('about.values') }}</h5>
              <p class="text-muted mb-0">{{ t('about.valuesText') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
