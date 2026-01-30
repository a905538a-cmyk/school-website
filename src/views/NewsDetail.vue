<script setup>
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const route = useRoute()
const { t } = useI18n()

// 假資料 - 之後從 API 取得
const article = {
  id: route.params.id,
  title: '諾貝爾化學獎得主蒞校演講「點擊化學」引領的思維革命',
  date: '2026/01/28',
  category: '焦點新聞',
  image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1200&q=80',
  content: `
    <p>本校於今日邀請諾貝爾化學獎得主梅爾達爾教授蒞校演講，與師生分享「點擊化學」的創新思維及其對科學發展的深遠影響。</p>
    <p>梅爾達爾教授在演講中指出，點擊化學的核心理念是追求簡單、高效且環保的化學反應。這種思維方式不僅革新了藥物開發的流程，更為材料科學、生物技術等領域開闢了新的研究方向。</p>
    <p>演講吸引了超過 500 位師生參與，現場互動熱烈。許多學生表示，教授的分享讓他們對化學研究有了全新的認識，也激發了他們投入科學研究的熱情。</p>
  `
}
</script>

<template>
  <div class="page news-detail-page">
    <div class="page-hero" :style="{ backgroundImage: `url(${article.image})` }">
      <div class="hero-overlay"></div>
      <div class="container">
        <span class="category">{{ article.category }}</span>
        <h1>{{ article.title }}</h1>
        <span class="date">{{ article.date }}</span>
      </div>
    </div>
    
    <div class="page-content">
      <div class="container">
        <article class="article-content" v-html="article.content"></article>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page {
  padding-top: 80px;
}

.page-hero {
  position: relative;
  background-size: cover;
  background-position: center;
  color: white;
  padding: 6rem 0;
  text-align: center;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(0, 51, 102, 0.85) 0%, rgba(0, 102, 153, 0.75) 100%);
}

.page-hero .container {
  position: relative;
  z-index: 1;
}

.category {
  display: inline-block;
  background: var(--color-accent);
  color: white;
  padding: 0.25rem 1rem;
  border-radius: 50px;
  font-size: 0.85rem;
  margin-bottom: 1rem;
}

.page-hero h1 {
  font-size: 2rem;
  max-width: 800px;
  margin: 0 auto 1rem;
  line-height: 1.4;
}

.date {
  opacity: 0.8;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
}

.page-content {
  padding: 4rem 0;
}

.article-content {
  font-size: 1.1rem;
  line-height: 1.9;
  color: var(--color-text);
}

.article-content :deep(p) {
  margin-bottom: 1.5rem;
}
</style>
