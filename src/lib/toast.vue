<template>
  <div>
    <transition name="fade">
      <div v-show="show" class="toast">{{ message }}</div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "toast",
  data() {
    return {
      show: false,
      message: "This is a Toast",
    };
  },
};
</script>

<style>
@import url("index.css");
</style>
