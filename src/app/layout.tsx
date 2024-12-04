"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import "../styles/index.css";
import "../styles/prism-vsc-dark-plus.css";
import ToasterContext from "./api/contex/ToasetContex";
import { useEffect, useState } from "react";
import PreLoader from "@/components/Common/PreLoader";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timeout); // Cleanup timeout on unmount
  }, []);

  return (
    <html suppressHydrationWarning={true} className="!scroll-smooth" lang="en">
      <head>
        {/* Favicon and Icons */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
        <link rel="apple-touch-icon" sizes="57x57" href="/images/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/images/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/images/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/images/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/images/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/images/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/images/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/images/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-icon-180x180.png" />
        <link rel="icon" type="images/png" sizes="192x192" href="/images/android-icon-192x192.png" />
        <link rel="icon" type="images/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="images/png" sizes="96x96" href="/images/favicon-96x96.png" />
        <link rel="icon" type="images/png" sizes="16x16" href="/images/favicon-16x16.png" />
        <link rel="manifest" href="/images/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/images/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />

        {/* SEO Meta Tags */}
        <title>UPAM - Leading Software Development Agency in Bhubaneswar, India</title>
        <meta
          name="description"
          content="UPAM is a top-rated software development agency in Bhubaneswar, India, offering cutting-edge solutions with a team of highly skilled professionals. Partner with us for top-quality and timely deliveries."
        />
        <meta name="keywords" content="software development, agency, Bhubaneswar, India, top talent, timely delivery, web development, app development, IT solutions" />
        <meta name="author" content="UPAM" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="UPAM - Leading Software Development Agency" />
        <meta
          property="og:description"
          content="Partner with UPAM, Bhubaneswar's leading software development agency, for top-notch IT solutions delivered by skilled professionals."
        />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:url" content="https://upam.in" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="UPAM - Leading Software Development Agency in India" />
        <meta
          name="twitter:description"
          content="Discover the best software development services in Bhubaneswar, India, with UPAM. Top talent, cutting-edge solutions, and timely delivery guaranteed."
        />
        <meta name="twitter:image" content="/images/twitter-card-image.jpg" />
        <meta name="twitter:site" content="@UPAM_Tech" />

        {/* Robots */}
        <meta name="robots" content="index, follow" />
      </head>

      <body>
        {loading ? (
          <PreLoader />
        ) : (
          <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
            <ToasterContext />
            <Header />
            {children}
            <Footer />
            <ScrollToTop />
          </ThemeProvider>
        )}
      </body>
    </html>
  );
}
