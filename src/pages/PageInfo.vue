<template>
  <div class="page">
    <h1>Information</h1>

    <div class="info-group">
      <q-form @submit.prevent="submitForm({ value: this.informations })">
        <!-- Nom -->
        <q-input
          clearable
          v-model="informations.nomEvaluateur"
          label="Votre nom au complet SVP *"
          :rules="[(val) => (val && val.length > 0) || 'Écrire votre nom']"
          autofocus
        >
        </q-input>

        <!-- Stagiaire -->
        <q-input
          clearable
          v-model="informations.nomStagiaire"
          label="Stagiaire évalué *"
          :rules="[
            (val) =>
              (val && val.length > 0) || 'Écrire le nom du stagiaire évalué',
          ]"
        >
        </q-input>

        <!-- Date -->
        <q-input
          clearable
          v-model="informations.dateEvaluation"
          mask="date"
          :rules="['date']"
          @dblclick="todayDate"
          label="Date d'évaluation"
        >
          <q-icon
            name="event"
            class="cursor-pointer"
            v-if="!informations.dateEvaluation"
          >
            <q-popup-proxy
              ref="qDateProxy"
              cover
              transition-show="scale"
              transition-hide="scale"
            >
              <q-date minimal v-model="informations.dateEvaluation">
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Close" color="primary" flat />
                </div>
              </q-date>
            </q-popup-proxy>
          </q-icon>
        </q-input>
        <!-- Boutons pour enregistrer et changer de page -->
        <div class="btn-enregistrer-group">
          <q-btn
            label="Enregistrer"
            type="submit"
            color="primary"
            class="btn-enregistrer"
            v-if="!enteredResponsesInfo"
          />
          <q-btn
            label="Attitude >"
            color="primary"
            class="btn-enregistrer"
            v-if="enteredResponsesInfo"
            to="/attitude"
          />
        </div>
      </q-form>
    </div>
  </div>
</template>

<script>
import { date } from "quasar";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      informations: {
        nomEvaluateur: "",
        nomStagiaire: "",
        dateEvaluation: "",
      },
    };
  },
  methods: {
    ...mapActions({
      submitForm: "addInfo",
    }),
    // submitForm() {
    //   this.$store.dispatch("addInfo", { value: this.informations });
    // },

    todayDate(e) {
      this.informations.dateEvaluation = date.formatDate(
        Date.now(),
        "YYYY-MM-DD"
      );
    },
  },
  computed: {
    ...mapGetters(["enteredResponsesInfo"]),
  },
  //TODO trouver une façon que les infos déja données soit sur la page au retour d'une autre page
};
</script>

<style>
.q-icon {
  font-size: 25px;
}
</style>
