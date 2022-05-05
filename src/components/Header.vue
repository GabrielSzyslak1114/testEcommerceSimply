<template>
  
    <!--Navegation-->
    <nav class="nav">
      <div class="nav__center container">
        <router-link class="nav__logo" to="/">
					<h1>Test<span>8i</span></h1>
        </router-link>
				<ul class="nav__list">
					<a class="carrito__icon" @click="store.dispatch('shop/changeStateCart', true)">
						<i class="fa-solid fa-cart-shopping"></i>
					</a>
				</ul>
      </div>
    </nav>
</template>

<script setup>
    import {useStore} from 'vuex';
    const store = useStore();
</script>

<style scoped lang="scss">

/* NAVIGATION */
.nav{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 1.5rem 0;
    line-height: 1rem;
    background-color: $color-black;
}
.nav__center{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
}
.nav__logo{
    font-size: 2rem;
    color: $color-altern;
}
.nav__logo span{
    color: $color-primary;
}
.nav__list{
    display: flex;
    align-items: center;
}
.nav__list span{
    display: inline-block;
    font-size: 3.5rem;
    margin-top: .2rem;
    margin-right: 2rem;
    color: rgba(219, 216, 39, 0.541);
}

.carrito__icon{
    position: relative;
    cursor: pointer;
}
.carrito__icon i{
    margin-top: .6rem;
    font-size: 3.5rem;
    color: $color-primary;
}


</style>