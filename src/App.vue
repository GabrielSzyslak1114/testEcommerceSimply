<template>
    <Loader/>
    <main>
        <Header/>
        <CartApp/>
        <router-view/>
    </main>
</template>

<script setup>
import { onMounted, computed, provide } from 'vue';
import { useStore } from 'vuex'
import Header from './components/Header.vue';
import CartApp from './components/CartComponents/CartApp.vue';
import Loader from './components/Loader.vue';
    const store = useStore();
    onMounted(async()=>{
        await store.dispatch('shop/getProducts')
        await store.dispatch('shop/getProductsFiltrados', '')
    })
    const productos = computed(()=> store.state.shop.productosFiltrados)

    provide('productos', productos);
</script>

<style lang="scss">
.btn{
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 1rem;
    text-align: center;
    color:    $color-altern;
    font-weight: 500;
    font-size: 1.7rem;
    cursor: pointer;
    transition: all .3s ease-in-out;
    background: $background-primary;
    &:hover{
    border: 1px solid $color-secundary;
    transform: scale(.95);
}
}

*,
*::before,
*::after{
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

html{
    box-sizing: border-box;
    font-size: 62.5%;
}
body{
    font-family: "Roboto", sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    color: $color-black;
    background-color: $color-altern;
}

h2,
h3,
h4{
    font-weight: 400;
}
img{
    max-width: 100%;
    max-height: 100%;
}
a{
    text-decoration: none;
}
ul,
li{
    list-style: none;
}
.container{
    max-width: 114rem;
    margin: 0 auto;
    padding: 0 1.6rem;
}
@media only screen and (max-width: 1200px){
    .container{
        padding: 0 3rem;
    }
}
@media only screen and (max-width: 768px){
    .container{
        padding: 0 2rem;
    }
}



/* scroll config */
/* Tamaño del scroll */
body::-webkit-scrollbar {
  width: 8px;
}

 /* Estilos barra (thumb) de scroll */
 /* color del scrollbar */
body::-webkit-scrollbar-thumb {
  background: linear-gradient(233deg, #3945ee, rgb(250, 73, 226));
  border-radius: 4px;
  animation: animatescroll 1s ease-in-out infinite;
}

/* fondo del scroll */
body::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
    filter: blur(10px);
}
</style>
