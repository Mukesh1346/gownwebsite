import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import WhatsAppWidget from "./Components/WhatsAppWidget/WhatsAppWidget";
import "./globals.css";
import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Bootstrap CSS */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <WhatsAppWidget />
        {children}
        <Footer />

        {/* ✅ Bootstrap JS Bundle with Next.js Script */}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI"
          crossOrigin="anonymous"
          strategy="afterInteractive" 
        />
      </body>
    </html>
  );
}
