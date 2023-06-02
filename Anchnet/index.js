import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
import data from './data.js'
import Main from '../core/components/xiaoda.js'

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
    <div class="title">安畅网络</div>
    <Main :nav="data.nav" />
  `
}).mount('#app')