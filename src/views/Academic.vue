<script setup>
const colleges = [
  {
    name: '工學院',
    nameEn: 'College of Engineering',
    icon: '⚙️',
    departments: ['機械工程系', '電機工程系', '資訊工程系', '建築系', '土木工程系']
  },
  {
    name: '管理學院',
    nameEn: 'College of Management',
    icon: '📊',
    departments: ['企業管理系', '財務金融系', '行銷與流通管理系', '航空運輸管理系']
  },
  {
    name: '人文社會學院',
    nameEn: 'College of Humanities',
    icon: '📚',
    departments: ['應用外語系', '觀光餐旅系', '數位媒體設計系']
  }
]
</script>

<template>
  <div class="academic-page">
    <div class="page-header">
      <div class="container position-relative">
        <h1>學術單位</h1>
        <p class="mb-0">探索我們多元的學術領域</p>
      </div>
    </div>
    
    <section class="py-5">
      <div class="container">
        <div class="row g-4">
          <div v-for="college in colleges" :key="college.name" class="col-lg-4">
            <div class="card border-0 shadow-sm h-100">
              <div class="card-header bg-primary text-white text-center py-4">
                <div class="display-4 mb-2">{{ college.icon }}</div>
                <h4 class="mb-0">{{ college.name }}</h4>
                <small>{{ college.nameEn }}</small>
              </div>
              <div class="card-body">
                <ul class="list-group list-group-flush">
                  <li v-for="dept in college.departments" :key="dept" class="list-group-item border-0 py-2">
                    <a href="#" class="text-decoration-none text-dark">
                      → {{ dept }}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.bg-primary {
  background: var(--cust-gradient) !important;
}
</style>
