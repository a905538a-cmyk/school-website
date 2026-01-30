<script setup>
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'

const { t } = useI18n()

const quickLinks = [
  { key: 'home', path: '/' },
  { key: 'about', path: '/about' },
  { key: 'departments', path: '/departments' },
  { key: 'admissions', path: '/admissions' },
  { key: 'news', path: '/news' }
]

const resources = [
  { key: 'studentPortal', path: '#' },
  { key: 'facultyPortal', path: '#' },
  { key: 'library', path: '#' },
  { key: 'calendar', path: '#' },
  { key: 'courses', path: '#' }
]

const socialLinks = [
  { name: 'Facebook', icon: '📘', url: '#' },
  { name: 'Instagram', icon: '📷', url: '#' },
  { name: 'YouTube', icon: '📺', url: '#' },
  { name: 'Twitter', icon: '🐦', url: '#' }
]
</script>

<template>
  <footer class="footer">
    <div class="footer-main">
      <div class="container">
        <div class="footer-grid">
          <!-- School Info -->
          <div class="footer-section school-info">
            <div class="footer-logo">
              <span class="logo-icon">🎓</span>
              <div>
                <div class="logo-name">未來大學</div>
                <div class="logo-name-en">Future University</div>
              </div>
            </div>
            <div class="contact-info">
              <p>
                <strong>{{ t('footer.address') }}:</strong><br>
                台北市大安區未來路一號
              </p>
              <p>
                <strong>{{ t('footer.phone') }}:</strong><br>
                (02) 1234-5678
              </p>
              <p>
                <strong>{{ t('footer.email') }}:</strong><br>
                info@future.edu.tw
              </p>
            </div>
          </div>

          <!-- Quick Links -->
          <div class="footer-section">
            <h4>{{ t('footer.quickLinks') }}</h4>
            <ul class="footer-links">
              <li v-for="link in quickLinks" :key="link.key">
                <RouterLink :to="link.path">{{ t(`nav.${link.key}`) }}</RouterLink>
              </li>
            </ul>
          </div>

          <!-- Resources -->
          <div class="footer-section">
            <h4>{{ t('footer.resources') }}</h4>
            <ul class="footer-links">
              <li v-for="link in resources" :key="link.key">
                <a :href="link.path">{{ t(`quickLinks.${link.key}`) }}</a>
              </li>
            </ul>
          </div>

          <!-- Social -->
          <div class="footer-section">
            <h4>{{ t('footer.followUs') }}</h4>
            <div class="social-links">
              <a 
                v-for="social in socialLinks" 
                :key="social.name"
                :href="social.url"
                :title="social.name"
                class="social-link"
              >
                {{ social.icon }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container">
        <p>© {{ new Date().getFullYear() }} 未來大學 Future University. {{ t('footer.copyright') }}.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--color-dark);
  color: rgba(255, 255, 255, 0.8);
}

.footer-main {
  padding: 4rem 0;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;
}

.footer-section h4 {
  color: white;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  font-weight: 600;
}

/* School Info */
.footer-logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.logo-icon {
  font-size: 2.5rem;
}

.logo-name {
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
}

.logo-name-en {
  font-size: 0.75rem;
  opacity: 0.7;
}

.contact-info p {
  margin-bottom: 1rem;
  font-size: 0.9rem;
  line-height: 1.6;
}

.contact-info strong {
  color: white;
}

/* Links */
.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.75rem;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.footer-links a:hover {
  color: white;
  transform: translateX(5px);
}

/* Social Links */
.social-links {
  display: flex;
  gap: 0.75rem;
}

.social-link {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  font-size: 1.25rem;
  text-decoration: none;
  transition: all 0.2s ease;
}

.social-link:hover {
  background: var(--color-primary);
  transform: translateY(-3px);
}

/* Footer Bottom */
.footer-bottom {
  padding: 1.5rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.5);
}

/* Responsive */
@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
  }
  
  .school-info {
    grid-column: span 2;
  }
}

@media (max-width: 640px) {
  .footer-main {
    padding: 3rem 0;
  }
  
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .school-info {
    grid-column: span 1;
  }
  
  .container {
    padding: 0 1rem;
  }
}
</style>
