# zxd-vue-toast

## Installation

### npm
```
npm install zxd-vue-toast
```

### CDN
```
<script src="https://unpkg.com/zxd-vue-toast@0.1.2/lib/toast.umd.min.js"></script>
<script>
  Vue.use(ToastPlugin)
  ...
</script> 
```

### Usage
```
import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

import toast from "zxd-vue-toast";
Vue.use(toast);

new Vue({
  render: (h) => h(App),
}).$mount("#app");

```

```
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
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
