import Link from "next/link";
import React from "react";

export default function Navigation() {
  return (
    <div className="fixed bg-white w-full px-20 py-2">
      <Link href={"/svg_pattern"}>svg pattern</Link>
    </div>
  );
}
