"use client";

import { useState } from "react";
import { products } from "@/lib/data";
import ProductCard from "./ProductCard";

export default function ProductsPage() {
    const [search, setSearch] = useState("");

    const filtered = products.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="max-w-7xl mx-auto px-6 py-20">
            <h1 className="text-4xl font-bold mb-10">Our Products</h1>

            <input
                placeholder="Search..."
                className="px-4 py-2 mb-8 rounded-lg border"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <div className="grid md:grid-cols-3 gap-8">
                {filtered.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}