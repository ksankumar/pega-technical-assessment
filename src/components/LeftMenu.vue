<template>
  <v-navigation-drawer app :expand-on-hover="$vuetify.breakpoint.smAndUp"
                       :permanent="$vuetify.breakpoint.smAndUp"
                       v-model="showNavMenu"
                       :mini-variant.sync="miniVarient"
                       dark
                       role="navigation"
                       aria-label="Pega options">
    <!--    <template v-slot:prepend>-->
    <div class="ma-3">
      <v-avatar v-if="miniVarient" size="57" color="white">
        <v-avatar color="#424242" size="56">
          <v-icon>mdi-magnify</v-icon>
        </v-avatar>
      </v-avatar>
      <v-text-field
        v-else
        flat
        hide-details
        outlined
        rounded
        prepend-inner-icon="mdi-magnify"
        placeholder="Search"
        role="search"
        aria-haspopup="true"
        aria-label="Search box"
        tabindex="0"
      ></v-text-field>
    </div>
    <v-divider></v-divider>
    <v-list dense nav shaped role="none">
      <v-list-item-group color="primary" role="none">
        <template v-for="(item, index) in items">
          <v-divider color="white" v-if="item.divider" :key="index" role="none"/>
          <v-list-group v-else-if="item.child" :key="index+'g'" :prepend-icon="item.icon" no-action
                        role="menuitem"
                        aria-haspopup="true"
                        :aria-label="'create'+item.title"
                        aria-expanded="false"
                        tabindex="-1">
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title class="white--text">{{item.title}}</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item v-for="(child, i) in item.child" :key="i+'s'" :to="{name: `${child.page}`}">
              <v-list-item-content class="white--text" v-text="child.title"></v-list-item-content>
              <v-list-item-icon>
                <v-icon color="white" v-text="child.icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
          <v-list-item v-else :key="item.title" link :to="{name: `${item.page}`}"
                       role="menuitem"
                       aria-haspopup="true"
                       aria-label="item.title"
                       aria-expanded="false"
                       tabindex="-1">
            <v-list-item-icon>
              <v-icon color="white">{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="white--text">{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list-item-group>
    </v-list>
    <!--    </template>-->
    <template v-slot:append>
      <v-list role="menuitem"
              color="#1e2655"
              flat
              aria-haspopup="true"
              :aria-label="navFooter.title"
              aria-expanded="false"
              tabindex="-1"
              class="elevation-12 py-0">
        <v-list-item :to="{name: `${navFooter.page}`}" >
          <v-list-item-avatar>
            <v-avatar color="teal" size="32">
              <span class="white--text headline">{{navFooter.title.charAt(0)}}</span>
            </v-avatar>
          </v-list-item-avatar>
          <v-list-item-title v-text="navFooter.title"></v-list-item-title>
        </v-list-item>
      </v-list>
    </template>
  </v-navigation-drawer>
  <!--  </v-card>-->
</template>
<script>
  export default {
    name: 'LeftMenu',
    data: () => ({
      miniVarient: true,
      items: [{
        title: 'Create',
        icon: 'mdi-plus',
        child: [
          { 'title': 'Bug', page: 'Bug', icon: 'mdi-bug-outline' },
          { 'title': 'Epic', page: 'Epic', icon: 'mdi-gamepad' },
          { 'title': 'User Story', page: 'UserStory', icon: 'mdi-account-card-details-outline' }
        ]
      },
        { divider: true },
        { title: 'Home', page: 'Home', icon: 'mdi-home' },
        { title: 'My Dashboard', page: 'Dashboard', icon: 'mdi-creation' },
        { title: 'Spaces', page: 'Spaces', icon: 'mdi-view-dashboard' },
        { title: 'Documents', page: 'Documents', icon: 'mdi-file-document-box' },
        { title: 'Bugs', page: 'Bugs', icon: 'mdi-bug-outline' },
        { title: 'Epics', page: 'Epics', icon: 'mdi-gamepad' },
        { title: 'Goals', page: 'Goals', icon: 'mdi-bullseye' },
        { divider: true },
        { title: 'Notifications', page: 'Notifications', icon: 'mdi-bell' },
        { title: 'Recent', page: 'Recent', icon: 'mdi-history' }
      ],
      navFooter: { title: 'Cosmos Operator', page: 'CosmosOperator' }
    }),
    props: {
      navMenu: {
        type: Boolean,
        default: false
      }
    },
    created () {
      this.miniVarient = this.$vuetify.breakpoint.smAndUp
    },
    computed: {
      showNavMenu: {
        get () {
          return this.navMenu
        },
        set (value) {
          this.$emit('update:navMenu', value)
        }
      }
    }
  }
</script>
