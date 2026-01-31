<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const newsItems = [
  { id: 1, date: '2026/01/28', title: '114學年度日間部四技申請入學招生簡章公告', category: 'admission' },
  { id: 2, date: '2026/01/25', title: '本校榮獲教育部教學卓越計畫補助', category: 'honor' },
  { id: 3, date: '2026/01/20', title: '產學合作成果發表會圓滿成功', category: 'activity' },
  { id: 4, date: '2026/01/15', title: '國際交流：與日本姊妹校簽署合作備忘錄', category: 'international' },
  { id: 5, date: '2026/01/10', title: '寒假期間圖書館開放時間調整公告', category: 'announcement' },
  { id: 6, date: '2026/01/05', title: '113學年度第2學期註冊須知', category: 'announcement' }
]

const categories = ['all', 'admission', 'honor', 'activity', 'international', 'announcement']
</script>

<template>
  <div class="news-page">
    <div class="page-header">
      <div class="container position-relative">
        <h1>{{ t('news.title') }}</h1>
        <p class="mb-0">{{ t('about.subtitle') }}</p>
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
            :class="cat === 'all' ? 'btn-primary' : 'btn-outline-secondary'"
          >
            {{ t(`news.categories.${cat}`) }}
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
              <span class="badge bg-primary me-2">{{ t(`news.categories.${item.category}`) }}</span>
              <span>{{ item.title }}</span>
            </div>
            <small class="text-muted">{{ item.date }}</small>
          </a>
        </div>
        
        <!-- Pagination -->
        <nav class="mt-4">
          <ul class="pagination justify-content-center">
            <li class="page-item disabled"><a class="page-link" href="#">←</a></li>
            <li class="page-item active"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" href="#">→</a></li>
          </ul>
        </nav>
      </div>
    </section>
  </div>
</template>
