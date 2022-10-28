<template>
  <div class="card-body">
    <div class="row">
      <div class="col-lg-3 col-sm-6 col-12 mb-2">
        <LabelForm>Data da transação</LabelForm>
        <InputForm type="date" />
      </div>
  
      <div class="col-lg-3 col-sm-6 col-12 mb-2">
        <LabelForm>Valor</LabelForm>
        <InputForm />
      </div>
  
      <div class="col-lg-3 col-sm-6 col-12 mb-2">
        <LabelForm>Descrição</LabelForm>
        <InputForm />
      </div>
  
      <div class="col-lg-3 col-sm-6 col-12 mb-2">
        <LabelForm>Categoria</LabelForm>
        <SelectForm :options="[{ name: 'Licença de softwares', id: 1 }]" />
      </div>
  
      <div class="col-12 mt-4">
        <div class="d-flex justify-content-end">
          <a href="" class="btn text-danger">
            Cancelar
          </a>
          <ButtonEdit>
            Editar
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
  }
}
</script>

<style>

</style>