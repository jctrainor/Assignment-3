const app = new Vue({
  el: '#app',
  data: {
    title: '',
    note: '',
  },
  mounted() {
    if (localStorage.title) {
      this.title = localStorage.title;
    }
    if (localStorage.note) {
      this.note = localStorage.note;
    }
  },
  methods: {
    persist() {
      localStorage.title = this.title;
      localStorage.note = this.note;
      console.log('Title: ' + this.title + ' saved');
    }
  }
})