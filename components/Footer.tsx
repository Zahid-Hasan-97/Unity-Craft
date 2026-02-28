import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-white pt-20 pb-8 border-t border-border mt-auto">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 text-center md:text-left">

                <div className="md:col-span-1">
                    <div className="flex justify-center lg:w-full mb-6">
                        <Link href="/" className="flex items-center gap-3 text-2xl md:text-3xl font-serif text-[var(--text-dark)] tracking-wider hover:text-[var(--accent)] transition-colors">
                            <img
                                src="/images/Unity_Craft.png"
                                alt="Unity Craft Logo"
                                className="w-8 h-8 md:w-16 md:h-16 object-contain"
                            />
                            UNITY CRAFT
                        </Link>
                    </div>
                    <p className="text-text-muted text-sm font-light leading-relaxed">Artisanal woodcrafts and precise laser engraving. Turning raw materials into timeless art.</p>
                </div>

                <div>
                    <h4 className="font-medium text-text-dark mb-6 text-xs tracking-widest uppercase">Information</h4>
                    <ul className="space-y-4 text-text-muted text-sm font-light">
                        <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
                        <li><Link href="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
                        <li><Link href="#" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-medium text-text-dark mb-6 text-xs tracking-widest uppercase">Categories</h4>
                    <ul className="space-y-4 text-text-muted text-sm font-light">
                        <li><Link href="/products" className="hover:text-accent transition-colors">Home Decor</Link></li>
                        <li><Link href="/products" className="hover:text-accent transition-colors">Kitchenware</Link></li>
                        <li><Link href="/products" className="hover:text-accent transition-colors">Personalized Gifts</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-medium text-text-dark mb-6 text-xs tracking-widest uppercase">Newsletter</h4>
                    <p className="text-text-muted text-sm font-light mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
                    <div className="flex border-b border-border pb-2">
                        <input type="email" placeholder="Enter your email address" className="w-full outline-none text-sm font-light bg-transparent" />
                        <button className="text-[10px] uppercase tracking-widest font-medium text-text-dark hover:text-accent">Subscribe</button>
                    </div>
                </div>
            </div>

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-text-muted text-xs font-light tracking-wide">
                <span>© {new Date().getFullYear()} UNITY CRAFT. ALL RIGHTS RESERVED.</span>
                <div className="flex gap-4">
                    <a href="https://www.facebook.com/unitycraft2018" className="hover:text-text-dark transition-colors">FACEBOOK</a>
                    <a href="https://www.instagram.com/unitycraft018?fbclid=IwY2xjawQP_45leHRuA2FlbQIxMABicmlkETFLUU1XOE5uWWVoNEZ0Zko1c3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHoxHglggdhSSWAmQU_hUbBVqWGz8NEFPYBhttLzY30TRbVyIrMwTH10nK3hc_aem_hODFu4VyoHOh71ny_CbfYA" className="hover:text-text-dark transition-colors">INSTAGRAM</a>
                </div>
            </div>
        </footer>
    );
}