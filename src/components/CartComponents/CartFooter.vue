<template>
    <section class="cart__footer__content">
        <h4> Total products: {{totalproductsCart}}</h4>
        <h3> Precio total: ${{totalCostCart}} <span class="carrito__total">0</span></h3>
        <router-link class="btn" to="/checkout" @click="store.dispatch('shop/changeStateCart', false)">Comprar</router-link>
        <button class="clear__carrito btn" @click="store.commit('shop/CLEAR_CART')">remover carrito</button>
    </section>

</template>

<script setup>
import {computed} from 'vue';
import {useStore} from 'vuex';
const store = useStore();

const totalproductsCart = computed(()=> store.getters['shop/totalproductsCart']);
const totalCostCart = computed(()=> store.getters['shop/totalCostCart']);


</script>

<style lang="scss" scoped>

.cart__footer__content{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
}
</style>