import Link from "next/link";
import { NAV_ITEMS } from "./nav.config";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";

export default function NavLinks() {
  const pathname = usePathname();
  const [hovered, setHovered] = useState<number | null>(null);

  const activeIndex = NAV_ITEMS.findIndex((item) => item.href === pathname);

  const visibleIndex = hovered ?? activeIndex;

  return (
    <nav className="relative flex gap-2 rounded-full bg-neutral-100 p-1">
      {visibleIndex !== -1 && (
        <motion.span
          layoutId="nav-pill"
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
          }}
          className="absolute top-1 bottom-1 rounded-full bg-black"
          style={{
            left: `calc(${visibleIndex} * 100% / ${NAV_ITEMS.length})`,
            width: `calc(100% / ${NAV_ITEMS.length})`,
          }}
        />
      )}

      {NAV_ITEMS.map((item, idx) => {
        const active = idx === activeIndex;

        return (
          <Link
            key={item.href}
            href={item.href}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
            className="relative z-10 flex-1 px-4 py-2 text-center text-sm font-medium"
          >
            <span
              className={idx === visibleIndex ? "text-white" : "text-black"}
            >
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
