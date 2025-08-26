const benefits = [
  {
    category: '교육 콘텐츠',
    items: [
      {
        title: '한국 직장문화 이해 PDF',
        description: '300페이지 분량의 종합 가이드 - 직장예절부터 업무문화까지',
        icon: '📚',
      },
      {
        title: '비즈니스 한국어 학습서',
        description: '업무 상황별 필수 표현과 대화법 완전 정리',
        icon: '🗣️',
      },
      {
        title: '업종별 전문 용어 사전',
        description: 'IT, 제조, 서비스 등 업종별 필수 용어 정리',
        icon: '📖',
      },
      {
        title: '취업 성공 전략 가이드',
        description: '이력서 작성부터 면접까지 단계별 가이드',
        icon: '💰',
      },
    ],
  },
  {
    category: '실무 교육',
    items: [
      {
        title: '화상 교육 세션',
        description: '월 2회 전문강사와 함께하는 실시간 교육',
        icon: '🎥',
      },
      {
        title: '모의 면접 훈련',
        description: '한국 기업 면접 상황을 실제로 연습',
        icon: '💼',
      },
      {
        title: '개별 맞춤 상담',
        description: '개인별 상황에 맞는 1:1 상담 서비스',
        icon: '👨‍🏫',
      },
    ],
  },
  {
    category: '지원 서비스',
    items: [
      {
        title: '이력서 첨삭 서비스',
        description: '전문가의 맞춤형 이력서 피드백 서비스',
        icon: '✍️',
      },
      {
        title: '온라인 상담',
        description: '진로 및 취업 관련 전문 상담 (월 30분)',
        icon: '💬',
      },
      {
        title: '수료생 네트워크',
        description: '선배 수료생들과의 멘토링 기회',
        icon: '👥',
      },
    ],
  },
]

export default function BenefitsList() {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          교육 패키지 구성
        </h2>
        
        <div className="space-y-12">
          {benefits.map((category, idx) => (
            <div key={idx}>
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <span className="bg-amber-100 text-amber-600 px-3 py-1 rounded-lg mr-3">
                  {category.category}
                </span>
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="flex items-start">
                    <span className="text-3xl mr-4 mt-1">{item.icon}</span>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="mt-12 bg-gradient-to-r from-primary-50 to-primary-100 rounded-xl p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            추가 혜택
          </h3>
          <ul className="grid md:grid-cols-2 gap-4">
            <li className="flex items-center">
              <svg className="w-5 h-5 text-emerald-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              매월 업데이트되는 최신 교육 자료
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-emerald-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              전용 교육 뉴스레터
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-emerald-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              오프라인 세미나 초대 (분기별)
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-emerald-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              우선 고객 지원
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}