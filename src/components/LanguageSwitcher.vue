<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { SUPPORTED_LOCALES } from '../i18n'
import { onClickOutside } from '@vueuse/core'

const { locale } = useI18n()
const isOpen = ref(false)
const dropdownRef = ref(null)

const currentLocale = computed(() => 
  SUPPORTED_LOCALES.find(l => l.code === locale.value) || SUPPORTED_LOCALES[0]
)

const changeLocale = (code) => {
  locale.value = code
  localStorage.setItem('locale', code)
  isOpen.value = false
}

onClickOutside(dropdownRef, () => {
  isOpen.value = false
})
</script>

<template>
  <div class="language-switcher" ref="dropdownRef">
    <button 
      class="current-lang"
      @click="isOpen = !isOpen"
      :aria-expanded="isOpen"
    >
      <span class="flag">{{ currentLocale.flag }}</span>
      <span class="lang-name">{{ currentLocale.name }}</span>
      <svg class="chevron" :class="{ open: isOpen }" viewBox="0 0 24 24" width="16" height="16">
        <path fill="currentColor" d="M7 10l5 5 5-5z"/>
      </svg>
    </button>
    
    <Transition name="dropdown">
      <div v-if="isOpen" class="dropdown">
        <button
          v-for="lang in SUPPORTED_LOCALES"
          :key="lang.code"
          class="lang-option"
          :class="{ active: lang.code === locale }"
          @click="changeLocale(lang.code)"
        >
          <span class="flag">{{ lang.flag }}</span>
          <span>{{ lang.name }}</span>
        </button>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.language-switcher {
  position: relative;
}

.current-lang {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.875rem;
  color: var(--color-text);
  transition: all 0.2s ease;
}

.current-lang:hover {
  border-color: var(--color-primary);
}

.flag {
  font-size: 1.1rem;
}

.lang-name {
  display: none;
}

.chevron {
  transition: transform 0.2s ease;
}

.chevron.open {
  transform: rotate(180deg);
}

.dropdown {
  position: absolute;
  top: calc(100% + 0.5rem);
  right: 0;
  min-width: 160px;
  background: white;
  border: 1px solid var(--color-border);
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  z-index: 100;
}

.lang-option {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  padding: 0.75rem 1rem;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.9rem;
  color: var(--color-text);
  transition: all 0.2s ease;
}

.lang-option:hover {
  background: var(--color-bg-secondary);
}

.lang-option.active {
  background: var(--color-primary-light);
  color: var(--color-primary);
}

/* Transitions */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.2s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

@media (min-width: 640px) {
  .lang-name {
    display: inline;
  }
}
</style>
