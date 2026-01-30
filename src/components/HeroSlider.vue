<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1920&q=80',
    titleKey: 'hero.welcome',
    subtitleKey: 'hero.subtitle'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&q=80',
    title: '2026 招生中',
    subtitle: '探索無限可能，開創美好未來'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=1920&q=80',
    title: '國際交流',
    subtitle: '與全球頂尖大學合作，拓展國際視野'
  }
]

const currentSlide = ref(0)
let slideInterval = null

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length
}

const goToSlide = (index) => {
  currentSlide.value = index
}

onMounted(() => {
  slideInterval = setInterval(nextSlide, 6000)
})

onUnmounted(() => {
  if (slideInterval) clearInterval(slideInterval)
})
</script>

<template>
  <section class="hero">
    <!-- Slides -->
    <div class="slides-container">
      <TransitionGroup name="fade">
        <div
          v-for="(slide, index) in slides"
          :key="slide.id"
          v-show="index === currentSlide"
          class="slide"
          :style="{ backgroundImage: `url(${slide.image})` }"
        >
          <div class="slide-overlay"></div>
          <div class="slide-content">
            <h1 class="slide-title">
              {{ slide.titleKey ? t(slide.titleKey) : slide.title }}
            </h1>
            <p class="slide-subtitle">
              {{ slide.subtitleKey ? t(slide.subtitleKey) : slide.subtitle }}
            </p>
            <div class="slide-buttons">
              <button class="btn btn-primary">{{ t('hero.explore') }}</button>
              <button class="btn btn-outline">{{ t('hero.apply') }}</button>
            </div>
          </div>
        </div>
      </TransitionGroup>
    </div>

    <!-- Navigation Arrows -->
    <button class="nav-arrow prev" @click="prevSlide" aria-label="Previous slide">
      <svg viewBox="0 0 24 24" width="24" height="24">
        <path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
      </svg>
    </button>
    <button class="nav-arrow next" @click="nextSlide" aria-label="Next slide">
      <svg viewBox="0 0 24 24" width="24" height="24">
        <path fill="currentColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
      </svg>
    </button>

    <!-- Dots -->
    <div class="dots">
      <button
        v-for="(slide, index) in slides"
        :key="slide.id"
        class="dot"
        :class="{ active: index === currentSlide }"
        @click="goToSlide(index)"
        :aria-label="`Go to slide ${index + 1}`"
      ></button>
    </div>

    <!-- Scroll Indicator -->
    <div class="scroll-indicator">
      <span>Scroll Down</span>
      <div class="scroll-arrow">
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path fill="currentColor" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
        </svg>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  height: 100vh;
  min-height: 600px;
  overflow: hidden;
}

/* Slides */
.slides-container {
  position: absolute;
  inset: 0;
}

.slide {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.slide-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(0, 51, 102, 0.8) 0%,
    rgba(0, 102, 153, 0.6) 100%
  );
}

.slide-content {
  position: relative;
  z-index: 1;
  text-align: center;
  color: white;
  padding: 2rem;
  max-width: 800px;
}

.slide-title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800;
  margin-bottom: 1rem;
  line-height: 1.2;
  text-shadow: 2px 4px 20px rgba(0, 0, 0, 0.3);
}

.slide-subtitle {
  font-size: clamp(1.1rem, 2.5vw, 1.5rem);
  opacity: 0.9;
  margin-bottom: 2rem;
  font-weight: 300;
}

.slide-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

/* Buttons */
.btn {
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: none;
}

.btn-primary {
  background: linear-gradient(135deg, var(--color-accent) 0%, #e67e22 100%);
  color: white;
  border: none;
  box-shadow: 0 4px 20px rgba(243, 156, 18, 0.4);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 30px rgba(243, 156, 18, 0.5);
}

.btn-outline {
  background: transparent;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.8);
}

.btn-outline:hover {
  background: white;
  color: var(--color-primary);
}

/* Navigation Arrows */
.nav-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
  z-index: 10;
}

.nav-arrow:hover {
  background: rgba(255, 255, 255, 0.3);
}

.nav-arrow.prev {
  left: 2rem;
}

.nav-arrow.next {
  right: 2rem;
}

/* Dots */
.dots {
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.75rem;
  z-index: 10;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.4);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.dot:hover {
  background: rgba(255, 255, 255, 0.6);
}

.dot.active {
  background: white;
  transform: scale(1.2);
}

/* Scroll Indicator */
.scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  text-align: center;
  z-index: 10;
  opacity: 0.8;
}

.scroll-indicator span {
  font-size: 0.75rem;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.scroll-arrow {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(8px);
  }
  60% {
    transform: translateY(4px);
  }
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .nav-arrow {
    width: 40px;
    height: 40px;
  }
  
  .nav-arrow.prev {
    left: 1rem;
  }
  
  .nav-arrow.next {
    right: 1rem;
  }
  
  .dots {
    bottom: 80px;
  }
}
</style>
