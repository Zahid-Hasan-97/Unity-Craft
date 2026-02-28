export interface Product {
    id: string;
    name: string;
    category: string;
    price: number;
    description: string;
    features: string[];
    image: string;
}

export const products: Product[] = [
    {
        id: "1", name: "Premium Walnut Chopping Board", category: "Kitchenware", price: 1500,
        description: "Thick, durable end-grain walnut wood chopping board. Treated with food-safe mineral oil and beeswax. Custom laser-engraved with family names or logos in the corner.",
        features: ["100% Solid Walnut", "Food-safe finish", "Knife-friendly surface", "Custom engraving available"],
        image: "https://img.drz.lazcdn.com/static/bd/p/4d865fe8c10468cbd192609fb3ebbebf.jpg_720x720q80.jpg",
    },
    {
        id: "2", name: "Laser-Cut Wooden Wall Art", category: "Decor", price: 2500,
        description: "Intricate multi-layered mandala design, precision-cut from premium mahogany and birch veneer. Perfect statement piece for your living room or office.",
        features: ["Multi-layer 3D effect", "Premium Mahogany", "Ready to hang", "Available in multiple sizes"],
        image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: "3", name: "Personalized Leather Journal", category: "Custom", price: 850,
        description: "Genuine full-grain leather cover holding 200 pages of vintage kraft paper. Features permanent laser-etched names, quotes, or intricate designs on the cover.",
        features: ["Genuine Leather", "Refillable pages", "Deep laser etching", "Vintage aesthetic"],
        image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: "4", name: "Custom Name Photo Frame", category: "Frames", price: 650,
        description: "Rustic oak wood frame featuring beautiful 3D laser-cut lettering attached to the border. An unforgettable gift for weddings, anniversaries, or newborns.",
        features: ["Solid Oak Wood", "Fits 5x7 or 8x10 photos", "Glass front included", "3D wooden lettering"],
        image: "https://img.freepik.com/free-photo/flowers-leaves-wooden-frame_23-2147655701.jpg?semt=ais_hybrid&w=740&q=80",
    },
    {
        id: "5", name: "Wooden Tissue Box Cover", category: "Decor", price: 550,
        description: "Elevate your living space with this elegant wooden tissue box cover. Features a seamless geometric pattern deeply engraved on all sides.",
        features: ["Fits standard tissue boxes", "Magnetic bottom closure", "Deep laser engraving", "Satin finish"],
        image: "https://images.woodenstreet.de/image/cache/data/international-trade-linkers/laurel-tissue-holder/1-750x650.jpg",
    },
    {
        id: "6", name: "Engraved Coat Hangers (Set of 3)", category: "Custom", price: 900,
        description: "Perfect for weddings, boutiques, or premium wardrobes. Solid wood hangers featuring precision dark-burn laser engraving for names or logos.",
        features: ["Solid Maple Wood", "Swivel hook", "Anti-slip notches", "Permanent burn engraving"],
        image: "https://www.artsylaser.co.uk/wp-content/uploads/2023/07/il_fullxfull.4735758827_sa1b.jpg",
    },
];
