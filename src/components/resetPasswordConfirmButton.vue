



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
            
                  <v-text-field
                     prepend-icon="lock"
                     name="password"
                     label="password" 
                     type="text" 
                     v-model="Password" 
                     :rules="passwordrules">                   
                   </v-text-field>


              
                  <v-text-field
                     prepend-icon="lock"
                     name="password"
                     label="password" 
                     type="text" 
                     v-model="ConfirmPassword" 
                     :rules="Confirm_password_Rules">                   
                   </v-text-field>
                    <v-spacer />
                  <p  v-show="status" v-text="news" style="text-align: center; color: red;"></p>

     
                  <v-text-field
                     prepend-icon="edit"
                     name="token"
                     label="token" 
                     type="text" 
                     v-model="Token" 
                     :rules="tokenRules">                   
                   </v-text-field>
               

                 </v-form>



              </v-card-text>


               
            </v-card>
          </v-flex>
        </v-layout>
      
               
       

         <v-layout align-center justify-center style="margin-top: 50px;">


             <v-flex xs12 sm8 md4>
             
                    <v-btn @click="saveData" depressed  large color="success" >Submit</v-btn>
                    
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
        Password:'',
        ConfirmPassword:'',
        Token:'',
        status:false,
        news:'password Doesnt match',

        emailRules: [
          (v) => !!v || 'E-mail is required',
          (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid',
         
        ]  ,
       passwordrules: [
          (v) => !!v || 'Password is required',
          (v) => v && v.length >= 5 || 'Password must be more than 5 characters'
        ],
         Confirm_password_Rules:[

          (v) => !!v || 'Password required',  

        ],

        tokenRules:[

        (v)=> !!v || 'token is required'

        ]

     
    
    }),

   methods: {

  saveData()

  {

       this.$refs.form.validate();
     
            

      if(this.Confirm_password_funtion()==false && this.$refs.form.validate()==true ){

       axios.post('http://localhost:8000/api/auth/RememberPasswordConfirmButtonClick',{

        email:this.Email,
        
        token:this.Token,
        password:this.Password


        }).then((response) => {

          console.log(response);

          this.$swal({
           // position: 'top-end',
            type: 'success',
            title: 'Your Password has been Reset SuccessFully',

            }).then(()=>{
              
              this.$router.push('/');

            })
          

          


        }, (error) => {
            
          this.$swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',

          footer: 'Email Or Token Doesnt match'
          })

         })

        }


  },

        Confirm_password_funtion()
    {


           if(this.Password === this.ConfirmPassword) 
          {
            return this.status=false ;
          }

         else{

            return this.status=true;
         } 


    }

   }


  }
</script>

<style>



</style>
