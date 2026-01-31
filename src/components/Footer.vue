<script setup>
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const quickLinks = [
  { key: 'home', path: '/' },
  { key: 'about', path: '/about' },
  { key: 'academic', path: '/academic' },
  { key: 'admissions', path: '/admissions' }
]

const resources = [
  { key: 'studentPortal', path: '#' },
  { key: 'facultyPortal', path: '#' },
  { key: 'library', path: '#' },
  { key: 'courses', path: '#' }
]
</script>

<template>
  <footer class="footer pt-5 pb-3">
    <div class="container">
      <div class="row g-4">
        <!-- School Info -->
        <div class="col-lg-4">
          <div class="footer-logo mb-3">
            <img src="https://www.cust.edu.tw/var/file/0/1000/img/513/182338134.png" alt="中華科技大學" class="me-2" style="height: 50px;" onerror="this.style.display='none'">
            <div>
              <div class="fw-bold text-white">中華科技大學</div>
              <small class="text-white-50">China University of Science and Technology</small>
            </div>
          </div>
          <p class="small mb-2">
            <strong>📍 {{ t('contact.address') }}：</strong><br>
            {{ t('contact.addressText') }}
          </p>
          <p class="small mb-2">
            <strong>📞 {{ t('contact.phone') }}：</strong>(02) 2782-1862
          </p>
          <p class="small mb-0">
            <strong>📧 {{ t('contact.email') }}：</strong>service@cust.edu.tw
          </p>
        </div>

        <!-- Quick Links -->
        <div class="col-6 col-lg-2">
          <h6 class="text-white fw-bold mb-3">{{ t('footer.quickLinks') }}</h6>
          <ul class="list-unstyled">
            <li v-for="link in quickLinks" :key="link.path" class="mb-2">
              <RouterLink :to="link.path">{{ t(`nav.${link.key}`) }}</RouterLink>
            </li>
          </ul>
        </div>

        <!-- Resources -->
        <div class="col-6 col-lg-2">
          <h6 class="text-white fw-bold mb-3">{{ t('footer.resources') }}</h6>
          <ul class="list-unstyled">
            <li v-for="link in resources" :key="link.key" class="mb-2">
              <a :href="link.path">{{ t(`quickLinks.${link.key}`) }}</a>
            </li>
          </ul>
        </div>

        <!-- Social -->
        <div class="col-lg-4">
          <h6 class="text-white fw-bold mb-3">{{ t('footer.followUs') }}</h6>
          <div class="mb-3">
            <a href="#" class="social-link">📘</a>
            <a href="#" class="social-link">📷</a>
            <a href="#" class="social-link">📺</a>
          </div>
          <p class="small text-white-50">{{ t('footer.followText') }}</p>
        </div>
      </div>

      <hr class="my-4 border-secondary">

      <div class="text-center small text-white-50">
        <p class="mb-0">© {{ new Date().getFullYear() }} 中華科技大學 China University of Science and Technology. {{ t('footer.copyright') }}.</p>
      </div>
    </div>
  </footer>
</template>
