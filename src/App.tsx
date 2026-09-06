import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { CartProvider } from "@/hooks/useCart";
import { WishlistProvider } from "@/hooks/useWishlist";
import MainLayout from "@/layouts/MainLayout";
import Home from "@/pages/Home";
import CategoryPage from "@/pages/CategoryPage";
import Deals from "@/pages/Deals";
import Swap from "@/pages/Swap";
import ProductDetail from "@/pages/ProductDetail";
import Wishlist from "@/pages/Wishlist";
import Cart from "@/pages/Cart";
import Checkout from "@/pages/Checkout";
import Admin from "@/pages/Admin";
import NotFound from "@/pages/NotFound";
import { About, Contact, FAQ, Delivery, Returns, Warranty } from "@/pages/InfoPages";

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <CartProvider>
      <WishlistProvider>
        <ScrollToTop />
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/phones" element={<CategoryPage category="Phones" />} />
            <Route path="/laptops" element={<CategoryPage category="Laptops" />} />
            <Route path="/gaming" element={<CategoryPage category="Gaming" />} />
            <Route path="/gadgets" element={<CategoryPage category="Gadgets" />} />
            <Route path="/deals" element={<Deals />} />
            <Route path="/swap" element={<Swap />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/returns" element={<Returns />} />
            <Route path="/warranty" element={<Warranty />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </WishlistProvider>
    </CartProvider>
  );
}
