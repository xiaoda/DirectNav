const Link = {
  props: {
    link: String
  },
  template: `
    <a
      v-if="!!link"
      class="item-link"
      :href="link"
      target="blank"
    >【链接】</a>
  `
}

export default {
  name: 'Main',
  components: {
    Link
  },
  props: {
    nav: {
      type: Array,
      default: []
    },
    initialActiveIndex: {
      type: Array,
      default: []
    }
  },
  data () {
    return {
      activeIndex: this.initialActiveIndex
    }
  },
  template: `
    <div
      v-for="(item, index) in nav"
      class="item"
    >
      <div>
        <span v-if="!activeIndex.includes(index)" class="item-name">
          <span @click="activeIndex = [index]">{{ item.name }}</span>
          <Link :link="item.link" />
        </span>
        <span v-if="activeIndex.includes(index)" class="item-text">
          <span>{{ item.text || item.name }}</span>
          <Link :link="item.link" />
        </span>
      </div>
      <Main
        v-if="item.children && activeIndex.includes(index)"
        :nav="item.children"
      />
    </div>
  `
}