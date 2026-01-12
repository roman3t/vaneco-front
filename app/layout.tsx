import React from "react";
import "./globals.css";
import { MotionRoot } from "@/components/MotionRoot";
import { Header } from "@/components/Header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Header />
        <MotionRoot>{children}</MotionRoot>
      </body>
    </html>
  );
}

