export default {
  name: 'Search',
  data () {
    return {
      isActive: false,
      searchText: ''
    }
  },
  template: `
    <div class="search-component">
      <div v-if="!isActive">
        <span
          class="search-icon"
          @click="isActive = true"
        >🔍</span>
      </div>
      <div v-else>
        <input
          v-model="searchText"
          class="search-input"
        />
        <span
          class="search-cancel"
          @click="isActive = false; searchText = ''"
        >×</span>
      </div>
    </div>
  `
}