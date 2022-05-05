export default{
      GET_ALL_PRODUCTS(state, payload){
        state.productos = payload
      },
      GET_PRODUCT_FILTERED(state, payload){
        state.productosFiltrados = payload
      },
  // Cart opcion ---------------
      CHANGE_STATE_CART(state, payload){
        state.cartState = payload
      },

      ADD_PRODUCTO_CART(state, payload){
        state.carrito = [... state.carrito, JSON.parse(JSON.stringify(payload))];
      },
      DELETE_PRODUCT_CART(state, payload){
        state.carrito = JSON.parse(JSON.stringify(state.carrito)).filter((res) => res.id != payload)
      }, 
      CLEAR_CART(state){
        state.carrito = []
      },

}