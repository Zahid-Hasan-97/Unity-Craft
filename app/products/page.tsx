"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { products } from "@/lib/data";
import ProductCard from "@/components/ProductCard";

export default function ProductsPage() {
    const [activeCat, setActiveCat] = useState("All");
    const categories = ["All", "Kitchenware", "Decor", "Custom", "Frames"];

    const filteredProducts = products.filter((product) => {
        return activeCat === "All" || product.category === activeCat;
    });

    return (
        <div className="pt-32 pb-24 min-h-screen bg-bg-main animate-in fade-in duration-700">

            {/* Page Header */}
            <div className="bg-bg-off py-20 mb-16 border-b border-border text-center">
                <h1 className="text-4xl md:text-5xl font-serif text-text-dark mb-4">Shop</h1>
                <div className="flex items-center justify-center gap-2 text-sm text-text-muted">
                    <Link href="/" className="hover:text-accent transition-colors">Home</Link>
                    <span>/</span>
                    <span>Products</span>
                </div>
            </div>

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

                {/* Minimalist Categories */}
                <div className="flex flex-wrap justify-center gap-8 mb-16">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCat(cat)}
                            className={`text-xs uppercase tracking-[0.15em] font-medium transition-colors pb-1 border-b-2 ${activeCat === cat
                                    ? 'border-text-dark text-text-dark'
                                    : 'border-transparent text-text-muted hover:text-text-dark'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {filteredProducts.length > 0 ? (
                    <motion.div
                        initial="hidden" animate="show"
                        variants={{
                            hidden: { opacity: 0 },
                            show: { opacity: 1, transition: { staggerChildren: 0.1 } }
                        }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12"
                    >
                        {filteredProducts.map((product, index) => (
                            <ProductCard key={product.id} product={product} index={index} />
                        ))}
                    </motion.div>
                ) : (
                    <div className="text-center py-32">
                        <p className="text-text-muted">No products found in this category.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
