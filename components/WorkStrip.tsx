"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import React, { useEffect, useMemo, useState } from "react";
import type { GalleryItem } from "@/app/types/gallery";

export function WorkStrip() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    async function load() {
      try {
        const API_GALLERY = process.env.NEXT_PUBLIC_API_GALLERY;

        if (!API_GALLERY) {
          throw new Error("NEXT_PUBLIC_API_GALLERY is not defined");
        }

        const res = await fetch(API_GALLERY, {
          cache: "no-store",
        });

        if (!res.ok) throw new Error("Failed to fetch gallery");

        const data: GalleryItem[] = await res.json();
        setItems(data);
      } catch (err) {
        console.error("Gallery fetch error", err);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  const loopItems = useMemo(() => {
    if (!items.length) return [];
    return [...items, ...items];
  }, [items]);

  if (loading) return null;

  return (
    <section className="fixed left-0 right-0 bottom-0 z-40 px-4 pb-4 pt-3">
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-white/95 to-white/0" />

      <div className="relative overflow-hidden">
        <div
          className="worktrack flex w-max gap-3 will-change-transform"
          style={{
            animationPlayState: paused ? "paused" : "running",
          }}
        >
          {loopItems.map((item, idx) => (
            <Link
              key={`${item.id}-${idx}`}
              href={`/gallery/${item.id}`}
              className="block"
            >
              <motion.article
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.98 }}
                className="relative h-45 w-70 shrink-0 overflow-hidden rounded-[18px] border border-black/10"
                style={{
                  backgroundImage: `url(${item.url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/20 to-transparent" />

                <div className="relative flex h-full flex-col justify-end p-3 text-white">
                  <div className="text-sm font-semibold">
                    {item.title || "Proyecto"}
                  </div>
                  <div className="text-xs opacity-80 line-clamp-2">
                    {item.description}
                  </div>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
