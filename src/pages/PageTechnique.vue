<template>
  <div class="page">
    <h1 class="title-technique">Technique</h1>
    <p class="criteres">
      => Critères d'évaluation: 1 = mauvais, 10 = excellent
    </p>

    <!-- Formulaire -->
    <div>
      <q-form
        @submit.prevent="
          submitForm({ value: this.technique, comments: this.comments })
        "
        class="q-gutter-md"
        v-if="!enteredResponsesTechnique"
      >
        <!-- choix de réponse radio -->

        <div v-for="question in technique" :key="question">
          <p class="question">{{ question.questionTitle }}</p>
          <div class="radio-group">
            <q-radio
              v-for="choice in choiceList"
              :key="choice"
              v-model="question.questionResponse"
              :val="choice"
              :label="choice"
              class="radio-item"
            />
          </div>
        </div>

        <!-- Commentaire -->
        <div class="comment-group">
          <div class="comment-item">
            <q-input
              v-model="comments"
              outlined
              type="textarea"
              autogrow
              label="Commentaires SVP"
              maxlength="1000"
              clearable
            />
          </div>
        </div>

        <!-- Bouttons -->
        <div class="btn-enregistrer-group">
          <q-btn
            label="Enregistrer"
            type="submit"
            color="primary"
            class="btn-enregistrer"
            v-if="!enteredResponsesTechnique"
            @click="goToTop"
          />
        </div>
      </q-form>
    </div>
    <!-- Tableau des reponses -->
    <div v-if="enteredResponsesTechnique">
      <div class="btn-next-step-group">
        <q-btn
          label="prochaine étape Ax/Chx/Dent >"
          color="primary"
          to="/chirurgie"
          class="btn-next-step"
          v-if="enteredResponsesTechnique"
        />
      </div>

      <div class="table-response">
        <div class="table-response-head">
          <p>Question</p>
          <p>Votre évaluation</p>
        </div>
        <div
          class="table-response-body"
          v-for="response in this.gettersTechnique"
          :key="response.questionTitle"
        >
          <p class="table-response-body-question">
            {{ response.questionTitle }}
          </p>
          <p class="table-response-body-response">
            {{ response.questionResponse }}
          </p>
        </div>
      </div>
      <div class="table-response-comment-group">
        <h6>Commentaires:</h6>
        <p>{{ this.gettersTechniqueComments.questionResponse }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      technique: {
        question1: {
          questionTitle: "Examen physique (TPR)",
          questionResponse: null,
          questionNext: true,
        },
        question2: {
          questionTitle:
            "Soin de base (taille griffe, nettoyages oreilles, et..)",
          questionResponse: null,
          questionNext: true,
        },
        question3: {
          questionTitle: "Contention",
          questionResponse: null,
          questionNext: true,
        },
        question4: {
          questionTitle: "Contention agressif",
          questionResponse: null,
          questionNext: true,
        },
        question5: {
          questionTitle: "Cathéter",
          questionResponse: null,
          questionNext: true,
        },
        question6: {
          questionTitle: "Prise de sang",
          questionResponse: null,
          questionNext: true,
        },
        question7: {
          questionTitle: "Injection",
          questionResponse: null,
          questionNext: true,
        },
        question8: {
          questionTitle: "Administration de médication",
          questionResponse: null,
          questionNext: true,
        },
        question9: {
          questionTitle: "Radiographie",
          questionResponse: null,
          questionNext: true,
        },
        question10: {
          questionTitle: "Nettoyage / remplissage",
          questionResponse: null,
          questionNext: true,
        },
        question11: {
          questionTitle: "Posologie /calculs",
          questionResponse: null,
          questionNext: false,
        },
      },
      comments: "",
      choiceList: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "Non évalué",
      ],
      test: null,
    };
  },

  methods: {
    ...mapActions({
      submitForm: "addTechnique",
    }),
    goToTop() {
      const titleTechnique = document.querySelector(".title-technique");
      titleTechnique.scrollIntoView({ behavior: "smooth" });
    },
  },
  computed: {
    ...mapGetters([
      "enteredResponsesTechnique",
      "gettersTechnique",
      "gettersTechniqueComments",
    ]),
  },
};
</script>

<style></style>
