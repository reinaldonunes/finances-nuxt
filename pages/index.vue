<template>
  <div class="d-grid gap-3">
    <TransactionBar/>
    <FilterData />
    <TransactionsList :transactions="transactionGrouped" />
  </div>
</template>

<script>
import { groupBy, orderBy } from 'lodash'
import TransactionBar from '@/components/TransactionBar'
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
    transactionGrouped(){
      return groupBy(orderBy(this.transactions, 'date', 'desc'), 'date')
    }
  },
  
}
</script>
