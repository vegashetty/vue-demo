<template>
  <modal :showModal="showModal" :closeAction="closeAction">
    <h2 slot="header">Create Product</h2>
    <span slot="body">
    <DialogForm></DialogForm>
    </span>
    <div slot="footer">
      <button @click="closeAction">Cancel</button>
    </div>
  </modal>
</template>

<script>
import Modal from 'modal-vue'
import DialogForm from '../components/DialogForm.vue'

export default {
  props: ['showModal', 'closeAction'],
  components: {Modal, DialogForm}
}
</script>
<style>
.modal-header {
  background-color: lightsteelblue;
  padding: 5px 0px 5px 15px;
}
</style>
