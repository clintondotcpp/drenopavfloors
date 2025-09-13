import type { Metadata } from "next";
import "./globals.css";
import { ClientLayout } from "@/components/ClientLayout";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  metadataBase: new URL('https://drenopavfloors.ng'),
  title: "Drenopav Floors Nigeria | Premium Resin-Bound Permeable Surfaces | Driveways & Commercial Flooring",
  description: "Nigeria's leading provider of luxury resin-bound permeable surfaces. Transform driveways, patios, and commercial spaces with sustainable, durable flooring. Nationwide service across all 36 states.",
  keywords: "drenopav, permeable flooring, resin bound surfaces, luxury driveways Nigeria, sustainable flooring, flood resistant surfaces, Lagos flooring, Abuja driveways, commercial flooring Nigeria",
  authors: [{ name: "Duruco Concept Limited" }],
  creator: "Duruco Concept Limited",
  publisher: "Duruco Concept Limited",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: 'https://drenopavfloors.ng',
    siteName: 'Drenopav Luxury Floors',
    title: 'Drenopav Floors Nigeria | Premium Permeable Surfaces',
    description: 'Transform your space with luxury resin-bound permeable flooring. Sustainable, durable, and beautiful surfaces for homes and businesses across Nigeria.',
    images: [
      {
        url: '/lovable-uploads/12d9d3d9-76b8-4759-8992-3c78731e826e.png',
        width: 1200,
        height: 630,
        alt: 'Drenopav Premium Permeable Floor Surfaces',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Drenopav Floors Nigeria | Premium Permeable Surfaces',
    description: 'Transform your space with luxury resin-bound permeable flooring. Sustainable, durable, and beautiful surfaces.',
    images: ['/lovable-uploads/12d9d3d9-76b8-4759-8992-3c78731e826e.png'],
  },
  verification: {
    google: 'google-site-verification-code', // Replace with actual verification code
  },
  alternates: {
    canonical: 'https://drenopavfloors.ng',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </head>
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
