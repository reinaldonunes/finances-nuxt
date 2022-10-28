<template>
  <div class="d-grid gap-3">
    <TransactionBar @after-add="afterAdd" />
    <FilterData />
    <TransactionsList :transactions="transactionsGrouped" />
  </div>
</template>

<script>
import { groupBy, orderBy } from 'lodash'
import TransactionBar from '@/components/transactions/TransactionBar'
import FilterData from '@/components/FilterData'
import TransactionsList from "@/components/TransactionsList"

export default {
  name: 'IndexPage',
  components: {
    TransactionBar,
    FilterData,
    TransactionsList
  },

  async asyncData({ store }) {
    return {
      transactions: await store.dispatch('transactions/getTransactions')
    }
  },
  computed:{
    transactionsGrouped(){
      return groupBy(orderBy(this.transactions, 'date', 'desc'), 'date')
    }
  },

  methods:{
    afterAdd(transaction){
      this.transactions.push(transaction)
    }
  }
  
}
</script>
