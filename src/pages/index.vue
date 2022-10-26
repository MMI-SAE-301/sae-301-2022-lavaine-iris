<script setup lang="ts">
import card from "../components/card.vue"
</script>

<template>
  <div class="bg-Noir1">
    <div>
      <h3 class="text-white font-Oswald text-center p-10 text-4xl">PERSONNALISEZ VOTRE MONTRE CONNECTÉE</h3>
    </div>
    <div class="flex">
        <img class="h-96 m-24" src="/public/Montres.png" alt="Montres"/>

      <div class="flex flex-col place-items-center m-20">
        <p class="text-white text-xl text-center p-5">Les montres connectées unisexe sont très en vogue ! Elles permettent à la fois de recevoir les notifications du téléphone directement sur sa montre (appels, messages, réseaux sociaux) mais elle est aussi un atout sportif (podomètre, calories…). Tik-Tak vous propose une personnalisation complète des couleurs de votre montre (bracelet, boîtier, écran).</p>
        <h4 class="text-white font-Oswald text-3xl p-5">OFFRE DE LANCEMENT : 239€ AU LIEU DE 299€ !</h4>
        <router-link to="/personnaliser">
          <button class="bg-white py-4 px-20 font-Oswald font-semibold m-5">PROFITEZ-EN</button>
        </router-link>
      </div>
    </div>

    <div class="m-5 flex flex-col items-center">
      <router-link to="/personnaliser">
        <button class="bg-white py-4 px-20 font-Oswald font-semibold">PERSONNALISER</button>
      </router-link>
    </div>
    <div class="py-10">
      <h3 class="text-white font-Oswald text-center text-4xl">MODÈLES D’INSPIRATIONS</h3>
    </div>
    <div class="flex flex-col items-center py-10">
      <img class="h-72" src="/public/Montres-inspi.png" alt="Inspirations montres"/>
    </div>

    <div>
      <h3 class="text-white font-Oswald text-center p-5 text-4xl">AVIS CLIENTS</h3>
      <div class="grid grid-cols-3">
        <card />
        <card :nom="'Lila'" image="/public/lila.png" desc="Agréablement surprise, c'est bien plus qu'une montre ! La personnalisation est un grand plus."  />
        <card :nom="'Éric'" image="/public/eric.png" desc="Je l'ai offert en cadeau d'anniversaire à ma femme, elle ne s'en sépare plus, je ne regrette pas l'achat de ce produit."  />
      </div>
    </div>

  </div>
</template>