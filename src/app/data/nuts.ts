export interface Nut {
  id: number;
  name: string;
  category: string;
  type: string;
  price: number;
  oldPrice?: number; // Original price before discount
  image: string;
  description: string;
  weight: string;
  origin: string;
  article: string;
  nutritionalInfo: {
    calories: number;
    protein: string;
    fat: string;
    carbs: string;
  };
}

export const nuts: Nut[] = [
  {
    id: 1,
    name: "Premium Almonds",
    category: "Almonds",
    type: "Premium California",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1641430470762-13c3489762e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbG1vbmRzJTIwY2xvc2UlMjB1cHxlbnwxfHx8fDE3NzQyNjMyNDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "High-quality California almonds, rich in vitamin E and healthy fats. Perfect for snacking or baking. Our almonds are carefully selected and roasted to perfection.",
    weight: "500g",
    origin: "California, USA",
    article: "20001",
    nutritionalInfo: {
      calories: 579,
      protein: "21g",
      fat: "50g",
      carbs: "22g"
    }
  },
  {
    id: 2,
    name: "Organic Walnuts",
    category: "Walnuts",
    type: "Organic Moldova",
    price: 15.49,
    oldPrice: 18.99,
    image: "https://images.unsplash.com/photo-1584542979166-bd34924d7b25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YWxudXRzJTIwd29vZGVuJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NzQyNjMyNDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Premium organic walnuts packed with omega-3 fatty acids. Excellent for heart health and brain function. Harvested from certified organic farms.",
    weight: "500g",
    origin: "Moldova",
    article: "10004",
    nutritionalInfo: {
      calories: 654,
      protein: "15g",
      fat: "65g",
      carbs: "14g"
    }
  },
  {
    id: 3,
    name: "Roasted Cashews",
    category: "Cashews",
    type: "Roasted Vietnam",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1726771517475-e7acdd34cd8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXNoZXclMjBudXRzfGVufDF8fHx8MTc3NDI2MDc1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Creamy, buttery cashews roasted to golden perfection. Rich in minerals like copper and magnesium. Ideal for snacking or adding to salads.",
    weight: "500g",
    origin: "Vietnam",
    article: "60001",
    nutritionalInfo: {
      calories: 553,
      protein: "18g",
      fat: "44g",
      carbs: "30g"
    }
  },
  {
    id: 4,
    name: "Pistachios",
    category: "Pistachios",
    type: "Kernel Iran",
    price: 18.99,
    oldPrice: 21.99,
    image: "https://images.unsplash.com/photo-1598110996285-54523b72be93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXN0YWNoaW9zJTIwZ3JlZW58ZW58MXx8fHwxNzc0MjYzMjQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Fresh green pistachios with a distinctive sweet flavor. High in antioxidants and fiber. Shelled for your convenience.",
    weight: "500g",
    origin: "Iran",
    article: "50001",
    nutritionalInfo: {
      calories: 560,
      protein: "20g",
      fat: "45g",
      carbs: "28g"
    }
  },
  {
    id: 5,
    name: "Raw Hazelnuts",
    category: "Hazelnuts",
    type: "Raw Turkey",
    price: 13.49,
    image: "https://images.unsplash.com/photo-1444483911532-30de7b1b0aaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXplbG51dHMlMjBicm93bnxlbnwxfHx8fDE3NzQyNjMyNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Premium Turkish hazelnuts with a rich, buttery taste. Perfect for baking, making hazelnut butter, or enjoying raw. High in vitamin E.",
    weight: "500g",
    origin: "Turkey",
    article: "70001",
    nutritionalInfo: {
      calories: 628,
      protein: "15g",
      fat: "61g",
      carbs: "17g"
    }
  },
  {
    id: 6,
    name: "Pecan Halves",
    category: "Pecans",
    type: "Halves Texas",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1647532198028-0e14fe8ea54e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWNhbnMlMjBvcmdhbmljfGVufDF8fHx8MTc3NDI2MzI0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Buttery pecan halves with a sweet, rich flavor. Excellent for pies, pralines, or snacking. Packed with antioxidants and healthy fats.",
    weight: "500g",
    origin: "Texas, USA",
    article: "30001",
    nutritionalInfo: {
      calories: 691,
      protein: "9g",
      fat: "72g",
      carbs: "14g"
    }
  },
  {
    id: 7,
    name: "Roasted Peanuts",
    category: "Peanuts",
    type: "Roasted Salted",
    price: 8.99,
    oldPrice: 10.99,
    image: "https://images.unsplash.com/photo-1674454432640-abb820e787c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFudXRzJTIwcm9hc3RlZHxlbnwxfHx8fDE3NzQyNjMyNDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Classic roasted peanuts, lightly salted. An excellent source of protein and a perfect everyday snack. Great value for quality.",
    weight: "500g",
    origin: "Argentina",
    article: "40001",
    nutritionalInfo: {
      calories: 567,
      protein: "26g",
      fat: "49g",
      carbs: "16g"
    }
  },
  {
    id: 8,
    name: "Brazil Nuts",
    category: "Brazil Nuts",
    type: "Wild Amazon",
    price: 17.99,
    image: "https://images.unsplash.com/photo-1669754839348-4fb1df8a0a0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmF6aWwlMjBudXQlMjBvcmdhbmljfGVufDF8fHx8MTc3NDI2MzI0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Large, creamy Brazil nuts, naturally rich in selenium. Just one or two nuts provide your daily selenium requirement. Wild-harvested from the Amazon.",
    weight: "500g",
    origin: "Brazil",
    article: "50011",
    nutritionalInfo: {
      calories: 656,
      protein: "14g",
      fat: "66g",
      carbs: "12g"
    }
  },
  {
    id: 9,
    name: "Macadamia Nuts",
    category: "Macadamia",
    type: "Premium Australia",
    price: 22.99,
    image: "https://images.unsplash.com/photo-1761095596792-2735f03c7418?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNhZGFtaWElMjB3aG9sZXxlbnwxfHx8fDE3NzQyNjMyNDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Premium macadamia nuts with a rich, buttery texture and delicate flavor. The most luxurious of all nuts, perfect for special occasions.",
    weight: "500g",
    origin: "Australia",
    article: "00001",
    nutritionalInfo: {
      calories: 718,
      protein: "8g",
      fat: "76g",
      carbs: "14g"
    }
  }
];

export const categories = [
  "All",
  "Almonds",
  "Walnuts",
  "Cashews",
  "Pistachios",
  "Hazelnuts",
  "Pecans",
  "Peanuts",
  "Brazil Nuts",
  "Macadamia"
];