"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-bg-main animate-in fade-in duration-700">
            <div className="bg-bg-off py-20 mb-16 border-b border-border text-center">
                <h1 className="text-4xl md:text-5xl font-serif text-text-dark">Our Story</h1>
            </div>

            <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="aspect-[21/9] w-full mb-16">
                    <img src="https://i0.wp.com/feelartistic.org/wp-content/uploads/2025/10/image-61.jpg?fit=1600,1066&ssl=1" alt="Workshop" className="w-full h-full object-cover" />
                </motion.div>

                <div className="space-y-10 text-text-muted leading-relaxed text-lg font-light text-center px-4 md:px-12">
                    <p className="text-2xl text-text-dark font-serif leading-snug">
                        "Founded in 2018, Unity Craft was born from a desire to bring the warmth of natural materials into modern living."
                    </p>
                    <p>We believe that wood and leather tell stories. The grain of a walnut chopping board or the texture of a leather journal becomes truly unique when it carries your name, your logo, or a design that means something to you.</p>
                    <p>By combining state-of-the-art laser engraving technology with traditional woodworking techniques, we create bespoke pieces that serve as functional art.</p>
                    <img src="https://img.freepik.com/free-photo/handsome-carpenter-working-with-wood_1157-26093.jpg?semt=ais_user_personalization&w=740&q=80" alt="Details" className="w-full aspect-video object-cover my-12" />
                    <p>Every piece that leaves our studio is handled by artisans who care deeply about the finish, the burn of the laser, and the final oiling of the wood. Thank you for letting us be part of your story.</p>
                </div>
            </div>
        </div>
    );
}
