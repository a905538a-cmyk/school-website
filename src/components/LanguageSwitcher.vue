<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { SUPPORTED_LOCALES } from '../i18n'

const { locale } = useI18n()

const currentLocale = computed(() => 
  SUPPORTED_LOCALES.find(l => l.code === locale.value) || SUPPORTED_LOCALES[0]
)

const changeLocale = (code) => {
  locale.value = code
  localStorage.setItem('locale', code)
}
</script>

<template>
  <div class="dropdown">
    <button 
      class="btn btn-sm btn-outline-secondary dropdown-toggle"
      type="button"
      data-bs-toggle="dropdown"
    >
      {{ currentLocale.flag }} {{ currentLocale.name }}
    </button>
    <ul class="dropdown-menu dropdown-menu-end">
      <li v-for="lang in SUPPORTED_LOCALES" :key="lang.code">
        <button 
          class="dropdown-item" 
          :class="{ active: lang.code === locale }"
          @click="changeLocale(lang.code)"
        >
          {{ lang.flag }} {{ lang.name }}
        </button>
      </li>
    </ul>
  </div>
</template>
