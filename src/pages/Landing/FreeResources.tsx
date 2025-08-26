import { Link } from 'react-router-dom'

const freeResources = [
  {
    id: 1,
    category: '면접 준비',
    title: '한국 기업 면접 기본 매너 가이드',
    description: '첫인상부터 마무리까지, 한국 기업 문화에 맞는 면접 예절을 알아보세요.',
    readTime: '5분',
    icon: '👔',
  },
  {
    id: 2,
    category: '이력서 작성',
    title: '한국식 이력서 작성법 완벽 정리',
    description: '한국 기업이 원하는 이력서 양식과 작성 노하우를 무료로 배워보세요.',
    readTime: '10분',
    icon: '📝',
  },
  {
    id: 3,
    category: '비자 안내',
    title: 'E-7 비자 취득 절차 총정리',
    description: '외국인 전문인력 비자 취득을 위한 단계별 가이드와 필요 서류 안내.',
    readTime: '15분',
    icon: '🛂',
  },
  {
    id: 4,
    category: '한국어 학습',
    title: '직장에서 바로 쓰는 비즈니스 한국어',
    description: '회의, 이메일, 전화 응대 등 실무에서 필요한 핵심 표현 모음.',
    readTime: '8분',
    icon: '💬',
  },
  {
    id: 5,
    category: '근로 계약',
    title: '근로계약서 체크리스트',
    description: '근로계약서 작성 시 반드시 확인해야 할 10가지 핵심 사항.',
    readTime: '7분',
    icon: '📋',
  },
  {
    id: 6,
    category: '생활 정보',
    title: '외국인을 위한 4대 보험 가이드',
    description: '건강보험, 국민연금 등 한국의 사회보험 제도 이해하기.',
    readTime: '12분',
    icon: '🏥',
  },
]

export default function FreeResources() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            무료로 제공되는 교육 자료
          </h2>
          <p className="text-lg text-gray-600">
            한국 직장생활을 준비하는 모든 외국인을 위해 엄선한 필수 학습 자료
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {freeResources.map((resource) => (
            <article key={resource.id} className="card hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{resource.icon}</span>
                <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {resource.readTime} 읽기
                </span>
              </div>
              <div className="mb-2">
                <span className="text-xs font-semibold text-primary-600 uppercase tracking-wide">
                  {resource.category}
                </span>
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                {resource.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {resource.description}
              </p>
              <a href="#" className="text-emerald-600 font-medium text-sm hover:text-emerald-700">
                자세히 보기 →
              </a>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/resources"
            className="inline-flex items-center px-6 py-3 bg-white border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            더 많은 교육 자료 보기
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}