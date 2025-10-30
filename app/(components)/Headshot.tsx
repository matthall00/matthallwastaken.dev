"use client";
import Image from "next/image";
import { useState } from "react";

export default function Headshot() {
  const [loaded, setLoaded] = useState(false);
  return (
    <Image
      src="/photo_sm.png"
      alt="Matt H. headshot."
      width={800}
      height={800}
      loading="lazy"
      decoding="async"
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP4z8DwHwAFWgJv6q9GrwAAAABJRU5ErkJggg=="
      onLoadingComplete={() => setLoaded(true)}
      className={`h-auto w-full object-cover object-[40%_40%] transition-opacity duration-150 ${loaded ? "opacity-100" : "opacity-0"}`}
      sizes="(min-width:1280px) 360px, (min-width:1024px) 320px, (min-width:768px) 260px, (min-width:640px) 240px, 220px"
      style={{ borderRadius: 16 }}
    />
  );
}
