import { Link } from 'react-router-dom'

export default function PremiumTeaser() {
  return (
    <section className="py-20 bg-gradient-to-r from-amber-50 to-orange-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-amber-400 to-amber-500 p-1">
              <div className="bg-white p-8 md:p-12">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    야트라 프리미엄 멤버십
                  </h2>
                  <p className="text-lg text-gray-600">
                    한국 취업 성공을 위한 프리미엄 콘텐츠와 특별 혜택
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <svg className="w-6 h-6 text-amber-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <div>
                        <h3 className="font-semibold text-gray-900">한국 취업 완벽 가이드 PDF</h3>
                        <p className="text-sm text-gray-600">300페이지 분량의 종합 가이드북</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-6 h-6 text-amber-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <div>
                        <h3 className="font-semibold text-gray-900">면접 한국어 표현집 PDF</h3>
                        <p className="text-sm text-gray-600">실전 면접 질문과 모범 답변</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-6 h-6 text-amber-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <div>
                        <h3 className="font-semibold text-gray-900">채용 부스트 토큰 30개</h3>
                        <p className="text-sm text-gray-600">K-Agency 앱에서 사용 가능</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <svg className="w-6 h-6 text-amber-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <div>
                        <h3 className="font-semibold text-gray-900">1:1 이력서 첨삭 1회</h3>
                        <p className="text-sm text-gray-600">전문가의 맞춤형 피드백</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-6 h-6 text-amber-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <div>
                        <h3 className="font-semibold text-gray-900">우선 매칭 30일</h3>
                        <p className="text-sm text-gray-600">기업과 빠른 연결 기회</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-6 h-6 text-amber-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <div>
                        <h3 className="font-semibold text-gray-900">프리미엄 커뮤니티 접근</h3>
                        <p className="text-sm text-gray-600">성공한 선배들과 네트워킹</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-6 mb-8">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">월 구독료</p>
                      <div className="flex items-baseline">
                        <span className="text-3xl font-bold text-gray-900">₩49,000</span>
                        <span className="ml-2 text-gray-500 line-through">₩89,000</span>
                        <span className="ml-2 text-sm text-red-600 font-semibold">45% 할인</span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        언제든지 취소 가능
                      </div>
                      <div className="flex items-center mt-1">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        7일 환불 보장
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <Link
                    to="/membership"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all transform hover:scale-105"
                  >
                    더 많은 혜택 확인하기
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                  <p className="mt-4 text-sm text-gray-500">
                    신용카드 필요 없음 · 즉시 시작 가능
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}