"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-bg-main animate-in fade-in duration-700">
            <div className="bg-bg-off py-20 mb-16 border-b border-border text-center">
                <h1 className="text-4xl md:text-5xl font-serif text-text-dark">Contact Us</h1>
            </div>

            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="space-y-12">
                        <div>
                            <h3 className="text-2xl font-serif text-text-dark mb-6">Get in Touch</h3>
                            <p className="text-text-muted font-light leading-relaxed mb-8">We'd love to hear from you. Whether you have a question about our products, need a custom design, or want to place a bulk corporate order.</p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <MapPin className="w-5 h-5 text-text-dark mt-1" />
                                <div>
                                    <h4 className="font-medium text-text-dark uppercase tracking-widest text-xs mb-1">Address</h4>
                                    <p className="text-text-muted font-light">Gulshan 1, Dhaka 1212, Bangladesh</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Phone className="w-5 h-5 text-text-dark mt-1" />
                                <div>
                                    <h4 className="font-medium text-text-dark uppercase tracking-widest text-xs mb-1">Phone / WhatsApp</h4>
                                    <p className="text-text-muted font-light">+8801708539299</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Mail className="w-5 h-5 text-text-dark mt-1" />
                                <div>
                                    <h4 className="font-medium text-text-dark uppercase tracking-widest text-xs mb-1">Email</h4>
                                    <p className="text-text-muted font-light">unitycraft018@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                        <form onSubmit={(e) => { e.preventDefault(); alert("Inquiry Sent Successfully!"); }} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <input type="text" required className="w-full bg-bg-off border border-border py-3 px-4 outline-none focus:border-text-dark transition-colors text-sm font-light" placeholder="Name *" />
                                </div>
                                <div>
                                    <input type="email" required className="w-full bg-bg-off border border-border py-3 px-4 outline-none focus:border-text-dark transition-colors text-sm font-light" placeholder="Email *" />
                                </div>
                            </div>
                            <div>
                                <input type="tel" className="w-full bg-bg-off border border-border py-3 px-4 outline-none focus:border-text-dark transition-colors text-sm font-light" placeholder="Phone Number" />
                            </div>
                            <div>
                                <textarea rows={5} required className="w-full bg-bg-off border border-border py-3 px-4 outline-none focus:border-text-dark transition-colors text-sm font-light resize-none" placeholder="Message *"></textarea>
                            </div>
                            <button type="submit" className="btn-solid w-full">
                                Send Message
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </div>
    );
}