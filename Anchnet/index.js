import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
import data from './data.js'
import Main from '../core/components/Main.js'

createApp({
  components: {
    Main
  },
  data () {
    return {
      data
    }
  },
  template: `
    <div class="title">
      安畅网络
      <span class="search-icon">🔍</span>
    </div>
    <Main
      :nav="data.nav"
      :initialActiveIndex="[0]"
    />
  `
}).mount('#app')