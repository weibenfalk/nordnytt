"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function NotFound() {
  const r = useRouter();
  return (
    <main>
      <p className="mb-10">Kunde inte hitta sidan. <a className="cursor-pointer underline" onClick={() => r.back()}>Gå tillbaka</a></p>
      <Image src="/404.webp" className="scale-150 origin-top" alt="Not found bild" />
    </main>
  );
};