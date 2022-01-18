<template>
  <div class="page">
    <h1 class="title-pharmacie">Pharmacie</h1>
    <p class="criteres">
      => Critères d'évaluation: 1 = mauvais, 10 = excellent
    </p>
    <!-- Formulaire -->
    <div>
      <q-form
        @submit.prevent="
          submitForm({ value: this.pharmacie, comments: this.comments })
        "
        class="q-gutter-md"
        v-if="!enteredResponsesPharmacie"
      >
        <!-- Test radio v-for 2e -->
        <div v-for="question in pharmacie" :key="question">
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
            v-if="!enteredResponsesPharmacie"
            @click="goToTop"
          />
        </div>
      </q-form>
    </div>
    <!-- Tableau des reponses -->
    <div v-if="enteredResponsesPharmacie">
      <div class="btn-next-step-group">
        <q-btn
          label="prochaine étape Soumission >"
          color="primary"
          to="/soumettre"
          class="btn-next-step"
          v-if="enteredResponsesPharmacie"
        />
      </div>

      <div class="table-response">
        <div class="table-response-head">
          <p>Question</p>
          <p>Votre évaluation</p>
        </div>
        <div
          class="table-response-body"
          v-for="response in this.gettersPharmacie"
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
          {{ this.gettersPharmacieComments.questionResponse }}
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
      pharmacie: {
        question1: {
          questionTitle: "Préparation prescription",
          questionResponse: null,
          questionNext: true,
        },
        question2: {
          questionTitle: "Préparation injectable",
          questionResponse: null,
          questionNext: true,
        },
        question3: {
          questionTitle: "Hématologie",
          questionResponse: null,
          questionNext: true,
        },
        question4: {
          questionTitle: "Biochimie et électrolyte",
          questionResponse: null,
          questionNext: true,
        },
        question5: {
          questionTitle: "Urologie",
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
      submitForm: "addPharmacie",
    }),
    goToTop() {
      const titlePharmacie = document.querySelector(".title-pharmacie");
      titlePharmacie.scrollIntoView({ behavior: "smooth" });
    },
  },
  computed: {
    ...mapGetters([
      "enteredResponsesPharmacie",
      "gettersPharmacie",
      "gettersPharmacieComments",
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
