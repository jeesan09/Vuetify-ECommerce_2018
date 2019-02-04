<template>
   <div >
     <v-app id="register">
    <v-content>
      <v-container fluid  >
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Registation form</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>

                <v-form  ref="form">
                  <v-text-field
                     autofocus
                     prepend-icon="person"
                     name="name"
                     label="Name" 
                     type="text" 
                     v-model="User.Name"
                     :rules="nameRules"
                     >                   
                   </v-text-field>

                  <v-text-field
                     
                     prepend-icon="email"
                     name="email"
                     label="Email" 
                     type="text" 
                     v-model="User.Email"
                     :rules="emailRules"

                     >    
                     
                                    
                   </v-text-field>
                    <span v-show="errors.has('email')">{{ errors.first('email') }}</span>
                  

                  <v-text-field
                      prepend-icon="lock"
                      name="password"
                      label="Password"
                      id="" 
                      type="password"
                      v-model="User.Password"
                      :rules="passwordrules"
                     
                     > 
                  </v-text-field>

                  <v-text-field
                      prepend-icon="lock"
                      name="Confirm_password"
                      label="Confirm Password"
                      id="Confirm_password" 
                      type="password"
                      v-model="User.Confirm_password"
                      :rules=" Confirm_password_Rules"
                     > 
                  </v-text-field>
                   <v-spacer />
                  <p  v-show="status" v-text="news" style="text-align: center; color: red;"></p>


                </v-form>

                  </v-card-text>


                 
                   
                  <v-card-actions>
                    <v-btn left color="primary" v-on:click="saveData">Register</v-btn>
                   <v-spacer />
                   
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


  export default {
    components: {
      
    },

     data: () => ({
 /*      password:'',*/

       status:false,
       news:'password Doesnt match',
       User:{
         
         Name:'',
         Email:'',
         Password:'',
         Confirm_password:''

       },

       passwordrules: [
          (v) => !!v || 'Password is required',
          (v) => v && v.length >= 5 || 'Password must be more than 5 characters'
        ],

       emailRules: [
          (v) => !!v || 'E-mail is required',
          (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid',
         
        ] ,
        nameRules:[
          (v) => !!v || 'Name is required',

        ],
        Confirm_password_Rules:[

          (v) => !!v || 'Password required',  
         /* (v) => v != this. || 'E-mail must match'*/
     //     console.log(v),
        /*  (v) => v== this.passwordval || 'Password Doesnt match'*/

        ]
        
    }),

    methods:{
          
      saveData(){

              this.$refs.form.validate();
              this.Confirm_password_funtion();
              console.log(this.User.Password);

      if(this.Confirm_password_funtion()==false && this.$refs.form.validate()==true ){

       axios.post('http://localhost:8000/api/auth/register',{

        name:this.User.Name,
        email:this.User.Email,
        password:this.User.Password


        }).then((response) => {

          console.log(response);

          this.afterRegistation();


        }, (error) => {


         })

        }


        },

       
      Confirm_password_funtion () { 
        if(this.User.Password === this.User.Confirm_password) 
          {
            return this.status=false ;
          }

         else{

            return this.status=true;
         } 
     },
        
     afterRegistation(){


            this.$router.push('/');

            console.log('succes');
     }
      
    }


  }
</script>
