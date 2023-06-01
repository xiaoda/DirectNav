export default {
  name: 'Main',
  props: {
    nav: [Object]
  },
  data() {
    return {
      activeIndex: -1
    }
  },
  template: `
    <div
      v-for="(item, index) in nav"
      class="item"
      @click="activeIndex = index"
    >
      <div v-show="activeIndex !== index" class="item-name">{{ item.name }}</div>
      <div v-show="activeIndex === index" class="item-text">{{ item.text }}</div>
      <Main v-if="item.children" :nav="item.children" />
    </div>
  `
}