const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  watch: {
    result() {
      // 監聽 computed 的 result
      console.log("watch test");
      const that = this;
      setTimeout(function () {
        that.counter = 0;
      }, 5000); // 5秒後歸零
    },
  },
  computed: {
    result() {
      if (this.counter < 37) {
        return "Not there yet";
      } else if (this.counter === 37) {
        return this.counter;
      } else {
        return "Too much!";
      }
    },
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
  },
});

app.mount("#assignment");
