<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
import { SUPPORTED_LOCALES } from '../i18n'
import LanguageSwitcher from './LanguageSwitcher.vue'

const { t } = useI18n()

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const navItems = computed(() => [
  { key: 'home', path: '/' },
  { key: 'about', path: '/about' },
  { key: 'departments', path: '/departments' },
  { key: 'admissions', path: '/admissions' },
  { key: 'news', path: '/news' },
  { key: 'campus', path: '/campus' },
  { key: 'contact', path: '/contact' }
])

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header class="header" :class="{ scrolled: isScrolled }">
    <div class="header-container">
      <!-- Logo -->
      <RouterLink to="/" class="logo" @click="closeMobileMenu">
        <div class="logo-icon">🎓</div>
        <div class="logo-text">
          <span class="logo-name">未來大學</span>
          <span class="logo-name-en">Future University</span>
        </div>
      </RouterLink>

      <!-- Desktop Navigation -->
      <nav class="nav-desktop">
        <RouterLink
          v-for="item in navItems"
          :key="item.key"
          :to="item.path"
          class="nav-link"
          active-class="active"
        >
          {{ t(`nav.${item.key}`) }}
        </RouterLink>
      </nav>

      <!-- Right Section -->
      <div class="header-right">
        <LanguageSwitcher />
        
        <!-- Mobile Menu Button -->
        <button 
          class="mobile-menu-btn"
          @click="toggleMobileMenu"
          :aria-expanded="isMobileMenuOpen"
          aria-label="Toggle menu"
        >
          <span class="hamburger" :class="{ open: isMobileMenuOpen }">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <Transition name="slide-down">
      <nav v-if="isMobileMenuOpen" class="nav-mobile">
        <RouterLink
          v-for="item in navItems"
          :key="item.key"
          :to="item.path"
          class="nav-link-mobile"
          active-class="active"
          @click="closeMobileMenu"
        >
          {{ t(`nav.${item.key}`) }}
        </RouterLink>
      </nav>
    </Transition>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  border-bottom: 1px solid transparent;
}

.header.scrolled {
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  border-bottom-color: rgba(0, 0, 0, 0.05);
}

.header-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Logo */
.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  color: inherit;
}

.logo-icon {
  font-size: 2rem;
}

.logo-text {
  display: flex;
  flex-direction: column;
}

.logo-name {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-primary);
}

.logo-name-en {
  font-size: 0.7rem;
  color: var(--color-text-muted);
  letter-spacing: 0.5px;
}

/* Desktop Navigation */
.nav-desktop {
  display: flex;
  gap: 0.5rem;
}

.nav-link {
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: var(--color-text);
  font-weight: 500;
  border-radius: 8px;
  transition: all 0.2s ease;
  position: relative;
}

.nav-link:hover {
  color: var(--color-primary);
  background: var(--color-primary-light);
}

.nav-link.active {
  color: var(--color-primary);
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 3px;
  background: var(--color-primary);
  border-radius: 2px;
}

/* Header Right */
.header-right {
  display: flex;
  align-items: center;
  gap: 1rem;
}

/* Mobile Menu Button */
.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.hamburger {
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 24px;
}

.hamburger span {
  display: block;
  height: 2px;
  background: var(--color-text);
  border-radius: 2px;
  transition: all 0.3s ease;
}

.hamburger.open span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.hamburger.open span:nth-child(2) {
  opacity: 0;
}

.hamburger.open span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* Mobile Navigation */
.nav-mobile {
  display: none;
  flex-direction: column;
  padding: 1rem 2rem 2rem;
  background: white;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
}

.nav-link-mobile {
  padding: 1rem;
  text-decoration: none;
  color: var(--color-text);
  font-weight: 500;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.nav-link-mobile:hover,
.nav-link-mobile.active {
  color: var(--color-primary);
  background: var(--color-primary-light);
}

/* Transitions */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Responsive */
@media (max-width: 1024px) {
  .nav-desktop {
    display: none;
  }
  
  .mobile-menu-btn {
    display: block;
  }
  
  .nav-mobile {
    display: flex;
  }
}

@media (max-width: 640px) {
  .header-container {
    padding: 0 1rem;
    height: 70px;
  }
  
  .logo-name {
    font-size: 1.1rem;
  }
  
  .logo-name-en {
    display: none;
  }
}
</style>
