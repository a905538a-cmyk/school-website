<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const handleSubmit = () => {
  // 這裡會接 Laravel API
  console.log('Form submitted:', form.value)
  alert('感謝您的訊息，我們會盡快回覆！')
}
</script>

<template>
  <div class="page contact-page">
    <div class="page-hero">
      <div class="container">
        <h1>{{ t('nav.contact') }}</h1>
        <p>有任何問題歡迎與我們聯繫</p>
      </div>
    </div>
    
    <div class="page-content">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-info">
            <h2>聯絡資訊</h2>
            
            <div class="info-item">
              <span class="info-icon">📍</span>
              <div>
                <h4>{{ t('footer.address') }}</h4>
                <p>台北市大安區未來路一號</p>
              </div>
            </div>
            
            <div class="info-item">
              <span class="info-icon">📞</span>
              <div>
                <h4>{{ t('footer.phone') }}</h4>
                <p>(02) 1234-5678</p>
              </div>
            </div>
            
            <div class="info-item">
              <span class="info-icon">📧</span>
              <div>
                <h4>{{ t('footer.email') }}</h4>
                <p>info@future.edu.tw</p>
              </div>
            </div>
            
            <div class="info-item">
              <span class="info-icon">🕒</span>
              <div>
                <h4>辦公時間</h4>
                <p>週一至週五 08:00 - 17:00</p>
              </div>
            </div>
          </div>
          
          <div class="contact-form">
            <h2>聯絡表單</h2>
            <form @submit.prevent="handleSubmit">
              <div class="form-group">
                <label for="name">姓名</label>
                <input type="text" id="name" v-model="form.name" required>
              </div>
              
              <div class="form-group">
                <label for="email">電子郵件</label>
                <input type="email" id="email" v-model="form.email" required>
              </div>
              
              <div class="form-group">
                <label for="subject">主旨</label>
                <input type="text" id="subject" v-model="form.subject" required>
              </div>
              
              <div class="form-group">
                <label for="message">訊息內容</label>
                <textarea id="message" v-model="form.message" rows="5" required></textarea>
              </div>
              
              <button type="submit" class="submit-btn">送出訊息</button>
            </form>
          </div>
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

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 4rem;
}

.contact-info h2,
.contact-form h2 {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: var(--color-primary);
}

.info-item {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.info-icon {
  font-size: 1.5rem;
}

.info-item h4 {
  margin-bottom: 0.25rem;
  color: var(--color-text);
}

.info-item p {
  color: var(--color-text-muted);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--color-text);
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.2s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px var(--color-primary-light);
}

.submit-btn {
  width: 100%;
  padding: 1rem;
  background: var(--color-primary);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.submit-btn:hover {
  background: var(--color-secondary);
}

@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}
</style>
