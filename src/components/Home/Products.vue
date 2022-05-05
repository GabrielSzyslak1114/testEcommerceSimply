<template>
  
    <!--Productos-->
    <section class="productos">
      <div class="productos__center">
        <div class="producto" v-for="producto in productos" :key="producto.id">
          <div class="image__container">
            <img :src="producto.image" alt="">
          </div>
          <div class="producto__footer">
            <h1>{{producto.title}}</h1>
            <div class="price">${{producto.price}}</div>
          </div>
          <div class="bottom">
            <div class="btn__group">
              <router-link :to="`/detailProduct/${producto.id}`" class="btn view">Vista</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script setup>
import { inject } from "@vue/runtime-core";
import {useStore} from "vuex";
const store = useStore()
const productos = inject('productos')

  // const agregar = producto =>{
  //   store.dispatch('shop/addCart', producto)
  //   store.dispatch('shop/changeStateCart', true)
  // }
</script>

<style lang="scss" scoped>

/* PRODUCTOS */

.productos{
    padding: 5rem 0;
    width: 80%;
    margin: 0 auto;
    @media (max-width: 550px){
      width: 98%;
    }
}
.productos__center{
    padding: 0 3rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    place-content: center;
    gap: 3rem 1rem;
    @media (max-width: 350px){
      padding: 0 1rem;
    }
}

.producto{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    box-shadow: 0 .5rem 1.5rem rgba(0, 0, 0, .2);
    padding: 1.4rem;
    @media (max-width: 350px){
        padding: 2rem 1.5rem;
      }
}


.image__container{
  @media(max-width: 500px){
    width: 80%;
  }
}
.image__container img{
    width: 100%;
    height: 240px;
}
.producto__footer{
    padding: 1rem .4rem;
    width: 100%;
      @media only screen and (max-width: 890px){
      width: 80%;
    }
}
.producto__footer h1{
    height: 70px;
    overflow: hidden;
    font-size: 2rem;
    font-weight: 500;
    margin: 0 0 5px;
}




.price{
    font-weight: 700;
    font-size: 1.8rem;
}

</style>