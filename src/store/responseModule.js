// vieielle version de store - Quasar

import { TouchRepeat } from "quasar";

const responseModule = {
  state() {
    return {
      responses: {
        nomEvaluateur: "",
        nomStagiaire: "",
        dateEvaluation: "",
        attitude: [],
        technique: [],
        chirurgie: [],
        pharmacie: [],
      },
    };
  },
  mutations: {
    addInfo(state, payload) {
      state.responses.nomEvaluateur = payload.value.nomEvaluateur;
      state.responses.nomStagiaire = payload.value.nomStagiaire;
      state.responses.dateEvaluation = payload.value.dateEvaluation;
      // window.location.assign(
      //   "http://www.cvrivesud.com/_outilsinternes/formulaire.html#/attitude"
      // );
      // window.location.assign("http://localhost:8080/#/attitude");
    },
    addAttitude(state, payload) {
      let done = true;
      for (let i = 1; done; i++) {
        state.responses.attitude.push({
          questionTitle: payload.value[`question${i}`].questionTitle,
          questionResponse: payload.value[`question${i}`].questionResponse,
        });
        done = payload.value[`question${i}`].questionNext;
        if (i > 15) {
          done = false;
        }
      }

      state.responses.attitude.push({
        questionTitle: "Commentaire attitude",
        questionResponse: payload.comments,
      });
      const sectionTechnique = document.getElementById("sectionTechnique");

      // sectionTechnique.scrollIntoView({ behavior: "smooth" });
      // window.location.assign(
      //   "http://www.cvrivesud.com/_outilsinternes/formulaire.html#/technique"
      // );
      // window.location.replace("http://localhost:8080/#/technique");
    },
    addTechnique(state, payload) {
      let done = true;
      for (let i = 1; done; i++) {
        state.responses.technique.push({
          questionTitle: payload.value[`question${i}`].questionTitle,
          questionResponse: payload.value[`question${i}`].questionResponse,
        });
        done = payload.value[`question${i}`].questionNext;
        if (i > 15) {
          done = false;
        }
      }

      state.responses.technique.push({
        questionTitle: "Commentaire technique",
        questionResponse: payload.comments,
      });
      // window.location.assign(
      //   "http://www.cvrivesud.com/_outilsinternes/formulaire.html#/chirurgie"
      // );
    },
    addChirurgie(state, payload) {
      let done = true;
      for (let i = 1; done; i++) {
        state.responses.chirurgie.push({
          questionTitle: payload.value[`question${i}`].questionTitle,
          questionResponse: payload.value[`question${i}`].questionResponse,
        });
        done = payload.value[`question${i}`].questionNext;
        if (i > 15) {
          done = false;
        }
      }

      state.responses.chirurgie.push({
        questionTitle: "Commentaire chirurgie",
        questionResponse: payload.comments,
      });
      // window.location.assign(
      //   "http://www.cvrivesud.com/_outilsinternes/formulaire.html#/pharmacie"
      // );
    },
    addPharmacie(state, payload) {
      let done = true;
      for (let i = 1; done; i++) {
        state.responses.pharmacie.push({
          questionTitle: payload.value[`question${i}`].questionTitle,
          questionResponse: payload.value[`question${i}`].questionResponse,
        });
        done = payload.value[`question${i}`].questionNext;
        if (i > 15) {
          done = false;
        }
      }

      state.responses.pharmacie.push({
        questionTitle: "Commentaire pharmacie",
        questionResponse: payload.comments,
      });
      // window.location.assign(
      //   "http://www.cvrivesud.com/_outilsinternes/formulaire.html#/soumettre"
      // );
    },
  },
  actions: {
    addInfo(context, payload) {
      context.commit("addInfo", payload);
    },
    addAttitude(context, payload) {
      context.commit("addAttitude", payload);
    },
    addTechnique(context, payload) {
      context.commit("addTechnique", payload);
    },
    addChirurgie(context, payload) {
      context.commit("addChirurgie", payload);
    },
    addPharmacie(context, payload) {
      context.commit("addPharmacie", payload);
    },
  },
  getters: {
    enteredResponsesInfo(state) {
      if (state.responses.nomEvaluateur && state.responses.nomStagiaire) {
        return true;
      } else {
        return false;
      }
    },
    enteredResponsesAttitude(state) {
      if (state.responses.attitude.length > 5) {
        return true;
      } else {
        return false;
      }
      //TODO pas idéal car les string vide ' ' sont compté comme répondu
    },
    gettersAttitude(state) {
      return state.responses.attitude.slice(0, -1);
    },
    gettersAttitudeComments(state) {
      return state.responses.attitude[state.responses.attitude.length - 1];
    },
    enteredResponsesTechnique(state) {
      if (state.responses.technique.length > 5) {
        return true;
      } else {
        return false;
      }
    },
    gettersTechnique(state) {
      return state.responses.technique.slice(0, -1);
    },
    gettersTechniqueComments(state) {
      return state.responses.technique[state.responses.technique.length - 1];
    },
    enteredResponsesChirurgie(state) {
      if (state.responses.chirurgie.length > 5) {
        return true;
      } else {
        return false;
      }
    },
    gettersChirurgie(state) {
      return state.responses.chirurgie.slice(0, -1);
    },
    gettersChirurgieComments(state) {
      return state.responses.chirurgie[state.responses.chirurgie.length - 1];
    },
    enteredResponsesPharmacie(state) {
      if (state.responses.pharmacie.length > 5) {
        return true;
      } else {
        return false;
      }
    },
    gettersPharmacie(state) {
      return state.responses.pharmacie.slice(0, -1);
    },
    gettersPharmacieComments(state) {
      return state.responses.pharmacie[state.responses.pharmacie.length - 1];
    },
    gettersResponses(state) {
      return state.responses;
    },
  },
};

export default responseModule;
