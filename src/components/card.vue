<template>
    <div class="m-6">
        <div class="flex justify-center translate-y-6">
            <img class="w-24 " :src="image" alt="Clément" />
        </div>
        <div class="bg-Gris rounded-lg h-72  p-3 flex flex-col place-items-center pt-8 ">
            
            <p class="m-3">{{nom}}</p>
            <div class="flex m-3">
            <etoile />
            <etoile />
            <etoile />
            <etoile />
            <etoile />
            </div>

            <div class="m-3">
                <p class="text-center">{{desc}}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import etoile from "./icons/etoile.vue"

defineProps({
    nom: {
        type : String,
        default: "Clément"
    },
    image : {
        type: String,
        default: "/src/assets/clement.png"
    },
    desc : {
        type: String,
        default: "Je ne suis pas déçu de mon achat, elle fonctionne parfaitement et elle est très agréable à porter au quotidien. Je recommande !"
    },
})
</script>