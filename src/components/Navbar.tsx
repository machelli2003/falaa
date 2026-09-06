import React, { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Heart, ShoppingBag, Menu, X, MessageCircle } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { useWishlist } from "@/hooks/useWishlist";
import SearchOverlay from "./SearchOverlay";
import { whatsappGeneral } from "@/lib/whatsapp";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/phones", label: "Phones" },
  { to: "/laptops", label: "Laptops" },
  { to: "/gaming", label: "Gaming" },
  { to: "/gadgets", label: "Gadgets" },
  { to: "/deals", label: "Hot Deals" },
  { to: "/swap", label: "Swap" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { count } = useCart();
  const { ids } = useWishlist();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="border-b border-white/10 bg-ink text-white"
      >
        <div className="container-page flex h-9 items-center justify-between gap-3 text-[10px] font-medium uppercase tracking-[0.18em] text-white/70">
          <div className="flex items-center gap-4">
            <span>Accra, Ghana</span>
            <span className="hidden sm:inline">Mon–Sat · 9am–8pm</span>
          </div>
          <button
            onClick={() => whatsappGeneral()}
            className="inline-flex items-center gap-1.5 text-white transition hover:text-falaa"
          >
            <MessageCircle size={12} /> WhatsApp Support
          </button>
        </div>
      </motion.div>

      <motion.header
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={`sticky top-0 z-30 transition-all duration-300 ${
          scrolled ? "border-b border-line/60 bg-paper/95 shadow-sm backdrop-blur" : "bg-paper/90"
        }`}
      >
        <div className="container-page flex h-16 items-center justify-between sm:h-20">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-display text-xl font-bold tracking-tight sm:text-2xl">
              FALAA<span className="text-falaa">.</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `rounded-full px-3.5 py-2 text-sm font-medium transition ${
                    isActive ? "bg-ink text-white" : "text-ink/80 hover:bg-ink/5"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-ink/5"
            >
              <Search size={19} />
            </button>
            <Link
              to="/wishlist"
              aria-label="Wishlist"
              className="relative flex h-10 w-10 items-center justify-center rounded-full hover:bg-ink/5"
            >
              <Heart size={19} />
              {ids.length > 0 && (
                <span className="absolute right-1 top-1 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-falaa px-1 text-[10px] font-bold text-white">
                  {ids.length}
                </span>
              )}
            </Link>
            <Link
              to="/cart"
              aria-label="Cart"
              className="relative flex h-10 w-10 items-center justify-center rounded-full hover:bg-ink/5"
            >
              <ShoppingBag size={19} />
              {count > 0 && (
                <span className="absolute right-1 top-1 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-falaa px-1 text-[10px] font-bold text-white">
                  {count}
                </span>
              )}
            </Link>
            <button
              onClick={() => whatsappGeneral()}
              className="hidden h-10 items-center gap-1.5 rounded-full bg-[#25D366] px-4 text-sm font-semibold text-white transition hover:brightness-95 sm:flex"
            >
              <MessageCircle size={16} /> WhatsApp
            </button>
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-ink/5 lg:hidden"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            <div className="absolute inset-0 bg-ink/60" onClick={() => setMenuOpen(false)} />
            <motion.div
              initial={{ x: 340 }}
              animate={{ x: 0 }}
              exit={{ x: 340 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="absolute right-0 top-0 h-full w-[82%] max-w-sm bg-paper p-5 shadow-premium"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="font-display text-lg font-bold">FALAA<span className="text-falaa">.</span></span>
                <button onClick={() => setMenuOpen(false)} aria-label="Close menu" className="rounded-full p-2 hover:bg-ink/5">
                  <X size={20} />
                </button>
              </div>
              <nav className="flex flex-col gap-1">
                {LINKS.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.to === "/"}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `rounded-xl px-4 py-3.5 text-base font-medium ${
                        isActive ? "bg-ink text-white" : "hover:bg-ink/5"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </nav>
              <button
                onClick={() => whatsappGeneral()}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-3.5 text-sm font-semibold text-white"
              >
                <MessageCircle size={17} /> Chat on WhatsApp
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}
    </>
  );
}
