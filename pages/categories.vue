<template>
  <div class="mt-2">
    <div class="d-flex mb-2">
      <h1 class="font-weight-bold h3 text-nuxt-indigo">
        Categorias
      </h1>
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
        <tbody class="divide-y divide-gray-200">
          <tr class="bg-white">
            <td class="border-bottom-dark">
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
        
          <tr class="bg-white">
            <td class="border-bottom-dark">
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
export default {
  name: 'CategoriesPage',
  components: {
    AppButton,
    AppFormInput,
    AppFormLabel,
    AppFormSelect,
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
