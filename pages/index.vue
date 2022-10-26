<template>
  <div class="d-grid gap-3">
    <TransactionBar />
    <div class="mt-5 w-75 pb-5 border-bottom d-flex align-items-center">
      <div class="mr-2">
        <AppFormLabel>Descrição</AppFormLabel>
        <AppFormInput />
      </div>

      <div>
        <AppFormLabel>Categoria</AppFormLabel>
        <AppFormSelect :options="[{ name: 'Licença de softwares', id: 1 }]" />
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/ui/ButtonAct';
import AppFormInput from '@/components/ui/InputForm';
import AppFormLabel from '@/components/ui/LabelForm';
import AppFormSelect from '@/components/ui/SelectForm';
import TransactionBar from '@/components/TransactionBar';

export default {
  name: 'IndexPage',
  components: {
    AppButton,
    AppFormInput,
    AppFormLabel,
    AppFormSelect,
    TransactionBar,
  },
  data() {
    return {
    }
  }
}
</script>
