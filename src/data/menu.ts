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
    price: "$15.50",
    image: saladBox,
    href: "#menu",
  },
  {
    title: "Tray Catering",
    description: "Build-your-own Mediterranean spreads with 3 protein choices, rice, salad, hummus, pita, toppings, and sauces.",
    price: "$19.50/person",
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
  { name: "Chicken Shawarma Salad Box", description: "Chicken shawarma served over crisp greens with cucumber tomato salad, pickled onions, hummus, pita, and dressing.", price: "$15.50", image: saladBox },
  { name: "Beef Shawarma Salad Box", description: "Beef shawarma served over crisp greens with cucumber tomato salad, pickled onions, hummus, pita, and dressing.", price: "$15.50", image: chickenSaladBox },
  { name: "Gyro Salad Box", description: "Gyro meat served over crisp greens with cucumber tomato salad, pickled onions, hummus, pita, and dressing.", price: "$15.50", image: chickenSaladBox },
  { name: "Falafel Salad Box", description: "Crispy falafel served over crisp greens with cucumber tomato salad, pickled onions, hummus, pita, and dressing.", price: "$15.50", image: chickenSaladBox },
  { name: "Mediterranean Combo Salad Box", description: "Choose any 2 proteins served over crisp greens with cucumber tomato salad, pickled onions, hummus, pita, and dressing.", price: "$17.50", badge: "Combo", image: chickenSaladBox },
  { name: "Chicken & Gyro Salad Box", description: "Chicken shawarma and gyro meat served over crisp greens with cucumber tomato salad, pickled onions, hummus, pita, and dressing.", price: "$17.50", image: chickenSaladBox },
];

const fullMeals: MenuItem[] = [
  { name: "Bowl Full Meal Box", description: "Choose any single-protein bowl, plus one appetizer and baklava.", price: "$20.50", image: fullMealBox },
  { name: "Combo Bowl Full Meal Box", description: "Choose any 2-protein combo bowl, plus one appetizer and baklava.", price: "$22.50", badge: "Best value", image: fullMealBox },
  { name: "Wrap Full Meal Box", description: "Choose any single-protein wrap box, plus one appetizer and baklava.", price: "$18.50", image: fullMealBox },
  { name: "Combo Wrap Full Meal Box", description: "Choose any 2-protein combo wrap box, plus one appetizer and baklava.", price: "$20.50", image: fullMealBox },
  { name: "Salad Full Meal Box", description: "Choose any single-protein salad box, plus one appetizer and baklava.", price: "$18.50", image: fullMealBox },
  { name: "Combo Salad Full Meal Box", description: "Choose any 2-protein combo salad box, plus one appetizer and baklava.", price: "$20.50", image: fullMealBox },
];

const trayCatering: MenuItem[] = [
  { name: "Office Mediterranean Spread", description: "Choose 3 proteins with Mediterranean rice, cucumber tomato salad, hummus, pita, pickled onions, toppings, and sauces.", price: "$19.50/person", badge: "Most popular", image: cateringTrays },
  { name: "Build-Your-Own Wrap Tray", description: "Assorted chicken, beef, gyro, and falafel wraps cut in halves with sauces and simple sides.", price: "$16.50/person", image: wrapPlatter },
  { name: "Executive Mezze & Protein Buffet", description: "Expanded buffet with proteins, mezze starter, salads, rice, pita, sauces, and baklava.", price: "$23.50/person", image: cateringSpread },
];

const appetizers: MenuItem[] = [
  { name: "Hummus & Pita Cup", description: "Creamy hummus served with pita. Great as a side or snack.", price: "$4.50", image: hummusPita },
  { name: "Falafel Bites", description: "Crispy falafel bites served with dipping sauce.", price: "$4.50", image: falafelBites },
  { name: "Mini Mezze Cup", description: "Hummus, cucumber tomato salad, pita, and sauce in an individual cup.", price: "$5.50", image: mezzePlatter },
  { name: "Hummus & Pita Tray", description: "Creamy hummus served with pita for a group.", price: "$45.00", image: hummusPita },
  { name: "Falafel Bites Tray", description: "Crispy falafel bites served with dipping sauce.", price: "$45.00", image: falafelBites },
  { name: "Simple Mezze Starter Tray", description: "Hummus, pita, falafel bites, cucumber tomato salad, and sauces.", price: "$70.00", image: mezzePlatter },
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
  { id: "tray-catering", label: "Tray Catering", eyebrow: "Buffet style", title: "Tray catering packages", description: "Office-ready spreads for larger meetings, all-hands lunches, and team events.", items: trayCatering },
  { id: "appetizers", label: "Appetizers", eyebrow: "Add-ons", title: "Mezze and sides", description: "Simple add-ons for boxed meals or tray catering.", items: appetizers },
  { id: "dessert", label: "Dessert", eyebrow: "Add-ons", title: "Baklava", description: "Classic sweet finishers for individuals or groups.", items: desserts },
  { id: "drinks", label: "Drinks", eyebrow: "Add-ons", title: "Beverages", description: "Easy office drink options for boxed meals and buffets.", items: drinks },
];

export const trayPackages = [
  {
    title: "Boxed Meal Catering",
    description: "Individually packaged bowls, wraps, salads, and full meal boxes with names or dietary notes.",
    price: "Starting at $15.50",
    image: fullMealBox,
    bullets: ["Best for trainings and lunch meetings", "Easy distribution", "Vegetarian-friendly options"],
  },
  {
    title: "Buffet Tray Catering",
    description: "Build-your-own Mediterranean buffet with 3 protein choices, rice, salad, hummus, pita, toppings, and sauces.",
    price: "Starting at $19.50/person",
    image: buffetSpread,
    bullets: ["Choose 3 proteins", "Warm tray setup", "Great for groups of 15+"],
  },
  {
    title: "Mezze & Wrap Platters",
    description: "Shareable wrap trays, hummus, falafel bites, cucumber tomato salad, pita, and baklava.",
    price: "Custom quote",
    image: wrapPlatter,
    bullets: ["Good for open houses", "Simple self-serve format", "Pairs with drinks and desserts"],
  },
];

export const howItWorks = [
  { title: "Tell us your event", description: "Share date, time, guest count, office address, and whether you want boxes or trays." },
  { title: "We help shape the order", description: "Pick proteins, meal style, appetizers, desserts, and any dietary handling." },
  { title: "We prep for office service", description: "Meals arrive organized for meetings, trainings, lunch rooms, and team events." },
];
