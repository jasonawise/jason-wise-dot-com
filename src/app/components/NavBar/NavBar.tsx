import { siteConfig } from "@/app/siteConfig";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="p-2 flex justify-end">
      {siteConfig.navPages.map((config) => {
        return (
          <Link
            className="mr-4 cursor-pointer hover:font-bold hover:border-l-2 hover:pl-2"
            key={config.path}
            href={config.path}
          >
            {config.name}
          </Link>
        );
      })}
    </nav>
  );
}
