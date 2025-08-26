import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-emerald-50 to-white py-20 lg:py-32">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            한국 직장생활의 <span className="text-emerald-600">모든 것</span>을
            <br />
            체계적으로 학습하세요
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            외국인을 위한 전문적인 한국 직업교육 플랫폼입니다.
            <br />
            직장문화부터 비즈니스 한국어까지, 성공적인 한국 직장생활을 위한 완벽한 교육과정을 제공합니다.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/resources"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 transition-colors"
            >
              무료 교육 자료
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              to="/membership"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-gray-900 bg-white border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <svg className="mr-2 w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              교육 패키지
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-emerald-600">3,000+</div>
              <div className="text-gray-600 mt-1">수강생</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-600">500+</div>
              <div className="text-gray-600 mt-1">교육 수료자</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-600">150+</div>
              <div className="text-gray-600 mt-1">교육 자료</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}