<template>
    <main >
        <Loader/>
    </main>

	<main class="container detail__body" id="detalles">
	    <article  class="detail__article">
			<img :src="producto.image" alt="" class="detail__article__image">
			<div class="detail__article__content">
				<h3 class="detail__article__content__title">{{producto.title}}</h3>
				<p class="detail__article__content__price">
                    <b>Precio: </b> ${{producto.price}}
                </p>
				<p class="detail__article__content__description">
				    <b>Descripcion: </b> 
                    <span>{{producto.description}}</span>
				</p>
				<div class="bottom">
    	    		<div class="btn__group">
					<a @click="agregar(producto)" class="btn addToCart">Añadir carrito</a>
					<router-link to="/" class="btn addToCart">regresar</router-link>
					</div>
                    <div class="btn__group">            
                       <a class="btn__group__quantity" @click="decrementQuantity"><i class="fa fa-arrow-circle-left"></i></a>
                            <p>{{quantity}}</p>
                        <a class="btn__group__quantity" @click="incrementQuantity"><i class="fa fa-arrow-circle-right"></i></a>
                    </div>
				</div>
			</div>
		</article>
	</main>


</template>

<script setup>
import Loader from '../components/Loader'
import { ref, onMounted, computed } from "vue";
import {useRoute} from 'vue-router';
import apifakeStore from '../services/apiEcommerce';
import {useStore} from "vuex";
const store = useStore()

	const producto = ref({})
	const {id} = useRoute().params;

    
	onMounted(async() => {
            try {
                const res = await apifakeStore.get(`products/${id}`)
                producto.value = await res.data
            } catch (error) {
                console.log(error, 'no consumio')
            }
	});

  const agregar = (producto) =>{
    store.dispatch('shop/addCart', {
        ...producto, quantity: quantity.value
        });
    store.dispatch('shop/changeStateCart', true)
    console.log(producto)
        
  }
  const quantity = ref(1)

const incrementQuantity = (id) => {
    quantity.value++;
};
const decrementQuantity = (id) => {
  if(quantity.value > 1) quantity.value--;
};

</script>

<style scoped lang="scss">

/* Detalles */

.detail__body{
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 15rem;
}
.detail__article{
    display: flex;
    justify-content: space-between;
    gap: 3rem;
    @media only screen and (max-width: 890px){
        flex-wrap: wrap;
    }
}

.detail__article__content{
    padding: 2rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 10px;
    @media only screen and (max-width: 890px){
        text-align: center;
    }
}

.detail__article__image{
    max-width: 380px;
    width: 100%;
    margin: 5rem auto;
    box-shadow: 0 5px 10px 1px rgba(0, 0, 0, .2);
} 

.detail__article__content__title{
    font-weight: 600;
    text-transform: uppercase;
}
.detail__article__content__price{
    color: $color-secundary;
    font-size: 2rem;
    font-weight: 600;
}
.detail__article__content__description{
    padding-top: 2rem;
    line-height: 2.8rem;
}

.btn__group__quantity{
    font-size: 2.5rem;
    width: 30px;
    height: 30px;
    background-color: $background-primary;
    cursor: pointer;
}


.bottom{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 3rem;
    padding: 2rem 0;
    @media only screen and (max-width: 890px){
    justify-content:center;
    align-items: center;
    }
}
.btn__group{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
}

</style>