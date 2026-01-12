import { SITE } from "@/app/content/site";
import Link from "next/link";
import { LinkMenu } from "./LinkMenu";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between py-4 px-4">
        <LinkMenu label={SITE.name} url="/" menu />

        <nav style={{ display: "flex", gap: 10, alignItems: "center" }}>
          {SITE.nav.map((item, index) => (
            <LinkMenu
              url={item.href}
              label={item.label}
              primary={item.primary}
              key={index}
            />
          ))}
        </nav>
      </div>
    </header>
  );
}
