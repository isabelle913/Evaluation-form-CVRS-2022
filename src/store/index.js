import { store } from "quasar/wrappers";
import { createStore } from "vuex";

import responses from "./responseModule";
import questions from "./questionModule";
import emailContent from "./emailContentModule";


export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      responses: responses,
      questions: questions,
      emailContent: emailContent,
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING,
  });

  return Store;
});
