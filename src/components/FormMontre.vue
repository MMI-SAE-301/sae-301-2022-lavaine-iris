<script setup lang="ts">
 import type { colors, Montre } from '@/types';
 import { ref } from 'vue';
 import { supabase } from "@/supabase";
 import FormKitListColors from './FormKitListColors.vue';
 import { useRouter } from "vue-router";
import MontreAffichage from './MontreAffichage.vue';

 const router = useRouter();

 const props = defineProps<{
     data?: Montre;
     id?: string;
    }>();

 const montre = ref<Montre>(props.data ?? {});

    if (props.id) {
     // On charge les données de la montre
     let { data, error } = await supabase
         .from("Montre")
         .select("*")
         .eq("Id", props.id);
     if (error || !data)
         console.log("n'a pas pu charger la table Montre :", error);
     else montre.value = data[0];
 }

    // @ts-ignore
    async function upsertMontre(dataForm, node) {
     const { data, error } = await supabase.from("Montre").upsert(dataForm);
     if (error || !data) node.setErrors([error?.message]);
     else {
         node.setErrors([]);
         router.push({ name: "montre-edit-id", params: { id: data[0].id } });
     }
 }

 </script>

 <template> 
 
        <div>
            <MontreAffichage v-bind="montre"/>
        </div>
    <section class="grid grid-cols-2">
        <div class="p-2">
            <FormKit type="form" v-model="montre" @submit="upsertMontre">
                <FormKitListColors name="boitier" label="Couleur du boîtier" />
                <FormKitListColors name="bracelet" label="Couleur du bracelet" />
                <FormKitListColors name="ecran" label="Couleur de l'écran" />
                <FormKitListColors name="texte" label="Couleur du texte" />
            </FormKit>
        </div>

       
    </section>
 </template>

