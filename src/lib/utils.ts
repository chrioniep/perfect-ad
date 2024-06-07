import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// export const products = [
//   {
//     name: "Affiches & Posters",
//     properties: {
//       formats: ["A0", "A1", "A2", "A3"],
//       impression: ["Recto (1/0, 4/0)", "Recto-verso (4/4)"],
//       papier: ["Couché", "Naturel", "Recyclé", "Papier fluo"],
//       finitions: ["Vernis UV", "Pelliculage"],
//       tirages: ["Petits (1-99 ex.)", "Grands tirages (100-200,000 ex.)"],
//     },
//   },
//   {
//     name: "Autocollants",
//     properties: {
//       formats: ["Sur mesure"],
//       formes: ["Rectangles", "Carrés", "Ronds", "Sur mesure"],
//       papier: ["Vinyle adhésif", "Papier adhésif"],
//       finitions: ["Vernis", "Pelliculage mat", "Pelliculage brillant"],
//       utilisation: ["Intérieur", "Extérieur"],
//     },
//   },
//   {
//     name: "Bâches",
//     properties: {
//       types: ["PVC (500 g/m²)", "Mesh micro-perforée (330 g/m²)"],
//       fixations: ["Ourlets", "Œillets", "Réglettes pinçantes"],
//       utilisation: ["Intérieur", "Extérieur", "Zones exposées au vent"],
//     },
//   },
//   {
//     name: "Beach Flags",
//     properties: {
//       formats: ["S", "M", "L", "XL"],
//       typesDePied: ["Croisillon", "Platine", "Pic à planter"],
//       impression: ["Recto", "Recto-verso"],
//       material: ["Polyester", "Toile perforée"],
//       utilisation: ["Événements", "Salons", "Promotions"],
//     },
//   },
//   {
//     name: "Blocs-notes",
//     properties: {
//       formats: ["A4", "A5", "A6", "Carré"],
//       feuilles: ["25", "50", "100 feuilles par bloc"],
//       papier: ["Offset", "Recyclé"],
//       options: ["Perforation", "Impression quadri"],
//     },
//   },
//   {
//     name: "Brochures & Catalogues",
//     properties: {
//       formats: ["A4", "A5", "A6", "Carré", "Sur mesure"],
//       papier: ["Couché", "Offset", "Recyclé"],
//       finitions: ["Pelliculage mat", "Pelliculage brillant", "Vernis"],
//       reliure: ["Dos carré collé", "Agrafée", "Spirale"],
//     },
//   },
//   {
//     name: "Cartes de visite",
//     properties: {
//       formats: ["Standard (85 x 55 mm)", "Sur mesure"],
//       impression: ["Recto", "Recto-verso"],
//       papier: ["Couché", "Recyclé", "Offset"],
//       finitions: ["Vernis UV", "Pelliculage mat", "Pelliculage brillant"],
//       coins: ["Arrondis", "Carrés"],
//     },
//   },
//   {
//     name: "Cartes de vœux",
//     properties: {
//       formats: ["A6", "A5", "DL", "Carré"],
//       impression: ["Recto", "Recto-verso"],
//       papier: ["Couché", "Recyclé", "Offset"],
//       finitions: ["Vernis UV", "Pelliculage mat", "Pelliculage brillant"],
//     },
//   },
//   {
//     name: "Cartes postales",
//     properties: {
//       formats: ["A6", "A5", "DL", "Carré"],
//       impression: ["Recto", "Recto-verso"],
//       papier: ["Couché", "Recyclé", "Offset"],
//       finitions: ["Vernis UV", "Pelliculage mat", "Pelliculage brillant"],
//     },
//   },
//   {
//     name: "Chaises longues",
//     properties: {
//       formats: ["Standard"],
//       material: ["Bois", "Tissu polyester"],
//       impression: ["Recto"],
//       utilisations: ["Extérieur", "Intérieur"],
//     },
//   },
//   {
//     name: "Chemises à rabats",
//     properties: {
//       formats: ["A4", "A5"],
//       impression: ["Recto", "Recto-verso"],
//       papier: ["Couché", "Recyclé", "Offset"],
//       finitions: ["Vernis UV", "Pelliculage mat", "Pelliculage brillant"],
//     },
//   },
//   {
//     name: "Dépliants",
//     properties: {
//       formats: ["A4", "A5", "A6", "DL", "Carré"],
//       plis: ["Simple pli", "Double pli", "Pli roulé", "Pli accordéon"],
//       papier: ["Couché", "Recyclé", "Offset"],
//       impression: ["Recto", "Recto-verso"],
//     },
//   },
//   {
//     name: "Emballages",
//     properties: {
//       types: ["Boîtes pliantes", "Boîtes à couvercle cloche"],
//       material: ["Carton", "Carton recyclé"],
//       impression: ["Recto", "Recto-verso"],
//       finitions: ["Pelliculage", "Vernis"],
//     },
//   },
//   {
//     name: "Feuille d'impression plano",
//     properties: {
//       formats: ["A3", "A2", "SRA3", "SRA2"],
//       papier: ["Couché", "Recyclé", "Offset"],
//       impression: ["Recto", "Recto-verso"],
//       finitions: ["Vernis UV", "Pelliculage"],
//     },
//   },
//   {
//     name: "Flyers",
//     properties: {
//       formats: ["A6", "A5", "A4", "DL", "Carré"],
//       papier: ["Couché", "Recyclé", "Offset"],
//       impression: ["Recto", "Recto-verso"],
//       finitions: ["Vernis UV", "Pelliculage mat", "Pelliculage brillant"],
//     },
//   },
//   {
//     name: "Papier à lettres",
//     properties: {
//       formats: ["A4", "A5"],
//       papier: ["Offset", "Recyclé"],
//       impression: ["Recto", "Recto-verso"],
//     },
//   },
//   {
//     name: "Roll-ups",
//     properties: {
//       formats: ["Standard", "XL"],
//       material: ["Bâche PVC", "Polyester"],
//       impression: ["Recto"],
//       utilisation: ["Événements", "Salons", "Promotions"],
//     },
//   },
//   {
//     product: "Étuis pliants",
//     dimensions: ["60x40x100 mm", "110x80x160 mm", "210x100x298 mm"],
//     properties: {
//       width: "50-400 mm",
//       depth: "18-200 mm",
//       height: "50-630 mm",
//       types: ["Languettes d'insertion", "Onglet de verrouillage"],
//       usage: ["Produits légers et de poids moyen"],
//     },
//   },
//   {
//     product: "Sacs en papier",
//     properties: {
//       materials: ["Papier couché 190 g/m²", "Papier couché 240 g/m²"],
//       loadCapacity: ["7 kg", "10 kg"],
//       handle: "Poignée cordelière épaule",
//     },
//   },
//   {
//     product: "Emballages alimentaires",
//     properties: {
//       types: [
//         "Fond automatique",
//         "Fond semi-automatique",
//         "Fond à languettes d'insertion",
//       ],
//       usage: ["Produits lourds", "Remplissage manuel"],
//     },
//   },
//   {
//     product: "Classeurs",
//     properties: {
//       finishes: ["Film de protection brillant", "Film de protection mat"],
//       options: ["Pochette au dos", "Pochette à carte de visite"],
//       durability: "Jusqu'à 1 500 fois plus longue durée de vie",
//     },
//   },
//   {
//     product: "Tampons",
//     sizes: [
//       "37x13 mm",
//       "46x17 mm",
//       "57x21 mm",
//       "59x39 mm",
//       "Ø 24 mm",
//       "Ø 40 mm",
//     ],
//     properties: {
//       materials: ["Plastique recyclé", "Acier brossé/plastique", "Hêtre"],
//       colors: ["Bleu", "Rouge", "Noir"],
//     },
//   },
//   {
//     product: "Flyers",
//     properties: {
//       formats: ["1/0 noir", "4/4 quadrichromie"],
//       paperTypes: ["Papier couché 170 g/m²", "250 g/m²", "300 g/m²"],
//       specialColors: ["HKS", "Pantone"],
//     },
//   },
//   {
//     product: "Calendriers muraux",
//     properties: {
//       formats: ["1/0 noir", "4/0 quadrichromie"],
//       paperWeights: ["170 g/m²", "250 g/m²"],
//       binding: ["Noir", "Argent", "Blanc"],
//     },
//   },
//   {
//     product: "Dépliants",
//     properties: {
//       paperTypes: ["Papier recyclé", "Papier naturel", "Papier couché"],
//       weights: ["90 g/m²", "135 g/m²", "170 g/m²", "250 g/m²", "300 g/m²"],
//       finishes: ["Vernis UV", "Pelliculage Soft Touch"],
//     },
//   },
// ];

export const saxoprintProducts = [
  {
    name: "Affiches & Posters",
    properties: {
      formats: ["A0", "A1", "A2", "A3"],
      impression: ["Recto (1/0, 4/0)", "Recto-verso (4/4)"],
      papier: ["Couché", "Naturel", "Recyclé", "Papier fluo"],
      finitions: ["Vernis UV", "Pelliculage"],
      tirages: ["Petits (1-99 ex.)", "Grands tirages (100-200,000 ex.)"],
    },
  },
  {
    name: "Affiches extérieur en carton",
    properties: {
      formats: ["A0", "A1", "A2", "A3"],
      papier: ["Carton"],
      impression: ["Recto", "Recto-verso"],
      finitions: ["Pelliculage", "Vernis UV"],
    },
  },
  {
    name: "Affiches fluorescentes",
    properties: {
      formats: ["A0", "A1", "A2", "A3"],
      papier: ["Papier fluo"],
      impression: ["Recto", "Recto-verso"],
      finitions: ["Vernis UV", "Pelliculage"],
    },
  },
  {
    name: "Autocollants",
    properties: {
      formats: ["Sur mesure"],
      formes: ["Rectangles", "Carrés", "Ronds", "Sur mesure"],
      papier: ["Vinyle adhésif", "Papier adhésif"],
      finitions: ["Vernis", "Pelliculage mat", "Pelliculage brillant"],
      utilisation: ["Intérieur", "Extérieur"],
    },
  },
  {
    name: "Bâches",
    properties: {
      types: ["PVC (500 g/m²)", "Mesh micro-perforée (330 g/m²)"],
      fixations: ["Ourlets", "Œillets", "Réglettes pinçantes"],
      utilisation: ["Intérieur", "Extérieur", "Zones exposées au vent"],
    },
  },
  {
    name: "Bannières en tissu",
    properties: {
      formats: ["Sur mesure"],
      material: ["Tissu polyester"],
      impression: ["Recto", "Recto-verso"],
      fixations: ["Ourlets", "Œillets"],
      utilisation: ["Intérieur", "Extérieur"],
    },
  },
  {
    name: "Bannières X/L",
    properties: {
      formats: ["Sur mesure"],
      material: ["PVC", "Polyester"],
      impression: ["Recto"],
      structures: ["X", "L"],
      utilisation: ["Événements", "Promotions"],
    },
  },
  {
    name: "Beach flags",
    properties: {
      formats: ["S", "M", "L", "XL"],
      typesDePied: ["Croisillon", "Platine", "Pic à planter"],
      impression: ["Recto", "Recto-verso"],
      material: ["Polyester", "Toile perforée"],
      utilisation: ["Événements", "Salons", "Promotions"],
    },
  },
  {
    name: "Billets d'entrée",
    properties: {
      formats: ["A6", "DL"],
      papier: ["Couché", "Recyclé"],
      impression: ["Recto", "Recto-verso"],
      options: ["Numérotation", "Code-barres"],
    },
  },
  {
    name: "Blocs-notes",
    properties: {
      formats: ["A4", "A5", "A6", "Carré"],
      feuilles: ["25", "50", "100 feuilles par bloc"],
      papier: ["Offset", "Recyclé"],
      options: ["Perforation", "Impression quadri"],
    },
  },
  {
    name: "Blocs-notes de restauration",
    properties: {
      formats: ["A6", "A7"],
      feuilles: ["25", "50", "100 feuilles par bloc"],
      papier: ["Offset", "Recyclé"],
      options: ["Perforation", "Impression quadri"],
    },
  },
  {
    name: "Boîte berlingot",
    properties: {
      formats: ["Sur mesure"],
      material: ["Carton", "Carton recyclé"],
      impression: ["Recto", "Recto-verso"],
      finitions: ["Pelliculage", "Vernis"],
    },
  },
  {
    name: "Boîte d'échantillons",
    properties: {
      formats: ["Sur mesure"],
      material: ["Carton", "Carton recyclé"],
      impression: ["Recto", "Recto-verso"],
      finitions: ["Pelliculage", "Vernis"],
    },
  },
  {
    name: "Boîte d'échantillons neutres",
    properties: {
      formats: ["Sur mesure"],
      material: ["Carton", "Carton recyclé"],
      finitions: ["Pelliculage", "Vernis"],
    },
  },
  {
    name: "Boîtes cadeau",
    properties: {
      formats: ["Sur mesure"],
      material: ["Carton", "Carton recyclé"],
      impression: ["Recto", "Recto-verso"],
      finitions: ["Pelliculage", "Vernis"],
    },
  },
  {
    name: "Boîtes d'expédition",
    properties: {
      formats: ["Sur mesure"],
      material: ["Carton", "Carton recyclé"],
      impression: ["Recto", "Recto-verso"],
      finitions: ["Pelliculage", "Vernis"],
    },
  },
  {
    name: "Brochures à agrafes boucle",
    properties: {
      formats: ["A4", "A5", "Sur mesure"],
      papier: ["Couché", "Recyclé"],
      impression: ["Recto", "Recto-verso"],
      finitions: ["Pelliculage mat", "Pelliculage brillant", "Vernis"],
      reliure: ["Agrafée boucle"],
    },
  },
  {
    name: "Brochures à dos carré collé",
    properties: {
      formats: ["A4", "A5", "Sur mesure"],
      papier: ["Couché", "Recyclé"],
      impression: ["Recto", "Recto-verso"],
      finitions: ["Pelliculage mat", "Pelliculage brillant", "Vernis"],
      reliure: ["Dos carré collé"],
    },
  },
  {
    name: "Brochures à reliure à anneaux",
    properties: {
      formats: ["A4", "A5", "Sur mesure"],
      papier: ["Couché", "Recyclé"],
      impression: ["Recto", "Recto-verso"],
      finitions: ["Pelliculage mat", "Pelliculage brillant", "Vernis"],
      reliure: ["Anneaux"],
    },
  },
  {
    name: "Brochures agrafées",
    properties: {
      formats: ["A4", "A5", "Sur mesure"],
      papier: ["Couché", "Recyclé"],
      impression: ["Recto", "Recto-verso"],
      finitions: ["Pelliculage mat", "Pelliculage brillant", "Vernis"],
      reliure: ["Agrafée"],
    },
  },
  {
    name: "Brochures petit tirages",
    properties: {
      formats: ["A4", "A5", "Sur mesure"],
      papier: ["Couché", "Recyclé"],
      impression: ["Recto", "Recto-verso"],
      finitions: ["Pelliculage mat", "Pelliculage brillant", "Vernis"],
      reliure: ["Agrafée", "Dos carré collé", "Anneaux"],
      tirages: ["Petits tirages"],
    },
  },
  {
    name: "Brochures sur mesure",
    properties: {
      formats: ["Sur mesure"],
      papier: ["Couché", "Recyclé"],
      impression: ["Recto", "Recto-verso"],
      finitions: ["Pelliculage mat", "Pelliculage brillant", "Vernis"],
      reliure: ["Agrafée", "Dos carré collé", "Anneaux"],
    },
  },
  {
    name: "Calendriers",
    properties: {
      formats: ["A4", "A5", "Sur mesure"],
      papier: ["Couché", "Recyclé"],
      impression: ["Recto", "Recto-verso"],
      reliure: ["Agrafée", "Dos carré collé", "Anneaux"],
    },
  },
  {
    name: "Calendriers annuels",
    properties: {
      formats: ["A4", "A5", "Sur mesure"],
      papier: ["Couché", "Recyclé"],
      impression: ["Recto", "Recto-verso"],
      reliure: ["Agrafée", "Dos carré collé", "Anneaux"],
    },
  },
  {
    name: "Calendriers de bureau",
    properties: {
      formats: ["A4", "A5", "Sur mesure"],
      papier: ["Couché", "Recyclé"],
      impression: ["Recto", "Recto-verso"],
      reliure: ["Anneaux", "Spirale"],
    },
  },
  {
    name: "Calendriers de poche",
    properties: {
      formats: ["Crédit card (85 x 55 mm)", "Sur mesure"],
      papier: ["Couché", "Recyclé"],
      impression: ["Recto", "Recto-verso"],
    },
  },
  {
    name: "Calendriers mensuels",
    properties: {
      formats: ["A4", "A5", "Sur mesure"],
      papier: ["Couché", "Recyclé"],
      impression: ["Recto", "Recto-verso"],
      reliure: ["Anneaux", "Spirale"],
    },
  },
  {
    name: "Calendriers muraux longs",
    properties: {
      formats: ["A4", "A3", "Sur mesure"],
      papier: ["Couché", "Recyclé"],
      impression: ["Recto", "Recto-verso"],
      reliure: ["Anneaux", "Spirale"],
    },
  },
  {
    name: "Carnets de notes",
    properties: {
      formats: ["A4", "A5", "A6", "Sur mesure"],
      papier: ["Offset", "Recyclé"],
      impression: ["Recto", "Recto-verso"],
      options: ["Perforation", "Numérotation"],
    },
  },
  {
    name: "Carte des glaces",
    properties: {
      formats: ["A4", "A5", "DL"],
      papier: ["Couché", "Recyclé"],
      impression: ["Recto", "Recto-verso"],
      options: ["Pelliculage", "Vernis UV"],
    },
  },
  {
    name: "Cartes de boissons reliées",
    properties: {
      formats: ["A4", "A5", "Sur mesure"],
      papier: ["Couché", "Recyclé"],
      impression: ["Recto", "Recto-verso"],
      reliure: ["Anneaux", "Spirale"],
    },
  },
  {
    name: "Cartes de boissons simples",
    properties: {
      formats: ["A4", "A5", "DL"],
      papier: ["Couché", "Recyclé"],
      impression: ["Recto", "Recto-verso"],
      options: ["Pelliculage", "Vernis UV"],
    },
  },
  {
    name: "Cartes de correspondance",
    properties: {
      formats: ["A6", "A5", "DL"],
      papier: ["Couché", "Recyclé", "Offset"],
      impression: ["Recto", "Recto-verso"],
      options: ["Pelliculage", "Vernis UV"],
    },
  },
  {
    name: "Cartes de menu agrafées",
    properties: {
      formats: ["A4", "A5", "DL"],
      papier: ["Couché", "Recyclé"],
      impression: ["Recto", "Recto-verso"],
      options: ["Pelliculage", "Vernis UV"],
      reliure: ["Agrafée"],
    },
  },
  {
    name: "Cartes de menu simples",
    properties: {
      formats: ["A4", "A5", "DL"],
      papier: ["Couché", "Recyclé"],
      impression: ["Recto", "Recto-verso"],
      options: ["Pelliculage", "Vernis UV"],
    },
  },
  {
    name: "Cartes de visite",
    properties: {
      formats: ["Standard (85 x 55 mm)", "Sur mesure"],
      impression: ["Recto", "Recto-verso"],
      papier: ["Couché", "Recyclé", "Offset"],
      finitions: ["Vernis UV", "Pelliculage mat", "Pelliculage brillant"],
      coins: ["Arrondis", "Carrés"],
    },
  },
  {
    name: "Cartes de vœux",
    properties: {
      formats: ["A6", "A5", "DL", "Carré"],
      impression: ["Recto", "Recto-verso"],
      papier: ["Couché", "Recyclé", "Offset"],
      finitions: ["Vernis UV", "Pelliculage mat", "Pelliculage brillant"],
    },
  },
  {
    name: "Cartes diverses",
    properties: {
      formats: ["A6", "A5", "DL", "Carré"],
      impression: ["Recto", "Recto-verso"],
      papier: ["Couché", "Recyclé", "Offset"],
      finitions: ["Vernis UV", "Pelliculage mat", "Pelliculage brillant"],
    },
  },
  {
    name: "Cartes postales",
    properties: {
      formats: ["A6", "A5", "DL", "Carré"],
      impression: ["Recto", "Recto-verso"],
      papier: ["Couché", "Recyclé", "Offset"],
      finitions: ["Vernis UV", "Pelliculage mat", "Pelliculage brillant"],
    },
  },
  {
    name: "Catalogue de produits",
    properties: {
      formats: ["A4", "A5", "Sur mesure"],
      papier: ["Couché", "Recyclé"],
      impression: ["Recto", "Recto-verso"],
      finitions: ["Pelliculage mat", "Pelliculage brillant", "Vernis"],
      reliure: ["Agrafée", "Dos carré collé", "Anneaux"],
    },
  },
  {
    name: "Catalogue de produits Emballages",
    properties: {
      formats: ["A4", "A5", "Sur mesure"],
      papier: ["Couché", "Recyclé"],
      impression: ["Recto", "Recto-verso"],
      finitions: ["Pelliculage mat", "Pelliculage brillant", "Vernis"],
      reliure: ["Agrafée", "Dos carré collé", "Anneaux"],
    },
  },
  {
    name: "Catalogues",
    properties: {
      formats: ["A4", "A5", "Sur mesure"],
      papier: ["Couché", "Recyclé"],
      impression: ["Recto", "Recto-verso"],
      finitions: ["Pelliculage mat", "Pelliculage brillant", "Vernis"],
      reliure: ["Agrafée", "Dos carré collé", "Anneaux"],
    },
  },
  {
    name: "Chaises longues",
    properties: {
      formats: ["Standard"],
      material: ["Bois", "Tissu polyester"],
      impression: ["Recto"],
      utilisations: ["Extérieur", "Intérieur"],
    },
  },
  {
    name: "Chemises à rabats",
    properties: {
      formats: ["A4", "A5"],
      impression: ["Recto", "Recto-verso"],
      papier: ["Couché", "Recyclé", "Offset"],
      finitions: ["Vernis UV", "Pelliculage mat", "Pelliculage brillant"],
    },
  },
  {
    name: "Chemises de présentation",
    properties: {
      formats: ["A4", "A5"],
      impression: ["Recto", "Recto-verso"],
      papier: ["Couché", "Recyclé", "Offset"],
      finitions: ["Vernis UV", "Pelliculage mat", "Pelliculage brillant"],
    },
  },
  {
    name: "Claque-mains",
    properties: {
      formats: ["Sur mesure"],
      material: ["Carton"],
      impression: ["Recto", "Recto-verso"],
    },
  },
  {
    name: "Calendriers",
    properties: {
      formats: ["A4", "A5", "Sur mesure"],
      papier: ["Couché", "Recyclé"],
      impression: ["Recto", "Recto-verso"],
      reliure: ["Agrafée", "Dos carré collé", "Anneaux"],
    },
  },
  {
    name: "Calendriers annuels",
    properties: {
      formats: ["A4", "A5", "Sur mesure"],
      papier: ["Couché", "Recyclé"],
      impression: ["Recto", "Recto-verso"],
      reliure: ["Agrafée", "Dos carré collé", "Anneaux"],
    },
  },
  {
    name: "Calendriers de bureau",
    properties: {
      formats: ["A4", "A5", "Sur mesure"],
      papier: ["Couché", "Recyclé"],
      impression: ["Recto", "Recto-verso"],
      reliure: ["Anneaux", "Spirale"],
    },
  },
  {
    name: "Calendriers de poche",
    properties: {
      formats: ["Crédit card (85 x 55 mm)", "Sur mesure"],
      papier: ["Couché", "Recyclé"],
      impression: ["Recto", "Recto-verso"],
    },
  },
  {
    name: "Calendriers mensuels",
    properties: {
      formats: ["A4", "A5", "Sur mesure"],
      papier: ["Couché", "Recyclé"],
      impression: ["Recto", "Recto-verso"],
      reliure: ["Anneaux", "Spirale"],
    },
  },
  {
    name: "Calendriers muraux longs",
    properties: {
      formats: ["A4", "A3", "Sur mesure"],
      papier: ["Couché", "Recyclé"],
      impression: ["Recto", "Recto-verso"],
      reliure: ["Anneaux", "Spirale"],
    },
  },
  {
    name: "Carnets de notes",
    properties: {
      formats: ["A4", "A5", "A6", "Sur mesure"],
      papier: ["Offset", "Recyclé"],
      impression: ["Recto", "Recto-verso"],
      options: ["Perforation", "Numérotation"],
    },
  },
  {
    name: "Carte des glaces",
    properties: {
      formats: ["A4", "A5", "DL"],
      papier: ["Couché", "Recyclé"],
      impression: ["Recto", "Recto-verso"],
      options: ["Pelliculage", "Vernis UV"],
    },
  },
  {
    name: "Cartes de boissons reliées",
    properties: {
      formats: ["A4", "A5", "Sur mesure"],
      papier: ["Couché", "Recyclé"],
      impression: ["Recto", "Recto-verso"],
      reliure: ["Anneaux", "Spirale"],
    },
  },
  {
    name: "Cartes de boissons simples",
    properties: {
      formats: ["A4", "A5", "DL"],
      papier: ["Couché", "Recyclé"],
      impression: ["Recto", "Recto-verso"],
      options: ["Pelliculage", "Vernis UV"],
    },
  },
  {
    name: "Cartes de correspondance",
    properties: {
      formats: ["A6", "A5", "DL"],
      papier: ["Couché", "Recyclé", "Offset"],
      impression: ["Recto", "Recto-verso"],
      options: ["Pelliculage", "Vernis UV"],
    },
  },
  {
    name: "Cartes de menu agrafées",
    properties: {
      formats: ["A4", "A5", "DL"],
      papier: ["Couché", "Recyclé"],
      impression: ["Recto", "Recto-verso"],
      options: ["Pelliculage", "Vernis UV"],
      reliure: ["Agrafée"],
    },
  },
  {
    name: "Cartes de menu simples",
    properties: {
      formats: ["A4", "A5", "DL"],
      papier: ["Couché", "Recyclé"],
      impression: ["Recto", "Recto-verso"],
      options: ["Pelliculage", "Vernis UV"],
    },
  },
  {
    name: "Cartes de visite",
    properties: {
      formats: ["Standard (85 x 55 mm)", "Sur mesure"],
      impression: ["Recto", "Recto-verso"],
      papier: ["Couché", "Recyclé", "Offset"],
      finitions: ["Vernis UV", "Pelliculage mat", "Pelliculage brillant"],
      coins: ["Arrondis", "Carrés"],
    },
  },
  {
    name: "Cartes de vœux",
    properties: {
      formats: ["A6", "A5", "DL", "Carré"],
      impression: ["Recto", "Recto-verso"],
      papier: ["Couché", "Recyclé", "Offset"],
      finitions: ["Vernis UV", "Pelliculage mat", "Pelliculage brillant"],
    },
  },
  {
    name: "Cartes diverses",
    properties: {
      formats: ["A6", "A5", "DL", "Carré"],
      impression: ["Recto", "Recto-verso"],
      papier: ["Couché", "Recyclé", "Offset"],
      finitions: ["Vernis UV", "Pelliculage mat", "Pelliculage brillant"],
    },
  },
  {
    name: "Cartes postales",
    properties: {
      formats: ["A6", "A5", "DL", "Carré"],
      impression: ["Recto", "Recto-verso"],
      papier: ["Couché", "Recyclé", "Offset"],
      finitions: ["Vernis UV", "Pelliculage mat", "Pelliculage brillant"],
    },
  },
  {
    name: "Catalogue de produits",
    properties: {
      formats: ["A4", "A5", "Sur mesure"],
      papier: ["Couché", "Recyclé"],
      impression: ["Recto", "Recto-verso"],
      finitions: ["Pelliculage mat", "Pelliculage brillant", "Vernis"],
      reliure: ["Agrafée", "Dos carré collé", "Anneaux"],
    },
  },
  {
    name: "Catalogue de produits Emballages",
    properties: {
      formats: ["A4", "A5", "Sur mesure"],
      papier: ["Couché", "Recyclé"],
      impression: ["Recto", "Recto-verso"],
      finitions: ["Pelliculage mat", "Pelliculage brillant", "Vernis"],
      reliure: ["Agrafée", "Dos carré collé", "Anneaux"],
    },
  },
  {
    name: "Catalogues",
    properties: {
      formats: ["A4", "A5", "Sur mesure"],
      papier: ["Couché", "Recyclé"],
      impression: ["Recto", "Recto-verso"],
      finitions: ["Pelliculage mat", "Pelliculage brillant", "Vernis"],
      reliure: ["Agrafée", "Dos carré collé", "Anneaux"],
    },
  },
  {
    name: "Chaises longues",
    properties: {
      formats: ["Standard"],
      material: ["Bois", "Tissu polyester"],
      impression: ["Recto"],
      utilisations: ["Extérieur", "Intérieur"],
    },
  },
  {
    name: "Chemises à rabats",
    properties: {
      formats: ["A4", "A5"],
      impression: ["Recto", "Recto-verso"],
      papier: ["Couché", "Recyclé", "Offset"],
      finitions: ["Vernis UV", "Pelliculage mat", "Pelliculage brillant"],
    },
  },
  {
    name: "Chemises de présentation",
    properties: {
      formats: ["A4", "A5"],
      impression: ["Recto", "Recto-verso"],
      papier: ["Couché", "Recyclé", "Offset"],
      finitions: ["Vernis UV", "Pelliculage mat", "Pelliculage brillant"],
    },
  },
  {
    name: "Claque-mains",
    properties: {
      formats: ["Sur mesure"],
      material: ["Carton"],
      impression: ["Recto", "Recto-verso"],
    },
  },
  {
    name: "Classeurs",
    properties: {
      formats: ["A4", "A5"],
      papier: ["Couché", "Recyclé"],
      impression: ["Recto", "Recto-verso"],
      finitions: ["Pelliculage mat", "Pelliculage brillant"],
      options: ["Pochette au dos", "Pochette à carte"],
    },
  },
  {
    name: "Dépliants",
    properties: {
      formats: ["A4", "A5", "A6", "DL", "Carré"],
      plis: ["Simple pli", "Double pli", "Pli roulé", "Pli accordéon"],
      papier: ["Couché", "Recyclé", "Offset"],
      impression: ["Recto", "Recto-verso"],
      finitions: ["Vernis UV", "Pelliculage"],
    },
  },
  {
    name: "Drapeaux",
    properties: {
      formats: ["S", "M", "L", "XL"],
      matériel: ["Polyester", "Toile perforée"],
      impression: ["Recto", "Recto-verso"],
      utilisation: ["Intérieur", "Extérieur"],
    },
  },
  {
    name: "Drapeaux pour mâts",
    properties: {
      formats: ["S", "M", "L", "XL"],
      matériel: ["Polyester", "Toile perforée"],
      impression: ["Recto", "Recto-verso"],
      utilisation: ["Intérieur", "Extérieur"],
    },
  },
  {
    name: "Échantillons de produits",
    properties: {
      types: ["Boîtes", "Brochures", "Cartes de visite"],
      papier: ["Couché", "Recyclé"],
      impression: ["Recto", "Recto-verso"],
    },
  },
  {
    name: "Échantillons Emballages",
    properties: {
      types: ["Boîtes pliantes", "Boîtes à couvercle cloche"],
      matériel: ["Carton", "Carton recyclé"],
      impression: ["Recto", "Recto-verso"],
      finitions: ["Pelliculage", "Vernis"],
    },
  },
  {
    name: "Échantillons Emballages neutres",
    properties: {
      types: ["Boîtes pliantes", "Boîtes à couvercle cloche"],
      matériel: ["Carton", "Carton recyclé"],
      impression: ["Recto", "Recto-verso"],
      finitions: ["Pelliculage", "Vernis"],
    },
  },
  {
    name: "Échantillons Papier",
    properties: {
      types: ["Papier couché", "Papier recyclé", "Papier offset"],
      grammages: ["90 g/m²", "135 g/m²", "170 g/m²", "250 g/m²"],
    },
  },
  {
    name: "Échantillons Papiers neutres",
    properties: {
      types: ["Papier couché", "Papier recyclé", "Papier offset"],
      grammages: ["90 g/m²", "135 g/m²", "170 g/m²", "250 g/m²"],
    },
  },
  {
    name: "Échantillons Sacs en papier",
    properties: {
      types: ["Sacs en papier kraft", "Sacs en papier couché"],
      grammages: ["90 g/m²", "120 g/m²"],
      impression: ["Recto", "Recto-verso"],
    },
  },
  {
    name: "Échantillons Sacs en papier neutres",
    properties: {
      types: ["Sacs en papier kraft", "Sacs en papier couché"],
      grammages: ["90 g/m²", "120 g/m²"],
      impression: ["Recto", "Recto-verso"],
    },
  },
  {
    name: "Emballages",
    properties: {
      types: ["Boîtes pliantes", "Boîtes à couvercle cloche"],
      matériel: ["Carton", "Carton recyclé"],
      impression: ["Recto", "Recto-verso"],
      finitions: ["Pelliculage", "Vernis"],
    },
  },
  {
    name: "Encarts de DVD",
    properties: {
      formats: ["Standard", "Sur mesure"],
      papier: ["Couché", "Recyclé"],
      impression: ["Recto", "Recto-verso"],
    },
  },
  {
    name: "Enveloppes",
    properties: {
      formats: ["C4", "C5", "DL"],
      papier: ["Couché", "Recyclé"],
      impression: ["Recto", "Recto-verso"],
    },
  },
  {
    name: "Enveloppes cartonnées",
    properties: {
      formats: ["C4", "C5"],
      matériel: ["Carton", "Carton recyclé"],
      impression: ["Recto", "Recto-verso"],
    },
  },
  {
    name: "Étiquettes",
    properties: {
      formats: ["A4", "A5", "Sur mesure"],
      matériel: ["Papier couché", "Vinyle adhésif"],
      impression: ["Recto", "Recto-verso"],
      finitions: ["Vernis", "Pelliculage"],
    },
  },
  {
    name: "Étiquettes Découpe à la forme",
    properties: {
      formats: ["Sur mesure"],
      matériel: ["Papier couché", "Vinyle adhésif"],
      impression: ["Recto", "Recto-verso"],
      finitions: ["Vernis", "Pelliculage"],
    },
  },
  {
    name: "Étuis pliants",
    properties: {
      dimensions: ["60x40x100 mm", "110x80x160 mm", "210x100x298 mm"],
      largeur: "50-400 mm",
      profondeur: "18-200 mm",
      hauteur: "50-630 mm",
      types: ["Languettes d'insertion", "Onglet de verrouillage"],
      usage: ["Produits légers et de poids moyen"],
    },
  },
  {
    name: "Feuilles d'impression plano",
    properties: {
      formats: ["A3", "A2", "SRA3", "SRA2"],
      papier: ["Couché", "Recyclé", "Offset"],
      impression: ["Recto", "Recto-verso"],
      finitions: ["Vernis UV", "Pelliculage"],
    },
  },
  {
    name: "Films adhésifs",
    properties: {
      formats: ["Sur mesure"],
      matériel: ["Vinyle adhésif"],
      impression: ["Recto", "Recto-verso"],
      finitions: ["Vernis", "Pelliculage"],
    },
  },
  {
    name: "Flyers",
    properties: {
      formats: ["A6", "A5", "A4", "DL", "Carré"],
      papier: ["Couché", "Recyclé", "Offset"],
      impression: ["Recto", "Recto-verso"],
      finitions: ["Vernis UV", "Pelliculage mat", "Pelliculage brillant"],
    },
  },
  {
    name: "Flyers pliés",
    properties: {
      formats: ["A6", "A5", "A4", "DL", "Carré"],
      plis: ["Simple pli", "Double pli", "Pli roulé", "Pli accordéon"],
      papier: ["Couché", "Recyclé", "Offset"],
      impression: ["Recto", "Recto-verso"],
      finitions: ["Vernis UV", "Pelliculage mat", "Pelliculage brillant"],
    },
  },
  {
    name: "Fonds de boîte",
    properties: {
      formats: ["Sur mesure"],
      matériel: ["Carton", "Carton recyclé"],
      impression: ["Recto", "Recto-verso"],
      finitions: ["Pelliculage", "Vernis"],
    },
  },
  {
    name: "Fourreaux",
    properties: {
      formats: ["Sur mesure"],
      matériel: ["Carton", "Carton recyclé"],
      impression: ["Recto", "Recto-verso"],
      finitions: ["Pelliculage", "Vernis"],
    },
  },
  {
    name: "Gobelets boissons froides",
    properties: {
      tailles: ["200 ml", "300 ml", "400 ml"],
      matériel: ["Carton", "Plastique"],
      impression: ["Recto", "Recto-verso"],
      utilisation: ["Événements", "Restauration"],
    },
  },
  {
    name: "Gobelets en carton",
    properties: {
      tailles: ["200 ml", "300 ml", "400 ml"],
      matériel: ["Carton"],
      impression: ["Recto", "Recto-verso"],
      utilisation: ["Événements", "Restauration"],
    },
  },
  {
    name: "Jaquettes de CD",
    properties: {
      formats: ["Standard", "Sur mesure"],
      papier: ["Couché", "Recyclé"],
      impression: ["Recto", "Recto-verso"],
      finitions: ["Vernis UV", "Pelliculage"],
    },
  },
  {
    name: "Jaquettes de DVD",
    properties: {
      formats: ["Standard", "Sur mesure"],
      papier: ["Couché", "Recyclé"],
      impression: ["Recto", "Recto-verso"],
      finitions: ["Vernis UV", "Pelliculage"],
    },
  },
  {
    name: "Liasses autocopiantes",
    properties: {
      formats: ["A4", "A5", "A6"],
      jeux: ["2 feuillets", "3 feuillets"],
      impression: ["Recto", "Recto-verso"],
      papier: ["Autocopiant"],
    },
  },
  {
    name: "Livres",
    properties: {
      formats: ["A4", "A5", "Sur mesure"],
      papier: ["Couché", "Recyclé", "Offset"],
      impression: ["Recto", "Recto-verso"],
      reliure: ["Dos carré collé", "Spirale", "Agrafée"],
    },
  },
  {
    name: "Livrets CD/DVD",
    properties: {
      formats: ["Standard", "Sur mesure"],
      papier: ["Couché", "Recyclé"],
      impression: ["Recto", "Recto-verso"],
      finitions: ["Vernis UV", "Pelliculage"],
    },
  },
  {
    name: "Marque-pages",
    properties: {
      formats: ["Standard (148 x 52 mm)", "Sur mesure"],
      papier: ["Couché", "Recyclé", "Offset"],
      impression: ["Recto", "Recto-verso"],
      finitions: ["Vernis UV", "Pelliculage mat", "Pelliculage brillant"],
    },
  },
  {
    name: "Mini calendriers chevalet",
    properties: {
      formats: ["A6", "A5", "Sur mesure"],
      papier: ["Couché", "Recyclé", "Offset"],
      impression: ["Recto", "Recto-verso"],
      reliure: ["Spirale", "Agrafée"],
      finitions: ["Vernis UV", "Pelliculage mat", "Pelliculage brillant"],
    },
  },
  {
    name: "Multi-pages sans reliure",
    properties: {
      formats: ["A4", "A5", "Sur mesure"],
      papier: ["Couché", "Recyclé", "Offset"],
      impression: ["Recto", "Recto-verso"],
      finitions: ["Vernis UV", "Pelliculage mat", "Pelliculage brillant"],
    },
  },
  {
    name: "Murs pour tonnelles pliables",
    properties: {
      formats: ["3x3 m", "3x4,5 m", "3x6 m"],
      matériel: ["Polyester"],
      impression: ["Recto"],
      utilisation: ["Événements", "Salons", "Promotions"],
    },
  },
  {
    name: "Notes adhésives",
    properties: {
      formats: ["70 x 74 mm", "100 x 74 mm", "Sur mesure"],
      papier: ["Offset", "Recyclé"],
      impression: ["Recto"],
      feuilles: ["50", "100", "200 feuilles par bloc"],
    },
  },
  {
    name: "Overnight Calendriers de poche",
    properties: {
      formats: ["86 x 54 mm", "85 x 55 mm"],
      papier: ["Couché", "Recyclé"],
      impression: ["Recto", "Recto-verso"],
      finitions: ["Vernis UV", "Pelliculage mat", "Pelliculage brillant"],
    },
  },
  {
    name: "Overnight Cartes de fidélité",
    properties: {
      formats: ["86 x 54 mm", "85 x 55 mm"],
      papier: ["Couché", "Recyclé"],
      impression: ["Recto", "Recto-verso"],
      finitions: ["Vernis UV", "Pelliculage mat", "Pelliculage brillant"],
    },
  },
  {
    name: "Overnight Cartes de rendez-vous",
    properties: {
      formats: ["86 x 54 mm", "85 x 55 mm"],
      papier: ["Couché", "Recyclé"],
      impression: ["Recto", "Recto-verso"],
      finitions: ["Vernis UV", "Pelliculage mat", "Pelliculage brillant"],
    },
  },
  {
    name: "Overnight Cartes de visite",
    properties: {
      formats: ["86 x 54 mm", "85 x 55 mm"],
      papier: ["Couché", "Recyclé"],
      impression: ["Recto", "Recto-verso"],
      finitions: ["Vernis UV", "Pelliculage mat", "Pelliculage brillant"],
    },
  },
  {
    name: "Overnight Cartes de vœux",
    properties: {
      formats: ["A6", "A5", "DL", "Carré"],
      papier: ["Couché", "Recyclé"],
      impression: ["Recto", "Recto-verso"],
      finitions: ["Vernis UV", "Pelliculage mat", "Pelliculage brillant"],
    },
  },
  {
    name: "Overnight Dépliants",
    properties: {
      formats: ["A4", "A5", "DL", "Carré"],
      plis: ["Simple pli", "Double pli", "Pli roulé", "Pli accordéon"],
      papier: ["Couché", "Recyclé"],
      impression: ["Recto", "Recto-verso"],
      finitions: ["Vernis UV", "Pelliculage mat", "Pelliculage brillant"],
    },
  },
  {
    name: "Overnight Flyers",
    properties: {
      formats: ["A6", "A5", "A4", "DL", "Carré"],
      papier: ["Couché", "Recyclé"],
      impression: ["Recto", "Recto-verso"],
      finitions: ["Vernis UV", "Pelliculage mat", "Pelliculage brillant"],
    },
  },
  {
    name: "Overnight Jaquettes de CD",
    properties: {
      formats: ["Standard", "Sur mesure"],
      papier: ["Couché", "Recyclé"],
      impression: ["Recto", "Recto-verso"],
      finitions: ["Vernis UV", "Pelliculage mat", "Pelliculage brillant"],
    },
  },
  {
    name: "Overnight Livrets de CD/DVD",
    properties: {
      formats: ["Standard", "Sur mesure"],
      papier: ["Couché", "Recyclé"],
      impression: ["Recto", "Recto-verso"],
      finitions: ["Vernis UV", "Pelliculage mat", "Pelliculage brillant"],
    },
  },
  {
    name: "Overnight Menus",
    properties: {
      formats: ["A4", "A5", "DL", "Carré"],
      papier: ["Couché", "Recyclé"],
      impression: ["Recto", "Recto-verso"],
      finitions: ["Vernis UV", "Pelliculage mat", "Pelliculage brillant"],
    },
  },
  {
    name: "Overnight Papier à lettres",
    properties: {
      formats: ["A4", "A5"],
      papier: ["Offset", "Recyclé"],
      impression: ["Recto", "Recto-verso"],
    },
  },
  {
    name: "Overnight Sets de table",
    properties: {
      formats: ["A3", "A2", "Sur mesure"],
      papier: ["Couché", "Recyclé"],
      impression: ["Recto", "Recto-verso"],
      finitions: ["Vernis UV", "Pelliculage mat", "Pelliculage brillant"],
    },
  },
  {
    name: "Panneaux",
    properties: {
      formats: ["A3", "A2", "A1", "A0", "Sur mesure"],
      matériel: ["PVC", "Aluminium", "Akylux"],
      impression: ["Recto", "Recto-verso"],
      finitions: ["Vernis UV", "Pelliculage"],
    },
  },
  {
    name: "Papier à lettres",
    properties: {
      formats: ["A4", "A5"],
      papier: ["Offset", "Recyclé"],
      impression: ["Recto", "Recto-verso"],
    },
  },
  {
    name: "Plaques texte pour tampons",
    properties: {
      formats: ["Sur mesure"],
      matériel: ["Caoutchouc"],
      impression: ["Texte personnalisé"],
      couleurs: ["Noir", "Rouge", "Bleu"],
    },
  },
  {
    name: "Pochette ouverte",
    properties: {
      formats: ["A4", "A5"],
      papier: ["Couché", "Recyclé"],
      impression: ["Recto", "Recto-verso"],
      finitions: ["Vernis UV", "Pelliculage mat", "Pelliculage brillant"],
    },
  },
  {
    name: "Pochette refermable",
    properties: {
      formats: ["A4", "A5"],
      papier: ["Couché", "Recyclé"],
      impression: ["Recto", "Recto-verso"],
      finitions: ["Vernis UV", "Pelliculage mat", "Pelliculage brillant"],
    },
  },
  {
    name: "Présentoirs de table",
    properties: {
      formats: ["A4", "A5", "DL", "Carré"],
      matériel: ["Carton", "PVC"],
      impression: ["Recto", "Recto-verso"],
      finitions: ["Vernis UV", "Pelliculage mat", "Pelliculage brillant"],
    },
  },
  {
    name: "Roll-ups",
    properties: {
      formats: ["Standard (85x200 cm)", "XL (100x200 cm)", "Sur mesure"],
      matériel: ["Bâche PVC", "Polyester"],
      impression: ["Recto"],
      utilisation: ["Événements", "Salons", "Promotions"],
    },
  },
  {
    name: "Sacs en papier",
    properties: {
      formats: ["Petit", "Moyen", "Grand", "Sur mesure"],
      matériel: ["Papier couché 190 g/m²", "Papier couché 240 g/m²"],
      capacitéDeCharge: ["7 kg", "10 kg"],
      poignées: ["Poignée torsadée", "Poignée ruban"],
    },
  },
  {
    name: "Sets de table",
    properties: {
      formats: ["A3", "A2", "Sur mesure"],
      papier: ["Couché", "Recyclé"],
      impression: ["Recto", "Recto-verso"],
      finitions: ["Vernis UV", "Pelliculage mat", "Pelliculage brillant"],
    },
  },
  {
    name: "Sous-mains",
    properties: {
      formats: ["A2", "A3"],
      papier: ["Offset", "Recyclé"],
      impression: ["Recto"],
      feuilles: ["25", "50"],
    },
  },
  {
    name: "Stands parapluie",
    properties: {
      formats: ["3x3", "3x4", "3x5"],
      matériel: ["Aluminium", "Polyester"],
      impression: ["Recto"],
      utilisation: ["Événements", "Salons", "Promotions"],
    },
  },
  {
    name: "Tampons",
    properties: {
      formats: [
        "37x13 mm",
        "46x17 mm",
        "57x21 mm",
        "59x39 mm",
        "Ø 24 mm",
        "Ø 40 mm",
      ],
      matériaux: ["Plastique recyclé", "Acier brossé/plastique", "Hêtre"],
      couleurs: ["Bleu", "Rouge", "Noir"],
    },
  },
  {
    name: "Toiles tendues sur châssis",
    properties: {
      formats: ["20x30 cm", "30x40 cm", "40x60 cm", "50x70 cm", "Sur mesure"],
      matériel: ["Toile polyester", "Cadre en bois"],
      impression: ["Recto"],
      finitions: ["Mat", "Brillant"],
    },
  },
  {
    name: "Tonnelles pliables",
    properties: {
      formats: ["3x3 m", "3x4,5 m", "3x6 m"],
      matériel: ["Aluminium", "Polyester"],
      impression: ["Recto"],
      utilisation: ["Événements", "Salons", "Promotions"],
    },
  },
];
