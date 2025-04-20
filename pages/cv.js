// pages/cv.js
import "@/app/globals.css";
import Link from "next/link";
import Image from "next/image";

export default function CV() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white dark:from-gray-800 dark:to-gray-900 p-6">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8">
        <div className="flex items-center gap-6 mb-6">
          <Image
            src="/images/profile.jpg"
            alt="Foto Profil"
            width={100}
            height={100}
            className="rounded-full border-4 border-blue-500"
          />
          <div>
            <h1 className="text-4xl font-bold text-blue-700 dark:text-blue-400">
              Dzlan
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Junior Web Developer
            </p>
          </div>
        </div>

        <hr className="my-4 border-gray-300 dark:border-gray-700" />

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-300">
            Tentang Saya
          </h2>
          <p className="text-gray-700 dark:text-gray-200 mt-2">
            Saya adalah developer dengan passion di bidang web, membangun
            aplikasi efisien dan responsif.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-300">
            Pengalaman
          </h2>
          <div className="space-y-2 mt-2">
            <div>
              <p className="font-medium">Frontend Developer - PT BCD</p>
              <p className="text-sm text-gray-500">2022 - Sekarang</p>
            </div>
            <div>
              <p className="font-medium">Junior Developer - Startup XYZ</p>
              <p className="text-sm text-gray-500">2020 - 2022</p>
            </div>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-300">
            Pendidikan
          </h2>
          <p className="mt-2">
            S1 Komputer - Universitas ABC (2016–2020)
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-300">
            Kontak
          </h2>
          <p>Email: user@email.com</p>
          <p>
            LinkedIn:{" "}
            <a href="#" className="text-blue-500 hover:underline">
              linkedin.com/
            </a>
          </p>
        </section>
        <br></br>
        <Link href="/">
          <button className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-500 transition">
            ← Kembali ke Halaman Utama
          </button>
        </Link>
      </div>
    </div>
  );
}
