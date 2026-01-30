<script setup>
const adminUnits = [
  { name: '教務處', icon: '📖', desc: '負責課程規劃、學籍管理、成績管理等事務' },
  { name: '學務處', icon: '👥', desc: '負責學生輔導、社團活動、生活事務等' },
  { name: '總務處', icon: '🏛️', desc: '負責校園設施維護、採購、財務等事務' },
  { name: '研發處', icon: '🔬', desc: '負責研究計畫、產學合作、學術交流等' },
  { name: '圖書館', icon: '📚', desc: '提供圖書資源、數位學習、閱讀空間等服務' },
  { name: '資訊中心', icon: '💻', desc: '負責校園網路、資訊系統、技術支援等' },
  { name: '國際處', icon: '🌍', desc: '負責國際交流、外籍生服務、姊妹校合作等' },
  { name: '進修部', icon: '🌙', desc: '負責進修學制、推廣教育等事務' }
]
</script>

<template>
  <div class="admin-page">
    <div class="page-header">
      <div class="container position-relative">
        <h1>行政單位</h1>
        <p class="mb-0">服務全校師生的行政團隊</p>
      </div>
    </div>
    
    <section class="py-5">
      <div class="container">
        <div class="row g-4">
          <div v-for="unit in adminUnits" :key="unit.name" class="col-md-6 col-lg-3">
            <div class="card border-0 shadow-sm h-100 text-center p-4 interactive-card">
              <div class="display-3 mb-3">{{ unit.icon }}</div>
              <h5 class="fw-bold">{{ unit.name }}</h5>
              <p class="text-muted small mb-0">{{ unit.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
