export default{
  totalproductsCart(state) {
    return state.carrito.reduce(
      ( a, b ) => a + b.quantity, 0 );
  },
  totalCostCart(state){
    return state.carrito.reduce( 
      ( a, b ) => a + b.price * b.quantity, 0 );
      }
}