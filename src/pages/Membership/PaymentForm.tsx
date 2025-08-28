import { useState } from 'react'
import TossPaymentWidget from '../../components/Payment/TossPaymentWidget'
import TossPaymentTest from '../../components/Payment/TossPaymentTest'
import MockPaymentWidget from '../../components/Payment/MockPaymentWidget'

interface PaymentFormProps {
  selectedPlan: 'package1'
  price: number
}

export default function PaymentForm({ selectedPlan, price }: PaymentFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    agreeTerms: false,
    agreePrivacy: false,
    agreeMarketing: false,
  })
  const [showPaymentWidget, setShowPaymentWidget] = useState(false)
  const [showMockPayment, setShowMockPayment] = useState(true)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (isFormValid) {
      setShowPaymentWidget(true)
    }
  }

  const handlePaymentSuccess = () => {
    alert('결제가 성공적으로 완료되었습니다!')
    // 여기에 결제 성공 후 처리 로직 추가
  }

  const handlePaymentError = (error: Error) => {
    alert(`결제 중 오류가 발생했습니다: ${error.message}`)
    setShowPaymentWidget(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const isFormValid = formData.name && formData.email && formData.phone && 
                     formData.agreeTerms && formData.agreePrivacy

  return (
    <section id="payment-form" className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto">
          {!showPaymentWidget ? (
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                교육 패키지 신청
              </h2>

            {/* Selected Plan Summary */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-gray-900">
                    교육 패키지1
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    웰킷 에듀케이션의 모든 교육 과정 (1회 구매)
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-gray-900">
                    ₩{price.toLocaleString()}
                  </p>
                  <p className="text-sm text-red-500">
                    45% 할인 적용
                  </p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  이름 *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="홍길동"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  이메일 *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  전화번호 *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="010-1234-5678"
                />
              </div>


              {/* Agreement Checkboxes */}
              <div className="space-y-3">
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                    className="mt-1 mr-3"
                  />
                  <span className="text-sm text-gray-600">
                    <span className="text-red-500">*</span> 이용약관에 동의합니다
                    <a href="#" className="text-primary-600 ml-1 hover:underline">보기</a>
                  </span>
                </label>
                
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="agreePrivacy"
                    checked={formData.agreePrivacy}
                    onChange={handleChange}
                    className="mt-1 mr-3"
                  />
                  <span className="text-sm text-gray-600">
                    <span className="text-red-500">*</span> 개인정보처리방침에 동의합니다
                    <a href="#" className="text-primary-600 ml-1 hover:underline">보기</a>
                  </span>
                </label>
                
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="agreeMarketing"
                    checked={formData.agreeMarketing}
                    onChange={handleChange}
                    className="mt-1 mr-3"
                  />
                  <span className="text-sm text-gray-600">
                    (선택) 마케팅 정보 수신에 동의합니다
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!isFormValid}
                className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all ${
                  isFormValid
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 transform hover:scale-[1.02]'
                    : 'bg-gray-400 cursor-not-allowed'
                }`}
              >
                다음 단계로 - ₩{price.toLocaleString()}
              </button>

            </form>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="mb-6">
              <button
                onClick={() => setShowPaymentWidget(false)}
                className="flex items-center text-gray-600 hover:text-gray-900 mb-4"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                이전 단계로
              </button>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                결제 정보 확인
              </h2>
              <div className="text-sm text-gray-600 space-y-1">
                <p>고객명: {formData.name}</p>
                <p>이메일: {formData.email}</p>
                <p>전화번호: {formData.phone}</p>
              </div>
            </div>

            {/* Selected Plan Summary */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-gray-900">
                    교육 패키지1
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    웰킷 에듀케이션의 모든 교육 과정 (1회 구매)
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-gray-900">
                    ₩{price.toLocaleString()}
                  </p>
                  <p className="text-sm text-red-500">
                    45% 할인 적용
                  </p>
                </div>
              </div>
            </div>

            {/* 개발 환경에서는 Mock 결제 위젯 사용 */}
            {import.meta.env.DEV ? (
              <>
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">개발 모드 선택</h3>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setShowMockPayment(true)}
                        className={`px-3 py-1 rounded text-sm ${
                          showMockPayment 
                            ? 'bg-green-500 text-white' 
                            : 'bg-gray-200 text-gray-700'
                        }`}
                      >
                        목업 결제
                      </button>
                      <button
                        onClick={() => setShowMockPayment(false)}
                        className={`px-3 py-1 rounded text-sm ${
                          !showMockPayment 
                            ? 'bg-blue-500 text-white' 
                            : 'bg-gray-200 text-gray-700'
                        }`}
                      >
                        실제 SDK 테스트
                      </button>
                    </div>
                  </div>
                </div>

                {showMockPayment ? (
                  <MockPaymentWidget
                    customerKey={formData.email || 'guest'}
                    customerName={formData.name}
                    customerEmail={formData.email}
                    price={price}
                    orderName="웰킷 교육 패키지1"
                    onSuccess={handlePaymentSuccess}
                    onError={handlePaymentError}
                  />
                ) : (
                  <>
                    <div className="mb-6">
                      <TossPaymentTest />
                    </div>
                    <TossPaymentWidget
                      customerKey={formData.email || 'guest'}
                      customerName={formData.name}
                      customerEmail={formData.email}
                      price={price}
                      orderName="웰킷 교육 패키지1"
                      onSuccess={handlePaymentSuccess}
                      onError={handlePaymentError}
                    />
                  </>
                )}
              </>
            ) : (
              <TossPaymentWidget
                customerKey={formData.email || 'guest'}
                customerName={formData.name}
                customerEmail={formData.email}
                price={price}
                orderName="웰킷 교육 패키지1"
                onSuccess={handlePaymentSuccess}
                onError={handlePaymentError}
              />
            )}
          </div>
        )}
        </div>
      </div>
    </section>
  )
}