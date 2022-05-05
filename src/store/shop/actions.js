import apifakeStore from '../../services/apiEcommerce';
export default{
    async getProducts({commit}){
        const res = await apifakeStore.get('products')
        commit('GET_ALL_PRODUCTS', res.data)
      },
  
      getProductsFiltrados({commit, state}, categoria){
        const filtro = state.productos.filter(producto => producto.category.includes(categoria))
        commit('GET_PRODUCT_FILTERED', filtro)
      },
      filtroBuscador({commit, state}, texto){
        const textCliente = texto.toLowerCase()
        const filtro = state.productos.filter(producto => {
          if (producto.title.toLowerCase().includes(textCliente)) {
              return producto
          }
        });
        commit('GET_PRODUCT_FILTERED', filtro)
      },
      changeStateCart({commit}, payload) {
        commit('CHANGE_STATE_CART', payload)
      },
      addCart({commit}, producto){
        commit('ADD_PRODUCTO_CART', producto)
      },
      deleteItemCart({commit}, payload){
        commit('DELETE_PRODUCT_CART', payload)
      },
      updateProductCart({commit}, payload){
        commit('UPDATE_PRODUCT_CART', payload)
      }
}