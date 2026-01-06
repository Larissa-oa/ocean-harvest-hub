export interface Collection {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  productCount: number;
}

export const collections: Collection[] = [
  { id: "1", name: "Zalm & Forel", slug: "salmon", description: "Verse en gerookte zalm variaties", image: "/salmon", productCount: 24 },
  { id: "2", name: "Garnalen", slug: "shrimp", description: "Van Hollandse tot tijgergarnalen", image: "/shrimp", productCount: 18 },
  { id: "3", name: "Oesters", slug: "oysters", description: "Premium Zeeuwse oesters", image: "/oysters", productCount: 8 },
  { id: "4", name: "Kreeft & Krab", slug: "lobster", description: "Verse kreeft en krab", image: "/lobster", productCount: 12 },
  { id: "5", name: "Mosselen", slug: "mussels", description: "Zeeuwse mosselen in seizoen", image: "/mussels", productCount: 6 },
  { id: "6", name: "Tonijn", slug: "tuna", description: "Sashimi grade tonijn", image: "/tuna", productCount: 10 },
  { id: "7", name: "Kabeljauw", slug: "cod", description: "Wild gevangen kabeljauw", image: "/cod", productCount: 14 },
  { id: "8", name: "Makreel", slug: "mackerel", description: "Verse en gerookte makreel", image: "/mackerel", productCount: 8 },
  { id: "9", name: "Schelpdieren", slug: "shellfish", description: "Coquilles, venus en meer", image: "/shellfish", productCount: 16 },
  { id: "10", name: "Gerookte Vis", slug: "smoked", description: "Ambachtelijk gerookt", image: "/smoked", productCount: 20 },
  { id: "11", name: "Haring", slug: "herring", description: "Hollandse Nieuwe en meer", image: "/herring", productCount: 12 },
  { id: "12", name: "Zeebaars", slug: "seabass", description: "Mediterrane zeebaars", image: "/seabass", productCount: 6 },
  { id: "13", name: "Seizoensproducten", slug: "seasonal", description: "Nu in het seizoen", image: "/seasonal", productCount: 15 },
  { id: "14", name: "Vispakketten", slug: "packages", description: "Samengestelde pakketten", image: "/packages", productCount: 8 },
  { id: "15", name: "Aanbiedingen", slug: "deals", description: "Speciale kortingen", image: "/deals", productCount: 10 },
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
      { name: "Grootte", options: ["400-500g", "500-600g", "600-700g"] },
      { name: "Bereiding", options: ["Levend", "Gekookt"] },
    ],
    collectionId: "4",
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
      { name: "Gewicht", options: ["100g", "200g", "500g"] },
    ],
    collectionId: "2",
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
      { name: "Gewicht", options: ["200g", "400g", "1kg"] },
      { name: "Snit", options: ["Filet", "Steak", "Heel"] },
    ],
    collectionId: "1",
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
      { name: "Aantal", options: ["6 stuks", "12 stuks", "24 stuks"] },
      { name: "Grootte", options: ["Medium", "Large"] },
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
