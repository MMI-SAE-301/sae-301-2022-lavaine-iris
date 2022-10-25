<template>
  <header>
    <nav class="flex justify-between">
      <div class="">
        <img class="w-40" src="public/Logo.png"/>
      </div>

      <div class="">
        <router-link class="mx-5 " to="/">Mes modèles</router-link>
        <router-link class="mx-5" to="/">Personnaliser</router-link>
        <router-link class="mx-5" to="/">Connexion</router-link>
      </div>
    </nav>
  </header>

  <!-- Affiche les pages -->
  <Suspense>
    <router-view class="m-2 border-2 p-2" />
  </Suspense>
</template>

<script setup lang="ts">
import { Bars3Icon } from "@heroicons/vue/20/solid";
</script>
