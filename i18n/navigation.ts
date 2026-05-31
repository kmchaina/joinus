import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

// Locale-aware navigation APIs. Use these instead of next/link and
// next/navigation throughout the app so links respect the active locale.
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
