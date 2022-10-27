<script setup lang="ts">
import card from "../components/card.vue"
</script>

<template>
  <div class="bg-Noir1">
    <div>
      <h3 class="text-white font-Oswald text-center p-10 text-4xl">PERSONNALISEZ VOTRE MONTRE CONNECTÉE</h3>
    </div>
    <div class="grid sm:grid-cols-1 xl:grid-cols-2">
        <img class="h-96 m-24" src="../assets/Montres.png" alt="Montres"/>
      <div class="flex flex-col place-items-center m-20">
        <p class="text-white text-xl text-center p-5">Les montres connectées unisexe sont très en vogue ! Elles permettent à la fois de recevoir les notifications du téléphone directement sur sa montre (appels, messages, réseaux sociaux) mais elle est aussi un atout sportif (podomètre, calories…). Tik-Tak vous propose une personnalisation complète des couleurs de votre montre (bracelet, boîtier, écran).</p>
        <h4 class="text-white font-Oswald text-2xl p-5">OFFRE DE LANCEMENT : 239€ AU LIEU DE 299€ !</h4>
        <router-link to="/personnaliser">
          <button class="bg-white py-4 px-20 font-Oswald font-semibold m-5 hover:bg-Gris">PROFITEZ-EN</button>
        </router-link>
      </div>
    </div>

    <div class="m-5 flex flex-col items-center">
      <router-link to="/personnaliser">
        <button class="bg-white py-4 px-20 font-Oswald font-semibold hover:bg-Gris">PERSONNALISER</button>
      </router-link>
    </div>
    <div class="py-10">
      <h3 class="text-white font-Oswald text-center text-4xl">MODÈLES D’INSPIRATIONS</h3>
    </div>
        <div class="grid place-items-center py-10  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <img class="h-72 m-8" src="../assets/Montre-inspi.png" alt="Inspirations montres"/>
            <img class="h-72 m-8" src="../assets/Montre-inspi.png" alt="Inspirations montres"/>
            <img class="h-72 m-8" src="../assets/Montre-inspi.png" alt="Inspirations montres"/>
            <img class="h-72 m-8" src="../assets/Montre-inspi.png" alt="Inspirations montres"/>
        </div>

    <div>
      <h3 class="text-white font-Oswald text-center p-5 text-4xl">AVIS CLIENTS</h3>
      <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <card />
        <card :nom="'Lila'" image='/src/assets/lila.png' desc="Agréablement surprise, c'est bien plus qu'une montre ! La personnalisation est un grand plus."  />
        <card :nom="'Éric'" image='/src/assets/eric.png' desc="Je l'ai offert en cadeau d'anniversaire à ma femme, elle ne s'en sépare plus, je ne regrette pas l'achat de ce produit."  />
      </div>
    </div>

  </div>
</template>