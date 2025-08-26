import { useState } from 'react'
import BenefitsList from './BenefitsList'
import PaymentForm from './PaymentForm'
import FAQ from './FAQ'

export default function Membership() {
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'yearly'>('monthly')

  const plans = {
    monthly: {
      price: 49000,
      originalPrice: 89000,
      period: '월',
      discount: 45,
    },
    yearly: {
      price: 490000,
      originalPrice: 1068000,
      period: '년',
      discount: 54,
      save: 98000,
    },
  }

  const currentPlan = plans[selectedPlan]

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full mb-6">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              한국 직업교육 패키지
            </h1>
            <p className="text-xl text-gray-600">
              성공적인 한국 직장생활을 위한 완벽한 교육과정<br />
              전문가가 체계적으로 구성한 종합 교육 프로그램을 만나보세요
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Monthly Plan */}
              <button
                onClick={() => setSelectedPlan('monthly')}
                className={`relative p-6 rounded-xl border-2 transition-all ${
                  selectedPlan === 'monthly'
                    ? 'border-amber-500 bg-white shadow-xl'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                {selectedPlan === 'monthly' && (
                  <div className="absolute top-0 right-0 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                    선택됨
                  </div>
                )}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">종합 교육 패키지</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-gray-900">₩{plans.monthly.price.toLocaleString()}</span>
                  <span className="text-gray-500">/월</span>
                </div>
                <p className="text-sm text-gray-500 line-through mb-2">
                  ₩{plans.monthly.originalPrice.toLocaleString()}
                </p>
                <span className="inline-block bg-red-100 text-red-600 text-sm font-semibold px-3 py-1 rounded-full">
                  {plans.monthly.discount}% 할인
                </span>
              </button>

              {/* Yearly Plan */}
              <button
                onClick={() => setSelectedPlan('yearly')}
                className={`relative p-6 rounded-xl border-2 transition-all ${
                  selectedPlan === 'yearly'
                    ? 'border-amber-500 bg-white shadow-xl'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-500 to-green-600 text-white text-xs font-bold px-4 py-2 rounded-full">
                  2개월 무료!
                </div>
                {selectedPlan === 'yearly' && (
                  <div className="absolute top-0 right-0 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                    선택됨
                  </div>
                )}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">연간 교육 패키지</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-gray-900">₩{plans.yearly.price.toLocaleString()}</span>
                  <span className="text-gray-500">/년</span>
                </div>
                <p className="text-sm text-gray-500 line-through mb-2">
                  ₩{plans.yearly.originalPrice.toLocaleString()}
                </p>
                <div className="space-y-1">
                  <span className="block bg-red-100 text-red-600 text-sm font-semibold px-3 py-1 rounded-full">
                    {plans.yearly.discount}% 할인
                  </span>
                  <span className="block text-green-600 text-sm font-medium">
                    ₩{plans.yearly.save?.toLocaleString()} 절약!
                  </span>
                </div>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="flex items-center text-sm text-gray-600">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                언제든지 취소 가능
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                7일 환불 보장
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                안전한 결제
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <BenefitsList />

      {/* Payment Form */}
      <PaymentForm selectedPlan={selectedPlan} price={currentPlan.price} />

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-400 to-amber-500">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            지금 시작하세요!
          </h2>
          <p className="text-xl text-white/90 mb-8">
            5,000명 이상의 회원들이 야트라와 함께 한국 취업에 성공했습니다
          </p>
          <button
            onClick={() => document.getElementById('payment-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center px-8 py-4 bg-white text-amber-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors transform hover:scale-105"
          >
            지금 가입하기
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </section>
    </div>
  )
}