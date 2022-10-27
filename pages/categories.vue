<template>
  <div class="mt-2">
    <div class="d-flex mb-2">
      <TitleHeading>Categorias</TitleHeading>
    </div>
    
    <div class="d-grid">
      <div class="d-flex align-items-center">
        <div class="d-flex mb-4">
          <AppFormInput v-model="name"/>
          <AppButton @click="addNewCategory">
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
          <tr class="bg-white border-top" v-for="item in categories" :key="item.id">
            <td class="align-middle">
              <div class="w-50" v-if="item.is_updating">
                <AppFormInput v-model="item.name" @keydown.enter="updateCategory(item)" />
              </div>
              <div v-else>
                {{ item.name }}
              </div>
            </td>
            <td class="text-right">
              <button
                class="btn btn-sm btn-outline-secondary"
                @click.stop.prevent="toUpdate(item)"
                >Editar
              </button>
              
              <b-button
                id="show-btn" 
                class="btn btn-sm btn-outline-danger" 
                @click="openModal(item)"
              >Excluir</b-button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <b-modal id="bv-modal-example" class="overflow-hidden" hide-footer>
      <template #modal-title>
        Exclusão de registro
      </template>
      <section v-if="!modal.progress">
        <div class="d-block text-center">
          <h5>Deseja mesmo excluir o item:<br /><strong>{{ modal.itemName }}</strong>?</h5>
        </div>
        <div class="d-flex justify-content-between mt-4">
          <b-button class="mr-1 btn btn-secondary mt-0" block @click="$bvModal.hide('bv-modal-example')">Cancelar</b-button>
          <b-button class="mr-1 btn btn-danger mt-0" block @click="deleteCategory(modal.itemId)">Confirmar</b-button>
        </div>
        <span class="progress_bar" :class="{'active': modal.loading }"></span>
      </section>
      <section v-else>
        <h5 class="text-success text-center">O item foi removido com sucesso!</h5>
      </section>
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
        .then(response => response.map(o => ({...o, is_updating: false })))
    }
  },

  data() {
    return {
      modal: {
        itemName: '',
        itemId: null,
        progress:false,
        loading:false
      },
      name: ''
    };
  },

  methods: {
    openModal(item){
      this.modal.progress = false
      this.modal.itemName = item.name
      this.modal.itemId = item.id
      this.$bvModal.show('bv-modal-example')
    },
    toUpdate(category){
      category.is_updating = true
    },

    updateCategory(category){
      const data = {
        name: category.name
      }
      this.$store.dispatch('categories/updateItemCategory', { id: category.id, data})
      .then(() => {
        category.is_updating = false;
      })
    },

    deleteCategory(id){
      this.modal.loading = true
      setTimeout(() => {
        this.modal.loading = false
        this.modal.progress = true
        
        this.$store.dispatch('categories/deleteItemCategory', id)
        .then(() => {
          const indexItem = this.categories.findIndex(i => i.id === id)
          this.categories.splice(indexItem, 1)
        })
      },1500)
    },

    addNewCategory(){
      if(!this.name){
        return
      }

      const data = {
        name: this.name
      }
      this.$store.dispatch('categories/addItemCategory', data)
      .then((response) => {
        this.name = ""
        this.categories.push(response)
      })
    },
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

    @media screen and (max-width:768px) {
      .full-size-width{
        width:100%;
      }
      .table tr th {
        padding: 12px 0px;
        text-align: center;
      }
  
      .table tr td {
        text-align: center;
        justify-content: center;
        width: 100%;
        display: flex;
        flex: 1;
        padding: 6px 0px;
      }
  
      .table td button {
        margin-right: 2px;
        margin-left: 2px;
        margin-bottom: 8px;
      }
    }

  #show-btn{
    background:none;
  }
  #show-btn:focus,
  #show-btn:hover{
    background:#dc3545;
  }

  .progress_bar{
    position:absolute;
    bottom:0px;
    left:0px;
    background:green;
    width:0;
    height:4px;
    display:block;

    transition: all 2s;
  }
    .progress_bar.active{width:100%; }
</style>
