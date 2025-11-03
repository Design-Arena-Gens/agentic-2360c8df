export default function Footer() {
  return (
    <footer id="about" className="bg-gradient-to-b from-parchment/30 to-parchment/60 py-16 px-6 mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-3xl logo-glow">📖</span>
              <span className="text-xl font-bold text-golden">Библия онлайн</span>
            </div>
            <p className="text-warm-gray leading-relaxed">
              Погрузитесь в чтение Священного Писания в атмосфере света, покоя и благоговения.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-warm-gray hover:text-golden transition-colors">
                  Главная
                </a>
              </li>
              <li>
                <a href="#books" className="text-warm-gray hover:text-golden transition-colors">
                  Книги
                </a>
              </li>
              <li>
                <a href="#verse" className="text-warm-gray hover:text-golden transition-colors">
                  Стих дня
                </a>
              </li>
              <li>
                <a href="#about" className="text-warm-gray hover:text-golden transition-colors">
                  О проекте
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-4">Связаться</h4>
            <p className="text-warm-gray mb-4">
              Есть вопросы или предложения? Мы рады услышать вас.
            </p>
            <a
              href="mailto:info@bible-online.ru"
              className="text-golden hover:text-golden-light transition-colors font-semibold"
            >
              info@bible-online.ru
            </a>
          </div>
        </div>

        <div className="decorative-divider my-8"></div>

        <div className="text-center text-warm-gray text-sm">
          <p>© 2024 Библия онлайн. Свет и покой для души.</p>
          <p className="mt-2">Создано с ❤️ и благоговением</p>
        </div>
      </div>
    </footer>
  )
}
