<template>
  <div class="page">
    <h1 class="title-soumettre">Page Soumettre</h1>
    <h1 class="text-merci hidden">Merci d'avoir pris le temps</h1>
    <p class="text-erreur hidden">
      Une erreur est survenu, pouvez-vous réésayer ou donner votre évaluation de
      vive voix à l'équipe des stagiaires: Émile, Catherine, Valérie ou Ariane.
      Désolé la technologie n'est pas parfaite
    </p>
    <p class="text-information hidden">
      Veuillez compléter la section information SVP
    </p>
    <p class="text-attitude hidden">
      Veuillez compléter la section attitude SVP
    </p>
    <p class="text-technique hidden">
      Veuillez compléter la section technique SVP
    </p>
    <p class="text-chirurgie hidden">
      Veuillez compléter la section chirurgie SVP
    </p>
    <p class="text-pharmacie hidden">
      Veuillez compléter la section pharmacie SVP
    </p>
    <div class="page-coeur">
      <div class="btn-soumettre-group">
        <div class="btn-soumettre-div">
          <q-btn
            color="primary"
            label="Envoyer mon évaluation"
            @click="soumettreTest"
            v-if="!merci"
            class="btn-soumettre"
          />
        </div>
      </div>
      <div class="box-coeur">
        <div>
          <q-img src="../assets/coeur_vert_droit.png" class="coeur" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ContentEmail } from "../class/createContentEmail.js";
import { mapGetters } from "vuex";
// import { axios } from "axios";

export default {
  data() {
    return {
      merci: false,
      erreur: false,
    };
  },
  methods: {
    soumettreTest() {
      const axios = require("axios").default;

      const titleSoumettre = document.querySelector(".title-soumettre");
      const textMerci = document.querySelector(".text-merci");
      const textErreur = document.querySelector(".text-erreur");
      const btnSoumettre = document.querySelector(".btn-soumettre");
      const textInformation = document.querySelector(".text-information");
      const textAttitude = document.querySelector(".text-attitude");
      const textTechnique = document.querySelector(".text-technique");
      const textChirurgie = document.querySelector(".text-chirurgie");
      const textPharmacie = document.querySelector(".text-pharmacie");

      if (
        this.gettersResponses.nomEvaluateur.length > 1 &&
        this.gettersResponses.nomStagiaire.length > 1 &&
        this.gettersResponses.dateEvaluation.length > 1 &&
        this.gettersResponses.attitude.length > 1 &&
        this.gettersResponses.technique.length > 1 &&
        this.gettersResponses.chirurgie.length > 1 &&
        this.gettersResponses.pharmacie.length > 1
      ) {
        const subject = ContentEmail.createContentEmail(
          this.gettersResponses
        ).subject;
        const body = ContentEmail.createContentEmail(
          this.gettersResponses
        ).body;
        console.log("Hello");
        axios
          .post("/_outilsinternes/mailnew.php", {
            body: body,
            subject: subject,
            timeout: 2000,
          })
          .then(function (response) {
            console.log(response);

            console.log(response.status);

            if (response.status === 200) {
              titleSoumettre.classList.add("hidden");
              textMerci.classList.remove("hidden");
              btnSoumettre.classList.add("hidden");
            } else {
              textErreur.classList.remove("hidden");
            }
          })
          .catch(function (error) {
            console.log(error);
            console.log(`Une erreur est survenue`);
            textErreur.classList.remove("hidden");
          });
      } else {
        if (
          this.gettersResponses.nomEvaluateur.length < 1 ||
          this.gettersResponses.nomStagiaire.length < 1 ||
          this.gettersResponses.dateEvaluation.length < 1
        ) {
          textInformation.classList.remove("hidden");
        }
        if (this.gettersResponses.attitude.length < 1) {
          textAttitude.classList.remove("hidden");
        }
        if (this.gettersResponses.technique.length < 1) {
          textTechnique.classList.remove("hidden");
        }
        if (this.gettersResponses.chirurgie.length < 1) {
          textChirurgie.classList.remove("hidden");
        }
        if (this.gettersResponses.pharmacie.length < 1) {
          textPharmacie.classList.remove("hidden");
        }
      }
    },
  },
  computed: {
    ...mapGetters(["gettersResponses"]),
  },
};
</script>

<style>
.btn-soumettre-group {
  width: 100%;
  display: flex;
}
.btn-soumettre-div {
  margin: 0 auto;
}

.btn-soumettre {
  padding: 10px 20px;
}

.box-coeur {
  height: 400px;
  width: 400px;
  position: absolute;
  bottom: 0;
  right: 0;
}
.coeur {
  width: 400px;
  height: auto;
}

@media screen and (max-width: 700px) {
  .box-coeur {
    width: 75%;
    height: auto;
  }

  .coeur {
    width: 100%;
    height: auto;
  }
}

@media screen and (max-height: 600px) {
  .page-coeur {
    position: relative;
    height: 340px;
    /* min-height: 400px;
    max-height: 500px; */
  }
}

@media screen and (max-height: 700px) {
  .page {
    height: auto;
    min-height: 500px;
  }
}
</style>
