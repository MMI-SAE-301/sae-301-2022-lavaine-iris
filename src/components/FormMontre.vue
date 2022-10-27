<script setup lang="ts">
 import { type colors, type Montre, matBoitier, matBracelet } from '@/types';
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
         .eq("id", props.id);
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
         router.push({ name: "edit-id", params: { id: data[0].id } });
     }
 }

 </script>

 <template>  
    <div class="sm:grid sm:grid-cols-1 xl:flex w-full xl:justify-center xl:items-center dark:bg-gray-800 dark:text-white">   
            <div class="w-1/2 grid place-content-center">
                <MontreAffichage class="h-96 dark:bg-Gris dark:rounded-full" v-bind="montre"/>
            </div>
        <section class="grid grid-cols-2 place-items-center md:grid-cols-1">
            <div class="p-2 flex flex-col-reverse md:grid-cols-1">
                <FormKit type="form" v-model="montre"  :submit-attrs="{ classes: { input: 'bg-Gris py-3 px-24 font-Oswald m-5 hover:bg-Bleu hover:text-white dark:bg-white dark:text-black' } }"
                @submit="upsertMontre" submit-label="AJOUTER AU PANIER">

                    <div class="my-7">           
                        <p class="font-Oswald">Couleur du bracelet</p>
                        <hr class="border-black border-1 my-4 dark:border-white" />
                        <FormKitListColors name="bracelet" />
                    </div>
                    <div class="my-7">
                        <p class="font-Oswald">Couleur du boîtier</p>
                        <hr class="border-black border-1 my-4 dark:border-white" />
                        <FormKitListColors name="boitier" />
                    </div>
                    <div class="my-7">
                        <p class="font-Oswald">Couleur de l'écran</p>
                        <hr class="border-black border-1 my-4 dark:border-white" />
                        <FormKitListColors name="ecran" />
                    </div>
                    <div class="my-7">
                        <p class="font-Oswald">Couleur du texte</p>
                        <hr class="border-black border-1 my-4 dark:border-white" />
                        <FormKitListColors name="texte" />
                    </div>
                    <div class="grid text-black">
                        <FormKit name="id_mat_bracelet" label="Matière du bracelet" type="select" :options="matBracelet" />
                        <FormKit name="id_mat_boitier" label="Matériaux du boîtier" type="select" :options="matBoitier" />
                    </div>
                </FormKit>

                <div class="grid place-items-center">
                    <h3>Montre Tik-Tak</h3>
                    <h4>Exclu WEB</h4>
                    <h4 class="text-5xl font-Oswald text-Rouge">239€</h4>
                </div>
            </div>
        </section>
    </div>  
 </template>


