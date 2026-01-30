<script setup>
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'

const { t, locale } = useI18n()

// 假資料 - 之後會從 API 取得
const newsItems = [
  {
    id: 1,
    date: '2026/01/28',
    title: {
      'zh-TW': '諾貝爾化學獎得主蒞校演講「點擊化學」引領的思維革命',
      en: 'Nobel Laureate in Chemistry Delivers Lecture on Click Chemistry Revolution',
      vi: 'Người đoạt giải Nobel Hóa học thuyết trình về Cách mạng Hóa học Click'
    },
    category: 'spotlight'
  },
  {
    id: 2,
    date: '2026/01/28',
    title: {
      'zh-TW': '本校醫院完成首例「藥物難治型癲癇」最新型深腦刺激系統植入',
      en: 'University Hospital Completes First Deep Brain Stimulation for Drug-Resistant Epilepsy',
      vi: 'Bệnh viện hoàn thành ca kích thích não sâu đầu tiên cho bệnh động kinh kháng thuốc'
    },
    category: 'spotlight'
  },
  {
    id: 3,
    date: '2026/01/28',
    title: {
      'zh-TW': '化癌細胞「漂流瓶」為抗癌利器：程吉安團隊解碼腫瘤胞外體',
      en: 'Turning Cancer Cell "Drift Bottles" into Anti-Cancer Weapons: Team Decodes Tumor Exosomes',
      vi: 'Biến "chai trôi" tế bào ung thư thành vũ khí chống ung thư'
    },
    category: 'research'
  },
  {
    id: 4,
    date: '2026/01/16',
    title: {
      'zh-TW': '諾貝爾物理學獎得主開講：剖析「信任科學」的動態修正過程',
      en: 'Nobel Laureate in Physics Speaks on "Trusting Science" and Dynamic Correction Process',
      vi: 'Người đoạt giải Nobel Vật lý nói về "Tin tưởng Khoa học"'
    },
    category: 'lecture'
  },
  {
    id: 5,
    date: '2026/01/14',
    title: {
      'zh-TW': '全臺首度導入「雙腔無導線心律調節器」開啟治療新紀元',
      en: 'First Dual-Chamber Leadless Pacemaker Implantation Opens New Era of Treatment',
      vi: 'Cấy máy tạo nhịp tim không dây đầu tiên mở ra kỷ nguyên điều trị mới'
    },
    category: 'medical'
  },
  {
    id: 6,
    date: '2025/12/31',
    title: {
      'zh-TW': '本校代表隊勇奪國際學生超級電腦叢集競賽總冠軍',
      en: 'University Team Wins International Student Cluster Competition Championship',
      vi: 'Đội tuyển trường giành chức vô địch Cuộc thi Cluster Quốc tế'
    },
    category: 'achievement'
  }
]

const getLocalizedTitle = (item) => {
  return item.title[locale.value] || item.title['zh-TW']
}

const getCategoryColor = (category) => {
  const colors = {
    spotlight: 'var(--color-primary)',
    research: 'var(--color-success)',
    lecture: 'var(--color-accent)',
    medical: '#e74c3c',
    achievement: '#9b59b6'
  }
  return colors[category] || 'var(--color-primary)'
}
</script>

<template>
  <section class="news-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">
          <span class="title-icon">📰</span>
          {{ t('news.title') }}
        </h2>
        <RouterLink to="/news" class="view-all">
          {{ t('news.more') }}
          <svg viewBox="0 0 24 24" width="20" height="20">
            <path fill="currentColor" d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
          </svg>
        </RouterLink>
      </div>

      <div class="news-grid">
        <!-- Featured News -->
        <article class="news-featured">
          <div 
            class="featured-image"
            :style="{ backgroundImage: 'url(https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80)' }"
          >
            <span class="category-badge" :style="{ background: getCategoryColor('spotlight') }">
              {{ t('news.spotlight') }}
            </span>
          </div>
          <div class="featured-content">
            <span class="news-date">{{ newsItems[0].date }}</span>
            <h3 class="news-title">{{ getLocalizedTitle(newsItems[0]) }}</h3>
            <RouterLink :to="`/news/${newsItems[0].id}`" class="read-more">
              {{ t('common.readMore') }}
              <svg viewBox="0 0 24 24" width="16" height="16">
                <path fill="currentColor" d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
              </svg>
            </RouterLink>
          </div>
        </article>

        <!-- News List -->
        <div class="news-list">
          <article 
            v-for="item in newsItems.slice(1)" 
            :key="item.id"
            class="news-item"
          >
            <span class="news-date">{{ item.date }}</span>
            <RouterLink :to="`/news/${item.id}`" class="news-title">
              {{ getLocalizedTitle(item) }}
            </RouterLink>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.news-section {
  padding: 6rem 0;
  background: var(--color-bg-secondary);
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Section Header */
.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3rem;
}

.section-title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-text);
}

.title-icon {
  font-size: 1.5rem;
}

.view-all {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s ease;
}

.view-all:hover {
  gap: 0.75rem;
}

/* News Grid */
.news-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

/* Featured News */
.news-featured {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.news-featured:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

.featured-image {
  position: relative;
  height: 280px;
  background-size: cover;
  background-position: center;
}

.category-badge {
  position: absolute;
  top: 1rem;
  left: 1rem;
  padding: 0.5rem 1rem;
  color: white;
  font-size: 0.8rem;
  font-weight: 600;
  border-radius: 50px;
}

.featured-content {
  padding: 1.5rem;
}

.news-date {
  font-size: 0.85rem;
  color: var(--color-text-muted);
  display: block;
  margin-bottom: 0.5rem;
}

.news-featured .news-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text);
  line-height: 1.5;
  margin-bottom: 1rem;
}

.read-more {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.2s ease;
}

.read-more:hover {
  gap: 0.5rem;
}

/* News List */
.news-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.news-item {
  background: white;
  padding: 1.25rem 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;
}

.news-item:hover {
  transform: translateX(5px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.news-item .news-title {
  display: block;
  color: var(--color-text);
  text-decoration: none;
  font-weight: 500;
  line-height: 1.5;
  transition: color 0.2s ease;
}

.news-item .news-title:hover {
  color: var(--color-primary);
}

/* Responsive */
@media (max-width: 1024px) {
  .news-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .news-section {
    padding: 4rem 0;
  }
  
  .container {
    padding: 0 1rem;
  }
  
  .section-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  
  .section-title {
    font-size: 1.5rem;
  }
}
</style>
