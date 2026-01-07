export interface Collection {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  productCount: number;
}

export const collections: Collection[] = [
  { id: "1", name: "Alle Producten", slug: "alle-producten", description: "Ons complete assortiment verse vis en zeevruchten", image: "/all", productCount: 150 },
  { id: "2", name: "Verse Vis", slug: "verse-vis", description: "Dagelijks verse vis van de markt", image: "/fish", productCount: 45 },
  { id: "3", name: "Schaal- en Schelpdieren", slug: "schaal-en-schelpdieren", description: "Premium kreeft, krab en oesters", image: "/shellfish", productCount: 28 },
  { id: "4", name: "Klaar-en-Klaar", slug: "klaar-en-klaar", description: "Kant-en-klare visgerechten", image: "/ready", productCount: 18 },
  { id: "5", name: "Sushi en Sashimi", slug: "sushi-en-sashimi", description: "Sashimi-grade vis voor uw sushi", image: "/sushi", productCount: 15 },
  { id: "6", name: "Olie en Azijn", slug: "olie-en-azijn", description: "Premium oliën en azijnen", image: "/oil", productCount: 12 },
  { id: "7", name: "Specials", slug: "specials", description: "Bijzondere en seizoensgebonden producten", image: "/specials", productCount: 20 },
  { id: "8", name: "Delicatessen", slug: "delicatessen", description: "Culinaire delicatessen", image: "/deli", productCount: 22 },
  { id: "9", name: "Sauzen", slug: "sauzen", description: "Huisgemaakte sauzen", image: "/sauces", productCount: 16 },
  { id: "10", name: "Schotels", slug: "schotels", description: "Complete visschotels voor feesten", image: "/platters", productCount: 10 },
  { id: "11", name: "Diepvries", slug: "diepvries", description: "Diepvriesproducten van hoge kwaliteit", image: "/frozen", productCount: 25 },
  { id: "12", name: "Conserven", slug: "conserven", description: "Ingeblikte vis en zeevruchten", image: "/canned", productCount: 18 },
  { id: "13", name: "Kruiden en Specerijen", slug: "kruiden-en-specerijen", description: "Kruiden speciaal voor vis", image: "/spices", productCount: 14 },
  { id: "14", name: "Merchandise", slug: "merchandise", description: "Schmidt Zeevis merchandise", image: "/merch", productCount: 8 },
  { id: "15", name: "Diversen", slug: "diversen", description: "Overige producten", image: "/misc", productCount: 12 },
  { id: "16", name: "Vangst van de Maand", slug: "vangst-van-de-maand", description: "De versste vis van dit seizoen", image: "/catch", productCount: 8 },
];

export interface Product {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  thumbnails: string[];
  rating: number;
  reviewCount: number;
  weight: string;
  variants: { name: string; options: string[] }[];
  collectionId: string;
  seasonality: "available" | "in-season" | "unavailable";
  allergens: string[];
  nutritionalInfo: { name: string; value: string }[];
  seasonCalendar: { month: string; status: "available" | "in-season" | "unavailable" }[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "Zeeuwse Kreeft",
    slug: "zeeuwse-kreeft",
    shortDescription: "Vers gevangen Zeeuwse kreeft van premium kwaliteit",
    description: "Onze Zeeuwse kreeft wordt dagelijks vers gevangen door lokale vissers. Met zijn zoete, delicate smaak en stevige textuur is dit een ware delicatesse voor de fijnproever. Perfect voor een feestelijk diner of speciale gelegenheid.",
    price: 34.95,
    originalPrice: 39.95,
    image: "",
    thumbnails: [],
    rating: 4.8,
    reviewCount: 124,
    weight: "ca. 500g per stuk",
    variants: [
      { name: "Kies uw optie", options: ["400-500g Levend", "500-600g Levend", "600-700g Levend", "400-500g Gekookt", "500-600g Gekookt", "600-700g Gekookt"] },
    ],
    collectionId: "3",
    seasonality: "in-season",
    allergens: ["Schaaldieren"],
    nutritionalInfo: [
      { name: "Calorieën", value: "89 kcal per 100g" },
      { name: "Eiwitten", value: "19g per 100g" },
      { name: "Vetten", value: "0.9g per 100g" },
      { name: "Omega-3", value: "0.1g per 100g" },
    ],
    seasonCalendar: [
      { month: "Jan", status: "unavailable" },
      { month: "Feb", status: "unavailable" },
      { month: "Mar", status: "unavailable" },
      { month: "Apr", status: "available" },
      { month: "Mei", status: "available" },
      { month: "Jun", status: "in-season" },
      { month: "Jul", status: "in-season" },
      { month: "Aug", status: "in-season" },
      { month: "Sep", status: "available" },
      { month: "Okt", status: "available" },
      { month: "Nov", status: "unavailable" },
      { month: "Dec", status: "unavailable" },
    ],
  },
  {
    id: "2",
    name: "Hollandse Garnalen",
    slug: "hollandse-garnalen",
    shortDescription: "Handgepelde Hollandse garnalen",
    description: "Authentieke Hollandse garnalen, met de hand gepeld voor de beste smaak en textuur. Deze kleine garnalen staan bekend om hun zoete, delicate smaak.",
    price: 18.95,
    image: "",
    thumbnails: [],
    rating: 4.9,
    reviewCount: 89,
    weight: "100g",
    variants: [
      { name: "Kies uw optie", options: ["100g", "200g", "500g"] },
    ],
    collectionId: "3",
    seasonality: "available",
    allergens: ["Schaaldieren"],
    nutritionalInfo: [
      { name: "Calorieën", value: "99 kcal per 100g" },
      { name: "Eiwitten", value: "20.9g per 100g" },
      { name: "Vetten", value: "1.7g per 100g" },
    ],
    seasonCalendar: [
      { month: "Jan", status: "available" },
      { month: "Feb", status: "available" },
      { month: "Mar", status: "available" },
      { month: "Apr", status: "in-season" },
      { month: "Mei", status: "in-season" },
      { month: "Jun", status: "in-season" },
      { month: "Jul", status: "in-season" },
      { month: "Aug", status: "in-season" },
      { month: "Sep", status: "in-season" },
      { month: "Okt", status: "available" },
      { month: "Nov", status: "available" },
      { month: "Dec", status: "available" },
    ],
  },
  {
    id: "3",
    name: "Verse Zalm Filet",
    slug: "verse-zalm-filet",
    shortDescription: "Noorse zalm van premium kwaliteit",
    description: "Onze verse zalmfilet komt rechtstreeks uit de koude wateren van Noorwegen. Met zijn rijke, vette textuur en diepe oranje kleur is dit de perfecte keuze voor elke bereiding.",
    price: 24.95,
    image: "",
    thumbnails: [],
    rating: 4.7,
    reviewCount: 156,
    weight: "ca. 200g per portie",
    variants: [
      { name: "Kies uw optie", options: ["200g Filet", "400g Filet", "1kg Filet", "200g Steak", "400g Steak", "Heel"] },
    ],
    collectionId: "2",
    seasonality: "available",
    allergens: ["Vis"],
    nutritionalInfo: [
      { name: "Calorieën", value: "208 kcal per 100g" },
      { name: "Eiwitten", value: "20g per 100g" },
      { name: "Vetten", value: "13g per 100g" },
      { name: "Omega-3", value: "2.3g per 100g" },
    ],
    seasonCalendar: [
      { month: "Jan", status: "available" },
      { month: "Feb", status: "available" },
      { month: "Mar", status: "available" },
      { month: "Apr", status: "available" },
      { month: "Mei", status: "available" },
      { month: "Jun", status: "available" },
      { month: "Jul", status: "available" },
      { month: "Aug", status: "available" },
      { month: "Sep", status: "available" },
      { month: "Okt", status: "available" },
      { month: "Nov", status: "available" },
      { month: "Dec", status: "available" },
    ],
  },
  {
    id: "4",
    name: "Zeeuwse Platte Oesters",
    slug: "zeeuwse-platte-oesters",
    shortDescription: "Authentieke Zeeuwse platte oesters",
    description: "De Zeeuwse platte oester is een ware delicatesse. Met zijn unieke, minerale smaak en romige textuur is dit de koning onder de oesters.",
    price: 29.95,
    originalPrice: 34.95,
    image: "",
    thumbnails: [],
    rating: 4.9,
    reviewCount: 67,
    weight: "12 stuks",
    variants: [
      { name: "Kies uw optie", options: ["6 stuks Medium", "12 stuks Medium", "24 stuks Medium", "6 stuks Large", "12 stuks Large", "24 stuks Large"] },
    ],
    collectionId: "3",
    seasonality: "in-season",
    allergens: ["Weekdieren"],
    nutritionalInfo: [
      { name: "Calorieën", value: "68 kcal per 100g" },
      { name: "Eiwitten", value: "7g per 100g" },
      { name: "Vetten", value: "2g per 100g" },
      { name: "Zink", value: "16mg per 100g" },
    ],
    seasonCalendar: [
      { month: "Jan", status: "in-season" },
      { month: "Feb", status: "in-season" },
      { month: "Mar", status: "in-season" },
      { month: "Apr", status: "available" },
      { month: "Mei", status: "unavailable" },
      { month: "Jun", status: "unavailable" },
      { month: "Jul", status: "unavailable" },
      { month: "Aug", status: "unavailable" },
      { month: "Sep", status: "available" },
      { month: "Okt", status: "in-season" },
      { month: "Nov", status: "in-season" },
      { month: "Dec", status: "in-season" },
    ],
  },
];

export const getProductsByCollection = (collectionSlug: string): Product[] => {
  const collection = collections.find((c) => c.slug === collectionSlug);
  if (!collection) return products;
  return products.filter((p) => p.collectionId === collection.id);
};

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find((p) => p.slug === slug);
};

export const getCollectionBySlug = (slug: string): Collection | undefined => {
  return collections.find((c) => c.slug === slug);
};
