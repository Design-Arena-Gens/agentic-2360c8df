export default function VerseOfDay() {
  return (
    <section id="verse" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title text-4xl font-bold text-center text-gray-800 mb-16">
          Стих дня
        </h2>

        <div className="verse-card rounded-2xl p-12 shadow-warm">
          <div className="relative">
            <span className="quote-mark absolute -top-8 -left-4">"</span>

            <p className="reading-text text-2xl text-gray-700 mb-6 relative z-10">
              Господь — пастырь мой; я ни в чем не буду нуждаться:
              Он покоит меня на злачных пажитях и водит меня к водам тихим,
              подкрепляет душу мою, направляет меня на стези правды ради имени Своего.
            </p>

            <span className="quote-mark absolute -bottom-8 right-0 rotate-180">"</span>
          </div>

          <div className="text-right mt-8">
            <p className="text-golden font-bold text-lg">
              Псалом 22:1-3
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-golden/20 flex items-center justify-center gap-4">
            <button className="px-6 py-2 text-golden hover:text-golden-light transition-colors font-semibold">
              ← Предыдущий
            </button>
            <span className="text-warm-gray">•</span>
            <button className="px-6 py-2 text-golden hover:text-golden-light transition-colors font-semibold">
              Следующий →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
