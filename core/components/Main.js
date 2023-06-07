const Link = {
  props: {
    link: String
  },
  template: `
    <a
      v-if="!!link"
      class="nav-link"
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
  emits: [
    'unfoldNav'
  ],
  props: {
    nav: {
      type: Array,
      default: []
    },
    initialActiveIndexes: {
      type: Array,
      default: []
    }
  },
  data () {
    return {
      activeIndexes: this.initialActiveIndexes,
      unfoldIndexes: []
    }
  },
  template: `
    <div
      v-for="(item, index) in nav"
      class="nav-item"
    >
      <div>
        <span v-if="!activeIndexes.includes(index)" class="nav-name">
          <span @click="activateNav(index)">{{ item.name }}</span>
          <Link :link="item.link" />
        </span>
        <span v-else-if="unfoldIndexes.includes(index)" class="nav-unfold">
          <span @click="activateNav(index)">{{ item.name }}</span>
          <Link :link="item.link" />
        </span>
        <span v-else class="nav-text">
          <span>{{ item.text || item.name }}</span>
          <Link :link="item.link" />
        </span>
      </div>
      <Main
        v-if="item.children && activeIndexes.includes(index)"
        :nav="item.children"
        @unfold-nav="unfoldIndexes.push(index)"
      />
    </div>
  `,
  methods: {
    activateNav (index) {
      this.activeIndexes = [index]
      this.unfoldIndexes = []
      this.$emit('unfoldNav')
    }
  }
}