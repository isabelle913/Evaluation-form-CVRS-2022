<template>
  <div>
    <div class="q-px-sm">
      {{ title }}
    </div>
    <div class="q-gutter-sm">
      <q-radio
        v-for="choice in choiceList"
        :key="choice"
        :v-model="rep"
        :val="choice"
        :label="choice"
      />
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  props: ["question", "title", "rep"],
  data() {
    return {
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
};
</script>

<style></style>
