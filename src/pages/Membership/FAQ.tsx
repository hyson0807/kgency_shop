import { useState } from 'react'

const faqs = [
  {
    question: '멤버십 가입 후 바로 이용할 수 있나요?',
    answer: '네, 결제 완료 즉시 모든 프리미엄 콘텐츠에 접근 가능하며, K-Agency 앱과 자동으로 연동됩니다.',
  },
  {
    question: '환불 정책은 어떻게 되나요?',
    answer: '가입 후 7일 이내 100% 환불이 가능합니다. 단, PDF 다운로드를 하신 경우에는 환불이 제한될 수 있습니다.',
  },
  {
    question: '멤버십 해지는 어떻게 하나요?',
    answer: '마이페이지에서 언제든지 해지 가능합니다. 해지 후에도 결제 기간까지는 이용 가능합니다.',
  },
  {
    question: 'K-Agency 앱과 어떻게 연동되나요?',
    answer: '동일한 이메일 계정으로 로그인하시면 자동으로 프리미엄 혜택이 적용됩니다.',
  },
  {
    question: '연간 멤버십 중간에 해지하면 환불받을 수 있나요?',
    answer: '사용하지 않은 기간에 대해 일할 계산하여 환불해 드립니다.',
  },
  {
    question: 'PDF 자료는 몇 번 다운로드할 수 있나요?',
    answer: '멤버십 기간 동안 무제한 다운로드 가능합니다. 최신 버전이 업데이트되면 알림을 드립니다.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            자주 묻는 질문
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors flex justify-between items-center"
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              더 궁금한 점이 있으신가요?
            </p>
            <a
              href="#"
              className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
            >
              고객센터 문의하기
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}