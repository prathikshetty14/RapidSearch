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
      if(!input) return setSearch(undefined);

      const response = await fetch(
        `/api/search?q=${input}`
      )
    }

    fetchData();
  }, [input])

  return (
    <div>
      <input
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        type="text"
        className="text-zinc-900"
      />
    </div>
  );
}
