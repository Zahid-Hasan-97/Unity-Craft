"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Product } from "@/lib/data";

export default function ProductCard({ product, index }: { product: Product, index: number }) {
    const whatsappUrl = `https://wa.me/8801XXXXXXXXX?text=${encodeURIComponent(`Hi Unity Craft, I'd like to order: *${product.name}* (Tk ${product.price}).`)}`;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group flex flex-col text-center"
        >
            <div className="relative overflow-hidden mb-5 bg-bg-off cursor-pointer image-zoom">
                <Link href={`/products/${product.id}`} className="block w-full h-full">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full aspect-[3/4] object-cover transition-transform duration-700"
                    />
                </Link>

                {/* Quick Action Overlay - Dove Style */}
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-in-out">
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-white text-text-dark flex items-center justify-center py-3 font-medium text-xs tracking-widest uppercase hover:bg-accent hover:text-white transition-colors"
                    >
                        Order via WhatsApp
                    </a>
                </div>
            </div>

            <span className="text-text-muted text-[10px] tracking-[0.2em] uppercase mb-1">{product.category}</span>
            <Link href={`/products/${product.id}`} className="text-lg font-serif text-text-dark hover:text-accent transition-colors mb-2 block">
                {product.name}
            </Link>
            <span className="text-accent font-medium">Tk {product.price}</span>
        </motion.div>
    );
}