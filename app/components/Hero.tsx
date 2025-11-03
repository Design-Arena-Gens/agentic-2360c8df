export default function Hero() {
  return (
    <section className="hero-section pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <span className="inline-block text-golden text-6xl mb-4 logo-glow">✨</span>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
          Свет и <span className="text-golden">покой</span>
        </h1>

        <p className="text-xl md:text-2xl text-warm-gray mb-8 reading-text">
          Откройте Священное Писание в атмосфере тишины и благоговения
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <a
            href="#books"
            className="px-8 py-4 bg-gradient-to-r from-golden to-golden-light text-white font-semibold rounded-lg shadow-warm hover:shadow-warm-lg transition-all duration-300 hover:scale-105"
          >
            Начать чтение
          </a>
          <a
            href="#verse"
            className="px-8 py-4 bg-white/80 backdrop-blur text-golden font-semibold rounded-lg border-2 border-golden/30 hover:border-golden hover:bg-white transition-all duration-300"
          >
            Стих дня
          </a>
        </div>

        <div className="decorative-divider mt-16"></div>
      </div>
    </section>
  )
}
