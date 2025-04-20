"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800 transition-all">
      <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-gray-100">
        <h1 className="text-2xl font-bold text-blue-700">Dzlan</h1>
        <div className="flex items-center gap-6">
          <Link href="/cv" className="hover:underline text-blue-600">
            CV
          </Link>
          <Link href="/portfolio" className="hover:underline text-blue-600">
            Portfolio
          </Link>
        </div>
      </nav>

      <main className="text-center mt-32">
        <h2 className="text-4xl font-semibold mb-4">Selamat Datang di Personal Landing Page</h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          Jelajahi informasi tentang saya di halaman CV, atau lihat karya saya di halaman Portfolio.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Link href="/cv" className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-500">
            Lihat CV
          </Link>
          <Link href="/portfolio" className="border border-blue-600 text-blue-600 px-6 py-2 rounded-xl hover:bg-blue-100">
            Lihat Portfolio
          </Link>
        </div>
      </main>
    </div>
  );
}
