<template>
  <div class="row mt-5 pb-5 border-bottom">
    <div class="col-md-3 col-12 mb-2">
      <AppFormLabel>Descrição</AppFormLabel>
      <AppFormInput placeholder="Buscar transação..." v-model="form.description" />
    </div>

    <div class="col-md-3 col-12 mb-2">
      <AppFormLabel>Categoria</AppFormLabel>
      <AppFormSelect :options="categories" v-model="form.categoryId" />
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/ui/ButtonAct';
import AppFormInput from '@/components/ui/InputForm';
import AppFormLabel from '@/components/ui/LabelForm';
import AppFormSelect from '@/components/ui/SelectForm';

export default {
  name: 'FilterData',
  components: {
    AppButton,
    AppFormInput,
    AppFormLabel,
    AppFormSelect,
  },

  data(){
    return{
      categories: [],
      form: {
        description: '',
        categoryId: ''
      }
    }
  },

  async fetch(){
    this.categories = await this.$store.dispatch('categories/getCategories')
  },

  watch:{
    form:{
      deep: true,
      handler(){
        this.onFilter()        
      }
    }
  },

  methods:{
    onFilter(){
      this.$emit('filter', {
        description: this.form.description || undefined,
        categoryId: this.form.categoryId || undefined
      })
    }
  }
}
</script>

<style>

</style>