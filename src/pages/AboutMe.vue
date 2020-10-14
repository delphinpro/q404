<script>
import Vue from 'vue';

export default {
  name: 'AboutMe',
  data: () => ({}),
  preFetch() {
    return Vue.axios.get('/test1.json')
      .then(response => {
        console.log(response);
      });
  },
};
</script>
<template>
  <q-page padding>
    <h1>About me</h1>
  </q-page>
</template>
