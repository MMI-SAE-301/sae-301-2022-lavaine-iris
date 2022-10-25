<template>
  <header class="bg-Gris p-5 font-Bodoni-Moda">
    <nav class="flex justify-between">
      <div class="">
        <router-link to="/">
          <img class="w-40" src="public/Logo.png"/>
        </router-link>
      </div>

      <div class="">
        <router-link class="mx-5 " to="/modele">MES MODÈLES</router-link>
        <router-link class="mx-5" to="/personnaliser">PERSONNALISER</router-link>
        <router-link class="mx-5" to="/connexion">CONNEXION</router-link>
      </div>
    </nav>
  </header>

  
  <!-- Affiche les pages -->
  <Suspense>
    <router-view class="m-2 border-2 p-2" />
  </Suspense>

  <footer class="bg-Gris p-28 ">
    <div class="flex justify-center">
      <div>
        <div class="p-2 flex justify-center">
          <router-link to="/">
            <img class="w-40" src="public/Logo.png"/>
          </router-link>
        </div>
        <hr class="border-black border-1 my-4" />
        <div class="p-2 font-Bodoni-Moda">
          <router-link class="m-5 text-center" to="/personnaliser">PERSONNALISER</router-link>
          <router-link class="m-5 text-center" to="/connexion">CONNEXION</router-link>
        </div>
      </div>
    </div>
  </footer>

</template>

<script setup lang="ts">
import { Bars3Icon } from "@heroicons/vue/20/solid";
</script>
