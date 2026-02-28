"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
    return (
        <a
            href="https://wa.me/8801708539299"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 left-6 z-50 bg-[#25D366] text-white p-3 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-full"
        >
            <MessageCircle size={24} />
        </a>
    );
}