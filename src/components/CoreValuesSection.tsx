import { motion } from 'motion/react';

const values = [
  {
    title: '감동',
    description: '고객의 성공 = 우리의 성공',
    color: 'from-rose-400 to-pink-500',
  },
  {
    title: '전문성',
    description: '10년 이상의 노하우 & 전문 지식',
    color: 'from-blue-400 to-indigo-500',
  },
  {
    title: '열정',
    description: '끊임없는 도전, 그리고 혁신',
    color: 'from-orange-400 to-red-500',
  },
  {
    title: '원칙 준수',
    description: '투명하고 정직한 경영',
    color: 'from-teal-400 to-cyan-500',
  },
];

export function CoreValuesSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-purple-600 font-semibold text-sm sm:text-base">CORE VALUES</span>
          <h2 className="mt-2 mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">기업가치</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            원스타트컴퍼니가 추구하는 4가지 핵심 가치입니다
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full">
                {/* 카드 내용 */}
                <div className="relative bg-white rounded-2xl p-8 sm:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-transparent h-full flex flex-col items-center text-center">
                  {/* 상단 색상 바 */}
                  <div className={`w-full h-2 rounded-full bg-gradient-to-r ${value.color} mb-6`}></div>

                  {/* 제목 */}
                  <h3 className="text-2xl sm:text-3xl md:text-4xl mb-4 text-gray-900">
                    {value.title}
                  </h3>

                  {/* 설명 */}
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
