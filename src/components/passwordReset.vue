



<template>
 <v-content>
      <v-container fluid  >
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Password Reset</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>

                <v-form  ref="form">
                  <v-text-field
                     prepend-icon="email"
                     name="email"
                     label="email" 
                     type="text" 
                     v-model="Email" 
                     :rules="emailRules">                   
                   </v-text-field>
                 </v-form>

              </v-card-text>


               
            </v-card>
          </v-flex>
        </v-layout>
      
               
       

         <v-layout align-center justify-center style="margin-top: 50px;">


             <v-flex xs12 sm8 md4>
             
                    <v-btn @click="resset_password" depressed  large color="success" >Submit</v-btn>
                    
            </v-flex>
         </v-layout>

      </v-container>

        

    </v-content>
</template>



<!--   <h1>ddddddddddddddddddddddddd</h1> -->



<script>
  export default {
    data: () => ({



        Email:'',
        emailRules: [
          (v) => !!v || 'E-mail is required',
          (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid',
         
        ]  
    
    }),

   methods: {

      resset_password()

      {
          console.log('function callled');
          this.$refs.form.validate();
    /*              this.Confirm_password_funtion();
                  console.log(this.User.Password);*/

          if(this.$refs.form.validate()==true ){

           axios.post('http://localhost:8000/api/auth/RememberPassword',{

            
            email:this.Email,
          


            }).then((response) => {

              console.log(response);

             /* this.afterRegistation();*/


            }, (error) => {


             })

            }


      }


   }


  }
</script>

<style>



</style>
