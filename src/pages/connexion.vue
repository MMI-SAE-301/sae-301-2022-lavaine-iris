<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { supabase, user } from "../supabase";

async function signIn(data, node) {
  const { user, error } = await (nvlUtilisateur.value
    ? supabase.auth.signUp(data)
    : supabase.auth.signIn(data));
  if (error) {
    console.error(error);
    node.setErrors([error.message]);
  }
}
const nvlUtilisateur = ref(false);
</script>

<template>

    
    <div v-if="user" class="flex justify-center">
                <button @pointerdown="supabase.auth.signOut()">
                    Se déconnecter ({{user.email}})
                </button>
    </div>

    <div v-else class="bg-[url('@/assets/fond-connexion.png')] max-w-screen">
        <h3 class="text-white font-Oswald text-center text-4xl p-8">CRÉER UN COMPTE</h3>
        <div class="flex justify-center place-items-center h-screen w-screen">
            <div class=" flex justify-evenly bg-Gris/60">
                <div class="p-3 flex flex-col">
                    <div>

    <FormKit
      type="form"
      :submit-label="nvlUtilisateur ? 'S\'inscrire' : 'Se connecter'"
      @submit="signIn"
    >
      <FormKit name="email" label="Adresse e-mail" type="email" />
      <FormKit name="password" label="Mot de passe" type="password" />
      <formKit
        label="Nouvel utilisateur ?"
        name="nvlUtilisateur"
        type="checkbox"
        v-model="nvlUtilisateur"
      />
    </FormKit>
  </div>
                    <p>Vous avez déjà un compte ? <router-link class="underline" to="/connexion">Connectez-vous ici</router-link></p>
                    <button class="bg-white py-4 px-20 font-Oswald font-semibold m-10 my-16">CRÉER UN COMPTE</button>
                </div>
                <div class="flex flex-col">
                    <button class="flex justify-between items-center bg-Bleu m-8" @pointerdown="supabase.auth.signIn({ provider: 'google' })">
                        <div class="bg-white border-2 border-Bleu w-16 h-16 grid items-center place-content-center">
                            <img class="h-10" src="../assets/LogoGoogle.png" alt="Logo Google">
                        </div>
                        <div class="text-white py-3 px-7">
                            <p>Continuer avec Google</p>
                        </div>
                    </button>

                    <button class="flex justify-between items-center bg-BleuFB m-8" @pointerdown="supabase.auth.signIn({ provider: 'facebook' })">
                        <div class="bg-white border-2 border-BleuFB w-16 h-16 grid items-center place-content-center">
                            <img class="h-10" src="../assets/LogoFacebook.png" alt="Logo Facebook">
                        </div>
                        <div class="text-white py-3 px-7">
                            <p>Continuer avec Facebook</p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>