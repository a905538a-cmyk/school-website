<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const admissionTypes = [
  {
    title: '學士班',
    icon: '🎓',
    items: ['繁星推薦', '個人申請', '考試分發', '特殊選才']
  },
  {
    title: '碩士班',
    icon: '📖',
    items: ['甄試入學', '考試入學', '在職專班']
  },
  {
    title: '博士班',
    icon: '🔬',
    items: ['甄試入學', '考試入學', '逕行修讀']
  },
  {
    title: '國際生',
    icon: '🌍',
    items: ['學位班', '交換學生', '短期研習']
  }
]
</script>

<template>
  <div class="page admissions-page">
    <div class="page-hero">
      <div class="container">
        <h1>{{ t('nav.admissions') }}</h1>
        <p>開啟你的未來之路</p>
      </div>
    </div>
    
    <div class="page-content">
      <div class="container">
        <div class="admission-grid">
          <div v-for="type in admissionTypes" :key="type.title" class="admission-card">
            <div class="card-icon">{{ type.icon }}</div>
            <h3>{{ type.title }}</h3>
            <ul>
              <li v-for="item in type.items" :key="item">
                <a href="#">{{ item }}</a>
              </li>
            </ul>
          </div>
        </div>
        
        <section class="info-section">
          <h2>招生時程</h2>
          <div class="timeline">
            <div class="timeline-item">
              <div class="timeline-date">2026/03</div>
              <div class="timeline-content">
                <h4>繁星推薦</h4>
                <p>報名與資料繳交</p>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-date">2026/04</div>
              <div class="timeline-content">
                <h4>個人申請</h4>
                <p>第一階段篩選</p>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-date">2026/05</div>
              <div class="timeline-content">
                <h4>個人申請</h4>
                <p>第二階段面試</p>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-date">2026/08</div>
              <div class="timeline-content">
                <h4>考試分發</h4>
                <p>放榜與報到</p>
              </div>
            </div>
          </div>
        </section>
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

.admission-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-bottom: 4rem;
}

.admission-card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.admission-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

.card-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.admission-card h3 {
  margin-bottom: 1rem;
  color: var(--color-primary);
}

.admission-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.admission-card li {
  padding: 0.5rem 0;
}

.admission-card a {
  color: var(--color-text-muted);
  text-decoration: none;
}

.admission-card a:hover {
  color: var(--color-primary);
}

.info-section h2 {
  font-size: 1.75rem;
  margin-bottom: 2rem;
  color: var(--color-primary);
}

.timeline {
  display: flex;
  gap: 2rem;
}

.timeline-item {
  flex: 1;
  background: var(--color-bg-secondary);
  border-radius: 12px;
  padding: 1.5rem;
  position: relative;
}

.timeline-date {
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 0.5rem;
}

.timeline-content h4 {
  margin-bottom: 0.25rem;
}

.timeline-content p {
  color: var(--color-text-muted);
  font-size: 0.9rem;
}

@media (max-width: 1024px) {
  .admission-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .timeline {
    flex-direction: column;
  }
}

@media (max-width: 640px) {
  .admission-grid {
    grid-template-columns: 1fr;
  }
}
</style>
