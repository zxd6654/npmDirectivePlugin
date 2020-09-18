import Toast from "./toast.vue";

let ToastPlugin = {};

ToastPlugin.install = function(Vue) {
  let ToastConstructor = Vue.extend(Toast);
  let ToastInstance = new ToastConstructor();
  let div = document.createElement("div");
  ToastInstance.$mount(div);
  document.body.appendChild(ToastInstance.$el);

  Vue.prototype.$toast = function(msg, duration = 2000) {
    ToastInstance.message = msg;
    ToastInstance.show = true;
    setTimeout(() => (ToastInstance.show = false), duration);
  };
};

export default ToastPlugin;
