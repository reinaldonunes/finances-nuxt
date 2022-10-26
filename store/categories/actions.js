export default {
  getCategories(){
    return this.$axios.$get('categories')
  },

  deleteItemCategory(context, id){
    return this.$axios.$delete(`categories/${id}`)
  }
}