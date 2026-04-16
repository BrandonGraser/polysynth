import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Polysynth — The First Multi-Material Resin Printer",
  description:
    "Polysynth 1 introduces a new category of 3D printing—combining multiple materials in a single print with a proprietary vat cleaning system.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
