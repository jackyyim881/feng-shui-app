"use client";

import { PopoverButton } from "@headlessui/react";
import Link from "next/link";

export default function MobileNavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <PopoverButton as={Link} href={href} className="block w-full p-2">
      {children}
    </PopoverButton>
  );
}
