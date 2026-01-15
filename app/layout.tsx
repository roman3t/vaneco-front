import React from "react";
import "./globals.css";
import { MotionRoot } from "@/components/MotionRoot";

import Navbar from "@/components/layout/Navbar/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <MotionRoot>{children}</MotionRoot>
      </body>
    </html>
  );
}
