interface FilterSectionProps {
  categories: string[]
  selectedCategory: string
  onCategoryChange: (category: string) => void
  showType: 'all' | 'free' | 'premium'
  onTypeChange: (type: 'all' | 'free' | 'premium') => void
}

export default function FilterSection({
  categories,
  selectedCategory,
  onCategoryChange,
  showType,
  onTypeChange,
}: FilterSectionProps) {
  return (
    <div className="mb-8">
      {/* Type Filter */}
      <div className="flex justify-center space-x-4 mb-6">
        <button
          onClick={() => onTypeChange('all')}
          className={`px-6 py-2 rounded-lg font-medium transition-colors ${
            showType === 'all'
              ? 'bg-primary-600 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          전체 자료
        </button>
        <button
          onClick={() => onTypeChange('free')}
          className={`px-6 py-2 rounded-lg font-medium transition-colors ${
            showType === 'free'
              ? 'bg-green-600 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          무료 자료
        </button>
        <button
          onClick={() => onTypeChange('premium')}
          className={`px-6 py-2 rounded-lg font-medium transition-colors flex items-center ${
            showType === 'premium'
              ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
          프리미엄
        </button>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category
                ? 'bg-primary-100 text-primary-700'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}