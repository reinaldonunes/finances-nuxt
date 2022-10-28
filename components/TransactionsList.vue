<template>
  <div class="row">
    <div
      class="col-12 mt-5 d-grid gap-2"
      v-for="(group, index) in transactions"
      :key="index"
    >
      <h6 class="font-weight-bold tab-date">{{ parseDate(index) }}</h6>
      <aside
        class="card py-3"
        v-for="transaction in group"
        :key="transaction.id"
      >
        <TransactionCard
          :transaction="transaction"
          @update="onUpdate"  
        />
      </aside>
    </div>

  </div>
</template>

<script>
import SelectForm from '@/components/ui/SelectForm.vue'
import InputForm from '@/components/ui/InputForm.vue'
import LabelForm from '@/components/ui/LabelForm.vue'
import ButtonEdit from '@/components/ui/ButtonAct.vue'
import TransactionCard from '@/components/transactions/TransactionCard.vue'

export default {
  name: 'TransactionsList',
  components:{
    SelectForm,
    InputForm,
    LabelForm,
    ButtonEdit,
    TransactionCard
  },
  props: {
    transactions:{
      type: Object,
      default: () => ({})
    }
  },

  methods:{
    parseDate(date){
      return this.$dayjs(date).format('DD/MM/YYYY')
    },

    onUpdate(transaction) {
      this.$emit('update', transaction)
    }
  },

}
</script>

<style>
.tab-date{
    padding:12px;
    border-radius:4px 4px 0px 0px;
    border:1px solid rgba(0, 0, 0, 0.125);
    z-index:2;
    position:relative;
    display:block;
    background:#eee;
    width:fit-content;
    margin-bottom:-1px;
  }

  .card{
    margin-bottom:-5px;
  }
</style>