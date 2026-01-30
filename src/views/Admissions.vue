<script setup>
const admissionTypes = [
  { title: '四技申請入學', icon: '📝', deadline: '2026/03/31' },
  { title: '四技甄選入學', icon: '🎯', deadline: '2026/05/15' },
  { title: '四技聯合登記分發', icon: '📊', deadline: '2026/07/20' },
  { title: '碩士班招生', icon: '🎓', deadline: '2026/04/30' },
  { title: '進修部招生', icon: '🌙', deadline: '2026/08/15' },
  { title: '外國學生申請', icon: '🌍', deadline: '2026/05/31' }
]
</script>

<template>
  <div class="admissions-page">
    <div class="page-header">
      <div class="container position-relative">
        <h1>招生資訊</h1>
        <p class="mb-0">加入中華・開啟美好未來</p>
      </div>
    </div>
    
    <section class="py-5">
      <div class="container">
        <div class="row g-4 mb-5">
          <div v-for="item in admissionTypes" :key="item.title" class="col-md-6 col-lg-4">
            <div class="card border-0 shadow-sm h-100 interactive-card">
              <div class="card-body text-center p-4">
                <div class="display-3 mb-3">{{ item.icon }}</div>
                <h5 class="fw-bold">{{ item.title }}</h5>
                <p class="text-muted small">報名截止：{{ item.deadline }}</p>
                <a href="#" class="btn btn-outline-primary btn-sm">查看簡章</a>
              </div>
            </div>
          </div>
        </div>
        
        <div class="alert alert-info">
          <h5 class="alert-heading">📢 招生諮詢</h5>
          <p class="mb-0">如有任何招生相關問題，歡迎來電洽詢：(02) 2782-1862 分機 211-215</p>
        </div>
      </div>
    </section>
  </div>
</template>
