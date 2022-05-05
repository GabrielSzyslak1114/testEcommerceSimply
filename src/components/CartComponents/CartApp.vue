<template>
    <!--Carrito-->
    
    <section :class="activarCarrito">
      <div :class="bodyCarrito">
        <a class="close__carrito" @click="store.dispatch('shop/changeStateCart', false)"> 
          <i class="fas fa-close"></i>
        </a>
        <h1>Su Carrito</h1>

        <div class="carrito__center">
            <ItemCart v-for="item of carrito" :key="item.id" :item="item"/>
        </div>

        <div class="carrito__footer">
            <th v-if="carrito.length === 0">¡Carrito vacío - comience a comprar!</th>
            <CartFooter v-else/>
        </div>
      </div>
    </section>

</template>

<script setup>
import { computed, ref, provide} from 'vue';
import {useStore} from 'vuex';
import ItemCart from './ItemCart.vue';
import CartFooter from './CartFooter'
const store = useStore();
const quantity = ref(1);
provide('quantity', quantity)


        const carrito = computed(()=> store.state.shop.carrito)
        const activarCarrito = computed(()=> store.state.shop.cartState === true 
       ? 'carrito__overlay carrito__overlayShow' 
       : 'carrito__overlay'
      )
      const bodyCarrito = computed(()=> store.state.shop.cartState === true 
      ? 'carrito carritoShow'
      : 'carrito')
    
</script>

<style lang="scss" scoped>


/* Carrito */
.carrito__overlay{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 300ms ease-in-out;
    background-color: rgba(0, 0, 0, .7);
     visibility: hidden;
    z-index: 2;
}
.carrito{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(.5);
    width: 60%;
    height: 80%;
    padding: 1.6rem;
    border-radius: 2rem;
    overflow-x: scroll;
    background-color: #f2f2f2;
     opacity: 0; 
     visibility: hidden; 
    transform: all 300ms ease-in-out;
}

.carritoShow{
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
    visibility: visible;

}

.carrito__overlayShow{
    visibility: visible;
}
.carrito .close__carrito{
    font-size: 4.5rem;
    cursor: pointer;
    color: $color-black;
    transform: all 300ms ease-in-out;
}
.carrito__center{
    display: grid;
    gap: 15px;
}
.carrito .close__carrito:hover{
    color: $color-danger;
}
.carrito__item span{
    font-size: 2rem;
    color: rgb(233, 35, 35);
}
.carrito h1{
    text-align: center;
    margin-bottom: 2rem;
}
.carrito__footer{
    text-align: center;
    margin: 3rem;
}
.carrito__footer .btn{
    display: inline-block;
    padding: 1rem 3rem;
    font-size: 2rem;
    background-color: rgb(238, 121, 121);
    border: none;
    margin-top: 2rem;
}
.carrito__footer .btn:focus{
    outline: none;
}

@media(max-width: 990px){
    .carrito{
        width: 100%;
        height: 100%;
        border-radius: 0rem;
    }
    .carrito__item h3{
        font-size: 1.4rem;
        margin-bottom: 1rem;
    }
    .btn{
        padding: .8rem 1.5rem;
        font-size: 1.6rem;
    }
}


</style>