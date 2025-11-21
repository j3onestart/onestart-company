import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Star, Quote } from 'lucide-react';
import { Avatar, AvatarFallback } from './ui/avatar';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: '김○○ 대표',
      company: '(주)테크이노베이션',
      industry: 'IT/소프트웨어',
      rating: 5,
      content: '정부 R&D 과제 신청부터 최종 선정까지 전 과정을 함께해주셨습니다. 전문적인 컨설팅 덕분에 첫 도전에서 3억원 규모의 과제를 따낼 수 있었습니다. 사업계획서 작성부터 발표 준비까지 세심하게 케어해주셔서 정말 감사했습니다.',
    },
    {
      name: '박○○ 대표',
      company: '스마트제조(주)',
      industry: '제조업',
      rating: 5,
      content: '벤처인증과 이노비즈 인증을 동시에 준비했는데, 복잡한 서류 작업을 완벽하게 처리해주셨어요. 원스타트컴퍼니 없이는 불가능했을 것 같습니다. 인증 후 정책자금 대출까지 연계해주셔서 사업 확장에 큰 도움이 되었습니다.',
    },
    {
      name: '이○○ 대표',
      company: '그린에너지솔루션',
      industry: '친환경/에너지',
      rating: 5,
      content: '투자 유치를 위한 IR 자료 준비와 투자사 매칭까지 전폭적인 지원을 받았습니다. 시리즈 A 투자 유치에 성공했고, 지금도 지속적으로 경영 컨설팅을 받고 있습니다. 믿고 맡길 수 있는 파트너입니다.',
    },
    {
      name: '최○○ 이사',
      company: '(주)바이오메디',
      industry: '바이오/헬스케어',
      rating: 5,
      content: '수출바우처 사업 신청 과정에서 많은 도움을 받았습니다. 해외 시장 진출 전략부터 마케팅 계획까지 체계적으로 수립해주셔서 성공적으로 선정되었습니다. 현재 해외 바이어 발굴에도 적극 지원해주고 계십니다.',
    },
    {
      name: '정○○ 대표',
      company: '스타트업코리아',
      industry: '플랫폼/서비스',
      rating: 5,
      content: '창업 초기부터 함께한 든든한 파트너입니다. 사업자등록부터 정부지원금 신청, 인증 획득까지 모든 과정을 원스톱으로 해결해주셨어요. 특히 24시간 상담 지원이 정말 큰 도움이 되었습니다.',
    },
    {
      name: '강○○ 대표',
      company: '(주)푸드테크',
      industry: '식품/유통',
      rating: 5,
      content: '소상공인 정책자금 대출과 경영개선 컨설팅을 받았습니다. 어려운 시기에 실질적인 도움을 주셨고, 매출 증대를 위한 구체적인 전략도 제시해주셔서 감사합니다. 강력히 추천드립니다!',
    },
  ];

  return (
    <section id="testimonials" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-10 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-blue-600 font-semibold text-sm sm:text-base">TESTIMONIALS</span>
          <h2 className="mt-2 mb-3 sm:mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">고객 후기</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            원스타트컴퍼니와 함께한 고객사들의<br className="hidden sm:block" />
            생생한 경험담을 들어보세요.
          </p>
        </motion.div>

        {/* 전체 만족도 */}
        <motion.div 
          className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 sm:p-10 text-white mb-10 sm:mb-12 md:mb-16 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 sm:w-10 sm:h-10 fill-yellow-300 text-yellow-300" />
            ))}
          </div>
          <div className="text-4xl sm:text-5xl md:text-6xl mb-2">98%</div>
          <div className="text-lg sm:text-xl opacity-95">평균 고객 만족도</div>
          <p className="mt-4 text-sm sm:text-base opacity-90 max-w-2xl mx-auto">
            2,050개 이상의 기업이 원스타트컴퍼니와 함께 성공적인 성장을 이루었습니다
          </p>
        </motion.div>

        {/* 후기 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-0 shadow-md hover:shadow-lg transition-all h-full">
                <CardContent className="p-6 sm:p-8 flex flex-col h-full">
                  {/* 인용 아이콘 */}
                  <div className="mb-4">
                    <Quote className="w-10 h-10 text-blue-200" />
                  </div>

                  {/* 별점 */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* 후기 내용 */}
                  <p className="text-gray-700 leading-relaxed mb-6 flex-grow text-sm sm:text-base">
                    "{testimonial.content}"
                  </p>

                  {/* 고객 정보 */}
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <Avatar className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600">
                      <AvatarFallback className="bg-transparent text-white">
                        {testimonial.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.company}</div>
                      <div className="text-xs text-gray-500">{testimonial.industry}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* 하단 CTA */}
        <motion.div 
          className="mt-12 sm:mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-lg sm:text-xl text-gray-700 mb-4">
            막막한 나의 첫 사업을 성공적인 창업 경험으로,
          </p>
          <p className="text-gray-600 text-sm sm:text-base">
            성공 사례의 주인공이 되어보세요.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
