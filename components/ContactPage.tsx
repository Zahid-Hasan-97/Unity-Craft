"use client";

import { useState } from "react";

export default function ContactPage() {
    const [name, setName] = useState("");

    return (
        <div className="max-w-3xl mx-auto px-6 py-20">
            <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

            <input
                placeholder="Your Name"
                className="w-full px-4 py-3 border rounded-lg mb-4"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <textarea
                placeholder="Message"
                className="w-full px-4 py-3 border rounded-lg mb-4"
            />

            <button className="bg-black text-white px-6 py-3 rounded-lg">
                Send Message
            </button>
        </div>
    );
}