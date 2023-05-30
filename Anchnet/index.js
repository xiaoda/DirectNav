import {createApp} from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

createApp({
  data () {
    return {
      message: '你好 Vue！'
    }
  },
  template: `<div>{{message}}</div>`
}).mount('#app')