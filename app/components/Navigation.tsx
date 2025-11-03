interface NavigationProps {
  isScrolled: boolean
}

export default function Navigation({ isScrolled }: NavigationProps) {
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'navbar-scrolled' : 'navbar-glass'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <span className="text-4xl logo-glow">📖</span>
            <span className="text-2xl font-bold text-golden tracking-wide">
              Библия онлайн
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="nav-link text-warm-gray hover:text-golden font-semibold transition-colors"
            >
              Главная
            </a>
            <a
              href="#books"
              className="nav-link text-warm-gray hover:text-golden font-semibold transition-colors"
            >
              Книги
            </a>
            <a
              href="#verse"
              className="nav-link text-warm-gray hover:text-golden font-semibold transition-colors"
            >
              Стих дня
            </a>
            <a
              href="#about"
              className="nav-link text-warm-gray hover:text-golden font-semibold transition-colors"
            >
              О проекте
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-golden text-2xl">
            ☰
          </button>
        </div>
      </div>
    </nav>
  )
}
