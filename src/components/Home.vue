<template>
  <div class="homePage" id="home">
  <div class="nav">
    <ul>
      <li><a class="active" href="#dashBoard">Dashboard</a></li>
      <li><a href="#portfolios">Portfolios</a></li>
      <li class="withSubMenu"><a href="#products">Products</a>
        <ul>
          <li class="createProduct"><a href="#createProduct" @click="showModal = true">Create product</a></li>
          <li class="invObj">
            <a href="#invObj">Inv. Obj</a>
          </li>
        </ul>
      </li>
      <li><a href="#monitors">Monitors</a></li>
    </ul>
  </div>
  <div class="mainBody">
    <img src="~@/assets/vestLogo.jpg"  alt="Logo" width="100px" height="100px"/>
    <h1>Welcome to Vestmark 2.0</h1>
  </div>
    <Dialog :showModal="showModal" :closeAction="closeDialog"></Dialog>
</div>
</template>

<style lang="css">
  @import '../css/home.css';
</style>

<script>
import Dialog from '../components/Dialog.vue'

export default {
  name: 'Home',
  components: {Dialog},
  data () {
    return {
      showModal: false
    }
  },
  methods: {
    closeDialog () {
      this.showModal = false
    }
  }
}
</script>
