<template>
  <div class="mt-2">
    <div class="justify-content-between d-flex align-items-center">
      <TitleHeading>Transações</TitleHeading>
      <ButtonAct>Nova Transação</ButtonAct>
    </div>

    <div class="bg-light-gray rounded-8 dashed-border box-shadow mt-4 p-4">
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
          <SelectForm :options="[{ name: 'Equipamentos de TI, assinatura de softwares e cursos', id: 1 }]" v-model="form.categoryId" />
        </div>
      
        <div class="col-12 mt-4">
          <div class="d-flex justify-content-end">
            <a href="" class="btn text-danger">
              Cancelar
            </a>
            <ButtonAct @click="addTransaction">
              Adicionar
            </ButtonAct>
          </div>
        </div>
      </div>
    </div>
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

  data(){
    return{
      form: {
        date: '',
        amount: 0,
        description: '',
        categoryId: ''
      }
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

</style>