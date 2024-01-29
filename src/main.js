import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "./assets/css/tailwind.css";
import router from "./router/index.js";
import "animate.css/animate.min.css";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "@fortawesome/fontawesome-free/css/all.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import smoothscroll from "smoothscroll-polyfill";

// Register Font Awesome icons globally
library.add(fab);
smoothscroll.polyfill();

createApp(App).use(router).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
