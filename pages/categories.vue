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

      <table class="table box-shadow">
        <thead class="bg-dark">
        <tr>
          <th
            scope="col"
            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Categoria
          </th>
          <th
            scope="col"
            class="relative px-6 py-3"
          >
            <span class="sr-only">Edit</span>
          </th>
        </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
        <tr class="bg-white">
          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            <div class="w-72">
              <AppFormInput />
            </div>
          </td>

          <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-4">
            <a
              href="#"
              class="text-indigo-600 hover:text-indigo-900"
            >Edit
            </a>

            <a
              href="#"
              class="text-red-600 hover:text-red-900"
            >Excluir
            </a>
          </td>
        </tr>

        <tr class="bg-white">
          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            Categoria 2
          </td>

          <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-4">
            <a
              href="#"
              class="text-indigo-600 hover:text-indigo-900"
            >Edit
            </a>

            <a
              href="#"
              class="text-red-600 hover:text-red-900"
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
