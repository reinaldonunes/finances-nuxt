<template>
  <div class="mt-2">
    <div class="justify-content-between d-flex align-items-center">
      <TitleHeading>Transações</TitleHeading>
      <ButtonAct @click="transaction.new = !transaction.new">Add transação</ButtonAct>
    </div>

    <transition mode="out-in">
      <div class="bg-light-gray rounded-8 dashed-border box-shadow mt-4 p-4" v-show="transaction.new">
        <div class="row">
          <div class="col-lg-3 col-sm-6 col-12 mb-2">
            <LabelForm>Data da transação</LabelForm>
            <InputForm type="date" v-model="form.date" />
          </div>

          <div class="col-lg-3 col-sm-6 col-12 mb-2">
            <LabelForm>Valor</LabelForm>
            <InputForm v-model="form.amount" type="number"/>
          </div>

          <div class="col-lg-3 col-sm-6 col-12 mb-2">
            <LabelForm>Descrição</LabelForm>
            <InputForm v-model="form.description"/>
          </div>

          <div class="col-lg-3 col-sm-6 col-12 mb-2">
            <LabelForm>Categoria</LabelForm>
            <SelectForm :options="categories" v-model="form.categoryId" />
          </div>
        
          <div class="col-12 mt-4">
            <div class="d-flex justify-content-end">
              <button @click="transaction.new = !transaction.new" class="btn text-danger">
                Cancelar
              </button>
              <ButtonAct @click="addTransaction">
                Adicionar
              </ButtonAct>
            </div>
          </div>
        </div>
      </div>
    </transition>

  </div>
</template>

<script>
import TitleHeading from '../components/ui/TitleHeading.vue'
import ButtonAct from '@/components/ui/ButtonAct.vue'
import SelectForm from '@/components/ui/SelectForm.vue'
import InputForm from '@/components/ui/InputForm.vue'
import LabelForm from '@/components/ui/LabelForm.vue'

export default {
  name: 'TransactionBar',
  components:{
    TitleHeading,
    ButtonAct,
    SelectForm,
    InputForm,
    LabelForm,
  },

  async fetch(){
    this.categories = await this.$store.dispatch('categories/getCategories')
  },


  data(){
    return{
      form: {
        date: '',
        amount: '',
        description: '',
        categoryId: ''
      },

      transaction: {
        new: false
      },

      categories: []
    }
  },
  methods:{
    addTransaction(){
      this.$store.dispatch('transactions/addTransaction', this.form)
    }
  }

}
</script>

<style>
  .v-enter,
  .v-leave-to {
    opacity: 0
  }

  .v-enter {
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0)
  }

  .v-leave-to {
    -webkit-transform: translate3d(0, 20px, 0);
    transform: translate3d(0, 20px, 0)
  }

  .v-enter-active,
  .v-leave-active {
    -webkit-transition: all .3s;
    transition: all .3s
  }
</style>