<template>
  <div>
    <div class="col-12 align-items-center d-flex justify-content-between">
      <div class="flex-column d-flex">
        <span class="badge bg-primary text-white p-2 px-4 mb-2" style="width:fit-content">{{ transaction.category.name }}</span>
        <span class="lead text-secondary">{{ transaction.description }}</span>
      </div>
      <div class="d-flex align-items-center text-right">
        <svg class="text-success" width="24px" fill="none" stroke="currentColor" viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
        </svg>
        <span class="font-weight-bold ml-1 mr-1">{{ transaction.amount }}</span>
        <button class="btn" @click="payment.is_payable = !payment.is_payable">
          <svg class="w-4 h-4 drop-icon" fill="none" width="18px" stroke="currentColor" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg" :class="{'turn-drop' : payment.is_payable}">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
      </div>
    </div>
    <transition mode="out-in">
      <TransactionEdit
        v-if="payment.is_payable"
        :transaction="transaction" 
        @cancel="payment.is_payable = false"
        @update="onUpdate"
      />
    </transition>
  </div>
</template>

<script>
import TransactionEdit from '@/components/transactions/TransactionEdit';

export default {
  name: 'TransactionCard',
  props: ["transaction"],
  components:{
    TransactionEdit
  },

  props: {
    transaction: {
      type: Object,
      default: () => ({})
    }
  },

  data() {
    return {
      payment: {
        is_payable: false
      }
    }
  },
 
  methods:{
    onUpdate(transaction){
      this.$emit('update', transaction)
    }
  }
}
</script>

<style>
  .drop-icon{ transition: all .3s; }
  .turn-drop{ transform:rotate(180deg); }
</style>