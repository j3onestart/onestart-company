import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { CheckCircle2 } from 'lucide-react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'motion/react';
import { useState, useEffect, useRef } from 'react';

const cases = [
  {
    company: 'A 제조기업',
    industry: '제조업',
    service: '정책자금 컨설팅',
    result: '3억원 정책자금 유치',
    description: '스마트공장 구축을 위한 정부 지원사업 선정 및 자금 확보',
    image: 'https://images.unsplash.com/photo-1603985585179-3d71c35a537c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc2MTc2MzUwMnww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    company: 'B 스타트업',
    industry: 'IT/소프트웨어',
    service: '투자유치 컨설팅',
    result: '시리즈A 15억원 투자 유치',
    description: '사업계획서 작성부터 IR 피칭까지 전 과정 컨설팅',
    image: 'https://images.unsplash.com/photo-1556644304-99ca9f48ae96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBidXNpbmVzcyUyMHdvcmt8ZW58MXx8fHwxNzYxNzk1Mjc2fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    company: 'C 유통기업',
    industry: '도소매업',
    service: '기업성장 컨설팅',
    description: '사업 확장 전략 수립 및 벤처기업 인증 획득',
    result: '매출 200% 성장',
    image: 'https://images.unsplash.com/photo-1600508772927-723e3ba305c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwxfHx8fDE3NjE3MTYzMjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

function Counter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  const [displayValue, setDisplayValue] = useState(0);

  // 시작값 계산: 목표값 - 20 (최소 0)
  const startValue = Math.max(0, value - 20);

  useEffect(() => {
    if (isInView) {
      // 시작값으로 먼저 설정
      motionValue.set(startValue);
      
      const controls = animate(motionValue, value, {
        duration: 3.5,
        ease: "easeOut",
      });

      const unsubscribe = rounded.on('change', (latest) => {
        setDisplayValue(latest);
      });

      return () => {
        controls.stop();
        unsubscribe();
      };
    } else {
      // 뷰포트 밖으로 나가면 시작값으로 리셋
      motionValue.set(startValue);
      setDisplayValue(startValue);
    }
  }, [isInView, motionValue, rounded, value, startValue]);

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.5, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-600 mb-1 sm:mb-2 tabular-nums"
    >
      {displayValue}{suffix}
    </motion.div>
  );
}

export function CasesSection() {
  const [animationCount, setAnimationCount] = useState(0);

  const handleViewportEnter = () => {
    if (animationCount < 3) {
      setAnimationCount(prev => prev + 1);
    }
  };

  return (
    <section id="cases" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-10 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          onViewportEnter={handleViewportEnter}
        >
          <span className="text-blue-600 font-semibold text-sm sm:text-base">SUCCESS CASES</span>
          <h2 className="mt-2 mb-3 sm:mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">성공 사례</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            원스타트컴퍼니와 함께한 기업들의 성공 스토리를 확인하세요.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {cases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={animationCount < 3 ? { opacity: 1, y: 0 } : undefined}
              animate={animationCount >= 3 ? { opacity: 1, y: 0 } : undefined}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut"
              }}
            >
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.company}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <Badge className="absolute top-4 right-4 bg-blue-600">
                    {item.industry}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="mb-2">{item.company}</h3>
                  <p className="text-sm text-gray-600 mb-4">{item.service}</p>
                  <p className="text-sm text-gray-700 mb-4">{item.description}</p>
                  <div className="flex items-center gap-2 text-blue-600">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="font-semibold">{item.result}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-12 sm:mt-16 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 sm:p-10 md:p-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
            <div className="text-center">
              <Counter value={2050} suffix="+" />
              <div className="text-sm sm:text-base text-gray-600">프로젝트 완료</div>
            </div>
            <div className="text-center">
              <Counter value={500} suffix="억+" />
              <div className="text-sm sm:text-base text-gray-600">총 지원금액</div>
            </div>
            <div className="text-center">
              <Counter value={98} suffix="%" />
              <div className="text-sm sm:text-base text-gray-600">고객 만족도</div>
            </div>
            <div className="text-center">
              <Counter value={10} suffix="년" />
              <div className="text-sm sm:text-base text-gray-600">운영 경력</div>
            </div>
          </div>
        </div>

        {/* Message Section - Outside the box */}
        <div className="mt-8 sm:mt-10 md:mt-12 text-center">
          <p className="text-gray-700 text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
            전문성과 높은 신뢰를 바탕으로, <span className="text-blue-600 font-semibold">예비창업자와 스타트업의 든든한 파트너</span>가 되어드립니다.
          </p>
        </div>
      </div>
    </section>
  );
}