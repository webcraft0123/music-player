"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const pages = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/setting",
    name: "Setting",
  },
  {
    path: "/genre",
    name: "Genre",
  },
];

export default function Menu() {
  const pathname = usePathname();

  return (
    <section className="py-10 backdrop-blur-lg text-white/70 font-semibold">
      <h6 className="uppercase text-sm px-8 pr-20">menu</h6>
      <ul className="py-4 gap-4 grid">
        {pages.map(page => (
          <li key={page.name}>
            <Link
              href={page.path}
              className={clsx(
                "px-8 border-l-4 transition-all box-border pr-20",
                pathname === page.path
                  ? "border-white text-white/100"
                  : "hover:border-white border-transparent hover:text-white/100"
              )}>
              <span className="first-letter:uppercase">{page.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
