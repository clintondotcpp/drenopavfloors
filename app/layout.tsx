import type { Metadata } from "next";
import "./globals.css";
import { ClientLayout } from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: "Drenopav Floors Nigeria | Premium Resin-Bound Permeable Surfaces | Driveways & Commercial Flooring",
  description: "Nigeria's leading provider of luxury resin-bound permeable surfaces. Transform driveways, patios, and commercial spaces with sustainable, durable flooring. Nationwide service across all 36 states.",
  authors: [{ name: "Duruco Concept Limited - Drenopav" }]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
