const questionModule = {
  state() {
    return {
      questions: {},
    };
  },
  getters: {
    questionsAttitude(state) {
      return state.questions.attitude;
    },
  },
};

export default questionModule;
