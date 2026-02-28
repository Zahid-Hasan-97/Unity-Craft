"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Plus, Minus } from "lucide-react";
import { products } from "@/lib/data";

export default function ProductDetailsPage() {
    const params = useParams();
    const id = params.id as string;
    const product = products.find((p) => p.id === id);
    const [openAccordion, setOpenAccordion] = useState(true);

    if (!product) return <div className="min-h-screen pt-40 text-center font-serif text-2xl">Product not found.</div>;

    const whatsappUrl = `https://wa.me/8801XXXXXXXXX?text=${encodeURIComponent(`Hello Unity Craft! I want to order:\n*${product.name}*\nPrice: Tk ${product.price}\n\nLet's discuss details.`)}`;

    return (
        <div className="pt-32 pb-32 min-h-screen bg-bg-main animate-in fade-in duration-700">

            {/* Breadcrumb */}
            <div className="bg-bg-off py-8 mb-16 border-b border-border">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-text-muted">
                        <Link href="/" className="hover:text-accent transition-colors">Home</Link>
                        <span>/</span>
                        <Link href="/products" className="hover:text-accent transition-colors">{product.category}</Link>
                        <span>/</span>
                        <span className="text-text-dark font-medium">{product.name}</span>
                    </div>
                </div>
            </div>

            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Image */}
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="w-full">
                        <div className="aspect-[4/5] bg-bg-off border border-border">
                            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                        </div>
                    </motion.div>

                    {/* Details */}
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="flex flex-col pt-4">
                        <h1 className="text-3xl md:text-4xl font-serif text-text-dark mb-4 leading-tight">
                            {product.name}
                        </h1>
                        <p className="text-2xl font-medium text-accent mb-8">
                            Tk {product.price}
                        </p>

                        <p className="text-text-muted font-light leading-relaxed mb-10">
                            {product.description}
                        </p>

                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-solid w-full text-center py-4 mb-10 flex items-center justify-center gap-2"
                        >
                            <MessageCircle size={18} /> Order on WhatsApp
                        </a>

                        {/* Accordion */}
                        <div className="border-t border-border pt-6">
                            <button
                                onClick={() => setOpenAccordion(!openAccordion)}
                                className="flex items-center justify-between w-full text-left uppercase tracking-[0.1em] text-sm font-medium text-text-dark mb-4"
                            >
                                Features & Details
                                {openAccordion ? <Minus size={16} /> : <Plus size={16} />}
                            </button>
                            <AnimatePresence>
                                {openAccordion && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden"
                                    >
                                        <ul className="space-y-3 pb-6">
                                            {product.features.map((feature, i) => (
                                                <li key={i} className="flex items-center text-text-muted font-light text-sm">
                                                    <div className="w-1 h-1 rounded-full bg-text-muted mr-3" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <div className="border-t border-border pt-6">
                            <div className="flex items-center gap-2 text-sm">
                                <span className="uppercase tracking-widest text-text-dark font-medium">Category:</span>
                                <span className="text-text-muted">{product.category}</span>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </div>
        </div>
    );
}
