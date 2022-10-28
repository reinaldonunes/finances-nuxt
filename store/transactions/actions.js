export default{
  getTransactions(){
    return this.$axios.$get('transactions')
  },

  addTransaction(context, data){
    return this.$axios.$post('transactions', data)
  },

  getCategories(){
    return this.$axios.$get('categories')
  },
}