import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)

app.directive('lazy', {
  mounted(el, binding) {
    const options = {
      root: null,
      rootMargin: '300px',
      threshold: 0.01
    }

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          el.src = binding.value
          el.classList.add('fade-in')
          observer.unobserve(el)
        }
      })
    }, options)

    observer.observe(el)
  }
})

app.mount('#app')
