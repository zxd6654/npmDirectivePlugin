<template>
  <div id="app">
    <button @click="openToast">弹出Toast按钮</button>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    openToast() {
      this.$toast("ZhuXiaodong directive toast plugin", 2000);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
