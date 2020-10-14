<script>
import EssentialLink from 'components/EssentialLink.vue';
import Error404 from 'pages/Error404';

const linksData = [
  {
    title: 'Homepage',
    icon : 'code',
    link : { path: '/' },
  },
  {
    title: 'About Me',
    icon : 'code',
    link : { path: '/about-me' },
  },
  {
    title: '404 test',
    icon : 'code',
    link : { path: '/404' },
  },
];

export default {
  name      : 'MainLayout',
  components: { Error404, EssentialLink },
  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData,
    };
  },
};
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Main menu
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <Error404 v-if="$store.state.example.showErrorPage"/>
      <router-view v-else/>
    </q-page-container>
  </q-layout>
</template>
