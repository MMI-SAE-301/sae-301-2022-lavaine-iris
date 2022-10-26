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
     <ul>
         <li v-for="montre in montres" :key="montre.id">
             <router-link :to="{ name: 'montre-edit-id', params: { id: montre.id } }">
                 <MontreAffichage class="w-64 flex" v-bind="montre" />
             </router-link>
         </li>
     </ul>
 </template>