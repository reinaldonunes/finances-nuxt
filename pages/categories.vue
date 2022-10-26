<template>
  <div class="mt-2">
    <div class="d-flex mb-2">
      <TitleHeading>Categorias</TitleHeading>
    </div>
    
    <div class="d-grid">
      <div class="d-flex align-items-center">
        <div class="d-flex mb-4">
          <AppFormInput/>
          <AppButton>
            Adicionar
          </AppButton>
        </div>
      </div>

      <table class="table">
        <thead class="table-secondary">
          <tr>
            <th scope="col" colspan="2">Categoria</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white">
            <td>
              <div class="w-50">
                <AppFormInput />
              </div>
            </td>
            <td class="text-right">
              <a
                href="#"
                class="btn btn-sm btn-outline-secondary"
              >Editar
              </a>

              <a
                href="#"
                class="btn btn-sm btn-outline-danger"
              >Excluir
              </a>
            </td>
          </tr>
        
          <tr class="bg-white border-top" v-for="item in categories" :key="item.id">
            <td class="align-middle">
              {{ item.name }}
            </td>
            <td class="text-right">
              <a
                href="#"
                class="btn btn-sm btn-outline-secondary"
                >Editar
              </a>
              
              <button
                class="btn btn-sm btn-outline-danger" 
                data-toggle="modal"
                data-target="#modalDialog"
              >Excluir
              </button>

              <b-button id="show-btn" @click="openModal(item)">Open Modal</b-button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <b-modal id="bv-modal-example" hide-footer>
      <template #modal-title>
        Excluir item
      </template>
      <div class="d-block text-center">
        <h5>Deseja mesmo excluir o item:<br /><strong>{{ modal.itemName }}</strong>?</h5>
      </div>
      <div class="d-flex justify-content-between mt-4">
        <b-button class="mr-1 btn btn-secondary mt-0" block @click="$bvModal.hide('bv-modal-example')">Cancelar</b-button>
        <b-button class="mr-1 btn btn-danger mt-0" block @click="deleteCategory(modal.itemId)">Confirmar</b-button>
      
      </div>
    </b-modal>

  </div>
</template>

<script>
import AppButton from '@/components/ui/ButtonAct';
import AppFormInput from '@/components/ui/InputForm';
import AppFormLabel from '@/components/ui/LabelForm';
import AppFormSelect from '@/components/ui/SelectForm';
import TitleHeading from '@/components/ui/TitleHeading'

export default {
  name: 'CategoriesPage',
  components: {
    AppButton,
    AppFormInput,
    AppFormLabel,
    AppFormSelect,
    TitleHeading,
  },

  async asyncData( {store} ){
    return{
      categories: await store.dispatch('categories/getCategories')
    }
  },

  data() {
    return {
      modal: {
        itemName: '',
        itemId: null
      }
    };
  },

  methods: {
    openModal(item){
      this.modal.itemName = item.name
      this.modal.itemId = item.id
      this.$bvModal.show('bv-modal-example')
    },
    
    deleteCategory(id){
      setTimeout(() => {
        this.$store.dispatch('categories/deleteItemCateogory', id)
      },3500)
    }
  },
};
</script>
<style scoped>
  .table{
    border-radius:5px;
    overflow:hidden;
  }
  .table th,
  .table td{
    border:0px !important;
  }
</style>
