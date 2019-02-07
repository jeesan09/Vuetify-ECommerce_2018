



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
             
                    <v-btn @click="resset_password" depressed  large color="success" v-show='status_button' >Submit</v-btn><br>  


<!--          <v-progress-circular
 :rotate="180"
 :size="100"
 :width="15"
 :value="value"
 color="pink"
 v-show='status_loader'
        >
 {{ value }}
        </v-progress-circular> -->


    <v-progress-circular
      :width="7"
      :size="90"
      color="green"
      indeterminate
      v-show='status_loader'
    ></v-progress-circular>


                    
            </v-flex>






         </v-layout>




      </v-container>

        

    </v-content>
</template>



<!--   <h1>ddddddddddddddddddddddddd</h1> -->



<script>
import axios from 'axios'

  export default {
    data: () => ({


        status_loader:false,
        status_button:true,
        Email:'',
        interval: {},
        value: 0,
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
           this.status_loader=true;
           this.status_button=false;
           axios.post('http://localhost:8000/api/auth/RememberPassword',{

            
            email:this.Email,
          


            }).then((response) => {


             
            this.status_loader=false;
            this.status_button=true;
            this.$swal({
            position: 'top-end',
            type: 'success',
            title: 'Please Cheak your Mail To Reset Password',

            })

              console.log(response);

             /* this.afterRegistation();*/


            }, (error) => {
               
              this.status_loader=false; 
              this.status_button=true;
              this.$swal.fire({
              type: 'error',
              title: 'Oops...',
              text: 'Please Provide a valid Email Address',

              footer: 'Something went Wrong!'
              })

             })

            }


      }


   },
   mounted(){

      this.interval = setInterval(() => {
        if (this.value === 100) {
          return (this.value = 0)
        }
        this.value += 10
      }, 1000)

   }

  }
</script>

<style>



</style>
