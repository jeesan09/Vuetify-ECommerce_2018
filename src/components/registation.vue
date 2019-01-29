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
                     prepend-icon="person"
                     name="name"
                     label="Name" 
                     type="text" 
                     
                     >                   
                   </v-text-field>

                  <v-text-field
                     prepend-icon="email"
                     name=""
                     label="Email" 
                     type="text" 
                    
                     >                   
                   </v-text-field>

                  <v-text-field
                      prepend-icon="lock"
                      name="password"
                      label="Password"
                      id="" 
                      type="password"
                     
                     > 
                  </v-text-field>

                  <v-text-field
                      prepend-icon="lock"
                      name="Confirm_password"
                      label="Confirm Password"
                      id="" 
                      type="password"
                      
                     > 
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
                  

                   
                   
                  <v-card-actions>
                    <v-btn left color="primary">Register</v-btn>
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
     
     
    })   
  }
</script>
