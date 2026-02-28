"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { products } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import SectionTitle from "@/components/SectionTitle";

export default function Home() {
  return (
    <div className="w-full animate-in fade-in duration-700">

      {/* Dove-Style Full Screen Hero */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-bg-off">
        <div className="absolute inset-0 z-0">
          <img
            src="https://dove.themeftc.com/wp-content/uploads/revslider/slidehome1/slide2.jpg"
            className="w-full h-full object-cover"
            alt="Wood Workshop"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-3xl mx-auto mt-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white tracking-[0.3em] uppercase text-xs font-medium mb-4 block"
          >
            Handcrafted Perfection
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-[6rem] font-serif text-white mb-8"
          >
            Artisanal Wood <br />& Design
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link href="/products" className="bg-white text-text-dark hover:bg-text-dark hover:text-white px-10 py-4 uppercase tracking-[2px] text-xs font-medium transition-all duration-300 inline-block">
              Shop The Collection
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Category Banners */}
      <section className="py-24 bg-bg-main">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Home Decor",
                img: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=1200"
              },
              { title: "Kitchenware", img: "https://www.globalkitchenjapan.com/cdn/shop/files/collections_banner_1800_53ac9e82-d34a-44c1-a37c-569c3dd052c9_1600x.jpg?v=1643332906" },
              { title: "Custom Gifts", img: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600" }
            ].map((cat, i) => (
              <Link href="/products" key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                  className="group relative h-[400px] overflow-hidden cursor-pointer image-zoom"
                >
                  <img src={cat.img} alt={cat.title} className="w-full h-full object-cover transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/30" />
                  <div className="absolute bottom-8 left-0 right-0 text-center">
                    <span className="bg-white text-text-dark px-8 py-3 uppercase tracking-widest text-xs font-medium inline-block hover:bg-accent hover:text-white transition-colors">
                      {cat.title}
                    </span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="py-24 bg-bg-main">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle="Bespoke Studio" title="Trending Items" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {products.slice(0, 4).map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/products" className="btn-outline inline-block">
              Discover More
            </Link>
          </div>
        </div>
      </section>

      {/* Split Banner */}
      <section className="bg-bg-off border-t border-b border-border">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 p-16 lg:p-24 flex flex-col justify-center">
            <span className="text-accent tracking-[0.2em] uppercase text-xs mb-4 font-medium">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-serif text-text-dark mb-6 leading-tight">Craftsmanship <br />Without Compromise</h2>
            <p className="text-text-muted font-light leading-relaxed mb-8">
              We source the finest sustainable woods and premium leathers, combining modern laser precision with traditional woodworking to create pieces that last generations.
            </p>
            <div>
              <Link href="/about" className="btn-solid inline-block">
                Read Our Story
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-1/2 h-[400px] lg:h-auto image-zoom overflow-hidden">
            <img src="https://dove.themeftc.com/wp-content/uploads/2018/10/img-server.jpg" alt="Craftsmanship" className="w-full h-full object-cover transition-transform duration-1000" />
          </div>
        </div>
      </section>
    </div>
  );
}