import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";
import "katex/dist/katex.min.css";
import "markdown-it-texmath/css/texmath.css";
import { createPinia } from "pinia";
import PiniaPluginPersistedState from "pinia-plugin-persistedstate";

const pinia = createPinia();
pinia.use(PiniaPluginPersistedState);

createApp(App).use(pinia).use(router).mount("#app");
