export interface Montre {
    bracelet?: string;
    boitier?: string;
    ecran?: string;
    texte?: string;
  }

export const colors = {
    "#FFFFFF": "Blanc",
    "#000000": "Noir",
    "#5F5654": "Taupe",
    "#4B6087": "Bleu",
    "#5D757C": "Kaki",
    "#733536": "Bordeaux",
    "#F5BF9F": "Rose",
    "#D8815D": "Orange",
    "#F4D975": "Jaune",
    "#BCBDC1": "Gris",
    "#ADB8D2": "Cyan",
    "#B4D1E5": "Bleu",
};

export const matBracelet = [
  {
    value: "d2061420-ca2b-467d-bec5-bc42c3842e5a",
    label: "Métallique"
  },
  {
    value: "75b7dc39-489b-455a-8857-282721c190e9",
    label: "Cuir"
  },
  {
    value: "58c057e8-7adc-4ab2-81bf-2be7aa4d1a4c",
    label: "Silicone"
  }
]

export const matBoitier = [
  {
  value: "3ef8783c-eb63-4718-a660-c70112efe8d8",
  label: "Aluminium"
  },
  {
  value: "972d7854-b0c5-4876-99a3-f6defbb6fca2",
  label: "Titane"
  },
  {
  value: "8d76e2f7-4ab2-4cc6-acc6-2e794d5561f3",
  label: "Acier inoxydable"
  },
]