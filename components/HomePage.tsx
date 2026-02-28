"use client";

import { useState } from "react";
import Navbar from "./Navbar";
import ProductsPage from "./ProductsPage";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";  

export default function HomePage() {
    const [page, setPage] = useState("home");

    return (
        <>
            <Navbar setPage={setPage} />

            {page === "home" && (
                <section className="h-screen flex items-center justify-center text-center">
                    <div>
                        <h1 className="text-5xl font-bold mb-6">
                            Handcrafted Wooden Creations
                        </h1>
                        <p className="mb-6">
                            Premium wood craft & laser engraving for your special moments.
                        </p>
                        <button
                            onClick={() => setPage("products")}
                            className="bg-brown-600 px-6 py-3 rounded-lg"
                        >
                            Explore Products
                        </button>
                    </div>
                </section>
            )}

            {page === "products" && <ProductsPage />}
            {page === "about" && <AboutPage />}
            {page === "contact" && <ContactPage />}

            <Footer />
            <WhatsAppButton />
        </>
    );
}