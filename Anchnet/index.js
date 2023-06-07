import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
import data from './data.js'
import Search from '../core/components/Search.js'
import Main from '../core/components/Main.js'

createApp({
  components: {
    Search, Main
  },
  data () {
    return {
      data
    }
  },
  template: `
    <div class="title">
      安畅网络
      <Search />
    </div>
    <Main
      :nav="data.nav"
      :initialActiveIndexes="[0]"
    />
  `
}).mount('#app')