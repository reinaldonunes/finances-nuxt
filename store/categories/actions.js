export default {
  getCategories(){
    return this.$axios.$get('categories')
  },

  deleteItemCategory(context, id){
    return this.$axios.$delete(`categories/${id}`)
  },

  updateItemCategory(context, {id, data}){
    return this.$axios.$patch(`categories/${id}`, data)
  },

  addItemCategory(context, data){
    return this.$axios.$post(`categories`, data)
  }
}