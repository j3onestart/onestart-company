import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { ContactDialog } from './ContactDialog';
import { motion, AnimatePresence } from 'motion/react';

const heroImages = [
  'https://images.unsplash.com/photo-1694702740570-0a31ee1525c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjE3Mzg2MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1758518730384-be3d205838e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMG9mZmljZXxlbnwxfHx8fDE3NjE3NDk3MDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1670851050245-d861fd433d06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3Jrc3BhY2UlMjB0ZWFtfGVufDF8fHx8MTc2MTc2Nzk1NXww&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1686100509061-f05807314c38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBtZWV0aW5nJTIwcm9vbXxlbnwxfHx8fDE3NjE3NDQ2NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
];

export function HeroSection() {
  const [contactDialogOpen, setContactDialogOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // 5초마다 이미지 변경

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative bg-gradient-to-br from-slate-800 to-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      
      {/* Sliding Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.2, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url('${heroImages[currentImageIndex]}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </AnimatePresence>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? 'w-8'
                : 'bg-white/40 hover:bg-white/60'
            }`}
            style={index === currentImageIndex ? { backgroundColor: '#0065b3' } : {}}
            aria-label={`슬라이드 ${index + 1}`}
          />
        ))}
      </div>
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-28 lg:py-32">
        <div className="max-w-3xl">
          <div className="mb-4 sm:mb-6">
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 border rounded-full text-xs sm:text-sm" style={{ backgroundColor: 'rgba(0, 101, 179, 0.2)', borderColor: 'rgba(0, 101, 179, 0.4)' }}>
              Business Management, Since 2016
            </span>
          </div>
          <h1 className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            중소기업의 성공을 위한<br />
            든든한 파트너, 원스타트컴퍼니
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 max-w-2xl">
            예비창업자, 소상공인, 스타트업 전문가가 필요한 순간,<br className="hidden sm:block" />
            2016년부터 쌓아온 탄탄한 네트워크와 전문성으로 함께합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button 
              size="lg" 
              className="text-white"
              style={{ backgroundColor: '#0065b3' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#004f8a'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0065b3'}
              onClick={() => setContactDialogOpen(true)}
            >
              무료 상담 신청하기
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
              onClick={() => {
                const element = document.getElementById('services');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              사업영역 소개
            </Button>
          </div>
        </div>
      </div>

      {/* Contact Dialog */}
      <ContactDialog open={contactDialogOpen} onOpenChange={setContactDialogOpen} />
    </section>
  );
}