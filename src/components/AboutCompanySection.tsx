import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export function AboutCompanySection() {
  const specialties = [
    '정부 지원사업 컨설팅 (R&D, 정책자금, 수출지원 등)',
    '벤처인증, 이노비즈, 메인비즈 등 기업 인증 획득',
    '투자유치 및 IR 전략 수립',
    '경영전략 및 사업계획서 작성',
  ];

  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* 배경 장식 */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 섹션 헤더 추가 */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-blue-600 font-semibold text-sm sm:text-base">ABOUT US</span>
          <h2 className="mt-2 mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">회사 소개</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed">
            2016년부터 중소기업과 함께 성장해온 원스타트컴퍼니는<br className="hidden sm:block" />
            정부지원사업, 투자유치, 기업인증 등 기업 성장의 모든 단계를 지원합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-center">
          {/* 왼쪽: 회사 설명 */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
                Since 2016
              </div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 sm:mb-8 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                전문성과 신뢰를<br />바탕으로
              </h3>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <motion.p
                className="text-gray-700 leading-relaxed text-lg sm:text-xl md:text-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                원스타트컴퍼니는 창업준비부터 운영에 있어 필요한 모든 요소들을 종합하여, 고객님께 맞춤형 서비스를 제공해 드리고 있습니다.
                정부지원사업 컨설팅, 경영전략 수립, 투자유치 지원, 각종 인증 획득,
                마케팅 지원, 홈페이지/플랫폼 개발 등 기업의 시작부터 성장 과정을 함께합니다.
              </motion.p>

              <motion.p
                className="text-gray-700 leading-relaxed text-lg sm:text-xl md:text-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                축적된 노하우와 개발자부터 노무사, 변리사, 금융기관과의 탄탄한 네트워크를 바탕으로 
                고객사의 성공적인 성장을 지원하여 2,052개 이상의 기업에게
                맞춤형 솔루션을 통해 실질적인 성과를 만들어냈습니다.
              </motion.p>
            </div>

            {/* 특징 포인트 */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 sm:mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {[
                { icon: '🎯', text: '맞춤형 솔루션' },
                { icon: '🏆', text: '분야별 실적 보유' },
                { icon: '🤝', text: '탄탄한 네트워크' },
                { icon: '💡', text: '전문 노하우' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
                >
                  <span className="text-3xl">{item.icon}</span>
                  <span className="text-base sm:text-lg font-semibold text-gray-800">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* 오른쪽: 주요 전문 분야 */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 sm:p-10 md:p-12 shadow-2xl relative overflow-hidden">
              {/* 내부 장식 */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8 sm:mb-10">
                  <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center">
                    <ArrowRight className="w-6 h-6 text-blue-900" />
                  </div>
                  <h4 className="text-2xl sm:text-3xl md:text-4xl text-white">
                    주요 전문 분야
                  </h4>
                </div>

                <ul className="space-y-5 sm:space-y-6">
                  {specialties.map((specialty, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                      className="flex items-start gap-4 group"
                    >
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <CheckCircle2 className="w-5 h-5 text-blue-900" />
                        </div>
                      </div>
                      <span className="text-base sm:text-lg md:text-xl text-white leading-relaxed">
                        {specialty}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* 하단 강조 */}
                <motion.div
                  className="mt-10 pt-8 border-t border-white/20"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <p className="text-blue-100 text-base sm:text-lg italic">
                    "대표님의 원대한 포부와 목표, 같은 목표를 향해 돕겠습니다."
                  </p>
                  <p className="text-blue-100 text-base sm:text-lg italic mt-2">
                    - 원스타트컴퍼니 대표 및 임직원 일동
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}