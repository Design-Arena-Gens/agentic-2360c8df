const books = [
  { title: 'Бытие', testament: 'Ветхий Завет', icon: '🌅' },
  { title: 'Исход', testament: 'Ветхий Завет', icon: '⛰️' },
  { title: 'Псалтирь', testament: 'Ветхий Завет', icon: '🎵' },
  { title: 'Притчи', testament: 'Ветхий Завет', icon: '💎' },
  { title: 'Евангелие от Матфея', testament: 'Новый Завет', icon: '✝️' },
  { title: 'Евангелие от Иоанна', testament: 'Новый Завет', icon: '🕊️' },
  { title: 'Деяния Апостолов', testament: 'Новый Завет', icon: '🔥' },
  { title: 'Послание к Римлянам', testament: 'Новый Завет', icon: '📜' },
  { title: 'Откровение', testament: 'Новый Завет', icon: '👁️' },
]

export default function BooksSection() {
  return (
    <section id="books" className="py-20 px-6 bg-gradient-to-b from-transparent to-parchment/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title text-4xl font-bold text-center text-gray-800 mb-16">
          Книги Священного Писания
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book, index) => (
            <a
              key={index}
              href="#"
              className="book-card rounded-xl p-6 shadow-md hover:cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <span className="text-4xl">{book.icon}</span>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {book.title}
                  </h3>
                  <p className="text-sm text-warm-gray font-semibold">
                    {book.testament}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-golden/20">
                <span className="text-golden text-sm font-semibold">
                  Читать →
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block px-8 py-3 bg-white/80 backdrop-blur text-golden font-semibold rounded-lg border-2 border-golden/30 hover:border-golden hover:bg-white transition-all duration-300 hover:scale-105"
          >
            Посмотреть все книги
          </a>
        </div>
      </div>
    </section>
  )
}
