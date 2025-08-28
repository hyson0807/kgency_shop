const successStories = [
  {
    id: 1,
    name: 'Nguyen Van A',
    country: '베트남',
    company: '삼성전자',
    position: '소프트웨어 엔지니어',
    image: 'https://via.placeholder.com/150',
    quote: '웰킷 에듀케이션의 체계적인 교육과정 덕분에 한국 기업 문화를 완벽하게 이해하고 적응할 수 있었습니다.',
  },
  {
    id: 2,
    name: 'Kumar S',
    country: '인도',
    company: 'LG화학',
    position: '연구원',
    image: 'https://via.placeholder.com/150',
    quote: '직장 예절부터 업무 프로세스까지, 웰킷 에듀케이션에서 배운 내용들이 실무에 정말 도움이 되었어요.',
  },
  {
    id: 3,
    name: 'Wang Lei',
    country: '중국',
    company: '네이버',
    position: 'UX 디자이너',
    image: 'https://via.placeholder.com/150',
    quote: '비즈니스 한국어 교육과정이 정말 알차서, 회의나 발표에서 자신감을 갖게 되었습니다.',
  },
]

export default function SuccessStories() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            교육 수료 후기
          </h2>
          <p className="text-lg text-gray-600">
            웰킷 에듀케이션으로 한국 직장생활을 성공적으로 시작한 분들의 이야기
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {successStories.map((story) => (
            <div key={story.id} className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gray-300 rounded-full mr-4 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-bold text-xl">
                    {story.name.charAt(0)}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{story.name}</h3>
                  <p className="text-sm text-gray-600">{story.country}</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4 italic">"{story.quote}"</p>
              
              <div className="border-t pt-4">
                <p className="text-sm text-gray-600">
                  현재: <span className="font-medium text-gray-900">{story.position}</span>
                </p>
                <p className="text-sm text-gray-600">
                  회사: <span className="font-medium text-gray-900">{story.company}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}