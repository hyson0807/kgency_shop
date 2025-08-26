import { useState } from 'react'

interface PaymentFormProps {
  selectedPlan: 'monthly' | 'yearly'
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // 여기에 실제 PG사 연동 코드가 들어갑니다
    // 예: 토스페이먼츠, 포트원(아임포트) 등
    
    alert('결제 페이지로 이동합니다. (PG사 연동 필요)')
    
    // 예시: 토스페이먼츠
    // const tossPayments = await loadTossPayments(clientKey)
    // tossPayments.requestPayment('카드', {
    //   amount: price,
    //   orderId: generateOrderId(),
    //   orderName: `야트라 프리미엄 멤버십 (${selectedPlan === 'monthly' ? '월간' : '연간'})`,
    //   customerName: formData.name,
    //   customerEmail: formData.email,
    //   successUrl: `${window.location.origin}/payment/success`,
    //   failUrl: `${window.location.origin}/payment/fail`,
    // })
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
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              교육 패키지 신청
            </h2>

            {/* Selected Plan Summary */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {selectedPlan === 'monthly' ? '종합 교육 패키지' : '연간 교육 패키지'}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    야트라 에듀케이션의 모든 교육 과정
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-gray-900">
                    ₩{price.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-500">
                    /{selectedPlan === 'monthly' ? '월' : '년'}
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

              {/* Payment Methods */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  결제 수단
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <button type="button" className="border border-gray-300 rounded-lg p-3 hover:bg-gray-50 transition-colors">
                    <img src="https://via.placeholder.com/80x40?text=카드" alt="신용카드" className="w-full h-8 object-contain" />
                  </button>
                  <button type="button" className="border border-gray-300 rounded-lg p-3 hover:bg-gray-50 transition-colors">
                    <img src="https://via.placeholder.com/80x40?text=카카오" alt="카카오페이" className="w-full h-8 object-contain" />
                  </button>
                  <button type="button" className="border border-gray-300 rounded-lg p-3 hover:bg-gray-50 transition-colors">
                    <img src="https://via.placeholder.com/80x40?text=네이버" alt="네이버페이" className="w-full h-8 object-contain" />
                  </button>
                  <button type="button" className="border border-gray-300 rounded-lg p-3 hover:bg-gray-50 transition-colors">
                    <img src="https://via.placeholder.com/80x40?text=토스" alt="토스페이" className="w-full h-8 object-contain" />
                  </button>
                </div>
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
                결제하기 - ₩{price.toLocaleString()}
              </button>

              {/* Security Notice */}
              <div className="text-center">
                <p className="text-xs text-gray-500 mb-2">
                  결제는 안전한 PG사를 통해 진행됩니다
                </p>
                <div className="flex justify-center items-center space-x-4">
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-xs text-gray-500">256-bit SSL 암호화</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}