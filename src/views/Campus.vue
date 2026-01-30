<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="page campus-page">
    <div class="page-hero">
      <div class="container">
        <h1>{{ t('nav.campus') }}</h1>
        <p>豐富多彩的校園生活</p>
      </div>
    </div>
    
    <div class="page-content">
      <div class="container">
        <div class="campus-grid">
          <a href="#" class="campus-card">
            <div class="card-image" style="background-image: url(https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80)"></div>
            <div class="card-content">
              <h3>📚 {{ t('campus.learning') }}</h3>
              <p>{{ t('campus.learningDesc') }}</p>
            </div>
          </a>
          
          <a href="#" class="campus-card">
            <div class="card-image" style="background-image: url(https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&q=80)"></div>
            <div class="card-content">
              <h3>🏠 {{ t('campus.living') }}</h3>
              <p>{{ t('campus.livingDesc') }}</p>
            </div>
          </a>
          
          <a href="#" class="campus-card">
            <div class="card-image" style="background-image: url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80)"></div>
            <div class="card-content">
              <h3>🌐 {{ t('campus.network') }}</h3>
              <p>{{ t('campus.networkDesc') }}</p>
            </div>
          </a>
          
          <a href="#" class="campus-card">
            <div class="card-image" style="background-image: url(https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80)"></div>
            <div class="card-content">
              <h3>🏃 體育活動</h3>
              <p>運動場館、體育課程與校隊資訊</p>
            </div>
          </a>
          
          <a href="#" class="campus-card">
            <div class="card-image" style="background-image: url(https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&q=80)"></div>
            <div class="card-content">
              <h3>🎨 藝文活動</h3>
              <p>展覽、表演與文化活動資訊</p>
            </div>
          </a>
          
          <a href="#" class="campus-card">
            <div class="card-image" style="background-image: url(https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80)"></div>
            <div class="card-content">
              <h3>👥 社團活動</h3>
              <p>學生社團與課外活動資訊</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page {
  padding-top: 80px;
}

.page-hero {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
  color: white;
  padding: 4rem 0;
  text-align: center;
}

.page-hero h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.page-hero p {
  opacity: 0.9;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.page-content {
  padding: 4rem 0;
}

.campus-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.campus-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  text-decoration: none;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.campus-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

.card-image {
  height: 160px;
  background-size: cover;
  background-position: center;
}

.card-content {
  padding: 1.5rem;
}

.card-content h3 {
  margin-bottom: 0.5rem;
  color: var(--color-text);
}

.card-content p {
  color: var(--color-text-muted);
  font-size: 0.9rem;
  line-height: 1.5;
}

@media (max-width: 1024px) {
  .campus-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .campus-grid {
    grid-template-columns: 1fr;
  }
}
</style>
