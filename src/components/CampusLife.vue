<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const campusItems = [
  {
    key: 'learning',
    icon: '📖',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80'
  },
  {
    key: 'living',
    icon: '🏠',
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&q=80'
  },
  {
    key: 'network',
    icon: '🌐',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80'
  }
]
</script>

<template>
  <section class="campus-section">
    <div class="container">
      <h2 class="section-title">
        <span class="title-icon">🎓</span>
        {{ t('campus.title') }}
      </h2>
      
      <div class="campus-grid">
        <a 
          v-for="item in campusItems"
          :key="item.key"
          href="#"
          class="campus-card"
        >
          <div class="card-image" :style="{ backgroundImage: `url(${item.image})` }">
            <div class="card-overlay"></div>
            <div class="card-icon">{{ item.icon }}</div>
          </div>
          <div class="card-content">
            <h3 class="card-title">{{ t(`campus.${item.key}`) }}</h3>
            <p class="card-desc">{{ t(`campus.${item.key}Desc`) }}</p>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.campus-section {
  padding: 6rem 0;
  background: linear-gradient(180deg, var(--color-bg-secondary) 0%, white 100%);
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-title {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 3rem;
  color: var(--color-text);
}

.title-icon {
  font-size: 1.5rem;
}

.campus-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.campus-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  text-decoration: none;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.campus-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.card-image {
  position: relative;
  height: 200px;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(0, 51, 102, 0.7) 0%,
    rgba(0, 102, 153, 0.5) 100%
  );
}

.card-icon {
  position: relative;
  z-index: 1;
  font-size: 3rem;
  filter: drop-shadow(2px 4px 10px rgba(0, 0, 0, 0.3));
}

.card-content {
  padding: 1.5rem;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 0.5rem;
}

.card-desc {
  font-size: 0.9rem;
  color: var(--color-text-muted);
  line-height: 1.6;
}

/* Responsive */
@media (max-width: 1024px) {
  .campus-grid {
    grid-template-columns: 1fr;
    max-width: 500px;
    margin: 0 auto;
  }
}

@media (max-width: 640px) {
  .campus-section {
    padding: 4rem 0;
  }
  
  .container {
    padding: 0 1rem;
  }
  
  .section-title {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  
  .card-image {
    height: 160px;
  }
}
</style>
