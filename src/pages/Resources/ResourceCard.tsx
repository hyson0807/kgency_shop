import { Link } from 'react-router-dom'

interface ResourceCardProps {
  resource: {
    id: number
    title: string
    description: string
    category: string
    type: 'free' | 'premium'
    format: 'article' | 'pdf' | 'video'
    readTime?: string
    pages?: number
  }
}

export default function ResourceCard({ resource }: ResourceCardProps) {
  const formatIcon = {
    article: '📄',
    pdf: '📕',
    video: '🎥',
  }

  const isPremium = resource.type === 'premium'

  return (
    <div className={`card hover:shadow-lg transition-shadow ${isPremium ? 'border-amber-200' : ''}`}>
      <div className="flex justify-between items-start mb-4">
        <span className="text-2xl">{formatIcon[resource.format]}</span>
        {isPremium ? (
          <span className="badge badge-premium">
            프리미엄
          </span>
        ) : (
          <span className="badge bg-green-100 text-green-800">
            무료
          </span>
        )}
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

      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">
          {resource.readTime ? `${resource.readTime} 읽기` : `${resource.pages}페이지`}
        </span>
        
        {isPremium ? (
          <Link
            to="/membership"
            className="text-amber-600 font-medium text-sm hover:text-amber-700 flex items-center"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            멤버십 가입
          </Link>
        ) : (
          <button className="text-primary-600 font-medium text-sm hover:text-primary-700">
            자세히 보기 →
          </button>
        )}
      </div>
    </div>
  )
}