import { createI18n } from 'vue-i18n'
import zhTW from './locales/zh-TW.json'
import en from './locales/en.json'
import vi from './locales/vi.json'

// 支援的語言列表（方便擴充）
export const SUPPORTED_LOCALES = [
  { code: 'zh-TW', name: '繁體中文', flag: '🇹🇼' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' }
]

// 從 localStorage 或瀏覽器偏好取得預設語言
function getDefaultLocale() {
  const saved = localStorage.getItem('locale')
  if (saved && SUPPORTED_LOCALES.some(l => l.code === saved)) {
    return saved
  }
  
  const browserLang = navigator.language
  if (browserLang.startsWith('zh')) return 'zh-TW'
  if (browserLang.startsWith('vi')) return 'vi'
  return 'en'
}

const i18n = createI18n({
  legacy: false, // 使用 Composition API
  locale: getDefaultLocale(),
  fallbackLocale: 'en',
  messages: {
    'zh-TW': zhTW,
    en: en,
    vi: vi
  }
})

export default i18n
