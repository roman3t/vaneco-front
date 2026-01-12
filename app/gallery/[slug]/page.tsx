"use client";

import { WORK } from "@/components/data";
import { motion, AnimatePresence } from "framer-motion";
import { notFound } from "next/navigation";
import React, { useMemo, useState } from "react";

export default function WorkDetailPage({ params }: { params: { slug: string } }) {
  const item = useMemo(() => WORK.find((w) => w.slug === params.slug), [params.slug]);
  const [open, setOpen] = useState(false);

  if (!item) return notFound();

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ minHeight: "100vh", paddingTop: 90 }}
    >
      <section style={{ padding: "0 18px" }}>
        <div style={{ maxWidth: 760, margin: "70px auto 18px", textAlign: "center" }}>
          <h1 style={{ fontSize: 56, letterSpacing: -1, margin: 0 }}>{item.title}</h1>
          <p style={{ opacity: 0.7, maxWidth: 520, margin: "12px auto 0" }}>
            {item.subtitle}. We handle everything from marketing strategies to brand activations.
          </p>
        </div>

        <motion.section
          layoutId={`card-${item.slug}`}
          style={{
            maxWidth: 1200,
            height: "56vh",
            margin: "0 auto",
            borderRadius: 22,
            border: "1px solid rgba(0,0,0,0.10)",
            background: item.color,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <button
            onClick={() => setOpen((v) => !v)}
            style={{
              position: "absolute",
              left: "50%",
              bottom: 14,
              transform: "translateX(-50%)",
              padding: "10px 14px",
              borderRadius: 999,
              border: "1px solid rgba(0,0,0,0.12)",
              background: "rgba(255,255,255,0.8)",
              backdropFilter: "blur(10px)",
              fontSize: 13,
            }}
          >
            Information +
          </button>
        </motion.section>

        <AnimatePresence>
          {open && (
            <motion.section
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              style={{
                maxWidth: 900,
                margin: "20px auto 80px",
                overflow: "hidden",
              }}
            >
              <div style={{ padding: "18px 10px", opacity: 0.8, lineHeight: 1.6 }}>
                Aquí va tu contenido largo: brief, contexto, resultados, press, etc.
                Puedes convertir esto en bloques (Featured in, roles, deliverables) como en el ejemplo.
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </section>
    </motion.main>
  );
}
