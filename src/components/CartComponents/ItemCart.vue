<template>
  <div class="carrito__item">
    <img :src="item.image" alt="reloj">
    <div class="carrito__item__info">
      <h3>{{item.title}} </h3>
        <p class="price">${{item.price}}</p>
    </div>
    <span class="carrito__item__quantity">
      <p>{{item.quantity}}</p>
    </span>  
    <span class="carrito__item__remove">
      <a @click="deleteProductCart(item.id)"><i class="fas fa-close"></i></a> 
    </span>
  </div>
</template>

<script setup>
import {useStore} from 'vuex';
import {inject, ref} from 'vue';
const props = defineProps({
    item: {
        type: Object,
        required: true
    },
});

const store = useStore();


const deleteProductCart = (id)=>{
    store.dispatch('shop/deleteItemCart', id);
};





</script>

<style lang="scss">



.carrito__item{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 15px;
    position: relative;
    margin: 2rem auto;
    width: 100%;
    background: white;
    border-radius: 25px;
    padding: 25px 5px 10px;
    overflow: hidden;
@media only screen and (max-width: 990px){
        width: 100%;
}
@media(max-width: 670px){
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
}
}


.carrito__item img{
    max-height: 150px;
    @media(max-width: 990px){
        margin: 0 auto;
    }
}
.carrito__item h3{
    font-weight: 500;
    margin-bottom: 1.5rem;
    @media(max-width: 400px){
      font-size: 1rem !important;
    }
}

.carrito__item .price{
    color: $color-secundary;
    font-weight: 700;
    @media(max-width: 400px){
      font-size: 1.3rem !important;
  }
}
// .carrito__item .remove__item{
//     cursor: pointer;
//     color: $color-danger;
//     font-size: 4rem;
// }



.carrito__item__quantity{
  position: absolute;
    right: 0;
    bottom: 0;
    background: $background-primary;
    color: white;
    width: 50px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.carrito__item__remove{
  position: absolute;
    top: 20px;
    right: 20px;
    font-size: 18px;
    color: $color-danger;
}

.carrito__item__info{
  width: 50%;
  @media(max-width: 990px){
    width: 75%;
  }
}






</style>