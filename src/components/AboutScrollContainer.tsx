import { useState } from 'react';
import { AboutVisionSection } from './AboutVisionSection';
import { OrganizationSection } from './OrganizationSection';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function AboutScrollContainer() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 2;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="relative">
      {/* 슬라이드 컨테이너 */}
      <div 
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        <div className="min-w-full">
          <AboutVisionSection />
        </div>
        <div className="min-w-full">
          <OrganizationSection />
        </div>
      </div>

      {/* 네비게이션 버튼 */}
      <button
        onClick={prevSlide}
        className="fixed left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all z-20 border border-white/20"
        aria-label="이전 슬라이드"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="fixed right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all z-20 border border-white/20"
        aria-label="다음 슬라이드"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}