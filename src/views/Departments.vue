<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const colleges = [
  {
    name: '理學院',
    nameEn: 'College of Science',
    icon: '🔬',
    departments: ['數學系', '物理學系', '化學系', '地球科學系']
  },
  {
    name: '工學院',
    nameEn: 'College of Engineering',
    icon: '⚙️',
    departments: ['機械工程學系', '電機工程學系', '資訊工程學系', '土木工程學系']
  },
  {
    name: '文學院',
    nameEn: 'College of Liberal Arts',
    icon: '📚',
    departments: ['中國文學系', '外國語文學系', '歷史學系', '哲學系']
  },
  {
    name: '管理學院',
    nameEn: 'College of Management',
    icon: '📊',
    departments: ['企業管理學系', '會計學系', '財務金融學系', '國際企業學系']
  },
  {
    name: '醫學院',
    nameEn: 'College of Medicine',
    icon: '🏥',
    departments: ['醫學系', '護理學系', '藥學系', '公共衛生學系']
  },
  {
    name: '生命科學院',
    nameEn: 'College of Life Science',
    icon: '🧬',
    departments: ['生命科學系', '生物化學系', '植物學系', '動物學系']
  }
]
</script>

<template>
  <div class="page departments-page">
    <div class="page-hero">
      <div class="container">
        <h1>{{ t('nav.departments') }}</h1>
        <p>探索我們多元的學術領域</p>
      </div>
    </div>
    
    <div class="page-content">
      <div class="container">
        <div class="colleges-grid">
          <div v-for="college in colleges" :key="college.name" class="college-card">
            <div class="college-header">
              <span class="college-icon">{{ college.icon }}</span>
              <div>
                <h3 class="college-name">{{ college.name }}</h3>
                <span class="college-name-en">{{ college.nameEn }}</span>
              </div>
            </div>
            <ul class="departments-list">
              <li v-for="dept in college.departments" :key="dept">
                <a href="#">{{ dept }}</a>
              </li>
            </ul>
          </div>
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

.colleges-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.college-card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.college-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

.college-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid var(--color-bg-secondary);
}

.college-icon {
  font-size: 2.5rem;
}

.college-name {
  font-size: 1.25rem;
  margin-bottom: 0.25rem;
}

.college-name-en {
  font-size: 0.8rem;
  color: var(--color-text-muted);
}

.departments-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.departments-list li {
  padding: 0.5rem 0;
}

.departments-list a {
  color: var(--color-text-muted);
  text-decoration: none;
  transition: color 0.2s ease;
}

.departments-list a:hover {
  color: var(--color-primary);
}

@media (max-width: 1024px) {
  .colleges-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .colleges-grid {
    grid-template-columns: 1fr;
  }
}
</style>
