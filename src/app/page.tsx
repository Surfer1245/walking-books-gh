"use client"
import { useState } from "react"

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="relative min-h-screen flex flex-col bg-gradient-to-b from-[#2e1d12] via-[#3a2518] to-[#1c120c] text-[#fdfcf9] font-sans overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60"></div>
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full bg-black/30 backdrop-blur-md border-b border-white/10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <h1 className="text-xl sm:text-2xl font-serif font-bold tracking-wide text-amber-400">
            Walking Books GH
          </h1>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-8 text-sm font-medium text-amber-50">
            <li><a href="#" className="hover:text-amber-400">Home</a></li>
            <li><a href="#books" className="hover:text-amber-400">Shop</a></li>
            <li><a href="#" className="hover:text-amber-400">About</a></li>
            <li><a href="#" className="hover:text-amber-400">Contact</a></li>
          </ul>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col space-y-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="h-0.5 w-6 bg-amber-200"></span>
            <span className="h-0.5 w-6 bg-amber-200"></span>
            <span className="h-0.5 w-6 bg-amber-200"></span>
          </button>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#2e1d12]/95 shadow-lg border-t border-white/10">
            <ul className="flex flex-col px-6 py-4 space-y-4 text-sm font-medium text-amber-50">
              <li><a href="#" className="hover:text-amber-400">Home</a></li>
              <li><a href="#books" className="hover:text-amber-400">Shop</a></li>
              <li><a href="#" className="hover:text-amber-400">About</a></li>
              <li><a href="#" className="hover:text-amber-400">Contact</a></li>
            </ul>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-28">
        <h2 className="mb-4 text-3xl sm:text-5xl font-serif font-bold text-amber-100 leading-tight drop-shadow-lg">
          Unlock Wisdom, One Book at a Time
        </h2>
        <p className="mb-8 max-w-2xl text-base sm:text-lg text-amber-200/90">
          Curated self-help, novels, and inspiring stories for the modern reader.
        </p>
        <a
          href="/shop"
           className="rounded-full bg-amber-500/90 px-8 py-3 text-black font-medium shadow-xl
             hover:bg-amber-400 hover:shadow-amber-500/40 hover:shadow-lg
             transform transition duration-300 hover:scale-105"
>
  Browse Collection
</a>

      </section>

      {/* Featured Books */}
      <section id="books" className="mx-auto max-w-7xl px-6 py-16">
        <h3 className="mb-10 text-2xl sm:text-3xl font-serif font-bold text-amber-200 text-center">
          Featured Reads
        </h3>
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {[
            { title: "The Silent Reader", author: "Ama Aidoo", img: "/book1.jpg" },
            { title: "Walking the Pages", author: "Kwame Mensah", img: "/book2.jpg" },
            { title: "Stories from Accra", author: "Efua Osei", img: "/book3.jpg" },
            { title: "Beyond the Horizon", author: "Kofi Boateng", img: "/book4.jpg" },
          ].map((book, i) => (
            <div
              key={i}
              className="group rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              <img
                src={book.img}
                alt={book.title}
                className="h-56 w-full object-cover group-hover:scale-105 transition"
              />
              <div className="p-5">
                <h4 className="font-serif text-lg font-semibold text-amber-100">
                  {book.title}
                </h4>
                <p className="text-sm text-amber-200/80">{book.author}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-white/10 bg-black/30 backdrop-blur-md py-6 text-center text-sm text-amber-200">
        © {new Date().getFullYear()} Walking Books GH · Where Stories Live
      </footer>
    </main>
  )
}
