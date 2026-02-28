"use client";

import { motion } from "framer-motion";

export default function SectionTitle({ title, subtitle }: { title: string, subtitle: string }) {
    return (
        <div className="flex flex-col items-center text-center mb-16">
            <motion.span
                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="text-accent tracking-[0.2em] uppercase text-xs mb-3 font-medium"
            >
                {subtitle}
            </motion.span>
            <motion.h2
                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                className="text-3xl md:text-5xl font-serif text-text-dark"
            >
                {title}
            </motion.h2>
            <motion.div
                initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }}
                className="h-[1px] w-16 bg-accent mt-6"
            />
        </div>
    );
}
