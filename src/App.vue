<template>
  <v-app>
    <v-app-bar app dense>
      <v-app-bar-nav-icon v-if="$vuetify.breakpoint.smAndDown" @click="showNavBar=!showNavBar"/>
      <v-toolbar-title class="headline d-flex">
        <span class="font-weight-light">Pega</span>
        <img :src="require('../src/assets/logo.png')" alt="pega-logo" width="80">
      </v-toolbar-title>
    </v-app-bar>
    <LeftMenu :navMenu.sync="showNavBar"/>
    <v-content>
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
      showNavBar: false
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
