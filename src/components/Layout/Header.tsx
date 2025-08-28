import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

export default function Header() {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isActive = (path: string) => location.pathname === path

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="container-custom">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">W</span>
            </div>
            <span className="font-bold text-xl text-gray-900">웰킷 에듀케이션</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-medium transition-colors ${
                isActive('/') ? 'text-primary-600' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              홈
            </Link>
            <Link
              to="/resources"
              className={`font-medium transition-colors ${
                isActive('/resources') ? 'text-primary-600' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              리소스
            </Link>
            <Link
              to="/membership"
              className={`inline-flex items-center px-4 py-2 rounded-lg font-medium transition-all ${
                isActive('/membership')
                  ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white'
                  : 'bg-gradient-to-r from-emerald-50 to-emerald-100 text-emerald-700 hover:from-emerald-100 hover:to-emerald-200'
              }`}
            >
              <span>교육 패키지</span>
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={`font-medium ${
                  isActive('/') ? 'text-primary-600' : 'text-gray-600'
                }`}
              >
                홈
              </Link>
              <Link
                to="/resources"
                onClick={() => setIsMenuOpen(false)}
                className={`font-medium ${
                  isActive('/resources') ? 'text-primary-600' : 'text-gray-600'
                }`}
              >
                리소스
              </Link>
              <Link
                to="/membership"
                onClick={() => setIsMenuOpen(false)}
                className={`font-medium ${
                  isActive('/membership') ? 'text-emerald-600' : 'text-gray-600'
                }`}
              >
                교육 패키지 📚
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}