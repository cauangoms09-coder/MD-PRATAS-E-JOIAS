import { CartProvider } from "@/context/CartContext";
import { AuthProvider } from "@/context/AuthContext";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Catalog } from "@/components/Catalog";
import { Benefits } from "@/components/Benefits";
import { Delivery } from "@/components/Delivery";
import { Sellers } from "@/components/Sellers";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { AuthDialog } from "@/components/AuthDialog";
import { AccountDialog } from "@/components/AccountDialog";
import AdminPage from "@/pages/AdminPage";
import { SiteContentProvider } from "@/context/SiteContentContext";
import { useSmoothScroll } from "@/lib/motion";

const Store = () => {
  useSmoothScroll();
  return (
    <SiteContentProvider>
    <AuthProvider>
      <CartProvider>
        <div className="min-h-screen bg-[#FAF7F2] text-[#2C221E] antialiased overflow-x-clip" data-testid="app-root">
          <Navbar />
          <Hero />
          <Marquee />
          <Catalog />
          <Benefits />
          <Delivery />
          <Sellers />
          <Testimonials />
          <Footer />
          <CartDrawer />
          <AuthDialog />
          <AccountDialog />
          <Toaster position="top-center" richColors />
        </div>
      </CartProvider>
    </AuthProvider>
    </SiteContentProvider>
  );
};

function App() {
  if (window.location.pathname.startsWith("/admin")) {
    return (
      <>
        <AdminPage />
        <Toaster position="top-right" richColors />
      </>
    );
  }
  return <Store />;
}

export default App;
