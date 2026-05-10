import { Outlet } from "react-router";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

export default function RootLayout() {
  return (
    <section className="overflow-hidden">
      <ScrollToTop /> {/* ← add this */}
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </section>
  );
}
