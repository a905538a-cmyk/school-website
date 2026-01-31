<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const slides = [
  { id: 1, image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=1920&q=80', titleKey: 'hero.welcome', subtitleKey: 'hero.subtitle' },
  { id: 2, image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&q=80', titleKey: 'hero.slide2Title', subtitleKey: 'hero.slide2Subtitle' },
  { id: 3, image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1920&q=80', titleKey: 'hero.slide3Title', subtitleKey: 'hero.slide3Subtitle' }
]

const currentSlide = ref(0)
let slideInterval = null

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length
}

const goToSlide = (index) => {
  currentSlide.value = index
}

onMounted(() => {
  slideInterval = setInterval(nextSlide, 5000)
})

onUnmounted(() => {
  if (slideInterval) clearInterval(slideInterval)
})
</script>

<template>
  <section class="hero-section">
    <div id="heroCarousel" class="carousel slide h-100" data-bs-ride="carousel">
      <div class="carousel-inner h-100">
        <div 
          v-for="(slide, index) in slides" 
          :key="slide.id"
          class="carousel-item h-100"
          :class="{ active: index === 0 }"
        >
          <div class="hero-slide" :style="{ backgroundImage: `url(${slide.image})` }">
            <div class="hero-overlay"></div>
          </div>
        </div>
      </div>

      <div class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
        <div class="hero-content text-center px-3">
          <h1 class="hero-title mb-3">{{ t(slides[currentSlide].titleKey) }}</h1>
          <p class="hero-subtitle mb-4">{{ t(slides[currentSlide].subtitleKey) }}</p>
          <div class="d-flex gap-3 justify-content-center flex-wrap">
            <a href="/admissions" class="btn hero-btn hero-btn-primary">{{ t('hero.apply') }}</a>
            <a href="/about" class="btn hero-btn hero-btn-outline">{{ t('hero.explore') }}</a>
          </div>
        </div>
      </div>

      <div class="carousel-indicators">
        <button 
          v-for="(slide, index) in slides" 
          :key="slide.id"
          type="button"
          :class="{ active: index === currentSlide }"
          @click="goToSlide(index)"
        ></button>
      </div>
    </div>

    <div class="scroll-indicator">
      <small class="d-block mb-2">SCROLL</small>
      <i class="bi bi-chevron-down"></i>
    </div>
  </section>
</template>
