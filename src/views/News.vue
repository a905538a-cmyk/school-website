<script setup>
const newsItems = [
  { id: 1, date: '2026/01/28', title: '114學年度日間部四技申請入學招生簡章公告', category: '招生資訊' },
  { id: 2, date: '2026/01/25', title: '本校榮獲教育部教學卓越計畫補助', category: '榮譽榜' },
  { id: 3, date: '2026/01/20', title: '產學合作成果發表會圓滿成功', category: '校園活動' },
  { id: 4, date: '2026/01/15', title: '國際交流：與日本姊妹校簽署合作備忘錄', category: '國際交流' },
  { id: 5, date: '2026/01/10', title: '寒假期間圖書館開放時間調整公告', category: '行政公告' },
  { id: 6, date: '2026/01/05', title: '113學年度第2學期註冊須知', category: '教務公告' }
]

const categories = ['全部', '招生資訊', '榮譽榜', '校園活動', '國際交流', '行政公告']
</script>

<template>
  <div class="news-page">
    <div class="page-header">
      <div class="container position-relative">
        <h1>最新消息</h1>
        <p class="mb-0">掌握校園最新動態</p>
      </div>
    </div>
    
    <section class="py-5">
      <div class="container">
        <!-- Categories -->
        <div class="d-flex flex-wrap gap-2 mb-4">
          <button 
            v-for="cat in categories" 
            :key="cat"
            class="btn btn-sm"
            :class="cat === '全部' ? 'btn-primary' : 'btn-outline-secondary'"
          >
            {{ cat }}
          </button>
        </div>
        
        <!-- News List -->
        <div class="list-group">
          <a 
            v-for="item in newsItems" 
            :key="item.id"
            href="#" 
            class="list-group-item list-group-item-action d-flex justify-content-between align-items-center py-3"
          >
            <div>
              <span class="badge bg-primary me-2">{{ item.category }}</span>
              <span>{{ item.title }}</span>
            </div>
            <small class="text-muted">{{ item.date }}</small>
          </a>
        </div>
        
        <!-- Pagination -->
        <nav class="mt-4">
          <ul class="pagination justify-content-center">
            <li class="page-item disabled"><a class="page-link" href="#">上一頁</a></li>
            <li class="page-item active"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" href="#">下一頁</a></li>
          </ul>
        </nav>
      </div>
    </section>
  </div>
</template>
