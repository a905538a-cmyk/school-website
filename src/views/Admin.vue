<script setup>
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'

const { t } = useI18n()

// 行政單位 - 卡片式排列
const adminUnits = [
  { key: 'academicAffairs', icon: '📖', color: 'blue', desc: '課程規劃、學籍、成績管理' },
  { key: 'studentAffairs', icon: '👥', color: 'green', desc: '學生輔導、社團、生活事務' },
  { key: 'generalAffairs', icon: '🏛️', color: 'orange', desc: '設施維護、採購、財務管理' },
  { key: 'research', icon: '🔬', color: 'purple', desc: '研究計畫、產學合作、學術交流' },
  { key: 'library', icon: '📚', color: 'teal', desc: '圖書資源、數位學習、閱讀空間' },
  { key: 'itCenter', icon: '💻', color: 'pink', desc: '校園網路、資訊系統、技術支援' },
  { key: 'international', icon: '🌍', color: 'indigo', desc: '國際交流、外籍生服務、姊妹校' },
  { key: 'extension', icon: '🌙', color: 'red', desc: '進修學制、推廣教育、終身學習' }
]
</script>

<template>
  <div class="admin-page">
    <div class="page-header">
      <div class="container position-relative">
        <h1>{{ t('nav.admin') }}</h1>
        <p class="mb-0">服務全校師生的行政團隊</p>
      </div>
    </div>
    
    <section class="py-5">
      <div class="container">
        <div class="row g-4">
          <div v-for="unit in adminUnits" :key="unit.key" class="col-md-6 col-lg-3">
            <a href="#" class="unit-card">
              <div class="unit-card-header" :class="unit.color">
                <div class="unit-card-icon">{{ unit.icon }}</div>
              </div>
              <div class="unit-card-body">
                <h5 class="unit-card-title">{{ t(`adminUnits.${unit.key}`) || unit.key }}</h5>
                <p class="unit-card-desc">{{ unit.desc }}</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
