import Vue from "vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faGithub);

Vue.component("fa-icon", FontAwesomeIcon);

Vue.config.productionTip = false;
