<script setup>
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const newsItems = [
  { id: 1, date: '2026/01/28', titleKey: 'news.item1', category: 'admission', image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&q=80' },
  { id: 2, date: '2026/01/25', titleKey: 'news.item2', category: 'honor', image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&q=80' },
  { id: 3, date: '2026/01/20', titleKey: 'news.item3', category: 'activity', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=80' },
  { id: 4, date: '2026/01/15', titleKey: 'news.item4', category: 'international', image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&q=80' }
]

// 假資料的標題（暫時不翻譯）
const newsTitles = {
  'news.item1': '114學年度日間部四技申請入學招生簡章公告',
  'news.item2': '本校榮獲教育部教學卓越計畫補助',
  'news.item3': '產學合作成果發表會圓滿成功',
  'news.item4': '國際交流：與日本姊妹校簽署合作備忘錄'
}
</script>

<template>
  <section class="py-5">
    <div class="container">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <h2 class="fw-bold mb-0">
          <span class="me-2">📰</span>{{ t('news.title') }}
        </h2>
        <RouterLink to="/news" class="btn btn-outline-primary">
          {{ t('news.more') }} →
        </RouterLink>
      </div>
      
      <div class="row g-4">
        <div v-for="item in newsItems" :key="item.id" class="col-md-6 col-lg-3">
          <div class="card news-card h-100 border-0 shadow-sm">
            <div class="card-img-wrapper position-relative">
              <img :src="item.image" class="card-img-top" :alt="newsTitles[item.titleKey]">
              <span class="news-category">{{ t(`news.categories.${item.category}`) }}</span>
            </div>
            <div class="card-body">
              <small class="text-muted">{{ item.date }}</small>
              <h6 class="card-title mt-2 mb-3">{{ newsTitles[item.titleKey] }}</h6>
              <RouterLink :to="`/news/${item.id}`" class="stretched-link text-primary text-decoration-none small">
                {{ t('news.readMore') }} →
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
