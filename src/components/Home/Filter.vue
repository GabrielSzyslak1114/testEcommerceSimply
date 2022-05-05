<template>
      <section class="filter">
      <div class="grid">
        <div class="div">
          <label for="buscar"><span><i class="bx bx-search"></i></span></label>
          <input type="text" placeholder="search name..." v-model="text" @keyup="searchProduct">
        </div>
        <div class="category">
          <select id="category" @change="(e) => selectOption(e.target.value)" >
              <option value="">all</option>
              <option 
                v-for="(option, index) in categorias"
                 :key="index"
                 :value="option"
                 >{{option}}</option>
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
    const categorias = computed(()=> [... new Set(store.state.shop.productos.map(producto => producto.category))])
    const selectOption = (value)=> store.dispatch('shop/getProductsFiltrados', value)
</script>

<style lang="scss">

/*Filter*/
.filter{
    padding: 0 2rem;
    width: 100%;
    margin: 12rem auto 0 auto;
}
.filter .grid{
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 30px;
}
.filter label{
    font-size: 2.3rem;
    outline: 0;
    color: #7e7a7a;
}
.filter input{
    border: none;
    width: 80%;
    height: 30px;
    outline: 0;
    padding: 0 1rem;
    font-size: 1.6rem;
    font-weight: 500;
    color: #7e7a7a;
}
.filter .div{
    box-shadow: 0 2px 5px 0px rgba(0, 0, 0, .2);
    height: 40px;
    padding: .5rem 2rem;
}
.filter .category{
    box-shadow: 0 2px 5px 0px rgba(0, 0, 0, .2);
    display: flex;
    padding: 0 1rem;
    height: 40px;
}
.filter .category select{
    border: 0;
    outline: 0;
    width: 100%;
    font-size: 1.6rem;
    color: #5a5858;
    background: transparent;
}
@media (min-width: 768px){
    .filter .grid{
        grid-template-columns: 480px 200px;
        justify-content: space-between;
        max-width: 1092px;
        margin: auto;
    }
}
</style>