import { Lightbulb, TrendingUp, Target, Megaphone, FileText, Building2, Award, Users, BarChart, Briefcase, DollarSign, Globe } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const mainServices = [
  {
    icon: Lightbulb,
    title: '창업컨설팅 서비스',
    color: 'from-blue-500 to-blue-600',
    items: [
      { icon: Award, text: '예비창업자금' },
      { icon: FileText, text: '신규설립/업종선택' },
      { icon: Building2, text: '브랜딩/컨설팅' },
      { icon: Users, text: '사업계획서 제작' },
      { icon: Briefcase, text: '홈페이지 제작' },
    ]
  },
  {
    icon: TrendingUp,
    title: '창업성장 서비스',
    color: 'from-indigo-500 to-indigo-600',
    items: [
      { icon: BarChart, text: '운전/시설/청년창업 자금조달' },
      { icon: Building2, text: '정부 지원사업 안내' },
      { icon: Target, text: '기업부설연구소/전담부서' },
      { icon: Award, text: '벤처인증' },
      { icon: Lightbulb, text: 'Main-Biz' },
      { icon: Building2, text: 'Inno-Biz' },
    ]
  },
  {
    icon: Target,
    title: '창업지원 서비스',
    color: 'from-purple-500 to-purple-600',
    items: [
      { icon: DollarSign, text: '세무/회계 지원' },
      { icon: BarChart, text: '경영 자문' },
      { icon: Users, text: '변리 특허/상표권' },
      { icon: Award, text: '행정 및 노무 지원' },
      { icon: FileText, text: '재무제표 분석' },
      { icon: Briefcase, text: '단기/중장기 계획 수립' },
      { icon: Globe, text: 'TAX/기장 대리 연결' },
    ]
  },
  {
    icon: Megaphone,
    title: '광고/마케팅',
    color: 'from-pink-500 to-pink-600',
    items: [
      { icon: Globe, text: '홈페이지/스마트스토어 제작' },
      { icon: Megaphone, text: '블로그 체험단 지원' },
      { icon: Target, text: 'SNS 채널 운영' },
      { icon: Award, text: '배너 제작 및 게시' },
      { icon: FileText, text: '파워링크/상위 검색' },
      { icon: Users, text: '유튜브/라이브방송 제작' },
      { icon: Briefcase, text: '카달로그/브로셔 기획 지원' },
    ]
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 헤더 */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <span className="text-blue-600 font-semibold text-sm sm:text-base">SERVICES</span>
          <h2 className="mt-2 mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">전문 컨설팅 서비스</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed">
            원스타트컴퍼니 주요 사업 분야<br className="hidden sm:block" />
            노하우 및 네트워크로, 창업 전반을 지원합니다.
          </p>
        </div>

        {/* 주요 4가지 사업 */}
        <div className="space-y-8 sm:space-y-12 md:space-y-16">
          {mainServices.map((service, idx) => (
            <div key={idx} className="group">
              {/* 서비스 헤더 */}
              <div className="flex items-center gap-4 mb-6 sm:mb-8">
                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl text-gray-900">
                    {service.title}
                  </h3>
                  <div className={`h-1 w-24 sm:w-32 mt-2 rounded-full bg-gradient-to-r ${service.color}`}></div>
                </div>
              </div>

              {/* 세부 항목 그리드 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
                {service.items.map((item, itemIdx) => (
                  <Card 
                    key={itemIdx} 
                    className="border-2 border-gray-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group/card"
                  >
                    <CardContent className="p-5 sm:p-6">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover/card:bg-blue-100 transition-colors">
                          <item.icon className="w-5 h-5 text-blue-600" />
                        </div>
                        <div className="flex-1 pt-1">
                          <p className="text-gray-800 text-sm sm:text-base leading-snug">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 하단 CTA */}
        <div className="mt-16 sm:mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 sm:p-12 md:p-16 shadow-2xl">
            <h3 className="text-2xl sm:text-3xl md:text-4xl text-white mb-4">
              최적의 솔루션을 제안합니다
            </h3>
            <p className="text-blue-100 text-base sm:text-lg mb-8">
              전문가와 상담하고 꼭 맞는 컨설팅을 받아보세요.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-base sm:text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              무료 상담 신청하기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}