<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>Évaluation stagiaire 2022 </q-toolbar-title>

        <div class="title-desktop">Vet et Nous - CVRS</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      :breakpoint="767"
      :width="200"
      bordered
      overlay
      behavior="desktop"
    >
      <q-list>
        <q-item-label header> Faites votre choix </q-item-label>

        <q-item
          v-for="nav in navs"
          :key="nav.label"
          :to="nav.to"
          exact
          clickable
        >
          <q-item-section>
            <q-item-label>{{ nav.label }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-footer>
      <q-tabs>
        <q-route-tab
          v-for="nav in navs"
          :key="nav.label"
          :to="nav.to"
          :label="nav.shortLabel"
        />
      </q-tabs>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  data() {
    return {
      navs: [
        {
          to: "/",
          label: "Information",
          shortLabel: "Info",
        },
        {
          to: "/attitude",
          label: "Attitude / Comportement",
          shortLabel: "attitude",
        },
        {
          to: "/technique",
          label: "Technique",
          shortLabel: "tech",
        },
        {
          to: "/chirurgie",
          label: "Ax / Chx / Dent",
          shortLabel: "Chx",
        },
        {
          to: "/pharmacie",
          label: "Pharmacie",
          shortLabel: "Px",
        },
        {
          to: "/soumettre",
          label: "Soumettre",
          shortLabel: "Soumettre",
        },
      ],
    };
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
//TODO ajouter Favicon
</script>

<style lang="scss">
.q-drawer {
  .q-router-link--exact-active {
    color: #c7232f !important;
    text-decoration: underline;
  }
}
</style>
