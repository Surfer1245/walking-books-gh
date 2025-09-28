export default function Shop() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#2e1d12] via-[#3a2518] to-[#1c120c] text-amber-50">
      {/* Header */}
      <section className="px-6 py-16 text-center">
        <h1 className="text-4xl font-serif font-bold text-amber-200">Our Collection</h1>
        <p className="mt-4 text-amber-100/80 max-w-xl mx-auto">
          Explore our wide range of self-help, novels, and inspirational stories handpicked for you.
        </p>
      </section>

      {/* Book Grid */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {[
            { title: "The Silent Reader", author: "Ama Aidoo", img: "/book1.jpg" },
            { title: "Walking the Pages", author: "Kwame Mensah", img: "/book2.jpg" },
            { title: "Stories from Accra", author: "Efua Osei", img: "/book3.jpg" },
            { title: "Beyond the Horizon", author: "Kofi Boateng", img: "/book4.jpg" },
            { title: "Finding Yourself", author: "Linda Owusu", img: "/book5.jpg" },
            { title: "Shadows of Kumasi", author: "Yaw Adjei", img: "/book6.jpg" },
          ].map((book, i) => (
            <div
              key={i}
              className="group rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              <img
                src={book.img}
                alt={book.title}
                className="h-60 w-full object-cover group-hover:scale-105 transition"
              />
              <div className="p-5">
                <h4 className="font-serif text-lg font-semibold text-amber-100">{book.title}</h4>
                <p className="text-sm text-amber-200/80">{book.author}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
