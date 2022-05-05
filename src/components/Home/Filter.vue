<template>
      <section class="filter__body">
      <div class="filter__content">
        <div class="filter__content__boxSearch">
          <label class="filter__content__boxSearch__label" for="buscar"><span><i class="fas fa-search"></i></span></label>
          <input class="filter__content__boxSearch__search" type="text" placeholder="search name..." v-model="text" @keyup="searchProduct">
        </div>
        <div class="filter__contentCategory">
          <select class="filter__contentCategory__select" id="category" @change="(e) => selectOption(e.target.value)" >
              <option value="">all</option>
              <option 
                v-for="(option, index) in categorias"
                 :key="index"
                 :value="option"
                 >{{option}}
               </option>
          </select>
        </div>
      </div>
    </section>
</template>

<script setup>
import {ref, computed} from 'vue';
import { useStore } from 'vuex';
    const store = useStore()

    // SEARCH ----------------
    const text = ref('');
    const searchProduct = ()=>{
        store.dispatch('shop/filtroBuscador', text.value)
    }

    // SELECT ----------------
    /**
     * Mapear para obtner las categorias de todos los productos
     */
    const categorias = computed(()=> [... new Set(store.state.shop.productos.map(producto => producto.category))])

    /**
     * Ejecuta la accion para filtrar los productos por categorias
     */
    const selectOption = (value)=> store.dispatch('shop/getProductsFiltrados', value)
</script>

<style lang="scss">

/*Filter*/
.filter__body{
    padding: 0 2rem;
    width: 100%;
    margin: 12rem auto 0 auto;
}
.filter__content{
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 30px;
    @media (min-width: 768px){
        grid-template-columns: 480px 200px;
        justify-content: space-between;
        max-width: 1092px;
        margin: auto;
    }
}

.filter__content__boxSearch{
    box-shadow: 0 2px 5px 0px rgba(0, 0, 0, .2);
    height: 40px;
    padding: .5rem 2rem;
}

.filter__content__boxSearch__label{
    font-size: 2.3rem;
    outline: 0;
    color: #7e7a7a;
}
.filter__content__boxSearch__search{
    border: none;
    width: 80%;
    height: 30px;
    outline: 0;
    padding: 0 1rem;
    font-size: 1.6rem;
    font-weight: 500;
    color: #7e7a7a;
}

.filter__contentCategory{
    box-shadow: 0 2px 5px 0px rgba(0, 0, 0, .2);
    display: flex;
    padding: 0 1rem;
    height: 40px;
}
.filter__contentCategory__select{
    border: 0;
    outline: 0;
    width: 100%;
    font-size: 1.6rem;
    color: #5a5858;
    background: transparent;
}

</style>