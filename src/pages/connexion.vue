<template>

    <div class="bg-[url('/public/fond-connexion.jpg')]">
        <h3 class="text-white font-Oswald text-center text-4xl">CRÉER UN COMPTE</h3>
        <div class="flex justify-center place-items-center">
            <div class=" flex justify-evenly bg-Gris/70 w-fit">
                <div class=" p-3 flex flex-col">
                    <input class="m-2" type="text">
                    <input class="m-2" type="text">
                    <button class="bg-white py-4 px-20 font-Oswald font-semibold">CRÉER UN COMPTE</button>
                </div>
                <div class="flex flex-col">
                    <button class="flex justify-between items-center bg-Bleu">
                        <div class="bg-white border-2 border-Bleu w-16 h-16 grid items-center place-content-center">
                            <img class="h-10" src="/public/LogoGoogle.png" alt="Logo Google">
                        </div>
                        <div class="text-white py-3 px-7">
                            <p>Continuer avec Google</p>
                        </div>
                    </button>

                    <button class="flex justify-between items-center bg-BleuFB">
                        <div class="bg-white border-2 border-BleuFB w-16 h-16 grid items-center place-content-center">
                            <img class="h-10" src="/public/LogoFacebook.png" alt="Logo Facebook">
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