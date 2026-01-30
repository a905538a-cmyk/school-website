<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const quickLinks = [
  { key: 'studentPortal', icon: '👨‍🎓', color: '#3498db' },
  { key: 'facultyPortal', icon: '👨‍🏫', color: '#2ecc71' },
  { key: 'library', icon: '📚', color: '#9b59b6' },
  { key: 'calendar', icon: '📅', color: '#e74c3c' },
  { key: 'courses', icon: '📝', color: '#f39c12' },
  { key: 'email', icon: '📧', color: '#1abc9c' }
]
</script>

<template>
  <section class="quick-links-section">
    <div class="container">
      <h2 class="section-title">{{ t('quickLinks.title') }}</h2>
      
      <div class="links-grid">
        <a 
          v-for="link in quickLinks" 
          :key="link.key"
          href="#"
          class="link-card"
        >
          <div class="link-icon" :style="{ background: `${link.color}15`, color: link.color }">
            {{ link.icon }}
          </div>
          <span class="link-name">{{ t(`quickLinks.${link.key}`) }}</span>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.quick-links-section {
  padding: 4rem 0;
  background: white;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-title {
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 3rem;
  color: var(--color-text);
}

.links-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1.5rem;
}

.link-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem 1rem;
  background: var(--color-bg-secondary);
  border-radius: 16px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.link-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.link-icon {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
  border-radius: 16px;
  transition: all 0.3s ease;
}

.link-card:hover .link-icon {
  transform: scale(1.1);
}

.link-name {
  font-weight: 500;
  color: var(--color-text);
  text-align: center;
  font-size: 0.9rem;
}

/* Responsive */
@media (max-width: 1024px) {
  .links-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 640px) {
  .quick-links-section {
    padding: 3rem 0;
  }
  
  .container {
    padding: 0 1rem;
  }
  
  .links-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  
  .link-card {
    padding: 1.5rem 1rem;
  }
  
  .section-title {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
}
</style>
