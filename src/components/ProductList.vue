<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h3 class="panel-title">Product List</h3>
    </div>
    <div class="panel-body">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th> Product type</th>
            <th> Investment Objective</th>
            <th> Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products">
            <td> {{ product.name }} </td>
            <td> {{ product.description }} </td>
            <td> {{ product.prodType }} </td>
            <td> {{ product.invObjective }} </td>
            <td><span class="glyphicon glyphicon-trash" aria-hidden="true" v-on:click="removeProduct(product)"></span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProductList',
  props: ['products', 'remove'],
  methods: {
    removeProduct: function (product) {
      this.remove(product);
    }
  }
}
</script>
