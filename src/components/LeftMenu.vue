<template>
  <!--  <v-card height="400" max-width="256">-->
  <v-navigation-drawer permanent app expand-on-hover dark
                       mini-variant role="navigation" aria-label="Pega options">
    <v-text-field
      flat
      hide-details
      outlined
      rounded
      dense
      prepend-inner-icon="mdi-magnify"
      placeholder="Search"
      class="hidden-sm-and-down"
      role="search"
      aria-haspopup="true"
      aria-label="Search box"
      tabindex="0"
    ></v-text-field>
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
                <v-list-item-title>{{item.title}}</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item v-for="(child, i) in item.child" :key="i+'s'" :to="{name: `${child.page}`}">
              <v-list-item-content v-text="child.title"></v-list-item-content>
              <v-list-item-icon>
                <v-icon v-text="child.icon"></v-icon>
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
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list-item-group>
    </v-list>
    <template v-slot:append>
      <v-list role="menuitem"
              aria-haspopup="true"
              :aria-label="navFooter.title"
              aria-expanded="false"
              tabindex="-1">
        <v-list-item :to="{name: `${navFooter.page}`}">
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
      items: [{
        title: 'Create',
        icon: 'mdi-plus',
        child: [
          { 'title': 'Bug', page: 'Bugs', icon: 'mdi-bug-outline' },
          { 'title': 'Epic', page: 'Epics', icon: 'mdi-gamepad' },
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
    })
  }
</script>
