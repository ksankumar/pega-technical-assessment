<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Pega</span>
      </v-toolbar-title>
    </v-app-bar>
    <LeftMenu/>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
  import LeftMenu from './components/LeftMenu'

  export default {
    name: 'App',
    components: {
      LeftMenu
    },
    data: () => ({
      items: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard' },
        { title: 'Photos', icon: 'mdi-image' },
        { title: 'About', icon: 'mdi-help-box' }
      ]
    })
  }
</script>
