import type { Metadata } from "next";
import { Outfit, Syne, Space_Mono } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
  weight: ["700", "800"],
});

const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "FIT22 GYM • Gurugram's Premier High-Performance Biometric Arena",
  description:
    "Experience Gurugram's ultimate luxury athletic sanctuary on Golf Course Road. 25,000+ sq. ft. of Olympic-grade Eleiko equipment, AI-driven biometric tracking, 4°C cold plunges, full-spectrum infrared saunas, and NSCA master coaches.",
  keywords: [
    "FIT22 Gym Gurugram",
    "Best Gym in Gurugram",
    "Luxury Gym Golf Course Road",
    "Olympic Weightlifting Gurugram",
    "Cold Plunge Sauna Gurugram",
    "Personal Trainer Sector 54",
    "Biometric Fitness India",
  ],
  authors: [{ name: "FIT22 Human Performance Engineering" }],
  openGraph: {
    title: "FIT22 GYM • Gurugram's Premier High-Performance Biometric Arena",
    description:
      "25,000+ sq. ft. luxury fitness sanctuary on Golf Course Road. Combining Swedish Eleiko equipment, clinical recovery suites, and elite coaching.",
    url: "https://fit22gym.in",
    siteName: "FIT22 GYM INDIA",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FIT22 GYM • Gurugram's Premier High-Performance Biometric Arena",
    description:
      "25,000+ sq. ft. luxury fitness sanctuary on Golf Course Road, Gurugram. Biometric tracking, contrast recovery, and Olympic equipment.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: "FIT22 Gym Gurugram",
  image: "https://fit22gym.in/images/gym-1.jpg",
  url: "https://fit22gym.in",
  telephone: "+919876543210",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Sector 54, Golf Course Road, Near DLF Phase 5 & Cyber City",
    addressLocality: "Gurugram",
    addressRegion: "HR",
    postalCode: "122002",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.4385,
    longitude: 77.1042,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "05:00",
      closes: "23:30",
    },
  ],
  priceRange: "₹₹₹₹",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "1240",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${syne.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[#080808] text-white overflow-x-hidden selection:bg-[#FFED29] selection:text-black">
        <LenisProvider>
          <CustomCursor />
          <Navbar />
          <main className="flex-grow">{children}</main>
        </LenisProvider>
      </body>
    </html>
  );
}
