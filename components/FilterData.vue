<template>
  <div class="row mt-5 pb-5 border-bottom">
    <div class="col-md-3 col-12 mb-2">
      <AppFormLabel>Descrição</AppFormLabel>
      <AppFormInput />
    </div>

    <div class="col-md-3 col-12 mb-2">
      <AppFormLabel>Categoria</AppFormLabel>
      <AppFormSelect :options="[{ name: 'Licença de softwares', id: 1 }]" />
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
  }
}
</script>

<style>

</style>