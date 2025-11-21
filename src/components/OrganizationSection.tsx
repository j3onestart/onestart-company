import { motion } from 'motion/react';
import { Users, Network, Building2, Briefcase, Code, TrendingUp, FileText } from 'lucide-react';

export function OrganizationSection() {
  const ceo = {
    title: '대표이사',
    name: '원스타트컴퍼니',
  };

  const departments = [
    {
      icon: Briefcase,
      name: '영업부',
      tasks: ['영업관리'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: TrendingUp,
      name: '마케팅사업부',
      tasks: ['온라인/SNS 마케팅 지원', '홈페이지/스토어 제작', '라이브커머스 지원'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Code,
      name: '창업지원부',
      tasks: ['아이템 다각화', '사업계획 디자인', '전문 멘토링 지원'],
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: FileText,
      name: '인증사업부',
      tasks: ['기업인증 검토', '특허/지적재산권 확보', '동향 분석'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Users,
      name: '관리부',
      tasks: ['경영지원'],
      color: 'from-orange-500 to-orange-600'
    },
  ];

  const partners = [
    { icon: '⚖️', name: '법무법인' },
    { icon: '💼', name: '노무사' },
    { icon: '📋', name: '변리사' },
    { icon: '💰', name: '금융기관' },
    { icon: '🏢', name: '관련 유관기관' },
  ];

  return (
    <section className="w-full py-8 sm:py-12 md:py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative">
      {/* 배경 장식 */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
      </div>

      {/* 배경 패턴 */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-8">
        <motion.div 
          className="text-center mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <Network className="w-5 h-5 sm:w-6 sm:h-6 text-blue-300" />
            <span className="text-blue-300 font-semibold text-sm sm:text-base md:text-lg">ORGANIZATION</span>
            <Network className="w-5 h-5 sm:w-6 sm:h-6 text-blue-300" />
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white">조직 구성</h2>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* CEO */}
          <motion.div
            className="flex justify-center mb-6 sm:mb-8"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl px-8 sm:px-12 py-4 sm:py-5 shadow-2xl border border-yellow-300/30 min-w-[180px] sm:min-w-[220px]">
                <div className="flex items-center justify-center gap-2">
                  <Building2 className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  <div className="text-xl sm:text-2xl md:text-3xl text-white">{ceo.title}</div>
                </div>
              </div>
              {/* 연결선 */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-6 sm:h-8 bg-gradient-to-b from-yellow-400/50 to-white/30"></div>
            </div>
          </motion.div>

          {/* 중앙 수평선 */}
          <div className="w-full max-w-5xl mx-auto h-0.5 bg-white/30 relative mb-6 sm:mb-8">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white/40 rounded-full"></div>
          </div>

          {/* Departments */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-5 mb-8 sm:mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {departments.map((dept, index) => {
              const Icon = dept.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="relative flex flex-col"
                >
                  {/* 상단 연결선 */}
                  <div className="w-0.5 h-6 sm:h-8 bg-white/30 mx-auto mb-3"></div>
                  
                  <div className={`bg-gradient-to-br ${dept.color} rounded-xl p-4 sm:p-5 shadow-lg border border-white/10 hover:scale-105 transition-transform duration-300 flex-1 flex flex-col`}>
                    <div className="flex flex-col items-center text-center mb-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-lg flex items-center justify-center mb-2">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div className="text-base sm:text-lg md:text-xl text-white mb-3">{dept.name}</div>
                    </div>
                    {/* 하단 연결선 */}
                    <div className="w-0.5 h-4 sm:h-5 bg-white/30 mx-auto mb-3"></div>
                    <div className="bg-white/10 rounded-lg px-3 sm:px-4 py-3 sm:py-4 flex-1">
                      <div className="text-xs sm:text-sm text-white/90 space-y-1 text-center">
                        {dept.tasks?.map((task, idx) => (
                          <div key={idx}>{task}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Partners Network */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-10 border border-white/10">
              <div className="flex items-center justify-center gap-2 mb-6 sm:mb-8">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-blue-300" />
                <h3 className="text-xl sm:text-2xl md:text-3xl text-white">협력 네트워크</h3>
              </div>
              <div className="grid grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
                {partners.map((partner, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.9 + index * 0.05 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/10 hover:bg-white/20 transition-all text-center"
                  >
                    <div className="text-2xl sm:text-3xl mb-2">{partner.icon}</div>
                    <div className="text-xs sm:text-sm text-white">{partner.name}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}