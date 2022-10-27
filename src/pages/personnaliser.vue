<script setup lang="ts">
import FormMontre from "@/components/FormMontre.vue"
</script>

<template>
    <div class="dark:bg-gray-800 dark:text-white">
        <div>
            <h3 class="text-black font-Oswald text-center text-4xl p-4 dark:text-white">PERSONNALISATION</h3>
        </div>
        <div class="flex">
            <FormMontre />
        </div>
        <div>
            <h3 class="text-black font-Oswald text-center text-4xl mt-20 dark:text-white">DESCRIPTION DU PRODUIT</h3>
            <p class="p-10">
                Les montres connectées unisexe sont très en vogue ! Elles permettent à la fois de recevoir les notifications du téléphone directement sur sa montre (appels, messages, réseaux sociaux) mais elle est aussi un atout sportif (podomètre, calories…). Tik-Tak vous propose une personnalisation complète des couleurs de votre montre (bracelet, boîtier, écran). La montre est livrée avec le câble USB pour pouvoir la recharger. Largeur du boîtier : 38mm
            </p>

            <div class="">
                <h3 class="text-black font-Oswald text-center text-4xl dark:text-white">MODÈLES D’INSPIRATIONS</h3>
            </div>
            <div class="grid grid-cols-4 place-items-center py-10  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <img class="h-72 sm:m-8" src="../assets/Montre-inspi.png" alt="Inspirations montres"/>
                <img class="h-72 sm:m-8" src="../assets/Montre-inspi.png" alt="Inspirations montres"/>
                <img class="h-72 sm:m-8" src="../assets/Montre-inspi.png" alt="Inspirations montres"/>
                <img class="h-72 sm:m-8" src="../assets/Montre-inspi.png" alt="Inspirations montres"/>
            </div>
        </div>
    </div>
</template>