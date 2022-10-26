<script setup lang="ts">

import FormMontre from "@/components/FormMontre.vue"

</script>

<template>
    <div>
        <h3 class="text-black font-Oswald text-center text-4xl m-4">PERSONNALISATION</h3>
    </div>

    <div class="flex">
        <FormMontre />
    </div>

    <div>
        <h3 class="text-black font-Oswald text-center text-4xl mt-20">DESCRIPTION DU PRODUIT</h3>
        <p class="p-10">
            Les montres connectées unisexe sont très en vogue ! Elles permettent à la fois de recevoir les notifications du téléphone directement sur sa montre (appels, messages, réseaux sociaux) mais elle est aussi un atout sportif (podomètre, calories…). Tik-Tak vous propose une personnalisation complète des couleurs de votre montre (bracelet, boîtier, écran). La montre est livrée avec le câble USB pour pouvoir la recharger. Largeur du boîtier : 38mm
        </p>

        <div class="">
            <h3 class="text-black font-Oswald text-center text-4xl">MODÈLES D’INSPIRATIONS</h3>
        </div>
        <div class="flex flex-col items-center py-10">
            <img class="h-72" src="../assets/Montres-inspi.png" alt="Inspirations montres"/>
        </div>


    </div>
</template>