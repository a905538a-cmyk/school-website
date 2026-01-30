<script setup>
import { RouterLink } from 'vue-router'

const quickLinks = [
  { name: '首頁', path: '/' },
  { name: '關於中華', path: '/about' },
  { name: '學術單位', path: '/academic' },
  { name: '招生資訊', path: '/admissions' }
]

const resources = [
  { name: '學生入口', path: '#' },
  { name: '教職員入口', path: '#' },
  { name: '圖書館', path: '#' },
  { name: '選課系統', path: '#' }
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
            <strong>📍 地址：</strong><br>
            115311 台北市南港區研究院路三段245號
          </p>
          <p class="small mb-2">
            <strong>📞 電話：</strong>(02) 2782-1862
          </p>
          <p class="small mb-0">
            <strong>📧 信箱：</strong>service@cust.edu.tw
          </p>
        </div>

        <!-- Quick Links -->
        <div class="col-6 col-lg-2">
          <h6 class="text-white fw-bold mb-3">快速連結</h6>
          <ul class="list-unstyled">
            <li v-for="link in quickLinks" :key="link.path" class="mb-2">
              <RouterLink :to="link.path">{{ link.name }}</RouterLink>
            </li>
          </ul>
        </div>

        <!-- Resources -->
        <div class="col-6 col-lg-2">
          <h6 class="text-white fw-bold mb-3">校內資源</h6>
          <ul class="list-unstyled">
            <li v-for="link in resources" :key="link.name" class="mb-2">
              <a :href="link.path">{{ link.name }}</a>
            </li>
          </ul>
        </div>

        <!-- Social -->
        <div class="col-lg-4">
          <h6 class="text-white fw-bold mb-3">關注我們</h6>
          <div class="mb-3">
            <a href="#" class="social-link">📘</a>
            <a href="#" class="social-link">📷</a>
            <a href="#" class="social-link">📺</a>
          </div>
          <p class="small text-white-50">
            訂閱我們的社群媒體，獲取最新校園消息！
          </p>
        </div>
      </div>

      <hr class="my-4 border-secondary">

      <div class="text-center small text-white-50">
        <p class="mb-0">© {{ new Date().getFullYear() }} 中華科技大學 China University of Science and Technology. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
</template>
