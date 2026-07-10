import heroSpread from "../assets/images/hero-mediterranean-spread.jpg";
import chickenBowl from "../assets/images/chicken-shawarma-bowl.jpg";
import beefBowl from "../assets/images/beef-shawarma-bowl.jpg";
import gyroBowl from "../assets/images/gyro-bowl.jpg";
import falafelBowl from "../assets/images/falafel-bowl.jpg";
import comboBowl from "../assets/images/combo-bowl.jpg";
import wrapBox from "../assets/images/wrap-box.jpg";
import saladBox from "../assets/images/salad-box.jpg";
import cateringTrays from "../assets/images/catering-trays.jpg";
import buffetSpread from "../assets/images/buffet-spread.jpg";
import assortedWraps from "../assets/images/assorted-wraps.jpg";
import chickenSaladBox from "../assets/images/chicken-salad-box.jpg";
import hummusPita from "../assets/images/hummus-pita.jpg";
import falafelBites from "../assets/images/falafel-bites.jpg";
import mezzePlatter from "../assets/images/mezze-platter.jpg";
import baklava from "../assets/images/baklava.jpg";
import fullMealBox from "../assets/images/full-meal-box.jpg";
import wrapPlatter from "../assets/images/wrap-platter.jpg";
import cateringSpread from "../assets/images/catering-spread.jpg";

export const images = {
  heroSpread,
  chickenBowl,
  beefBowl,
  gyroBowl,
  falafelBowl,
  comboBowl,
  wrapBox,
  saladBox,
  cateringTrays,
  buffetSpread,
  assortedWraps,
  chickenSaladBox,
  hummusPita,
  falafelBites,
  mezzePlatter,
  baklava,
  fullMealBox,
  wrapPlatter,
  cateringSpread,
};

export type MenuItem = {
  name: string;
  description: string;
  price: string;
  image?: string;
  badge?: string;
};

export type MenuCategory = {
  id: string;
  label: string;
  eyebrow: string;
  title: string;
  description: string;
  items: MenuItem[];
};

export type CateringPackage = {
  name: string;
  description: string;
  tiers: Array<{ label: string; price: string }>;
  from: string;
  image: string;
  alt: string;
  featured?: boolean;
};

export type TrayLine = {
  name: string;
  description?: string;
  serves10?: string;
  serves20?: string;
  price?: string;
};

export const navLinks = [
  { label: "Menu", href: "#menu" },
  { label: "Boxed Meals", href: "#boxed-meals" },
  { label: "Tray Catering", href: "#tray-catering" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#quote" },
];

export const trustItems = [
  "Built for office lunches",
  "Individually packaged meals",
  "Buffet-style trays",
  "Easy team ordering",
  "Vegetarian-friendly options",
];

export const featuredCategories = [
  {
    title: "Bowl Boxes",
    description: "Mediterranean rice, protein, cucumber tomato salad, greens, hummus, pita, and sauces.",
    price: "$17.50",
    image: chickenBowl,
    href: "#menu",
  },
  {
    title: "Wrap Boxes",
    description: "Mediterranean wraps with protein, greens, cucumber tomato salad, pickled onions, and sauce.",
    price: "$15.50",
    image: wrapBox,
    href: "#menu",
  },
  {
    title: "Salad Boxes",
    description: "Fresh greens with protein, cucumber tomato salad, pickled onions, hummus, pita, and dressing.",
    price: "$17.50",
    image: saladBox,
    href: "#menu",
  },
  {
    title: "Tray Catering",
    description: "Build-your-own Mediterranean spreads with 3 protein choices, rice, salad, hummus, pita, toppings, and sauces.",
    price: "$17.50/person",
    image: cateringTrays,
    href: "#tray-catering",
  },
];

const bowls: MenuItem[] = [
  { name: "Chicken Shawarma Bowl", description: "Marinated chicken shawarma served over Mediterranean rice with cucumber tomato salad, greens, hummus, pita, and signature sauces.", price: "$17.50", image: chickenBowl },
  { name: "Beef Shawarma Bowl", description: "Seasoned beef shawarma served over Mediterranean rice with cucumber tomato salad, greens, hummus, pita, and sauces.", price: "$17.50", image: beefBowl },
  { name: "Gyro Bowl", description: "Savory gyro meat served over Mediterranean rice with cucumber tomato salad, greens, hummus, pita, and sauces.", price: "$17.50", image: gyroBowl },
  { name: "Falafel Bowl", description: "Crispy falafel served over Mediterranean rice with cucumber tomato salad, greens, hummus, pita, and sauces.", price: "$17.50", image: falafelBowl },
  { name: "Mediterranean Combo Bowl", description: "Choose any 2 proteins served over Mediterranean rice with cucumber tomato salad, greens, hummus, pita, and sauces.", price: "$19.50", badge: "Combo", image: comboBowl },
  { name: "Chicken & Gyro Combo Bowl", description: "Office favorite with chicken shawarma and gyro meat over Mediterranean rice, salad, hummus, pita, and sauces.", price: "$19.50", badge: "Fan favorite", image: comboBowl },
];

const wraps: MenuItem[] = [
  { name: "Chicken Shawarma Wrap Box", description: "Chicken shawarma wrapped with greens, cucumber tomato salad, pickled onions, and white sauce. Served with a side of sauce.", price: "$15.50", image: wrapBox },
  { name: "Beef Shawarma Wrap Box", description: "Beef shawarma wrapped with greens, cucumber tomato salad, pickled onions, and white sauce. Served with a side of sauce.", price: "$15.50", image: assortedWraps },
  { name: "Gyro Wrap Box", description: "Gyro meat wrapped with greens, cucumber tomato salad, pickled onions, and white sauce. Served with a side of sauce.", price: "$15.50", image: assortedWraps },
  { name: "Falafel Wrap Box", description: "Crispy falafel wrapped with greens, cucumber tomato salad, pickled onions, hummus, and sauce. Served with a side of sauce.", price: "$15.50", image: assortedWraps },
  { name: "Mediterranean Combo Wrap Box", description: "Choose any 2 proteins wrapped with greens, cucumber tomato salad, pickled onions, and sauce.", price: "$17.50", badge: "Combo", image: assortedWraps },
  { name: "Chicken & Gyro Wrap Box", description: "Chicken shawarma and gyro meat wrapped with greens, cucumber tomato salad, pickled onions, and sauce.", price: "$17.50", badge: "Fan favorite", image: assortedWraps },
];

const salads: MenuItem[] = [
  { name: "Chicken Shawarma Salad Box", description: "Chicken shawarma served over crisp greens with cucumber tomato salad, pickled onions, hummus, pita, and dressing.", price: "$17.50", image: saladBox },
  { name: "Beef Shawarma Salad Box", description: "Beef shawarma served over crisp greens with cucumber tomato salad, pickled onions, hummus, pita, and dressing.", price: "$17.50", image: chickenSaladBox },
  { name: "Gyro Salad Box", description: "Gyro meat served over crisp greens with cucumber tomato salad, pickled onions, hummus, pita, and dressing.", price: "$17.50", image: chickenSaladBox },
  { name: "Falafel Salad Box", description: "Crispy falafel served over crisp greens with cucumber tomato salad, pickled onions, hummus, pita, and dressing.", price: "$17.50", image: chickenSaladBox },
  { name: "Mediterranean Combo Salad Box", description: "Choose any 2 proteins served over crisp greens with cucumber tomato salad, pickled onions, hummus, pita, and dressing.", price: "$19.50", badge: "Combo", image: chickenSaladBox },
  { name: "Chicken & Gyro Salad Box", description: "Chicken shawarma and gyro meat served over crisp greens with cucumber tomato salad, pickled onions, hummus, pita, and dressing.", price: "$19.50", image: chickenSaladBox },
];

const fullMeals: MenuItem[] = [
  { name: "Bowl Full Meal Box", description: "Choose any single-protein bowl, plus one appetizer and baklava.", price: "$20.50", image: fullMealBox },
  { name: "Combo Bowl Full Meal Box", description: "Choose any 2-protein combo bowl, plus one appetizer and baklava.", price: "$22.50", badge: "Best value", image: fullMealBox },
  { name: "Wrap Full Meal Box", description: "Choose any single-protein wrap box, plus one appetizer and baklava.", price: "$18.50", image: fullMealBox },
  { name: "Combo Wrap Full Meal Box", description: "Choose any 2-protein combo wrap box, plus one appetizer and baklava.", price: "$20.50", image: fullMealBox },
  { name: "Salad Full Meal Box", description: "Choose any single-protein salad box, plus one appetizer and baklava.", price: "$20.50", image: fullMealBox },
  { name: "Combo Salad Full Meal Box", description: "Choose any 2-protein combo salad box, plus one appetizer and baklava.", price: "$22.50", image: fullMealBox },
];

const appetizers: MenuItem[] = [
  { name: "Hummus & Pita Cup", description: "Individual side for 1 person with creamy hummus and pita.", price: "$4.50", image: hummusPita },
  { name: "Falafel Bites", description: "Individual side for 1 person with crispy falafel bites and dipping sauce.", price: "$4.50", image: falafelBites },
  { name: "Mini Mezze Cup", description: "Individual mezze side for 1 person with hummus, cucumber tomato salad, pita, and sauce.", price: "$5.50", image: mezzePlatter },
  { name: "Hummus & Pita Tray", description: "Serves 10-12 as a shared appetizer. Creamy hummus with pita.", price: "$45.00", image: hummusPita },
  { name: "Falafel Bites Tray", description: "Serves 10-12 as a shared appetizer. Crispy falafel bites with dipping sauce.", price: "$45.00", image: falafelBites },
  { name: "Simple Mezze Starter Tray", description: "Serves 10-12 as a shared starter. Hummus, pita, falafel bites, cucumber tomato salad, and sauces.", price: "$70.00", image: mezzePlatter },
];

const desserts: MenuItem[] = [
  { name: "Baklava Piece", description: "Sweet, flaky baklava with layers of pastry, nuts, and syrup.", price: "$3.00", image: baklava },
  { name: "Baklava 12-Piece Tray", description: "A shareable tray of classic baklava pieces.", price: "$30.00", image: baklava },
  { name: "Baklava 24-Piece Tray", description: "A larger tray of classic baklava pieces for groups.", price: "$58.00", image: baklava },
];

const drinks: MenuItem[] = [
  { name: "Bottled Water", description: "Individual bottled water.", price: "$2.00" },
  { name: "Canned Soda", description: "Assorted canned soda.", price: "$2.50" },
  { name: "Sparkling Water", description: "Individual sparkling water.", price: "$3.00" },
  { name: "Iced Tea", description: "Bottled or canned iced tea.", price: "$3.00" },
  { name: "Mint Lemonade", description: "Refreshing mint lemonade.", price: "$3.50" },
  { name: "Beverage Pack", description: "Assorted bottled water and canned drinks for groups.", price: "$2.75/person" },
];

export const menuCategories: MenuCategory[] = [
  { id: "bowls", label: "Bowls", eyebrow: "Boxed meals", title: "Mediterranean bowl boxes", description: "Rice, protein, greens, hummus, pita, fresh salad, pickled onions, and sauces in a neat office-ready box.", items: bowls },
  { id: "wraps", label: "Wraps", eyebrow: "Boxed meals", title: "Wrap boxes", description: "Handheld Mediterranean wraps with a side of sauce, ideal for quick meetings and trainings.", items: wraps },
  { id: "salads", label: "Salads", eyebrow: "Boxed meals", title: "Fresh salad boxes", description: "Bright greens, protein, hummus, pita, fresh salad, and dressing for lighter office lunches.", items: salads },
  { id: "full-meal-boxes", label: "Full Meal Boxes", eyebrow: "Boxed meals", title: "Full meal boxes", description: "Entree, appetizer, and baklava packed for complete individual meals.", items: fullMeals },
  { id: "appetizers", label: "Appetizers", eyebrow: "Add-ons", title: "Mezze and sides", description: "Simple add-ons for boxed meals or tray catering.", items: appetizers },
  { id: "dessert", label: "Dessert", eyebrow: "Add-ons", title: "Baklava", description: "Classic sweet finishers for individuals or groups.", items: desserts },
  { id: "drinks", label: "Drinks", eyebrow: "Add-ons", title: "Beverages", description: "Easy office drink options for boxed meals and buffets.", items: drinks },
];

export const cateringPackages: CateringPackage[] = [
  {
    name: "Mediterranean Office Buffet",
    description: "A complete Mediterranean catering spread with your choice of three proteins, rice, salad, hummus, pita, fresh toppings, and sauces. Perfect for office lunches, meetings, and team events.",
    tiers: [
      { label: "Serves 10", price: "$175" },
      { label: "Serves 20", price: "$350" },
      { label: "Serves 30", price: "$525" },
      { label: "Serves 50", price: "$875" },
    ],
    from: "$175",
    image: buffetSpread,
    alt: "Mediterranean catering buffet with trays, rice, proteins, hummus, and pita",
  },
  {
    name: "Build-Your-Own Mediterranean Bowl Bar",
    description: "A fresh build-your-own Mediterranean bowl bar with rice, greens, three protein choices, hummus, pita, toppings, and sauces. Great for offices where everyone wants to customize their meal.",
    tiers: [
      { label: "Serves 10", price: "$175" },
      { label: "Serves 20", price: "$350" },
      { label: "Serves 30", price: "$525" },
      { label: "Serves 50", price: "$875" },
    ],
    from: "$175",
    image: cateringTrays,
    alt: "Mediterranean catering trays with rice, chicken shawarma, beef, and falafel",
  },
  {
    name: "Mediterranean Wrap Platter Package",
    description: "An assorted Mediterranean wrap platter with chicken, beef, gyro, or falafel wraps, served with sauces and a fresh side salad. Easy to serve and perfect for working lunches.",
    tiers: [
      { label: "Serves 10", price: "$175" },
      { label: "Serves 20", price: "$350" },
      { label: "Serves 30", price: "$525" },
      { label: "Serves 50", price: "$875" },
    ],
    from: "$175",
    image: wrapPlatter,
    alt: "Mediterranean wrap platter with assorted wraps, dips, and salad for office catering",
  },
  {
    name: "Full Meal Catering Package",
    description: "A full Mediterranean catering meal with three protein choices, rice, salad, hummus, pita, toppings, sauces, appetizer, and dessert. Built for office lunches, client meetings, and team events.",
    tiers: [
      { label: "Serves 10", price: "$195" },
      { label: "Serves 20", price: "$390" },
      { label: "Serves 30", price: "$585" },
      { label: "Serves 50", price: "$975" },
    ],
    from: "$195",
    image: cateringSpread,
    alt: "Full Mediterranean catering package with trays of rice, proteins, falafel, hummus, and salad",
    featured: true,
  },
];

export const proteinTrays: TrayLine[] = [
  { name: "Chicken Shawarma Tray", description: "Marinated chicken shawarma prepared for buffet-style catering.", serves10: "$85", serves20: "$170" },
  { name: "Beef Shawarma Tray", description: "Seasoned beef shawarma prepared for buffet-style catering.", serves10: "$95", serves20: "$190" },
  { name: "Gyro Meat Tray", description: "Savory gyro meat prepared for buffet-style catering.", serves10: "$85", serves20: "$170" },
  { name: "Falafel Tray", description: "Crispy falafel served with dipping sauce.", serves10: "$70", serves20: "$140" },
  { name: "Three-Protein Catering Tray", description: "Choose any 3 proteins for a catering spread.", serves10: "$245", serves20: "$490" },
];

export const sideTrays: TrayLine[] = [
  { name: "Mediterranean Rice Tray", price: "$35" },
  { name: "House Salad Tray", price: "$45" },
  { name: "Cucumber Tomato Salad Tray", price: "$35" },
  { name: "Hummus Tray", price: "$35" },
  { name: "Pita Tray", price: "$18" },
  { name: "Pickled Onion Side", price: "$12" },
  { name: "Sauce Set", price: "$15" },
];

export const cateringBullets = [
  "Individually packaged meals",
  "Buffet-style trays",
  "Choose 3 proteins for catering packages",
  "Vegetarian-friendly falafel option",
  "Full meal boxes with appetizer and baklava",
  "Easy setup for meetings and office lunches",
];

export const howItWorks = [
  { number: "01", title: "Choose boxed meals or tray catering", description: "Pick individual bowls, wraps, salads, full meal boxes, or a catering package sized for your team." },
  { number: "02", title: "Select proteins and sides", description: "Choose from chicken shawarma, beef shawarma, gyro meat, falafel, hummus, pita, salads, sauces, and dessert." },
  { number: "03", title: "We prepare and deliver", description: "Built for office lunches, meetings, trainings, onboarding days, and team events. Fresh, on time, every time." },
];
