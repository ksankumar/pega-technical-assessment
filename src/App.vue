<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Pega</span>
      </v-toolbar-title>
    </v-app-bar>
    <LeftMenu/>
    <v-content>'
      <v-container class="fill-height">
        <transition name="fade" mode="out-in">
          <router-view/>
        </transition>
      </v-container>
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
<style>
  body {
    scroll-behavior: smooth !important;
    overscroll-behavior-y: none;
    -webkit-overflow-scrolling: touch;
    webkit-app-region: no-drag;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition-duration: 0.3s;
    transition-property: opacity;
    transition-timing-function: ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }
</style>
