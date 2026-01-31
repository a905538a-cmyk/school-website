<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
import LanguageSwitcher from './LanguageSwitcher.vue'

const { t } = useI18n()
const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

// 學術單位下拉選單
const academicUnits = computed(() => [
  { name: t('academicUnits.engineering'), path: '/academic/engineering' },
  { name: t('academicUnits.management'), path: '/academic/management' },
  { name: t('academicUnits.humanities'), path: '/academic/humanities' },
  { name: t('academicUnits.general'), path: '/academic/general' }
])

// 行政單位下拉選單
const adminUnits = computed(() => [
  { name: t('adminUnits.academicAffairs'), path: '/admin/academic-affairs' },
  { name: t('adminUnits.studentAffairs'), path: '/admin/student-affairs' },
  { name: t('adminUnits.generalAffairs'), path: '/admin/general-affairs' },
  { name: t('adminUnits.research'), path: '/admin/research' },
  { name: t('adminUnits.library'), path: '/admin/library' },
  { name: t('adminUnits.itCenter'), path: '/admin/it-center' }
])
</script>

<template>
  <nav class="navbar navbar-expand-lg fixed-top" :class="{ 'scrolled': isScrolled, 'bg-white': isScrolled, 'bg-transparent': !isScrolled }">
    <div class="container">
      <!-- Logo -->
      <RouterLink to="/" class="navbar-brand">
        <img src="https://www.cust.edu.tw/var/file/0/1000/img/513/182338134.png" alt="中華科技大學" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2280%22>🎓</text></svg>'">
        <div class="school-name">
          <span class="school-name-zh">中華科技大學</span>
          <span class="school-name-en">China University of Science and Technology</span>
        </div>
      </RouterLink>

      <!-- Mobile Toggle -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Nav Items -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto align-items-center">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link">{{ t('nav.home') }}</RouterLink>
          </li>
          
          <li class="nav-item">
            <RouterLink to="/about" class="nav-link">{{ t('nav.about') }}</RouterLink>
          </li>
          
          <!-- 學術單位 Dropdown -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
              {{ t('nav.academic') }}
            </a>
            <ul class="dropdown-menu">
              <li v-for="unit in academicUnits" :key="unit.path">
                <RouterLink :to="unit.path" class="dropdown-item">{{ unit.name }}</RouterLink>
              </li>
            </ul>
          </li>
          
          <!-- 行政單位 Dropdown -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
              {{ t('nav.admin') }}
            </a>
            <ul class="dropdown-menu">
              <li v-for="unit in adminUnits" :key="unit.path">
                <RouterLink :to="unit.path" class="dropdown-item">{{ unit.name }}</RouterLink>
              </li>
            </ul>
          </li>
          
          <li class="nav-item">
            <RouterLink to="/admissions" class="nav-link">{{ t('nav.admissions') }}</RouterLink>
          </li>
          
          <li class="nav-item">
            <RouterLink to="/news" class="nav-link">{{ t('nav.news') }}</RouterLink>
          </li>
          
          <li class="nav-item">
            <RouterLink to="/contact" class="nav-link">{{ t('nav.contact') }}</RouterLink>
          </li>
          
          <li class="nav-item ms-2">
            <LanguageSwitcher />
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
