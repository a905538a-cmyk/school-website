<script setup>
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'

const { t } = useI18n()

// 學術單位 - 類似台北城市科大的卡片式排列
const colleges = [
  { key: 'engineering', icon: '⚙️', color: 'blue', path: '/academic/engineering' },
  { key: 'management', icon: '📊', color: 'green', path: '/academic/management' },
  { key: 'humanities', icon: '📚', color: 'purple', path: '/academic/humanities' },
  { key: 'general', icon: '🎓', color: 'orange', path: '/academic/general' }
]

const departments = {
  engineering: ['機械工程系', '電機工程系', '資訊工程系', '建築系', '土木工程系'],
  management: ['企業管理系', '財務金融系', '行銷與流通管理系', '航空運輸管理系'],
  humanities: ['應用外語系', '觀光餐旅系', '數位媒體設計系'],
  general: ['通識教育中心', '體育室', '軍訓室']
}
</script>

<template>
  <div class="academic-page">
    <div class="page-header">
      <div class="container position-relative">
        <h1>{{ t('nav.academic') }}</h1>
        <p class="mb-0">{{ t('about.subtitle') }}</p>
      </div>
    </div>
    
    <section class="py-5">
      <div class="container">
        <!-- 學院卡片 -->
        <div class="row g-4 mb-5">
          <div v-for="college in colleges" :key="college.key" class="col-md-6 col-lg-3">
            <RouterLink :to="college.path" class="unit-card">
              <div class="unit-card-header" :class="college.color">
                <div class="unit-card-icon">{{ college.icon }}</div>
              </div>
              <div class="unit-card-body">
                <h5 class="unit-card-title">{{ t(`academicUnits.${college.key}`) }}</h5>
                <p class="unit-card-desc">{{ departments[college.key].length }} 個系所</p>
              </div>
            </RouterLink>
          </div>
        </div>

        <!-- 系所列表 -->
        <div v-for="college in colleges" :key="college.key" class="mb-5">
          <h4 class="fw-bold mb-3 d-flex align-items-center">
            <span class="me-2">{{ college.icon }}</span>
            {{ t(`academicUnits.${college.key}`) }}
          </h4>
          <div class="row g-3">
            <div v-for="dept in departments[college.key]" :key="dept" class="col-md-6 col-lg-4">
              <a href="#" class="d-block p-3 bg-white rounded-3 shadow-sm text-decoration-none text-dark hover-lift">
                <span class="me-2">→</span>{{ dept }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hover-lift {
  transition: all 0.3s ease;
}
.hover-lift:hover {
  transform: translateX(10px);
  background: #f8f9fa !important;
  color: var(--cust-primary) !important;
}
</style>
