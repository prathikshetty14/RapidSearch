"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [input, setInput] = useState<string>("");
  const [search, setSearch] = useState<{
    results: string[];
    duration: number;
  }>();

  useEffect(() => {
    const fetchData = async () => {
      if (!input) return setSearch(undefined);

      const response = await fetch(`/api/search?q=${input}`);
    };

    fetchData();
  }, [input]);

  return (
    <main className="h-screen w-screen grainy">
      <div className="flex flex-col gap-6 items-center pt-36 duration-500 animate-in animate fade-in-5 slide-in-from-bottom-2.5">
        <h1 className="text-5xl tracking-tight font-bold">Rapid Search</h1>
        <p className="text-zinc-600 text-lg max-w-prose text-center">
          A high performance API built with Hono, Next.js, Cloudflare. <br />
          Type a query below and get your results in milliseconds.
        </p>

        <div className="max-w-md w-full">
          

        </div>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          type="text"
          className="text-zinc-900"
        />
      </div>
    </main>
  );
}
