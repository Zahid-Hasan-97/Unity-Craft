"use client";

import Link from "next/link";
// Notice we removed setPage and the other pages from here

export default function HomePage() {
    return (
        <section className="h-screen flex items-center justify-center text-center">
            <div>
                <h1 className="text-5xl font-bold mb-6">
                    Handcrafted Wooden Creations
                </h1>
                <p className="mb-6">
                    Premium wood craft & laser engraving for your special moments.
                </p>
                <Link
                    href="/products"
                    className="bg-orange-800 text-white px-6 py-3 rounded-lg hover:bg-orange-900 transition"
                >
                    Explore Products
                </Link>
            </div>
        </section>
    );
}