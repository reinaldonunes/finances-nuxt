<template>
  <div class="mt-2">
    <div class="d-flex mb-2">
      <TitleHeading>Categorias</TitleHeading>
    </div>
    
    <div class="d-grid">
      <div class="d-flex align-items-center">
        <div class="d-flex mb-4">
          <AppFormInput :class="me-1" />
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
        
          <tr class="bg-white border-top">
            <td>
              Item adicionado
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
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/ui/ButtonAct';
import AppFormInput from '@/components/ui/InputForm';
import AppFormLabel from '@/components/ui/LabelForm';
import AppFormSelect from '@/components/ui/SelectForm';
import TitleHeading from '@/components/ui/TitleHeading.vue'
export default {
  name: 'CategoriesPage',
  components: {
    AppButton,
    AppFormInput,
    AppFormLabel,
    AppFormSelect,
    TitleHeading
  },

  data() {
    return {};
  },

  methods: {},
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
