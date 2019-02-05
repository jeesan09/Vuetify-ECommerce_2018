



<template>
  <v-hover style="margin-top: 50px;">
    <v-card
      slot-scope="{ hover }"
      :class="`elevation-${hover ? 12 : 2}`"
      class="mx-auto"
      width="344"
    >
      <v-img
        :aspect-ratio="16/9"
        :src="url"
      ></v-img>
      <v-card-title>
        <div>
          <span class="headline">Cafe Badilico</span>
          <div class="d-flex">
            <v-rating
              :value="value"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating>
            <div class="ml-2 grey--text text--darken-2">
              <span>{{ value }}</span>
              <span>({{ reviews }})</span>
            </div>
          </div>
        </div>
        <v-spacer></v-spacer>
        <v-btn icon class="mr-0">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-card-title>
    </v-card>
  </v-hover>
</template>



<!--   <h1>ddddddddddddddddddddddddd</h1> -->



<script>
  export default {
    data: () => ({
      reviews: 413,
      value: 4.5,
      url:''
    }),

  


        mounted() {
                 
         //console.log('sdfsdfsfsafs');
        axios.get('http://localhost:8000/api/showp/56').then((response) => {

         console.log(response);
         this.url=response.data;
         console.log(this.url);


        }, (error) => {




        })
               
     }
  }
</script>

<style>

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: relative; 
  width: 100%;
}

</style>
