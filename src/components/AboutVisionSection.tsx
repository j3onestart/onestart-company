import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export function AboutVisionSection() {
  return (
    <div className="w-full py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900 relative">
      {/* 배경 패턴 */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-yellow-300" />
            <span className="text-yellow-300 font-semibold text-base sm:text-lg">ABOUT US</span>
            <Sparkles className="w-6 h-6 text-yellow-300" />
          </div>
          <h2 className="mt-2 mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white">회사 소개</h2>
          <p className="text-blue-100 max-w-3xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed">
            2016년 설립 이래, 원스타트컴퍼니는 중소기업과 스타트업의<br className="hidden sm:block" />
            성공적인 성장을 위한 최고의 파트너로 함께해왔습니다.
          </p>
        </motion.div>

        {/* 비전 박스 */}
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 sm:p-14 md:p-20 border border-white/20 shadow-2xl relative overflow-hidden">
            {/* 내부 장식 */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-300/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-300/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center"
              >
                <div className="inline-block mb-6 sm:mb-8">
                  <div className="w-16 h-1 sm:w-24 sm:h-1.5 bg-gradient-to-r from-transparent via-yellow-300 to-transparent rounded-full"></div>
                </div>
                
                <h3 className="text-xl sm:text-2xl md:text-3xl text-white mb-8 sm:mb-12 tracking-tight">
                  우리의 비전
                </h3>
                
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed font-light mb-8 sm:mb-12">
                  "대한민국 모든 스타트업과 중소기업의<br />
                  <span className="text-yellow-300 font-semibold">가장 신뢰받는 컨설팅 파트너</span>"
                </p>

                <div className="inline-block">
                  <div className="w-16 h-1 sm:w-24 sm:h-1.5 bg-gradient-to-r from-transparent via-yellow-300 to-transparent rounded-full"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* 하단 통계 */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            { number: '10+', label: '년 이상의 경험' },
            { number: '2,052+', label: '수행이력' },
            { number: '98%', label: '고객 만족도' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              className="text-center"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl sm:text-5xl md:text-6xl mb-2 sm:mb-3 text-white font-bold">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base md:text-lg text-blue-100">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}