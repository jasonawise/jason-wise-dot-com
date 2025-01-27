import { siteConfig } from "@/app/siteConfig";
import { NavConfig } from "@/app/types/navConfig";
import Link from "next/link";

export default function NavContent({ navCss }) {
  return siteConfig.navPages.map((config: NavConfig) => {
    if (config.showInNav) {
      return (
        <Link className={navCss} key={config.path} href={config.path}>
          {config.name}
        </Link>
      );
    }
  });
}
