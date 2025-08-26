import { useState } from 'react'
import ResourceCard from './ResourceCard'
import FilterSection from './FilterSection'

interface Resource {
  id: number
  title: string
  description: string
  category: string
  type: 'free' | 'premium'
  format: 'article' | 'pdf' | 'video'
  readTime?: string
  pages?: number
}

const resources: Resource[] = [
  // 무료 자료들
  {
    id: 1,
    title: '한국 기업 면접 기본 매너 가이드',
    description: '첫인상부터 마무리까지, 한국 기업 문화에 맞는 면접 예절',
    category: '면접 준비',
    type: 'free',
    format: 'article',
    readTime: '5분',
  },
  {
    id: 2,
    title: '한국식 이력서 작성법',
    description: '한국 기업이 원하는 이력서 양식과 작성 노하우',
    category: '이력서',
    type: 'free',
    format: 'article',
    readTime: '10분',
  },
  {
    id: 3,
    title: 'E-7 비자 취득 절차 안내',
    description: '외국인 전문인력 비자 취득 단계별 가이드',
    category: '비자',
    type: 'free',
    format: 'article',
    readTime: '15분',
  },
  {
    id: 4,
    title: '직장 비즈니스 한국어 표현',
    description: '회의, 이메일, 전화 응대 필수 표현',
    category: '한국어',
    type: 'free',
    format: 'article',
    readTime: '8분',
  },
  {
    id: 5,
    title: '근로계약서 체크리스트',
    description: '계약 시 반드시 확인해야 할 10가지',
    category: '법률',
    type: 'free',
    format: 'article',
    readTime: '7분',
  },
  // 프리미엄 자료들
  {
    id: 6,
    title: '한국 취업 완벽 가이드북',
    description: '입국부터 정착까지 모든 과정을 다룬 종합 가이드',
    category: '종합 가이드',
    type: 'premium',
    format: 'pdf',
    pages: 300,
  },
  {
    id: 7,
    title: '면접 한국어 마스터 과정',
    description: '실전 면접 질문 100선과 모범 답변',
    category: '면접 준비',
    type: 'premium',
    format: 'pdf',
    pages: 150,
  },
  {
    id: 8,
    title: '업종별 전문 용어 사전',
    description: 'IT, 제조, 서비스 등 업종별 필수 용어 정리',
    category: '한국어',
    type: 'premium',
    format: 'pdf',
    pages: 200,
  },
  {
    id: 9,
    title: '급여 협상 전략 가이드',
    description: '한국 기업과의 연봉 협상 노하우',
    category: '경력 개발',
    type: 'premium',
    format: 'pdf',
    pages: 80,
  },
  {
    id: 10,
    title: '노동법 완벽 이해',
    description: '외국인 근로자가 알아야 할 권리와 의무',
    category: '법률',
    type: 'premium',
    format: 'pdf',
    pages: 120,
  },
]

const categories = ['전체', '면접 준비', '이력서', '비자', '한국어', '법률', '경력 개발', '종합 가이드']

export default function Resources() {
  const [selectedCategory, setSelectedCategory] = useState('전체')
  const [showType, setShowType] = useState<'all' | 'free' | 'premium'>('all')

  const filteredResources = resources.filter((resource) => {
    const categoryMatch = selectedCategory === '전체' || resource.category === selectedCategory
    const typeMatch = showType === 'all' || resource.type === showType
    return categoryMatch && typeMatch
  })

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            리소스 센터
          </h1>
          <p className="text-lg text-gray-600">
            한국 취업 성공을 위한 모든 자료를 한곳에서
          </p>
        </div>

        <FilterSection
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          showType={showType}
          onTypeChange={setShowType}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>

        {filteredResources.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">선택한 조건에 맞는 자료가 없습니다.</p>
          </div>
        )}
      </div>
    </div>
  )
}