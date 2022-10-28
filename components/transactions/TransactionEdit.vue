<template>
  <div class="card-body">
    <div class="row">
      <div class="col-lg-3 col-sm-6 col-12 mb-2">
        <LabelForm>Data da transação</LabelForm>
        <InputForm type="date" v-model="localTransaction.date" />
      </div>
  
      <div class="col-lg-3 col-sm-6 col-12 mb-2">
        <LabelForm>Valor</LabelForm>
        <InputForm v-model="localTransaction.amount" />
      </div>
  
      <div class="col-lg-3 col-sm-6 col-12 mb-2">
        <LabelForm>Descrição</LabelForm>
        <InputForm v-model="localTransaction.description"  />
      </div>
  
      <div class="col-lg-3 col-sm-6 col-12 mb-2">
        <LabelForm>Categoria</LabelForm>
        <SelectForm :options="categories" v-model="localTransaction.categoryId"  />
      </div>
  
      <div class="col-12 mt-4">
        <div class="d-flex justify-content-end">
          <button @click="onCancel" class="btn text-danger">
            Cancelar
          </button>
          <ButtonEdit @click="updateTransaction">
            Salvar
          </ButtonEdit>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LabelForm from '@/components/ui/LabelForm'
import InputForm from '@/components/ui/InputForm'
import SelectForm from '@/components/ui/SelectForm'
import ButtonEdit from '@/components/ui/ButtonAct'

export default {
  name: 'TransactionEdit',
  components:{
    LabelForm,
    InputForm,
    SelectForm,
    ButtonEdit
  },
  props: {
    transaction: {
      type: Object,
      default: () => ({})
    }
  },

  data(){
    return{
      categories: [],
      localTransaction: {
        date: this.transaction.date,
        description: this.transaction.description,
        amount: this.transaction.amount,
        categoryId: this.transaction.categoryID
      }
    }
  },

  async fetch() {
    this.categories = await this.$store.dispatch('categories/getCategories')
  },

  methods: {
    updateTransaction(){
      const data = {
        date: this.localTransaction.date,
        description: this.localTransaction.description,
        amount: this.localTransaction.amount,
        categoryId: this.localTransaction.categoryId
      }
      this.$store.dispatch('transactions/updateTransaction', { id: this.transaction.id, data: data})
        
    },

    onCancel(){
      this.$emit('cancel')
    }
  }
}
</script>
