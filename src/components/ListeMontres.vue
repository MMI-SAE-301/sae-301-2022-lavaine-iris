<script setup lang="ts">
 import { supabase } from "@/supabase";
 import MontreAffichage from "./MontreAffichage.vue";

 const props = defineProps<{
     max?: number;
 }>();
 const { data: montres, error } = await supabase
     .from("Montre")
     .select("*")
     .limit(props.max ?? 100);
 if (error) {
     console.log("n'a pas pu récupérer les montres", { error });
 }
 </script>
 <template>
     <ul class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 place-items-center">
         <li v-for="Montre in montres" :key="Montre.id">
            <router-link :to="{ name: 'edit-id', params: { id: Montre.id } }">
                 <MontreAffichage class="w-64 flex" v-bind="Montre" />
            </router-link>
         </li>
     </ul>
 </template>