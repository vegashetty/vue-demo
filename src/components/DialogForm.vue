<template>
  <form class='dialogForm' @submit.prevent="checkForm" method="post" v-if="!formSubmitted">
    <div class='form-group' v-if="errors.length" >
      <b>Please correct the following error(s):</b>
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>
    </div>
    <div class='form-group'>
      <label for="prodName">Product Name: </label>
      <input id='prodName' class='form-input' name='prodName' type='text' v-model="product.name" />
    </div>
    <div class='form-group'>
      <label>Product Description:</label>
      <input id='prodDescription' class='form-input' name='prodDescription' type='text'  v-model="product.description" />
    </div>
    <div class='form-group'>
      <label>Product Type:</label>
      <select id='prodType' class='form-select' name='prodType' v-model="product.typeSelected">
        <option v-for="type in product.prodType" :value="type.name">
          {{type.name}}
        </option>
      </select>
    </div>
    <div class='form-group'>
      <label>Inv Objective :</label>
      <select id='invObjective' class='form-select' name='invObjective' v-model="product.objSelected">
        <option v-for="invObj in product.invObjective" v-bind:value="invObj.name" >
          {{invObj.name}}
        </option>
      </select>
    </div>
    <div class='form-group buttons'>
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </form>
  <div v-else>
    <h2 class="submitted">View products : </h2>
    <ProductList :products="products" :remove="removeProduct"></ProductList>
  </div>
</template>

<script>
import json from '../data/data.json'
import ProductList from '../components/ProductList.vue'
import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyA3IlQOk04oXJjkBJDIkAh3MfafF1FXhYY",
  authDomain: "myapp-ee068.firebaseapp.com",
  databaseURL: "https://myapp-ee068.firebaseio.com",
  projectId: "myapp-ee068",
  storageBucket: "myapp-ee068.appspot.com/",
  messagingSenderId: "197295655836"
}
firebase.initializeApp(config);
const productRef = firebase.database().ref('products');

export default {
  components: {ProductList},
  data: function () {
    return {
      errors: [],
      product: {
        name: '',
        description: '',
        prodType: json.prodType,
        invObjective: json.invObjective,
        typeSelected: '',
        objSelected: ''
      },
      formSubmitted: false
    }
  },
  firebase: {
    products: productRef
  },
  methods: {
    handleSubmit () {
      const productData = {
        name: this.product.name,
        description: this.product.description,
        prodType: this.product.typeSelected,
        invObjective: this.product.objSelected
      };
      productRef.push(productData);
    },
    removeProduct: function (product) {
      productRef.child(product['.key']).remove()
    },
    checkForm: function (e) {
      this.errors = [];
      if (!this.product.name && !this.product.description) {
        this.errors.push('Fields cannot be empty.');
      }
      if (!this.errors.length) {
        this.handleSubmit();
        this.formSubmitted = true
      }
      e.preventDefault();
    }
  }
}
</script>

<style lang="css">
  @import '../css/DialogForm.css';
</style>
