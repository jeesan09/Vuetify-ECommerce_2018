



<template>
<!--  <tr v-for="product in products">   -->

 <div >
  <div  v-for="product in products" style="float: left; margin-left: 30px;">
   <v-hover style="margin-top: 50px;  "  >
    <v-card
      slot-scope="{ hover }"
      :class="`elevation-${hover ? 12 : 2}`"
      class=""
      width="344"
    >
      <v-img
        :aspect-ratio="16/9"
        :src="product.ImageUrl"
      ></v-img>
      <v-card-title>
        <div>
          <span class="headline">{{product.Name}}</span><br>
          <span > <b>Price:</b> {{product.Price}}</span>
          <div class="d-flex">
            <v-rating
              :value="product.Rating"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating>
            <div class="ml-2 grey--text text--darken-2">
              <span>{{ product.Rating }}</span>
              <span>({{ product.Rating }})</span>
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

 </div>
</div>
</template>



<!--   <h1>ddddddddddddddddddddddddd</h1> -->



<script>
  export default {
/*    data: () => ({
      reviews: 413,
      value: 4.5,
      url:'',
      products:{}
    }),*/

      data() {
        return {
             reviews: 413,
             value: 4.5,
             url:'',
             products:{}
        };
    },


        mounted() {
                 
         //console.log('sdfsdfsfsafs');

        axios.get('http://localhost:8000/api/products').then((response) => {

          //console.log(response);

          this.products=response.data.data;

          console.log(this.products);


        }, (error) => {




        })
        axios.get('http://localhost:8000/api/showp/56').then((response) => {

      //   console.log(response);
         this.url=response.data;
        // console.log(this.url);


        }, (error) => {




        })
               
     },

   methods: {



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
