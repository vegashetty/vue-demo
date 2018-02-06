<template>
  <modal :showModal="showModal" :closeAction="closeAction">
    <h2 slot="header">Create Product</h2>
    <span slot="body">
    <DialogForm></DialogForm>
    </span>
    <div slot="footer">
      <!--<button @click="checkForm">Submit</button>-->
      <!--&lt;!&ndash;<dialog-form :checkForm="checkForm"></dialog-form>&ndash;&gt;-->
      <button @click="closeAction">Cancel</button>
    </div>
  </modal>
</template>

<script>
import Modal from 'modal-vue'
import DialogForm from '../components/DialogForm.vue'

export default {
  props: ['showModal', 'closeAction', 'checkForm'],
  components: {Modal, DialogForm}
}
</script>
<style>
.modal-header {
  padding: 5px 0px 5px 15px;
}
</style>
