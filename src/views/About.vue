<template>
  <div class="about">
     <v-app id="inspire">
    <v-content>
      <v-container fluid  >
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>

                <v-form  ref="form">
                  <v-text-field
                     prepend-icon="person"
                     name="login"
                     label="Login" 
                     type="text" 
                     v-model="User.email" 
                     :rules="emailRules">                   
                   </v-text-field>
                  <v-text-field
                      prepend-icon="lock"
                      name="password"
                      label="Password"
                      id="password" 
                      type="password"
                      v-model="User.password"
                     :rules="passwordrules"> 
                  </v-text-field>
                </v-form>

              </v-card-text>


<!--   <v-spacer />
        <v-alert
          v-show="status"
          type="error"
          v-text="news"
          class="text-md-center"
        >
         
        </v-alert> -->
                   <v-spacer /> 

                    <p  v-show="status" v-text="news" style="text-align: center; color: red;"></p>
                   
                  <v-card-actions>
                    <v-btn left color="primary" v-on:click="registation">Register</v-btn>
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
         

         <v-layout align-center justify-center style="margin-top: 50px;">


             <v-flex xs12 sm8 md4>
             
                    <v-btn @click="auth('google')" depressed  large color="error" style="width: 100%;">Google</v-btn>
                    <v-btn @click="auth('facebook')"depressed  large color=#3b5998 style="width: 100%; color:white;">faceBook</v-btn>
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
       status:false,
       news:'Password or Emil does not match',
     //  validaterule: false,
       User:{
        email:'',
        password:''
       },

        passwordrules: [
          (v) => !!v || 'Password is required',
          (v) => v && v.length >= 5 || 'Password must be more than 5 characters'
        ],

       emailRules: [
          (v) => !!v || 'E-mail is required',
          (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid',
         
        ]        
      
    }),


    methods: {
        fetchArticles: function () {
       
        this.$refs.form.validate(); // this line validate the filds are filled up correctly
       // console.log( this.$refs.form.validate());
        console.log(this.User.email,this.User.password);


        axios.post('http://localhost:8000/api/auth/login',{

        email:this.User.email,
        password:this.User.password

        }).then((response) => {

          this.success_response(response)


        }, (error) => {

        if(this.$refs.form.validate()){
          console.log(error);
          this.catch_error();

        }

        //  alert("Password and email does NOt Match");
        })
      },

      success_response(response){
       
         this.articles = response.data;
 
         this.$router.push('/home');
      },

      catch_error(){

          
          this.status=true;
          //resetting field Values
/*          this.User.email='';
          this.User.password='';*/

      },

      google_login(){

        console.log('button Pressed');
        axios.get('http://localhost:8000/api/products').then((response) => {

          console.log(response);


        }, (error) => {




        })

      },
    auth(network) {
      const hello = this.hello;
      hello(network).login().then(() => {
        const authRes = hello(network).getAuthResponse();
        console.log(authRes);
        /*
          performs operations using the token from authRes
        */
        hello(network).api('me').then(function (json) {
          const profile = json;
          console.log(profile)
          /*
            performs operations using the user info from profile
          */

        });
        this.$router.push('/home');
      })
    },
      registation(){


           this.$router.push('/registation');

      }




    }

}


</script>
<style type="text/css">
  


</style>