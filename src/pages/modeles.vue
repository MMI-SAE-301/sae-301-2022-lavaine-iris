<script setup lang="ts">
import ListeMontres from '@/components/ListeMontres.vue';
</script>

<template>
    <div class="dark:bg-gray-800">
        <div class="p-5 dark:text-white">
            <h3 class="text-black font-Oswald text-center text-4xl dark:text-white">MES MODÈLES</h3>
            <p class="text-center m-5">Retrouvez tous les modèles montres que vous avez personnaliser ! </p>
        </div>
        <div>
            <ListeMontres :max="8" />
        </div>
    </div>
</template>