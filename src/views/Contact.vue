<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const form = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const handleSubmit = () => {
  alert('感謝您的訊息，我們會盡快回覆！')
}
</script>

<template>
  <div class="contact-page">
    <div class="page-header">
      <div class="container position-relative">
        <h1>{{ t('contact.title') }}</h1>
        <p class="mb-0">{{ t('contact.subtitle') }}</p>
      </div>
    </div>
    
    <section class="py-5">
      <div class="container">
        <div class="row g-5">
          <!-- Contact Info -->
          <div class="col-lg-4">
            <h4 class="fw-bold mb-4">{{ t('contact.info') }}</h4>
            
            <div class="d-flex mb-4">
              <div class="flex-shrink-0 me-3 fs-4">📍</div>
              <div>
                <h6 class="fw-bold mb-1">{{ t('contact.address') }}</h6>
                <p class="text-muted mb-0">{{ t('contact.addressText') }}</p>
              </div>
            </div>
            
            <div class="d-flex mb-4">
              <div class="flex-shrink-0 me-3 fs-4">📞</div>
              <div>
                <h6 class="fw-bold mb-1">{{ t('contact.phone') }}</h6>
                <p class="text-muted mb-0">(02) 2782-1862</p>
              </div>
            </div>
            
            <div class="d-flex mb-4">
              <div class="flex-shrink-0 me-3 fs-4">📧</div>
              <div>
                <h6 class="fw-bold mb-1">{{ t('contact.email') }}</h6>
                <p class="text-muted mb-0">service@cust.edu.tw</p>
              </div>
            </div>
            
            <div class="d-flex mb-4">
              <div class="flex-shrink-0 me-3 fs-4">🕒</div>
              <div>
                <h6 class="fw-bold mb-1">{{ t('contact.hours') }}</h6>
                <p class="text-muted mb-0">{{ t('contact.hoursText') }}</p>
              </div>
            </div>
          </div>
          
          <!-- Contact Form -->
          <div class="col-lg-8">
            <div class="card border-0 shadow-sm">
              <div class="card-body p-4">
                <h4 class="fw-bold mb-4">{{ t('contact.form') }}</h4>
                <form @submit.prevent="handleSubmit">
                  <div class="row g-3">
                    <div class="col-md-6">
                      <label class="form-label">{{ t('contact.name') }} *</label>
                      <input type="text" class="form-control" v-model="form.name" required>
                    </div>
                    <div class="col-md-6">
                      <label class="form-label">{{ t('contact.phone') }}</label>
                      <input type="tel" class="form-control" v-model="form.phone">
                    </div>
                    <div class="col-12">
                      <label class="form-label">{{ t('contact.email') }} *</label>
                      <input type="email" class="form-control" v-model="form.email" required>
                    </div>
                    <div class="col-12">
                      <label class="form-label">{{ t('contact.subject') }} *</label>
                      <input type="text" class="form-control" v-model="form.subject" required>
                    </div>
                    <div class="col-12">
                      <label class="form-label">{{ t('contact.message') }} *</label>
                      <textarea class="form-control" rows="5" v-model="form.message" required></textarea>
                    </div>
                    <div class="col-12">
                      <button type="submit" class="btn btn-primary btn-lg w-100">
                        {{ t('contact.submit') }}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Map -->
    <section class="py-5 bg-light">
      <div class="container">
        <h4 class="fw-bold text-center mb-4">{{ t('contact.location') }}</h4>
        <div class="ratio ratio-21x9 rounded-3 overflow-hidden shadow">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.178!2d121.612!3d25.045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDAyJzQyLjAiTiAxMjHCsDM2JzQzLjIiRQ!5e0!3m2!1szh-TW!2stw!4v1234567890"
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  </div>
</template>
