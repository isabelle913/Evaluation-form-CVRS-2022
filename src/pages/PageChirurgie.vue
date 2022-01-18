<template>
  <div class="page">
    <h1 class="title-chirurgie">Anesthésie / Chirurgie / Dentisterie</h1>
    <p class="criteres">
      => Critères d'évaluation: 1 = mauvais, 10 = excellent
    </p>
    <!-- Formulaire -->
    <div>
      <q-form
        @submit.prevent="
          submitForm({ value: this.chirurgie, comments: this.comments })
        "
        class="q-gutter-md"
        v-if="!enteredResponsesChirurgie"
      >
        <!-- choix de réponse radio -->
        <div v-for="question in chirurgie" :key="question">
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
            v-if="!enteredResponsesChirurgie"
            @click="goToTop"
          />
        </div>
      </q-form>
    </div>
    <!-- Tableau des reponses -->
    <div v-if="enteredResponsesChirurgie">
      <div class="btn-next-step-group">
        <q-btn
          label="prochaine étape Pharmacie >"
          color="primary"
          to="/pharmacie"
          class="btn-next-step"
          v-if="enteredResponsesChirurgie"
        />
      </div>

      <div class="table-response">
        <div class="table-response-head">
          <p>Question</p>
          <p>Votre évaluation</p>
        </div>
        <div
          class="table-response-body"
          v-for="response in this.gettersChirurgie"
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
        <h6>Commentaires</h6>
        <p>
          {{ this.gettersChirurgieComments.questionResponse }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      chirurgie: {
        question1: {
          questionTitle: "Préparation du matériel",
          questionResponse: null,
          questionNext: true,
        },
        question2: {
          questionTitle: "Intubation",
          questionResponse: null,
          questionNext: true,
        },
        question3: {
          questionTitle: "Installation du monitoring",
          questionResponse: null,
          questionNext: true,
        },
        question4: {
          questionTitle: "Monitoring",
          questionResponse: null,
          questionNext: true,
        },
        question5: {
          questionTitle: "Respect de l'asepsie",
          questionResponse: null,
          questionNext: true,
        },
        question6: {
          questionTitle: "Réveil",
          questionResponse: null,
          questionNext: true,
        },
        question7: {
          questionTitle: "Soins post-opératoire",
          questionResponse: null,
          questionNext: true,
        },
        question8: {
          questionTitle: "Détartrage et polissage",
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
    };
  },
  methods: {
    ...mapActions({
      submitForm: "addChirurgie",
    }),
    goToTop() {
      const titleChirurgie = document.querySelector(".title-chirurgie");
      titleChirurgie.scrollIntoView({ behavior: "smooth" });
    },
  },
  computed: {
    ...mapGetters([
      "enteredResponsesChirurgie",
      "gettersChirurgie",
      "gettersChirurgieComments",
    ]),
  },
};
</script>

<style>
.entete-table {
  background: #c7232f;
  color: white;
}
</style>
