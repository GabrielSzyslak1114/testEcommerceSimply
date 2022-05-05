<template>
   <div class="wrapper">
        <h2>Compra tu pedido ahora</h2>
        <form @submit="pagarAhora">
            <!--DATOS DIRECCION-->
            <h4>Perfil y dirección</h4>
            <div class="input_group">
                <div class="input_box">
                    <input type="text" placeholder="Name" required class="name">
                    <i class="fa fa-user icon"></i>
                </div>
                <div class="input_box">
                    <input type="text" placeholder="Last Name" required class="name">
                    <i class="fa fa-user icon"></i>
                </div>
            </div>
            <div class="input_group">
                <div class="input_box">
                    <input type="email" placeholder="Email Address" required class="name">
                    <i class="fa fa-envelope icon"></i>
                </div>
            </div>
            <div class="input_group">
                <div class="input_box">
                    <input type="text" placeholder="Address" required class="name">
                    <i class="fa fa-map-marker icon" aria-hidden="true"></i>
                </div>
            </div>
            <div class="input_group">
                <div class="input_box">
                    <input type="text" placeholder="City" required class="name">
                    <i class="fa fa-institution icon"></i>
                </div>
            </div>


            <!--Escoger method pay-->
            <div class="input_group">
                <div class="input_box">
                    <h4>Escoge Método de pago</h4>
                    <input type="radio" name="pay" class="radio" id="bc1" >
                    <label for="bc1" @click="changeMethodPay">
                        <a>
                            <i class="fa fa-cc-visa"></i> Credit Card
                        </a>    
                    </label>

                    <input type="radio" name="pay" class="radio" id="bc2" checked>
                    <label for="bc2" @click="changeMethodPay">
                        <div>
                        <a href="https://paypal.me/gr985809?country.x=VE&locale.x=es_XC" target="_blank">
                            <i class="fa fa-cc-paypal"></i> Paypal
                        </a> 
                        </div>

                    </label>
                </div>
            </div>

            <!-- Datos Credit Card -->
            <main v-if="stateMethodPay === true">
            <div class="input_group">
                <div class="input_box">
                    <input type="tel" name="" class="name" placeholder="Card Number 1111-2222-3333-4444" required>
                    <i class="fa fa-credit-card icon"></i>
                </div>
            </div>
            <div class="input_group">
                <div class="input_box">
                    <input type="tel" name="" class="name" placeholder="Card CVC 632" required>
                    <i class="fa fa-user icon"></i>
                </div>
            </div>
            <div class="input_group">
                <div class="input_box">
                    <div class="input_box">
                        <input type="number" placeholder="Exp Month" required class="name">
                        <i class="fa fa-calendar icon" aria-hidden="true"></i>
                    </div>
                </div>
                <div class="input_box">
                    <input type="number" placeholder="Exp Year" required class="name">
                    <i class="fa fa-calendar-o icon" aria-hidden="true"></i>
                </div>
            </div>
            </main>
            
            <!--Payment Details End-->
            <div class="input_group">
                <div class="input_box">
                    <button type="submit">Pagar ahora <b>${{totalCostCart}}</b></button>
                </div>
            </div>

        </form>
    </div>



</template>

<script setup>
import {computed, ref} from 'vue';
import { useStore } from 'vuex';
const store = useStore();

const totalCostCart = computed(()=> store.getters['shop/totalCostCart']);
const stateMethodPay = ref(false);
const changeMethodPay = ()=> stateMethodPay.value = !stateMethodPay.value;

const pagarAhora = ()=>{
    alert('Su pedido llegará pronto...');
}
</script>

<style lang="scss" scoped>


.wrapper {
    background-color: #fff;
    width: 500px;
    padding: 25px;
    margin: 105px auto 0;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.249);
    border-radius: 10px;
}

.wrapper h2 {
    background-color: #fcfcfc;
    color: $color-primary;
    font-size: 24px;
    padding: 10px;
    margin-bottom: 8px;
    text-align: center;
    border: 1px dashed $color-primary;
}

.wrapper h4 {
    padding-bottom: 5px;
    color: $color-primary;
}

.input_group {
    margin-bottom: 8px;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    padding: 5px 0;
}

.input_box {
    width: 100%;
    margin-right: 12px;
    position: relative;
}

.input_box:last-child {
    margin-right: 0;
}

.input_box .name {
    padding: 14px 10px 14px 50px;
    width: 100%;
    background-color: #fcfcfc;
    border: 1px solid #0003;
    outline: none;
    letter-spacing: 1px;
    transition: 0.3s;
    border-radius: 3px;
    color: #333;
}

.input_box .name:focus, .dob:focus {
    -webkit-box-shadow: 0 0 2px 1px $color-primary;
    -moz-box-shadow: 0 0 2px 1px $color-primary;
    box-shadow: 0 0 2px 1px $color-primary;
    border: 1px solid $color-primary;
}

.input_box .icon {
    width: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0px;
    left: 0px;
    bottom: 0px;
    color: #333;
    background-color: #f1f1f1;
    border-radius: 2px 0 0 2px;
    transition: 0.3s;
    font-size: 20px;
    pointer-events: none;
    border: 1px solid #00000003;
    border-right: none;
}

.name:focus+.icon {
    background-color: $color-primary;
    color: #fff;
    border-right: 1px solid $color-primary;
    border: none;
    transition: 1s;
}

.dob {
    width: 30%;
    padding: 14px;
    text-align: center;
    background-color: #fcfcfc;
    transition: 0.3s;
    outline: none;
    border: 1px solid #c0bfbf;
    border-radius: 3px;
}

.radio {
    display: none;
}

.input_box label {
    width: 50%;
    padding: 13px;
    background-color: $color-secundary;
    display: inline-block;
    float: left;
    text-align: center;
    border: 1px solid #c0bfbf;
    cursor: pointer;
}

.input_box label:first-of-type {
    border-top-left-radius: 3px;
    border-bottom-right-radius: 3px;
    border-right: none;
}

.input_box label:last-of-type {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
}

.radio:checked+label {
    background-color: $color-primary;
    color: #fff;
    transition: 0.5s;
}

.input_box button {
    width: 100%;
    background: $background-primary;
    border: none;
    color: #fff;
    padding: 15px;
    border-right: 4px;
    font-size: 16px;
    transition: all 0.3s ease;
    border-radius: 8px;
}

.input_box button:hover {
    cursor: pointer;
    transform: scale(.98);
}
a{
    color:rgb(243, 233, 233);
}
</style>