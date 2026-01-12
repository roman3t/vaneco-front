import Link from "next/link";

export function LinkMenu({
  url,
  label,
  primary,
  menu,
}: {
  url: string;
  label: string;
  primary?: boolean;
  menu?: boolean;
}) {
  return (
    <Link
      href={url}
      className={`px-4 py-2 rounded-xs ${
        primary
          ? "bg-black text-white"
          : menu
          ? "font-semibold tracking-wider "
          : ""
      }`}
    >
      {label}
    </Link>
  );
}
