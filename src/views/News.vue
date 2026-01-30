<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const newsItems = [
  {
    id: 1,
    date: '2026/01/28',
    title: '諾貝爾化學獎得主蒞校演講「點擊化學」引領的思維革命',
    category: '焦點新聞',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&q=80'
  },
  {
    id: 2,
    date: '2026/01/28',
    title: '本校醫院完成首例「藥物難治型癲癇」最新型深腦刺激系統植入',
    category: '醫療新知',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&q=80'
  },
  {
    id: 3,
    date: '2026/01/28',
    title: '化癌細胞「漂流瓶」為抗癌利器：程吉安團隊解碼腫瘤胞外體',
    category: '研究突破',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400&q=80'
  },
  {
    id: 4,
    date: '2026/01/16',
    title: '諾貝爾物理學獎得主開講：剖析「信任科學」的動態修正過程',
    category: '學術講座',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&q=80'
  },
  {
    id: 5,
    date: '2026/01/14',
    title: '全臺首度導入「雙腔無導線心律調節器」開啟治療新紀元',
    category: '醫療新知',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=400&q=80'
  },
  {
    id: 6,
    date: '2025/12/31',
    title: '本校代表隊勇奪國際學生超級電腦叢集競賽總冠軍',
    category: '榮譽榜',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80'
  }
]
</script>

<template>
  <div class="page news-page">
    <div class="page-hero">
      <div class="container">
        <h1>{{ t('news.title') }}</h1>
        <p>掌握校園最新動態</p>
      </div>
    </div>
    
    <div class="page-content">
      <div class="container">
        <div class="news-grid">
          <article v-for="item in newsItems" :key="item.id" class="news-card">
            <div class="card-image" :style="{ backgroundImage: `url(${item.image})` }">
              <span class="category">{{ item.category }}</span>
            </div>
            <div class="card-body">
              <span class="date">{{ item.date }}</span>
              <h3 class="title">{{ item.title }}</h3>
              <a href="#" class="read-more">{{ t('common.readMore') }} →</a>
            </div>
          </article>
        </div>
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

.news-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.news-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.news-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

.card-image {
  height: 200px;
  background-size: cover;
  background-position: center;
  position: relative;
}

.category {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: var(--color-primary);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 50px;
  font-size: 0.8rem;
}

.card-body {
  padding: 1.5rem;
}

.date {
  color: var(--color-text-muted);
  font-size: 0.85rem;
}

.title {
  margin: 0.5rem 0 1rem;
  font-size: 1.1rem;
  line-height: 1.5;
  color: var(--color-text);
}

.read-more {
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 500;
}

@media (max-width: 1024px) {
  .news-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .news-grid {
    grid-template-columns: 1fr;
  }
}
</style>
