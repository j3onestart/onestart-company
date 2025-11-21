import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Target, Users, Award, TrendingUp } from 'lucide-react';

export function AboutValuesSection() {
  const values = [
    {
      icon: Target,
      title: '전문성',
      description: '10년 이상 축적된 중소기업 컨설팅 전문 노하우와 정부지원사업 실무 경험',
      gradient: 'from-blue-300 to-blue-400',
      bgColor: 'bg-blue-50',
      iconBg: 'from-blue-300 to-blue-400',
    },
    {
      icon: Users,
      title: '신뢰성',
      description: '2,052개 이상의 기업과 함께한 검증된 실적과 높은 고객 만족도',
      gradient: 'from-blue-300 to-blue-400',
      bgColor: 'bg-blue-50',
      iconBg: 'from-blue-300 to-blue-400',
    },
    {
      icon: Award,
      title: '네트워크',
      description: '변리사, 노무사, 개발사, 마케팅사, 금융기관 등과의 탄탄한 협력 네트워크 보유',
      gradient: 'from-green-300 to-green-400',
      bgColor: 'bg-green-50',
      iconBg: 'from-green-300 to-green-400',
    },
    {
      icon: TrendingUp,
      title: '성장지향',
      description: '고객사의 지속 가능한 성장을 최우선 가치로 맞춤형 솔루션 제공',
      gradient: 'from-orange-300 to-orange-400',
      bgColor: 'bg-orange-50',
      iconBg: 'from-orange-300 to-orange-400',
    },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white to-gray-100 relative overflow-hidden">
      {/* 배경 장식 */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200 rounded-full blur-3xl"></div>
      </div>

      {/* 배경 패턴 */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%234f46e5' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold">
              OUR VALUES
            </span>
          </div>
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 text-gray-900">
            핵심 가치
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg md:text-xl">
            원스타트컴퍼니가 지켜온 4가지 핵심 가치
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 h-full overflow-hidden hover:-translate-y-2">
                <CardContent className="p-0">
                  {/* 상단 색상 바 */}
                  <div className={`h-2 bg-gradient-to-r ${value.gradient}`}></div>
                  
                  <div className="p-8 sm:p-10">
                    {/* 아이콘 */}
                    <motion.div
                      className="mb-6"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className={`w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br ${value.iconBg} rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-shadow`}>
                        <value.icon className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                      </div>
                    </motion.div>

                    {/* 제목 */}
                    <h4 className="text-xl sm:text-2xl md:text-3xl mb-5 text-center group-hover:text-blue-600 transition-colors">
                      {value.title}
                    </h4>

                    {/* 설명 */}
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed text-center">
                      {value.description}
                    </p>

                    {/* 하단 장식선 */}
                    <div className="mt-6 flex justify-center">
                      <div className={`w-16 h-1 bg-gradient-to-r ${value.gradient} rounded-full group-hover:w-24 transition-all duration-500`}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* 하단 CTA */}
        <motion.div
          className="mt-16 sm:mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="inline-block bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 sm:p-10 border border-blue-100">
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-800 mb-4">
              대표님의 소중한 시간과 노력,<br className="sm:hidden" /> 훨씬 가치 있는 곳에 사용하세요.
            </p>
            <div className="flex items-center justify-center gap-2 text-blue-600 text-base sm:text-lg">
              <span>•</span>
              <span>•</span>
              <span>•</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}