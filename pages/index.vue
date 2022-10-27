<template>
  <div class="d-grid gap-3">
    <TransactionBar />
    <FilterData />
    <TransactionsList />
  </div>
</template>

<script>
import TransactionBar from '@/components/TransactionBar';
import FilterData from '@/components/FilterData';
import TransactionsList from "@/components/TransactionsList"

export default {
  name: 'IndexPage',
  components: {
    TransactionBar,
    FilterData,
    TransactionsList
  },
}
</script>
