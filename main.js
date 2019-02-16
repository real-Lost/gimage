var app = new Vue({
  el: '#app',
  data: {
    input_url: ''
  },
  methods: {
    imageSearch: function(e){
        window.location = `https://www.google.com/searchbyimage?&image_url=${this.input_url}`;
    }
  }
})