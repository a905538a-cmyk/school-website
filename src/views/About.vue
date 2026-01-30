<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="page about-page">
    <div class="page-hero">
      <div class="container">
        <h1>{{ t('nav.about') }}</h1>
        <p>了解我們的歷史、願景與使命</p>
      </div>
    </div>
    
    <div class="page-content">
      <div class="container">
        <section class="content-section">
          <h2>學校簡介</h2>
          <p>未來大學成立於 1930 年，是一所以培育卓越人才為目標的綜合性大學。我們致力於提供優質的教育環境，培養學生的創新思維與國際視野。</p>
          <p>校園佔地 200 公頃，擁有現代化的教學設施、世界級的研究中心，以及豐富的學術資源。我們的教授團隊來自世界各地，在各自領域中都是頂尖的專家學者。</p>
        </section>
        
        <section class="content-section">
          <h2>願景與使命</h2>
          <div class="vision-cards">
            <div class="vision-card">
              <div class="card-icon">🎯</div>
              <h3>願景</h3>
              <p>成為亞太地區最具影響力的研究型大學，引領知識創新與社會進步。</p>
            </div>
            <div class="vision-card">
              <div class="card-icon">🚀</div>
              <h3>使命</h3>
              <p>培育具有國際視野、創新能力與社會責任感的未來領袖。</p>
            </div>
            <div class="vision-card">
              <div class="card-icon">💡</div>
              <h3>價值</h3>
              <p>追求卓越、尊重多元、鼓勵創新、服務社會。</p>
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

.content-section {
  margin-bottom: 4rem;
}

.content-section h2 {
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
  color: var(--color-primary);
}

.content-section p {
  line-height: 1.8;
  color: var(--color-text-muted);
  margin-bottom: 1rem;
}

.vision-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 2rem;
}

.vision-card {
  background: var(--color-bg-secondary);
  padding: 2rem;
  border-radius: 16px;
  text-align: center;
}

.card-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.vision-card h3 {
  margin-bottom: 0.75rem;
  color: var(--color-text);
}

.vision-card p {
  font-size: 0.95rem;
}

@media (max-width: 768px) {
  .vision-cards {
    grid-template-columns: 1fr;
  }
}
</style>
