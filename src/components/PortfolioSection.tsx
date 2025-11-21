import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { FileText, Calendar, Layers, Tag, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import portfolioImage from 'figma:asset/fefd5f02746aad3647444a0359673a59d9b65bb2.png';
import portfolioImage2 from 'figma:asset/27ea3bb9288b311910368620526f1ab7ea3f8296.png';
import portfolioImage3 from 'figma:asset/56e41db74d10cbef4b83cb67d5d155badf13723b.png';
import portfolioImage4 from 'figma:asset/96ebaf863bc43607c2cee3d2dd81eb04f4de5c0c.png';
import portfolioImage5 from 'figma:asset/077958f9fd10ccba9d1290f6e0f8af0ddbce93ca.png';
import portfolioImage6 from 'figma:asset/8d45248e473db0fd350b39c90789e0981a0f4ef8.png';
import portfolioImage7 from 'figma:asset/59464b4a9c0d57ac0ad1f2ade1d1ee33ae1614b9.png';
import portfolioImage8 from 'figma:asset/5ddb49a1a6752c152c6279f1e014f823c39731be.png';
import portfolioImage9 from 'figma:asset/006e0c1631be7faf6a1d5de0b6ebf10071a0e031.png';
import portfolioImage10 from 'figma:asset/a1e0e7f581ac8e7f7f55e3b1a80a34930ff61b8f.png';
import portfolioImage11 from 'figma:asset/55f1115f68a260495357a47936253ecae5e97a1d.png';

// 포트폴리오 데이터
const portfolioData = [
  {
    id: 1,
    company: '맞춤형 트레일러 제조업',
    industry: '제조업',
    type: '사업계획서',
    tags: ['부품제조업', '개조', '관리', '정부지원사업'],
    attributes: {
      documentType: 'PPT',
      pages: '40페이지',
      period: '3주',
    },
    image: portfolioImage,
  },
  {
    id: 2,
    company: '뷰티케어 브랜드 및 교육 플랫폼',
    industry: '뷰티/헬스케어',
    type: '사업계획서',
    tags: ['뷰티', '헬스케어', '투자유치', 'IR 자료'],
    attributes: {
      documentType: 'PPT',
      pages: '45페이지',
      period: '3주',
    },
    image: portfolioImage2,
  },
  {
    id: 3,
    company: '디지털 솔루션',
    industry: 'IT/서비스',
    type: '사업계획서',
    tags: ['IT', '디지털전환', '재무계획', '투자유치'],
    attributes: {
      documentType: 'PPT',
      pages: '38페이지',
      period: '2주',
    },
    image: portfolioImage3,
  },
  {
    id: 4,
    company: 'Tech 전문 서비스업',
    industry: 'IT/서비스',
    type: '회사소개서',
    tags: ['IT', 'OEM', '서비스업', '회사소개'],
    attributes: {
      documentType: 'PPT',
      pages: '32페이지',
      period: '2주',
    },
    image: portfolioImage4,
  },
  {
    id: 5,
    company: '프리미엄 카페',
    industry: '외식/카페',
    type: '사업계획서',
    tags: ['카페', '외식업', '투자유치', '정부지원'],
    attributes: {
      documentType: 'PPT',
      pages: '48페이지',
      period: '3주',
    },
    image: portfolioImage5,
  },
  {
    id: 6,
    company: 'AI딥러닝 솔루션',
    industry: 'IT/AI',
    type: '사업계획서',
    tags: ['AI', '딥러닝', '기술개발', 'IR 자료'],
    attributes: {
      documentType: 'PPT',
      pages: '52페이지',
      period: '4주',
    },
    image: portfolioImage6,
  },
  {
    id: 7,
    company: '외식사업',
    industry: '외식/카페',
    type: '사업계획서',
    tags: ['카페', '감성공간', '창업', '투자유치'],
    attributes: {
      documentType: 'PPT',
      pages: '42페이지',
      period: '3주',
    },
    image: portfolioImage7,
  },
  {
    id: 8,
    company: '교육 플랫폼',
    industry: '교육서비스업',
    type: '사업계획서',
    tags: ['제조업', '스마트홈', '정부지원', '투자유치'],
    attributes: {
      documentType: 'PPT',
      pages: '40페이지',
      period: '3주',
    },
    image: portfolioImage8,
  },
  {
    id: 9,
    company: '푸드아트 및 서비스 플랫폼',
    industry: '디자인업',
    type: '사업계획서',
    tags: ['디자인', '디지털아트', '창업', '투자유치'],
    attributes: {
      documentType: 'PPT',
      pages: '45페이지',
      period: '3주',
    },
    image: portfolioImage9,
  },
  {
    id: 10,
    company: '전문 서비스업',
    industry: 'IT/서비스',
    type: '회사소개서',
    tags: ['IT', '블록체인', '회사소개', '투자유치'],
    attributes: {
      documentType: 'PDF',
      pages: '30페이지',
      period: '2주',
    },
    image: portfolioImage10,
  },
  {
    id: 11,
    company: '언어 및 학원서비스업',
    industry: '교육서비스업',
    type: '회사소개서',
    tags: ['IT', '스마트웨어', '회사소개', '투자유치'],
    attributes: {
      documentType: 'PDF',
      pages: '30페이지',
      period: '2주',
    },
    image: portfolioImage11,
  },
  {
    id: 12,
    company: '바이오메디 관련 플랫폼 사업',
    industry: '바이오/헬스케어',
    type: '사업계획서',
    tags: ['바이오', '헬스케어', '의료기기', '정부과제'],
    attributes: {
      documentType: 'PPT',
      pages: '42페이지',
      period: '3주',
    },
    image: portfolioImage2,
  },
];

export function PortfolioSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 2;
  const totalPages = Math.ceil(portfolioData.length / itemsPerPage);

  const startIndex = currentPage * itemsPerPage;
  const currentItems = portfolioData.slice(startIndex, startIndex + itemsPerPage);

  const handlePrevious = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 헤더 */}
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-blue-600 font-semibold text-sm sm:text-base">PORTFOLIO</span>
          <h2 className="mt-2 mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">포트폴리오</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed">
            원스타트컴퍼니가 제작한<br className="hidden sm:block" />
            사업계획서 & 회사소개서 디자인
          </p>
          <p className="text-sm sm:text-base text-gray-500 mt-4 leading-relaxed">
            💡 <span className="font-semibold">비밀유지 서약</span> - 모든 내용은 블러 처리되어 있습니다. 실제 프로젝트는 완전한 비밀유지하에 진행됩니다.
          </p>
        </motion.div>

        {/* 포트폴리오 리스트 */}
        <div className="min-h-[1000px] sm:min-h-[1200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="space-y-12 sm:space-y-16 md:space-y-20"
            >
              {currentItems.map((portfolio, index) => (
                <motion.div
                  key={portfolio.id}
                  className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-100"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* 이미지 */}
                  <motion.div 
                    className="relative group overflow-hidden rounded-2xl bg-gray-100 shadow-md hover:shadow-xl transition-all duration-500 mb-6"
                    whileHover={{ scale: 1.01, y: -3 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="aspect-[16/9]">
                      <ImageWithFallback
                        src={portfolio.image}
                        alt={`${portfolio.company} ${portfolio.type}`}
                        className="w-full h-full object-cover blur-[10px] group-hover:blur-[4px] transition-all duration-500"
                      />
                      {/* 그라디언트 오버레이 */}
                      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/30 opacity-70 group-hover:opacity-40 transition-opacity duration-500"></div>
                    </div>
                  </motion.div>

                  {/* 회사 정보 */}
                  <div className="mb-6">
                    <h3 className="text-2xl sm:text-3xl text-gray-900 mb-2">
                      {portfolio.company}
                    </h3>
                    <p className="text-gray-500 text-base sm:text-lg">
                      {portfolio.type} <span className="text-gray-400">· {portfolio.industry}</span>
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 페이지네이션 컨트롤 */}
        <motion.div 
          className="mt-12 sm:mt-16 flex items-center justify-center gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* 좌우 버튼 + 페이지 표시 */}
          <button
            onClick={handlePrevious}
            className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white border-2 border-gray-200 hover:border-blue-600 hover:bg-blue-50 transition-all duration-300 shadow-md hover:shadow-lg"
            aria-label="이전 페이지"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          {/* 페이지 번호 표시 */}
          <div className="flex items-center gap-2 sm:gap-3">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`flex items-center justify-center transition-all duration-300 ${
                  currentPage === index
                    ? 'w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-600 text-white shadow-lg scale-110'
                    : 'w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white border-2 border-gray-200 text-gray-600 hover:border-blue-400 hover:bg-blue-50'
                }`}
                aria-label={`페이지 ${index + 1}`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <button
            onClick={handleNext}
            className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white border-2 border-gray-200 hover:border-blue-600 hover:bg-blue-50 transition-all duration-300 shadow-md hover:shadow-lg"
            aria-label="다음 페이지"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </motion.div>

        {/* 하단 안내 */}
        <motion.div 
          className="mt-12 sm:mt-16 md:mt-20 text-center bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 sm:p-12 md:p-16 border-2 border-blue-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-4">
            전문가가 제작하는 맞춤형 디자인
          </h3>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl mb-8 leading-relaxed">
            사업계획서, 회사소개서, IR 자료 등 <br className="sm:hidden" />
            업종별 맞춤 디자인을 제공합니다
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 sm:px-10 py-4 rounded-full font-semibold text-base sm:text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            디자인 제작 문의하기
          </button>
        </motion.div>
      </div>
    </section>
  );
}