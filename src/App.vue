<template>
  <v-app>
 
  
     <v-toolbar app dark color="primary">
        <v-toolbar-side-icon></v-toolbar-side-icon>

        <v-toolbar-title class="white--text">jeesan</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>search</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>apps</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>refresh</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>more_vert</v-icon>
        </v-btn>
      </v-toolbar>

       <v-content>

           <router-view></router-view>

      </v-content> 



  </v-app>
</template>

<script>


export default {
  name: 'App',

  data () {
    return {
      //
    }
  }
}
</script>
