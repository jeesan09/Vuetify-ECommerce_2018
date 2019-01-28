<template>
  <div class="about">
     <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-tooltip bottom>
                  <v-btn
                    icon
                    large
                    :href="source"
                    target="_blank"
                    slot="activator"
                  >
                    <v-icon large>code</v-icon>
                  </v-btn>
                  <span>Source</span>
                </v-tooltip>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" name="login" label="Login" type="text"></v-text-field>
                  <v-text-field prepend-icon="lock" name="password" label="Password" id="password" type="password"></v-text-field>
                </v-form>
              </v-card-text>

                  <v-card-actions>
                    <v-btn left color="primary">Register</v-btn>
                    <v-spacer />
                    <v-btn v-on:click="fetchArticles" right color="primary">Login</v-btn>
                  </v-card-actions>

                  <v-card-actions>
                     <v-spacer />
                     <a href="" >Forget Password</a>
                  </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
  </div>
</template>

<script>
   import axios from 'axios'
 export default {
    data: () => ({
       articles: [],
       User:{
        email:'jeesan09iub@gmail.com',
        password:'jeesan'
       }
    }),
    methods: {
          fetchArticles: function () {

            console.log(this.User.email,this.User.password);


          axios.post('http://localhost:8000/api/auth/login',{
          email:this.User.email,
          password:this.User.password
        }).then((response) => {
          this.articles = response.data
         // console.log(this.articles);

        }, (error) => {
          console.log(error)
        })
      },

      source(){


      }
    }

}


</script>
