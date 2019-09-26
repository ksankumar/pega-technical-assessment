<template>
  <!--  <v-card height="400" max-width="256">-->
  <v-navigation-drawer permanent app expand-on-hover dark
                       mini-variant>
    <v-text-field
      flat
      hide-details
      outlined
      rounded
      dense
      prepend-inner-icon="mdi-magnify"
      placeholder="Search"
      class="hidden-sm-and-down"
    ></v-text-field>
    <v-divider></v-divider>
    <v-list dense nav shaped>
      <v-list-item-group color="primary">
        <template v-for="(item, index) in items">
          <v-divider color="white" v-if="item.divider" :key="index"/>
          <v-list-group v-else-if="item.child" :key="index+'g'" :prepend-icon="item.icon" no-action>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>{{item.title}}</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item v-for="(child, i) in item.child" :key="i+'s'" :to="child.path">
              <v-list-item-content v-text="child.title"></v-list-item-content>
              <v-list-item-icon>
                <v-icon v-text="child.icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
          <v-list-item v-else :key="item.title" link :to="item.path">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
  <!--  </v-card>-->
</template>
<script>
  export default {
    name: 'LeftMenu',
    data: () => ({
      items: [{
        title: 'Create',
        icon: 'mdi-plus',
        child: [
          { 'title': 'Bug', page: 'Bugs', icon: 'mdi-bug-outline' },
          { 'title': 'Epic', page: 'Epic', icon: 'mdi-gamepad' },
          { 'title': 'User Story', page: 'UserStory', icon: 'mdi-account-card-details-outline' }
        ]
      },
        { divider: true },
        { title: 'Home', page: 'Home', icon: 'mdi-home' },
        { title: 'My Dashboard', page: 'Home', icon: 'mdi-creation' },
        { title: 'Spaces', page: 'Home', icon: 'mdi-view-dashboard' },
        { title: 'Documents', page: 'Home', icon: 'mdi-file-document-box' },
        { title: 'Bugs', page: 'Home', icon: 'mdi-bug-outline' },
        { title: 'Epics', page: 'Home', icon: 'mdi-gamepad' },
        { title: 'Goals', page: 'Home', icon: 'mdi-bullseye' },
        { divider: true },
        { title: 'Notifications', page: 'Notifications', icon: 'mdi-bell' },
        { title: 'Recent', page: 'Recent', icon: 'mdi-history' },
        { title: 'My Applications', page: 'MyApplications', icon: 'mdi-clipboard-check-outline' }
        // { title: 'Cosmos Operator', page: 'CosmosOperator', icon: 'mdi-help-box' }
      ]
    }),
    created () {
    },
    computed: {},
    mounted () {
    },
    methods: {}
  }
</script>

<style scoped>

</style>
