import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
import data from './data.js'
import Main from '../core/components/Main.js'

console.log('data', data)

createApp({
  components: {
    Main
  },
  data() {
    return {
      data
    }
  },
  template: `
    <div class="title">{{ data.title }}</div>
    <Main :nav="data.nav" />
  `
}).mount('#app')