<template>
  <div class="row">
    <div class="col-12 mt-5 d-grid gap-2">
      <h6 class="mb-2 font-weight-bold">04 de out de 2022</h6>
      <aside class="card py-3">
        <div class="col-12 align-items-center d-flex justify-content-between">
          <div class="flex-column d-flex">
            <span class="badge bg-primary text-white p-2 px-4 mb-2" style="width:fit-content">Software</span>
            <span class="lead text-secondary">Pagamento de Boletos</span>
          </div>
          <div class="d-flex align-items-center text-right">
            <svg class="text-success" width="24px" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
            <span class="font-weight-bold ml-1 mr-1">R$ 43,02</span>
            <button class="btn">
              <svg class="w-4 h-4" fill="none" width="18px" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
          </div>
        </div>
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
      </aside>
    </div>

    <div class="col-12 mt-5 d-grid gap-2">
      <h6 class="mb-2 font-weight-bold">04 de out de 2022</h6>
      <aside class="card py-3">
        <div class="col-12 align-items-center d-flex justify-content-between">
          <div class="flex-column d-flex">
            <span class="badge bg-primary text-white p-2 px-4 mb-2" style="width:fit-content">Software</span>
            <span class="lead text-secondary">Pagamento de Boletos</span>
          </div>
          <div class="d-flex align-items-center text-right">
            <svg class="text-success" width="24px" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
            <span class="font-weight-bold ml-1 mr-1">R$ 43,02</span>
            <button class="btn">
              <svg class="w-4 h-4" fill="none" width="18px" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
          </div>
        </div>
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
      </aside>
    </div>

  </div>
</template>

<script>
import SelectForm from '@/components/ui/SelectForm.vue'
import InputForm from '@/components/ui/InputForm.vue'
import LabelForm from '@/components/ui/LabelForm.vue'
import ButtonEdit from '@/components/ui/ButtonAct.vue'

export default {
  name: 'TransactionsList',
  components:{
    SelectForm,
    InputForm,
    LabelForm,
    ButtonEdit,
  }
}
</script>

<style>

</style>