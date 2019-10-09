<template>
  <div>
    <h1>AdminPage</h1>
    <v-text-field v-model="tshirt.id"
                  label="Tshirt id"
                  ></v-text-field>
    <v-text-field v-model="tshirt.color"
                  label="Tshirt color"
                  ></v-text-field>
    <v-text-field v-model="tshirt.isMan"
                  label="Tshirt isman"
                  ></v-text-field>
    <v-text-field v-model="tshirt.price"
                  label="Tshirt price"
                  ></v-text-field>
    <v-text-field v-model="tshirt.imgLink"
                  label="Tshirt imLink"
                  ></v-text-field>
    <v-text-field v-model="tshirt.size"
                  label="Tshirt size"
                  ></v-text-field>
    <v-text-field v-model="tshirt.type"
                  label="Tshirt type"
    ></v-text-field>
    <v-btn @click="submit">Post</v-btn>
    <v-btn @click="fetchProducts">Get All</v-btn>
    <v-btn @click="updte(tshirt.id)">Update</v-btn>
    <v-btn @click="myDelete(tshirt.id)">Delete</v-btn>
    <v-btn @click="getone(tshirt.id)">Get One ID</v-btn>

    <ul>
      <li v-for="product in products"
          v-bind:key="product.Id">{{"Id is " + product.id + ", color is " + product.color + ", size is " + product.size
         + ", type is " + product.type + ", the gender is " + whatGender(product.isMan) + ", the price is " + product.price}}</li>
    </ul>

  </div>
</template>
¨
<script>
  import axios from 'axios'
  import restApi from './api/API'
  export default {
    mounted() {
      this.fetchProducts()
    },
    data: ()  => ({
      products: [{productId: 1, description: 'Helo'},{productId: 2, description: 'Bøf'}],
      tshirt: {
        id: 0,
        price: 0,
        size: "",
        color: "",
        type: "",
        isMan: false,
        imgLink: ""
      }
    }),
    methods: {
      fetchProducts() {
        axios.get('https://tshirtshopdab.azurewebsites.net/api/tshirts')
                .then((data) => {
                  this.products = data.data;
                });
      },
      submit() {
        restApi.post('TShirts', {
          price: this.tshirt.price,
          size: this.tshirt.size,
          color: this.tshirt.color,
          type: this.tshirt.type,
          isMan: this.tshirt.isMan,
          imgLink: this.tshirt.imgLink
        })
      },
      updte(id) {
        restApi.put('TShirts/' + id, {
          id: this.tshirt.id,
          price: this.tshirt.price,
          size: this.tshirt.size,
          color: this.tshirt.color,
          type: this.tshirt.type,
          isMan: this.tshirt.isMan,
          imgLink: this.tshirt.imgLink
        })
      },
      myDelete(id){
        restApi.delete('TShirts/' + id)
      },
      getone(id){
        axios.get('https://tshirtshopdab.azurewebsites.net/api/TShirts/'+id)
                .then((data) => {
                  this.tshirt = data.data;
                });
      },
      whatGender(isMan){
        if(isMan == true)
        {
          return "Man"
        }
        else
        {
          return "Woman"
        }
      }
    }
  };
</script>
